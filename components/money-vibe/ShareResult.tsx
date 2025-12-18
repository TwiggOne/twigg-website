import { SocialBg } from "@/utils/SvgUtils";
import { Instagram, Linkedin } from "lucide-react";
import React from "react";

const ShareResult = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-0.5 items-center text-center">
        <p className="text-[#BC9313] text-[12px] md:text-[14px] font-switzer ">
          Share the result
        </p>
        <p className="text-[#FDF9F0] text-[16px] md:text-[24px] font-switzer ">
          Flex Your MoneyVibe
        </p>
      </div>
      <div className="flex flex-row gap-4 p-[10px] w-full items-center justify-center rounded-[8px] border border-[#BC9313]/20">
        <div className="relative flex items-center justify-center">
          <div className="w-10 h-10 md:w-14 md:h-14 ">
            <SocialBg />
          </div>
          <a
            href="https://www.instagram.com/twigg.one/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="absolute text-white cursor-pointer"
          >
            <Instagram className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </a>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-10 h-10 md:w-14 md:h-14 ">
            <SocialBg />
          </div>{" "}
          <a
            href="https://www.linkedin.com/company/twigg-one/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="absolute text-white cursor-pointer"
          >
            <Linkedin className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareResult;
