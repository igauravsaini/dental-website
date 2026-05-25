'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Check } from 'lucide-react'

const reviews = [
  {
    name: "Sarah M.",
    treatment: "Dental Implants",
    quote: "I had been hiding my smile for years. After getting implants here, I cried happy tears looking in the mirror. The team treated me like family from the very first free consult. Five stars is not enough.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    name: "David R.",
    treatment: "Wisdom Teeth Removal",
    quote: "I was terrified going in. They walked me through every single step, used sedation so I felt nothing, and even followed up the next day to check on me. Best dental experience of my life.",
    avatar: "/images/patient-after.webp"
  },
  {
    name: "Maria L.",
    treatment: "Invisalign",
    quote: "I started treatment at 34 and was embarrassed about it. They made me feel completely normal. My trays were shipped to my house and I only came in a few times. My smile is unrecognizable now — in the best way.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    name: "James T.",
    treatment: "Full Smile Makeover",
    quote: "I had been told by other dentists that my case was too complicated. These guys took one look, made a plan, and delivered results I never thought were possible. World class dentists right here in Orem.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    name: "Ashley K.",
    treatment: "Hot Stone Massage",
    quote: "I came in for a dental cleaning and they told me I could add a massage for free. Best decision ever. I left feeling like a completely different person. Now I book both every single time.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    name: "Robert C.",
    treatment: "Root Canal",
    quote: "Root canals have a terrible reputation but honestly this was easier than getting a filling somewhere else. I felt no pain, the team was calm and reassuring the whole time, and I was done in under an hour.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    name: "Jennifer W.",
    treatment: "Dental Exams and Cleaning",
    quote: "I had not been to a dentist in 6 years because of anxiety. A friend told me about this place and I finally went. They were so patient with me. No judgment, no rush. I have now been back three times and I actually look forward to it.",
    avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    name: "Carlos M.",
    treatment: "Dentures and Implants",
    quote: "I got all on four implant dentures and the difference in my life is night and day. I can eat anything again. I can laugh without covering my mouth. I wish I had done this 10 years ago.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80"
  }
]

const homeReviews = [
  {
    stars: 5,
    quote: "The team at Prestige Smiles is amazing. They make you feel comfortable and truly care about your smile.",
    name: "Jessica M."
  },
  {
    stars: 5,
    quote: "I had implants done here and could not be happier with the results. The whole process was smooth and pain-free.",
    name: "Michael T."
  },
  {
    stars: 5,
    quote: "Beautiful office, friendly staff, and excellent care. Highly recommend Prestige Smiles.",
    name: "Amanda P."
  },
  {
    stars: 5,
    quote: "I was terrified of the dentist for years. This team changed everything. I actually look forward to coming in now.",
    name: "Robert C."
  },
  {
    stars: 5,
    quote: "Got my Invisalign here and my smile is completely transformed. The process was easy and the staff guided me every step of the way.",
    name: "Maria L."
  }
]

export function TestimonialsSection({ isHomePage = false }: { isHomePage?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollIndex, setScrollIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(true)

  // Home Page Carousel state
  const [currentIndex, setCurrentIndex] = useState(5)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const slideCount = homeReviews.length
  const extendedReviews = [...homeReviews, ...homeReviews, ...homeReviews]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto Scroll Timer for Home Page
  useEffect(() => {
    if (!isHomePage || isPaused) return
    const interval = setInterval(() => {
      handleNext()
    }, 3500)
    return () => clearInterval(interval)
  }, [isHomePage, isPaused, currentIndex])

  const handleNext = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const handlePrev = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }

  const handleTransitionEnd = () => {
    if (currentIndex >= slideCount * 2) {
      setIsTransitioning(false)
      setCurrentIndex(currentIndex - slideCount)
    } else if (currentIndex < slideCount) {
      setIsTransitioning(false)
      setCurrentIndex(currentIndex + slideCount)
    }
  }

  const handleScroll = () => {
    if (!containerRef.current) return
    const { scrollLeft, clientWidth } = containerRef.current
    if (isMobile) {
      const cardWidth = clientWidth * 0.85 + 24
      const index = Math.round(scrollLeft / cardWidth)
      setScrollIndex(Math.max(0, Math.min(index, reviews.length - 1)))
    } else {
      const pageIndex = Math.round(scrollLeft / clientWidth)
      setScrollIndex(pageIndex)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return
    const { scrollLeft, clientWidth } = containerRef.current
    const scrollAmount = isMobile ? clientWidth * 0.85 + 24 : clientWidth
    containerRef.current.scrollTo({
      left: scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
      behavior: 'smooth'
    })
  }

  const visibleCards = isMobile ? 1 : 3
  const totalPages = isMobile ? reviews.length : 2

  // Render Homepage reviews component version
  if (isHomePage) {
    return (
      <section className="bg-[#0A0A0A] text-white py-20 md:py-28 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 relative">
          
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-[#C8A46B] uppercase mb-3">
              PATIENT REVIEWS
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Real Patients. Real Results.
            </h2>
          </div>

          {/* Carousel Container */}
          <div 
            className="relative px-2 md:px-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Track Window */}
            <div className="overflow-hidden">
              <div 
                className="flex"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                  transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none',
                  willChange: 'transform'
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedReviews.map((r, i) => (
                  <div 
                    key={i} 
                    className="w-full md:w-1/3 flex-shrink-0 px-3 py-4"
                  >
                    <div className="bg-[#141414] border border-white/[0.03] shadow-[0_4px_24px_rgba(0,0,0,0.4)] rounded-2xl p-8 h-[220px] flex flex-col justify-between hover:border-[#C8A46B]/20 transition-colors duration-300">
                      <div>
                        {/* Stars */}
                        <div className="flex gap-0.5 mb-5">
                          {[...Array(r.stars)].map((_, s) => (
                            <Star key={s} className="w-3.5 h-3.5 fill-[#C8A46B] text-[#C8A46B]" />
                          ))}
                        </div>
                        {/* Quote */}
                        <p className="text-[13.5px] text-gray-300 leading-relaxed font-light italic">
                          “{r.quote}”
                        </p>
                      </div>
                      {/* Author */}
                      <p className="text-xs font-semibold tracking-wider text-[#C8A46B] mt-4">
                        — {r.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Arrow */}
            <button 
              onClick={handlePrev}
              className="absolute -left-2 md:left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#C8A46B]/20 flex items-center justify-center bg-black/60 text-[#C8A46B] hover:bg-[#C8A46B]/10 hover:border-[#C8A46B] transition duration-300 z-20"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={handleNext}
              className="absolute -right-2 md:right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#C8A46B]/20 flex items-center justify-center bg-black/60 text-[#C8A46B] hover:bg-[#C8A46B]/10 hover:border-[#C8A46B] transition duration-300 z-20"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Footer info (centered) */}
          <div className="text-center mt-12 flex flex-col items-center gap-3">
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              500+ five-star reviews on Google
            </p>
            <a 
              href="https://maps.app.goo.gl/uPhRt9ZRyWuhrQ5q6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-semibold tracking-wider text-[#C8A46B] hover:text-[#e5c187] uppercase underline underline-offset-4 transition duration-300"
            >
              Read All Google Reviews
            </a>
          </div>

        </div>
      </section>
    )
  }

  // Render Full Reviews Page layout
  return (
    <section className="bg-[#FAFAF8] text-gray-900 py-20 md:py-28 overflow-hidden">
      {/* Inline style to hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ─── SECTION HEADER ─── */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-[#C8A46B] uppercase mb-3">
            Real Patients. Real Results.
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 tracking-tight mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Hear It From the People Who Smiled First.
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">
            Over 500 five-star reviews from patients across Utah Valley.
          </p>
        </div>

        {/* ─── TRUST BAR ─── */}
        <div className="max-w-3xl mx-auto mb-16 bg-[#F4F1EC]/40 border border-gray-100 rounded-2xl py-6 px-4 md:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
            <div>
              <p className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">500+</p>
              <p className="text-[10px] md:text-[11px] tracking-wider text-gray-400 uppercase font-medium mt-1">Google Reviews</p>
            </div>
            <div>
              <p className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">4.9</p>
              <p className="text-[10px] md:text-[11px] tracking-wider text-gray-400 uppercase font-medium mt-1">Average Rating</p>
            </div>
            <div>
              <p className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">15+</p>
              <p className="text-[10px] md:text-[11px] tracking-wider text-gray-400 uppercase font-medium mt-1">Years Serving Utah</p>
            </div>
          </div>
        </div>

        {/* ─── CAROUSEL CONTAINER ─── */}
        <div className="relative group/carousel">
          
          {/* Navigation Arrows (Desktop Only) */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-[#C8A46B]/30 flex items-center justify-center bg-white text-[#C8A46B] hover:bg-[#C8A46B]/5 hover:border-[#C8A46B] shadow-sm transition duration-300 z-20 hidden md:flex opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-[#C8A46B]/30 flex items-center justify-center bg-white text-[#C8A46B] hover:bg-[#C8A46B]/5 hover:border-[#C8A46B] shadow-sm transition duration-300 z-20 hidden md:flex opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Fade-out Overlay on Right Edge (Desktop only) */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAF8] via-[#FAFAF8]/50 to-transparent pointer-events-none z-10 hidden md:block" />

          {/* Reviews Grid/Flex Scroll */}
          <div 
            ref={containerRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-rows-2 md:grid-flow-col overflow-x-auto gap-6 no-scrollbar pb-6 scroll-smooth snap-x snap-mandatory px-2 md:px-0"
          >
            {reviews.map((r, i) => (
              <div 
                key={i} 
                className="w-[85vw] md:w-[360px] shrink-0 snap-center md:snap-start bg-white border border-gray-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.015)] rounded-2xl p-8 pt-12 relative my-8 transition-transform duration-300 hover:-translate-y-0.5"
                style={{ willChange: 'transform' }}
              >
                {/* Avatar */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-100">
                  <Image 
                    src={r.avatar} 
                    alt={r.name} 
                    width={64} 
                    height={64} 
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="text-center flex flex-col h-full justify-between">
                  <div>
                    <h4 className="text-[14.5px] font-semibold text-gray-800 mt-2">{r.name}</h4>
                    <p className="text-[11px] text-gray-400 italic mt-0.5 mb-3">{r.treatment}</p>
                    
                    {/* Stars */}
                    <div className="flex justify-center gap-0.5 mb-4">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-[#F1C40F] text-[#F1C40F]" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-[13px] text-gray-600 leading-relaxed font-normal mb-6 line-clamp-3 min-h-[58px]">
                      {r.quote}
                    </p>
                  </div>

                  {/* Verification footer */}
                  <div className="flex items-center justify-center gap-1.5 pt-4 border-t border-gray-50/50">
                    <span className="w-4 h-4 rounded-full bg-[#1D9E75]/10 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-[#1D9E75] stroke-[3]" />
                    </span>
                    <span className="text-[9.5px] tracking-wider text-gray-400 uppercase font-semibold">Verified Google Review</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── DOT INDICATORS ─── */}
        <div className="flex justify-center gap-2 mt-6 mb-16">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!containerRef.current) return
                const { clientWidth } = containerRef.current
                const scrollAmount = isMobile ? clientWidth * 0.85 + 24 : clientWidth
                containerRef.current.scrollTo({
                  left: idx * scrollAmount,
                  behavior: 'smooth'
                })
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                scrollIndex === idx 
                  ? 'w-6 bg-[#C8A46B]' 
                  : 'w-2 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* ─── GOOGLE RATING BADGE ─── */}
        <div className="text-center border-t border-gray-100 pt-14 mb-16">
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex items-center gap-2.5">
              {/* Google Colored G Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-xl font-bold text-gray-900">4.9</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[#F1C40F] text-[#F1C40F]" />
                ))}
              </div>
              <span className="text-xs text-gray-400 font-medium">500+ reviews on Google</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/uPhRt9ZRyWuhrQ5q6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-semibold tracking-wider text-gray-500 uppercase hover:text-[#C8A46B] underline underline-offset-4 transition duration-300"
            >
              Read All Google Reviews
            </a>
          </div>
        </div>

        {/* ─── CALL TO ACTION ─── */}
        <div className="text-center pt-8 border-t border-gray-100 max-w-xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-2 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
            Ready to be our next success story?
          </h3>
          <p className="text-gray-400 text-xs md:text-sm tracking-wide mb-8">
            New patients welcome. Free exams and x-rays. No pressure, just care.
          </p>
          <a 
            href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#C8A46B] hover:bg-[#b8935f] text-black font-semibold text-xs tracking-[0.18em] uppercase rounded transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Book Your Free Visit
          </a>
        </div>

      </div>
    </section>
  )
}
