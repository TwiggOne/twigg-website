"use client";
import React, { useState } from "react";
import { MoneyVibeEvaluationResponse } from "./TopicData";
import NavigationResultTab from "./NavigationResultTab";
import Image from "next/image";
import ResultDescribeVibe from "./ResultDescribe";
import ResultDescribeClassic from "./ResultDescribeClassic";

type ResultCardProps = {
  result: MoneyVibeEvaluationResponse | null;
  onExplore: () => void;
};
type ResultTab = "Bollywood" | "Classic" | "Cricket";

export default function ResultCard({ result, onExplore }: ResultCardProps) {
  const otherArchetypes = result?.archetypes.all_archetypes;
  const description = result?.archetypes.primary.description ?? "";
  const [activeTab, setActiveTab] = useState<ResultTab>("Classic");

  if (!result || !otherArchetypes) return null;
  const showImage = activeTab === "Bollywood" || activeTab === "Cricket";
  const imageUrl =
    activeTab === "Bollywood"
      ? result.bollywoodVibe.primary.imageUrl
      : activeTab === "Cricket"
      ? result.cricketVibe.primary.imageUrl
      : null;

  return (
    <div
      className={`
    md:mt-[100px]
    pt-[90px] md:pt-[33px]
    px-[18px] pb-[44px] md:p-[44px]
    w-full items-start flex flex-col
    md:rounded-[60px]
    md:backdrop-blur-[50px]
   md:bg-[rgba(253,249,240,0.02)] md:border border-[#BC9313]/20
    
  `}
    >
      <div className="flex flex-col  max-w-[487px] w-full mx-auto gap-6">
        <div className="leading-tight flex flex-col gap-1 ">
          <h1 className="text-[22px] md:text-[36px] font-semibold font-bricolage text-[#FDF9F0]">
            Here’s Your <span className="text-[#BC9313]">MoneyVibe</span>
          </h1>
          <h1 className="text-[12px] md:text-[18px]  text-[#FDF9F0]/80 font-switzer ">
            Check it in the style you vibe with.
          </h1>
        </div>
        {/* <NavigationResultTab onTabChange={(tab) => setActiveTab(tab)} /> */}
        {showImage && imageUrl && (
          <div className="relative w-full h-[190px] md:w-[447px] md:h-[193px] rounded-[20px] overflow-hidden">
            <Image
              key={imageUrl}
              src={imageUrl}
              alt={`${activeTab} vibe image`}
              fill
              className="object-cover transition-opacity duration-300"
              priority
            />
          </div>
        )}

        {activeTab === "Bollywood" && (
          <ResultDescribeVibe
            icon={result.archetypes.primary.pri_icon}
            title={result.bollywoodVibe.primary.title}
            subtitle={`Like ${result.bollywoodVibe.primary.character}`}
            personality={result.bollywoodVibe.primary.personality}
            moneyWise={result.bollywoodVibe.primary.moneyWise}
          />
        )}

        {activeTab === "Cricket" && (
          <ResultDescribeVibe
            icon={result.archetypes.primary.pri_icon}
            title={result.cricketVibe.primary.title}
            subtitle={`Like ${result.cricketVibe.primary.player}`}
            personality={result.cricketVibe.primary.personality}
            moneyWise={result.cricketVibe.primary.moneyWise}
          />
        )}

        {activeTab === "Classic" && <ResultDescribeClassic data={result} />}
        <div
          onClick={onExplore}
          className="cursor-pointer max-w-[287px] mx-auto rounded-[10px] px-[24px] py-[10px]
  text-[#BC9313] font-semibold text-[14px]
  bg-[rgba(188,147,19,0.05)] border border-[#BC9313]/60"
        >
          View other MoneyVibe types
        </div>
      </div>
    </div>
  );
}
