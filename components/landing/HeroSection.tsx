import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Tag1,
  Tag2,
  Tag3,
  Tag4,
  OuterCircle,
  MidCircle,
  InnerCircle,
  Core,
  UpArrow,
} from "@/utils/SvgUtils";

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full pt-30">
      {/* Background Glows */}
      {/* <div className="absolute top-[25%] right-[20%] w-64 sm:w-80 md:w-[420px] lg:w-[480px] h-64 sm:h-80 md:h-[420px] lg:h-[480px] bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[20%] left-[18%] w-64 sm:w-80 md:w-[420px] lg:w-[480px] h-64 sm:h-80 md:h-[420px] lg:h-[480px] bg-emerald-500/10 rounded-full blur-3xl" /> */}

      {/* Flex Container */}
      <div className="relative max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between  items-center px-6 lg:px-4">
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center w-[50%]  text-center lg:text-left mb-12 lg:mb-0">
          <h2
            className="text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.1] "
            style={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
          >
            <span className="text-[#BC9313] block">Money,</span>
            <span className="text-[#FDF9F0] block">Made simple!</span>
          </h2>

          <p
            className="font-normal text-[18px] sm:text-[20px] lg:text-[24px] mt-[32px] leading-[130%] mb-[61px] font-switzer max-w-[415px]"
            style={{ color: "#FDF9F0CC" }}
          >
            Track, save, and invest smarter get clear on your money in seconds.
          </p>

          <button className="bg-[#BC9313] text-white w-[239px] h-[54px] mb-[32px] rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-xl">
            Join Wishlist
          </button>
        </div>

        {/* RIGHT SECTION */}
        <motion.div
          className="
            flex-shrink-0 flex items-center justify-center 
          w-[50%] aspect-square relative
          "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* SVG Circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-full opacity-90">
              <OuterCircle />
            </div>
            <div className="absolute w-[72%] h-[72%] opacity-90">
              <MidCircle />
            </div>
            <div className="absolute w-[46%] h-[46%] opacity-90">
              <InnerCircle />
            </div>
          </div>

          {/* Center Icon */}
          {/* Center Icon */}
          <div className="relative w-[300px] h-[270px] flex items-center justify-center">
            {/* Core Background */}
            <motion.div
              className="absolute inset-[-25] rounded-full"
              style={{
                width: 355,
                height: 355,
                background: "rgba(188, 147, 19, 1)", // gold, animation will control opacity
                filter: "blur(80px)",
                zIndex: 0,
                pointerEvents: "none",
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="f"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#f)" /></svg>')`,
                backgroundBlendMode: "overlay",
                backgroundSize: "100% 100%",
              }}
              animate={{
                opacity: [1, 0.5, 1], // pulse effect
              }}
              transition={{
                duration: 10, // 10s loop
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image */}
            <Image
              src="/main.png"
              alt="Hero Image"
              fill
              className="object-contain relative z-20"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
              }}
            />
          </div>

          {/* TAGS */}
          <TagWithText
            Tag={Tag1}
            text="Invest Fearlessly"
            className="absolute top-[23%] left-[-6%]"
          />
          <TagWithText
            Tag={Tag2}
            text="Spend Mindfully"
            className="absolute top-[16%] right-[-3%]"
          />
          <TagWithText
            Tag={Tag3}
            text="Optimized Spending"
            className="absolute bottom-[17%] left-[2%]"
          />
          <TagWithText
            Tag={Tag4}
            text="Ask Your Finances"
            className="absolute bottom-[30%] right-[-10%]"
          />
          <div className="absolute bottom-[15%] right-[-5%]">
            <div
              className="flex items-center justify-center w-[48px] h-[48px] border rounded-full border-[#BC931399]"
              style={{
                boxShadow: "0px 4px 30px 0px #BC931359",
                backdropFilter: "blur(40px)",
              }}
            >
              <UpArrow />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* TagWithText Component */
const TagWithText = ({
  Tag,
  text,
  className,
}: {
  Tag: React.ElementType;
  text: string;
  className?: string;
}) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="relative w-[218px] h-[66px] flex items-center justify-center">
      <Tag />
      <span
        className="absolute text-[#FDF9F0] text-[19px]"
        style={{
          transform: "translate(0%, -20%)",
          fontFamily: "Switzer",
          fontWeight: 600,
          fontStyle: "normal",
          lineHeight: "100%",
          letterSpacing: "0%",
        }}
      >
        {text}
      </span>
    </div>
  </div>
);
