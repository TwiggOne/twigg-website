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
  const titleStyles = index === 0 ? { fontSize: "54px" } : { fontSize: "54px" };

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
              className="font-switzer text-[#214838CC] text-[18px] leading-[120%]"
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
  const labels = [
    {
      id: 0,
      title: (
        <>
          Money
          <br />
          Jargon = Intimidating
        </>
      ),
      icon: <Wallet />,
      cards: [
        {
          title: "24%",
          descriptions: ["Indian adults understand basic financial concepts"],
        },
        {
          title: "87%",
          descriptions: [
            "Affluent Indians admit they don’t know how to save or invest properly",
          ],
        },
      ],
    },
    {
      id: 1,
      title: (
        <>
          Too Many
          <br />
          Choices, No Clarity{" "}
        </>
      ),
      icon: <QuesitonMark />,
      cards: [
        {
          title: "9000+",
          descriptions: ["Listed companies and mutual funds in India"],
        },
        {
          title: "95%",
          descriptions: [
            "Household wealth sits in traditional asset classes which are low returning and illiquid",
          ],
        },
      ],
    },
    {
      id: 2,
      title: (
        <>
          Conflict, Opaque
          <br />
          charges & Finfluencers{" "}
        </>
      ),
      icon: <Stress />,
      cards: [
        {
          title: "66%",
          descriptions: [
            "People are dissatisfied with the advice they get from local CAs, friends/family and bank managers",
          ],
        },
        {
          title: "2%",
          descriptions: [
            "Fin-fluencers are  SEBI-registered and 63% don’t disclose sponsorships",
          ],
        },
      ],
    },
    {
      id: 3,
      title: (
        <>
          Constant <br />
          Money Stress{" "}
        </>
      ),
      icon: <Stress />,
      cards: [
        {
          title: "43%",
          descriptions: ["Affluent Indians save less than 20% of their income"],
        },
        {
          title: "34%",
          descriptions: [
            "Household income is used to service debt –  among the highest in the world",
          ],
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  useEffect(() => {
    const CARD_SYNC_DELAY = 650; // 👈 Adjusted to match real motion timing
    const timer = setTimeout(() => {
      setDisplayedIndex(activeIndex);
    }, CARD_SYNC_DELAY);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleRotate = () => {
    setActiveIndex((prev) => (prev + 1) % labels.length);
  };

  useEffect(() => {
    const timer = setInterval(handleRotate, 8000);
    return () => clearInterval(timer);
  }, []);
  // Compute visible labels (max 3) based on activeIndex
  const getVisibleLabels = () => {
    const total = labels.length;
    // always show 3
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(labels[(activeIndex + i) % total]);
    }
    return visible;
  };

  const positions = {
    top: { top: "26%", left: "27%", scale: 0.8, opacity: 0.6, zIndex: 1 },
    center: { top: "45.5%", left: "37%", scale: 1, opacity: 1, zIndex: 3 },
    bottom: { top: "68%", left: "27%", scale: 0.8, opacity: 0.6, zIndex: 1 },
  };
  const exitPositions = {
    top: { top: "24%", left: "-5%", scale: 0.8, opacity: 0, zIndex: 0 },
    center: { top: "26%", left: "27%", scale: 1, opacity: 0, zIndex: 0 },
    bottom: { top: "45%", left: "37%", scale: 0.8, opacity: 0, zIndex: 0 },
  };
  const initailPositions = {
    top: { top: "24%", left: "-5%", scale: 0.8, opacity: 0, zIndex: 0 },
    center: { top: "26%", left: "27%", scale: 1, opacity: 0, zIndex: 0 },
    bottom: { top: "75%", left: "0%", scale: 0.8, opacity: 0, zIndex: 0 },
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <motion.div
        className="w-full bg-[#FDF9F0] rounded-[60px] p-8 sm:p-12 md:py-[76px] md:px-[59px] relative "
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
        {/* 🔁 Animated Wheel Labels */}
        {/* 🔁 Animated Wheel Labels */}
        <AnimatePresence>
          {getVisibleLabels().map((label, idx) => {
            // idx: 0..2 in visible array
            // compute positions based on idx in visible array
            let pos;
            const isActive = idx === 1; // middle label in visible array is active
            if (idx === 0) pos = positions.top;
            else if (idx === 1) pos = positions.center;
            else pos = positions.bottom;
            let exitPos;
            if (idx === 0) exitPos = exitPositions.top;
            else if (idx === 1) exitPos = exitPositions.center;
            else exitPos = exitPositions.bottom;
            let initailPos;
            if (idx === 0) initailPos = initailPositions.top;
            else if (idx === 1) initailPos = initailPositions.center;
            else initailPos = initailPositions.bottom;
            return (
              <motion.div
                key={label.id}
                className="absolute flex flex-row gap-2 cursor-pointer"
                initial={{
                  top: initailPos.top,
                  scale: initailPos.scale,
                  left: initailPos.left,
                  opacity: initailPos.opacity,
                  zIndex: initailPos.zIndex,
                }}
                exit={{
                  top: exitPos.top,
                  scale: exitPos.scale,
                  left: exitPos.left,
                  opacity: exitPos.opacity,
                  zIndex: exitPos.zIndex,
                }}
                animate={{
                  top: pos.top,
                  scale: pos.scale,
                  left: pos.left,
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
                  className={`relative flex items-center justify-center rounded-full border transition-all duration-300 ${
                    isActive
                      ? "bg-[#BC9313] border-[#BC9313] w-[62px] h-[62px]"
                      : "border-[#00000020] w-[44px] h-[44px]"
                  }`}
                >
                  <div
                    className={`absolute ${
                      isActive
                        ? "w-[21px] h-[21px] bg-[#BC9313]"
                        : "w-[14px] h-[14px] bg-[#B7B7B7]"
                    } rounded-full`}
                    style={{
                      scale: 1.2,

                      top: isActive ? "65%" : idx == 0 ? "120%" : "0%",
                      left: !isActive ? "-120%" : "-57%",
                      transform: "translate(-50%, -50%)",
                    }}
                  ></div>
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
        </AnimatePresence>

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
                  exit={{ opacity: 0, x: 0 }}
                  transition={{
                    delay:0.2,
                    duration: 0.6, // smoother and matches the wheel ease-out
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex flex-col gap-[18px] w-full"
                >
                  {labels[(displayedIndex + 1) % labels.length].cards.map(
                    (card, i) => (
                      <ProblemCard
                        key={i}
                        index={i}
                        title={card.title}
                        descriptions={card.descriptions}
                      />
                    )
                  )}
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
export default ProblemSection;
