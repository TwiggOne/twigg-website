import { ResultGoldCard, StarResult } from "@/utils/SvgUtils";
import Image from "next/image";
import React from "react";
import CardResultGold from "./CardResultGold";
import Traits from "./Traits";
import ShareResult from "./ShareResult";

const ResultCard = () => {
  return (
    <div
      className="
        bg-[rgba(253,249,240,0.02)]
        rounded-[60px]
        p-[44px]
        w-full
        items-center
        flex
        flex-col
        border border-[#BC9313]/20
        backdrop-blur-[50px]
      "
    >
      <div className="leading-tight">
        <h1 className="text-[40px] font-semibold font-bricolage text-[#FDF9F0]">
          Here’s Your
        </h1>
        <h1 className="text-[40px] font-semibold font-bricolage text-[#BC9313]">
          MoneyVibe
        </h1>
      </div>
      <CardResultGold />
      <Traits />
      <div
        className="my-8 h-[1px] w-full"
        style={{
          background:
            "linear-gradient(to right, rgba(253,249,240,0.05) 0%, #FDF9F0 50%, rgba(253,249,240,0) 100%)",
        }}
      ></div>
      <ShareResult />
    </div>
  );
};

export default ResultCard;
