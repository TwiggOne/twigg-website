"use client";

import React, { useState } from "react";
import MoneyMainContent from "@/components/moneyvibe/MoneyMainContent";
import MoneyVibeHeader from "@/components/moneyvibe/MoneyVibeHeader";
import {
  CompletedBgLogo,
  MoneyVibeBg,
  ResultBgMobile,
} from "@/utils/SvgUtils";
import ResultCard from "@/components/moneyvibe/ResultCard";
import { MoneyVibeEvaluationResponse } from "@/components/moneyvibe/TopicData";

const Page: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] =
    useState<MoneyVibeEvaluationResponse | null>(null);

  return (
    <div className="min-h-[87vh] md:min-h-screen relative mx-auto w-full py-[41px] flex flex-col gap-[56px] items-center md:justify-center">
      {!isCompleted ? (
        <div className="max-w-7xl z-10 mx-auto w-full py-[41px] md:py-[41px] flex flex-col gap-[20px] md:gap-[56px] justify-center items-center">
          <MoneyVibeHeader />
          <MoneyMainContent
            onComplete={(response) => {
              console.log("MoneyVibe Evaluation Result:", response);
              setResult(response);
              setIsCompleted(true);
            }}
          />
        </div>
      ) : (
        <div className="max-w-[780px] absolute z-10 mx-auto w-full flex flex-col justify-center items-center">
          <ResultCard result={result} />
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
        {isCompleted ? (
          <>
            <div className="block md:hidden">
              <ResultBgMobile />
            </div>
            <div className="hidden md:block">
              <CompletedBgLogo />
            </div>
          </>
        ) : (
          <MoneyVibeBg />
        )}
      </div>
    </div>
  );
};

export default Page;
