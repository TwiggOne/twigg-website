import React from 'react'

type TopicSideItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
}

const TopicSideItem: React.FC<TopicSideItemProps> = ({ icon: Icon, label }) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <Icon />

      <h3 className="text-[20px] text-[#FDF9F0]/80 font-light font-bricolage leading-[120%]">
        {label}
      </h3>
    </div>
  )
}

export default TopicSideItem
