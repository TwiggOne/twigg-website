import React from 'react'
import TopicSideItem from './TopicSideItem'
import { WalletTopic } from '@/utils/SvgUtils'

export type TopicItem = {
  title: string
  progress: number
  isActive: boolean
  iconUrl:string
}

type TopicListProps = {
  topics: TopicItem[]
}
const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  return (
    <div
      className="
        flex w-fit   
        flex-row  
       gap-4  max-md:
       md:gap-10
        max-md:overflow-x-auto 
        max-md:flex-nowrap 
        scrollbar-hide
     
        "
    style={{scrollbarWidth:"none"}}
    >
      {topics.map((topic) => (
        <div key={topic.title} className="flex-shrink-0">
          <TopicSideItem
            icon={topic.iconUrl}
            label={topic.title}
            progress={topic.progress}
            isActive={topic.isActive}
          />
        </div>
      ))}
    </div>
  )
}


export default TopicList
