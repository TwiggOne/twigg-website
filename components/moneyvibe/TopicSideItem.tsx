import React from "react";
import TopicCircleProgress from "./TopicCircleAnimation";
import Image from "next/image";

type TopicSideItemProps = {
  icon: string;
  label: string;
  progress: number; // 0 → 1
  isActive?: boolean;
};

const TopicSideItem: React.FC<TopicSideItemProps> = ({
  icon,
  label,
  progress,
  isActive,
}) => {
  const words = label.split(" ");

  const renderLabel = () => {
    if (words.length === 2) {
      return (
        <>
          <span>{words[0]}</span>
          <br />
          <span>{words[1]}</span>
        </>
      );
    }

    if (words.length === 3 && words[1] === "&") {
      return (
        <>
          <span>
            {words[0]} {words[1]}
          </span>
          <br />
          <span>{words[2]}</span>
        </>
      );
    }

    if (words.length === 4) {
      return (
        <>
          <span>
            {words[0]} {words[1]}
          </span>
          <br />
          <span>
            {words[2]} {words[3]}
          </span>
        </>
      );
    }

    return label;
  };
  const isComplete = progress >= 1;

  return (
    <div className="flex flex-col  md:flex-row items-center gap-3  ">
      <div className="relative flex items-center justify-center ">
        <div className="h-[54px] w-[53px] md:h-[62px] md:w-[61px] ">
          <TopicCircleProgress progress={progress} isActive={isActive} />
        </div>
        <div className="absolute w-[35px] h-[35px] md:w-[45px] md:h-[45px]">
          <Image
            fill
            src={icon}
            alt="topic-minor"
            className={`object-contain transition-all duration-300
      ${isComplete ? "opacity-100" : "opacity-20"}
    `}
            style={{
              filter: isComplete
                ? "brightness(0) saturate(100%) invert(57%) sepia(74%) saturate(375%) hue-rotate(8deg) brightness(95%) contrast(90%)"
                : "brightness(0) saturate(100%) invert(98%) sepia(6%) saturate(291%) hue-rotate(338deg)",
            }}
          />
        </div>
      </div>

      <h3 className="text-[10px] md:text-[20px] text-center md:text-start  text-[#FDF9F0]/80 font-light font-bricolage leading-[120%]">
        {renderLabel()}
      </h3>
    </div>
  );
};

export default TopicSideItem;
