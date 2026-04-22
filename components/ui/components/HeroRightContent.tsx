"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { TargetAndTransition } from "framer-motion";
import { motion } from "framer-motion";
const MotionImage = motion(Image);

const images = [
  {
    src: "/hero/mobile_1.png",
    alt: "mobile_1_hero",
    overlays: [
      {
        src: "/hero/mobile_1_1.png",
        width: 218,
        height: 149,
        top: 186,
        left: -30,
      },
      {
        src: "/hero/mobile_1_2.png",
        width: 230,
        height: 145,
        top: 380,
        left: 40,
      },
    ],
  },
  {
    src: "/hero/mobile_2.png",
    alt: "mobile_2_hero",
    overlays: [
      {
        src: "/hero/mobile_2_1.png",
        width: 242,
        height: 42,
        top: 300,
        left: -90,
      },
      {
        src: "/hero/mobile_2_2.png",
        width: 255,
        height: 44,
        top: 370,
        left: 120,
      },

      {
        src: "/hero/mobile_2_3.png",
        width: 260,
        height: 45,
        top: 440,
        left: -10,
      },
    ],
  },
  {
    src: "/hero/mobile_3.png",
    alt: "mobile_3_hero",
    overlays: [  {
        src: "/hero/mobile_3_3.png",
        width: 130,
        height: 54,
        top: 200,
        left: 200,
      }, 
      {
        src: "/hero/mobile_3_2.png",
        width: 257,
        height: 144,
        top: 370,
        left: 160,
      },
      {
        src: "/hero/mobile_3_1.png",
        width: 251,
        height: 53,
        top: 280,
        left: -120,
      },
    
    ],
  },
    {
    src: "/hero/mobile_4.png",
    alt: "mobile_4_hero",
    overlays: [  {
        src: "/hero/mobile_4_1.png",
        width: 90,
        height: 91,
        top: 130,
        left: 0,
      }, 
      {
        src: "/hero/mobile_4_2.png",
        width: 125,
        height: 100,
        top: 250,
        left: 220,
      },
      {
        src: "/hero/mobile_4_3.png",
        width: 277,
        height: 52,
        top: 360,
        left: -30,
      },
    
    ],
  },
    {
    src: "/hero/mobile_5.png",
    alt: "mobile_5_hero",
    overlays: [  {
        src: "/hero/mobile_5_1.png",
        width: 112,
        height: 43,
        top: 150,
        left: -50,
      }, 
      {
        src: "/hero/mobile_5_2.png",
        width: 125,
        height: 57,
        top: 300,
        left: 210,
      },
      {
        src: "/hero/mobile_5_3.png",
        width: 144,
        height: 47,
        top: 485,
        left: -40,
      },
    
    ],
  },
];


const SLOT_STYLES: Record<
  "left" | "center" | "right",
  { zIndex: number; animate: TargetAndTransition }
> = {
  left: {
    zIndex: 0,
    animate: { x: -215, scale: 0.8, opacity: 0.3 },
  },
  center: {
    zIndex: 10,
    animate: { x: 0, scale: 1, opacity: 1 },
  },
  right: {
    zIndex: 0,
    animate: { x: 215, scale: 0.8, opacity: 0.3 },
  },
};

const TOTAL = images.length;

const HeroRightContent = () => {
  // currentIndex = index of the CENTER image
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlays, setShowOverlays] = useState(false);

  // Trigger overlays shortly after mount for the initial center image
  useEffect(() => {
    const timer = setTimeout(() => setShowOverlays(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setShowOverlays(false); // hide overlays during transition
      setCurrentIndex((prev) => (prev + 1) % TOTAL);
      setTimeout(() => setShowOverlays(true), 500); // show overlays for new center
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const leftIndex = (currentIndex - 1 + TOTAL) % TOTAL;
  const rightIndex = (currentIndex + 1) % TOTAL;

  // Only render the 3 visible images: left, center, right
  const visibleSlots: { index: number; slot: "left" | "center" | "right" }[] =
    [
      { index: leftIndex, slot: "left" },
      { index: currentIndex, slot: "center" },
      { index: rightIndex, slot: "right" },
    ];

  return (
    <div className="relative flex justify-center items-center h-[300px] md:h-[575px] w-full max-sm:scale-[0.55] max-md:pb-20">
      {visibleSlots.map(({ index, slot }) => {
        const img = images[index];
        const { zIndex, animate } = SLOT_STYLES[slot];
        const isCenter = slot === "center";

        return (
          <motion.div
            key={img.alt}
            className="absolute"
            style={{
              zIndex,
              left: "50%",
              marginLeft: "-140px",
            }}
            animate={animate}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <Image src={img.src} alt={img.alt} width={280} height={575} />

            {/* Render overlays only for the center image when showOverlays is true */}
            {isCenter &&
              showOverlays &&
              img.overlays.map((overlay, idx) => (
                <MotionImage
                  key={idx}
                  src={overlay.src}
                  alt={`overlay_${idx}`}
                  width={overlay.width}
                  height={overlay.height}
                  className="absolute shadow-md"
                  style={{ top: overlay.top, left: overlay.left }}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.6, duration: 0.5 }}
                />
              ))}
          </motion.div>
        );
      })}
    </div>
  );
};

export default HeroRightContent;