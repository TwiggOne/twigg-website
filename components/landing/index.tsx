
"use client";
import { Container } from "../container";
import CTASection from "./CTASection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import { Header } from "./Header";
import  HeroSection  from "./HeroSection";
import { Trust } from "./Trust";
import { Features } from "./FeatureSection";
import { ProblemSection } from "./ProblemSection";
import { CommingSoon } from "./ComingSoon";

export function Landing() {
  return (
    <div className="bg-[#152D23] min-w-screen min-h-screen">
      <Header />
        <Container className="pt-10"> 
          <HeroSection/>
        </Container>
        <CommingSoon />
        <Container >
          <ProblemSection />
          <Features/>
          </Container>
          <Trust/>
          <Container>
          <CTASection />
          <FAQSection />
        </Container>
      <Footer />
    </div>
  );
}




