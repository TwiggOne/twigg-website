"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useInView,
  Variants,
} from "framer-motion";
import { easing, duration, getVariants, prefersReducedMotion } from "@/lib/animations";
import { CircleSheild } from "@/utils/SvgUtils"; // Assuming this utility is available

export const Trust = () => {
  // --- State and Controls for Large Screen (onHover) ---
  const [animated, setAnimated] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // Used for LARGE screen CircleSheild SVG

  const headingControls = useAnimation();
  const listControls = useAnimation();
  const shieldControls = useAnimation();

  // --- Mobile Animation Hooks ---
  const mobileRef = useRef(null);
  // Trigger animation when 30% of the mobile container is visible
  const isInView = useInView(mobileRef, { once: true, amount: 0.3 });
  const mobileShieldControls = useAnimation();
  const mobileHeadingControls = useAnimation();
  const mobileListControls = useAnimation();

  // --- Animation Logic for Large Screens (onHover) ---
  const handleHover = async () => {
    if (!animated && !prefersReducedMotion()) {
      setAnimated(true);

      // Start heading and shield together
      headingControls.start("visible");
      shieldControls.start("visible");

      // Delay trust points slightly after heading starts
      setTimeout(() => {
        listControls.start("visible");
      }, prefersReducedMotion() ? 0 : 800); // Faster for reduced motion
    }
  };

  // --- Mobile Animation Sequence (useEffect) ---
  useEffect(() => {
    if (isInView) {
      const delay = prefersReducedMotion() ? 0 : 400; // Faster for reduced motion
      
      // 1. Shield comes in
      mobileShieldControls.start("visible");

      // 2. Heading comes in after shield is done
      mobileHeadingControls.start("visible");

      // 3. Trust points stagger in after heading
      setTimeout(() => {
        mobileListControls.start("visible");
      }, delay);
    }
  }, [
    isInView,
    mobileShieldControls,
    mobileHeadingControls,
    mobileListControls,
  ]);

  // ----------------------------------------
  // --- LARGE SCREEN VARIANTS ---
  // ----------------------------------------
  const headingVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion() ? 0 : duration.slower,
        ease: easing.smooth,
      },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: prefersReducedMotion() ? 0 : 0.1, 
        delayChildren: prefersReducedMotion() ? 0 : 0.2 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: prefersReducedMotion() ? 0 : duration.normal, 
        ease: easing.smooth 
      },
    },
  };
  type Easing =
    | "linear"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | [number, number, number, number] // cubic-bezier
    | ((t: number) => number);
  const shieldVariants: Variants = {
    hidden: {
      y: 400,
      x: -100,
      rotateY: 360,
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
        ease: [0.25, 0.1, 0.25, 1], // ✅ tuple, TS-safe
      },
    },
  };

  // ----------------------------------------
  // --- MOBILE SCREEN VARIANTS (NEW) ---
  // ----------------------------------------
  const mobileShieldVariants: Variants = {
    hidden: {
      x: "-100%", // Start off-screen left
      opacity: 0,
      rotateY: 360, // Tumble/Flip along X-axis
      scale: 0.8,
    },
    visible: {
      x: "0%", // Move to final position
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Custom strong ease
      },
    },
  };

  const mobileHeadingVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5, // Slight delay after shield starts settling
      },
    },
  };

  const mobileListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: { delayChildren: 1.5, staggerChildren: 1.5 }, // Staggered list items
    },
  };

  // Reuse itemVariants for stagger animation in mobile list
  const mobileItemVariants = itemVariants;
  // ----------------------------------------

  const trustPoints = [
    {
      title: "Your Interests First,\nAlways!",
      description:
        "Advice that works only for your goals. No distractions. No side deals.",
      icon: "/Trust/1.svg",
    },
    {
      title: "Bank-Grade Security,\nSEBI & RBI Compliant.",
      description:
        "Your data and money are protected with the highest regulatory standards.",
      icon: "/Trust/2.svg",
    },
    {
      title: "100% Transparent,\nNo Hidden Incentives.",
      description:
        "What you see is what you get. Clear guidance, zero conflicts.",
      icon: "/Trust/3.svg",
    },
  ];

  return (
    <>
      {/* LARGE SCREEN LAYOUT: Visible from 'lg' breakpoint and up (default hidden) */}
      <motion.section
        className="hidden lg:block relative w-full bg-[#FDF9F0] rounded-[60px] flex flex-col justify-center pl-[91px] py-[93px]"
        style={{
          boxShadow:
            "0px 183px 73px rgba(0, 0, 0, 0.01), 0px 103px 62px rgba(0, 0, 0, 0.05), 0px 46px 46px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1)",
        }}
        onHoverStart={handleHover}
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[60%] top-[20%] w-[500px] h-[500px] bg-[#BC9313]/5 blur-[125px] rounded-full" />
        </div>

        <div className="relative flex flex-col">
          {/* Heading */}
          <motion.h2
            className="text-[48px] font-bricolage font-semibold text-[#214838] leading-[100%]"
            variants={headingVariants as Variants}
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
                  variants={itemVariants as Variants}
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
                    <h3 className="text-[15px] sm:text-[20px] font-bricolage font-semibold text-[#152D23] leading-[120%]">
                      {point.title.split("\n").map((line, i, arr) => (
                        <React.Fragment key={i}>
                          {line}
                          {/* Do not add <br /> after the last line */}
                          {i < arr.length - 1 && <br />}
                        </React.Fragment>
                      ))}
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
                  variants={shieldVariants as Variants}
                  initial="hidden"
                  animate={shieldControls}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: 1200,
                    originX: 0.5, // ✅ correct
                    originY: 0.5, // ✅ correct
                  }}
                  onAnimationStart={() => {
                    setTimeout(() => setImageLoaded(true), 500);
                  }}
                  className="flex flex-row w-full justify-end"
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
              {imageLoaded && (
                <div className="absolute z-0 right-[0%]">
                  <CircleSheild />
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* SMALL SCREEN LAYOUT: Visible up to 'lg' breakpoint (default block, hidden on lg) */}
      <div
        ref={mobileRef} // Attach ref for useInView hook
        className="block lg:hidden bg-[#FDF9F0] rounded-[30px] py-[32px] px-[28px] flex flex-col  items-center gap-[32px] overflow-hidden"
      >
        {/* Centered Image (Shield Section) */}
        <div className="w-full relative flex justify-center">
          {/* The main shield image with animation */}
          <motion.div
            variants={mobileShieldVariants as Variants}
            initial="hidden"
            animate={mobileShieldControls}
            style={{
              transformStyle: "preserve-3d", // Enable 3D transform for rotation
              perspective: 1000,
            }}
          >
            <Image
              src="/Shield.png"
              alt="mobile-shield"
              height={196}
              width={137}
              className="object-contain sm:w-[50%] sm:h-[40%] relative z-20"
              style={{
                filter: "drop-shadow(0px 11px 25px rgba(0, 0, 0, 0.1))",
              }}
            />
          </motion.div>

          {/* The background shield image (static, positioned) */}
          <Image
            src="/Shield_bg_mobile.png"
            alt="mobile-shield-bg"
            height={280}
            width={280}
            className="object-contain sm:w-[100%] sm:h-[100%] absolute top-[-20%] left-[-10%] z-10"
          />

          {/* The new "Ellipse 4" div (The glowing spot) */}
          <div className="absolute w-[186px] h-[186px] z-0">
            <div
              className="absolute rounded-full"
              style={{
                width: "200px",
                height: "200px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(188, 147, 19, 1)",
                filter: "blur(300px)",
              }}
            ></div>
          </div>
        </div>

        {/* Text aligned to start */}
        <div className="flex flex-col gap-[32px] w-full">
          {/* Heading with animation */}
          <motion.h2
            className="text-[18px] sm:text-[24px] font-bricolage font-semibold text-[#214838] leading-[100%]"
            variants={mobileHeadingVariants as Variants}
            initial="hidden"
            animate={mobileHeadingControls}
          >
            Twigg Works <span className="text-[#BC9313]">Only for You.</span>
          </motion.h2>

          {/* Trust Points List with stagger animation */}
          <motion.div
            className="flex flex-col gap-[24px] w-[90%] sm:w-[70%]"
            variants={mobileListVariants}
            initial="hidden"
            animate={mobileListControls}
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex flex-row items-center gap-[20px]"
                variants={mobileItemVariants as Variants}
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
                    {point.title.split("\n").map((line, i, arr) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="text-[10px] sm:text-[16px] font-switzer text-[#152D23]/70 leading-[1.2]">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Trust
