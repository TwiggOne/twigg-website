import {
  ProblemMobileBprder,
  QuesitonMark,
  Stress,
  UpArrow,
  Wallet,
} from "@/utils/SvgUtils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
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
        Conflict, Opaque
        <br />
        Charges & Finfluencers
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
        Constant <br />
        Money Stress
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
  const [activeId, setActiveId] = useState(0); // Default active (e.g., last one)
  const getVisibleItems = () => {
    const lastIndex = labels.length - 1;
    const prevIndex = activeId === 0 ? lastIndex : activeId - 1;
    const nextIndex = activeId === lastIndex ? 0 : activeId + 1;
    return [labels[prevIndex], labels[activeId], labels[nextIndex]];
  };

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
            const prevIndex = activeId === 0 ? lastIndex : activeId - 1;
            const nextIndex = activeId === lastIndex ? 0 : activeId + 1;
            const prev = labels[prevIndex];
            const next = labels[nextIndex];

            return (
              <>
                {/* Left (Previous) */}
                <AnimatePresence>
                  {/* Left (Previous) */}
                  <motion.div
                    key={prev.id}
                    className="flex flex-col absolute bottom-2 gap-1 -left-14 items-center cursor-pointer"
                    onClick={() => setActiveId(prev.id)}
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-5 h-5 border border-[#000000]/20 flex items-center justify-center rounded-full text-[#B7B7B7]">
                      <div className="h-3 w-3">{prev.icon}</div>
                    </div>
                    <div className="font-bricolage font-medium text-[9px] text-[#B7B7B7] leading-[110%] text-center">
                      {prev.title}
                    </div>
                  </motion.div>

                  {/* Right (Next) */}
                  <motion.div
                    key={next.id}
                    className="flex flex-col absolute bottom-2 gap-1 -right-16 items-center cursor-pointer"
                    onClick={() => setActiveId(next.id)}
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-5 h-5 border border-[#000000]/20 flex items-center justify-center rounded-full text-[#B7B7B7]">
                      <div className="h-3 w-3">{next.icon}</div>
                    </div>
                    <div className="font-bricolage font-medium text-[9px] text-[#B7B7B7] leading-[110%] text-center">
                      {next.title}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </>
            );
          })()}
        </div>
      </div>
      {/* ==== CENTERED ACTIVE ONE ==== */}
      {/* ==== CENTERED ACTIVE ONE ==== */}
      <div className="relative flex flex-col mt-8 ">
        <AnimatePresence>
          <motion.div
            key={activeId} // ensures motion triggers on activeId change
            initial={{
              top: "-40%", // center position
              left: "-10%",
              scale: 0.8,
              opacity: 1,
              zIndex: 1,
            }}
            animate={{
              top: "0%", // center position
              left: "50%",
              scale: 1,
              opacity: 1,
              zIndex: 3,
            }}
            exit={{
              top: "-40%", // center position
              left: "115%",
              scale: 0.8,
              opacity: 1,
              zIndex: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute top-0 left-1/2 w-full -translate-x-1/2 -translate-y-[20%] flex flex-col items-center justify-center gap-2"
          >
            {/* Icon */}
            <div className="w-8 h-8 flex justify-center items-center bg-[#BC9313] rounded-full">
              <div className="flex items-center justify-center">
                <div className="w-[8px] h-[15px] text-white">
                  {labels[activeId].icon}
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="text-[14px] font-bricolage text-[#152D23] leading-[110%] font-semibold text-center">
              {labels[activeId].title}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Card Section - First Card (Absolute) */}
        {labels[activeId].cards[0] && (
          <div className="w-full absolute bottom-2 left-[-20%]">
            <div
              className="w-[146px] flex flex-col gap-3 rounded-[15px] py-[22px] px-[16px]"
              style={{
                background:
                  "linear-gradient(144.51deg, rgba(188, 147, 19, 0.2) -17.11%, rgba(253, 249, 240, 0.2) 55.86%, rgba(228, 215, 174, 0.2) 95.79%)",
              }}
            >
              <h3 className="font-bricolage text-[22px] font-bold leading-[1.2] text-[#BC9313]">
                {labels[activeId].cards[0].title}
              </h3>
              <div className="flex flex-col gap-[20px]">
                {labels[activeId].cards[0].descriptions.map((desc, i) => (
                  <p
                    key={i}
                    className="font-switzer text-[#214838CC] text-[10px] leading-[100%]"
                  >
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        <ProblemMobileBprder />
      </div>
      {/* Second Card Section (like “CAGR, XIRR, ETFs..”) */}
      {labels[activeId].cards[1] && (
        <div
          className="flex w-[236px] max-sm:self-end flex-col gap-3 rounded-[15px] py-[22px] px-[16px]"
          style={{
            background:
              "linear-gradient(144.51deg, rgba(188, 147, 19, 0.2) -17.11%, rgba(253, 249, 240, 0.2) 55.86%, rgba(228, 215, 174, 0.2) 95.79%)",
          }}
        >
          <h3 className="font-bricolage text-[16px] font-bold leading-[1.2] text-[#BC9313]">
            {labels[activeId].cards[1].title}
          </h3>
          <div className="flex flex-col gap-[20px]">
            {labels[activeId].cards[1].descriptions.map((desc, i) => (
              <p
                key={i}
                className="font-switzer text-[#214838CC] text-[10px] leading-[100%]"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      )}
      <div className="font-switzer text-[12px] text-[#214838] leading-[120%] mt-8 self-start">
        Confusion, delays, bad choices, and constant stress , most of us are
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
