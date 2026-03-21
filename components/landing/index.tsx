"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import { Header } from "./Header";
import CommingSoon from "./ComingSoon";
import ProblemSectionMobile from "./ProblemSectionMobile";
import TryOutSection from "./TryOutSection";
import HeroSectionV2 from "./HeroSectionV2";
import HowItWorks from "./HowItWorks";

const ProblemSection = dynamic(() => import("./ProblemSection"), {
  ssr: false,
});
const Features = dynamic(() => import("./FeatureSection"), { ssr: false });
const Trust = dynamic(() => import("./Trust"), { ssr: false });
const CTASection = dynamic(() => import("./CTASection"), { ssr: false });

export function Landing() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1010);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#152D23] w-full">
      <Header />

      <div className="mx-auto max-w-7xl pt-10">
        <HeroSectionV2 />
      </div>

      <div className="mx-auto max-w-7xl px-[20px] md:px-[20px]">
        {isMobileView ? (
          <ProblemSectionMobile />
        ) : (
          <>
            {" "}
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
