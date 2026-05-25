'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CalendarDays, ChevronDown, GripVertical } from 'lucide-react'
import Image from 'next/image'

/* ────────────────────────── DATA ────────────────────────── */

const dentalServices = [
  {
    id: "exams",
    name: "Dental Exams",
    comfort: "Low Discomfort",
    comfortColor: "#1D9E75",
    desc: "Routine exams catch problems early — before they become painful or costly. We use gentle digital x-rays and a thorough visual check. Most patients are in and out in under an hour.",
    faqs: [
      {
        q: "What does a dental exam involve?",
        a: "A comprehensive dental exam includes examination of diagnostic X-rays for decay, tumors, cysts, and bone loss, oral cancer screening of the lips, tongue, throat, tissues and gums, gum disease evaluation, examination of all tooth surfaces for decay, and review of any existing restorations like fillings and crowns."
      },
      {
        q: "How often should I come in?",
        a: "The American Dental Association recommends visiting twice per year for dental exams and cleanings. New patients receive a full mouth series of x-rays, which is typically good for 3 to 5 years."
      }
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "implants",
    name: "Dental Implants",
    comfort: "Moderate",
    comfortColor: "#D4A017",
    desc: "Dental implants are the best treatment for missing teeth — so natural feeling you can eat, speak, and smile without fear. We offer free CT scans and consultations. Our dentist is a diplomat in implantology and teaches other dentists worldwide.",
    faqs: [
      {
        q: "Am I a candidate for implants?",
        a: "Most patients with missing or failing teeth are candidates. We use a 3D CT scan to assess your bone and determine the best approach for single implants, implant bridges, or full-arch implant dentures."
      },
      {
        q: "What is the difference between snap-in and screw-retained dentures?",
        a: "Both use implants for support. Snap-in overdentures can be removed for cleaning; screw-retained are fixed permanently in place and cleaned like natural teeth."
      }
    ],
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cosmetic",
    name: "Cosmetic Dentistry",
    comfort: "Low Discomfort",
    comfortColor: "#1D9E75",
    desc: "Nobody is born with a perfect smile. Whether you are looking for whitening, veneers, crowns, or a complete smile makeover, our experienced cosmetic team listens to your goals and builds a treatment plan just for you.",
    faqs: [
      {
        q: "What cosmetic treatments do you offer?",
        a: "We offer porcelain veneers, teeth whitening, composite bonding, crowns, Invisalign and braces, and full smile makeovers."
      },
      {
        q: "How long do veneers last?",
        a: "Porcelain veneers are very durable and typically last 10 to 15 or more years with proper care. They require two visits — one for preparation and impressions, one for bonding."
      }
    ],
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "invisalign",
    name: "Invisalign & Braces",
    comfort: "Low Discomfort",
    comfortColor: "#1D9E75",
    desc: "Straighten your smile discreetly with Invisalign clear aligners or traditional wire braces — we offer both. Free consultations include a 3D CT scan and x-rays at no cost. Trays are shipped directly to your home for maximum convenience.",
    faqs: [
      {
        q: "How long does Invisalign take?",
        a: "Treatment time varies. Simple to moderate cases can take 6 to 18 months. We offer flat-rate pricing with unlimited trays for more complex cases."
      },
      {
        q: "Do you offer traditional braces too?",
        a: "Yes! We offer metal wire and bracket braces in a variety of colors, as well as fast turbo wire braces and clear aligners."
      }
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wisdom",
    name: "Wisdom Teeth",
    comfort: "Moderate",
    comfortColor: "#D4A017",
    desc: "Wisdom teeth extractions handled in almost any situation, including bony and impacted teeth. We use a 3D CT X-ray for precision and offer oral sedation options. Get all 4 teeth removed — includes x-rays, CT scan, exam, and a complimentary follow-up.",
    faqs: [
      {
        q: "Do I need to be put to sleep?",
        a: "Oral sedation is available and recommended for more complex or impacted cases. You will be comfortable and relaxed throughout the entire procedure."
      },
      {
        q: "How long is recovery?",
        a: "Most patients recover in 3 to 5 days. We provide full post-op instructions and free follow-up exams to make sure healing is on track."
      }
    ],
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rootcanal",
    name: "Root Canals",
    comfort: "Moderate",
    comfortColor: "#D4A017",
    desc: "Root canal therapy saves an infected or decayed tooth that would otherwise need removal. All living tissue is gently removed and the tooth is sealed and restored with a crown. The procedure is far less uncomfortable than most people expect.",
    faqs: [
      {
        q: "Is a root canal painful?",
        a: "With modern anesthesia, most patients feel little to no discomfort during the procedure. Mild sensitivity afterward is normal and resolves as healing progresses."
      },
      {
        q: "What are signs I might need one?",
        a: "Signs include severe toothache, sensitivity to hot or cold that lingers, swelling or tenderness near a tooth, or an abscess on the gums."
      }
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sedation",
    name: "Sedation Dentistry",
    comfort: "Low Discomfort",
    comfortColor: "#1D9E75",
    desc: "Dental anxiety should not keep you from a healthy smile. With oral sedation, you can relax completely while we take care of everything. Our calming office environment and friendly team make even anxious patients feel right at home.",
    faqs: [
      {
        q: "What is oral sedation?",
        a: "Oral sedation involves taking a prescribed pill before your appointment. You will be awake but deeply relaxed. Many patients have little to no memory of the procedure."
      },
      {
        q: "Is sedation safe?",
        a: "Yes. Our dentists are trained and experienced in sedation dentistry. Your vital signs are monitored throughout the procedure for your safety."
      }
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  }
]

const massageServices = [
  {
    id: "deep-tissue",
    name: "Sports & Deep Tissue Massage",
    comfort: "Therapeutic",
    comfortColor: "#185FA5",
    desc: "Targeted techniques to relieve muscle tension, support injury recovery, and enhance athletic performance. Ideal for athletes or anyone dealing with chronic muscle tightness.",
    faqs: [
      {
        q: "Who benefits most from deep tissue massage?",
        a: "Athletes, people with chronic back or neck pain, or those recovering from physical injuries get the most benefit."
      },
      {
        q: "Is deep tissue massage painful?",
        a: "You may feel some pressure during the session, but the therapist always adjusts to your comfort level."
      }
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hot-stone",
    name: "Hot Stone Massage",
    comfort: "Relaxing",
    comfortColor: "#1D9E75",
    desc: "Heated stones are expertly placed and glided across your body to melt away tension, increase blood flow, and promote deep relaxation. Leave feeling completely rejuvenated.",
    faqs: [
      {
        q: "What are the benefits of hot stone massage?",
        a: "Reduces muscle stiffness, increases circulation, promotes relaxation, and may help relieve symptoms of anxiety and depression."
      },
      {
        q: "How hot are the stones?",
        a: "Stones are heated to a comfortable temperature between 130 and 145 degrees Fahrenheit. The therapist always tests placement for your safety."
      }
    ],
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "swedish",
    name: "Swedish Massage",
    comfort: "Low Discomfort",
    comfortColor: "#1D9E75",
    desc: "Classic relaxation massage using gentle strokes and kneading to reduce stress and improve overall well-being. Perfect for first-time massage clients or anyone who needs to de-stress.",
    faqs: [
      {
        q: "What is Swedish massage good for?",
        a: "Ideal for relaxation, reducing cortisol levels, improving circulation, and relieving mild muscle soreness."
      },
      {
        q: "How long is a session?",
        a: "Sessions typically run 60 or 90 minutes. We recommend 90 minutes for your first visit to get the full experience."
      }
    ],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80"
  }
]

/* ────────────────────────── COMPONENTS ────────────────────────── */

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-3.5 text-left group">
        <span className="text-[13.5px] text-gray-700 font-medium group-hover:text-[#185FA5] transition-colors pr-4">{q}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-[13px] text-gray-500 leading-relaxed pb-3.5">{a}</p>
        </div>
      </div>
    </div>
  )
}

function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)
  const [view, setView] = useState<'upper' | 'lower'>('upper')

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPos((x / rect.width) * 100)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return
      e.preventDefault()
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      updatePos(clientX)
    }
    const onUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [updatePos])

  // bounce hint
  useEffect(() => {
    const t1 = setTimeout(() => setPos(35), 800)
    const t2 = setTimeout(() => setPos(65), 1400)
    const t3 = setTimeout(() => setPos(50), 2000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  const beforeImage = view === 'upper' ? '/images/results/upper-before.webp' : '/images/results/bottom-before.webp'
  const afterImage = view === 'upper' ? '/images/results/upper-after.webp' : '/images/results/bottom-after.webp'

  return (
    <div className="space-y-6">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] max-w-2xl mx-auto rounded-2xl overflow-hidden cursor-col-resize select-none shadow-lg"
        onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX) }}
        onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX) }}
      >
        {/* After (full) */}
        <Image src={afterImage} alt="After treatment" fill className="object-cover" loading="lazy" />
        
        {/* Caption on After side */}
        <div className="absolute bottom-4 right-4 z-10 pointer-events-none" style={{ opacity: pos < 85 ? 1 : 0, transition: 'opacity 0.3s' }}>
          <span className="inline-block bg-black/60 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium px-3 py-1.5 rounded-md leading-tight">
            Real patient result — full dental restoration
          </span>
        </div>
        
        {/* Before (clipped) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={beforeImage} alt="Before treatment" fill className="object-cover" loading="lazy" />
        </div>
        
        {/* Labels */}
        <span className="absolute top-4 left-4 bg-black/50 text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full backdrop-blur-sm">Before</span>
        <span className="absolute top-4 right-4 bg-[#1D9E75]/80 text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full backdrop-blur-sm">After</span>
        
        {/* Slider line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/80" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
            <GripVertical className="w-5 h-5 text-[#1D9E75]" />
          </div>
        </div>
      </div>

      {/* View Toggle Buttons */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setView('upper')}
          className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-full border transition-all duration-300 ${
            view === 'upper'
              ? 'bg-[#185FA5] text-white border-[#185FA5] shadow-sm'
              : 'bg-white text-gray-500 border-gray-200 hover:border-[#185FA5]/30'
          }`}
        >
          Upper Teeth
        </button>
        <button
          onClick={() => setView('lower')}
          className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-full border transition-all duration-300 ${
            view === 'lower'
              ? 'bg-[#185FA5] text-white border-[#185FA5] shadow-sm'
              : 'bg-white text-gray-500 border-gray-200 hover:border-[#185FA5]/30'
          }`}
        >
          Lower Teeth
        </button>
      </div>
    </div>
  )
}

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1500
        const start = performance.now()
        const animate = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.5 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ────────────────────────── MAIN PAGE ────────────────────────── */

export default function Services() {
  const [mode, setMode] = useState<'dental' | 'massage'>('dental')
  const [activeId, setActiveId] = useState('exams')
  const [showCta, setShowCta] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const services = mode === 'dental' ? dentalServices : massageServices
  const active = services.find((s) => s.id === activeId) || services[0]

  // Reset active when toggling mode
  useEffect(() => {
    setActiveId(mode === 'dental' ? 'exams' : 'deep-tissue')
  }, [mode])

  // Sticky CTA after hero
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      setShowCta(!entry.isIntersecting)
    }, { threshold: 0 })
    if (heroRef.current) obs.observe(heroRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <TopInfoBar />
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* ─── HERO ─── */}
        <section ref={heroRef} className="relative bg-[#0D0D0D] pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#C8A46B]/5 blur-[120px] pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A46B]/30 to-transparent" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            {/* Reassurance badge */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D9E75]/10 border border-[#1D9E75]/20 mb-6">
              <span className="text-sm">😊</span>
              <span className="text-[#1D9E75] text-xs font-medium tracking-wide">We welcome nervous patients</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-3xl md:text-5xl font-light tracking-tight leading-tight mb-4"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              {mode === 'dental' ? (
                <>Services Designed<br className="hidden md:block" /> Around Your Comfort</>
              ) : (
                <>Therapeutic Massage<br className="hidden md:block" /> Designed For Healing</>
              )}
            </motion.h1>

            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="w-14 h-[1px] bg-[#C8A46B] mx-auto mb-5" />

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              key={mode}
              className="text-white/45 text-sm md:text-base max-w-lg mx-auto mb-10 font-light leading-relaxed">
              {mode === 'dental'
                ? "From routine checkups to full smile transformations — every treatment is tailored to keep you calm, informed, and cared for."
                : "We are dedicated to providing you with the ultimate massage therapy experience, tailored to your unique needs. Whether you are recovering from a car accident, rehabbing an injury, or simply need to unwind — our licensed therapist has the right treatment for you."}
            </motion.p>

            {/* Mode Toggle */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="inline-flex bg-white/[0.06] rounded-full p-1 border border-white/10">
              {(['dental', 'massage'] as const).map((m) => (
                <button key={m} onClick={() => setMode(m)}
                  className={`relative px-6 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-300
                    ${mode === m ? 'text-black' : 'text-white/50 hover:text-white/80'}`}>
                  {mode === m && <motion.div layoutId="modeHighlight" className="absolute inset-0 bg-[#C8A46B] rounded-full" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
                  <span className="relative z-10">{m === 'dental' ? 'Dental Services' : 'Massage Therapy'}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── SERVICE PILLS ─── */}
        <section className="bg-[#FAFAF8] border-b border-gray-100 sticky top-0 z-30">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-1 px-1">
              {services.map((s) => (
                <button key={s.id} onClick={() => setActiveId(s.id)}
                  className={`relative whitespace-nowrap px-4 py-2 text-[12.5px] font-medium rounded-full border transition-all duration-300 flex-shrink-0
                    ${activeId === s.id
                      ? 'bg-[#185FA5] text-white border-[#185FA5] shadow-sm'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-[#185FA5]/30 hover:text-[#185FA5]'}`}>
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ACTIVE SERVICE DETAIL ─── */}
        <section className="py-14 md:py-20 bg-[#FAFAF8]">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
              >
                {/* Left: Info */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-light text-[#1A1A1A] mb-2 tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                    {active.name}
                  </h2>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: active.comfortColor }} />
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">
                      {active.comfort}
                    </span>
                  </div>
                  <p className="text-[14.5px] text-gray-500 leading-[1.8] mb-8">{active.desc}</p>

                  {/* FAQs */}
                  <div className="bg-white rounded-xl border border-gray-100 p-5">
                    <p className="text-[11px] text-[#C8A46B] tracking-[0.2em] uppercase font-semibold mb-3">Common Questions</p>
                    {active.faqs.map((faq, i) => <FAQ key={i} q={faq.q} a={faq.a} />)}
                  </div>
                </div>

                {/* Right: Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#E8F4F0] to-[#D4EAE1] flex items-center justify-center shadow-sm">
                  {active.image ? (
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="text-center p-8">
                      <div className="w-16 h-16 rounded-full bg-[#1D9E75]/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">{mode === 'dental' ? '🦷' : '💆‍♀️'}</span>
                      </div>
                      <p className="text-[#1D9E75] text-sm font-medium">{active.name}</p>
                      <p className="text-[#1D9E75]/50 text-xs mt-1">Service illustration</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ─── BEFORE & AFTER (DENTAL ONLY) ─── */}
        {mode === 'dental' && (
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="text-center mb-10">
                <p className="text-[#C8A46B] text-xs tracking-[0.3em] uppercase font-medium mb-2">Real Results</p>
                <h2 className="text-2xl md:text-3xl font-light text-[#1A1A1A] tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  See the Transformation
                </h2>
                <p className="text-gray-400 text-sm mt-2">Drag the slider to compare before &amp; after</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <BeforeAfterSlider />
              </motion.div>
              <p className="text-center text-gray-400 text-xs mt-4 italic">Real patient results — drag to reveal</p>
            </div>
          </section>
        )}

        {/* ─── STATS ─── */}
        <section className="py-14 bg-[#FAFAF8] border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { target: 55, suffix: '+', label: 'Years combined experience' },
                { target: 5000, suffix: '+', label: 'Happy patients served' },
                { target: 18, suffix: '', label: 'Services offered' },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <p className="text-3xl md:text-4xl font-light text-[#185FA5] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                    <CountUp target={s.target} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── GOLD CTA ─── */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#8B6914] via-[#C8A46B] to-[#8B6914] py-14 md:py-18">
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-light tracking-tight mb-3 italic" style={{ fontFamily: 'Georgia, serif' }}>
              {mode === 'dental' ? "Ready to Feel Better About Your Smile?" : "Ready to Experience Deep Healing & Relaxation?"}
            </h2>
            <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
              {mode === 'dental'
                ? "Whether it's a routine cleaning or a full transformation, we're here for you."
                : "Schedule your customized massage therapy session today and melt away chronic tension."}
            </p>
            <a href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-[#8B6914] font-semibold text-sm tracking-[0.1em] uppercase hover:bg-[#0D0D0D] hover:text-[#C8A46B] transition-all duration-300">
              <CalendarDays className="w-4 h-4" /> Book Your Appointment
            </a>
          </div>
        </section>
      </main>

      {/* ─── STICKY CTA ─── */}
      <AnimatePresence>
        {showCta && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          >
            <a href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0"
              className="flex items-center gap-2.5 px-6 py-3 bg-[#185FA5] text-white text-sm font-semibold rounded-full shadow-2xl shadow-blue-900/30 hover:bg-[#134B84] transition-all duration-300">
              <CalendarDays className="w-4 h-4" /> Schedule Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
