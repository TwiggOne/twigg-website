"use client";

import { DoubleArrowIcon, LinkedIng } from "@/utils/SvgUtils";
// The following imports are not used in the final logic but kept for completeness
// import { FastForward, InfoIcon } from "lucide-react"; 
import Image from "next/image";
import React, { useState } from "react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  linkedin?: string;
  smallCard?: boolean;
  backContent: React.ReactNode;
  isFlippable?: boolean;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  role,
  linkedin,
  smallCard = false,
  backContent,
  isFlippable = false,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // 🎯 Conditional sizing based on `smallCard`
  const imageWidth = smallCard ? 244 : 320;
  const imageHeight = smallCard ? 242 : 356;

  const cardStyle = {
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
  };

  const nameTextSize = smallCard ? "text-[16px]" : "text-[24px]";
  const roleTextSize = smallCard ? "text-[12px]" : "text-[16px]";
  const cardPadding = smallCard ? "pr-[20px]" : "pr-[]";
  const textPaddingX = smallCard ? "px-[16px]" : "px-[26px]";
  const iconContainerSize = smallCard
    ? "w-[36px] h-[36px]"
    : "w-[40px] h-[40px]";
  const iconSize = smallCard ? "h-[14px] w-[14px]" : "h-[16px] w-[16px]";

  // FUNCTION TO HANDLE CLICK/TAP
  const handleFlip = () => {
    // Only toggle the flip state if the card is flippable
    if (isFlippable) {
      setIsFlipped((prev) => !prev);
    }
  };

  // --- Reusable Content Structure (Front Face) ---
  const renderFrontContent = (isFlipping: boolean = false) => (
    <div
      className="relative w-full h-full rounded-[20px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* 1. FLIP ICON (Front Side) - Now the exclusive trigger */}
      {isFlippable && (
        <div
          className="flex items-center lg:hidden justify-center absolute top-4 right-5 rounded-full cursor-pointer z-20"
          onClick={handleFlip} // 👈 Click handler is here
        >
          {/* Using a simple container for the icon for better hit area */}
          <div className="p-2 bg-black/10 rounded-full hover:bg-black/30 transition-colors">
            {/* The icon is rotated 90deg to look like a 'more info' indicator */}
            <DoubleArrowIcon className="w-4 h-4 text-[#BC9313] " /> 
          </div>
        </div>
      )}

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
              // Ensure LinkedIn click does not trigger flip, though it's less necessary now
              onClick={(e) => e.stopPropagation()}
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
    </div>
  );

  // --- Conditional Rendering ---
  if (isFlippable) {
    // MODE 1: FLIPPABLE CARD
    // The hover effect is still controlled by `group-hover` for desktop
    // The click effect is controlled by `isFlipped` state set by the icon
    const flipClass = isFlipped
      ? "rotate-y-180"
      : "lg:group-hover:rotate-y-180";

    return (
      <div
        // 2. REMOVE onClick={handleFlip} from here!
        className={`group relative`} // Removed cursor-pointer as well for the main area
        style={{ ...cardStyle, perspective: "1000px" }}
      >
        {/* Flippable Inner Container */}
        <div
          className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ease-in-out ${flipClass}`}
        >
          {/* Front Side */}
          <div
            className={`absolute inset-0 backface-hidden rounded-[20px] ${cardPadding}`}
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(328.59deg, #152D23 -10.94%, rgba(21, 45, 35, 0.2) 21.5%, rgba(188, 147, 19, 0.3) 97.95%)",
            }}
          >
            {renderFrontContent(true)}
          </div>

          {/* Back Side */}
          <div
          onClick={handleFlip}
            className={`absolute cursor-pointer inset-0 backface-hidden rounded-[20px] rotate-y-180`}
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(328.59deg, #152D23 -10.94%, rgba(21, 45, 35, 0.2) 21.5%, rgba(188, 147, 19, 0.3) 97.95%)",
            }}
          >
            {/* 3. FLIP-BACK ICON (Back Side) - Exclusive flip-back trigger */}
  

            {/* Back content */}
            <div className="w-full z-10 absolute" >{backContent}</div>
            <div className="w-full absolute bottom-0 h-[40%] bg-gradient-to-b from-[#152D23]/0 to-[#152D23]/100 border-b border-[#BC9313]/80 rounded-[20px]" />
          </div>
        </div>
      </div>
    );
  }

  // MODE 2: STATIC CARD
  return (
    <div
      className={`relative rounded-[20px] ${cardPadding}`}
      style={{
        background:
          "linear-gradient(328.59deg, #152D23 -10.94%, rgba(21, 45, 35, 0.2) 21.5%, rgba(188, 147, 19, 0.3) 97.95%)",
      }}
    >
      {renderFrontContent(false)}
    </div>
  );
};