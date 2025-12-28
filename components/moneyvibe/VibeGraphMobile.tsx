"use client";

import React, { useMemo, useEffect } from "react";
import { MoneyVibeTraits, TraitLevel } from "./TopicData";

interface VibeGraphMobileProps {
  traits: MoneyVibeTraits;
  onActiveTraitChange?: (trait: {
    title: keyof MoneyVibeTraits;
    level: TraitLevel;
    score: number;
  }) => void;
}

const LEVEL_SCORE: Record<TraitLevel, number> = {
  High: 3,
  Medium: 2,
  Low: 1,
  Unknown: 0,
};

// Heights relative to the 120px container
const LEVEL_HEIGHT: Record<TraitLevel, string> = {
  High: "h-[90px]", // Reaches top divider
  Medium: "h-[56px]", // Reaches middle divider
  Low: "h-[20px]", // Reaches second from bottom divider
  Unknown: "h-[10px]",
};

const VibeGraphMobile: React.FC<VibeGraphMobileProps> = ({
  traits,
  onActiveTraitChange,
}) => {
  const items = useMemo(() => {
    return (Object.keys(traits) as Array<keyof MoneyVibeTraits>).map((key) => ({
      title: key,
      level: traits[key].level,
      score: LEVEL_SCORE[traits[key].level],
    }));
  }, [traits]);

  const activeTrait = useMemo(() => {
    return items.reduce((max, curr) => (curr.score > max.score ? curr : max));
  }, [items]);

  useEffect(() => {
    if (onActiveTraitChange && activeTrait) {
      onActiveTraitChange(activeTrait);
    }
  }, [activeTrait, onActiveTraitChange]);
  const visibleItems = useMemo(() => {
    if (!activeTrait) return items.slice(0, 6);

    const others = items.filter((item) => item.title !== activeTrait.title);

    return [activeTrait, ...others].slice(0, 6);
  }, [items, activeTrait]);

  return (
    <div className="w-full max-w-[340px] py-[24px] px-[18px] rounded-[16px] border border-[#BC9313]/25 bg-[#0E2A1F] p-4">
      {/* Graph Container */}
      <div className="flex gap-1">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-end gap-[20px] text-[#FDF9F0]/60 text-[10px] h-[120px]  py-1 pb-[12px]">
          <span>High</span>
          <span>Medium</span>
          <span>Low</span>
        </div>

        {/* Chart Area with Grid Lines */}
        <div className="flex-1 relative">
          {/* Horizontal divider lines */}
          <div className="absolute inset-0 pointer-events-none h-[120px] flex flex-col">
            {/* Top 3 shifted down together */}
            <div className="mt-[30px] flex flex-col gap-[34px]">
              <div className="border-t border-dashed border-[#FDF9F0]/20" />
              <div className="border-t border-dashed border-[#FDF9F0]/20" />
              <div className="border-t border-dashed border-[#FDF9F0]/20" />
            </div>

            {/* Exact 9px gap */}
            <div className="h-[17px]" />

            {/* Last line stays at its position */}
            <div className="border-t border-dashed border-[#FDF9F0]/20 " />
          </div>

          {/* Bars Container */}
          <div className="relative h-[120px]">
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3">
              {visibleItems.map((item, index) => {
                const isActive = item.title === activeTrait.title;
                // Zig-zag pattern: even indices on top, odd on bottom

                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center flex-1 relative"
                  >
                    {/* Bar + label */}
                    <div className="flex flex-col items-center justify-end h-[120px]">
                      {/* Label on top of bar */}
                      {index % 2 === 0 && (
                        <span
                          className={`mb-[6px] text-[9px] whitespace-nowrap
      ${isActive ? "text-[#FDF9F0]" : "text-[#FDF9F0]"}`}
                        >
                          {item.title}
                        </span>
                      )}

                      {/* Bar */}
                      <div
                        className={`w-[28px] bg-gradient-to-b
      from-[#BC9313] to-[#564309]
      ${LEVEL_HEIGHT[item.level]}
      ${isActive ? "" : ""}
    `}
                      />
                    </div>

                    {/* Always show trait name at bottom */}
                    {/* Bottom label — EVEN index only */}
                    {index % 2 !== 0 && (
                      <span className="text-[#FDF9F0] text-[9px] text-center absolute -bottom-[18px] left-1/2 -translate-x-1/2 whitespace-nowrap">
                        {item.title}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VibeGraphMobile;
