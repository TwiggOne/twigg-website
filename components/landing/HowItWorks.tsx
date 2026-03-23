"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HowItWorksCard from "../ui/components/HowItWorksCard";

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { step: "STEP 1", title: "Download the app" },
    { step: "STEP 2", title: "Link your accounts" },
    { step: "STEP 3", title: "See your full picture" },
    { step: "STEP 4", title: "Act with confidence" },
  ];

  const cards = [
    {
      image: "/how_it_works/step_1_image.png",
      text: "Available on iOS via TestFlight and Android via Play Store in beta. Takes under 2 minutes to set up.",
    },
    {
      image: "/how_it_works/step_2_image.png",
      text: "Securely connect banks, investments, insurance and loans via RBI's Account Aggregator consent-based, read-only.",
    },
    {
      image: "/how_it_works/step_3_image.png",
      text: "Twigg Pulse reads 15+ signals across your financial life and tells you exactly what needs your attention.",
    },
    {
      image: "/how_it_works/step_4_image.png",
      text: "Get personalised guidance from Twigg AI, backed by expert advisors when decisions get complex.",
    },
  ];

  // 🔑 Reorder so active card is always first
  const orderedCards = [
    ...cards.slice(activeStep),
    ...cards.slice(0, activeStep),
  ];

  return (
    <div className="flex flex-col gap-[31px] md:gap-[84px] pb-[72px] md:pb-[225px]">
      {/* Header */}
      <div className="flex flex-col gap-4 leading-none">
        <h1 className="text-[20px] md:text-[56px] font-semibold font-bricolage text-[#FDF9F0]">
          How It <span className="text-[#BC9313]">Works</span>
        </h1>
        <p className="text-[24px] text-[#FDF9F0]/80 font-switzer">
TrackFrom sign-up to clarity in minutes.        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-[33px] md:gap-[86px]">
        {/* Steps */}
        <div className="flex flex-row md:flex-col gap-[24px] md:gap-[56px]">
          {steps.map((item, index) => (
            <div key={index} onClick={() => setActiveStep(index)}>
              <StepLabel
                step={item.step}
                title={item.title}
                isActive={activeStep === index}
              />
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-row gap-6 items-stretch ">
          <AnimatePresence >
            {orderedCards.map((card, index) => (
              <motion.div
                key={card.text}
                layout
                initial={{ x: 120, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: index === 0 ? 1 : 1,
                }}
                exit={{ x: -160, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <HowItWorksCard
                  isActive={index === 0}
                  image={card.image}
                  text={card.text}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

type StepLabelProps = {
  step: string;
  title: string;
  isActive?: boolean;
};

const StepLabel: React.FC<StepLabelProps> = ({
  step,
  title,
  isActive,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-1 md:gap-3 cursor-pointer">
      <div
        className={`md:w-1 max-md:h-0.5 max-md:w-8 rounded-[4px] ${
          isActive ? "bg-[#BC9313]" : "bg-transparent"
        }`}
      />

      <div className="gap-1 flex flex-col">
        <p
          className={`text-[10px] md:text-[16px] font-bricolage font-semibold ${
            isActive ? "text-[#BC9313]" : "text-[#BC9313]/50"
          }`}
        >
          {step}
        </p>

        <p
          className={`text-[14px] md:text-[24px] font-bricolage font-semibold whitespace-nowrap ${
            isActive ? "text-[#FDF9F0]" : "text-[#FDF9F0]/50"
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;