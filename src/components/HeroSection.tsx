'use client'

import { useEffect, useId, useMemo, useState } from 'react'
import EnrollButton from './enroll'

interface ContentData {
    eventDate: string
    eventTime: string
    eventLocation: string
    eventLanguage: string
    heroVideoUrl: string
    heroVideoPoster: string
}

export default function HeroSection() {

    const [content, setContent] = useState<ContentData>({
        eventDate: '29th – 31st Aug',
        eventTime: '7 PM – 9 PM',
        eventLocation: 'Zoom',
        eventLanguage: 'English',
        heroVideoUrl: 'https://lp.launchatscale.com/wp-content/uploads/2025/06/C3926-YT.mp4',
        heroVideoPoster: 'https://lp.launchatscale.com/wp-content/uploads/2024/05/Shubh-Jain-thum1-1-1.avif'
    })
    const [loading, setLoading] = useState(true)





    const bars = useMemo(() => Array.from({ length: 22 }), [])

    const items = [
        { label: 'Date', value: content.eventDate, Icon: CalendarIcon },
        { label: 'Time', value: content.eventTime, Icon: ClockIcon },
        { label: 'Language', value: content.eventLanguage, Icon: GlobeIcon },
        { label: 'Location', value: content.eventLocation, Icon: PinIcon },
    ]

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch('/api/content')
                if (response.ok) {
                    const data = await response.json()
                    setContent({
                        eventDate: data.eventDate || '29th – 31st Aug',
                        eventTime: data.eventTime || '7 PM – 9 PM',
                        eventLocation: data.eventLocation || 'Zoom',
                        eventLanguage: data.eventLanguage || 'English',
                        heroVideoUrl: data.heroVideoUrl || 'https://lp.launchatscale.com/wp-content/uploads/2025/06/C3926-YT.mp4',
                        heroVideoPoster: data.heroVideoPoster || 'https://lp.launchatscale.com/wp-content/uploads/2024/05/Shubh-Jain-thum1-1-1.avif'
                    })
                }
            } catch (error) {
                console.error('Error fetching content:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchContent()
    }, [])



    return (
        <div className='w-full flex overflow-hidden justify-center'>
            <section className="relative w-full ">
                {/* Background Overlay */}

                {/* Content - Updated padding to match specifications */}
                <div className="relative z-10 px-[10px] py-0 sm:px-5 md:px-10  lg:px-10 ">
                    {/* Top badge */}
                    <div className='flex justify-center'>
                        <div className='border-2 md:text-xl text-sm px-4  mt-4 rounded-full bg-[#1D2129] p-2 border-[#13b5e8] font-medium'>
                            <h1 className='text-white text-center'>
                                <span className='text-[#f43b38]'>📍Attention Delhi:</span>
                                {' '}Next BIG AI Funnel Launch Event <br className='md:hidden'/>- Now In Delhi!
                            </h1>
                        </div>
                    </div>
                    {/* Headline + subhead */}
                    <div className="mx-auto md:mt-3 px-4 py-6 text-center">
                        <h1 className="mx-auto  text-[20px] md:text-[38px]   capitalize leading-[1.25]" style={{ fontFamily: 'Segoe UI, sans-serif !important', fontWeight: 600, color: '#F9FBFF' }}>
                            Sit With Me In Delhi For 1 Day And I'll Teach You <span style={{ color: '#13B5E8' }}>How To<br className='hidden md:block' /> Launch Your 1 CR+ Coaching Business From High-<br />Converting Funnel</span> A-Z Using The Secret Army of <span style={{ color: '#13B5E8' }}><i>AI<br className='hidden md:block' /> Agents!</i></span>
                        </h1>

                        <p className="mt-8 text-[18px]  md:text-[20px] font-medium  text-[#ffffff] -600">
                            Scale Your Coaching Business To <span style={{ color: '#13B5E8' }}>10-15 Lakhs/Month Without</span>
                        </p>

                        {/* Small pills - responsive grid */}
                        <div className="mx-auto p-4 md:mt-4 text-white mt-1">
                            <h2 className="text-center md:text-xl leading-[1.8]">
                                <span>❌ Complex Tools</span> &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>❌ Tech Overwhelm </span> &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>❌ Agency Dependency </span>
                            </h2>
                        </div>
                    </div>

                    {/* Video + Agenda - Responsive Layout */}
                    <div className="mx-auto  w-full md:max-w-[1200px] md:px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.96fr] gap-6">
                            {/* Video */}
                            <div className="order-1 lg:order-1">
                                <div className='flex justify-center'>
                                    <div>
                                        <img src='/shubh.webp' className='md:scale-75 md:-mt-32 -mt-20' />
                                        <div className='bg-white rounded-2xl -mt-[45px] md:-mt-[120px] shadow-[0_8px_8px_0_rgba(70,70,70,0.5)]  mx-auto w-full md:w-[68%]  flex-col md:flex-row items-center gap-2 p-4 z-10 relative'>
                                            <div>
                                                <h3 className="md:text-lg font-semibold text-center">
                                                    <span style={{ color: '#13B5E8' }} className="heading3 text-xl md:text-2xl">Shubh Jain</span>
                                                </h3>
                                            </div>
                                            <div className='flex justify-center'>
                                                <img
                                                    src="https://lp.launchatscale.com/wp-content/uploads/2025/06/Shubh-9-scaled-1-1024x212.avif"
                                                    alt="Shubh Jain"
                                                    className="w-full max-w-[300px] scale-75 ml-6 md:scale-[60%]"
                                                    width={1024}
                                                    height={212}
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-base font-medium text-center">Behind the top coaches? That&apos;s me. 😉</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Info Cards - Full width on mobile, grid on larger screens */}

                            </div>

                            {/* Agenda + Info Cards */}
                            <div className="order-1 lg:order-1 mt-4 space-y-6">
                                {/* Agenda */}
                                <div className="relative rounded-xl    p ">
                                    <div className="md:mt-6 grid grid-cols-2 lg:grid-cols-2 gap-3 -mt-4 sm:gap-4">
                                        {items.map((it, i) => (
                                            <InfoCard key={i} {...it} />
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Section */}
                                <div className="text-center mt-8">
                                    <div className="relative inline-block">
                                        <EnrollButton
                                            price="₹99"
                                            originalPrice="₹999"
                                            buttonText="ENROLL NOW"
                                            className="inline-flex rounded-2xl  items-center justify-center"
                                        />


                                    </div>


                                    {/* Progress bar */}
                                    {/* <div className="mt-6">
                                        <div className="mx-auto grid gap-[2px] sm:gap-[3px] max-w-[300px] sm:max-w-none"
                                            style={{ gridTemplateColumns: 'repeat(22,minmax(8px,18px))', width: 'fit-content' }}>
                                            {Array.from({ length: 22 }).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={
                                                        'h-[18px] sm:h-[24px] md:h-[28px] relative ' +
                                                        (i < 20 ? 'bg-[#A8A8A8]' : 'bg-[#CF342A] animate-pulse')
                                                    }
                                                >
                                                    {i >= 20 && (
                                                        <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] sm:text-[14px] font-bold">
                                                            ✔
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-3 flex items-center justify-center gap-2 text-[13px] font-bold text-[#454545]">
                                            <CalIcon className="h-3 sm:h-4 w-3 sm:w-4" />
                                            <span>Seats Of This Event As Of {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long' }).replace(/(\d+)/, '$1th')} Is Low</span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div >
    )
}

/* ============== small parts ============== */

function TinyPill({ text }: { text: string }) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-[#e6e6e6] bg-white px-3 md:text-[20px]  font- text-[#273352] shadow-sm">
            <CheckIcon className="h-[20px]  w-[18px] sm:w-[22px] flex-shrink-0" />
            <span className="leading-none whitespace-nowrap md:py-3 py-3">{text}</span>
        </div>
    )
}

function AgendaItem({ text }: { text: string }) {
    return (
        <li className="flex gap-3">
            <span className="mt-[1px] inline-block">
                <CheckIcon className="h-[24px] w-[24px]" />
            </span>
            <span dangerouslySetInnerHTML={{ __html: text }} />
        </li>
    )
}

/* ============== icons (same shapes as your HTML) ============== */

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" fill="none">
            <circle cx="16.5" cy="16.5" r="16.5" fill="#4A68EE" fillOpacity="0.37" />
            <circle cx="16.5" cy="16.5" r="9.9" fill="#1C348F" />
            <path d="M21.017 13.564c.263.276.263.724 0 1.001l-5.387 5.656a.9.9 0 0 1-1.0 0l-2.693-2.83a.71.71 0 0 1 1.0-1l2.218 2.327 4.912-5.155a.71.71 0 0 1 1.05 0Z" fill="#fff" />
        </svg>
    )
}

function DateIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41" fill="none">
            <circle cx="20" cy="20.5" r="20" fill="url(#dgrad)" />
            <path d="M25 22.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#fff" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15 10.25c.414 0 .75.336.75.75v.763c.662-.013 1.391-.013 2.193-.013h4.113c.802 0 1.531 0 2.193.013V11c0-.414.336-.75.75-.75s.75.336.75.75v.827c.26.02.506.045.739.076 1.172.158 2.12.49 2.869 1.239.748.748 1.08 1.697 1.238 2.869.153 1.139.153 2.594.153 4.432v2.113c0 1.838 0 3.293-.153 4.432-.158 1.172-.49 2.12-1.238 2.869-.748.748-1.697 1.08-2.869 1.238-1.139.153-2.594.153-4.432.153h-4.113c-1.838 0-3.293 0-4.432-.153-1.172-.158-2.12-.49-2.869-1.238-.748-.748-1.08-1.697-1.238-2.869C9.25 25.85 9.25 24.394 9.25 22.556V20.444c0-1.838 0-3.293.153-4.432.158-1.172.49-2.12 1.238-2.869.749-.749 1.697-1.081 2.869-1.239.233-.031.479-.056.739-.076V11c0-.414.336-.75.75-.75Z" fill="#fff" />
            <defs>
                <linearGradient id="dgrad" x1="20" y1=".5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#151F44" />
                    <stop offset="1" stopColor="#667EEA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function TimeIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41" fill="none">
            <circle cx="20" cy="20.5" r="20" fill="url(#tgrad)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M19.25 10.5c0-.414.336-.75.75-.75 5.937 0 10.75 4.813 10.75 10.75S25.937 31.25 20 31.25 9.25 26.437 9.25 20.5c0-.414.336-.75.75-.75s.75.336.75.75c0 5.108 4.141 9.25 9.25 9.25 5.108 0 9.25-4.142 9.25-9.25 0-5.108-4.142-9.25-9.25-9.25-.414 0-.75-.336-.75-.75Zm.75 6.25c.414 0 .75.336.75.75v3.25H24c.414 0 .75.336.75.75s-.336.75-.75.75h-4c-.414 0-.75-.336-.75-.75V17.5c0-.414.336-.75.75-.75Z" fill="#fff" />
            <defs>
                <linearGradient id="tgrad" x1="20" y1=".5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#151F44" />
                    <stop offset="1" stopColor="#667EEA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function WhereIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41" fill="none">
            <circle cx="20" cy="20.5" r="20" fill="url(#wgrad)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M11.25 19.143C11.25 14.244 15.155 10.25 20 10.25s8.75 3.994 8.75 8.893c0 2.365-.674 4.905-1.866 7.099-1.19 2.191-2.929 4.095-5.104 5.112-1.13.528-2.431.528-3.561 0-2.175-1.017-3.914-2.921-5.105-5.113-1.191-2.194-1.865-4.733-1.865-7.098ZM20 16.75A2.25 2.25 0 1 0 22.25 19 2.25 2.25 0 0 0 20 16.75Z" fill="#fff" />
            <defs>
                <linearGradient id="wgrad" x1="20" y1=".5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#151F44" />
                    <stop offset="1" stopColor="#667EEA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function LangIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41" fill="none">
            <circle cx="20" cy="20.5" r="20" fill="url(#lgrad)" />
            <path d="M29.11 26.576c1.03-1.678 1.573-3.608 1.571-5.576 0-1.968-.544-3.898-1.573-5.575-.955-1.557-2.294-2.843-3.888-3.735C23.623 10.788 21.827 10.32 20 10.32c-1.826 0-3.622.469-5.216 1.36-1.594.893-2.932 2.179-3.888 3.736C9.864 17.103 9.32 19.032 9.32 21c0 1.968.543 3.897 1.57 5.576.956 1.557 2.294 2.843 3.888 3.735 1.594.892 3.39 1.36 5.216 1.36 1.827 0 3.623-.468 5.216-1.36 1.594-.892 2.932-2.178 3.888-3.735Zm-7.744 3.274a2.1 2.1 0 0 1-.693.479 1.75 1.75 0 0 1-1.343 0 3.6 3.6 0 0 1-1.883-2.03 16.7 16.7 0 0 1-.72-2.229 60.5 60.5 0 0 1 6.176 0c-.154.55-.35 1.088-.583 1.61a5.6 5.6 0 0 1-1.271 1.17ZM10.541 21.6h4.308c.028 1.202.158 2.4.389 3.58-1.177.103-2.352.246-3.523.427-.686-1.231-1.087-2.6-1.174-4.007Zm1.174-5.206c1.171.181 2.346.323 3.525.427a34.5 34.5 0 0 0-.39 3.579h-4.308c.087-1.406.488-2.775 1.173-4.006ZM16.445 25.086A34.7 34.7 0 0 1 16.049 21.6h7.903a34.7 34.7 0 0 1-.396 3.486c-1.184-.078-2.37-.118-3.556-.119-1.186 0-2.371.04-3.555.118Zm7.11-8.172c.235 1.148.367 2.315.396 3.486h-7.902c.028-1.171.16-2.338.395-3.486 1.184.078 2.37.119 3.556.119 1.186 0 2.371-.041 3.555-.119Z" fill="#fff" />
            <defs>
                <linearGradient id="lgrad" x1="20" y1=".5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#151F44" />
                    <stop offset="1" stopColor="#667EEA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function CalIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
            <path d="M14.75 10.375V3.75c0-.689-.561-1.25-1.25-1.25h-.812v.625a.625.625 0 1 1-1.25 0V2.5H8.594v.625a.625.625 0 0 1-1.25 0V2.5H4.53v.625a.625.625 0 1 1-1.25 0V2.5H2.5C1.811 2.5 1.25 3.061 1.25 3.75V13.5C1.25 14.189 1.811 14.75 2.5 14.75H13.5c.689 0 1.25-.561 1.25-1.25 0-.345.279-.625.625-.625S16 13.154 16 13.5c0 1.378-1.121 2.5-2.5 2.5H2.5A2.5 2.5 0 0 1 0 13.5V3.75C0 2.371 1.121 1.25 2.5 1.25h.781V.625a.625.625 0 1 1 1.25 0V1.25h2.812V.625a.625.625 0 1 1 1.25 0V1.25h2.844V.625a.625.625 0 1 1 1.25 0V1.25H13.5C14.879 1.25 16 2.371 16 3.75v6.625c0 .345-.279.625-.625.625s-.625-.279-.625-.625ZM8.594 6.281a.625.625 0 0 0-1.25 0v4.031a.625.625 0 0 0 1.25 0V6.281Zm-.625 5.594a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25Z" fill="#454545" />
        </svg>
    )
}

type Item = {
    label: string
    value: string
    Icon: React.ComponentType<{ className?: string }>
}

function InfoCard({ label, value, Icon }: Item) {
    return (
        <div className="rounded-[14px] border-[#b0e6f7] border  flex items-center   bg-[#353A46] p-3 sm:p-4 shadow-[0_6px_12px_rgba(0,0,0,0.06)] ">
            <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex h-[32px] md:scale-50 sm:h-[41px] w-[32px] sm:w-[41px] items-center justify-center rounded-full flex-shrink-0">
                    <Icon className="w-6 h-6 sm:w-10 sm:h-10" />
                </span>

                <div className="leading-tight min-w-0">
                    <div className="md:text-[16px] text-[14px] font-  tracking-wide text-[#ffffff]">
                        {label}
                    </div>
                    <div className="mt-[6px] md:text-[15px] text-[14px] font-bold md:font-bold text-[#ffffff] ">
                        {value}
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ===== Icons (exact look from your HTML) ===== */

/* ===== Icons (exact look from your HTML) ===== */

export function CalendarIcon({ className }: { className?: string }) {
    return (
        <svg className={className} aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="#36C0EC">
            <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
        </svg>
    )
}

export function ClockIcon({ className }: { className?: string }) {
    return (
        <svg className={className} aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#36C0EC">
            <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
        </svg>
    )
}

export function PinIcon({ className }: { className?: string }) {
    return (
        <svg className={className} aria-hidden="true" viewBox="0 0 288 512" xmlns="http://www.w3.org/2000/svg" fill="#36C0EC">
            <path d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"></path>
        </svg>
    )
}

export function GlobeIcon({ className }: { className?: string }) {
    return (
        <svg className={className} aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="#36C0EC">
            <path d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"></path>
        </svg>
    )
}