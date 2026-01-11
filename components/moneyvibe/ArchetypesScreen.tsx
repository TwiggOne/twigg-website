"use client";

import { useState, useMemo, useRef } from "react";
import { MoneyVibeArchetype } from "@/components/moneyvibe/TopicData";
import ArchetypesHeader from "./ArchetypesHeader";
import Image from "next/image";
import { PointerLogo, UpArrow } from "@/utils/SvgUtils";
import SuccessModal from "./SuccessModal";
import axios from "axios";
import { ArrowLeftIcon } from "lucide-react";

type ArchetypesScreenProps = {
  archetypes: MoneyVibeArchetype[];
  id:number
  onBack: () => void;
};

export default function ArchetypesScreen({
  archetypes,
  onBack,id
}: ArchetypesScreenProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const headerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeName, setActiveName] = useState<string | null>(
    archetypes[0]?.name ?? null
  );

  const activeArchetype = useMemo(
    () => archetypes.find((a) => a.name === activeName),
    [archetypes, activeName]
  );

  if (!activeArchetype) return null;

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const scrollToCenter = (name: string) => {
    const container = scrollRef.current;
    const item = headerRefs.current[name];

    if (!container || !item) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const offset =
      itemRect.left -
      containerRect.left -
      containerRect.width / 2 +
      itemRect.width / 2;

    container.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

const handleUpdateVibe = async () => {
  if (!activeArchetype) return;
  setIsModalOpen(true);

  try {
    const payload = {
      waitlistEntryId: id, // pass the id prop from parent
      user_selected_archetype: activeArchetype.name,
    };

    console.log("Sending user selected archetype:", payload);

    const response = await axios.put(
      "https://api.twigg-dev.one/api/v1/moneyvibe/archetype",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Archetype updated successfully:", response.data);
  } catch (error) {
    console.error("Failed to update archetype:", error);
  }
};

  return (
    <>
      <div className="md:relative max-w-[654px] md:mt-[100px] max-md:mx-[22px] md:bg-[rgba(253,249,240,0.02)] md:border md:border-[#BC9313]/20 w-full flex flex-col gap-6 p-8 rounded-[60px] md:backdrop-blur-[50px] items-center">
        {/* ================= Archetypes Header ================= */}
                <div
                  onClick={onBack}
                  className="hidden cursor-pointer absolute  z-50  -left-20 top-10 shadow-md bg-[#BC9313]/20 border border-[#BC9313]/40 h-12 w-12 md:flex justify-center items-center rounded-full"
                >
                  <div className="w-[20px] h-[27px] text-[#BC9313] rotate-180">
                    <UpArrow right />
                  </div>
                </div>
        <div className=" mx-auto w-full max-w-[458px] flex flex-col text-[22px] md:text-[36px] leading-tight font-semibold font-bricolage text-left">
          <div onClick={onBack} className="md:hidden">
            <ArrowLeftIcon className="text-[#FDF9F0] text-[24px] mb-4.5"/>
          </div>
          <p className="text-[#BC9313]">Check Out the</p>
          <p className="text-[#FFFBF2]">Other MoneyVibes</p>
        </div>

        <div
          ref={scrollRef}
          className={` w-full
    md:max-w-[458px] overflow-x-auto select-none 
    ${isDragging ? "cursor-grabbing" : "cursor-grab"}
  `}
          style={{ scrollbarWidth: "none" }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          <div className="flex flex-row  flex-nowrap gap-1.5 justify-start">
            {archetypes.map((archetype) => (
              <ArchetypesHeader
                key={archetype.name}
                archetype={archetype}
                active={activeName === archetype.name}
                ref={(el) => {
                  headerRefs.current[archetype.name] = el;
                }}
                onClick={() => {
                  setActiveName(archetype.name);
                  scrollToCenter(archetype.name);
                }}
              />
            ))}
          </div>
        </div>

        {/* ================= Active Archetype Stack ================= */}
        <div className="relative w-full max-w-[355px] pt-3 mx-auto">
          {/* ===== Active Card ===== */}
          <div
            className="
      relative z-10
      w-full
      p-[30px]
      rounded-[20px]
      flex flex-col gap-6
      border border-[#BC9313]/10
      bg-gradient-to-br
      from-[#BC9313]/15
      via-[#152D23]/20
      to-[#152D23]
    "
          >
            {/* Header */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src={activeArchetype.pri_icon}
                  alt={activeArchetype.title}
                  height={33}
                  width={33}
                />
                <p className="text-[20px] md:text-[28px] leading-[100%] font-semibold font-bricolage text-[#BC9313]">
                  {activeArchetype.title}
                </p>
              </div>

              <p className="text-[12px] md:text-[14px] font-switzer text-[#FDF9F0]/80">
                {activeArchetype.recognitionHook}
              </p>
            </div>

            {/* You Probably */}
            <div className="flex flex-col gap-3">
              <p className="text-[14px] md:text-[16px] font-medium text-[#BC9313] font-switzer">
                You Probably
              </p>

              <div className="flex flex-col gap-2.5">
                {activeArchetype.youProbably.map((item, index) => (
                  <div key={index} className="flex gap-1 items-start">
                    <PointerLogo />
                    <p className="text-[12px] md:text-[14px] text-[#FDF9F0]/80 font-switzer">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* What This Means */}
            <div className="flex flex-col gap-3">
              <p className="text-[12px] md:text-[16px] font-medium text-[#BC9313] font-switzer">
                What This Means
              </p>

              <div className="flex flex-col gap-2.5">
                {activeArchetype.whatThisMeans.map((item, index) => (
                  <div key={index} className="flex gap-1 items-start">
                    <PointerLogo />
                    <p className="text-[12px] md:text-[14px] text-[#FDF9F0]/80 font-switzer">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Watch Out */}
            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[16px] font-medium text-[#BC9313] font-switzer">
                One thing to watch out for
              </p>
              <p className="text-[14px] font-switzer text-[#FDF9F0]/80">
                {activeArchetype.watchOutFor}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleUpdateVibe}
          className="max-w-[287px] mx-auto rounded-[10px] px-[24px] py-[10px] flex items-center justify-center text-[#BC9313] font-semibold font-switzer text-[12px] md:text-[14px] bg-[rgba(188,147,19,0.05)] border border-[#BC9313]/60 backdrop-blur-[50px] hover:bg-[rgba(188,147,19,0.1)] transition-colors cursor-pointer"
        >
          I&apos;m more of this type
        </button>
      </div>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
