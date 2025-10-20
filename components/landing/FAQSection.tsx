"use client";
import { Expand } from "@/utils/SvgUtils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function FAQSection() {
  interface FAQItemProps {
    question: string;
    answer: React.ReactNode; // ✅ allows JSX (like Link)
    isOpen: boolean;
    onClick: () => void;
  }

  const faqs: Omit<FAQItemProps, "isOpen" | "onClick">[] = [
    {
      question: "What exactly is Twigg?",
      answer:
        "Twigg is your all-in-one money management platform. From expenses and loans to investments and insurance, Twigg gives you a clear picture of your money and helps you grow it with confidence.",
    },
    {
      question: "How is Twigg different from other finance apps?",
      answer:
        "Most apps only help you invest. Twigg helps you manage money end-to-end—building personalized money plans, nudging you to save better, tracking progress, and guiding you toward smarter decisions across your entire financial life.",
    },
    {
      question: "Is the advice on Twigg unbiased?",
      answer:
        "Yes. Twigg is 100% transparent and conflict-free. We don't push products or take hidden commissions. Our recommendations come from SEBI-registered advisors and AI models built to prioritise your interests first.",
    },
    {
      question: "How does Twigg personalise advice for me?",
      answer:
        "Twigg combines your actual data (income, expenses, assets, loans, policies) with your money personality to give you tailored plans. It adapts to your goals—whether you're saving for an emergency fund, buying a home, or planning for your child's education.",
    },
    {
      question: "Will Twigg help if I don't understand finance jargon?",
      answer:
        "Absolutely. You don't need to know terms like CAGR or XIRR. Twigg translates complex financial concepts into plain language and gives you actionable steps—so you can make decisions without getting stuck in jargon.",
    },
    {
      question: "How safe is my data with Twigg?",
      answer:
        "Very safe. We use bank-grade security, and handle your data with encryption and consent at every step.",
    },
    {
      question: "Do I really need Twigg if I already invest in mutual funds or stocks?",
      answer:
        "Yes—because investing is only one part of money management. Twigg helps you manage cash flows, debts, insurance, and risk alongside investments, so your overall financial health stays on track.",
    },
    {
      question: "Can Twigg help me see how I'm doing compared to others?",
      answer:
        "Yes. Twigg lets you track your progress month by month and even see how you stack up against peers, so you learn and grow with context—without FOMO.",
    },
    {
      question: "Does Twigg replace a financial advisor?",
      answer:
        "Twigg blends the best of both worlds. Our AI provides instant clarity, while human experts give you reassurance and deeper insights when you need them.",
    },
    {
      question: "How do I start using Twigg?",
      answer: (
        <>
          Just join our{" "}
          <Link
            href="/waitlist"
            className="text-[#BC9313] underline underline-offset-2 hover:text-[#e6c15b] transition-colors duration-200"
          >
            waitlist
          </Link>{" "}
          to get early access. We’ll notify you the moment Twigg is ready to
          simplify your money.
        </>
      ),
    },
  ];

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
            Got questions? We&apos;ve got answers.
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
  answer: React.ReactNode;
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
        background:
          "linear-gradient(187.23deg, rgba(188, 147, 19, 0.125) 5.2%, rgba(2, 26, 26, 0) 137.77%)",
      }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="w-full rounded-[8px] flex flex-col sm:rounded-[20px] py-[19px] px-[16px] cursor-pointer border border-t-[2px] border-l-[0.5px] border-r-[0.5px] border-b-[0.5px]"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
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
        className="overflow-hidden"
      >
        <p className="font-switzer text-[#FDF9F0CC] pt-[16px] text-[10px] sm:text-[14px] leading-[150%]">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};
