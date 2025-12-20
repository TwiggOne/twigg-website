import { UpArrow } from "@/utils/SvgUtils";
import React from "react";

export const IntroCard: React.FC<{ next: () => void }> = ({ next }) => {
  return (
    <div
      className="
        relative
        h-[440px] md:h-[506px]
        md:w-[97%]
        flex flex-col gap-[10px] text-start
        p-[30px] md:p-[47px] items-start
        bg-[#FDF9F0]
        border border-[#BC9313]/20
        
        rounded-[40px]
      "
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-[#BC9313] mb-4">
        Welcome to MoneyVibe
      </h2>

      <p className="text-[#214838]/80 text-base md:text-lg mb-2">
        MoneyVibe helps you understand how you think and feel about money.
      </p>
      <p className="text-[#214838]/80 text-base md:text-lg mb-2">
        Answer a few everyday questions; there are no right or wrong answers.
      </p>
      <p className="text-[#214838]/80 text-base md:text-lg mb-6">
        Time: 6–8 minutes.
      </p>

         <div
              className=" p-1.5 px-4 bg-[#BC9313]/10  border border-[#BC9313]/40 rounded-[40px] w-fit flex text-[#BC9313]  justify-end-safe ml-auto absolute bottom-5 right-5 cursor-pointer"
              onClick={next}
            >
              <div className="w-5 h-5 md:w-6 md:h-6">
                <UpArrow right />
              </div>
            </div>
    </div>
  );
};
