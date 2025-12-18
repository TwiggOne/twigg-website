"use client";
import React, { useState } from "react";
import MoneyMainContent from "@/components/money-vibe/MoneyMainContent";
import MoneyVibeHeader from "@/components/money-vibe/MoneyVibeHeader";
import { CompletedBgLogo, MoneyVibeBg } from "@/utils/SvgUtils";
import ResultCard from "@/components/money-vibe/ResultCard";

const Page: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="min-h-screen relative mx-auto w-full py-[41px] flex flex-col gap-[56px] justify-center items-center">
      {/* CONDITIONAL MAIN CONTENT */}
      {!isCompleted ? (
        <div className="max-w-7xl absolute z-10 mx-auto w-full py-[41px] flex flex-col gap-[56px] justify-center items-center">
          <MoneyVibeHeader />
          <MoneyMainContent onComplete={() => setIsCompleted(true)} />
        </div>
      ) : (
        <div className="max-w-[780px] absolute z-10 mx-auto w-full flex flex-col  justify-center items-center">
          <ResultCard />
        </div>
      )}

      {/* BACKGROUND */}
      <div
        className={`absolute ${
          isCompleted
            ? "top-0 left-1/2 transform -translate-x-1/2"
            : "top-0 left-0"
        }`}
      >
        {isCompleted ? <CompletedBgLogo /> : <MoneyVibeBg />}
      </div>
    </div>
  );
};

export default Page;
