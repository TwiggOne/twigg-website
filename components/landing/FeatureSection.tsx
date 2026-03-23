"use client";
import React, { ReactNode, useRef } from "react";
import { Container } from "../container";
import { RightArrowInline } from "@/utils/SvgUtils";
import { motion, useInView } from "motion/react";
import TwiggLoopContent from "../ui/components/TwiggLoopContent";
import TwiggSenseContent from "../ui/components/TwiggSenseContent";
import TwiggAiContent from "../ui/components/TwiggAiContent";
import {
  TwiggConnectContent,
  TwiggConnectSideContent,
} from "../ui/components/TwiggConnectContent";
import TwiggPulseContent from "../ui/components/TwiggPulseContent";

export const Features = () => {
  return (
    <section className="bg-[#152D23] py-[72px] md:py-28 text-[#FDF9F0]">
      <Container>
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
        <div className="h-[50px] md:h-[95px]" />
        <FeaturesCardsWrapper />
      </Container>
    </section>
  );
};

// ── Individual animated card wrapper with its own inView ref ──
function AnimatedCard({
  gridClass,
  children,
}: {
  gridClass: string;
  children: ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={gridClass}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function FeaturesCardsWrapper() {
  const cards = [
    {
      gridClass: "col-start-1 col-end-3 row-start-1 row-end-2",
      props: {
        content: <TwiggConnectContent />,
        sideContent: <TwiggConnectSideContent />,
        label: "Twigg Connect",
        title: "All-in-One Platform One place.",
        description:
          "Bank accounts, investments, insurance, and loans — securely linked in one place via the RBI's Account Aggregator framework and credit bureau. No more app-switching.",
      },
    },
    {
      gridClass: "col-start-3 col-end-4 row-start-1 row-end-2",
      props: {
        content: <TwiggPulseContent />,
        label: "TWIGG PULSE",
        title: "15+ signals. Know before it's a crisis.",
        description:
          "EMI stress, insurance gaps, idle cash, overlapping portfolios.",
      },
    },
    {
      gridClass: "col-start-1 col-end-2 row-start-2 row-end-3",
      props: {
        content: <TwiggSenseContent />,
        label: "Twigg Sense",
        title: `Fact-check any \nfinancial claim.`,
        description:
          "See a reel, tweet, or tip? Sense checks if it's true — and if it's actually relevant to you and your money.",
      },
    },
    {
      gridClass: "col-start-2 col-end-3 row-start-2 row-end-3",
      props: {
        content: <TwiggAiContent />,
        label: "Twigg AI",
        title: `Ask finance. \nTwigg answers.`,
        description:
          "Your AI co-pilot grounded in your actual data deeply personalised, context-aware, and always on your side. Complex decisions are ring-fenced by vetted human advisors.",
      },
    },
    {
      gridClass: "col-start-3 col-end-4 row-start-2 row-end-3",
      props: {
        content: <TwiggLoopContent />,
        label: "Twigg Loop · Coming Soon",
        title: `Good decisions\nbecome habits.`,
        description:
          "Challenges, streaks, peer circles, and a rewards ecosystem that make financial progress visible, social, and compounding — just like credit card points, for good money behaviour.",
      },
    },
  ];

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-y-[33px] gap-x-[16px] w-full">
      {cards.map((card, index) => (
        <AnimatedCard key={index} gridClass={card.gridClass}>
          <FeatureCard {...card.props} />
        </AnimatedCard>
      ))}
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
      <div className="feature-card-inner px-[14px] md:px-[24px] py-[22px] md:py-[32px] h-full flex flex-col justify-between">
        <div className="flex flex-row h-full w-full">
          <div className="flex flex-col justify-between w-full">
            <div>
              <p className="font-medium text-[#BC9313] text-[12px] md:text-[14px] font-switzer">
                {label}
              </p>
              <div className="h-[6px]" />
              <h3 className="text-[16px] md:text-[24px] font-bricolage font-semibold text-[#FDF9F0] leading-[100%] whitespace-pre-line">
                {title}
              </h3>
              <div className="h-[16px] md:h-[24px]" />
              <p className="text-[#FDF9F0]/80 font-switzer text-[10px] md:text-[13px] font-light leading-[120%]">
                {description}
              </p>
            </div>

            <div className="mt-[20px] md:mt-[37px] w-full md:hidden">
              {sideContent ? sideContent : content}
            </div>

            <div className="mt-[37px] w-full hidden md:block">{content}</div>
          </div>

          {sideContent && (
            <div className="hidden md:flex items-center justify-center w-full h-full">
              {sideContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;