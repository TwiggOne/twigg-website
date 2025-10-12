"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { CircleSheild } from "@/utils/SvgUtils"; // Assuming this utility is available

export const Trust = () => {
  const [animated, setAnimated] = useState(false);
  const headingControls = useAnimation();
  const listControls = useAnimation();
  const shieldControls = useAnimation();

  // --- Animation Logic for Large Screens ---
  const handleHover = async () => {
    if (!animated) {
      setAnimated(true);

      // Start heading and shield together
      headingControls.start("visible");
      shieldControls.start("visible");

      // Delay trust points slightly after heading starts
      setTimeout(() => {
        listControls.start("visible");
      }, 1500);
    }
  };

  // Heading animation
  const headingVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 1.4,
      },
    },
  };

  // Trust points animation
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const shieldVariants = {
    hidden: {
      y: 400,
      x: -100,

      rotateY: 360, // spins horizontally
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      x: -100,

      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
  // ----------------------------------------

  const trustPoints = [
    {
      title: "Your Interests First, Always!",
      description:
        "Advice that works only for your goals. No distractions. No side deals.",
      icon: "/Trust/1.svg",
    },
    {
      title: "Bank-Grade Security, SEBI & RBI Compliant.",
      description:
        "Your data and money are protected with the highest regulatory standards.",
      icon: "/Trust/2.svg",
    },
    {
      title: "100% Transparent, No Hidden Incentives.",
      description:
        "What you see is what you get. Clear guidance, zero conflicts.",
      icon: "/Trust/3.svg",
    },
  ];

  return (
    <>
      {/* LARGE SCREEN LAYOUT: Visible from 'lg' breakpoint and up (default hidden)
       */}
      <motion.section
        // The 'hidden' class makes it invisible by default (small screens)
        // The 'lg:block' class makes it visible on large screens and up
        className="hidden lg:block relative w-full bg-[#FDF9F0] rounded-[60px] flex flex-col justify-center pl-[91px] py-[93px]"
        style={{
          boxShadow:
            "0px 183px 73px rgba(0, 0, 0, 0.01), 0px 103px 62px rgba(0, 0, 0, 0.05), 0px 46px 46px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1)",
        }}
        onHoverStart={handleHover}
        // Optional: onHoverEnd logic to reset animations
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[60%] top-[20%] w-[500px] h-[500px] bg-[#BC9313]/5 blur-[125px] rounded-full" />
        </div>

        <div className="relative flex flex-col">
          {/* Heading */}
          <motion.h2
            className="text-[48px] font-bricolage font-semibold text-[#214838] leading-[100%]"
            variants={headingVariants}
            initial="hidden"
            animate={headingControls}
          >
            Twigg Works <span className="text-[#BC9313]">Only for You.</span>
          </motion.h2>

          <div className="flex flex-row items-center justify-between w-full">
            {/* Trust Points */}
            <motion.div
              className="flex flex-col items-start gap-[56px] w-[35%] mt-[48px]"
              variants={listVariants}
              initial="hidden"
              animate={listControls}
            >
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-[28px]"
                  variants={itemVariants}
                >
                  <div className="relative flex-shrink-0">
                    <Image
                      src={point.icon}
                      alt={point.title}
                      width={56}
                      height={57}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <h3 className="text-[24px] font-bricolage font-semibold text-[#152D23] leading-[120%]">
                      {point.title}
                    </h3>
                    <p className="text-[18px] font-switzer text-[#152D23]/70 leading-6">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Shield */}
            <div className="flex-1 flex justify-center items-center relative">
              <div className="absolute z-0 right-[15%]">
                {/* Assuming CircleSheild is an SVG component */}
                <CircleSheild />
              </div>

              <div className="absolute flex bottom-[4%] right-[30%] justify-center items-center">
                <div
                  className="absolute rounded-full border-[#152D2305]"
                  style={{
                    width: "915.42px",
                    height: "872.83px",
                    borderWidth: "40px",
                  }}
                />
                <div
                  className="absolute rounded-full border-[#152D2305]"
                  style={{
                    width: "655.85px",
                    height: "625.82px",
                    borderWidth: "40px",
                  }}
                />
                <div
                  className="absolute rounded-full border-[#152D2305]"
                  style={{
                    width: "387.15px",
                    height: "365.08px",
                    borderWidth: "40px",
                  }}
                />
              </div>
              <div className="flex flex-row w-full justify-end">
                <div className="w-[42%]" />

                <motion.div
                  variants={shieldVariants}
                  initial="hidden"
                  animate={shieldControls}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: 1200,
                  }}
                  className="flex flex-row w-full justify-end"
                  // Rotate around its own center
                  originx={0.5}
                  originy={0.5}
                >
                  <Image
                    src="/Shield.png"
                    alt="Gold Shield representing security and trust"
                    width={290}
                    height={415}
                    className="object-contain z-10"
                    style={{
                      filter:
                        "drop-shadow(0px 183px 73px rgba(0, 0, 0, 0.01)) drop-shadow(0px 103px 62px rgba(0, 0, 0, 0.05)) drop-shadow(0px 46px 46px rgba(0, 0, 0, 0.09)) drop-shadow(0px 11px 25px rgba(0, 0, 0, 0.1))",
                    }}
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SMALL SCREEN LAYOUT: Visible up to 'lg' breakpoint (default block, hidden on lg)
       */}
      <div
        // The 'lg:hidden' class makes it invisible on large screens and up
        className="block lg:hidden bg-[#FDF9F0] rounded-[30px] py-[32px] px-[28px] flex flex-col  items-center"
      >
        {/* Centered Image */}
        <div className="w-full relative flex justify-center">
          {/* The main shield image */}
          <Image
            src="/Shield.png"
            alt="mobile-shield"
            height={196}
            width={137}
            className="object-contain sm:w-[50%] sm:h-[40%]"
            style={{
              filter:
                "drop-shadow(0px 183px 73px rgba(0, 0, 0, 0.01)) drop-shadow(0px 103px 62px rgba(0, 0, 0, 0.05)) drop-shadow(0px 46px 46px rgba(0, 0, 0, 0.09)) drop-shadow(0px 11px 25px rgba(0, 0, 0, 0.1))",
            }}
          />

          {/* The background shield image (this is the one you want positioned) */}
          <Image
            src="/Shield_bg_mobile.png"
            alt="mobile-shield-bg" // Changed alt text for clarity
            height={280}
            width={280}
            className="object-contain sm:w-[100%] sm:h-[100%] absolute top-[-20%] left-[-10%]"
          />
          {/* The new "Ellipse 4" div */}
          {/* The parent container provides context for absolute positioning */}
          <div className="absolute w-[186px] h-[186px]">
            {/* The new "Ellipse 4" div */}
            <div
              className="absolute rounded-full"
              style={{
                // **FIX: Explicitly set a size and position it**
                width: "200px", // Example fixed width
                height: "200px", // Example fixed height
                top: "50%", // Example vertical centering
                left: "50%", // Example horizontal centering
                transform: "translate(-50%, -50%)", // Center it

                // Background and filter styles
                background: "rgba(188, 147, 19, 1)",
                filter: "blur(300px)",
              }}
            ></div>
          </div>
        </div>

        {/* Text aligned to start */}
        <div className="flex flex-col gap-[32px] w-full">
          <h2 className="text-[18px] sm:text-[24px] font-bricolage font-semibold text-[#214838] leading-[100%]">
            Twigg Works <span className="text-[#BC9313]">Only for You.</span>
          </h2>
          <div className="flex flex-col gap-[24px] w-[90%] sm:w-[70%]">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-[20px]"
              >
                <div className="relative flex-shrink-0">
                  <Image
                    src={point.icon}
                    alt={point.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <h3 className="text-[15px] sm:text-[20px] font-bricolage font-semibold text-[#152D23] leading-[120%]">
                    {point.title}
                  </h3>
                  <p className="text-[10px] sm:text-[16px] font-switzer text-[#152D23]/70 leading-[1.2]">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
