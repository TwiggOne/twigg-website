import React from 'react'

type AnswerItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
}

const AnswerItem: React.FC<AnswerItemProps> = ({ icon: Icon, label }) => {
  return (
    <div
      className="
        w-full h-full
        p-[22px]
        flex flex-col items-center justify-center
        gap-[10px]
        bg-white
        border border-[#BC9313]/20
        rounded-[15px]
      "
    >
      <div>
        <Icon />
      </div>

      <h3 className="text-[14px] text-[#1A1A1A]/80 font-medium font-switzer">
        {label}
      </h3>
    </div>
  )
}

export default AnswerItem
