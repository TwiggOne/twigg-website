"use client";
import { Container } from "../container";
import CTASection from "./CTASection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import { Header } from "./Header";
import HeroSection from "./HeroSection";
import { Trust } from "./Trust";
import { Features } from "./FeatureSection";
import { ProblemSection } from "./ProblemSection";
import { CommingSoon } from "./ComingSoon";

export function Landing() {
  return (
    <div className="bg-[#152D23] min-w-screen min-h-screen">
      <Header />
      <div className="mx-auto max-w-7xl  pt-10">
        <HeroSection />
      </div>

      <div className="py-20">
          <CommingSoon />
      
      </div>

      <div className="mx-auto max-w-7xl ">
        <ProblemSection />
        <Features />
      </div>

      <div className="mx-auto max-w-7xl ">
        <Trust />
        <CTASection />
        <FAQSection />
      </div>

      <Footer />
    </div>
  );
}
