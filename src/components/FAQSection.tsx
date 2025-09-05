'use client'

import Image from 'next/image'
import { useState } from 'react'
import EnrollButton from './enroll'

const faqs = [
    {
        question: "Q1 : Do I need prior experience with funnels or AI?",
        answer: " Not at all. We’ll guide you from scratch, step by step."
    },
    {
        question: "Q2 : Will I actually learn to build something during the event?",
        answer: "Yes. The goal is to learn full implementation within the day."
    },
    {
        question: "Q3 : I already have a funnel. Should I still attend?",
        answer: "Yes, if your current funnel isn’t bringing in consistent sales, this session will show you how to fix it using AI, optimize it, or launch a better one fast."
    },
    {
        question: "Q4 : Will there be networking opportunities at the event?",
        answer: "Yes, definitely. The room will be filled with like-minded business owners, founders, and coaches. You’ll also get access to a private post-event group."
    }
]

function ChevronIcon({ isActive }: { isActive: boolean }) {
    return (
        <svg
            className={`w-[18px] h-[18px] transition-transform duration-300 ease-in-out ${isActive ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    )
}

interface FAQItemProps {
    question: string
    answer: string
    isActive: boolean
    onClick: () => void
}

function FAQItem({ question, answer, isActive, onClick }: FAQItemProps) {
    return (
        <div className="bg-[#1f2937d1] border-[#13b5e8] border rounded-lg mb-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] overflow-hidden">
            <div
                className="text-[16px] font-semibold leading-[1.35em] p-5 cursor-pointer  flex justify-between items-center text-left text-[#e0e0e0] md:text-[15px] md:p-4"
                onClick={onClick}
            >
                <span>{question}</span>
                <ChevronIcon isActive={isActive} />
            </div>
            <div className={`text-[16px] leading-[1.55em] p-5 text-left text-[#e0e0e0] md:text-[15px] md:p-4 ${isActive ? 'block' : 'hidden'}`}>
                {answer}
            </div>
        </div>
    )
}

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className="w-full mt-12  mb-12 relative overflow-hidden py-[20px] px-5 md:px-[20px] lg:px-[40px]">
            <div className="max-w-[1140px] mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="font-bold mb-6 text-[24px] md:text-[28px] lg:text-[36px] leading-[1.2] text-[#ffffff]">
                        FAQs
                    </h2>

                    {/* Decorative Line */}

                </div>

                {/* FAQ Container */}
                <div className="w-full max-w-full p-0">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isActive={activeIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
                <div className='mt-8'>
                    <EnrollButton />
                </div>
            </div>
        </div>
    )
}