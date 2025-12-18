import React from "react";

const traitList = ["High Planning", "Moderate Risk", "High Knowledge"];

const Traits = () => {
  return (
    <div className="flex flex-col gap-[18px] items-center w-full">
      <p className="text-[16px] md:text-[24px] font-medium font-switzer text-[#FDF9F0]">
        Traits
      </p>

      {/* GRID CONTAINER */}
      <div className="grid grid-cols-3 gap-3 w-full md:max-w-[570px]">
        {traitList.map((trait, index) => (
          <div
            key={index}
            className="
              p-[10px] 
              w-full
              text-[12px] md:text-[16px] 
              font-medium 
              flex items-center justify-center
              text-[#FDF9F0] 
              font-switzer
              rounded-[8px]
              border 
              border-[rgba(188,147,19,0.2)]
              bg-gradient-to-r 
              from-[#BC9313]/20 
              to-[#FDF9F0]/20
              backdrop-blur-[40px]
            "
          >
            {trait}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Traits;
