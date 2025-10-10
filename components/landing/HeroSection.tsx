import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full py-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[25%] right-[20%] w-64 sm:w-80 md:w-[420px] lg:w-[480px] h-64 sm:h-80 md:h-[420px] lg:h-[480px] bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[20%] left-[18%] w-64 sm:w-80 md:w-[420px] lg:w-[480px] h-64 sm:h-80 md:h-[420px] lg:h-[480px] bg-emerald-500/10 rounded-full blur-3xl" />

      {/* Flex Container */}
      <div className="relative max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-start items-start px-6 lg:px-0">
        {/* LEFT SECTION */}
        <div className="order-2 lg:order-1 pl-8 flex flex-col justify-start w-full lg:w-[536px] mt-[97px] lg:mr-[62px]">
          <h2
            className="font-semibold text-[48px] sm:text-[60px] lg:text-[72px] leading-[110%] mb-6"
            style={{ fontFamily: 'Bricolage Grotesque' }}
          >
            <span className="text-[#BC9313] block">Money,</span>
            <span className="text-[#FDF9F0] block">Made simple!</span>
          </h2>

          <p
            className="font-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-[130%] mb-[48px] font-switzer max-w-[415px]"
            style={{ color: '#FDF9F0CC' }}
          >
            Track, save, and invest smarter — get clear on your money in seconds.
          </p>

          <button className="bg-[#BC9313] text-white w-[239px] h-[54px] px-[24px] py-[14px] rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-xl">
            Join Wishlist
          </button>
        </div>

       {/* RIGHT SECTION */}
<motion.div
  className="
    order-1 lg:order-2 
    flex-shrink-0 flex items-center justify-center 
    mb-12 lg:mb-0 relative 
    w-full max-w-[612px] 
    aspect-square
    lg:mt-[50px]
  "
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}
>
  {/* Circles */}
  <div className="absolute inset-0 rounded-full border-[10px] sm:border-[16px] md:border-[20px] lg:border-[24px] border-[#FDF9F0]/3" />
  <div className="absolute inset-[14%] rounded-full border-[10px] sm:border-[16px] md:border-[20px] lg:border-[24px] border-[#FDF9F0]/3" />
  <div className="absolute inset-[29%] rounded-full border-[10px] sm:border-[16px] md:border-[20px] lg:border-[24px] border-[#FDF9F0]/3" />
  <div className="absolute inset-[21%] rounded-full bg-[#BC9313]/40 blur-[40px]" />

  {/* Center Icon */}
  <motion.div
    className="relative z-30 flex items-center justify-center"
    style={{
      transform: 'rotate(-5.67deg)',
      filter: `
        drop-shadow(0px 9px 20px rgba(0,0,0,0.64))
        drop-shadow(0px 37px 37px rgba(0,0,0,0.55))
        drop-shadow(0px 84px 50px rgba(0,0,0,0.32))
        drop-shadow(0px 149px 59px rgba(0,0,0,0.10))
      `,
    }}
  >
    <Image
      src="/main.svg"
      alt="Hero Image"
      width={260}
      height={260}
      className="object-contain w-[55%] sm:w-[60%] md:w-[65%]"
    />
  </motion.div>

  {/* Floating Tags */}
  <FloatingTag
    text="Invest Fearlessly"
    className="absolute top-[6%] left-[4%] text-[10px] sm:text-xs md:text-sm"
    delay={0.2}
  />
  <FloatingTag
    text="Spend Mindfully"
    className="absolute top-[8%] right-[4%] text-[10px] sm:text-xs md:text-sm"
    delay={0.4}
  />
  <FloatingTag
    text="Optimized Spending"
    className="absolute bottom-[10%] left-[6%] text-[10px] sm:text-xs md:text-sm"
    delay={0.6}
  />
  <FloatingTag
    text="Ask Your Finances"
    className="absolute bottom-[12%] right-[6%] text-[10px] sm:text-xs md:text-sm"
    delay={0.8}
  />
</motion.div>

      </div>
    </section>
  );
}

const FloatingTag = ({
  text,
  className,
  delay,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg border text-white text-xs sm:text-sm font-medium backdrop-blur-md ${className}`}
    style={{
      background:
        'linear-gradient(93.03deg, rgba(253, 249, 240, 0.35) 0%, rgba(253, 249, 240, 0.07) 97.22%)',
      borderImage:
        'linear-gradient(273.81deg, rgba(255,255,255,0.4) -4.34%, rgba(255,255,255,0.1) 100%) 1',
    }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: 'easeOut' }}
  >
    {text}
  </motion.div>
);
