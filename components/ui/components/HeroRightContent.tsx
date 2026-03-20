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
        left: -100,
      },
      {
        src: "/hero/mobile_1_2.png",
        width: 230,
        height: 145,
        top: 400,
        left: 150,
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
    overlays: [
      {
        src: "/hero/mobile_3_1.png",
        width: 313,
        height: 96,
        top: 200,
        left: -100,
      },
      {
        src: "/hero/mobile_3_2.png",
        width: 251,
        height: 53,
        top: 350,
        left: 120,
      },
    ],
  },
];

const POSITION_STYLES: Record<
  number,
  { zIndex: number; animate: TargetAndTransition }
> = {
  0: {
    // LEFT
    zIndex: 0,
    animate: { x: -215, scale: 0.8, opacity: 0.3 },
  },
  1: {
    // CENTER
    zIndex: 10,
    animate: { x: 0, scale: 1, opacity: 1 },
  },
  2: {
    // RIGHT
    zIndex: 0,
    animate: { x: 215, scale: 0.8, opacity: 0.3 },
  },
};

const HeroRightContent = () => {
  const [positions, setPositions] = useState([0, 2, 1]);
  const [showOverlays, setShowOverlays] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => {
        const next = prev.map((pos) => (pos + 2) % 3);

        // Trigger overlay display after 0.5s for center image
        const centerIdx = next.findIndex((pos) => pos === 1);
        setShowOverlays(null); // reset first
        setTimeout(() => setShowOverlays(centerIdx), 500);

        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Initial overlay for first center
  useEffect(() => {
    const initialCenter = positions.findIndex((pos) => pos === 1);
    const timer = setTimeout(() => setShowOverlays(initialCenter), 500);
    return () => clearTimeout(timer);
  }, []);

  // Find which image is currently CENTER
  const centerIndex = positions.findIndex((pos) => pos === 1);

  return (
    <div className="relative flex justify-center items-center h-[575px] w-full ">
      {images.map((img, i) => {
        const slot = positions[i];
        const { zIndex, animate } = POSITION_STYLES[slot];

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

            {/* Render overlays only if this is the active center image */}
            {slot === 1 &&
              showOverlays === i &&
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
