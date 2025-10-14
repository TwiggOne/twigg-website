// components/LenisScroll.tsx
"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisScrollProps {
  children: React.ReactNode;
}

export const LenisScroll: React.FC<LenisScrollProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis
  const lenis = new Lenis({
  duration:0.5, // Keep the scroll speed fast
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
  wheelMultiplier:1.5, 
  touchMultiplier: 1.0, 
  infinite: false,
});


    // Ticker (requestAnimationFrame loop)
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const rafId = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
};