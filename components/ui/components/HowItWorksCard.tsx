import Image from "next/image";
import React from "react";

type HowItWorksCardProps = {
  image: string;
text: React.ReactNode;  isActive?: boolean;
};

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  image,
  text,
  isActive = false,
}) => {
  return (
    <div
      className={`rounded-[16px] w-[257px]  md:w-[407px] p-[32px] gap-[26px] flex flex-col backdrop-blur-xs transition-all duration-300 border border-[#BC9313]/20 h-full
      ${
        isActive
          ? "bg-gradient-to-br from-[#1E332A]/50 via-[#263830]/50 to-[#BA9F3E]/50 opacity-100"
          : "bg-gradient-to-br from-[#5B5B5B]/30 to-[#FDF9F0]/30 opacity-60"
      }`}
    >
      {/* Image container */}
      <div className="flex-1 flex items-center justify-center">
        <Image
  src={image}
  alt="how_it_works"
  width={0}
  height={0}
  sizes="100vw"
  className="w-[70%] h-auto max-h-[230px] object-contain md:w-auto"
/>
      </div>

      {/* Text */}
      <p
        className={`text-[12px] md:text-[20px] font-switzer ${
          isActive ? "text-[#FDF9F0]" : "text-[#FDF9F0]/60"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default HowItWorksCard;