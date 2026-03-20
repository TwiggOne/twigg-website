import { TwiggGold } from '@/utils/SvgUtils'
import React from 'react'
import TypewriterSearch from './TypewriterSearch';

const TwiggAiContent = () => {       const texts = [
  "Why is my account balance dropping?",
  "Invest more in equities or debt funds?",
  "Should I prepay my loan or invest?",
  "Do I need term insurance from company?",
  "Can I afford to quit my job?",
];
  return (
    <div className='flex flex-col gap-[14px] '>
 

<TypewriterSearch texts={texts} />
   <div className="flex flex-row rounded-[10px] p-[14px] items-start gap-2 border border-[#BC9313]/50 backdrop-blur-[40px] shadow-md">
      <TwiggGold />

      <p className="text-[12px] font-switzer text-[#FDF9F0]/80 leading-[125%]">
        <span className='text-[#FDF9F0] font-semibold'>
             Your portfolio is up 14.2% YTD.
            </span>
      Your ICICI Bluechip is outperforming, but your small cap allocation is higher than recommended for your risk profile.
      </p>
    </div>
    </div>
  )
}

export default TwiggAiContent