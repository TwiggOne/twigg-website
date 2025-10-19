import {
  ProblemMobileBprder,
  QuesitonMark,
  Stress,
  UpArrow,
  Wallet,
} from "@/utils/SvgUtils";
import Image from "next/image";
import React from "react";

const ProblemSectionMobile = () => {
  return (
    <div className="flex flex-col  py-8 items-center px-[22px] bg-[#FDF9F0] rounded-[30px] relative">
      <div className="flex mb-8 self-start flex-col font-semibold text-[#214838] font-bricolage text-[18px] leading-[120%]">
        Stuck in the
        <span className="text-[#BC9313]">Cycle of Financial Frustration?</span>
      </div>
      {/* Outer Gradient Border */}
      <div
        className="relative w-[219px] h-[219px] rounded-full p-[1.4px] flex items-center justify-center"
        style={{
          background: `linear-gradient(
            to top,
            #BC9313 0%,
            rgba(21, 45, 35, 0.6) 39%,
            rgba(21, 45, 35, 0) 80%
          )`,
        }}
      >
        {/* Inner Circle */}
        <div className="w-full h-full rounded-full bg-[#FDF9F0] flex items-center justify-center relative">
          <Image
            src={"/Problem.svg"}
            alt="problem"
            height={200}
            width={200}
            className="object-cover w-[210px] h-[210px]"
          />

          {/* Small Circles */}
          <div className="absolute w-2 h-2 rounded-full bg-[#B7B7B7] left-0 top-[70%] transform -translate-y-1/2 translate-x-1/2" />
          <div className="absolute w-2 h-2 rounded-full bg-[#B7B7B7] right-0 top-[70%] transform -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute w-3 h-3 rounded-full bg-[#BC9313] bottom-[-6px] left-1/2 transform -translate-x-1/2" />
          <div className="flex flex-col absolute bottom-2 gap-1 -left-10 items-center">
            <div className="w-5 h-5 border border-[#000000]/20   flex items-center justify-center rounded-full text-[#B7B7B7]">
              <div className="h-3 w-3">
                <Stress />
              </div>
            </div>
            <div className="font-bricolage font-medium text-[9px] text-[#B7B7B7] leading-[110% text-center">
              Constant
              <br />
              Money Stress
            </div>
          </div>
          <div className="flex flex-col absolute bottom-2 gap-1 -right-11 items-center">
            <div className="w-5 h-5 border border-[#000000]/20   flex items-center justify-center rounded-full text-[#B7B7B7]">
              <div className="h-3 w-3">
                <Wallet />
              </div>
            </div>
            <div className="font-bricolage font-medium text-[9px] text-[#B7B7B7] leading-[110% text-center">
              Hard to
              <br />
              manage money{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col mt-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%]  flex flex-col items-center justify-center gap-2">
          {/* Icon */}
          <div className="w-8 h-8 flex justify-center items-center bg-[#BC9313] rounded-full">
                <div className="flex items-center justify-center">
            <div className="w-[8px] h-[15px] text-white">
              {" "}
              <QuesitonMark />
            </div>
          </div>
          </div>
      

          {/* Text */}
          <div className="text-[14px] font-bricolage text-[#152D23] leading-[110%] font-semibold text-center">
            Lost in <br />
            Money Jargon
          </div>
        </div>

        <div className=" w-full absolute bottom-2 left-[-20%]">
          <div
            className="w-[146px] flex flex-col gap-3 rounded-[15px] py-[22px] px-[16]  "
            style={{
              background:
                "linear-gradient(144.51deg, rgba(188, 147, 19, 0.2) -17.11%, rgba(253, 249, 240, 0.2) 55.86%, rgba(228, 215, 174, 0.2) 95.79%)",
            }}
          >
            <h3 className="font-bricolage text-[22px] font-bold leading-[1.2] text-[#BC9313]">
              24%
            </h3>
            <div className="flex flex-col gap-[20px]">
              <p className="font-switzer text-[#214838CC] text-[10px] leading-[100%]">
                Only 24% of Indian adults are financially literate.{" "}
              </p>
            </div>
          </div>
        </div>
        <ProblemMobileBprder />
      </div>
      <div
        className=" flex w-[236px] max-sm:self-end  flex-col gap-3 rounded-[15px] py-[22px] px-[16px]  "
        style={{
          background:
            "linear-gradient(144.51deg, rgba(188, 147, 19, 0.2) -17.11%, rgba(253, 249, 240, 0.2) 55.86%, rgba(228, 215, 174, 0.2) 95.79%)",
        }}
      >
        <h3 className="font-bricolage text-[16px] font-bold leading-[1.2] text-[#BC9313]">
          CAGR, XIRR, ETFs..
        </h3>
        <div className="flex flex-col gap-[20px]">
          <p className="font-switzer text-[#214838CC] text-[10px] leading-[100%]">
            For most, terms like CAGR, XIRR, ETFs, Alpha, Beta sound like
            another language.{" "}
          </p>
        </div>
      </div>
      <div className="font-switzer text-[12px] text-[#214838] leading-[120%] mt-8 self-start">
        Confusion, delays, bad choices, and constant stress , most of us are
        running hard, but getting nowhere with our money.
      </div>
      <div className="flex flex-col gap-[2px] self-start mt-8">
        <div className="text-[14px] font-semibold text-[#214838]">
          Need a Solution?
        </div>
        <div className="flex flex-row gap-[4px] items-center">
          <p className="text-[12px] text-[#BC9313] font-medium leading-[100%]">
            Scroll down
          </p>
          <div className="w-[12px] h-[12px] bg-[#BC93130D] flex items-center justify-center border border-[#BC93131A] rounded-full">
            <div className="w-[5px] h-[5px] text-[#BC9313]">
              <UpArrow flip />
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProblemSectionMobile;
