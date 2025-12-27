import React from "react";
import { MoneyVibeArchetype } from "./TopicData";
import ClassicPrimary from "./ClassicPrimary";
import WhatThisMeans from "./WhatThisMeans";

interface ResultDescribeClassicProps {
  archetype: MoneyVibeArchetype;
}

const ResultDescribeClassic: React.FC<ResultDescribeClassicProps> = ({
  archetype,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <ClassicPrimary archetype={archetype} />
<div className="absolute -right-[50%]">
        <WhatThisMeans
        whatThisMeans={archetype.whatThisMeans}
        watchOutFor={archetype.watchOutFor}
      />
</div>
  
    </div>
  );
};

export default ResultDescribeClassic;
