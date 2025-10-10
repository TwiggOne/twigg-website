"use client";
import React from "react";
import { motion } from "motion/react";
import { Container } from "../container";
import Image from "next/image";

export const Features = () => {
  return (
    <section className="bg-[#152D23] py-28 text-[#FDF9F0]">
      <Container>
        {/* Heading */}
        <div className="text-center mb-24 space-y-3 font-bricolage">
          <h2 className="text-[56px] font-bold tracking-tight">
            With Twigg,{" "}
            <span className="text-[#FDF9F0]">Confusion → Clarity</span>
          </h2>
          <p className="text-[24px] font-switzer text-[#FDF9F0]/80 max-w-xl mx-auto">
            Track, save, invest smarter! Your money made simple, your future secured.
          </p>
        </div>

        <div className="relative flex justify-center items-center h-[300px] md:h-[400px] w-full overflow-hidden">
      {/* Glow Effect Background */}
      <div className="absolute w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-[#BC9313]/50 blur-[40px] z-0" />

  

      {/* Middle Circle */}
      <div className="absolute w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full border-10 border-[#FDF9F0]/3 z-10" />

      {/* Inner Circle */}
      <div className="absolute w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-10 border-[#FDF9F0]/3 z-10" />

      {/* Left Line */}
      <div
        className="absolute w-[200px] md:w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#BC9313] to-transparent z-10"
        style={{
          top: "50%",
          left: "225px",
          transform: "translateY(-50%) rotate(0deg)",
        }}
      />

      {/* Right Line */}
      <div
        className="absolute w-[200px] md:w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#BC9313] to-transparent z-10"
        style={{
          top: "50%",
          right: "225px",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      />

      {/* Logo */}
      <div className="relative z-20">
        <Image
          src="/logo(1).png"
          alt="Central Logo"
          width={150}
          height={150}
          className=""
          style={{
            transform: "rotate(45deg)",
            filter: "drop-shadow(0px 232px 65px rgba(0, 0, 0, 0.01)) drop-shadow(0px 149px 59px rgba(0, 0, 0, 0.1)) drop-shadow(0px 84px 50px rgba(0, 0, 0, 0.32)) drop-shadow(0px 37px 37px rgba(0, 0, 0, 0.55)) drop-shadow(0px 9px 20px rgba(0, 0, 0, 0.64))",
          }}
        />
      </div>
    </div>

        {/* Feature Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-10 justify-center">
          <FeatureCard
            title="All-In-One Platform"
            description="Expenses, loans, credit cards, investments, and insurance in real time."
            iconSrc="/Sol_img1.png"
          />
          <FeatureCard
            title="AI + Expert Hybrid"
            description="Instant clarity from AI, human expertise for trust and reassurance."
            iconSrc="/img2.png"
          />
          <FeatureCard
            title="No More FOMO"
            description="See how you stack up against peers, learn and grow with context."
            iconSrc="/Sol_img3.png"
          />
        </div>
      </Container>
    </section>
  );
};

// FeatureCard component remains the same
function FeatureCard({ title, description, iconSrc }:{
    title: string;
    description: string;
    iconSrc: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative bg-gradient-to-b from-[#214838] to-[#10261F] rounded-[20px] shadow-[0_37px_37px_rgba(0,0,0,0.25)] flex flex-col items-center text-center p-8"
      style={{
        width: "373px",
        height: "431px",
        border: "1px solid rgba(188, 147, 19, 0.6)",
      }}
    >
      <div className="h-[192px] flex items-center justify-center mb-6">
        <img
          src={iconSrc}
          alt={title}
          
          className="w-60 h-60 object-contain drop-shadow-[0_9px_20px_rgba(0,0,0,0.6)]"
        />
      </div>
      <h3 className="text-2xl font-bricolage font-semibold text-[#FDF9F0] mb-3">
        {title}
      </h3>
      <p className="text-[#FDF9F0]/80 font-switzer text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </motion.div>
  );
}
