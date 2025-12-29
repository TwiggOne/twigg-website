import { PointerLogo } from "@/utils/SvgUtils";
import React from "react";

interface WhatThisMeansProps {
  whatThisMeans: string[];
  watchOutFor: string;
}

const WhatThisMeans: React.FC<WhatThisMeansProps> = ({
  whatThisMeans,
  watchOutFor,
}) => {
  return (
    <div
      className="md:max-w-[308px] w-full flex flex-col py-[21px] px-[15px]
      border border-[#BC9313]/10
      bg-gradient-to-br from-[#BC9313]/15 via-[#152D23]/20 to-[#152D23]
      rounded-[20px] gap-[38px]"
    >
      {/* What this means */}
      <div className="flex flex-col gap-3">
        <p className="text-[12px] font-medium text-[#BC9313] font-switzer">
          What this means for your money
        </p>

        <div className="flex flex-col gap-[19px]">
          {whatThisMeans.map((item, index) => (
            <div key={index} className="flex gap-2 items-start leading-tight">
              <PointerLogo />
              <p className="text-[12px] md:text-[14px] text-[#FDF9F0]/80 font-switzer">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Watch out */}
      <div className="flex flex-col gap-2">
        <p className="text-[12px] font-medium text-[#BC9313] font-switzer">
          One thing to watch out for
        </p>
        <p className="text-[12px] text-[#FDF9F0]/80 font-switzer leading-tight">
          {watchOutFor}
        </p>
      </div>
    </div>
  );
};

export default WhatThisMeans;
