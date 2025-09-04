'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface ContentData {
  price: string
  originalPrice: string
  enrollLink: string
}

type Props = {
  /** CSS selector for the hero you want to observe */
  heroSelector?: string
}

export default function StickyBottomCTA({ heroSelector = '#hero' }: Props) {
  const [content, setContent] = useState<ContentData>({
    price: '₹299',
    originalPrice: '₹1999',
    enrollLink: 'https://pages.razorpay.com/1crss-delhi',
  })

  const [show, setShow] = useState(false)
  const [seatsLeft, setSeatsLeft] = useState(20)

  useEffect(() => {
    const load = async () => {
      try {
        const r = await fetch('/api/content')
        if (r.ok) {
          const d = await r.json()
          setContent({
            price: d.price || '₹299',
            originalPrice: d.originalPrice || '₹1999',
            enrollLink: d.enrollLink || 'https://pages.razorpay.com/hts-fbspecial',
          })
        }
      } catch { }
    }
    load()
  }, [])

  // Seats logic (fixed)
  // Seats logic (simplified)
  useEffect(() => {
    let pageLoadTime = sessionStorage.getItem('pageLoadTime')
    let startTime: number

    if (!pageLoadTime) {
      startTime = Date.now()
      sessionStorage.setItem('pageLoadTime', startTime.toString())
    } else {
      startTime = parseInt(pageLoadTime)
    }

    const updateSeats = () => {
      const now = Date.now()
      const elapsed = now - startTime

      // Deduct 1 seat every 30 seconds (30,000 ms)
      const thirtySecondsMs = 30 * 1000
      const seatsDeducted = Math.floor(elapsed / thirtySecondsMs)

      // Start at 20, go down to 5 minimum
      const currentSeats = Math.max(5, 20 - seatsDeducted)
      setSeatsLeft(currentSeats)
    }

    // Run immediately
    updateSeats()

    // Update every 15 seconds to catch the changes smoothly
    const interval = setInterval(updateSeats, 15000)

    return () => clearInterval(interval)
  }, [])
  // Show only after the hero is completely out of view
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(heroSelector)
    if (!el) {
      setShow(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting)
      },
      { threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [heroSelector])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="sticky-cta"
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 96, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.8 }}
          className="fixed inset-x-0 bottom-0 z-[5555] pb-[max(env(safe-area-inset-bottom),0px)]"
        >
          {/* neon top border */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[#1ec3ff] via-[#2aa2ff] to-[#1ec3ff]" />

          {/* bar background (deep teal/black, subtle radial like the ref) */}
          <div className="w-full bg-[linear-gradient(180deg,#04242E_0%,#03181F_100%)] text-white shadow-[0_0_30px_rgba(0,0,0,.6)]">
            <div className="mx-auto max-w-[1200px] px-4  sm:px-6">
              <div className="flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:justify-between">
                {/* left copy */}
                <div className="text-center md:text-left">
                  <p className="md:text-[18px] md:pt-0 pt-4 text-[14px]   font-semibold leading-none ">
                    Seats Are Filling Fast, Hurry Up!
                  </p>
                  <p
                    className="mt-2 text-[12px] md:text-[16px] font-extrabold uppercase tracking-[0.06em] text-[#ff3b3b] "
                    aria-live="polite"
                  >
                    ONLY {' '}<span className='animate-pulse' style={{ animationDuration: '2s' }}>{seatsLeft} SPOTS AVAILABLE</span>  🚨
                  </p>
                </div>

                {/* right: price + CTA */}
                <div className=" w-full flex-col items-center gap-3 md:w-auto md:flex-row md:gap-5">
                  <div className="flex justify-center items-baseline md:ml-44 gap-2">
                    <span className=" py-2 font-extrabold leading-none text-[#00e500] text-[20px] md:text-[24px] animate-pulse-scale">
                      {content.price}
                    </span>
                    <span className="text-[16px] leading-none text-slate-400 line-through sm:text-[18px]">
                      {content.originalPrice}
                    </span>
                  </div>
                  <div className='flex justify-center mb-2'>
                    <a
                      href={content.enrollLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block bg-[#32BFEB] text-white font-bold py-4 px-5 md:py-4 md:px-8 rounded-[10px] text-sm md:text-sm transition-all duration-300 overflow-hidden group"
                    >
                      <span className="elementor-button-content-wrapper relative z-10">
                        <span className="elementor-button-text flex md:text-base text-sm gap-3 items-center">
                          Apply Now – Limited Seats
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-arrow-circle-right h-5 invert-[100]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z" />
                          </svg>
                        </span>
                      </span>

                      {/* Button glow effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
