"use client";

import React, { useEffect, useMemo } from "react";
import { CompaseArrow, CompaseBg, OuterCompassBorder } from "@/utils/SvgUtils";
import { MoneyVibeTraits, TraitLevel } from "./TopicData";

type CompassPosition =
  | "top"
  | "top-right"
  | "right"
  | "bottom"
  | "bottom-left"
  | "left"
  | "center";

interface VibeCompaseProps {
  traits: MoneyVibeTraits;
  onActiveTraitChange?: (trait: {
    title: keyof MoneyVibeTraits;
    level: TraitLevel;
    position: VisibleCompassPosition;
    score: number;
  }) => void;
}

const TRAIT_POSITION_MAP: Record<keyof MoneyVibeTraits, CompassPosition> = {
  Planning: "top",
  Generosity: "top-right",
  Learning: "right",
  Calmness: "bottom",
  Avoidance: "bottom-left",
  Risk: "left",
  Impulse: "center",
};

const POSITION_CLASSES: Record<Exclude<CompassPosition, "center">, string> = {
  top: "top-[-20px] left-1/2 -translate-x-1/2 text-center",
  "top-right": "top-[30px] right-[20px] text-left",
  right: "top-[55%] right-[15px] -translate-y-1/2 text-left",
  bottom: "bottom-[-20px] left-[55%] text-center",
  "bottom-left": "bottom-[10px] left-[30px] text-right",
  left: "top-[47%] left-[10px] -translate-y-1/2 text-right",
};

const POSITION_ANGLE: Record<Exclude<CompassPosition, "center">, number> = {
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
type VisibleCompassPosition = Exclude<CompassPosition, "center">;

const VibeCompase: React.FC<VibeCompaseProps> = ({
  traits,
  onActiveTraitChange,
}) => {
  const allTraits = useMemo(() => {
    return (Object.keys(traits) as Array<keyof MoneyVibeTraits>).map(
      (traitName) => ({
        title: traitName,
        level: traits[traitName].level,
        position: TRAIT_POSITION_MAP[traitName],
        score: LEVEL_SCORE[traits[traitName].level],
      })
    );
  }, [traits]);

  const visibleTraits = useMemo<
    Array<{
      title: keyof MoneyVibeTraits;
      level: TraitLevel;
      position: VisibleCompassPosition;
      score: number;
    }>
  >(() => {
    return allTraits.filter(
      (t): t is typeof t & { position: VisibleCompassPosition } =>
        t.position !== "center"
    );
  }, [allTraits]);

  const activeTrait = useMemo(() => {
    return visibleTraits.reduce((max, curr) =>
      curr.score > max.score ? curr : max
    );
  }, [visibleTraits]);

  const labels = useMemo(() => {
    const others = visibleTraits.filter((t) => t.title !== activeTrait.title);
    return [activeTrait, ...others.slice(0, 5)];
  }, [visibleTraits, activeTrait]);
  useEffect(() => {
    if (onActiveTraitChange && activeTrait) {
      onActiveTraitChange(activeTrait);
    }
  }, [activeTrait, onActiveTraitChange]);

  return (
    <div className="flex flex-col max-w-[306px] my-4 relative w-full py-[40px] items-center justify-center">
      <CompaseBg />

      <div
        className="absolute transition-transform duration-500 ease-out"
        style={{
          transform: `rotate(${POSITION_ANGLE[activeTrait.position]}deg)`,
        }}
      >
        <CompaseArrow />
      </div>
      <div className="absolute">
        <OuterCompassBorder angle={POSITION_ANGLE[activeTrait.position]} />
      </div>

      {labels.map((item) => {
        const isActive = item.title === activeTrait.title;

        return (
          <div
            key={item.title}
            className={`absolute text-[12px] font-switzer leading-tight
              ${POSITION_CLASSES[item.position]}
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
