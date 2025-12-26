"use client";
import React, { useMemo, useState } from "react";
import CardResultGold from "./CardResultGold";
import Traits from "./Traits";
import ShareResult from "./ShareResult";
import { MoneyVibeEvaluationResponse } from "./TopicData";
import { ArchetypesModal } from "./ResultModal";

type ResultCardProps = {
  result: MoneyVibeEvaluationResponse | null;
  onExplore: () => void;
};

export default function ResultCard({ result,onExplore }: ResultCardProps) {
  const otherArchetypes = result?.archetypes.all_archetypes;
  const description = result?.archetypes.primary.description ?? "";


  if (!result || !otherArchetypes) return null;

  return (
    <div
      className="
      md:mt-[20px]
        pt-[90px] md:pt-[33px]
        md:bg-[rgba(253,249,240,0.02)]
        md:rounded-[60px]
        px-[18px] pb-[44px] md:p-[44px]
        w-full
        items-center
        flex
        flex-col
        md:border border-[#BC9313]/20
        md:backdrop-blur-[50px]
      "
    >
      <div className="leading-tight">
        <h1 className="text-[28px] md:text-[40px] font-semibold font-bricolage text-[#FDF9F0]">
          Here’s Your
        </h1>
        <h1 className="text-[28px] md:text-[40px] font-semibold font-bricolage text-[#BC9313]">
          MoneyVibe
        </h1>
      </div>

      <CardResultGold
        title={result?.archetypes.primary.title ?? ""}
        description={result?.archetypes.primary.description ?? ""}
      />
      <h1 className="text-[16px] py-6 md:text-[24px] font-switzer font-medium text-[#BC9313] text-center">
        {description}
      </h1>

      {/* ✅ PASS TRAITS */}
      <Traits traits={result?.archetypes.primary.traits ?? ""} />

      <div
        className="my-8 h-[1px] w-full"
        style={{
          background:
            "linear-gradient(to right, rgba(253,249,240,0.05) 0%, #FDF9F0 50%, rgba(253,249,240,0) 100%)",
        }}
      />
      <button
  onClick={onExplore}
        className="mb-6 px-8 py-3 md:px-10 cursor-pointer md:py-4 bg-gradient-to-r from-[#BC9313] to-[#D4A72C] rounded-full text-[14px] md:text-[16px] font-semibold font-switzer text-[#FDF9F0] hover:shadow-lg hover:shadow-[#BC9313]/20 transition-all duration-300 hover:scale-105"
      >
        Explore other MoneyVibes{" "}
      </button>

      <ShareResult />
     
    </div>
  );
}
