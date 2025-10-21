import {
  ProblemMobileBprder,
  QuesitonMark,
  Stress,
  UpArrow,
  Wallet,
} from "@/utils/SvgUtils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ProblemMobileBorder } from "../ui/BorderSvgEffect";
const labels = [
  {
    id: 0,
    title: (
    <>
        Money <br />
        Finance is Mystery
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
        Choices, No Clarity
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
          "Household wealth sits in traditional assets which are low returning and illiquid",
        ],
      },
    ],
  },
  {
    id: 2,
    title: (
          <>
        Hidden Costs <br />
        Opaque by Nature
      </>

    ),
    icon: <Stress />,
    cards: [
      {
        title: "2%",
        descriptions: [
          "Finfluencers are SEBI-registered and 63% don’t disclose sponsorships",
        ],
      },
      {
        title: "66%",
        descriptions: [
          "People are dissatisfied with the advice they get. 32% from CAs/wealth managers, 25% from friends & family, 20% from bank managers",
        ],
      },
    ],
  },
  {
    id: 3,
    title: (
       <>
        Money Stress <br />
        Savings to Freedom
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
          "Household income is used to service debt – among the highest in the world",
        ],
      },
    ],
  },
];
const ProblemSectionMobile = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const getVisibleItems = () => {
    const lastIndex = labels.length - 1;
    const prevIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
    const nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
    return [labels[prevIndex], labels[activeIndex], labels[nextIndex]];
  };

  const handleRotate = () => {
    setActiveIndex((prev) => (prev + 1) % labels.length);
  };

  useEffect(() => {
    const timer = setInterval(handleRotate, 8000);
    return () => clearInterval(timer);
  }, []);
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
    bottom: { top: "75%", left: "-25%", scale: 1, opacity: 1, zIndex: 1 },
    center: { top: "108%", left: "21%", scale: 1, opacity: 1, zIndex: 3 },
    top: { top: "75%", left: "86%", scale: 1, opacity: 1, zIndex: 1 },
  };
  const exitPositions = {
    bottom: { top: "108%", left: "22%", scale: 1, opacity: 0, zIndex: 3 },
    center: { top: "75%", left: "95%", scale: 1, opacity: 0, zIndex: 1 },
    top: { top: "0%", left: "200%", scale: 0.8, opacity: 0, zIndex: 0 },
  };
  const initailPositions = {
    top: { top: "24%", left: "205%", scale: 0.8, opacity: 0, zIndex: 1 }, // start left/top, invisible
    center: { top: "108%", left: "22%", scale: 0.8, opacity: 0, zIndex: 3 }, // start below center, invisible
    bottom: { top: "75%", left: "220%", scale: 0.8, opacity: 0, zIndex: 1 }, // start right/outside, invisible
  };
  const cardIndex = (activeIndex + 1 + labels.length) % labels.length;
  const visibleItems = getVisibleItems();
  return (
    <div className="flex flex-col  py-8 items-center px-[22px] bg-[#FDF9F0] rounded-[30px] relative">
      <div className="flex mb-8 self-start flex-col font-semibold text-[#214838] font-bricolage text-[18px] leading-[120%]">
        Stuck in the
        <span className="text-[#BC9313]">Cycle of Financial Frustration?</span>
      </div>
      {/* Outer Gradient Border */}
      <div
        className="relative w-[219px] h-[219px] rounded-full p-[1.4px] flex items-center justify-center"
        style={{
          background: `linear-gradient(
      to top,
      #BC9313 0%,
      rgba(21, 45, 35, 0.6) 39%,
      rgba(21, 45, 35, 0) 80%
    )`,
        }}
      >
        {/* Inner Circle */}
        <div className="w-full h-full rounded-full bg-[#FDF9F0] flex items-center justify-center relative">
          <Image
            src={"/Problem.svg"}
            alt="problem"
            height={200}
            width={200}
            className="object-cover w-[210px] h-[210px]"
          />

          {/* Small Circles */}
          <div className="absolute w-2 h-2 rounded-full bg-[#B7B7B7] left-0 top-[70%] transform -translate-y-1/2 translate-x-1/2" />
          <div className="absolute w-2 h-2 rounded-full bg-[#B7B7B7] right-0 top-[70%] transform -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute w-3 h-3 rounded-full bg-[#BC9313] bottom-[-6px] left-1/2 transform -translate-x-1/2" />

          {/* ==== DYNAMIC SIDE LABELS ==== */}
          {(() => {
            const lastIndex = labels.length - 1;
            const prevIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
            const nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
            const prev = labels[prevIndex];
            const next = labels[nextIndex];

            return (
              <>
                {/* Left (Previous) */}
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
                        className="absolute flex flex-col items-center text-center gap-2 cursor-pointer"
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
                      >
                        <div
                          className={`relative flex flex-col  items-center justify-center rounded-full border transition-all duration-300 ${
                            isActive
                              ? "bg-[#BC9313] border-[#BC9313] w-[32px] h-[32px]"
                              : "border-[#00000020] w-[20px] h-[20px]"
                          }`}
                        >
                          {/* <div
                                   className={`absolute ${
                                     isActive
                                       ? "w-[12px] h-[12px] bg-[#BC9313]"
                                       : "w-[8px] h-[8px] bg-[#B7B7B7]"
                                   } rounded-full`}
                                   style={{
               
                                     top: isActive ? "-60%" : idx == 0 ? "-60%" : "-60%",
                                     left: isActive ?  "45%"  : idx == 0 ? "170%" : "-80%",
                                     transform: "translate(-50%, -50%)",
                                   }}
                                 ></div> */}
                          <div
                            className={`${
                              isActive
                                ? "w-[15px] h-[15px] text-[#FDF9F0]"
                                : "w-[12px] h-[12px] text-[#B7B7B7]"
                            }`}
                          >
                            {label.icon}
                          </div>
                        </div>
                        <p
                          className={`font-bricolage whitespace-nowrap  font-bold leading-[120%] transition-all duration-300 ${
                            isActive
                              ? "text-[#152D23] text-[14px] font-semibold font-bricolage"
                              : "text-[#B7B7B7] text-[9px] font-medium font-bricolage"
                          }`}
                        >
                          {label.title}
                        </p>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </>
            );
          })()}
        </div>
      </div>
      {/* ==== CENTERED ACTIVE ONE ==== */}
      {/* ==== CENTERED ACTIVE ONE ==== */}
      <div className="relative flex flex-col mt-8 ">
        <AnimatePresence mode="wait">
          {labels[cardIndex].cards[0] && (
            <motion.div
              key={`card1-${cardIndex}`} // unique key for re-animation on index change
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="w-full absolute bottom-2 left-[-20%]"
            >
              <div
                className="w-[146px] flex flex-col gap-3 rounded-[15px] py-[22px] px-[16px]"
                style={{
                  background:
                    "linear-gradient(144.51deg, rgba(188, 147, 19, 0.2) -17.11%, rgba(253, 249, 240, 0.2) 55.86%, rgba(228, 215, 174, 0.2) 95.79%)",
                }}
              >
                <h3 className="font-bricolage text-[22px] font-bold leading-[1.2] text-[#BC9313]">
                  {labels[cardIndex].cards[0].title}
                </h3>
                <div className="flex flex-col gap-[20px]">
                  {labels[cardIndex].cards[0].descriptions.map((desc, i) => (
                    <p
                      key={i}
                      className="font-switzer text-[#214838CC] text-[10px] leading-[100%]"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ProblemMobileBorder activeIndex={activeIndex} />
      </div>
      {/* Second Card Section (like “CAGR, XIRR, ETFs..”) */}
      <AnimatePresence mode="wait">
        {labels[cardIndex].cards[1] && (
          <motion.div
            key={`card2-${cardIndex}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex w-[236px] max-sm:self-end flex-col gap-3 rounded-[15px] py-[22px] px-[16px]"
            style={{
              background:
                "linear-gradient(144.51deg, rgba(188, 147, 19, 0.2) -17.11%, rgba(253, 249, 240, 0.2) 55.86%, rgba(228, 215, 174, 0.2) 95.79%)",
            }}
          >
            <h3 className="font-bricolage text-[22px] font-bold leading-[1.2] text-[#BC9313]">
              {labels[cardIndex].cards[1].title}
            </h3>
            <div className="flex flex-col gap-[20px]">
              {labels[cardIndex].cards[1].descriptions.map((desc, i) => (
                <p
                  key={i}
                  className="font-switzer text-[#214838CC] text-[10px] leading-[100%]"
                >
                  {desc}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="font-switzer text-[12px] text-[#214838] leading-[120%] mt-8 self-start">
        Confusion, delays, bad choices, and constant<br /> stress , most of us are
        running hard, but getting nowhere with our money.
      </div>
      <div className="flex flex-col gap-[2px] self-start mt-8">
        <div className="text-[14px] font-semibold text-[#214838]">
          Need a Solution?
        </div>
        <div className="flex flex-row gap-[4px] items-center">
          <p className="text-[12px] text-[#BC9313] font-medium leading-[100%]">
            Scroll down
          </p>
          <div className="w-[12px] h-[12px] bg-[#BC93130D] flex items-center justify-center border border-[#BC93131A] rounded-full">
            <div className="w-[5px] h-[5px] text-[#BC9313]">
              <UpArrow flip />
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProblemSectionMobile;
