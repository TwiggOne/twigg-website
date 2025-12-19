// import { LoadingTwiggLogo } from "@/utils/SvgUtils";
import React from "react";
import { LoadingTwiggLogo } from './LoadingSvg'

const LoadingMoneyUi = () => {
  return (
    <div
      className="
      h-[440px] md:h-[506px]
      flex flex-col gap-[45px]
      p-[56px]
      bg-[#FDF9F0]
      border border-[#BC9313]/20
      rounded-[40px]
      items-center justify-center
    "
    >
      <div className="w-[120px] h-[123px] md:w-[182px] md:h-[190px]"></div>
      <LoadingTwiggLogo />
      <h3 className="text-[20px] md:text-[28px] text-center font-medium text-[#152D23] font-bricolage leading-[100%]">
        Great job,
        <br />
        We’re shaping your money vibe.{" "}
      </h3>
    </div>
  );
};

export default LoadingMoneyUi;
