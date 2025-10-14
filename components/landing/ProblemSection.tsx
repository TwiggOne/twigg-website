"use client";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import { QuesitonMark, Stress, UpArrow, Wallet } from "@/utils/SvgUtils";

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
      className="rounded-[15px] backdrop-blur-[15.5px]"
      style={{
        boxSizing: "border-box",

        // Apply the exact linear gradient
        background:
          "linear-gradient(144.51deg, rgba(188, 147, 19, 0.2) -17.11%, rgba(253, 249, 240, 0.2) 55.86%, rgba(228, 215, 174, 0.2) 95.79%)",
      }}
    >
      {/* Inner card background */}
      <div className="rounded-[12px]  py-[44px] px-[28px]">
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
        <div className="absolute left-[27%] top-[68%] flex flex-row gap-2">
          <div className=" flex items-center justify-center rounded-full w-[44px] h-[44px] border border-[#000000]/20">
            <Stress />
          </div>
          <p className="text-[18px] font-bold text-[#B7B7B7] leading-[120%] font-bricolage">
       Hard to <br />
manage money
          </p>
        </div>
            <div className="absolute left-[27%] top-[26%] flex flex-row gap-2">
          <div className=" flex items-center justify-center rounded-full w-[44px] h-[44px] border border-[#000000]/20">
            <Wallet />
          </div>
          <p className="text-[18px] font-bold text-[#B7B7B7] leading-[120%] font-bricolage">
            Constant
            <br />
            Money Stress
          </p>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center relative">
          {/* Left - Image */}
          <div className=" ml-[-40%] pt-[10%] relative flex justify-center items-center mb-12">
            <Image
              src="/Problem.svg"
              alt="Financial Cycle Illustration"
              width={499}
              height={499}
              className="absolute object-contain "
            />
            <div className="relative w-[549px] h-[548px]">
              <Image
                src="/Ellipse.svg"
                alt="Financial Cycle Illustration"
                fill
                className="object-contain"
              />
              {/* Dot on the border */}
              <div
                className="absolute w-[14px] h-[14px] bg-[#B7B7B7] rounded-full"
                style={{
                  top: "11%", // 50% down from top
                  right: "19%", // 100% across width of ellipse
                  transform: "translate(-50%, -50%)", // center the dot on the border
                }}
              ></div>
                 <div
                className="absolute w-[14px] h-[14px] bg-[#B7B7B7] rounded-full"
                style={{
                  bottom: "9%", // 50% down from top
                  right: "19%", // 100% across width of ellipse
                  transform: "translate(-50%, -50%)", // center the dot on the border
                }}
              ></div>
                <div
                className="absolute w-[21px] h-[21px] bg-[#BC9313] rounded-full"
                style={{
                   // 50% down from top
                   top:"50%",
                  right: "-4%", // 100% across width of ellipse
                  transform: "translate(-50%, -50%)", // center the dot on the border
                }}
              ></div>
            </div>
          </div>
          <div className="relative w-full h-[50%] pl-[15%] flex flex-col rounded-[15px] ">
            <Image
              src="/Border.svg"
              alt="Financial Cycle Illustration"
              width={328}
              height={282}
              className="absolute object-contain "
            />
            {/* Middle content */}
            <div className="flex-1 flex items-center bg-[#FDF9F0] ">
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
          </div>

          {/* Right - Cards */}
          <div className="flex flex-col gap-[18px] pl-[10%] w-full  pt-0 lg:pt-12">
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
