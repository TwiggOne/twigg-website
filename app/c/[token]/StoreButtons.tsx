"use client";

// The store for this device first; both, on anything else.

import { useEffect, useState } from "react";

const APP_STORE = "https://apps.apple.com/in/app/twigg-one/id6758598241";
const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.aadyantx.twigg";

export default function StoreButtons() {
  const [os, setOs] = useState<"ios" | "android" | "other">("other");
  useEffect(() => {
    const ua = navigator.userAgent || "";
    setOs(/iPad|iPhone|iPod/.test(ua) ? "ios" : /android/i.test(ua) ? "android" : "other");
  }, []);

  const stores = [
    { key: "ios", href: APP_STORE, label: "Download on the App Store" },
    { key: "android", href: PLAY_STORE, label: "Get it on Google Play" },
  ].filter((s) => os === "other" || s.key === os);

  return (
    <div className="flex flex-col gap-3 pt-2">
      {stores.map((s) => (
        <a
          key={s.key}
          href={s.href}
          className="rounded-full bg-[#BC9313] px-6 py-3 text-center font-switzer text-[16px] font-semibold text-[#FDF9F0]"
        >
          {s.label}
        </a>
      ))}
      <p className="text-center font-switzer text-[13px] text-[#FDF9F0]/60">
        Already have Twigg? Open this link on your phone and it opens in the app.
      </p>
    </div>
  );
}
