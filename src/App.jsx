import { useEffect, useRef, useState } from 'react'
import Header from './components/layout/Header'
import BenefitsSection from './components/sections/BenefitsSection'
import ComparisonSection from './components/sections/ComparisonSection'
import ConnectSection from './components/sections/ConnectSection'
import FooterSection from './components/sections/FooterSection'
import HeroSection from './components/sections/HeroSection'
import MountainImageSection from './components/sections/MountainImageSection'
import SecondaryImageSection from './components/sections/SecondaryImageSection'
import SeeBigPictureSection from './components/sections/SeeBigPictureSection'
import SpecsSection from './components/sections/SpecsSection'
import TestimonialSuccessSection from './components/sections/TestimonialSuccessSection'
import TrustedBySection from './components/sections/TrustedBySection'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const ticking = useRef(false)
  const lastValue = useRef(isScrolled)

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        const next = window.scrollY > 80
        if (lastValue.current !== next) {
          lastValue.current = next
          setIsScrolled(next)
        }
        ticking.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">
      <Header isScrolled={isScrolled} />

      <main id="top" className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 sm:px-6 lg:px-10">
        <HeroSection />
        <TrustedBySection />
        <div className="h-px w-full bg-black/10" />
        <BenefitsSection />
        <MountainImageSection />
        <SeeBigPictureSection />
        <SpecsSection />
        <ComparisonSection />
        <TestimonialSuccessSection />
        <SecondaryImageSection />
        <ConnectSection />
        <FooterSection />
      </main>
    </div>
  )
}

export default App