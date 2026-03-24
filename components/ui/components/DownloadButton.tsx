import React from 'react'
import { AppleIcon, PlayStoreIcon } from '@/utils/SvgUtils'

type Platform = 'apple' | 'google'

interface DownloadButtonProps {
  platform?: Platform
  text?: string
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  platform = 'apple',
  text,
}) => {
  const { icon: PlatformIcon, defaultText } =
    platform === 'google'
      ? { icon: PlayStoreIcon, defaultText: 'Play Store' }
      : { icon: AppleIcon, defaultText: 'App Store' }

  return (
    <div className="flex flex-row items-center rounded-[40px] px-[30px] md:px-[40px] py-[10px] md:py-[14px] gap-[8px] md:gap-[14px] bg-[#FDF9F0]/5 backdrop-blur-[50px] border border-white/20 cursor-pointer hover:scale-105 transition-transform">
      
      {/* ✅ Responsive icon size */}
      <PlatformIcon className="w-[16px] h-[16px] md:w-[22px] md:h-[25px]" />

      <p className="text-[14px] md:text-[18px] font-medium font-switzer text-[#FDF9F0]">
        {text || defaultText}
      </p>
    </div>
  )
}

export default DownloadButton