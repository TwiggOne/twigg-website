import { MidCircle, OuterCircle } from "@/utils/SvgUtils";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const TwiggConnectContent = () => {
  return (
    <div className="flex gap-3 flex-wrap pb-[50px]">
      <Label text="RBI Account Aggregator" />
      <Label text="Credit Bureau" />
    </div>
  );
};
interface LabelProps {
  text: string;
  className?: string;
}

const Label = ({ text, className = "" }: LabelProps) => {
  return (
    <div
      className={`p-2.5 px-[21px] rounded-[20px] border border-[#FDF9F0]/30 w-fit ${className}`}
    >
      <p className="text-[12px] font-switzer text-[#FDF9F0]">{text}</p>
    </div>
  );
};
export const TwiggConnectSideContent = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      {/* Outer Glow */}
      <div className="absolute w-[80px] h-[80px] md:w-[220px] md:h-[227px]">
        <OuterCircle />
      </div>

      {/* Middle Circle */}
      <div className="absolute w-[50px] h-[50px] md:w-[160px] md:h-[160px] z-10">
        <MidCircle />
      </div>

      {/* Animated Glow */}
      <motion.div
        className="absolute rounded-full w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
        style={{
          background: "rgba(188, 147, 19, 1)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Logo */}
      <div className="relative z-20">
        <Image
          src="/main.png"
          alt="logo"
          width={60}
          height={60}
          className="object-contain md:w-[125px] md:h-[113px] rotate-5"
        />
      </div>
      <div className="absolute z-20 top-0 right-6">
        <Image
          src="/twigg_connect/bank_card.png"
          alt="logo"
          width={124}
          height={124}
          className="object-contain md:w-[130px] md:h-[130px]"
        />
      </div>
      <div className="absolute z-20 top-16 left-10">
        <Image
          src="/twigg_connect/bank_gate.png"
          alt="logo"
          width={68}
          height={85}
          className="object-contain md:w-[68px] md:h-[85px]"
        />
      </div>
      <div className="absolute z-20 bottom-12 left-12">
        <Image
          src="/twigg_connect/rupee.png"
          alt="logo"
          width={59}
          height={62}
          className="object-contain md:w-[59px] md:h-[62px]"
        />
      </div>
      <div className="absolute z-20 bottom-8 right-8">
        <Image
          src="/twigg_connect/trend.png"
          alt="logo"
          width={68}
          height={68}
          className="object-contain md:w-[68px] md:h-[68px]"
        />
      </div>
    </div>
  );
};
