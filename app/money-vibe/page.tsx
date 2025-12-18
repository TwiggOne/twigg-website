import MoneyMainContent from '@/components/money-vibe/MoneyMainContent'
import MoneyVibeHeader from '@/components/money-vibe/MoneyVibeHeader'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto w-full py-[41px] flex flex-col gap-[56px] justify-center items-center'>
        <MoneyVibeHeader />
        <MoneyMainContent />
    </div>
  )
}

export default page