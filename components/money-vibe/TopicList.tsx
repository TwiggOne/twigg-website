import React from 'react'
import TopicSideItem from './TopicSideItem'
import { WalletTopic } from '@/utils/SvgUtils'

export type TopicItem = {
  title: string
  progress: number
  isActive: boolean
}

type TopicListProps = {
  topics: TopicItem[]
}

const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  return (
    <div className="flex min-h-full w-fit ml-auto flex-col justify-between">
      {topics.map((topic) => (
        <TopicSideItem
          key={topic.title}
          icon={WalletTopic}
          label={topic.title}
          progress={topic.progress}
          isActive={topic.isActive}
        />
      ))}
    </div>
  )
}

export default TopicList
