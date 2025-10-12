"use client";
import { Expand } from "@/utils/SvgUtils";
import { motion } from "motion/react";
import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Twigg?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      question: "How does Twigg use AI?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How much does it cost?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      question: "How can I get started?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
  ];

  // Track which FAQ index is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full flex justify-center items-center py-12 px-4 sm:py-20 sm:px-6 bg-[#0D2F23]">
      <div className="w-full max-w-[900px] flex flex-col gap-8 sm:gap-10">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 sm:gap-4 text-center">
          <h2 className="font-bricolage text-[20px] sm:text-[56px] font-semibold text-[#FDF9F0] leading-[40px] sm:leading-[100%]">
            FAQs
          </h2>
          <p className="font-switzer text-[14px] sm:text-[24px] font-normal text-[#FDF9F0]/80 leading-[24px] sm:leading-[120%]">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col items-center w-full gap-[15px] sm:gap-[30px]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        background: isOpen
          ? "linear-gradient(187.23deg, rgba(188, 147, 19, 0.125) 5.2%, rgba(2, 26, 26, 0) 137.77%)"
          : "linear-gradient(184.8deg, rgba(2, 26, 26, 0.05) 3.57%, rgba(2, 26, 26, 0.5) 87.76%)",
        borderColor: isOpen ? "#BC931399" : "#BC931366",
        backdropFilter: isOpen ? "blur(40px)" : "blur(20px)",
      }}
        whileHover={{
    background: isOpen
      ? "linear-gradient(187.23deg, rgba(188, 147, 19, 0.125) 5.2%, rgba(2, 26, 26, 0) 137.77%)"
      : "linear-gradient(187.23deg, rgba(188, 147, 19, 0.125) 5.2%, rgba(2, 26, 26, 0) 137.77%)",
  }}

      transition={{ duration: 0.4 }}
      onClick={onClick}
      className={`w-full rounded-[8px] flex flex-col sm:rounded-[20px] py-[19px] px-[16px] cursor-pointer border border-t-[2px] border-l-[0.5px] border-r-[0.5px] border-b-[0.5px]`}
    >
      {/* Header */}
      <div className="flex justify-between items-center ">
        <span className="font-switzer text-white text-[12px] sm:text-[20px] font-medium leading-[20px] sm:leading-[100%]">
          {question}
        </span>
        <div className="w-[12px] h-[8px] sm:w-[22px] sm:h-[14px]">
        <Expand flip={isOpen} />

        </div>
      </div>

      {/* Body - motion expand */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden "
      >
        <p className="font-switzer text-[#FDF9F0CC] pt-[16px] text-[10px] sm:text-[14px] sm:text-[10px] leading-[100%]">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};
