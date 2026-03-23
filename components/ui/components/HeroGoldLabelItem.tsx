import React from "react";

type HeroGoldLabelItemProps = {
  label: string;
};

const HeroGoldLabelItem: React.FC<HeroGoldLabelItemProps> = ({ label }) => {
  return (
    <div className="p-2 px-2.5 w-fit rounded-[8px] border border-[#564309]/30 bg-[#BC9313]/5 text-[10px] md:text-[14px] font-switzer text-[#BC9313]">
      {label}
    </div>
  );
};

export default HeroGoldLabelItem;