'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Download, FileText, ChevronDown, Phone, Mail, MapPin } from 'lucide-react'

/* ────────────────────────── TYPES & DATA ────────────────────────── */

interface FAQItemProps {
  q: string
  a: string
  isOpen: boolean
  onClick: () => void
}

function FAQAccordionItem({ q, a, isOpen, onClick }: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  return (
    <div className="border-b border-gray-200 py-4 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-sans text-sm font-semibold text-[#1C1C1C] group-hover:text-[#185FA5] transition-colors duration-200">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-260 ease-in-out ${
            isOpen ? 'rotate-180 text-[#185FA5]' : ''
          }`}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
        className="overflow-hidden transition-all duration-260 ease-in-out"
      >
        <p className="mt-3 font-sans text-[13.5px] leading-relaxed text-gray-500">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function PatientResourcesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [showStickyCta, setShowStickyCta] = useState(false)

  // 1. Timer Logic (Summer Specials end of season countdown - Aug 31)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const currentYear = new Date().getFullYear()
      const difference = +new Date(`August 31, ${currentYear} 23:59:59`) - +new Date()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  // 2. Scroll Logic for Sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 3. Staggered Entrance Animation on Scroll (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        });
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('.animate-section')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  // Steps data for Section 2
  const steps = [
    {
      num: '01',
      title: 'Arrive stress-free',
      desc: 'Park directly on 400 W and stroll right into our clinic. No complicated buzzers or security checkpoints, just walk straight inside to our greeting desk.',
    },
    {
      num: '02',
      title: 'Easy check-in',
      desc: 'It only takes 2 minutes. We will already have your online forms ready and verified. Grab a complimentary water or tea while you wait.',
    },
    {
      num: '03',
      title: 'Digital X-Rays',
      desc: 'Completely painless and lightning-fast. Our digital imaging takes only 5 minutes while exposing you to 80% less radiation than traditional scans.',
    },
    {
      num: '04',
      title: 'Meet your doctor',
      desc: 'We sit down, look you in the eye, and discuss your health history. No rush, no clinical jargon — just an honest discussion about your teeth.',
    },
    {
      num: '05',
      title: 'Treatment plan',
      desc: 'We explain everything in plain English. We show you exact digital maps of your teeth so you know what we see. Absolutely zero sales pressure.',
    },
    {
      num: '06',
      title: 'Gentle cleaning',
      desc: 'If scheduled, our expert hygienists perform a refreshing, soft-touch cleaning designed to remove buildup without causing sensitivity.',
    },
    {
      num: '07',
      title: 'Back to your day',
      desc: 'We schedule any follow-ups, handle insurance claims directly for you, and send you out the door feeling fresh and confident.',
    },
  ]

  // FAQs data for Section 3
  const faqs = [
    {
      q: 'Do you take my insurance plan?',
      a: 'We accept and coordinate directly with most major PPO providers, including Delta Dental, Aetna, Cigna, Guardian, and MetLife. Our team files the claims so you do not have to deal with paperwork.',
    },
    {
      q: 'What if I do not have dental insurance?',
      a: 'We have you covered. We developed an In-House Dental Savings Membership plan that covers your cleanings, exams, and x-rays for a low annual fee, plus discounts on all treatments.',
    },
    {
      q: 'Do you offer monthly payment plans?',
      a: 'Yes. We partner with CareCredit to offer 6 to 12-month interest-free payment options, allowing you to pay for treatments gradually over time.',
    },
    {
      q: 'Is there a discount for cash payments?',
      a: 'Absolutely. We offer a 5% savings discount for treatments paid in full with cash or check at the time of service.',
    },
    {
      q: 'Will I have to pay anything on my first visit?',
      a: 'If you have insurance, we verify benefits in advance to keep out-of-pocket costs at zero. For non-insured patients, we offer our Free New Patient Exam special.',
    },
  ]

  // Forms data for Section 5
  const forms = [
    {
      name: 'New Patient Registration Form',
      desc: 'General registration, contact details, and initial medical history profile.',
      link: '#',
    },
    {
      name: 'Medical History Update',
      desc: 'Required annually for returning patients to update health records.',
      link: '#',
    },
    {
      name: 'Insurance Benefits Verification',
      desc: 'Submit your policy numbers ahead of time to help us estimate coverage.',
      link: '#',
    },
    {
      name: 'Patient Privacy & Consent Agreement',
      desc: 'Standard digital signature form detailing clinic privacy policies.',
      link: '#',
    },
  ]

  return (
    <>
      {/* Font & Animation Styles */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: `
        .font-editorial {
          font-family: 'Playfair Display', Georgia, serif;
        }
        .font-sans-clean {
          font-family: system-ui, -apple-system, sans-serif;
        }
        .animate-section {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />

      <main className="min-h-screen bg-white py-16 px-6 font-sans-clean">
        <div className="max-w-[860px] mx-auto">

          {/* ────────────────────────── SECTION 1: SPECIALS ────────────────────────── */}
          <section className="animate-section mb-20">
            <div className="text-center mb-8">
              <h2 className="font-editorial text-3xl md:text-4xl text-[#1C1C1C] font-semibold mb-2">
                Summer Specials
              </h2>
              <div className="text-sm font-sans-clean text-[#EF9F27] tracking-wider uppercase font-medium">
                Ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </div>
            </div>

            {/* Asymmetric Offers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              
              {/* Left Column - Large Hero Card */}
              <div className="md:col-span-3 relative h-[360px] rounded-[14px] overflow-hidden group shadow-md transition-transform duration-180 ease-out hover:scale-[1.03]">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=cover&w=800&q=80"
                  alt="Dental Office Interior"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 flex flex-col justify-end">
                  <h3 className="font-editorial text-2xl text-white font-bold leading-tight mb-2">
                    FREE New Patient Exam &amp; X-Rays
                  </h3>
                  <p className="text-white/80 text-xs mb-4">
                    For all first-time visitors without insurance. Discover your treatment outline risk-free.
                  </p>
                  <a
                    href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0"
                    className="inline-block self-start bg-[#185FA5] hover:bg-[#134B84] text-white text-xs font-semibold py-2.5 px-5 rounded-[6px] transition-colors"
                  >
                    Book this deal
                  </a>
                </div>
              </div>

              {/* Right Column - Stacked smaller cards */}
              <div className="md:col-span-2 flex flex-col gap-6">
                
                {/* Offer 2 */}
                <div className="relative h-[168px] rounded-[14px] overflow-hidden group shadow-md transition-transform duration-180 ease-out hover:scale-[1.03]">
                  <Image
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=cover&w=800&q=80"
                    alt="Dental cleaning tools"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5">
                    <h3 className="font-editorial text-lg text-white font-semibold leading-tight mb-1">
                      $99 New Patient Special
                    </h3>
                    <p className="text-white/80 text-[10px] mb-3 line-clamp-1">
                      Exam, Clean, X-Rays &amp; Cancer screening. No perio active.
                    </p>
                    <a
                      href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0"
                      className="inline-block bg-[#1D9E75] hover:bg-[#167d5c] text-white text-[10px] font-semibold py-1.5 px-3 rounded-[6px] transition-colors"
                    >
                      Get started
                    </a>
                  </div>
                </div>

                {/* Offer 3 */}
                <div className="relative h-[168px] rounded-[14px] overflow-hidden group shadow-md transition-transform duration-180 ease-out hover:scale-[1.03]">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=cover&w=800&q=80"
                    alt="Smile treatment"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5">
                    <h3 className="font-editorial text-lg text-white font-semibold leading-tight mb-1">
                      Free Whitening
                    </h3>
                    <p className="text-white/80 text-[10px] mb-3">
                      Comes with first cleaning for insured patients.
                    </p>
                    <a
                      href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0"
                      className="inline-block bg-[#185FA5] hover:bg-[#134B84] text-white text-[10px] font-semibold py-1.5 px-3 rounded-[6px] transition-colors"
                    >
                      Learn more
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Additional stacked smaller offers below */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              
              {/* Offer 4 */}
              <div className="relative h-[160px] rounded-[14px] overflow-hidden group shadow-md transition-transform duration-180 ease-out hover:scale-[1.03]">
                <Image
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=cover&w=800&q=80"
                  alt="Consult space"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="font-editorial text-base text-white font-semibold leading-tight mb-1">
                    Free Ortho Consultation
                  </h3>
                  <p className="text-white/80 text-[10px] mb-3">
                    Includes diagnostic scans &amp; teeth whitening package.
                  </p>
                  <a
                    href="tel:+18016107283"
                    className="inline-block bg-[#1D9E75] hover:bg-[#167d5c] text-white text-[10px] font-semibold py-1.5 px-3 rounded-[6px] transition-colors"
                  >
                    Call to confirm
                  </a>
                </div>
              </div>

              {/* Offer 5 */}
              <div className="relative h-[160px] rounded-[14px] overflow-hidden group shadow-md transition-transform duration-180 ease-out hover:scale-[1.03]">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=cover&w=800&q=80"
                  alt="Wisdom teeth check"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="font-editorial text-base text-white font-semibold leading-tight mb-1">
                    Wisdom Teeth Consult
                  </h3>
                  <p className="text-white/80 text-[10px] mb-3">
                    Free exam, panorex x-ray &amp; bonus take-home whitening.
                  </p>
                  <a
                    href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0"
                    className="inline-block bg-[#185FA5] hover:bg-[#134B84] text-white text-[10px] font-semibold py-1.5 px-3 rounded-[6px] transition-colors"
                  >
                    Learn more
                  </a>
                </div>
              </div>

              {/* Offer 6 */}
              <div className="relative h-[160px] rounded-[14px] overflow-hidden group shadow-md transition-transform duration-180 ease-out hover:scale-[1.03]">
                <Image
                  src="https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=cover&w=800&q=80"
                  alt="Friends smiling"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="font-editorial text-base text-white font-semibold leading-tight mb-1">
                    Refer-a-Friend Deals
                  </h3>
                  <p className="text-white/80 text-[10px] mb-3">
                    Both earn $25 credit after their first cleaning.
                  </p>
                  <a
                    href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0"
                    className="inline-block bg-[#1D9E75] hover:bg-[#167d5c] text-white text-[10px] font-semibold py-1.5 px-3 rounded-[6px] transition-colors"
                  >
                    Get started
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* ────────────────────────── SECTION 2: NEW PATIENT WELCOME ────────────────────────── */}
          <section className="animate-section mb-20 bg-[#F7F6F3] rounded-[14px] p-8 md:p-12">
            <h2 className="font-editorial text-3xl md:text-4xl text-[#1C1C1C] font-semibold text-center mb-10">
              Your first visit, explained.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              
              {/* Left Photo */}
              <div className="relative aspect-[4/5] rounded-[6px] overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=cover&w=800&q=80"
                  alt="Welcoming dentist greeting patient"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right Steps Timeline */}
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <span className="font-editorial text-lg text-[#1D9E75] font-semibold flex-shrink-0">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="font-sans-clean text-sm font-semibold text-[#1C1C1C] mb-1">
                        {step.title}
                      </h4>
                      <p className="font-sans-clean text-[13px] text-gray-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Badges footer */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center">
              <span className="font-sans-clean text-xs font-semibold text-[#1D9E75] border border-[#1D9E75]/30 bg-[#1D9E75]/5 px-4 py-2 rounded-full">
                😊 We welcome nervous patients
              </span>
              <span className="font-sans-clean text-xs font-semibold text-[#185FA5] border border-[#185FA5]/30 bg-[#185FA5]/5 px-4 py-2 rounded-full">
                🌐 Hablamos Español / Aceptamos Nuevos Pacientes
              </span>
            </div>
          </section>

          {/* ────────────────────────── SECTION 3: INSURANCE & FINANCING ────────────────────────── */}
          <section className="animate-section mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            
            {/* Left: Editorial Paragraph & Features */}
            <div>
              <h2 className="font-editorial text-3xl text-[#1C1C1C] font-semibold mb-5">
                Insurance &amp; Financing
              </h2>
              <p className="font-sans-clean text-sm text-gray-500 leading-relaxed mb-6">
                We work with most major insurance providers. If you do not have insurance, we have built options specifically for you — so cost is never a reason to avoid care.
              </p>
              <ul className="space-y-3">
                {[
                  'Major insurance accepted',
                  'Free second opinions',
                  'Flexible financing options',
                  'In-house savings membership'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-sans-clean text-sm text-[#1C1C1C]">
                    <span className="text-gray-400">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: FAQ Accordion */}
            <div className="bg-white rounded-[14px] border border-gray-200 p-6 shadow-sm">
              <h3 className="font-editorial text-lg font-semibold text-[#1C1C1C] mb-4">
                Common Questions
              </h3>
              <div>
                {faqs.map((faq, index) => (
                  <FAQAccordionItem
                    key={index}
                    q={faq.q}
                    a={faq.a}
                    isOpen={openFaqIndex === index}
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  />
                ))}
              </div>
            </div>

          </section>

          {/* ────────────────────────── SECTION 4: HOURS & LOCATION ────────────────────────── */}
          <section className="animate-section mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Card: Hours */}
            <div className="rounded-[0px] border border-gray-200 p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-editorial text-xl text-[#1C1C1C] font-semibold mb-6">
                  Clinic Hours
                </h3>
                <table className="w-full font-sans-clean text-sm text-gray-600 mb-6">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2.5 font-medium">Mon, Tue &amp; Fri</td>
                      <td className="py-2.5 text-right">9:00 am – 6:00 pm</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2.5 font-medium">Thursday</td>
                      <td className="py-2.5 text-right">8:00 am – 5:00 pm</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2.5 font-medium">Wednesday</td>
                      <td className="py-2.5 text-right text-gray-400">Closed</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2.5 font-medium">Saturday</td>
                      <td className="py-2.5 text-right text-gray-400">Closed</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium">Sunday</td>
                      <td className="py-2.5 text-right text-gray-400">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-[#EF9F27]/10 border border-[#EF9F27]/30 text-[#EF9F27] text-xs font-semibold rounded-[6px]">
                Dental emergency? Call first. We see same-day when we can.
              </div>
            </div>

            {/* Right Card: Location & Interactive Map */}
            <div className="rounded-[0px] border border-gray-200 p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-editorial text-xl text-[#1C1C1C] font-semibold mb-4">
                  Our Location
                </h3>
                
                {/* Embedded Google Map iframe showing the actual clinic */}
                <div className="relative aspect-video rounded-[6px] overflow-hidden mb-6 shadow-inner border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.883713028212!2d-111.70846742398436!3d40.29991407142024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d8441af9d140f%3A0x6744888566f1767d!2sPrestige%20Smiles%20Dental!5e0!3m2!1sen!2sus!4v1716584288000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
                  <a
                    href="https://www.google.com/maps/dir/26.853376,80.9435136/Prestige+Smiles+Dental,+163+N+400+W+St+A1,+Orem,+UT+84057,+United+States/@40.0183423,-112.1046872,7.5z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x874d8441af9d140f:0x6744888566f1767d!2m2!1d-111.7058925!2d40.29991?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
                    className="absolute bottom-3 right-3 bg-white hover:bg-gray-100 text-primary-blue text-xs font-semibold py-2 px-4 rounded-lg shadow-md transition flex items-center gap-1.5 z-10"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Get Directions
                  </a>
                </div>

                <div className="space-y-2.5 font-sans-clean text-sm">
                  <div className="flex gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-[#1D9E75] flex-shrink-0 mt-0.5" />
                    <a
                      href="https://www.google.com/maps/dir/26.853376,80.9435136/Prestige+Smiles+Dental,+163+N+400+W+St+A1,+Orem,+UT+84057,+United+States/@40.0183423,-112.1046872,7.5z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x874d8441af9d140f:0x6744888566f1767d!2m2!1d-111.7058925!2d40.29991?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
                      className="hover:underline text-[#185FA5]"
                    >
                      163 N 400 W St A1, Orem, UT 84057
                    </a>
                  </div>
                  <div className="flex gap-2 text-gray-600">
                    <Phone className="w-4 h-4 text-[#1D9E75] flex-shrink-0 mt-0.5" />
                    <a href="tel:+18016107283" className="hover:underline text-[#185FA5] font-semibold">
                      (801) 610-7283
                    </a>
                  </div>
                  <div className="flex gap-2 text-gray-600">
                    <Mail className="w-4 h-4 text-[#1D9E75] flex-shrink-0 mt-0.5" />
                    <a href="mailto:Info@utprestige.com" className="hover:underline text-[#185FA5]">
                      Info@utprestige.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* ────────────────────────── SECTION 5: DOWNLOADABLE FORMS ────────────────────────── */}
          <section className="animate-section mb-20 relative rounded-[14px] overflow-hidden border border-gray-200/60 bg-[#F7F6F3] p-8 md:p-12">
            
            {/* Soft Blurred Dental Background Overlay */}
            <div className="absolute inset-0 z-0 opacity-15 pointer-events-none filter blur-sm">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=cover&w=800&q=80"
                alt="Dental equipment"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10">
              <h2 className="font-editorial text-2xl md:text-3xl text-[#1C1C1C] font-semibold mb-3">
                Save time. Complete your forms before you arrive.
              </h2>
              <p className="font-sans-clean text-sm text-gray-500 mb-8 max-w-xl leading-relaxed">
                Download and print PDFs at home, or complete them digitally to speed up check-in when you arrive at our desk.
              </p>

              <div className="divide-y divide-gray-200">
                {forms.map((form) => (
                  <div key={form.name} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#185FA5] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-sans-clean text-sm font-semibold text-[#1C1C1C]">
                          {form.name}
                        </h4>
                        <p className="font-sans-clean text-[12px] text-gray-500">
                          {form.desc}
                        </p>
                      </div>
                    </div>
                    <a
                      href={form.link}
                      className="inline-flex self-start sm:self-center items-center gap-1.5 bg-[#185FA5] hover:bg-[#134B84] text-white text-xs font-semibold py-2 px-4 rounded-[6px] transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Sticky Appointment CTA */}
      {showStickyCta && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
          <a
            href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0"
            className="flex items-center gap-2 px-6 py-3 bg-[#1D9E75] hover:bg-[#167d5c] text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-2xl transition-all duration-300"
          >
            <CalendarDays className="w-4 h-4" />
            Schedule Appointment
          </a>
        </div>
      )}
    </>
  )
}
