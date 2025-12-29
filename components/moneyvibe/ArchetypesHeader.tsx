"use client";

import Image from "next/image";
import { forwardRef } from "react";
import { MoneyVibeArchetype } from "@/components/moneyvibe/TopicData";

type ArchetypesHeaderProps = {
  archetype: MoneyVibeArchetype;
  active?: boolean;
  onClick?: () => void;
};

const ArchetypesHeader = forwardRef<
  HTMLButtonElement,
  ArchetypesHeaderProps
>(function ArchetypesHeader(
  { archetype, active = false, onClick },
  ref
) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`
        shrink-0 flex flex-row cursor-pointer items-center gap-[6px]
        px-3 py-2 rounded-[8px]
        transition-all duration-200
        ${
          active
            ? "bg-[#BC9313] border border-transparent"
            : "bg-transparent border border-[#BC9313]/30"
        }
      `}
    >
      <Image
        height={20}
        width={20}
        alt={archetype.title}
        src={archetype.sec_icon}
      />
      <p
        className={`text-[12px] md:text-[14px] font-medium font-switzer whitespace-nowrap ${
          active ? "text-[#FDF9F0]" : "text-[#E4E8E7]/50"
        }`}
      >
        {archetype.title}
      </p>
    </button>
  );
});

export default ArchetypesHeader;
