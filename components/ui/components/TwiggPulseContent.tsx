"use client";

import React from "react";

const TwiggPulseContent = () => {
  const data = [
    { label: "Protection", level: "High", value: 78 },
    { label: "Cashflow", level: "Medium", value: 56 },
    { label: "Credit", level: "Medium", value: 52 },
    { label: "Investments", level: "Low", value: 38 },
    { label: "Safety", level: "High", value: 61 },
  ];

  const LEVEL_HEIGHT: Record<string, string> = {
    High: "h-[90px]",
    Medium: "h-[56px]",
    Low: "h-[20px]",
  };

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
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-end flex-1"
              >
                {/* % VALUE */}
                <span className="text-[10px] text-[#FDF9F0] mb-2 font-switzer">
                  {item.value}%
                </span>

                {/* BAR (UNCHANGED) */}
                <div
                  className={`w-[37px] bg-gradient-to-b from-[#BC9313] to-[#564309] ${LEVEL_HEIGHT[item.level]}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM LABELS (ALIGNED SAME LINE) */}
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