"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { QuesitonMark, Stress, UpArrow, Wallet } from "@/utils/SvgUtils";
import { AnimatedBorderSVG } from "../ui/BorderSvgEffect";

// 🎯 Reusable Card Component
const ProblemCard = ({
  title,
  descriptions,
  delay = 0,
  index,
}: {
  title: string;
  descriptions: string[];
  delay?: number;
  index: number;
}) => {
  const titleStyles = index === 0 ? { fontSize: "54px" } : { fontSize: "24px" };

  return (
    <div
      className="rounded-[15px] backdrop-blur-[15.5px]"
      style={{
        background:
          "linear-gradient(144.51deg, rgba(188, 147, 19, 0.2) -17.11%, rgba(253, 249, 240, 0.2) 55.86%, rgba(228, 215, 174, 0.2) 95.79%)",
      }}
    >
      <div className="rounded-[12px] py-[44px] px-[28px] flex flex-col gap-[20px]">
        <h3
          className="font-bricolage font-bold leading-[1.2] text-[#BC9313]"
          style={titleStyles}
        >
          {title}
        </h3>
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

  // 🔁 Wheel animation logic
  const labels = [
    {
      id: 0,
      title: (
        <>
          Constant
          <br />
          Money Stress
        </>
      ),
      icon: <Wallet />,
    },
    {
      id: 1,
      title: (
        <>
          Lost in
          <br />
          Money Jargon
        </>
      ),
      icon: <QuesitonMark />,
    },
    {
      id: 2,
      title: (
        <>
          Hard to
          <br />
          manage money
        </>
      ),
      icon: <Stress />,
    },
    
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handleRotate = () => {
    setActiveIndex((prev) => (prev + 1) % labels.length);
  };

  useEffect(() => {
    const timer = setInterval(handleRotate, 5000);
    return () => clearInterval(timer);
  }, []);

const positions = {
  top: { top: "26%", left: "27%", scale: 0.8, opacity: 0.6, zIndex: 1 },
  center: { top: "45%", left: "37%", scale: 1, opacity: 1, zIndex: 3 },
  bottom: { top: "68%", left: "27%", scale: 0.8, opacity: 0.6, zIndex: 1 },
};


  const getPosition = (idx: number) => {
    const relative = (idx - activeIndex + labels.length) % labels.length;
    if (relative === 0) return { ...positions.center, left: "37%" }; // 🔥 move active label more to the right

    if (relative === 1) return positions.bottom;
    return positions.top;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <motion.div
        className="w-full bg-[#FDF9F0] rounded-[60px] p-8 sm:p-12 md:py-[76px] md:px-[59px] relative overflow-hidden"
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

        {/* 🔁 Animated Wheel Labels */}
        {labels.map((label, idx) => {
          const pos = getPosition(idx);
          const isActive = idx === activeIndex;
          return (
            <motion.div
              key={label.id}
              className="absolute left-[27%] flex flex-row gap-2 cursor-pointer"
              animate={{
                top: pos.top,
                scale: pos.scale,
                left: pos.left, // 🔥 add this line

                opacity: pos.opacity,
                zIndex: pos.zIndex,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={handleRotate}
            >
              <div
                className={`flex items-center justify-center rounded-full border transition-all duration-300 ${
                  isActive
                    ? "bg-[#BC9313] border-[#BC9313] w-[62px] h-[62px]"
                    : "border-[#00000020] w-[44px] h-[44px]"
                }`}
              >
                <div
                  className={`${
                    isActive
                      ? "w-[25px] h-[25px] text-[#FDF9F0]"
                      : "w-[21px] h-[21px] text-[#B7B7B7]"
                  }`}
                >
                  {label.icon}
                </div>
              </div>
              <p
                className={`font-bricolage font-bold leading-[120%] transition-all duration-300 ${
                  isActive
                    ? "text-[#152D23] text-[26px]"
                    : "text-[#B7B7B7] text-[18px]"
                }`}
              >
                {label.title}
              </p>
            </motion.div>
          );
        })}

        {/* Grid Section */}
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
              <div
                className="absolute w-[14px] h-[14px] bg-[#B7B7B7] rounded-full"
                style={{
                  top: "11%",
                  right: "19%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
              <div
                className="absolute w-[14px] h-[14px] bg-[#B7B7B7] rounded-full"
                style={{
                  bottom: "9%",
                  right: "19%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
              <div
                className="absolute w-[21px] h-[21px] bg-[#BC9313] rounded-full"
                style={{
                  top: "50%",
                  right: "-4%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </div>
          </div>

          {/* Middle Content */}
      <AnimatedBorderSVG activeIndex={activeIndex} />


          {/* Right - Cards */}
          <div className="relative flex flex-col gap-[18px] pl-[10%] w-full pt-0  overflow-hidden min-h-[400px]">
            {/* Right - Cards */}
            <div className="relative flex flex-col gap-[18px]  w-full pt-0  overflow-hidden min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 1, delay:0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col gap-[18px] w-full"
                >
                  {[
                    // 🧩 Each array index corresponds to one activeIndex value
                    [
                      {
                        title: "24%",
                        descriptions: [
                          "Only 24% of Indian adults are financially literate.",
                        ],
                      },
                      {
                        title: "Lack of Awareness",
                        descriptions: [
                          "Most people don’t know where or how to start investing.",
                          "They rely on friends, trends, or luck for money decisions.",
                        ],
                      },
                    ],
                    [
                      {
                        title: "24%",
                        descriptions: [
                          "Only 24% of Indian adults are financially literate.",
                        ],
                      },
                      {
                        title: "CAGR, XIRR, ETFs..",
                        descriptions: [
                          "For most, terms like CAGR, XIRR, ETFs, Alpha, Beta sound like another language.",
                          "This causes confusion, delays, and financial paralysis.",
                        ],
                      },
                    ],
                    [
                      {
                        title: "24%",
                        descriptions: [
                          "Only 24% of Indian adults are financially literate.",
                        ],
                      },
                      {
                        title: "No Long-Term Planning",
                        descriptions: [
                          "Without clear goals, short-term decisions cause long-term loss.",
                        ],
                      },
                    ],
                  ][activeIndex].map((card, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <ProblemCard
                        index={i}
                        title={card.title}
                        descriptions={card.descriptions}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
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
