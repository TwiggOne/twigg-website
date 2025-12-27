"use client";

import React, { useState } from "react";
import MoneyMainContent from "@/components/moneyvibe/MoneyMainContent";
import MoneyVibeHeader from "@/components/moneyvibe/MoneyVibeHeader";
import { CompletedBgLogo, MoneyVibeBg, ResultBgMobile } from "@/utils/SvgUtils";
import ResultCard from "@/components/moneyvibe/ResultCard";
import ArchetypesScreen from "@/components/moneyvibe/ArchetypesScreen";
import { MoneyVibeEvaluationResponse } from "@/components/moneyvibe/TopicData";

const Page: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showArchetypes, setShowArchetypes] = useState(false);
  const [result, setResult] = useState<MoneyVibeEvaluationResponse | null>(
    null
  );

  return (
    <div className="min-h-screen relative mx-auto w-full py-[41px] flex flex-col gap-[56px] items-center md:justify-center">
      {!isCompleted ? (
        <div className="max-w-7xl mx-auto w-full py-[41px] flex flex-col gap-[56px] items-center">
          <MoneyVibeHeader />
          <MoneyMainContent
            onComplete={(response) => {
              setResult(response);
              setIsCompleted(true);
            }}
          />
        </div>
      ) : (
        <div className="max-w-[654px] py-[61px] mx-auto w-full flex justify-center items-center">
          {!showArchetypes ? (
            <ResultCard
              result={result}
              onExplore={() => setShowArchetypes(true)}
            />
          ) : (
            <ArchetypesScreen
              archetypes={result?.archetypes.all_archetypes ?? []}
              onBack={() => setShowArchetypes(false)}
            />
          )}
        </div>
      )}

      {/* ✅ ABSOLUTE BACKGROUNDS — UNTOUCHED */}

      {isCompleted && !showArchetypes ? (
        <>
          <div className="absolute -top-10 block md:hidden pointer-events-none">
            <ResultBgMobile />
          </div>
          <div className="absolute top-0 hidden md:block pointer-events-none">
            <CompletedBgLogo />
          </div>
        </>
      ) : (
        <div className="absolute hidden md:block pointer-events-none top-0 left-0">
          {!showArchetypes && <MoneyVibeBg />}
        </div>
      )}
    </div>
  );
};

export default Page;
