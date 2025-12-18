import { ResultGoldCard, StarResult } from '@/utils/SvgUtils'
import Image from 'next/image'
import React from 'react'

const CardResultGold = () => {
  return (
   <div className="relative flex items-center justify-center">
        <div className="flex flex-col gap-4 text-center absolute">
          <h1 className="text-[40px] font-semibold font-bricolage text-[#152D23]">
            The Optimizer
          </h1>
          <h1 className="text-[24px]  font-switzer text-[#152D23]/80">
            Goal-based, methodical,
            <br />
            detail-oriented{" "}
          </h1>
        </div>
        <div className="absolute left-2 top-18">
          <StarResult />
        </div>
        <div className="absolute right-10 -top-6">
          <StarResult />
        </div>
        <div className="absolute -right-5 top-[-30]">
          <Image
            alt="ruppe_icon"
            src={"/moneyvibe/rupee_result_right.png"}
            height={205}
            width={251}
            className="object-contain"
          />
        </div>
        <div className="absolute -left-5 bottom-[30]">
          <Image
            alt="ruppe_icon"
            src={"/moneyvibe/left_1_rupee.png"}
            height={78}
            width={153}
            className="object-contain"
          />
        </div>
        <div className="absolute -left-2 bottom-[-10]">
          <Image
            alt="ruppe_icon"
            src={"/moneyvibe/left_2_rupee.png"}
            height={65}
            width={92}
            className="object-contain"
          />
        </div>
        <ResultGoldCard />
      </div>  )
}

export default CardResultGold