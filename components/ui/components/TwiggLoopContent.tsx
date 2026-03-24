import React from "react";
import { PeerCircles, RewardsStore, SavingsGoals, SipConsistency } from "@/utils/SvgUtils";

const TwiggLoopContent = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-[12px] w-full">
      
      <LoopCard
        title={
          <>
            SIP <br /> Consistency
          </>
        }
        icon={<SipConsistency />}
      />

      <LoopCard
        title={
          <>
            Savings <br /> Goals
          </>
        }
        icon={<SavingsGoals />}
      />

      <LoopCard
        title={
          <>
            Peer <br /> Circles
          </>
        }
        icon={<PeerCircles />}
      />

      <LoopCard
        title={
          <>
            Rewards <br /> Store
          </>
        }
        icon={<RewardsStore />}
      />

    </div>
  );
};
interface LoopCardProps {
  title: React.ReactNode;
  icon: React.ReactNode;
}

const LoopCard = ({ title, icon }: LoopCardProps) => {
  return (
    <div className="flex flex-row rounded-[10px] p-[11px] md:p-[14px] items-center justify-between border border-[#BC9313]/50 backdrop-blur-[40px] shadow-md">
      
      <p className="text-[10px] md:text-[12px] font-switzer text-[#FDF9F0] leading-[120%]">
        {title}
      </p>
<div className="w-[36px] h-[31px] md:h-[45px] md:w-[52px]">      {icon}
</div>
    </div>
  );
};
export default TwiggLoopContent;