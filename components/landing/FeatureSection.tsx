"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "../container";
import Image from "next/image";
import {
  InnerCircle,
  MidCircle,
  OuterCircle,
  RightArrowInline,
} from "@/utils/SvgUtils";
import { motion, useInView } from "motion/react";

export const Features = () => {
  return (
    <section className="bg-[#152D23] py-28 text-[#FDF9F0]">
      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-bricolage text-[20px] md:text-[56px] flex gap-2  font-semibold text-[#FDF9F0] leading-[100%] sm:leading-[100%]">
            With Twigg,{" "}
            <span className="text-[#BC9313] flex items-center gap-1">
              Confusion <RightArrowInline className="w-[0.7em] h-[0.7em]" />
              Clarity
            </span>
          </h1>
          <p className="font-switzer text-[14px] sm:text-[24px] font-normal text-[#FDF9F0] leading-[120%] sm:leading-[120%]">
            Track, save, invest smarter!
            <br /> Your money made simple, your future secured.
          </p>
        </div>

        <div className="relative flex justify-center items-center h-[140px] md:h-[400px] w-full">
          {/* Glow Effect Background */}
          <div className="absolute w-[88px] h-[88px] sm:w-[100px] sm:h-[100px] md:w-[188px] md:h-[192px] z-0">
            <OuterCircle />
          </div>

          {/* Middle Circle */}
          <div className="absolute w-[63px] h-[63px] md:w-[134px] md:h-[134px] z-10">
            <MidCircle />
          </div>

          {/* Animated Glow Behind Logo */}
          {/* Animated Glow Behind Logo with Blur + Noise */}
          <motion.div
            className="
    absolute rounded-full
    w-[50px] h-[50px]
    md:w-[109.05px] md:h-[109.35px]
  "
            style={{
              background: "rgba(188, 147, 19, 1)",
              filter: "blur(50px)",
              zIndex: 0,
              pointerEvents: "none",
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="f"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#f)" /></svg>')`,
              backgroundBlendMode: "overlay",
              backgroundSize: "100% 100%",
            }}
            animate={{
              backgroundColor: [
                "hsla(45, 82%, 41%, 0.50)",
                "rgba(188, 147, 19, 1)",
                "rgba(188, 147, 19, 0.5)",
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Nois*


         {/* Left Line */}
          <motion.div
            className="absolute h-[1px]  bg-gradient-to-r from-transparent via-[#BC9313] to-transparent z-10"
            style={{
              top: "50%",
              left: "60%",
              transform: "translateY(-50%)",
              transformOrigin: "right center", // grow leftwards
              width: "50%",
            }}
          />

          {/* Right Line */}
          <motion.div
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#BC9313] to-transparent z-10"
            style={{
              top: "50%",
              left: "-10%",
              transform: "translateY(-50%)",
              transformOrigin: "left center", // grow rightwards
              width: "50%",
            }}
          />

          {/* Logo */}
          <div className="relative z-20">
            <Image
              src="/main.png"
              alt="Central Logo"
              width={90}
              height={91}
              className="w-[50px] h-[50px] object-contain sm:w-[90px] sm:h-[91px]"
              style={{
                transform: "rotate(45deg)",
                filter:
                  "drop-shadow(0px 232px 65px rgba(0, 0, 0, 0.01)) drop-shadow(0px 149px 59px rgba(0, 0, 0, 0.1)) drop-shadow(0px 84px 50px rgba(0, 0, 0, 0.32)) drop-shadow(0px 37px 37px rgba(0, 0, 0, 0.55)) drop-shadow(0px 9px 20px rgba(0, 0, 0, 0.64))",
              }}
            />
          </div>
        </div>

        {/* Feature Cards */}
        <FeaturesCardsWrapper />
      </Container>
    </section>
  );
};
// FeatureCard component
function FeaturesCardsWrapper() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  return (
    <div
      ref={containerRef}
      className="grid md:grid-cols-3 gap-[23px] justify-center"
    >
      <FeatureCard
        title="All-In-One Platform"
        description="Expenses, loans, credit cards, investments, and insurance in real time."
        iconSrc="/Sol_img1.png"
        position="left"
        animateIn={isInView}
      />
      <FeatureCard
        title="AI + Expert Hybrid"
        description="Instant clarity from AI, human expertise for trust and reassurance."
        iconSrc="/img2.png"
        position="center"
        animateIn={isInView}
      />
      <FeatureCard
        title="No More FOMO"
        description="See how you stack up against peers, learn and grow with context."
        iconSrc="/Sol_img3.png"
        position="right"
        animateIn={isInView}
      />
    </div>
  );
}

// FeatureCard
interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  position?: "left" | "center" | "right";
  animateIn?: boolean;
}


export default function FeatureCard({
  title,
  description,
  iconSrc,
  position = "center",
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true }); // animate once

  const [screenCenter, setScreenCenter] = useState(0);

  useEffect(() => {
    setScreenCenter(window.innerWidth / 2);
    const handleResize = () => setScreenCenter(window.innerWidth / 2);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Final offsets for grid layout relative to center
  const finalOffsets = {
    left: 0, // adjust as needed based on layout
    center: 0,
    right: 0,
  };

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.03 }}
      initial={{ x: 0, y: -300, scale: 0, opacity: 0 }} // start from top-center
      animate={
        isInView
          ? { x: finalOffsets[position], y: 0, scale: 1, opacity: 1 }
          : {}
      }
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: position === "left" ? 0 : position === "center" ? 0.1 : 0.2,
      }}
      className="relative rounded-[20px] md:mx-[0px] overflow-hidden"
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderImage:
          "linear-gradient(135deg, rgba(188,147,19,0.1) 0%, rgba(188,147,19,1) 91%) 1",
        borderImageSlice: 1,
      }}
    >
      <div
        className="rounded-[19px] flex flex-col items-center w-full h-full p-[20px] md:py-[46px] md:px-[41px] overflow-hidden"
        style={{
          background:
            "linear-gradient(328.59deg, #152D23 0%, rgba(21,45,35,0.2) 40%, rgba(188,147,19,0.3) 100%)",
        }}
      >
        <div className="h-[192px] flex items-center justify-center mb-6">
          <Image
            src={iconSrc}
            alt={title}
            width={291}
            height={170}
            className="object-contain w-[240px] h-[140px] md:w-[291] md:h-[170px]"
          />
        </div>
        <div className="flex flex-col gap-[24px] md:mt-[24px] ">
          <h3 className="text-[24px] font-bricolage font-semibold text-[#FDF9F0] leading-[100%]">
            {title}
          </h3>
          <p className="text-[#FDF9F0]/80 font-switzer text-[18px] leading-[120%]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
