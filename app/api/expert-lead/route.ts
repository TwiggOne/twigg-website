import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const dynamic = "force-dynamic";

const RATE_LIMIT = 5; // submissions per IP per window
const RATE_WINDOW_MS = 60_000;
const FORWARD_TIMEOUT_MS = 8_000;

// Best-effort, per-instance limiter; fine for stopping casual abuse.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t > RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function clientIp(req: NextRequest): string {
  return (
    req.headers.get("x-nf-client-connection-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function maskPhone(phone: string): string {
  return phone.length > 4 ? `${phone.slice(0, 3)}${"*".repeat(phone.length - 5)}${phone.slice(-2)}` : "****";
}

const optionalText = (max: number) => z.string().trim().max(max).optional().default("");

const leadSchema = z.object({
  topic: z.enum(["insurance", "home_loan"]),
  answers: z.record(z.string().max(40), z.string().trim().max(100)).refine((a) => Object.keys(a).length <= 10),
  name: z.string().trim().min(1).max(80),
  phone: z.string().transform((value, ctx) => {
    const parsed = parsePhoneNumberFromString(value, "IN");
    if (!parsed || !parsed.isValid() || parsed.country !== "IN" || !/^[6-9]\d{9}$/.test(parsed.nationalNumber)) {
      ctx.addIssue({ code: "custom", message: "invalid phone" });
      return z.NEVER;
    }
    return parsed.number; // E.164
  }),
  city: optionalText(80),
  whatsapp_consent: z.boolean(),
  utm_source: optionalText(200),
  utm_medium: optionalText(200),
  utm_campaign: optionalText(200),
  utm_content: optionalText(200),
  fbclid: optionalText(500),
  page_path: optionalText(200),
  ad_ref: z.enum(["INS", "HL"]),
  website: z.string().max(200).optional().default(""), // honeypot, real users leave it empty
});

function fail(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(req: NextRequest) {
  if (rateLimited(clientIp(req))) return fail("rate_limited", 429);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return fail("invalid_json", 400);
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) return fail("invalid_input", 400);
  const { website, ...lead } = parsed.data;

  // Bots fill the hidden field; pretend it worked and drop the lead.
  if (website) return NextResponse.json({ ok: true });

  const url = process.env.EXPERT_LEADS_API_URL;
  const secret = process.env.EXPERT_LEADS_SECRET;
  if (!url || !secret) {
    console.error("expert-lead: EXPERT_LEADS_API_URL / EXPERT_LEADS_SECRET not configured");
    return fail("not_configured", 500);
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Lead-Secret": secret },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(FORWARD_TIMEOUT_MS),
    });
    if (!res.ok) {
      console.error(`expert-lead: backend responded ${res.status} for ${lead.topic} lead ${maskPhone(lead.phone)}`);
      return fail("upstream_error", 502);
    }
  } catch (err) {
    console.error(`expert-lead: backend request failed for ${lead.topic} lead ${maskPhone(lead.phone)}`, err instanceof Error ? err.name : err);
    return fail("upstream_error", 502);
  }

  return NextResponse.json({ ok: true });
}
