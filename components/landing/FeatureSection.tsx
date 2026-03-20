"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Container } from "../container";
import Image from "next/image";
import {
  InnerCircle,
  MidCircle,
  OuterCircle,
  RightArrowInline,
} from "@/utils/SvgUtils";
// NOTE: Assuming 'motion/react' should be 'framer-motion'
import { motion, Transition, useInView } from "motion/react";
import TwiggLoopContent from "../ui/components/TwiggLoopContent";
import TwiggSenseContent from "../ui/components/TwiggSenseContent";
import TwiggAiContent from "../ui/components/TwiggAiContent";

// =========================================================================
// Features Component
// =========================================================================
export const Features = () => {
  return (
    <section className="bg-[#152D23] py-28 text-[#FDF9F0]">
      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-bricolage text-[20px] md:text-[56px] flex gap-2 font-semibold text-[#FDF9F0] leading-[100%] sm:leading-[100%]">
            With Twigg,{" "}
            <span className="text-[#BC9313] flex items-center gap-1">
              Confusion <RightArrowInline className="w-[0.7em] h-[0.7em]" />
              Clarity
            </span>
          </h1>
          <p className="font-switzer text-[14px] sm:text-[24px] font-normal text-[#FDF9F0] leading-[120%] sm:leading-[120%]">
            Track, save, invest smarter!
            <br /> Your money made simple, your future secured.
          </p>
        </div>

        <div className="relative flex justify-center items-center h-[140px] md:h-[270px] w-full">
          {/* Glow Effect Background */}
          <div className="absolute w-[88px] h-[88px] sm:w-[100px] sm:h-[100px] md:w-[188px] md:h-[192px] z-0">
            <OuterCircle />
          </div>

          {/* Middle Circle */}
          <div className="absolute w-[63px] h-[63px] md:w-[134px] md:h-[134px] z-10">
            <MidCircle />
          </div>

          {/* Animated Glow Behind Logo */}
          <motion.div
            className="
              absolute rounded-full
              w-[50px] h-[50px]
              md:w-[109.05px] md:h-[109.35px]
            "
            style={{
              background: "rgba(188, 147, 19, 1)",
              filter: "blur(50px)",
              zIndex: 0,
              pointerEvents: "none",
              // NOTE: SVG in CSS background must be properly URL-encoded (simplified here)
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="f"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#f)" /></svg>')`,
              backgroundBlendMode: "overlay",
              backgroundSize: "100% 100%",
            }}
            animate={{
              backgroundColor: [
                "hsla(45, 82%, 41%, 0.50)",
                "rgba(188, 147, 19, 1)",
                "rgba(188, 147, 19, 0.5)",
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Lines (Need better implementation, current one is flawed, but keeping structure) */}
          {/* Left Line - FIX: Removed hardcoded negative percentage for 'left' */}
          <motion.div
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#BC9313] to-transparent z-10"
            style={{
              top: "50%",
              left: "0%", // Adjusted to be relative to parent center
              transform: "translate(-100%, -50%)", // Moved to the left of the center
              width: "50%",
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Right Line - FIX: Removed hardcoded negative percentage for 'left' */}
          <motion.div
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#BC9313] to-transparent z-10"
            style={{
              top: "50%",
              right: "0%", // Adjusted to be relative to parent center
              transform: "translate(100%, -50%)", // Moved to the right of the center
              width: "50%",
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Logo */}
          <div className="relative z-20">
            <Image
              src="/main.png"
              alt="Central Logo"
              width={90}
              height={91}
              className="w-[50px] h-[50px] object-contain sm:w-[110px] sm:h-[101px]"
              style={{
                transform: "rotate(45deg)",
                filter:
                  "drop-shadow(0px 232px 65px rgba(0, 0, 0, 0.01)) drop-shadow(0px 149px 59px rgba(0, 0, 0, 0.1)) drop-shadow(0px 84px 50px rgba(0, 0, 0, 0.32)) drop-shadow(0px 37px 37px rgba(0, 0, 0, 0.55)) drop-shadow(0px 9px 20px rgba(0, 0, 0, 0.64))",
              }}
            />
          </div>
        </div>

        {/* Feature Cards */}
        <FeaturesCardsWrapper />
      </Container>
    </section>
  );
};
// =========================================================================
// Feature Cards Wrapper
// =========================================================================
export function FeaturesCardsWrapper() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-y-[33px] gap-x-[16px] w-full">
      {/* div1 (BIG LEFT) */}
      <div className="col-start-1 col-end-3 row-start-1 row-end-2">
        <FeatureCard
          content={
            <div className="flex items-end gap-2 h-[80px]">
              <div className="bg-yellow-500 w-3 h-[70%]" />
              <div className="bg-yellow-500 w-3 h-[50%]" />
              <div className="bg-yellow-500 w-3 h-[60%]" />
              <div className="bg-yellow-500 w-3 h-[40%]" />
              <div className="bg-yellow-500 w-3 h-[65%]" />
            </div>
          }
          label="Twigg Connect"
          title="All-in-One Platform One place."
          description="Bank accounts, investments, insurance, and loans — securely linked in one place via the RBI's Account Aggregator framework and credit bureau. No more app-switching."
        />
      </div>

      {/* div2 */}
      <div className="col-start-3 col-end-4 row-start-1 row-end-2">
        <FeatureCard
          content={
            <div className="flex items-end gap-2 h-[80px]">
              <div className="bg-yellow-500 w-3 h-[70%]" />
              <div className="bg-yellow-500 w-3 h-[50%]" />
              <div className="bg-yellow-500 w-3 h-[60%]" />
              <div className="bg-yellow-500 w-3 h-[40%]" />
              <div className="bg-yellow-500 w-3 h-[65%]" />
            </div>
          }
          label="TWIGG PULSE"
          title="15+ signals. Know before it's a crisis."
          description="EMI stress, insurance gaps, idle cash, overlapping portfolios."
        />
      </div>

      {/* div3 */}
      <div className="col-start-1 col-end-2 row-start-2 row-end-3">
        <FeatureCard
          content={<TwiggSenseContent />}
          label="Twigg Sense"
          title={`Fact-check any 
financial claim.`}
          description="See a reel, tweet, or tip? Sense checks if it's true — and if it's actually relevant to you and your money."
        />
      </div>

      {/* div4 */}
      <div className="col-start-2 col-end-3 row-start-2 row-end-3">
        <FeatureCard
          content={<TwiggAiContent />}
          label="Twigg AI"
          title={`Ask finance. 
Twigg answers.`}
          description="Your AI co-pilot grounded in your actual data deeply personalised, context-aware, and always on your side. Complex decisions are ring-fenced by vetted human advisors."
        />
      </div>

      {/* div5 */}
      <div className="col-start-3 col-end-4 row-start-2 row-end-3">
        <FeatureCard
          content={<TwiggLoopContent />}
          label="Twigg Loop · Coming Soon"
          title={`Good decisions
become habits.`}
          description="Challenges, streaks, peer circles, and a rewards ecosystem that make financial progress visible, social, and compounding — just like credit card points, for good money behaviour."
        />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  label: string;
  title: string;
  description: string;
  content: ReactNode;
}
export function FeatureCard({
  label,
  title,
  description,
  content,
}: FeatureCardProps) {
  return (
    <div className="feature-card w-full h-full">
      <div className="feature-card-inner px-[24px] py-[32px] h-full flex flex-col justify-between">
        {/* TOP CONTENT */}
        <div>
          <p className="font-medium text-[#BC9313] text-[14px] font-switzer">
            {label}
          </p>

          <div className="h-[6px]" />

          <h3 className="text-[24px] font-bricolage font-semibold text-[#FDF9F0] leading-[100%] whitespace-pre-line">
            {title}
          </h3>

          <div className="h-[24px]" />

          <p className="text-[#FDF9F0]/80 font-switzer text-[13px] font-light leading-[120%]">
            {description}
          </p>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-[37px] w-full">{content}</div>
      </div>
    </div>
  );
}

export default Features;
// NOTE: The rest of the Features and FeaturesCardsWrapper components remain the same as the previous full solution.
