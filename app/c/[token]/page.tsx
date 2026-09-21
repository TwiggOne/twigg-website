// A challenge invite link opened without the app: https://twigg.one/c/<token>.
//
// With Twigg installed the link opens the app (the app-link files in
// public/.well-known claim every path). Without it, the browser lands here:
// what the invite is — who, what, how long, how many are in — and the way to
// get the app. No amounts: the preview endpoint carries none, and nobody's
// cap is anyone else's business. If the preview can't be read, a plain
// invite still gets them to the app.

import type { Metadata } from "next";
import StoreButtons from "./StoreButtons";

type Preview = {
  title: string;
  scope_key: string;
  owner_name: string;
  challenge_type: string;
  scope_label: string;
  scope_members: string[];
  member_count: number;
  member_cap: number;
  days_left: number;
  window_days: number;
  joinable: boolean;
  closed_reason: string;
  link_expires_on: string | null;
};

// The production API; override per deploy (a dev site pointing at dev).
const API = process.env.TWIGG_API_URL ?? "https://api.twigg.one/api";

export const metadata: Metadata = {
  title: "You're invited to a challenge · Twigg",
  description: "Run a spending challenge together on Twigg — everyone sets their own cap.",
  robots: { index: false, follow: false },
};

async function preview(token: string): Promise<Preview | null> {
  if (!/^[A-Za-z0-9_-]{8,64}$/.test(token)) return null;
  try {
    const res = await fetch(`${API}/v1/challenges/group/preview/${encodeURIComponent(token)}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return null;
    return (await res.json()) as Preview;
  } catch {
    return null;
  }
}

function firstName(name: string): string {
  return (name || "").trim().split(/\s+/)[0] || "A friend";
}

function headline(p: Preview): string {
  // A merchant keeps its own name ("Swiggy"); a category reads in the sentence.
  const label = p.scope_label || "this";
  const scope = (p.scope_key || "").startsWith("merchant:") ? label : label.toLowerCase();
  return p.challenge_type === "category_freeze"
    ? `Go ${p.window_days} days without ${scope}`
    : `Keep ${scope} under your own cap for ${p.window_days} days`;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "23 Sep", as the app writes it — not the locale's "23 Sept". */
function day(iso: string | null): string | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
  return m ? `${Number(m[3])} ${MONTHS[Number(m[2]) - 1]}` : null;
}

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-[#BC9313]/40 px-3 py-1 text-[13px] text-[#FDF9F0]/85">
    {children}
  </span>
);

export default async function InvitePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const p = await preview(token);
  const owner = p ? firstName(p.owner_name) : null;
  const closes = p ? day(p.link_expires_on) : null;

  return (
    <main className="w-full bg-[#152D23] px-5 pt-28 pb-20 sm:pt-36">
      <div className="mx-auto flex max-w-[560px] flex-col gap-6">
        <p className="font-switzer text-[15px] text-[#FDF9F0]/75">
          {owner ? `${p!.owner_name} invited you to run a challenge together` : "You've been invited to a challenge on Twigg"}
        </p>

        {p ? (
          <>
            <h1 className="font-bricolage text-[30px] font-semibold leading-[110%] text-[#FDF9F0] sm:text-[44px]">
              {headline(p)}
            </h1>
            <div className="flex flex-wrap gap-2">
              <Chip>{p.member_count} {p.member_count === 1 ? "person" : "people"} in</Chip>
              <Chip>{p.days_left} {p.days_left === 1 ? "day" : "days"} left</Chip>
              {p.joinable && closes && <Chip>Joining closes {closes}</Chip>}
            </div>
            {p.scope_members.length > 0 && (
              <p className="font-switzer text-[15px] text-[#FDF9F0]/80">
                Counts spending at {p.scope_members.join(", ")}.
              </p>
            )}
            {!p.joinable && (
              <div className="rounded-2xl bg-[#FDF9F0]/10 p-5">
                <p className="font-switzer text-[16px] font-semibold text-[#FDF9F0]">This one can&apos;t be joined</p>
                <p className="mt-1 font-switzer text-[15px] text-[#FDF9F0]/80">{p.closed_reason}</p>
              </div>
            )}
          </>
        ) : (
          <h1 className="font-bricolage text-[30px] font-semibold leading-[110%] text-[#FDF9F0] sm:text-[44px]">
            Run a spending challenge <span className="text-[#BC9313]">together</span>
          </h1>
        )}

        <div className="rounded-2xl border border-[#BC9313]/30 p-5">
          <p className="font-switzer text-[16px] font-semibold text-[#FDF9F0]">Your cap is yours</p>
          <p className="mt-1 font-switzer text-[15px] leading-[140%] text-[#FDF9F0]/80">
            Everyone sets their own number from what they actually spend. The group sees names,
            ranks and how each person is doing against their own cap — never anyone&apos;s amounts.
          </p>
        </div>

        {p && !p.joinable ? (
          <p className="font-switzer text-[15px] leading-[140%] text-[#FDF9F0]/85">
            You can still start one of your own in Twigg, with your own cap — and invite whoever you like.
          </p>
        ) : (
        <ol className="flex flex-col gap-3 font-switzer text-[15px] leading-[140%] text-[#FDF9F0]/85">
          <li><span className="text-[#BC9313]">1.</span> Get Twigg and connect your accounts through the RBI Account Aggregator framework. Twigg reads statements — it can&apos;t move money.</li>
          <li><span className="text-[#BC9313]">2.</span> Open this invite again on your phone. It opens in Twigg, where you set your cap and ask to join{owner ? `; ${owner} lets people in` : ""}.</li>
          <li><span className="text-[#BC9313]">3.</span> Card and bank spending both count. Keep it for the window and earn points, redeemable for real value.</li>
        </ol>
        )}

        <StoreButtons />
      </div>
    </main>
  );
}
