import React from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";
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
  RightArrowInline,
} from "@/utils/SvgUtils";

export default function HeroSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6, // 0.6s delay between tags
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      delay: 0.5,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  const AnimatedTag = ({
    Tag,
    text,
    className,
  }: {
    Tag: React.ElementType;
    text: string;
    className?: string;
  }) => (
    <motion.div className={className} variants={tagVariants}>
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
    </motion.div>
  );
  return (
    <section className="relative z-10 w-full pt-30 overflow-hidden">
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
            className="font-normal text-[16px] sm:text-[16px] lg:text-[24px] mt-[32px] md:mt-[32px] leading-[130%] mb-[32px] md:mb-[61px] font-switzer max-w-[300px] md:max-w-[415px]"
            style={{ color: "#FDF9F0CC" }}
          >
            Track, save, and invest smarter get clear on your money in seconds.
          </p>
          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <motion.button
              className="bg-[#BC9313] cursor-pointer text-white 
      w-[165px] md:w-[239px] h-[40px] md:h-[54px] 
      md:mb-[32px] rounded-full font-semibold text-[14px] md:text-lg 
      shadow-xl flex items-center justify-center overflow-hidden relative"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* Text */}
              <motion.span
                variants={{
                  rest: {
                    x: 10,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                  hover: {
                    x: -10,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
                className="transition-transform"
              >
                Join Wishlist
              </motion.span>

              {/* Icon */}
              <motion.div
                variants={{
                  rest: {
                    opacity: 0,
                    x: 0,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                  hover: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
                className="w-5 h-5 text-white flex-shrink-0"
              >
                <UpArrow right />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <motion.div
          className="
            flex-shrink-0 mt-[60px] md:mt-[-20px] flex items-center justify-center 
          md:w-[50%] aspect-square relative
          "
        >
          {/* SVG Circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[400px] h-[406px] md:w-full md:h-full ">
              <OuterCircle />
            </div>
            <div className="absolute w-[285px] h-[291px] md:w-[72%] md:h-[72%] ">
              <MidCircle />
            </div>
            <div className="absolute w-[168px] h-[168px] md:w-[36%] md:h-[36%] ">
              <InnerCircle />
            </div>
          </div>

          {/* Center Icon */}
          <div className="relative w-[115px]   h-[103px] md:w-[170px] md:h-[170px] lg:w-[320px] lg:h-[290px] flex items-center justify-center">
            {/* Core Background */}
            <motion.div
              className="
      absolute rounded-full
      w-[170px] h-[170px]
      md:w-[170px] md:h-[170px]
      lg:w-[355px] lg:h-[355px]
    "
              style={{
                background: "rgba(188, 147, 19, 1)",
                filter: "blur(80px)",
                zIndex: 0,
                pointerEvents: "none",
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="f"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#f)" /></svg>')`,
                backgroundBlendMode: "overlay",
                backgroundSize: "100% 100%",
              }}
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 10,
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
                boxShadow: `
      0px 9px 20px 0px #000000A3,
      0px 37px 37px 0px #0000008C,
      0px 84px 50px 0px #00000052,
      0px 149px 59px 0px #0000001A,
      0px 232px 65px 0px #00000003
    `,
              }}
            />
          </div>

          {/* TAGS */}
          <motion.div
            variants={containerVariants}
            className="absolute inset-0"
            initial="hidden"
            animate="visible"
          >
            {/* Top Left */}
            <AnimatedTag
              Tag={Tag1}
              text="Invest Fearlessly"
              className="
      absolute 
      top-[-40%] left-[-140%]
      sm:top-[-50%] sm:left-[-160%]
      md:top-[20%] md:left-[-20%]
      lg:top-[23%] lg:left-[-6%]
      scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100
    "
            />

            {/* Top Right */}
            <AnimatedTag
              Tag={Tag2}
              text="Spend Mindfully"
              className="
      absolute 
      top-[-50%] right-[-130%]
      sm:top-[-50%] sm:left-[90%]
      md:top-[12%] md:left-[50%]
      lg:top-[16%] lg:left-[65%]
      scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100
    "
            />

            {/* Bottom Left */}
            <AnimatedTag
              Tag={Tag3}
              text="Optimized Spending"
              className="
      absolute 
      bottom-[-55%] left-[-120%]
      sm:bottom-[-60%] sm:left-[-150%]
      md:bottom-[12%] md:left-[-15%]
      lg:bottom-[17%] lg:left-[2%]
      scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100
    "
            />

            {/* Bottom Right */}
            <AnimatedTag
              Tag={Tag4}
              text="Ask Your Finances"
              className="
      absolute 
      bottom-[-40%] left-[50%]
      sm:bottom-[-50%] sm:left-[80%]
      md:bottom-[18%] md:left-[67%]
      lg:bottom-[25%] lg:left-[70%]
      scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100
    "
            />
          </motion.div>

          <div
            className="fixed bottom-[20%] right-4 z-50 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div
              className="flex items-center justify-center w-[48px] h-[48px] border rounded-full border-[#BC931399]"
              style={{
                boxShadow: "0px 4px 30px 0px #BC931359",
                backdropFilter: "blur(40px)",
              }}
            >
              <div className="w-[18px] h-[19px] text-[#BC9313]">
                <UpArrow />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
