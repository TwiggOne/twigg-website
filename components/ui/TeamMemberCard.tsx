"use client";

import { LinkedIng } from "@/utils/SvgUtils";
import Image from "next/image";
import React from "react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  linkedin?: string;
  smallCard?: boolean; // 👈 New optional prop
}

export const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  role,
  linkedin,
  smallCard = false,
}) => {
  // 🎯 Conditional sizing based on `smallCard`
  const imageWidth = smallCard ? 244 : 300;
  const imageHeight = smallCard ? 242 : 336;
  const nameTextSize = smallCard ? "text-[16px]" : "text-[24px]";
  const roleTextSize = smallCard ? "text-[12px]" : "text-[16px]";
  const cardPadding = smallCard ? "pr-[20px]" : "pr-[26px]";
  const textPaddingX = smallCard ? "px-[16px]" : "px-[26px]";
  const iconContainerSize = smallCard
    ? "w-[36px] h-[36px]"
    : "w-[40px] h-[40px]";
  const iconSize = smallCard ? "h-[14px] w-[14px]" : "h-[16px] w-[16px]";

  return (
    <div
      className={`relative rounded-[20px] ${cardPadding}`}
      style={{
        background:
          "linear-gradient(328.59deg, #152D23 -10.94%, rgba(21, 45, 35, 0.2) 21.5%, rgba(188, 147, 19, 0.3) 97.95%)",
      }}
    >
      {/* Gradient overlay at bottom */}
      <div className="w-full absolute bottom-0 h-[40%] bg-gradient-to-b from-[#152D23]/0 to-[#152D23]/100 border-b border-[#BC9313]/80 rounded-[20px]" />

      {/* Text + LinkedIn icon */}
      <div
        className={`absolute py-[22px] ${textPaddingX} bottom-0 flex flex-row w-full justify-between items-center`}
      >
        <div className="flex flex-col gap-[4px]">
          <p
            className={`text-[#FDF9F0] ${nameTextSize} font-medium font-bricolage leading-[110%]`}
          >
            {name}
          </p>
          <p
            className={`text-[#FDF9F0]/80 ${roleTextSize} font-switzer leading-[110%]`}
          >
            {role}
          </p>
        </div>

        <div
          className={`${iconContainerSize} flex items-center justify-center rounded-full bg-[#214838]/50`}
        >
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center ${iconSize}`}
            >
              <LinkedIng />
            </a>
          ) : (
            <div className={`${iconSize}`}>
              <LinkedIng />
            </div>
          )}
        </div>
      </div>

      {/* Team member image */}
      <Image
        src={image}
        alt={name}
        width={imageWidth}
        height={imageHeight}
        className="object-cover rounded-[20px]"
      />
    </div>
  );
};
