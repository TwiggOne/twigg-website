"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollingProps {
  children: any; // bypass type issues
}

const SmoothScrolling = ({ children }: SmoothScrollingProps) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
