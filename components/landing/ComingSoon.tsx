import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { easing, duration, getVariants } from "@/lib/animations";

export const CommingSoon = () => {
  // Define the scrolling text string
  const scrollingText = "Coming soon Coming soon Coming soon Coming soon ";
  // Duplicate the text to cover two full cycles for seamless loop
  const seamlessText = scrollingText + scrollingText + scrollingText;

  return (
    <section className="relative w-full flex flex-col items-center justify-center px-6 pb-20 lg:pb-12 py-12 overflow-hidden">
      {/* BACKGROUND SCROLLING TEXT */}
      <motion.div
        className="absolute inset-0 w-full flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration.normal, delay: 0.1, ease: easing.smooth }}
      >
        <motion.h2
          className="text-[4rem] md:text-[15rem] font-bold text-[#FDF9F033] select-none whitespace-nowrap font-bricolage absolute"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, // Slower for more subtle effect
            ease: easing.linear,
            repeatType: "loop"
          }}
          style={{ willChange: 'transform' }} // Performance optimization
        >
          {seamlessText}
        </motion.h2>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center">
        {/* MOCKUP SECTION */}
        <motion.div
          className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[790px] h-[250px] sm:h-[400px] md:h-[590px] flex items-center justify-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
        >
          <div className="relative flex items-center justify-center">
            {/* Outer mockup */}
            <Image
              src="/Mockup.png"
              alt="Twigg App Mockup"
              width={542}
              height={590}
              className="object-contain w-[324px] h-[256px] md:w-[542px] md:h-[590px]"
              priority
            />

            {/* Inner image (centered & rotated) */}
            <Image
              src="/main.png"
              alt="app_icon"
              width={141}
              height={128}
              className="object-contain absolute top-[26%] left-1/2 -translate-x-1/2 rotate-[6.43deg] w-[80px] h-[65px] md:w-[141px] md:h-[128px]"
              priority
            />

            {/* Gradient overlay */}
            <div
              className="absolute left-1/2 bottom-0 h-[120px] md:h-[258px] w-[324px] md:w-[790px]"
              style={{
                transform: "translateX(-50%)",
                background:
                  "linear-gradient(180deg, rgba(21, 45, 35, 0) 0%, rgba(21, 45, 35, 0.8) 61.31%, #152D23 89.67%)",
              }}
            ></div>
          </div>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          className="text-center flex flex-col gap-[16px] -mt-6 lg:-mt-10 z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.6,
          }}
        >
          <motion.h3
            className="font-bricolage text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold text-[#FDF9F0]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Twigg is <span className="text-[#D4AF37]">on its way!</span>
          </motion.h3>

          <motion.p
            className="font-switzer max-w-[650px] text-[#FDF9F0]/80 text-base sm:text-lg md:text-[24px] font-normal leading-[120%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Your co-pilot for all your financial needs. smarter saving,
            tracking, and investing made simple.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
export default CommingSoon;
