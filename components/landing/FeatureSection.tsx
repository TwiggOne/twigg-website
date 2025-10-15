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
// NOTE: Assuming 'motion/react' should be 'framer-motion'
import { motion, Transition, useInView } from "motion/react";

// =========================================================================
// Features Component
// =========================================================================
export const Features = () => {
  return (
    <section className="bg-[#152D23] py-28 text-[#FDF9F0]">
      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-bricolage text-[20px] md:text-[56px] flex gap-2 font-semibold text-[#FDF9F0] leading-[100%] sm:leading-[100%]">
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

        <div className="relative flex justify-center items-center h-[140px] md:h-[270px] w-full">
          {/* Glow Effect Background */}
          <div className="absolute w-[88px] h-[88px] sm:w-[100px] sm:h-[100px] md:w-[188px] md:h-[192px] z-0">
            <OuterCircle />
          </div>

          {/* Middle Circle */}
          <div className="absolute w-[63px] h-[63px] md:w-[134px] md:h-[134px] z-10">
            <MidCircle />
          </div>

          {/* Animated Glow Behind Logo */}
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
              // NOTE: SVG in CSS background must be properly URL-encoded (simplified here)
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

          {/* Lines (Need better implementation, current one is flawed, but keeping structure) */}
          {/* Left Line - FIX: Removed hardcoded negative percentage for 'left' */}
          <motion.div
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#BC9313] to-transparent z-10"
            style={{
              top: "50%",
              left: "0%", // Adjusted to be relative to parent center
              transform: "translate(-100%, -50%)", // Moved to the left of the center
              width: "50%",
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Right Line - FIX: Removed hardcoded negative percentage for 'left' */}
          <motion.div
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#BC9313] to-transparent z-10"
            style={{
              top: "50%",
              right: "0%", // Adjusted to be relative to parent center
              transform: "translate(100%, -50%)", // Moved to the right of the center
              width: "50%",
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Logo */}
          <div className="relative z-20">
            <Image
              src="/main.png"
              alt="Central Logo"
              width={90}
              height={91}
              className="w-[50px] h-[50px] object-contain sm:w-[110px] sm:h-[101px]"
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
// =========================================================================
// Feature Cards Wrapper
// =========================================================================
function FeaturesCardsWrapper() {
  const containerRef = useRef(null);
  // Use a smaller threshold (0.2) to trigger the animation slightly earlier
  const isInView = useInView(containerRef, { amount: 0.3, once: true });

  return (
    <div
      ref={containerRef}
      // FIX: Ensure mobile layout (grid-cols-1) is applied correctly
      className="grid grid-cols-1 md:grid-cols-3 gap-[23px] justify-center pt-10"
    >
      <FeatureCard
        title="All-In-One Platform"
        description="Expenses, loans, credit cards, investments, and insurance in real time."
        iconSrc="/Sol_img1.png"
        position="left"
        animateIn={isInView} // Pass the visibility status
      />
      <FeatureCard
        title="AI + Expert Hybrid"
        description="Instant clarity from AI, human expertise for trust and reassurance."
        iconSrc="/img2.png"
        position="center"
        animateIn={isInView} // Pass the visibility status
      />
      <FeatureCard
        title="No More FOMO"
        description="See how you stack up against peers, learn and grow with context."
        iconSrc="/Sol_img3.png"
        position="right"
        animateIn={isInView} // Pass the visibility status
      />
    </div>
  );
}

// =========================================================================
// FeatureCard Component
interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  position?: "left" | "center" | "right";
  animateIn?: boolean; // Use this prop for control
}

export function FeatureCard({
  title,
  description,
  iconSrc,
  position = "center",
  animateIn = false, // Default to false
}: FeatureCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Custom Hook/Logic to determine mobile view
  useEffect(() => {
    // Use md breakpoint (768px) for consistency
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // FIX: Corrected initial horizontal position logic
  const getInitialX = () => {
    if (isMobile) return 0; // Mobile: No horizontal offset

    // Desktop: Start off-screen and slide in to final grid position
    if (position === "left") return "100%"; // Starts from the far left
    if (position === "right") return "-100%"; // Starts from the far right
    return 0; // Center card starts in its final horizontal spot
  };

  // Define the base variants for motion
  const variants = {
    hidden: {
      x: getInitialX(),
      y: isMobile ? 0 : -300, // Removed vertical offset for mobile, letting the grid handle stacking
      scale: isMobile ? 1 : 0.4, // Start slightly smaller on desktop
      opacity: 0,
    },
    visible: {
      x: 0, // Final x position (its final grid column)
      y: 0, // Final y position
      scale: 1, // Final scale
      opacity: 1, // Final opacity
    },
  };

  // Calculate delay based on position for staggering
  const delayMap = {
    center: 0, // Animate center first
    left: 1.5, // Animate left second
    right: 3, // Animate right last
  };
  const delayMapMobile = {
    center: 1.5, // Animate center first
    left: 0, // Animate left second
    right: 3, // Animate right last
  };
  const transition = {
    duration: isMobile ? 0.8 : 1.2, // Faster animation on mobile
    ease: "easeOut",
    delay: delayMap[position],
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      variants={variants}
      initial="hidden"
      animate={animateIn ? "visible" : "hidden"}
      transition={{
        duration: isMobile ? 0.8 : 1.2,
        ease: "easeOut",
        delay: isMobile? delayMapMobile[position]: delayMap[position],
      }}
      className="feature-card w-full"
    >
      <div className="feature-card-inner p-[20px] md:py-[46px] md:px-[41px]">
        <div className="flex items-center justify-center mb-6">
          <Image
            src={iconSrc}
            alt={title}
            width={291}
            height={170}
            className="object-contain w-[240px] h-[140px] md:w-[291px] md:h-[170px]"
          />
        </div>
        <div className="flex flex-col gap-[24px] md:mt-[24px]">
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

// NOTE: The rest of the Features and FeaturesCardsWrapper components remain the same as the previous full solution.
