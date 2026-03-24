"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import HowItWorksCard from "../ui/components/HowItWorksCard";

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepsScrollRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pauseRef = useRef(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });

  const steps = [
    { step: "STEP 1", title: "Download the app" },
    { step: "STEP 2", title: "Link your accounts" },
    { step: "STEP 3", title: "See your full picture" },
    { step: "STEP 4", title: "Act with confidence" },
  ];

  const cards = [
    {
      id: "step1",
      image: "/how_it_works/step_1_image.png",
      text: (
        <>
          Available on{" "}
          <a
            href="https://apps.apple.com/in/app/twigg-one/id6758598241"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BC9313] underline"
          >
            iOS
          </a>{" "}
          and{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.aadyantx.twigg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BC9313] underline"
          >
            Android
          </a>{" "}
          in beta. Takes under 2 minutes to set up.
        </>
      ),
    },
    {
      id: "step2",
      image: "/how_it_works/step_2_image.png",
      text: "Securely connect banks, investments, insurance and loans via RBI's Account Aggregator consent-based, read-only.",
    },
    {
      id: "step3",
      image: "/how_it_works/step_3_image.png",
      text: "Twigg Pulse reads 15+ signals across your financial life and tells you exactly what needs your attention.",
    },
    {
      id: "step4",
      image: "/how_it_works/step_4_image.png",
      text: "Get personalised guidance from Twigg AI, backed by expert advisors when decisions get complex.",
    },
  ];

  // 🔁 Autoplay logic
  const startAutoPlay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (!pauseRef.current) {
        setActiveStep((prev) => (prev + 1) % cards.length);
      }
    }, 4000);
  };

  // ▶️ Run autoplay only when in view
  useEffect(() => {
    if (!isInView) return;

    startAutoPlay();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeStep, isInView]);

  // 📍 Scroll active step into view
  useEffect(() => {
    const container = stepsScrollRef.current;
    const activeEl = stepRefs.current[activeStep];
    if (!container || !activeEl) return;

    const containerLeft = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const elLeft = activeEl.offsetLeft;
    const elWidth = activeEl.offsetWidth;
    const elRight = elLeft + elWidth;
    const visibleRight = containerLeft + containerWidth;

    const isFullyVisible = elLeft >= containerLeft && elRight <= visibleRight;

    if (!isFullyVisible) {
      const scrollTo = elLeft - containerWidth / 2 + elWidth / 2;
      container.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }, [activeStep]);

  const orderedCards = [
    ...cards.slice(activeStep),
    ...cards.slice(0, activeStep),
  ];

  return (
    <div
      ref={sectionRef}
      className="flex flex-col gap-[31px] md:gap-[84px]"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 leading-none">
        <h1 className="text-[20px] md:text-[56px] font-semibold font-bricolage text-[#FDF9F0]">
          How It <span className="text-[#BC9313]">Works</span>
        </h1>
        <p className="text-[14px] md:text-[24px] text-[#FDF9F0]/80 font-switzer">
          From sign-up to clarity in minutes.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-[33px] md:gap-[86px]">
        {/* Steps */}
        <div
          ref={stepsScrollRef}
          className="flex flex-row md:flex-col gap-[24px] md:gap-[56px] overflow-x-auto md:overflow-x-visible pb-2 md:pb-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {steps.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              onClick={() => {
                setActiveStep(index);

                // ⛔ Pause autoplay
                pauseRef.current = true;
                if (timeoutRef.current) clearTimeout(timeoutRef.current);

                // ▶️ Resume after 7s
                setTimeout(() => {
                  pauseRef.current = false;
                  if (isInView) startAutoPlay();
                }, 4000);
              }}
              className="flex-shrink-0"
            >
              <StepLabel
                step={item.step}
                title={item.title}
                isActive={activeStep === index}
              />
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-row gap-6 items-stretch">
          <AnimatePresence>
            {orderedCards.map((card, index) => (
              <motion.div
                key={card.id}
                layout
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -160, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <HowItWorksCard
                  isActive={index === 0}
                  image={card.image}
                  text={card.text}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

type StepLabelProps = {
  step: string;
  title: string;
  isActive?: boolean;
};

const StepLabel: React.FC<StepLabelProps> = ({ step, title, isActive }) => {
  return (
    <div className="flex flex-col md:flex-row gap-1 md:gap-3 cursor-pointer">
      <div
        className={`md:w-1 max-md:h-0.5 max-md:w-8 rounded-[4px] transition-colors duration-300 ${
          isActive ? "bg-[#BC9313]" : "bg-transparent"
        }`}
      />
      <div className="gap-1 flex flex-col">
        <p
          className={`text-[10px] md:text-[16px] font-bricolage font-semibold ${
            isActive ? "text-[#BC9313]" : "text-[#BC9313]/50"
          }`}
        >
          {step}
        </p>
        <p
          className={`text-[14px] md:text-[24px] font-bricolage font-semibold whitespace-nowrap ${
            isActive ? "text-[#FDF9F0]" : "text-[#FDF9F0]/50"
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;