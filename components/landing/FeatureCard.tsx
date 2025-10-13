"use client";

import { Menu, Thunder, Eye } from "@/utils/SvgUtils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Variants, Transition } from "framer-motion";

export default function FeatureCard() {
  const features = [
    {
      title: "Deeply \nPersonalised",
      description:
        "Blends your income, spending, assets, loans, and money personality.",
      icon: <Menu />,
    },
    {
      title: "Powered by 20+\nYears of Data",
      description:
        "Trained on decades of markets, instruments, and regulations.",
      icon: <Thunder />,
    },
    {
      title: "Context\nAware",
      description:
        "Adapts to your goals, risks, and life stage never one-size-fits-all.",
      icon: <Eye />,
    },
  ];
  const getGradient = (index: number) => {
    switch (index) {
      case 0:
        return "linear-gradient(135.72deg, rgba(30, 51, 42, 0.5) 0%, rgba(38, 56, 48, 0.5) 55.19%, rgba(228, 215, 174, 0.5) 140.32%)";
      case 1:
        return "linear-gradient(135.72deg, rgba(21, 45, 35, 1) 0%, rgba(38, 56, 48, 0.5) 50.19%, rgba(219, 215, 252, 0.5) 110.32%)";
      case 2:
        return "linear-gradient(135.72deg, rgba(30, 51, 42, 0.5) 0%, rgba(38, 56, 48, 0.5) 50.19%, rgba(226, 187, 66, 0.5) 110.32%)";
      default:
        return "";
    }
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile carousel
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isMobile, features.length]);

  // Desktop stagger animation variants
  const getCardVariants = (index: number): Variants => {
    switch (index) {
      case 0: // Left card: start center → move left
        return {
          hidden: { opacity: 0, scale: 0.8, x: "50%" },
          visible: {
            opacity: 1,
            scale: 1,
            x: "0%",
            transition: { delay: 0.8, type: "spring", stiffness: 120 },
          },
        };
      case 1: // Center card: appear in place
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 1.6, type: "spring", stiffness: 120 },
          },
        };
      case 2: // Right card: start center → move right
        return {
          hidden: { opacity: 0, scale: 0.8, x: "-50%" },
          visible: {
            opacity: 1,
            scale: 1,
            x: "0%",
            transition: { delay: 2.1, type: "spring", stiffness: 120 },
          },
        };
      default:
        return {};
    }
  };

  return (
    <div className="w-full  flex justify-center">
      {isMobile ? (
        <div className="w-full flex justify-center relative overflow-hidden h-[250px]">
          <AnimatePresence>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, x: "100%" }} // from right
              animate={{ opacity: 1, scale: 1, x: "0%" }} // centered
              exit={{ opacity: 0, scale: 0.8, x: "-100%" }} // exit to left
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center"
            >
              <div
                className="relative rounded-[15px] backdrop-blur-[12.5px] px-[21px] py-[24px] flex flex-col items-start gap-[16px]"
                style={{ width: "200px", background: getGradient(activeIndex) }}
              >
                {/* Icon */}
                <div
                  className="w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(180.38deg, rgba(253, 249, 240, 0.25) -5.27%, rgba(33, 72, 56, 0.25) 99.67%)",
                    border: "1px solid rgba(253, 249, 240, 0.08)",
                    boxShadow:
                      "0px 4px 30px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(253, 249, 240, 0.3)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <div className="w-[18px] h-[16px]">
                    {features[activeIndex].icon}
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-bricolage text-[16px] font-bold text-[#FDF9F0] whitespace-pre-line">
                    {features[activeIndex].title}
                  </h3>
                  <p className="font-switzer text-[12px] text-[#FDF9F0]/80">
                    {features[activeIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        // Desktop Grid
        <div className="grid grid-cols-3 gap-[36px] w-full max-w-[1200px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={getCardVariants(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-[15px] backdrop-blur-[12.5px] px-[41px] py-[48px] flex flex-col items-start gap-[36px]"
              style={{ background: getGradient(index) }}
            >
              {/* Icon */}
              <div
                className="w-[63px] h-[63px] rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180.38deg, rgba(253, 249, 240, 0.25) -5.27%, rgba(33, 72, 56, 0.25) 99.67%)",
                  border: "1px solid rgba(253, 249, 240, 0.08)",
                  boxShadow:
                    "0px 4px 30px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(253, 249, 240, 0.3)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className="w-[22px] h-[20px]">{feature.icon}</div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-[14px]">
                <h3 className="font-bricolage text-[26px] font-bold text-[#FDF9F0] whitespace-pre-line">
                  {feature.title}
                </h3>
                <p className="font-switzer text-[18px] text-[#FDF9F0]/80 leading-[110%]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
