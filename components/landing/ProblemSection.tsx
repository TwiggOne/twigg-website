"use client";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import { QuesitonMark, UpArrow } from "@/utils/SvgUtils";

// 🎯 Reusable Card Component
const ProblemCard = ({
  title,
  descriptions,
  delay = 0,
  index,
}: {
  title: string;
  descriptions: string[]; // ← accepts multiple description lines
  delay?: number;
  index: number;
}) => {
  // Conditional title styling
  const titleStyles =
    index === 0
      ? {
          fontSize: "54px",
        }
      : {
          fontSize: "24px",
        };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative rounded-[15px] p-[3px] bg-gradient-to-br from-[#BC931300] to-[#BC9313]"
    >
      {/* Inner card background */}
      <div className="rounded-[12px] bg-gradient-to-br from-[#BC9313] via-[#FDF9F0] to-[#E4D7AE] backdrop-blur-[25px] py-[44px] px-[28px]">
        <div className="flex flex-col gap-[20px]">
          <h3
            className="font-bricolage font-bold leading-[1.2] text-[#BC9313]"
            style={titleStyles}
          >
            {title}
          </h3>

          {/* Render multiple descriptions */}
          <div className="flex flex-col gap-[20px]">
            {descriptions.map((desc, i) => (
              <p
                key={i}
                className="font-switzer text-[#214838CC] text-[20px] leading-[100%]"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 🎨 Main Section
export const ProblemSection = () => {
  const cards = [
    {
      title: "24%",
      descriptions: ["Only 24% of Indian adults are financially literate."],
      delay: 0.4,
    },
    {
      title: "CAGR, XIRR, ETFs..",
      descriptions: [
        "For most, terms like CAGR, XIRR, ETFs, Alpha, Beta sound like another language.",
        "Which caused confusion and people delay or avoid financial decisions altogether.",
      ],
      delay: 0.6,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <motion.div
        className="w-full bg-[#FDF9F0] rounded-[60px] p-8 sm:p-12 md:py-[76px] md:px-[59px] relative"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Heading */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-bricolage text-4xl sm:text-5xl md:text-[48px] font-bold text-[#214838] leading-[100%]">
            Stuck in the
            <br />
            <span className="text-[#BC9313]">
              Cycle of Financial Frustration?
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center relative">
          {/* Left - Image */}
          <div className=" ml-[-40%] flex justify-center items-center mb-12">
            <Image
              src="/Problem.svg"
              alt="Financial Cycle Illustration"
              width={560}
              height={550}
              className="object-contain"
            />
          </div>
          <div className="relative w-full h-[50%] flex flex-col rounded-[15px] ">
            {/* Top gradient border */}
            <div
              className="flex-1 rounded-[15px]"
              style={{
                background: `linear-gradient(135deg, #BC931300 0%, #BC931380 50%, #BC9313 100%)`,
              }}
            ></div>

            {/* Middle content */}
            <div className="flex-1 flex items-center bg-[#FDF9F0]">
              <div className="-ml-8 flex flex-row gap-[8px] items-center w-full">
                <div className="flex items-center justify-center w-[62px] h-[62px] rounded-full bg-[#BC9313]">
                  <QuesitonMark />
                </div>
                <div className="text-[#152D23] leading-[120%] text-[26px] font-bold font-bricolage">
                  Lost in
                  <br />
                  Money Jargon
                </div>
              </div>
            </div>

            {/* Bottom gradient border */}
            <div
              className="flex-1"
              style={{
                background: `linear-gradient(225deg, #BC9313 0%, #BC931380 50%, #BC931300 100%)`,
              }}
            ></div>
          </div>

          {/* Right - Cards */}
          <div className="flex flex-col gap-[18px] w-full  pt-0 lg:pt-12">
            {cards.map((card, idx) => (
              <ProblemCard
                key={idx}
                index={idx}
                title={card.title}
                descriptions={card.descriptions}
                delay={card.delay}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:justify-between pt-12 mt-12 gap-6 lg:gap-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="font-switzer text-sm sm:text-[24px] text-[#214838]  leading-[120%] text-center lg:text-left">
            Confusion, delays, bad choices, and constant stress , most of
            <br /> us are running hard, but getting nowhere with our money.
          </p>
          <div className="flex flex-col gap-[4px] items-end ">
            <div className="text-[26px] font-semibold text-[#214838]">
              Need a Solution?
            </div>
            <div className="flex flex-row gap-[8px] items-center">
              <p className="text-[16px] text-[#BC9313] font-medium leading-[100%]">
                Scroll down
              </p>
              <div className="w-[28px] h-[28px] bg-[#BC93130D] flex items-center justify-center border border-[#BC93131A] rounded-full">
                <div className="w-[11px] h-[12px] text-[#BC9313]">
                  <UpArrow flip />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
