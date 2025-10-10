import { ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: 'What is Twigg?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      question: 'How does Twigg use AI?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'How much does it cost?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      question: 'How can I get started?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
  ];

  return (
    <section className="relative w-full flex justify-center items-center py-12 px-4 sm:py-20 sm:px-6 bg-[#0D2F23]">
      <div className="w-full max-w-[900px] flex flex-col gap-6 sm:gap-10">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2 sm:gap-4 text-center">
          <h2 className="font-bricolage text-[32px] sm:text-[56px] font-semibold text-[#FDF9F0] leading-[40px] sm:leading-[67px]">
            FAQs
          </h2>
          <p className="font-switzer text-[18px] sm:text-[24px] font-normal text-[#FDF9F0]/80 leading-[24px] sm:leading-[32px]">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col items-center w-full">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQItem = ({ question, answer }:{
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full rounded-[12px] sm:rounded-[20px] mb-3 sm:mb-4 cursor-pointer transition-all duration-300 border
        ${isOpen ? 'bg-[#021A1A]/40' : 'hover:bg-[#021A1A]/20'}
        border-[0.5px] border-t-[2px] border-[#BC931366] backdrop-blur-[20px]`}
      style={{
        background: 'linear-gradient(184.8deg, rgba(2, 26, 26, 0.05) 3.57%, rgba(2, 26, 26, 0.5) 87.76%)',
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 sm:px-8 py-3 sm:py-5">
        <span className="text-white font-switzer text-[16px] sm:text-[20px] font-medium leading-[20px] sm:leading-[26px]">
          {question}
        </span>
        <div className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] rounded-[8px] sm:rounded-[10px] bg-[#BC9313] flex items-center justify-center">
          {isOpen ? <ArrowUp size={18} color="#0D2F23" /> : <ArrowDown size={18} color="#0D2F23" />}
        </div>
      </div>

      {/* Body */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 px-4 sm:px-8 pb-3 sm:pb-5' : 'max-h-0 px-4 sm:px-8 pb-0'}`}>
        <p className="text-gray-400 font-switzer text-[14px] sm:text-[18px] border-t border-[#BC931366] pt-3 sm:pt-4 mt-1 sm:mt-2 leading-snug">
          {answer}
        </p>
      </div>
    </div>
  );
};
