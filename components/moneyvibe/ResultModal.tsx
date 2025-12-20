"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { MoneyVibeArchetype } from "./TopicData";

/* ================= CARD ================= */

type ArchetypeCardProps = {
  archetype: MoneyVibeArchetype;
};

const ArchetypeCard: React.FC<ArchetypeCardProps> = ({ archetype }) => {
  return (
    <div className="bg-[rgba(253,249,240,0.03)] h-full border border-[#BC9313]/20 rounded-[20px] p-6 backdrop-blur-[50px] flex flex-col justify-around">
      <div className="flex flex-col">
             <h3 className="text-[20px] md:text-[24px] font-semibold font-bricolage text-[#BC9313] mb-2">
        {archetype.title}
      </h3>
      <p className="text-[14px] md:text-[16px] font-switzer text-[#FDF9F0]/80 mb-4">
        {archetype.description}
      </p>
      </div>
 
      <div className="pt-3 border-t  border-[#BC9313]/10">
        <p className="text-[12px] md:text-[14px] font-switzer text-[#FDF9F0]/60">
          Key Traits
        </p>
        <p className="text-[13px] md:text-[15px] font-switzer text-[#BC9313]/90 mt-1">
          {archetype.traits}
        </p>
      </div>
    </div>
  );
};

/* ================= MODAL ================= */

type ArchetypesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  archetypes: MoneyVibeArchetype[];
};

export const ArchetypesModal: React.FC<ArchetypesModalProps> = ({
  isOpen,
  onClose,
  archetypes,
}) => {
  const [index, setIndex] = useState(0);
const totalCards = archetypes.length;
const canGoPrev = index > 0;
const canGoNext = index < totalCards - 1;


  const goPrev = () => {
    if (canGoPrev) setIndex((i) => i - 1);
  };

  const goNext = () => {
    if (canGoNext) setIndex((i) => i + 1);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[85vh] bg-[rgba(21,45,35,0.95)] border border-[#BC9313]/30 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[rgba(21,45,35,0.98)] border-b border-[#BC9313]/20 px-6 py-5 md:px-8 md:py-6 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[24px] md:text-[32px] font-semibold font-bricolage text-[#FDF9F0]">
                All MoneyVibes
              </h2>
              <p className="text-[12px] md:text-[14px] font-switzer text-[#FDF9F0]/60 mt-1">
                Explore all financial personalities
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[rgba(253,249,240,0.05)] border border-[#BC9313]/20"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-[#FDF9F0]" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative px-8 md:px-12 py-8">
          {/* Left Arrow */}
          {canGoPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 cursor-pointer md:left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#BC9313]/20 border border-[#BC9313]/30 hover:bg-[#BC9313]/30 transition-all flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#BC9313]" />
            </button>
          )}

          {/* Cards Container */}
          <div className="overflow-hidden mx-2 md:mx-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {archetypes.map((archetype) => (
                <div key={archetype.name} className="w-full flex-shrink-0 px-2">
                  <ArchetypeCard archetype={archetype} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {canGoNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute cursor-pointer right-2 md:right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#BC9313]/20 border border-[#BC9313]/30 hover:bg-[#BC9313]/30 transition-all flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#BC9313] cursor-pointer" />
            </button>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center  justify-center gap-2 pb-6">
          {archetypes.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all  ${
                i === index
                  ? "w-8 bg-[#BC9313]"
                  : "w-2 bg-[#BC9313]/30 hover:bg-[#BC9313]/50 cursor-pointer"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
