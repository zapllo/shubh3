'use client'

import React, { useState } from 'react'
import EnrollButton from './enroll'

/** ✅ Animated, accessible checkbox */
/** ✅ Animated, accessible checkbox */
function CustomCheckbox({
    label,
    defaultChecked = false,
}: {
    label: string
    defaultChecked?: boolean
}) {
    const [checked, setChecked] = useState(defaultChecked)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault()
            setChecked(prev => !prev)
        }
    }

    return (
        <div className="inline-flex items-center gap-3 py-2 cursor-pointer select-none group">
            {/* Visually hidden real checkbox for forms & screen readers */}
            <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={handleChange}
                id={`checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`}
            />

            {/* Visual box */}
            <label
                htmlFor={`checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`}
                className={[
                    'relative flex items-center justify-center cursor-pointer',
                    'md:w-7 md:h-7 w-6 h-6 rounded-lg flex-shrink-0',
                    'border-[2.5px]',
                    'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
                    'shadow-[0_2px_8px_rgba(19,181,232,0.10)]',
                    'group-hover:scale-[1.02] group-active:scale-[0.98]',
                    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(19,181,232,0.25)]',
                    checked
                        ? 'bg-[#13B5E8] border-[#13B5E8] scale-105 shadow-[0_4px_16px_rgba(19,181,232,0.25)]'
                        : 'bg-transparent border-[#13B5E8] group-hover:border-[#0f94bf]',
                ].join(' ')}
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                {/* subtle hover glow */}
                <span className="absolute -inset-1 rounded-[10px] bg-[rgba(19,181,232,0.06)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Animated checkmark (stroke draws in) */}
                <svg
                    className="w-4 h-4 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M5 13.5l4 4L19.5 7"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            strokeDasharray: 32,
                            strokeDashoffset: checked ? 0 : 32,
                            transition:
                                'stroke-dashoffset 300ms cubic-bezier(0.4,0,0.2,1), transform 220ms ease',
                            transform: checked ? 'scale(1)' : 'scale(0.85)',
                            transformOrigin: 'center',
                        }}
                    />
                </svg>
            </label>

            {/* Label */}
            <label 
                htmlFor={`checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`}
                className="text-[#29302D] md:text-[17px] sm:text-base text-sm leading-[1.4] transition-colors duration-300 group-hover:text-[#1a1d1b] cursor-pointer"
            >
                {label}
            </label>
        </div>
    )
}
// Arrow Icon Component
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

export default function WhoShouldAttendSection() {
    return (
        <section className="w-full py-10 px-10 relative overflow-hidden">
            <div className="mx-auto max-w-[1200px] relative">
                {/* Main Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#000000] mb-12">
                        Who Should Attend?
                    </h2>
                </div>

                {/* Two Column Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-lg p-3 shadow-sm border hover:-translate-y-1 hover:skew-y-[-0.3deg] transition-all duration-300">
                            <CustomCheckbox
                                label="Established business owners ready to scale digitally"

                            />
                        </div>
                        {/* Card 2 */}
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm border hover:-translate-y-1 hover:skew-y-[-0.3deg] transition-all duration-300">
                        <CustomCheckbox
                            label="Founders looking to integrate AI + automation into their sales"
                        />
                    </div>
                </div>
                <div className='flex justify-center'>
                    {/* Right Column */}
                    <div className="space-y-6 ">
                        {/* Card 3 */}
                        <div className="bg-white rounded-lg p-3 shadow-sm border hover:-translate-y-1 hover:skew-y-[-0.3deg] transition-all duration-300">
                            <CustomCheckbox
                                label="Coaches, consultants & service providers with a working offer"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="text-center mb-12">
                    <h3 className="text-xl md:text-xl mt-12 font-semibold text-[#2a2a2a]">
                        If you&apos;re serious about speed, implementation, and results… this is for you.
                    </h3>
                </div>

                {/* Host Section */}
                <div className="bg-[#F0FBFF] border-2 border-[#13B5E8] rounded-2xl shadow-[0_0_15px_0_rgba(218,218,218,0.5)] md:mx-12 p-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl md:text-3xl font-bold text-[#000000]">
                            Meet Your Host: <span className="thin-underline decoration-2">Shubh Jain</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Host Image */}
                        <div className="flex-shrink-0">
                            <img
                                src="https://lp.launchatscale.com/wp-content/uploads/2025/06/Shubh-10.webp"
                                alt="Shubh Jain"
                                className="w-96 object-cover rounded-full transform scale-125"
                                width={800}
                                height={800}
                            />
                        </div>

                        {/* Stats Grid */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 ml-auto md:grid-cols-2 gap-4">
                                {/* Stat 1 */}
                                <div className='w-full ml-auto'>
                                    <div className="bg-whit p-2   md:ml-12 md:w-72 hover:-translate-y-1 transition-all border border-[#13B5E8] rounded-full duration-300 shadow-sm">
                                        <div className="bg-[#031e26]  hover:bg-[#010C0F] rounded-full p-[39.3px] text-center">
                                            <h3 className="text-xl font-bold text-[#13b5e8]">₹130 Crores+</h3>
                                            <p className="text-white/90 text-sm">in sales generated for clients</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Stat 2 */}
                                 <div className='w-full ml-auto'>
                                    <div className="bg-whit p-2  md:ml-8 md:w-72 hover:-translate-y-1 transition-all border border-[#13B5E8] rounded-full duration-300 shadow-sm">
                                        <div className="bg-[#031e26]  hover:bg-[#010C0F] rounded-full p-8 text-center">
                                            <h3 className="text-xl font-bold text-[#13b5e8]">India’s #1</h3>
                                            <p className="text-white/90 text-sm">Launch Expert & creator of Reverse Funnels</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stat 3 */}
                               <div className='w-full ml-auto'>
                                    <div className="bg-whit p-2  md:ml-12 md:w-72 hover:-translate-y-1 transition-all border border-[#13B5E8] rounded-full duration-300 shadow-sm">
                                        <div className="bg-[#031e26]  hover:bg-[#010C0F] rounded-full p-8 text-center">
                                            <h3 className="text-xl font-bold text-[#13b5e8]">Trusted by top 1%</h3>
                                            <p className="text-white/90 text-sm">coaches and high-performance entrepreneurs</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stat 4 */}
                                 <div className='w-full ml-auto'>
                                    <div className="bg-whit p-2  md:ml-8 md:w-72 hover:-translate-y-1 transition-all border border-[#13B5E8] rounded-full duration-300 shadow-sm">
                                        <div className="bg-[#031e26]  hover:bg-[#010C0F] rounded-full p-8 text-center">
                                            <h3 className="text-xl font-bold text-[#13b5e8]">Managed 640,000+</h3>
                                            <p className="text-white/90 text-sm">leads and led 7-figure campaigns repeatedly</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Description */}
                    <div className="text-center mt-12">
                        <p className="text-xl text-[#2a2a2a] max-w-4xl mx-auto mb-8">
                            This is your chance to learn directly from someone who&apos;s built what others only talk about.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mb-6">
                        <EnrollButton />
                    </div>


                </div>
            </div>
        </section >
    )
}