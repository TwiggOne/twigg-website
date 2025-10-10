import { Mic, ArrowRight } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function CTASection() {
  return (
    <section
      className="relative w-full h-auto min-h-[600px] bg-[#152D23] flex flex-col items-center justify-start pt-12 sm:pt-20 px-4"
      style={{ maxWidth: '1440px', margin: '0 auto' }}
    >
      {/* Heading and Subheading */}
      <div className="flex flex-col items-center gap-2 sm:gap-4 mt-12 sm:mt-24 text-center">
        <h1 className="font-bricolage text-[28px] sm:text-[56px] font-semibold text-[#FDF9F0]/80 leading-[34px] sm:leading-[67px]">
          Ask finance, <span className='text-[#BC9313]'>Twigg answers!</span>
        </h1>
        <p className="font-switzer text-[16px] sm:text-[24px] font-normal text-[#FDF9F0]/80 leading-[22px] sm:leading-[32px] max-w-[320px] sm:max-w-[543px]">
          Finally, an AI co-pilot built for your money: clear, personal, and always on your side.
        </p>
      </div>

      {/* Search Bar */}
      <div
        className="relative w-full  sm:w-[613px] h-[60px] sm:h-[100px] mx-auto mt-8 sm:mt-20"
        style={{
          background: 'rgba(253, 249, 240, 0.08)',
          border: '1px solid #FDF9F026',
          borderRadius: '12px',
          boxShadow: `
            0px 4px 8px 0px #0000001A,
            0px 12px 16px 0px #00000017,
            0px 24px 16px 0px #0000000D,
            0px 42px 20px 0px #00000003,
            0px 64px 24px 0px #00000000,
            inset 0px 2px 2px 0px #FDF9F033
          `,
        }}
      >
        <input
          type="text"
          placeholder="Will I lose 5kg weight in a month?"
          className="w-full h-full bg-transparent text-white font-switzer text-[14px] sm:text-[20px] leading-[18px] sm:leading-[26px] px-4 sm:px-8 focus:outline-none"
        />
        <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 sm:gap-4">
          <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#BC9313] flex items-center justify-center">
            <ArrowRight size={18} color="#152D23" />
          </div>
          <Mic size={20} color="#D9D9D9" className="mr-2" />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-12 mb-24 sm:mt-20 w-full">
        <FeatureCard />
      </div>
    </section>
  );
}
