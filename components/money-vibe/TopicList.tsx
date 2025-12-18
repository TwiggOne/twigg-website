import React from 'react'
import TopicSideItem from './TopicSideItem'
import {
  TopicCircle,
} from '@/utils/SvgUtils'

type TopicItem = {
  label: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const topics: TopicItem[] = [
  { label: 'Money Beliefs', icon: TopicCircle },
  { label: 'Spending Habits', icon: TopicCircle },
  { label: 'Saving Mindset', icon: TopicCircle },
  { label: 'Debt Awareness', icon: TopicCircle },
  { label: 'Income Goals', icon: TopicCircle },
  { label: 'Financial Confidence', icon: TopicCircle },
]

const TopicList: React.FC = () => {
  return (
    <div className="flex  h-[506px] flex-col justify-between">
      {topics.map((topic) => (
        <TopicSideItem
          key={topic.label}
          icon={topic.icon}
          label={topic.label}
        />
      ))}
    </div>
  )
}

export default TopicList
