import React from "react";
import {  MoneyVibeEvaluationResponse } from "./TopicData";
import ClassicPrimary from "./ClassicPrimary";
import WhatThisMeans from "./WhatThisMeans";
import VibeCompase from "./VibeCompase";

interface ResultDescribeClassicProps {
  
  data: MoneyVibeEvaluationResponse;
}

const ResultDescribeClassic: React.FC<ResultDescribeClassicProps> = ({
  data,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <ClassicPrimary archetype={data.archetypes.primary} />
<VibeCompase traits={data.traits} />
      <div className="absolute -right-[50%]">
        <WhatThisMeans
          whatThisMeans={data.archetypes.primary.whatThisMeans}
          watchOutFor={data.archetypes.primary.watchOutFor}
        />
      </div>
    </div>
  );
};

export default ResultDescribeClassic;
