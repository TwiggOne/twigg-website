import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

export const CommingSoon = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h2
          className="text-[12rem] sm:text-[16rem] md:text-[20rem] lg:text-[24rem] xl:text-[28rem] font-bold text-[#2D5F4C]/20 select-none whitespace-nowrap font-bricolage absolute"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          Coming soon Coming soon Coming soon Coming soon
        </motion.h2>
      </motion.div>
    
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[790px] h-[300px] sm:h-[400px] md:h-[590px] flex items-center  justify-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
        >
          <Image
            src={"/Mockup.svg"}
            alt="Twigg App Mockup"
            width={790}
            height={590}
            className="w-[542px] h-[592px] object-contain "
            priority
          />
          
        </motion.div>
    
        <motion.div
          className="w-full max-w-[784px] text-center -mt-12 md:-mt-16 lg:-mt-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.6,
          }}
        >
          <motion.h3
            className="font-bricolage text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold text-[#FDF9F0] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Twigg is <span className="text-[#D4AF37]">on its way!</span>
          </motion.h3>
    
          <motion.p
            className="font-switzer max-w-[650px] text-[#FDF9F0]/80 text-base sm:text-lg md:text-[18px] font-normal leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Your co-pilot for all your financial needs. smarter saving, tracking, and investing made simple.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}