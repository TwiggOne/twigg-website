import React from 'react'
import { Container } from '../container'

export const MainSection = () => {
    return (
    <section className="bg-[#FDF9F0] py-28 text-[#152D23]">
        <Container>
            <div className="text-center mb-20">
                <h2 className="text-5xl font-bold leading-snug max-w-2xl mx-auto">
                    Stuck in the <span className="text-[#BC9313]">Cycle of Financial Frustration?</span>
                </h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                
                {/* Left Side: Coin Graphic and Problem Boxes */}
                <div className="relative flex items-center justify-center h-[500px]">
                    
                    {/* Central Rupee Coin Graphic (Replace with an actual image if you have one) */}
                    {/* For now, using a stylized placeholder */}
                    <div className="relative w-72 h-72 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-900/50">
                        {/* Inner circle (Placeholder for the coin) */}
                        <div className="w-64 h-64 bg-yellow-500 rounded-full flex items-center justify-center">
                            {/* Coin center detail (Indian Rupee symbol assumed) */}
                            <div className="text-7xl font-bold text-[#BC9313]">₹</div>
                        </div>
                        {/* Glow/Ring effect */}
                        <div className="absolute inset-0 rounded-full border-4 border-yellow-500/50 opacity-40 animate-pulse"></div>
                    </div>


                    {/* Problem Box 1: Constant Money Stress (Top Left) */}
                    <div className="absolute top-10 left-10 text-right p-4 w-48">
                        <p className="font-semibold text-lg">Constant Money Stress</p>
                        <div className="h-0.5 bg-[#BC9313] w-12 ml-auto mt-2"></div>
                    </div>

                    {/* Line connecting Box 1 to Coin */}
                    <div className="absolute top-[160px] left-[180px] w-20 h-0.5 bg-[#BC9313] rotate-[40deg]"></div>


                    {/* Problem Box 2: Lost in Money Jargon (Center Left) */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-white border border-[#BC9313] shadow-md p-4 w-56 rounded-lg text-left">
                        <p className="font-semibold text-[#BC9313]">Lost in Money Jargon</p>
                        <p className="text-sm mt-1 text-gray-700">Hard to manage money</p>
                        <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-6 h-0.5 bg-[#BC9313]"></div>
                    </div>
                </div>

                {/* Right Side: Statistics and Explanation Boxes */}
                <div className="space-y-10">
                    
                    {/* Stat Box 1: Financial Literacy */}
                    <div className="bg-white border border-gray-200 shadow-lg p-6 rounded-xl w-full max-w-md ml-auto">
                        <p className="text-6xl font-bold text-[#BC9313] mb-2">24%</p>
                        <p className="text-gray-700">Only 24% of Indian adults are financially literate.</p>
                    </div>

                    {/* Stat Box 2: Jargon Paralysis */}
                    <div className="bg-white border border-gray-200 shadow-lg p-6 rounded-xl w-full max-w-md ml-auto">
                        <p className="text-xl font-bold text-[#BC9313] mb-2">CAGR, XIRR, ETFs...</p>
                        <p className="text-sm text-gray-700">
                            For most, terms like CAGR, XIRR, ETFs, Alpha, Beta sound like another language. 
                            Which causes confusion and people delay or avoid financial decisions altogether.
                        </p>
                    </div>
                </div>
            </div>
        </Container>

        {/* Solution Teaser */}
        <Container className="text-center mt-20 pt-10 border-t border-gray-300">
            <div className="text-2xl font-semibold text-[#152D23]">
                Confusion, delays, bad choices are running hard, but getting us nowhere.
            </div>
            <div className="text-lg text-gray-600 mt-4">
                Need a Solution?
                <span className="text-[#BC9313] ml-2 cursor-pointer hover:underline">Scroll Down &darr;</span>
            </div>
        </Container>
    </section>
)}
