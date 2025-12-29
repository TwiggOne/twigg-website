"use client";

import React, { useEffect, useMemo } from "react";
import {
  CompaseArrow,
  CompaseBg,
  OuterCompassBorder,
} from "@/utils/SvgUtils";
import { MoneyVibeTraits, TraitLevel } from "./TopicData";

/* ===================== Types ===================== */

type CompassPosition =
  | "top"
  | "top-right"
  | "right"
  | "bottom"
  | "bottom-left"
  | "left"
  | "center";

type VisibleCompassPosition = Exclude<CompassPosition, "center">;

interface TraitItem {
  title: keyof MoneyVibeTraits;
  level: TraitLevel;
  position: CompassPosition;
  score: number;
}

interface VibeCompaseProps {
  traits: MoneyVibeTraits;
  onActiveTraitChange?: (trait: TraitItem) => void;
}

/* ===================== Constants ===================== */

const TRAIT_POSITION_MAP: Record<keyof MoneyVibeTraits, CompassPosition> = {
  Planning: "top",
  Generosity: "top-right",
  Learning: "right",
  Calmness: "bottom",
  Avoidance: "bottom-left",
  Risk: "left",
  Impulse: "bottom",
};

const POSITION_CLASSES: Record<VisibleCompassPosition, string> = {
  top: "top-[-20px] left-1/2 -translate-x-1/2 text-center",
  "top-right": "top-[30px] right-[20px] text-left",
  right: "top-[55%] right-[15px] -translate-y-1/2 text-left",
  bottom: "bottom-[-20px] left-[55%] text-center",
  "bottom-left": "bottom-[10px] left-[30px] text-right",
  left: "top-[47%] left-[10px] -translate-y-1/2 text-right",
};

const POSITION_ANGLE: Record<VisibleCompassPosition, number> = {
  top: -45,
  "top-right": 0,
  right: 50,
  bottom: 120,
  "bottom-left": 180,
  left: 240,
};

const LEVEL_SCORE: Record<TraitLevel, number> = {
  High: 3,
  Medium: 2,
  Low: 1,
  Unknown: 0,
};

/* ===================== Component ===================== */

const VibeCompase: React.FC<VibeCompaseProps> = ({
  traits,
  onActiveTraitChange,
}) => {
  /* 1️⃣ Build all traits (including center) */
  const allTraits = useMemo<TraitItem[]>(() => {
    return (Object.keys(traits) as Array<keyof MoneyVibeTraits>).map(
      (traitName) => ({
        title: traitName,
        level: traits[traitName].level,
        position: TRAIT_POSITION_MAP[traitName],
        score: LEVEL_SCORE[traits[traitName].level],
      })
    );
  }, [traits]);

  /* 2️⃣ Active trait comes from ALL traits */
  const activeTrait = useMemo<TraitItem>(() => {
    return allTraits.reduce((max, curr) =>
      curr.score > max.score ? curr : max
    );
  }, [allTraits]);

  /* 3️⃣ Visible traits (always 6, include center only if active) */
  const visibleTraits = useMemo<TraitItem[]>(() => {
    const nonCenter = allTraits.filter(
      (t): t is TraitItem & { position: VisibleCompassPosition } =>
        t.position !== "center"
    );

    if (activeTrait.position === "center") {
      return [activeTrait, ...nonCenter.slice(0, 5)];
    }

    const others = nonCenter.filter(
      (t) => t.title !== activeTrait.title
    );

    return [activeTrait, ...others.slice(0, 5)];
  }, [allTraits, activeTrait]);

  /* 4️⃣ Notify parent */
  useEffect(() => {
    if (onActiveTraitChange) {
      onActiveTraitChange(activeTrait);
    }
  }, [activeTrait, onActiveTraitChange]);

  /* 5️⃣ Safe angle (center = no rotation) */
  const activeAngle =
    activeTrait.position === "center"
      ? 0
      : POSITION_ANGLE[activeTrait.position];

  /* ===================== Render ===================== */
const isVisiblePosition = (
  pos: CompassPosition
): pos is VisibleCompassPosition => pos !== "center";

  return (
    <div className="flex flex-col max-w-[306px] my-4 relative w-full py-[40px] items-center justify-center">
      <CompaseBg />

      {/* Arrow */}
      <div
        className="absolute transition-transform duration-500 ease-out"
        style={{ transform: `rotate(${activeAngle}deg)` }}
      >
        <CompaseArrow />
      </div>

      {/* Border */}
      <div className="absolute">
        <OuterCompassBorder angle={activeAngle} />
      </div>

      {/* Labels */}
      {visibleTraits.map((item) => {
        const isActive = item.title === activeTrait.title;
        const isCenter = item.position === "center";

        return (
          <div
            key={item.title}
            className={`absolute text-[12px] font-switzer leading-tight
         ${
  isVisiblePosition(item.position)
    ? POSITION_CLASSES[item.position]
    : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
}

              ${isActive ? "text-[#FDF9F0]" : "text-[#FDF9F0]/60"}
            `}
          >
            <div className="font-medium">{item.title}</div>
            <div>({item.level})</div>
          </div>
        );
      })}
    </div>
  );
};

export default VibeCompase;
