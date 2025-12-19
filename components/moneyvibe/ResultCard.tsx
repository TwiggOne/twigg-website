import React, { useMemo } from "react";
import CardResultGold from "./CardResultGold";
import Traits from "./Traits";
import ShareResult from "./ShareResult";
import {  MoneyVibeEvaluationResponse } from "./TopicData";

type ResultCardProps = {
  result: MoneyVibeEvaluationResponse | null;
};

export default function ResultCard({ result }: ResultCardProps) {


  return (
    <div
      className="
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

      {/* ✅ PASS TRAITS */}
      <Traits traits={result?.archetypes.primary.traits ??''} />

      <div
        className="my-8 h-[1px] w-full"
        style={{
          background:
            "linear-gradient(to right, rgba(253,249,240,0.05) 0%, #FDF9F0 50%, rgba(253,249,240,0) 100%)",
        }}
      />

      <ShareResult />
    </div>
  );
}
