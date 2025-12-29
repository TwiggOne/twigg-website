import React, { useState } from "react";

type Tab = "Bollywood" | "Classic" | "Cricket";

interface NavigationResultTabProps {
  onTabChange?: (tab: Tab) => void;
}

const TABS: Tab[] = ["Classic", "Bollywood", "Cricket"];

const NavigationResultTab: React.FC<NavigationResultTabProps> = ({
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className="flex w-full bg-[rgba(188,147,19,0.08)] border border-[#BC9313]/15 p-2 rounded-[10px] gap-2">
      {TABS.map((tab) => (
        <div
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`flex-1 flex items-center justify-center py-2 px-3 rounded-[10px] text-[12px] md:text-[16px] font-medium font-switzer cursor-pointer transition-colors duration-200
            ${
              activeTab === tab
                ? "bg-[#BC9313] text-[#FDF9F0]"
                : "bg-transparent text-[#FDF9F0]/80"
            }`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default NavigationResultTab;
