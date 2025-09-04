'use client'

import Image from 'next/image'
import { useState } from 'react'
import EnrollButton from './enroll'

const faqs = [
    {
        question: "Who is this for?",
        answer: "This is for anyone who wants to acquire more customers on the internet with REVERSE FUNNELS. Coaches, consultants, agency owners, artists, professional service providers, influencers, and content creators."
    },
    {
        question: "How is this different from other products?",
        answer: "It works. We have a proven track record of utilizing this for ourselves and our private clients. You don't need to be an expert to implement these strategies."
    },
    {
        question: "Is there a guarantee?",
        answer: "Yes, you get a 30-day \"no questions asked\" money-back guarantee in case it's not for you. You even get to keep the bonuses."
    },
    {
        question: "When can I access the bonuses?",
        answer: "You can access the bonuses after the 3 DAY LIVE event is finished!"
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