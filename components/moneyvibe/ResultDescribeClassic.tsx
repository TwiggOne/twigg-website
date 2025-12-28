import React, { useState } from "react";
import { MoneyVibeEvaluationResponse } from "./TopicData";
import ClassicPrimary from "./ClassicPrimary";
import WhatThisMeans from "./WhatThisMeans";
import VibeCompase from "./VibeCompase";
import VibeGraphMobile from "./VibeGraphMobile";

interface ResultDescribeClassicProps {
  data: MoneyVibeEvaluationResponse;
}

const ResultDescribeClassic: React.FC<ResultDescribeClassicProps> = ({
  data,
}) => {
  const [activeTrait, setActiveTrait] = useState<{
    title: keyof typeof data.traits;
    level: string;
  } | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <ClassicPrimary archetype={data.archetypes.primary} />
<div className="hidden md:block">

      <VibeCompase
        traits={data.traits}
        onActiveTraitChange={(trait) =>
          setActiveTrait({
            title: trait.title,
            level: trait.level,
          })
        }
      />
      </div>
      <div className="text-[14px] font-switzer font-semibold text-[#BC9313] block md:hidden">Your Money Compass</div>

      <div className="block md:hidden">
      <VibeGraphMobile
        traits={data.traits}
        onActiveTraitChange={(trait) =>
          setActiveTrait({
            title: trait.title,
            level: trait.level,
          })
        }
      />
      </div>
      <div
        className="hidden md:block max-w-[306px] w-full flex rounded-[8px] flex-row
  border-x border-b border-t-0 border-[#BC9313]/20
  px-4 py-2 items-center justify-between leading-tight"
      >
        <p className="text-[#FDF9F0] text-[14px] font-semibold font-bricolage ">
          Your Money
          <br />
          Compass
        </p>

        {activeTrait && (
          <div className="flex flex-col items-end">
            <p className="text-[#BC9313] text-[12px] font-bold font-switzer">
              {activeTrait.title}
            </p>
            <p className="text-[#FDF9F0]/50 text-[10px] font-medium font-switzer">
              {activeTrait.level}
            </p>
          </div>
        )}
      </div>

      <div className="md:absolute -right-[30%] bottom-[15%]">
        <WhatThisMeans
          whatThisMeans={data.archetypes.primary.whatThisMeans}
          watchOutFor={data.archetypes.primary.watchOutFor}
        />
      </div>
    </div>
  );
};

export default ResultDescribeClassic;
