"use client";

import React, { useState } from "react";
import MoneyMainContent from "@/components/moneyvibe/MoneyMainContent";
import MoneyVibeHeader from "@/components/moneyvibe/MoneyVibeHeader";
import { CompletedBgLogo, MoneyVibeBg, ResultBgMobile } from "@/utils/SvgUtils";
import ResultCard from "@/components/moneyvibe/ResultCard";
import { MoneyVibeEvaluationResponse } from "@/components/moneyvibe/TopicData";

const Page: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<MoneyVibeEvaluationResponse | null>(
    null
  );

  return (
    <div className="min-h-screen relative mx-auto w-full py-[41px]  flex flex-col gap-[56px] items-center md:justify-center">
      {!isCompleted ? (
        <div className="max-w-7xl  mx-auto w-full py-[41px] md:py-[41px] flex flex-col gap-[20px] md:gap-[56px] justify-center items-center">
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
        <div className="max-w-[780px] py-[61px] md:py-[61px]  mx-auto w-full flex flex-col justify-center items-center">
          <ResultCard result={result} />
        </div>
      )}

      {isCompleted ? (
        <>
          <div className="absolute -top-10 block md:hidden pointer-events-none">
            <ResultBgMobile />
          </div>
          <div className="absolute top-0 hidden md:block pointer-events-none">
            <CompletedBgLogo />
          </div>
        </>
      ) : (
        <div
          className={`absolute hidden md:block pointer-events-none ${
            isCompleted ? "top-0 left-1/2" : "top-0 left-0"
          }`}
        >
          <MoneyVibeBg />
        </div>
      )}
    </div>
  );
};

export default Page;
