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
import {
  TwiggConnectContent,
  TwiggConnectSideContent,
} from "../ui/components/TwiggConnectContent";
import TwiggPulseContent from "../ui/components/TwiggPulseContent";

// =========================================================================
// Features Component
// =========================================================================
export const Features = () => {
  return (
    <section className="bg-[#152D23] py-28 text-[#FDF9F0]">
      <Container>
        {/* Heading */}
        <div className="flex flex-col items-start gap-4 text-start">
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
        <div className="h-[95px]" />
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
          content={<TwiggConnectContent />}
          sideContent={<TwiggConnectSideContent />}
          label="Twigg Connect"
          title="All-in-One Platform One place."
          description="Bank accounts, investments, insurance, and loans — securely linked in one place via the RBI's Account Aggregator framework and credit bureau. No more app-switching."
        />
      </div>

      {/* div2 */}
      <div className="col-start-3 col-end-4 row-start-1 row-end-2">
        <FeatureCard
          content={
          <TwiggPulseContent />
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
  sideContent?: ReactNode;
}
export function FeatureCard({
  label,
  title,
  description,
  sideContent,
  content,
}: FeatureCardProps) {
  return (
    <div className="feature-card w-full h-full">
      <div className="feature-card-inner px-[24px] py-[32px] h-full flex flex-col justify-between">
        {/* TOP CONTENT */}
        <div className="flex flex-row h-full w-full">
          <div className="flex flex-col justify-between ">
            {" "}
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
          {sideContent && (
            <div className="flex items-center justify-center w-full h-full">
              {sideContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;
// NOTE: The rest of the Features and FeaturesCardsWrapper components remain the same as the previous full solution.
