"use client";

import React from "react";
import { motion } from "framer-motion";

const TwiggPulseContent = () => {
  const data = [
    { label: "Protection", value: 78 },
    { label: "Cashflow", value: 56 },
    { label: "Credit", value: 52 },
    { label: "Investments", value: 38 },
    { label: "Safety", value: 61 },
  ];

  const MAX_HEIGHT = 90;

  return (
    <div className="w-full px-4 py-1">
      <div className="flex flex-col gap-2">
        
        {/* Graph Area */}
        <div className="relative h-[120px]">
          
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            <div className="border-t border-dashed border-[#FDF9F0]/20" />
            <div className="border-t border-dashed border-[#FDF9F0]/20" />
            <div className="border-t border-dashed border-[#FDF9F0]/20" />
          </div>

          {/* Bars */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-full">
            {data.map((item, index) => {
              const finalHeight = (item.value / 100) * MAX_HEIGHT;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-end flex-1"
                >
                  {/* % VALUE */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.4 + 0.6, // appears after bar grows
                      duration: 0.3,
                    }}
                    viewport={{ once: true }}
                    className="text-[10px] text-[#FDF9F0] mb-2 font-switzer"
                  >
                    {item.value}%
                  </motion.span>

                  {/* BAR */}
                  <motion.div
                    className="w-[37px] bg-gradient-to-b from-[#BC9313] to-[#564309] "
                    initial={{ height: "4px" }} // start small (~4%)
                    whileInView={{ height: finalHeight }}
                    transition={{
                      delay: index * 0.4, // stagger
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between">
          {data.map((item, index) => (
            <span
              key={index}
              className="text-[10px] text-[#FDF9F0] text-center flex-1 whitespace-nowrap font-switzer"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwiggPulseContent;