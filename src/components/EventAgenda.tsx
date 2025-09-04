'use client'

import React from 'react'
import EnrollButton from './enroll'

// Check icon component
function CheckIcon() {
    return (
        <svg
            className="md:w-4 md:h-4 mt-1 h-6 w-6 text-cyan-400"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
        </svg>
    )
}

// Arrow icon component
function ArrowIcon() {
    return (
        <svg
            className="w-6 h-6"
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z" />
        </svg>
    )
}

export default function EventAgendaSection() {
    return (
        <section className="w-full py-10 px-10 mt-4 relative overflow-hidden">
            <div className="mx-auto max-w-[1200px] relative">
                {/* Background blur images */}

                {/* <div className="absolute top-0 right-0 -z-10 opacity-30 transform scale-x-[-1]">
                    <img
                        src="https://lp.launchatscale.com/wp-content/uploads/2025/06/blur1.webp"
                        alt=""
                        className="w-[400px] h-[574px] object-cover"
                        width={400}
                        height={574}
                    />
                </div> */}

                {/* Main Heading */}
                <div className="text-center mb-12 flex justify-center">
                    <h2 className="text-xl md:text-3xl md:max-w-[880px] leading-[1.6] font-extrabold text-[#ffffff]">
                        Join Shubh And A Room Full Of Serious Business Owners For A Day That Can Change How You Sell Forever…
                    </h2>
                </div>
                <div className='flex w-full justify-center'>
                    {/* Three Part Cards */}
                    <div className="grid grid-cols-1 w-full md:max-w-3xl  md:grid-cols-1 gap-6 mb-12">
                        {/* Part 1: Build */}
                        <div className="relative p-10 w-full md:max-w-5xl  border-[#b0e6f7] border bg-[#353943] rounded-lg shadow-sm  hover:-translate-y-1 hover:skew-x-[-0.3deg] transition-all duration-300 group overflow-hidden">
                            {/* Background overlay */}
                            <div className="absolute inset-0 bg-[#2828285E] rounded-lg"></div>

                            {/* Content */}
                            <div className="relative w-full md:max-w-5xl bg z-10">
                                <div className="bg-[#13B3E6]  absolute -mt-24 -ml-10 md:p-5 p-3 rounded-none rounded-br-lg">
                                    <h3 className="md:text-xl mt-2 text-white font-bold">Part 1: Build</h3>
                                </div>

                                <ul className="space-y-3 text-sm md:text-lg">
                                    <li className="flex items-start mt-12 md:px-6 gap-3">
                                        <CheckIcon />
                                        <span className="text-[#e6e6e7]">Create a high-converting funnel offer using a 4-step formula</span>
                                    </li>
                                    <li className="flex items-start md:px-6 gap-3">
                                        <CheckIcon />
                                        <span className="text-[#e6e6e7]">Use AI to generate hooks, scripts, and angles instantly</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Part 2: Launch */}
                        <div className="relative p-10 w-full max-w-5xl  border-[#b0e6f7] border bg-[#353943] rounded-lg shadow-sm  hover:-translate-y-1 hover:skew-x-[-0.3deg] transition-all duration-300 group overflow-hidden">
                            {/* Background overlay */}
                            <div className="absolute inset-0 bg-[#2828285E] rounded-lg"></div>

                            {/* Content */}
                            <div className="relative w-full max-w-5xl bg z-10">
                                <div className="bg-[#13B3E6]  absolute -mt-24 -ml-10 p-3 md:p-5 rounded-none rounded-br-lg">
                                    <h3 className="md:text-xl mt-2 text-white font-bold">Part 2: Launch</h3>
                                </div>

                                <ul className="space-y-3 text-sm md:text-lg">
                                    <li className="flex items-start mt-12 md:px-6 gap-3">
                                        <CheckIcon />
                                        <span className="text-[#e6e6e7]">Structure your funnel with automation tools (no coding)</span>
                                    </li>
                                    <li className="flex items-start md:px-6 gap-3">
                                        <CheckIcon />
                                        <span className="text-[#e6e6e7]">Setup email, WhatsApp, or DM follow-ups with AI agents</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Part 3: Scale */}
                        <div className="relative p-10 w-full max-w-5xl  border-[#b0e6f7] border bg-[#353943] rounded-lg shadow-sm  hover:-translate-y-1 hover:skew-x-[-0.3deg] transition-all duration-300 group overflow-hidden">
                            {/* Background overlay */}
                            <div className="absolute inset-0 bg-[#2828285E] rounded-lg"></div>

                            {/* Content */}
                            <div className="relative w-full max-w-5xl bg z-10">
                                <div className="bg-[#13B3E6]  absolute -mt-24 -ml-10 md:p-5 p-3 rounded-none rounded-br-lg">
                                    <h3 className="md:text-xl mt-2 text-white font-bold">Part 3: Scale</h3>
                                </div>

                                <ul className="space-y-3 text-sm md:text-lg">
                                    <li className="flex items-start mt-12 md:px-6 gap-3">
                                        <CheckIcon />
                                        <span className="text-[#e6e6e7]">Learn how to drive traffic that actually converts</span>
                                    </li>
                                   <li className="flex items-start md:px-6 gap-3">
                                        <CheckIcon />
                                        <span className="text-[#e6e6e7]">Understand the &quot;1 Hour per Week&quot; system for consistent high-ticket sales</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Why Offline Section */}
                <div className="text-center mt-6 mb-8">
                    <h2 className="text-xl md:text-4xl font-bold text-[#ffffff] mb-6">
                        Why Offline? Why Now? Why In Delhi?
                    </h2>

                    <h3 className="text-base md:text-lg font-semibold text-white -700 mb-6">
                        Because watching another webinar won&apos;t give you clarity.<br />
                        You need focused, real-world execution.
                    </h3>

                    <div className="mb-6">
                        <h4 className="md:text-2xl text-base font-semibold text-[#eeeeee] -700">
                            <span>❌ No Distractions</span> &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>❌ No Guesswork</span>
                        </h4>
                    </div>

                    <div className="mb-6">
                        <h4 className="md:text-3xl font-semibold text-white -600">
                            ✅ You Get Live Support, Clarity, And Leave With A Funnel Ready To Run.
                        </h4>
                    </div>

                    <div className="mb-8">
                        <p className="md:text-lg text-[#eeeeee] -700 max-w-4xl mx-auto">
                            And unlike online events, you won&apos;t be left figuring it out alone. You get a proven plan to launch your funnel in just 1 day using the ultimate power of AI…!
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mb-6">
                    <EnrollButton />
                </div>


            </div>
        </section>
    )
}