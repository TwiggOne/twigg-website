"use client";
import { useEffect, useState } from "react";
import { Mic } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { UpArrow } from "@/utils/SvgUtils";

export default function CTASection() {
  const texts = [
    "Will I lose 5kg weight in a month?",
    "Is now a good time to invest in gold?",
    "How much should I save monthly?",
    "Can Twigg help plan my retirement?",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const words = currentText.split(" ");
    const typingSpeed = deleting ? 350 : 550; // speed per word

    const timeout = setTimeout(() => {
      const currentWordCount = displayText.split(" ").filter(Boolean).length;

      if (!deleting) {
        if (currentWordCount < words.length) {
          setDisplayText(words.slice(0, currentWordCount + 1).join(" "));
        } else {
          setTimeout(() => setDeleting(true), 2000); // pause before deleting
        }
      } else {
        if (currentWordCount > 0) {
          setDisplayText(words.slice(0, currentWordCount - 1).join(" "));
        } else {
          setDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, deleting, textIndex]);

  return (
    <section className="relative w-full h-auto min-h-[600px] bg-[#152D23] flex flex-col items-center justify-start pt-12 sm:pt-20 px-4">
      {/* Heading and Subheading */}
      <div className="flex flex-col items-center gap-4 mt-12 sm:mt-24 text-center">
        <h1 className="font-bricolage text-[20px] sm:text-[56px] font-semibold text-[#FDF9F0] leading-[100%] sm:leading-[100%]">
          Ask finance, <span className="text-[#BC9313]">Twigg answers!</span>
        </h1>
        <p className="font-switzer text-[14px] sm:text-[24px] font-normal text-[#FDF9F0]/80 leading-[120%] sm:leading-[120%] ">
          Finally, an AI co-pilot built for your money: clear,
          <br />
          personal, and always on your side.
        </p>
      </div>

      {/* Search Bar */}
      <div
        className="relative w-full sm:w-[613px] py-[10px] rounded-[8px] sm:rounded-[20px] sm:py-[26px] mx-auto mt-8 sm:mt-[56px] px-[10px] sm:px-[24px]"
        style={{
          background: "#FDF9F014",
          border: "1px solid #fdf9f026",
          boxShadow: `
            0px 7px 15px 0px #0000001A,
            0px 27px 27px 0px #00000017,
            0px 61px 36px 0px #0000000D,
            0px 108px 43px 0px #00000003,
            0px 169px 47px 0px #00000000,
            inset 0px 4px 4px 0px #FDF9F033
          `,
        }}
      >
        <div className="flex items-center">
          {/* Display the typing text + blinking cursor together */}
          <span className="text-white font-switzer text-[12px] sm:text-[20px] leading-[18px] sm:leading-[130%] px-[11px] py-[10px] whitespace-nowrap">
            {displayText}
            <span className="inline-block w-[2px] h-[1em] bg-[#FDF9F0] animate-blink align-middle ml-[2px]" />
          </span>
        </div>

        {/* Icons */}
        <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 sm:gap-4">
          <Mic size={24} color="#D9D9D9" className=" hidden sm:block mr-2" />
          <Mic size={14} color="#D9D9D9" className="sm:hidden mr-2" />

          <div className="w-[24px] h-[24px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#BC9313] flex items-center justify-center">
            <div className="w-[12px] h-[12px] sm:w-[21px] sm:h-[22px] text-[#FDF9F0]">
              <UpArrow right />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-12 mb-24 sm:mt-20 w-full">
        <FeatureCard />
      </div>

      {/* Add blinking cursor animation */}
      <style jsx>{`
        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </section>
  );
}
