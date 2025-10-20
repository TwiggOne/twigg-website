import { Terms } from "@/utils/SvgUtils";
import React from "react";

const page = () => {
  const termsSections = [
    {
      title: "Eligibility",
      points: [
        "You must be 18 years or older to use Twigg.",
        "You must be an Indian resident with a valid mobile number and/or email ID.",
        "By using Twigg, you confirm that all information provided is true and accurate.",
      ],
    },
    {
      title: "Account Responsibilities",
      points: [
        "You are responsible for maintaining the confidentiality of your account information.",
        "Any activity that occurs under your account is your responsibility.",
        "Twigg reserves the right to suspend accounts that violate our policies.",
      ],
    },
    {
      title: "Use of Services",
      points: [
        "Twigg is intended for personal, lawful, and non-commercial use.",
        "You agree not to misuse the platform or engage in fraudulent activities.",
        "Violation of these terms may result in immediate suspension of access.",
      ],
    },
  ];

  return (
    <div className="min-h-screen mt-[140px] sm:mt-[160px] lg:mt-[180px] px-[16px] sm:px-[24px]">
      {/* Header */}
      <div className="flex max-w-[1240px] items-center mx-auto w-full justify-start mb-8 flex-wrap sm:flex-nowrap"></div>

      {/* Main Card */}
      <div className="flex flex-col gap-[32px] bg-[#FDF9F0] py-[32px] sm:py-[48px] lg:py-[64px] px-[24px] sm:px-[48px] lg:px-[92px] max-w-[1240px] mx-auto rounded-[20px] sm:rounded-[20px] lg:rounded-[20px]">
        {/* Intro Section */}
        <div className="flex flex-col text-[16px] sm:text-[18px] gap-[42px] lg:text-[20px] font-switzer text-[#152D23] leading-[120%] sm:leading-[115%] lg:leading-[110%] text-justify">
          <p className="text-[30px] sm:text-[32px] lg:text-[36px] font-semibold text-[#152D23] font-bricolage  leading-[110%] ">
            Terms & Conditions
          </p>
          <p>
            Last updated: 20/10/2025
            <br />
            <br />
            <span className=" text-[14px] sm:text-[15px] lg:text-[16px] font-switzer">
              {" "}
              Welcome to Twigg. By signing up, accessing, or using Twigg, you
              agree to the following Terms & Conditions. Please read carefully.
            </span>
          </p>
        </div>

        {/* Dynamic Terms Sections */}
        <div className="flex flex-col gap-[24px] sm:gap-[28px] lg:gap-[32px]">
          {termsSections.map((section, index) => (
            <div key={index} className="flex flex-col gap-[8px]">
              <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
                {section.title}
              </p>

              {/* Bullet Points */}
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[140%] sm:leading-[135%] lg:leading-[130%] text-justify">
                {section.points.map((point, i) => (
                  <p
                    key={i}
                    className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-[#152D23] before:top-0"
                  >
                    {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
