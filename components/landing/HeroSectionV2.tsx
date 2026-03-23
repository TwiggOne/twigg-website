import React from "react";
import HeroGoldLabelItem from "../ui/components/HeroGoldLabelItem";
import DownloadButton from "../ui/components/DownloadButton";
import HeroRightContent from "../ui/components/HeroRightContent";

const HeroSectionV2: React.FC = () => {
  const labels: string[] = [
    "Salaried Professionals",
    "Early Investors",
    "First-gen Wealth Builders",
    "High-income,Low-clarity",
  ];

  return (
    <section className="relative z-10 w-full pt-30 ">
      <div className="relative max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-4 ">
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center md:w-[50%] mt-[150px] md:mt-[0px] text-center lg:text-left mb-12 lg:mb-0">
          <h2
            className="text-[32px] sm:text-[32px] lg:text-[72px] leading-[1.1]"
            style={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
          >
            <span className="text-[#BC9313] block">Money,</span>
            <span className="text-[#FDF9F0] block">Made simple!</span>
          </h2>

          <p className="text-[#FDF9F0]/80 font-normal text-[16px] sm:text-[16px] lg:text-[20px] mt-[32px] md:mt-[20px] leading-[120%] mb-[32px] md:mb-[24px] font-switzer max-w-[473px]">
            Trusted guidance for every money move you make your accounts,
            investments, loans, and insurance, in one clear space.
          </p>

          {/* LABELS */}
          <div className="flex flex-wrap gap-3 max-w-[410px]">
            {labels.map((label, index) => (
              <HeroGoldLabelItem key={index} label={label} />
            ))}
          </div>

          <div className="h-[56px]" />

          <div className="flex gap-4">
            <a
              href="https://apps.apple.com/in/app/twigg-one/id6758598241"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadButton platform="apple" />
            </a>

            {/* Google Play Store */}
            <a
              href="https://play.google.com/store/apps/details?id=com.aadyantx.twigg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadButton platform="google" />
            </a>
          </div>
        </div>

        <div className="relative md:w-[50%] flex justify-center">
          <HeroRightContent />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionV2;
