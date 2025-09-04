'use client'

import { useState, useEffect } from 'react'

interface EnrollButtonProps {
  className?: string
  showSeatsChip?: boolean
}

interface ContentData {
  price: string
  originalPrice: string
  enrollLink: string
}

export default function EnrollButton({
  className = "",
  showSeatsChip = true
}: EnrollButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [seatsLeft, setSeatsLeft] = useState(20)
  const [content, setContent] = useState<ContentData>({
    price: '₹99',
    originalPrice: '₹999',
    enrollLink: 'https://rzp.io/rzp/1crss-delhi'
  })

  useEffect(() => {
    // Fetch dynamic content
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/content')
        if (response.ok) {
          const data = await response.json()
          setContent({
            price: data.price || '₹99',
            originalPrice: data.originalPrice || '₹999',
            enrollLink: data.enrollLink || 'https://rzp.io/rzp/1crss-delhi'
          })
        }
      } catch (error) {
        console.error('Error fetching content:', error)
      }
    }

    fetchContent()
  }, [])

  // Seats logic (fixed)
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

  return (
    <>

      <div className={`w-full flex justify-center ${className}`}>
        <div className=" relative">

          <b><b>
            <a
              className="relative inline-block bg-[#32BFEB] text-white font-bold py-4 px-5 md:py-4 md:px-8 rounded-[10px] text-sm md:text-sm transition-all duration-300 overflow-hidden group"
              href={content.enrollLink}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="elementor-button-content-wrapper relative z-10">
                <span className="elementor-button-text flex md:text-xl text-base gap-3 items-center  items">
                  Reserve Your Seat Now For {content.price}{' '}
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-arrow-circle-right h-5 invert-[100]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>
                  {/* <strike className="text-red-200 opacity-80">
                    {content.originalPrice}
                  </strike> */}
                </span>
              </span>



              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-sm" />
            </a>
          </b></b>
          <div className='flex justify-center mt-2'>
            <img src='/pg.webp' className='h-6 ' />
          </div>
          {showSeatsChip && (
            <div className=" -top-7  right-[5%] mt-2 min-w-[100px] sm:min-w-[118px] rounded-full px-2 sm:px-3.5 py-1 sm:py-1.5 text-center text-[18px] md:text-[22px]  font-bold text-[#E20000] shadow z-10">
              ONLY  <span className='animate-pulse' style={{ animationDuration: '2s' }}>{seatsLeft} SPOTS AVAILABLE </span>🚨
            </div>
          )}
        </div>
      </div>
    </>
  )
}