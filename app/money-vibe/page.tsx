import MoneyMainContent from "@/components/money-vibe/MoneyMainContent";
import MoneyVibeHeader from "@/components/money-vibe/MoneyVibeHeader";
import { MoneyVibeBg } from "@/utils/SvgUtils";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen  relative mx-auto w-full py-[41px] flex flex-col gap-[56px] justify-center items-center">
      <div className="max-w-7xl absolute  z-10 mx-auto w-full py-[41px] flex flex-col gap-[56px] justify-center items-center">
        <MoneyVibeHeader />
        <MoneyMainContent />
      </div>

      <div className="absolute left-0 top-0">
        <MoneyVibeBg />
      </div>
    </div>
  );
};

export default page;
