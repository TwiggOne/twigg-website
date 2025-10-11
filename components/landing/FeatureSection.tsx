"use client";
import React from "react";
import { motion } from "motion/react";
import { Container } from "../container";
import Image from "next/image";
import {
  InnerCircle,
  MidCircle,
  OuterCircle,
  RightArrowInline,
} from "@/utils/SvgUtils";

export const Features = () => {
  return (
    <section className="bg-[#152D23] py-28 text-[#FDF9F0]">
      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center gap-2 sm:gap-4 text-center">
          <h1 className="font-bricolage text-[28px] sm:text-[56px] flex gap-2  font-semibold text-[#FDF9F0] leading-[100%] sm:leading-[67px]">
            With Twigg,{" "}
            <span className="text-[#BC9313] flex items-center gap-1">
              Confusion <RightArrowInline className="w-[0.7em] h-[0.7em]" />
              Clarity
            </span>
          </h1>
          <p className="font-switzer text-[16px] sm:text-[24px] font-normal text-[#FDF9F0] leading-[22px] sm:leading-[120%]">
            Track, save, invest smarter!
            <br /> Your money made simple, your future secured.
          </p>
        </div>

        <div className="relative flex justify-center items-center h-[300px] md:h-[400px] w-full">
          {/* Glow Effect Background */}
          <div className="absolute w-[100px] h-[100px] md:w-[188px] md:h-[192px] z-0">
            <OuterCircle />
          </div>

          {/* Middle Circle */}
          <div className="absolute w-[140px] h-[140px] md:w-[134x] md:h-[134px] z-10">
            <MidCircle />
          </div>

          {/* Animated Glow Behind Logo */}
          {/* Animated Glow Behind Logo with Blur + Noise */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 109.05,
              height: 109.35,
              background: "rgba(188, 147, 19, 1)", // gold, animation will control opacity
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
              scale: [1, 1.05, 1], // gentle pulse
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
  className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#BC9313] to-transparent z-10"
  style={{
    top: "50%",
    left: "50%",
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
    left: "0%",
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
              className=""
              style={{
                transform: "rotate(45deg)",
                filter:
                  "drop-shadow(0px 232px 65px rgba(0, 0, 0, 0.01)) drop-shadow(0px 149px 59px rgba(0, 0, 0, 0.1)) drop-shadow(0px 84px 50px rgba(0, 0, 0, 0.32)) drop-shadow(0px 37px 37px rgba(0, 0, 0, 0.55)) drop-shadow(0px 9px 20px rgba(0, 0, 0, 0.64))",
              }}
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-[23px] justify-center">
          <FeatureCard
            title="All-In-One Platform"
            description="Expenses, loans, credit cards, investments, and insurance in real time."
            iconSrc="/Sol_img1.png"
          />
          <FeatureCard
            title="AI + Expert Hybrid"
            description="Instant clarity from AI, human expertise for trust and reassurance."
            iconSrc="/img2.png"
          />
          <FeatureCard
            title="No More FOMO"
            description="See how you stack up against peers, learn and grow with context."
            iconSrc="/Sol_img3.png"
          />
        </div>
      </Container>
    </section>
  );
};

// FeatureCard component remains the same
function FeatureCard({
  title,
  description,
  iconSrc,
}: {
  title: string;
  description: string;
  iconSrc: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative rounded-[20px]  shadow-[0_37px_37px_rgba(0,0,0,0.25)]"
      style={{
        background:
          "linear-gradient(326.62deg, #BC9313 21.23%, rgba(188,147,19,0.1) 85.57%)", // border gradient
      }}
    >
      {/* Inner Card */}
      <div
        className="relative flex flex-col items-center  rounded-[20px] w-full h-full overflow-hidden p-[42px]"
        style={{
          background:
            "linear-gradient(328.59deg, #152D23 -10.94%, rgba(21,45,35,0.2) 21.5%, rgba(188,147,19,0.3) 97.95%)",
        }}
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxmaWx0ZXIgaWQ9J25vaXNlJz48ZmVUdXJidWxlbmNlIGZsdXRlcm5hbWU9J0ZsdXRlckJsdXIiIGJsdXI9JzEnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSdibGFjaycgZmlsdGVyPSJ1cmwoI2ZsdXRlcikgIi8+PC9zdmc+')",
            opacity: 0.25,
          }}
        />
        {/* Card Content */}
        <div className="relative z-10 flex flex-col items-center w-full h-full">
          <div className="h-[192px] flex items-center justify-center mb-6">
            <Image
              src={iconSrc}
              alt={title}
              width={245}
              height={190}
              className=" object-contain "
            />
          </div>
          <div className="flex flex-col gap-[24px]">
            <h3 className="text-[24px]  font-bricolage font-semibold text-[#FDF9F0] leading-[100%] ">
              {title}
            </h3>
            <p className="text-[#FDF9F0]/80 font-switzer text-[18px] leading-[120%]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
