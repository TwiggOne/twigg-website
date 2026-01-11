"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type AnswerItemProps = {
  icon: string;
  label: string;
  value: string;
  selected: boolean;
  onSelectComplete: (value: string) => void;
};

const AnswerItem: React.FC<AnswerItemProps> = ({
  icon,
  label,
  value,
  selected,
  onSelectComplete,
}) => {
  const [animating, setAnimating] = useState(false);

const handleSelect = () => {
  // If already selected → just go next immediately
  if (selected && !animating) {
    onSelectComplete(value);
    return;
  }

  if (animating) return;

  setAnimating(true);

  setTimeout(() => {
    onSelectComplete(value);
    setAnimating(false);
  }, 700);
};


  return (
    <motion.div
      onClick={handleSelect}
      initial={false}
      animate={{
        backgroundColor: selected
          ? "rgba(188,147,19,0.10)"
          : "rgba(255,255,255,1)",
      }}
      transition={{ duration: 0.25 }}
      className="
        w-full h-full
        p-[22px]
        flex flex-col items-center justify-center
        gap-[10px]
        border border-[#BC9313]/20
        rounded-[15px]
        cursor-pointer
        select-none
      "
    >
      {/* ICON */}
      <motion.div
        animate={
          animating
            ? {
                y: [0, 12, 12, 12, 0],
                scale: [1, 1, 1.5, 1, 1],
              }
            : { y: 0, scale: 1 }
        }
        transition={{
          duration: 0.6,
          times: [0, 0.25, 0.5, 0.75, 1],
          ease: "easeInOut",
        }}
      >
        <div className="relative w-[41px] h-[41px] md:w-[55px] md:h-[55px]">
          <Image src={icon} alt={label} fill className="object-contain" />
        </div>
      </motion.div>

      {/* LABEL */}
      <motion.h3
        animate={{ opacity: animating ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="text-[10px] text-center md:text-[14px] text-[#1A1A1A]/80 font-medium font-switzer leading-tight"
      >
        {label}
      </motion.h3>
    </motion.div>
  );
};

export default AnswerItem;
