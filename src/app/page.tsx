import AboutSection from '@/components/AboutSection'
import AgendaSection from '@/components/AgendaSection'
import BonusSection from '@/components/BonusSection'
import ClientsSlider from '@/components/ClientSection'
import EventAgendaSection from '@/components/EventAgenda'
import FAQSection from '@/components/FAQSection'
import FinalCTASection from '@/components/FinalCTASection'
import FooterSection from '@/components/FooterSection'
import HeroSection from '@/components/HeroSection'
import OfflineEventSection from '@/components/OfflineEventSection'
import ReadyToBuySection from '@/components/ReadyToBuySection'
import ReverseFunnelSection from '@/components/ReverseFunnelSection'
import StickyBottomCTA from '@/components/StickyBottomCTA'
import TsunamiSection from '@/components/TsunamiSection'
import WhoShouldAttendSection from '@/components/WhoShouldAttendSection'
import React from 'react'

export default function Home({ }: Props) {
  return (
    <div className=''>
      <div className='w-full top-0 absolute z-[5555]  overflow-hidden  flex justify-center'>
        <div>
          <div className='overflow-hidden w-screen'>
            <HeroSection />
          </div>
          <div className='bg-[#] w-screen '>
            <ClientsSlider />
            <div className='relative'>
              <div className="absolute bottom-24 left-0 -z-10 opacity-100">
                <img
                  src="https://lp.launchatscale.com/wp-content/uploads/2025/06/blur1.webp"
                  alt=""
                  className="w-[400px] h-[574px] object-cover"
                  width={400}
                  height={574}
                />
              </div>
              <OfflineEventSection />
            </div>
            <div className='bg-white'>
              <ReadyToBuySection />
              <ReverseFunnelSection />

            </div>
            <div className='relative'>
              <div className="absolute top-0 left-0 -z-10 opacity-100">
                <img
                  src="https://lp.launchatscale.com/wp-content/uploads/2025/06/blur1.webp"
                  alt=""
                  className="w-[400px] h-[574px] object-cover"
                  width={400}
                  height={574}
                />
              </div>
              <EventAgendaSection />
            </div>
            <div className='bg-white'>
              <WhoShouldAttendSection />
            </div>
            {/* <AgendaSection /> */}
            {/* <TsunamiSection /> */}
            <BonusSection />
            {/* <FinalCTASection /> */}
            {/* <AboutSection /> */}
            <FAQSection />
            <FooterSection />
            <StickyBottomCTA />
          </div>


        </div>
      </div>
    </div >
  )
}