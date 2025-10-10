import { motion } from 'motion/react';
import React from 'react'
import Image from 'next/image'

export const ProblemSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Main content container */}
      <motion.div
        className="w-full max-w-[1240px] bg-gradient-to-br from-amber-50 to-amber-100 rounded-[60px] p-8 sm:p-12 md:p-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Heading */}
        <motion.div
          className="max-w-xl mb-12 sm:mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-bricolage text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-900 leading-tight">
            Stuck in the<br />
            <span className="text-amber-500">Cycle of Financial Frustration?</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left - Image */}
          <div className="relative flex justify-center items-center mb-12 lg:mb-0">
            <Image
              src="/Problem.svg"
              alt="Financial Cycle Illustration"
              width={500}
              height={500}
              className="object-contain w-[80%] sm:w-[70%] md:w-[100%] h-auto"
            />
          </div>

          {/* Right - Info Cards */}
          <div className="flex flex-col gap-6 pt-0 lg:pt-12">
            {/* Card 1 */}
            <motion.div
              className="bg-white/70 backdrop-blur-sm border border-amber-200/50 rounded-3xl p-6 sm:p-8 shadow-sm"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-500 mb-2 sm:mb-3 leading-none">24%</h3>
              <p className="text-sm sm:text-base text-emerald-900 leading-relaxed">
                Only 24% of Indian adults are financially literate.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white/70 backdrop-blur-sm border border-amber-200/50 rounded-3xl p-6 sm:p-8 shadow-sm"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-amber-500 mb-2 sm:mb-3 leading-tight">
                CAGR, XIRR, ETFs..
              </h3>
              <p className="text-xs sm:text-sm text-emerald-900 mb-2 sm:mb-3 leading-relaxed">
                For most, terms like CAGR, XIRR, ETFs, Alpha, Beta sound like another language.
              </p>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                Which caused confusion and people delay or avoid financial decisions altogether.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:justify-between pt-12 mt-12 gap-6 lg:gap-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="font-switzer text-sm sm:text-base text-emerald-900 max-w-full lg:max-w-2xl leading-relaxed text-center lg:text-left">
            Confusion, delays, bad choices, and constant stress, most of us are running hard, but getting nowhere with our money.
          </p>
          <div className="flex flex-col items-center text-emerald-900 text-xs sm:text-sm">
            <div className="font-medium mb-1">Need a Solution?</div>
            <div className="opacity-70">Scroll Down</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
