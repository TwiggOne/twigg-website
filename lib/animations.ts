// Centralized animation configuration for consistent, accessible animations
import { Variants } from "framer-motion";

// Check for reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return false;
};

// Standardized easing functions
export const easing = {
  // Subtle, polished easing for most animations
  smooth: [0.25, 0.1, 0.25, 1] as const,
  // Snappy easing for interactive elements
  snappy: [0.4, 0, 0.2, 1] as const,
  // Gentle easing for large movements
  gentle: [0.22, 1, 0.36, 1] as const,
  // Linear for continuous animations
  linear: "linear" as const,
} as const;

// Standardized durations (in seconds)
export const duration = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
  slowest: 1.2,
} as const;

// Common animation variants
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: duration.normal,
      ease: easing.smooth
    }
  }
};

export const fadeIn: Variants = {
  hidden: { 
    opacity: 0,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: duration.normal,
      ease: easing.smooth
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: duration.normal,
      ease: easing.smooth
    }
  }
};

export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: duration.normal,
      ease: easing.smooth
    }
  }
};

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 30,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: duration.normal,
      ease: easing.smooth
    }
  }
};

// Stagger container for sequential animations
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

// Hover animations (subtle and performant)
export const hoverScale = {
  scale: 1.02,
  transition: { 
    duration: duration.fast,
    ease: easing.snappy
  }
};

export const hoverLift = {
  y: -2,
  transition: { 
    duration: duration.fast,
    ease: easing.snappy
  }
};

// Reduced motion variants (instant transitions)
export const reducedMotionVariants = {
  fadeInUp: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideInLeft: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideInRight: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

// Get appropriate variants based on motion preference
export const getVariants = (variantName: keyof typeof reducedMotionVariants) => {
  if (prefersReducedMotion()) {
    return reducedMotionVariants[variantName];
  }
  
  switch (variantName) {
    case 'fadeInUp': return fadeInUp;
    case 'fadeIn': return fadeIn;
    case 'scaleIn': return scaleIn;
    case 'slideInLeft': return slideInLeft;
    case 'slideInRight': return slideInRight;
    default: return fadeIn;
  }
};

// Performance-optimized animation props
export const performanceProps = {
  // Use transform and opacity for better performance
  willChange: 'transform, opacity',
  // Reduce motion on low-end devices
  transition: {
    duration: prefersReducedMotion() ? 0 : duration.normal,
    ease: easing.smooth
  }
};
