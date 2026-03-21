"use client";

import { TwiggGold } from "@/utils/SvgUtils";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypewriterSearch from "./TypewriterSearch";

const TwiggAiContent = () => {
  const texts = [
    "Why is my account balance dropping?",
    "Invest more in equities or debt funds?",
    "Should I prepay my loan or invest?",
    "Do I need term insurance from company?",
    "Can I afford to quit my job?",
  ];

  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    const loop = async () => {
      while (true) {
        setShowFinal(false)
        await new Promise((r) => setTimeout(r, 4800));

        setShowFinal(true);
        await new Promise((r) => setTimeout(r, 5800));
      }
    };

    loop();
  }, []);

  // Variants
  const analyzingVariants = {
    initial: { opacity: 0, y: 20 },   // from bottom
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },     // exit to top
  };

  const finalVariants = {
    initial: { opacity: 0, y: 20 },   // from bottom
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },     // exit to top
  };

  return (
    <div className="flex flex-col gap-[14px]">
      <TypewriterSearch texts={texts} />

      <div className="flex flex-row rounded-[10px] p-[14px] items-start gap-2 border border-[#BC9313]/50 backdrop-blur-[40px] shadow-md overflow-hidden">
        
        <AnimatePresence mode="wait">
          {!showFinal ? (
            <motion.div
              key="analyzing"
              variants={analyzingVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <p className="text-[12px] font-switzer text-[#FDF9F0] h-11">
                Analyzing your portfolio...
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="final"
              variants={finalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="flex flex-row items-start gap-2"
            >
              <TwiggGold />

              <p className="text-[12px] font-switzer text-[#FDF9F0]/80 leading-[125%]">
                <span className="text-[#FDF9F0] font-semibold">
                  Your portfolio is up 14.2% YTD.
                </span>{" "}
                Your ICICI Bluechip is outperforming, but your small cap
                allocation is higher than recommended for your risk profile.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default TwiggAiContent;