import { PointerLogo } from "@/utils/SvgUtils";
import Image from "next/image";
import React from "react";
import { MoneyVibeArchetype } from "./TopicData";

interface ClassicPrimaryProps {
  archetype: MoneyVibeArchetype;
}

const ClassicPrimary: React.FC<ClassicPrimaryProps> = ({ archetype }) => {
  return (
    <div className="max-w-[451px] w-full flex flex-col gap-[13px] py-[23px] px-[30px]       border border-[#BC9313]/10
      bg-gradient-to-br
      from-[#BC9313]/15
      via-[#152D23]/20
      to-[#152D23] rounded-[20px]">
      {/* Header */}
      <div className="flex flex-col max-w-[269px] w-full gap-1">
        <Image
          height={43}
          width={43}
          alt={archetype.title}
          src={archetype.pri_icon}
        />

        <p className="mt-1 text-[22px] md:text-[24px] font-semibold font-bricolage text-[#BC9313]">
          {archetype.title}
        </p>

        <p className="text-[12px] md:text-[14px] font-switzer text-[#FDF9F0]/80">
          {archetype.recognitionHook}
        </p>
      </div>

      {/* You Probably */}
      <div className="flex flex-col gap-2">
        <p className=" text-[14px] md:text-[16px] font-switzer text-[#BC9313]">
          You Probably
        </p>

        {archetype.youProbably.map((item, index) => (
          <div key={index} className="flex gap-2 items-start">
            <PointerLogo />
            <p className="text-[12px] md:text-[14px] text-[#FDF9F0]/80 font-switzer">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicPrimary;
