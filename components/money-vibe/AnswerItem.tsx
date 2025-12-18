"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type AnswerItemProps = {
  icon: string;
  label: string;
  value: string;
  onSelectComplete: (value: string) => void;
};

const AnswerItem: React.FC<AnswerItemProps> = ({
  icon,
  label,
  value,
  onSelectComplete,
}) => {
  const [selected, setSelected] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleSelect = () => {
    if (animating) return;

    setAnimating(true);
    setSelected(true);

    setTimeout(() => {
      onSelectComplete(value);
      setAnimating(false);
      setSelected(false);
    }, 700); // must match animation length
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
      transition={{ duration: 0.3 }}
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
          selected
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
        <Image
          src={icon}
          alt={label}
          width={55}
          height={55}
          className="object-contain"
        />
      </motion.div>

      {/* TEXT */}
      <motion.h3
        animate={{ opacity: selected ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        className="text-[14px] text-[#1A1A1A]/80 font-medium font-switzer"
      >
        {label}
      </motion.h3>
    </motion.div>
  );
};

export default AnswerItem;
