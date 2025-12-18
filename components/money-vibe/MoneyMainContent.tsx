import React from 'react'
import QuestionItem from './QuestionItem'
import TopicList from './TopicList'

const MoneyMainContent = () => {
  return (
    <div className="
      flex w-full flex-row justify-between
      rounded-[60px] 
      px-[52px] py-[61px]
        bg-[rgba(253,249,240,0.02)]
gap-[60px]
      backdrop-blur-[50px]
      border border-[#BC9313]/20
    ">
      <QuestionItem />
      <TopicList />
    </div>
  )
}

export default MoneyMainContent
