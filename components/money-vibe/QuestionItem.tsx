import React from 'react'
import AnswerItem from './AnswerItem'
import {
  StronglyDisagree,

} from '@/utils/SvgUtils'

type AnswerOption = {
  label: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const answers: AnswerOption[] = [
  { label: 'Strongly Disagree', icon: StronglyDisagree },
  { label: 'Disagree', icon: StronglyDisagree },
  { label: 'Agree', icon: StronglyDisagree },
  { label: 'Strongly Agree', icon: StronglyDisagree },
]

const QuestionItem: React.FC = () => {
  return (
    <div
      className="
        w-[90%] h-[506px]
        flex flex-col
        gap-[45px]
        p-[56px]
        bg-[#FDF9F0]
        border border-[#BC9313]/20
        rounded-[40px]
        
      "
    >
      <h3 className="text-[34px] text-[#152D23] font-medium font-bricolage leading-[100%]">
        Money was a source of stress in my household growing up.
      </h3>

      <div className="grid grid-cols-2 gap-[18px] ">
        {answers.map((answer) => (
          <AnswerItem
            key={answer.label}
            icon={answer.icon}
            label={answer.label}
          />
        ))}
      </div>
    </div>
  )
}

export default QuestionItem
