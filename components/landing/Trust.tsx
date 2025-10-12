"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { CircleSheild } from "@/utils/SvgUtils";

export const Trust = () => {
  const [animated, setAnimated] = useState(false);
  const headingControls = useAnimation();
  const listControls = useAnimation();
  const shieldControls = useAnimation();

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
    <motion.section
      className="relative w-full bg-[#FDF9F0] rounded-[60px] flex flex-col justify-center pl-[91px] py-[93px]"
      style={{
        boxShadow:
          "0px 183px 73px rgba(0, 0, 0, 0.01), 0px 103px 62px rgba(0, 0, 0, 0.05), 0px 46px 46px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1)",
      }}
      onHoverStart={handleHover}
      // onHoverEnd={() => {
      //   setAnimated(false);
      //   headingControls.start("hidden");
      //   shieldControls.start("hidden");
      //   listControls.start("hidden");
      // }}
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
  );
};
