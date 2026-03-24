"use client";
import React, { useEffect, useState } from "react";
import DownloadButton from "../ui/components/DownloadButton";
import { motion, Variants } from "framer-motion";
import {
  InnerCircle,
  MidCircle,
  OuterCircle,
  TwiggOutTag1,
  TwiggOutTag2,
  TwiggOutTag3,
  TwiggOutTag4,
} from "@/utils/SvgUtils";
import Image from "next/image";

const TryOutSection = () => {
  const [tagsAnimated, setTagsAnimated] = useState(false);

  useEffect(() => {
    if (!tagsAnimated) {
      const timer = setTimeout(() => setTagsAnimated(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [tagsAnimated]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1.2,
      },
    },
  };

  const tagVariants: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const AnimatedTag = ({
    Tag,
    text,
    className,
    addSpace = false,
  }: {
    Tag: React.ElementType;
    text: string;
    className?: string;
    addSpace?: boolean;
  }) => (
    <motion.div className={className} variants={tagVariants}>
      <div className="relative w-[218px] h-[66px] flex items-center justify-center">
        <div className="">
          <Tag />
        </div>
        <span
          className="absolute font-switzer text-[#FDF9F0] text-[16px] font-medium"
          style={{
            transform: "translate(0%, -20%)",
            fontWeight: 600,
            marginTop: addSpace ? 16 : 0,
          }}
        >
          {text}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section className="relative w-full min-h-[600px] bg-[#152D23] flex flex-col lg:flex-row items-center justify-between  md:px-4 gap-[37px]">
      {/* LEFT */}
      <div className="flex-1">
        <h1 className="text-[20px]  md:text-[48px] font-semibold font-bricolage text-[#FDF9F0] leading-tight">
          Try Twigg now.
          <span className="text-[#BC9313] block">Shape what it becomes.</span>
        </h1>

        <div className="h-[16px] md:h-10" />
        <p className="text-[14px] md:text-[20px] font-switzer text-[#FDF9F0]/80">
          {
            "We're in controlled beta. Join now to get early access and help us build India's Financial Decision App."
          }
        </p>

        <div className="h-[32px] md:h-14" />

        <div className="flex gap-4">
          <a
            href="https://apps.apple.com/in/app/twigg-one/id6758598241"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadButton platform="apple" />
          </a>

          {/* Google Play Store */}
          <a
            href="https://play.google.com/store/apps/details?id=com.aadyantx.twigg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadButton platform="google" />
          </a>
        </div>

        <div className="h-4 md:h-[25px]" />

        <p className="text-[10px]  md:text-[12px] font-switzer text-[#FDF9F0] max-w-[323px]">
          Beta is free. Your feedback will directly shape the product. We read
          every message sent to{" "}
          <span className="text-[#BC9313] font-medium">contact@twigg.one</span>
        </p>
      </div>

      {/* RIGHT (FIXED) */}
      <motion.div className="flex-1 flex items-center justify-center relative aspect-square">
        {/* Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[446px] h-[447px] md:w-[544px] md:h-[553px]">
            <OuterCircle />
          </div>
          <div className="absolute md:w-[376px] md:h-[367px] w-[300px] h-[300px]">
            <MidCircle />
          </div>
          <div className="absolute w-[168px] h-[168px]">
            <InnerCircle />
          </div>
        </div>

        {/* Center Glow */}
        <motion.div
          className="absolute rounded-full w-[200px] h-[200px]"
          style={{
            background: "rgba(188,147,19,1)",
            filter: "blur(80px)",
          }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Image */}
        <div className="relative md:w-[290px] md:h-[581px] w-[380px] h-[446px]">
          <Image
            src="/try_out_twigg.png"
            alt="Twiggout"
            fill
            className="object-contain"
          />
        </div>

        {/* TAGS */}
        <motion.div
          variants={containerVariants}
          initial={!tagsAnimated ? "hidden" : undefined}
          animate="visible"
          className="absolute inset-0"
          onAnimationComplete={() => setTagsAnimated(true)}
        >
          <AnimatedTag
            Tag={TwiggOutTag1}
            text=""
            className="absolute top-[30%] left-4 md:left-[-5%] scale-[0.7] md:scale-100 origin-left "
          />
          {/* Tag 2 — right top */}
          <AnimatedTag
            Tag={TwiggOutTag2}
            text=""
            className="absolute top-[17%] right-4 md:right-[-3%] scale-[0.7] md:scale-100 origin-right"
          />
          {/* Tag 3 — left bottom */}
          <AnimatedTag
            Tag={TwiggOutTag3}
            text=""
            className="absolute bottom-[15%] left-8 md:left-[-5%] scale-[0.7] md:scale-100 origin-left"
          />
          {/* Tag 4 — right bottom */}
          <AnimatedTag
            Tag={TwiggOutTag4}
            text=""
            addSpace
            className="absolute bottom-[24%] right-6 md:right-[-5%] scale-[0.7] md:scale-100 origin-right"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TryOutSection;
