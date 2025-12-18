import { ResultGoldCard, StarResult } from "@/utils/SvgUtils";
import Image from "next/image";
import React from "react";

const CardResultGold = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="flex flex-col gap-4 text-center absolute">
        <h1 className="text-[24px] md:text-[40px] font-semibold font-bricolage text-[#152D23]">
          The Optimizer
        </h1>
        <h1 className="text-[16px] md:text-[24px]  font-switzer text-[#152D23]/80">
          Goal-based, methodical,
          <br />
          detail-oriented{" "}
        </h1>
      </div>
      <div className="absolute left-1 top-18">
        <StarResult />
      </div>
      <div className="absolute right-10 -top-6">
        <StarResult />
      </div>
     <div className="absolute -right-5 top-[-30px] w-[184px] h-[150px] md:w-[251px] md:h-[205px]">
  <Image
    alt="rupee_icon"
    src="/moneyvibe/rupee_result_right.png"
    fill
    className="object-contain"
  />
</div>

   <div className="absolute -left-5 bottom-[30px] w-[116px] h-[58px] md:w-[153px] md:h-[78px]">
  <Image
    alt="rupee_icon"
    src="/moneyvibe/left_1_rupee.png"
    fill
    className="object-contain"
  />
</div>

<div className="absolute -left-2 bottom-[-10px] w-[65px] h-[45px] md:w-[92px] md:h-[65px]">
  <Image
    alt="rupee_icon"
    src="/moneyvibe/left_2_rupee.png"
    fill
    className="object-contain"
  />
</div>


      <div className="w-[303px] h-[184px] md:w-[511px] md:h-[304px]">
        <ResultGoldCard />
      </div>
    </div>
  );
};

export default CardResultGold;
