import { FactGoldCheck } from "@/utils/SvgUtils";
import Image from "next/image";
import React from "react";

const TwiggSenseContent = () => {
  return (
    <div className="flex flex-col ">
      <Image
        src={"/twigg_sense.png"}
        width={309}
        height={112}
        className="object-cover"
        alt="twigg_sense"
      />
      <div className="h-[7px]" />

      <div className="grid grid-cols-2 gap-2">
        <SenseCard title={"Factual "} /> <SenseCard title={"Relevant "} />
      </div>
      <div className="h-[7px] md:h-[17px]" />
      <p className="text-[8px] md:text-[10px] text-[#FDF9F0] font-switzer italic">
        <span className="text-[#BC9313] font-medium">Next step: </span>
        Your ELSS SIP is only ₹2K. Consider increasing by ₹3K.
      </p>
    </div>
  );
};
interface SenseCardProps {
  title: React.ReactNode;
}

const SenseCard = ({ title }: SenseCardProps) => {
  return (
    <div className="flex flex-row rounded-[10px] p-[8px] px-[14px] md:p-[14px] items-center gap-1 md:gap-2 border border-[#BC9313]/50 backdrop-blur-[40px] shadow-md">
      <div className="w-3 h-3 md:w-4 md:h-4">      <FactGoldCheck />
</div>

      <p className="text-[10px] md:text-[12px] font-switzer text-[#FDF9F0] ">
        {title}
      </p>
    </div>
  );
};

export default TwiggSenseContent;
