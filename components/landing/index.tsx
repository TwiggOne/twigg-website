"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import { Header } from "./Header";
import HeroSectionV2 from "./HeroSectionV2";

// Dynamic imports
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

      {/* Hero */}
      <div id="home" className="mx-auto max-w-7xl pt-10">
        <HeroSectionV2 />
      </div>

      {/* Problem + Features */}
      <div className="mx-auto max-w-7xl px-[20px] md:px-[20px]">
        <div id="">
          {isMobileView ? (
            <ProblemSectionMobile />
          ) : (
            <>
              <div className="h-[90px]" />
              <ProblemSection />
            </>
          )}
          <div id="features">
            {" "}
            <Features />
          </div>
        </div>
      </div>

      {/* How it works */}
      <div id="how-it-works" className="mx-auto max-w-7xl px-[20px] md:px-0">
        <HowItWorks />
      </div>

      {/* Security (mapped to Trust section) */}
      <div id="security" className="mx-auto max-w-7xl px-[20px] md:px-0">
        <div className="pb-[72px] md:pb-[225px]">
          
        </div>
        <Trust />
      </div>

      {/* CTA / Try out */}
      <div className="mx-auto max-w-7xl px-[20px] md:px-0">
        <div className="h-[72px] md:h-[150px]" />
        <TryOutSection />
        <div className="h-[150px]" />
      </div>
    </div>
  );
}
