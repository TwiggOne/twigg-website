import { SocialBg } from "@/utils/SvgUtils";
import { Instagram, Linkedin } from "lucide-react";
import React from "react";

const ShareResult = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-0.5 items-center text-center">
        <p className="text-[#BC9313] text-[14px] font-switzer ">
          Share the result
        </p>
        <p className="text-[#FDF9F0] text-[24px] font-switzer ">
          Flex Your MoneyVibe
        </p>
      </div>
      <div className="flex flex-row gap-4 p-[10px] w-full items-center justify-center rounded-[8px] border border-[#BC9313]/20">
        <div className="relative flex items-center justify-center">
          <SocialBg />
          <a
            href="https://www.instagram.com/twigg.one/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="absolute text-white cursor-pointer"
          >
            <Instagram size={22} />{" "}
          </a>
        </div>
        <div className="relative flex items-center justify-center">
          <SocialBg />
          <a
            href="https://www.linkedin.com/company/twigg-one/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="absolute text-white cursor-pointer"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareResult;
