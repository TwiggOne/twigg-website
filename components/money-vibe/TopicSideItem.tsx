import { TopicCircle } from "@/utils/SvgUtils";
import React from "react";
import TopicCircleProgress from "./TopicCircleAnimation";

type TopicSideItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  progress: number // 0 → 1
  isActive?: boolean
}

const TopicSideItem: React.FC<TopicSideItemProps> = ({
  icon: Icon,
  label,
  progress,
  isActive,
}) => {
  const words = label.split(" ")

  const renderLabel = () => {
    if (words.length === 2) {
      return (
        <>
          <span>{words[0]}</span><br />
          <span>{words[1]}</span>
        </>
      )
    }

    if (words.length === 3 && words[1] === "&") {
      return (
        <>
          <span>{words[0]} {words[1]}</span><br />
          <span>{words[2]}</span>
        </>
      )
    }

    if (words.length === 4) {
      return (
        <>
          <span>{words[0]} {words[1]}</span><br />
          <span>{words[2]} {words[3]}</span>
        </>
      )
    }

    return label
  }

  return (
    <div className="flex flex-row items-center gap-3">
      <div className="relative flex items-center justify-center">
        <TopicCircleProgress progress={progress} isActive={isActive} />
        <div className="absolute">
          <Icon />
        </div>
      </div>

      <h3 className="text-[20px] text-[#FDF9F0]/80 font-light font-bricolage leading-[120%]">
        {renderLabel()}
      </h3>
    </div>
  )
}

export default TopicSideItem