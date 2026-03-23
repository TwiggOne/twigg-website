"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import { Header } from "./Header";
import HeroSectionV2 from "./HeroSectionV2"; // ✅ NOT dynamic

// ✅ Dynamic imports for below-the-fold sections
const ProblemSection = dynamic(() => import("./ProblemSection"));
const ProblemSectionMobile = dynamic(() => import("./ProblemSectionMobile"));
const Features = dynamic(() => import("./FeatureSection"));
const Trust = dynamic(() => import("./Trust"));
const TryOutSection = dynamic(() => import("./TryOutSection"));
const HowItWorks = dynamic(() => import("./HowItWorks"));

export function Landing() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1010);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#152D23] w-full">
      <Header />

      {/* ✅ Fast loading Hero */}
      <div className="mx-auto max-w-7xl pt-10">
        <HeroSectionV2 />
      </div>

      {/* ⬇️ Lazy loaded sections */}
      <div className="mx-auto max-w-7xl px-[20px] md:px-[20px]">
        {isMobileView ? (
          <ProblemSectionMobile />
        ) : (
          <>
            <div className="h-[90px]" />
            <ProblemSection />
          </>
        )}
        <Features />
      </div>

      <div className="mx-auto max-w-7xl px-[20px] md:px-0">
        <HowItWorks />
        <Trust />

        <div className="h-[150px]" />
        <TryOutSection />
        <div className="h-[150px]" />
      </div>
    </div>
  );
}