import { MidCircle, OuterCircle } from "@/utils/SvgUtils";
import { motion, Variants } from "framer-motion";
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
  // Container controls stagger
  const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeOut", // ✅ now valid because Variants is applied
    },
  },
};

const mainFade: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

  return (
    <motion.div
      className="relative flex justify-center items-center w-full h-[240px] md:h-full "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Outer Glow */}
      <div className="absolute w-[220px] h-[227px]">
        <OuterCircle />
      </div>

      {/* Middle Circle */}
      <div className="absolute w-[160px] h-[160px] z-10">
        <MidCircle />
      </div>

      {/* Animated Glow */}
      <motion.div
        className="absolute rounded-full w-[80px] h-[80px] md:w-[80px] md:h-[80px]"
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

      {/* Main Logo (FIRST) */}
      <motion.div className="relative z-20" variants={mainFade}>
        <Image
          src="/main.png"
          alt="logo"
          width={60}
          height={60}
          className="object-contain w-[125px] h-[113px] md:w-[125px] md:h-[113px] rotate-5"
        />
      </motion.div>

      {/* Icons (auto stagger one by one) */}
      <motion.div
        className="absolute z-20 -top-10 md:top-0 right-6"
        variants={fadeUp}
      >
        <Image
          src="/twigg_connect/bank_card.png"
          alt="bank_card"
          width={124}
          height={124}
          className="object-contain md:w-[130px] md:h-[130px]"
        />
      </motion.div>

      <motion.div
        className="absolute z-20 -top-0 md:top-16 left-10"
        variants={fadeUp}
      >
        <Image
          src="/twigg_connect/bank_gate.png"
          alt="bank_gate"
          width={68}
          height={85}
          className="object-contain md:w-[68px] md:h-[85px]"
        />
      </motion.div>

      <motion.div
        className="absolute z-20 bottom-4 md:bottom-12 left-12"
        variants={fadeUp}
      >
        <Image
          src="/twigg_connect/rupee.png"
          alt="rupee"
          width={59}
          height={62}
          className="object-contain md:w-[59px] md:h-[62px]"
        />
      </motion.div>

      <motion.div
        className="absolute z-20 bottom-0 md:bottom-8 right-8"
        variants={fadeUp}
      >
        <Image
          src="/twigg_connect/trend.png"
          alt="trend"
          width={68}
          height={68}
          className="object-contain md:w-[68px] md:h-[68px]"
        />
      </motion.div>
    </motion.div>
  );
};