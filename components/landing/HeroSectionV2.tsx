import React from "react";
import HeroGoldLabelItem from "../ui/components/HeroGoldLabelItem";

const HeroSectionV2 = () => {
  return (
    <section className="relative z-10 w-full pt-30 ">
      <div className="relative max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-4 ">
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center md:w-[50%] mt-[150px] md:mt-[0px] text-center lg:text-left mb-12 lg:mb-0">
          <h2
            className="text-[32px] sm:text-[32px] lg:text-[72px] leading-[1.1] "
            style={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
          >
            <span className="text-[#BC9313] block">Money,</span>
            <span className="text-[#FDF9F0] block">Made simple!</span>
          </h2>

          <p
            className="font-normal text-[16px] sm:text-[16px] lg:text-[24px] mt-[32px] md:mt-[20px] leading-[130%] mb-[32px] md:mb-[24px] italic font-switzer max-w-[473px] md:max-w-[473px]"
            style={{ color: "#FDF9F0CC" }}
          >
            Trusted guidance for every money move you make  your accounts, investments, loans, and insurance, in one clear space.
          </p>
<div>

  <HeroGoldLabelItem />
</div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default HeroSectionV2;
