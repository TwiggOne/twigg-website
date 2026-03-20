"use client";
import { useEffect, useState } from "react";
import { Mic } from "lucide-react";
import { UpArrow } from "@/utils/SvgUtils";

interface TypewriterSearchProps {
  texts: string[];
}

export default function TypewriterSearch({ texts }: TypewriterSearchProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const words = currentText.split(" ");
    const typingSpeed = deleting ? 350 : 550;

    const timeout = setTimeout(() => {
      const currentWordCount = displayText.split(" ").filter(Boolean).length;

      if (!deleting) {
        if (currentWordCount < words.length) {
          setDisplayText(words.slice(0, currentWordCount + 1).join(" "));
        } else {
          setTimeout(() => setDeleting(true), 2000);
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
  }, [displayText, deleting, textIndex, texts]);

  return (
    <>
      <div
        className="relative w-full  py-[10px] flex flex-row justify-between items-center  rounded-[8px] sm:rounded-[10px] sm:py-[13px] mx-auto  px-[10px] sm:px-[14px]"
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
          <span className="text-white font-switzer text-[12px] sm:text-[11px] leading-[18px]   whitespace-nowrap">
            {displayText}
            <span className="inline-block w-[2px] h-[1em] bg-[#FDF9F0] animate-blink align-middle ml-[2px]" />
          </span>
        </div>

        {/* Icons */}
        <div className=" flex items-center gap-1">
          <Mic size={20} color="#D9D9D9" className="hidden sm:block mr-2" />
          <Mic size={14} color="#D9D9D9" className="sm:hidden mr-2" />

          <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] rounded-full bg-[#BC9313] flex items-center justify-center">
            <div className="w-[12px] h-[12px] sm:w-[12px] sm:h-[12px] text-[#FDF9F0]">
              <UpArrow right />
            </div>
          </div>
        </div>
      </div>

      {/* Cursor animation */}
      <style jsx>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </>
  );
}