"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

export const AnimatedBorderSVG = ({ activeIndex }: { activeIndex: number }) => {
  // Use activeIndex as a key to re-trigger animation
  return (
    <div className="relative w-full h-[50%] pl-[15%] flex flex-col rounded-[15px]">
      <motion.svg
        key={activeIndex} // triggers re-animation on index change
        width="330"
        height="284"
        viewBox="0 0 330 284"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M329 1H11C5.47715 1 1 5.47715 1 11V112"
          stroke="url(#paint0_linear_436_1597)"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.path
          d="M329 283H11C5.47715 283 1 278.523 1 273V172"
          stroke="url(#paint1_linear_436_1597)"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        />
        <defs>
          <linearGradient
            id="paint0_linear_436_1597"
            x1="329"
            y1="-2.00001"
            x2="219.873"
            y2="-110.227"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BC9313" stopOpacity="0" />
            <stop offset="0.487862" stopColor="#BC9313" stopOpacity="0.5" />
            <stop offset="1" stopColor="#BC9313" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_436_1597"
            x1="326"
            y1="283"
            x2="218.624"
            y2="390.621"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BC9313" stopOpacity="0" />
            <stop offset="0.530914" stopColor="#BC9313" stopOpacity="0.5" />
            <stop offset="1" stopColor="#BC9313" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};



export const ProblemMobileBorder = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <motion.svg
        key={activeIndex} // retriggers animation whenever index changes
        width="208"
        height="194"
        viewBox="0 0 208 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-right path */}
        <motion.path
          d="M207 193L207 11C207 5.47715 202.523 1 197 1L121 0.999996"
          stroke="url(#paint0_linear_1467_2564)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Bottom-left path */}
        <motion.path
          d="M89 1L11 1C5.47715 1 1 5.47715 1 11L0.999997 83"
          stroke="url(#paint1_linear_1467_2564)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient
            id="paint0_linear_1467_2564"
            x1="207"
            y1="193"
            x2="267.432"
            y2="113.147"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BC9313" stopOpacity="0" />
            <stop offset="0.519122" stopColor="#BC9313" stopOpacity="0.519122" />
            <stop offset="1" stopColor="#BC9313" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1467_2564"
            x1="1.00001"
            y1="83"
            x2="-14.405"
            y2="34.2296"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BC9313" stopOpacity="0" />
            <stop offset="0.519122" stopColor="#BC9313" stopOpacity="0.519122" />
            <stop offset="1" stopColor="#BC9313" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};
