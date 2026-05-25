'use client'

import { motion } from 'framer-motion'
import { Users, ShieldCheck, Gem, Sparkles, BadgeCheck, HeartHandshake } from 'lucide-react'
import { Phone } from 'lucide-react'
import { CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, Award, Heart, Smile } from 'lucide-react'

export function HeroSection() {
  const PatientCareIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M6 5C6 3.5 7.5 2 9.5 2S12 3 12 3s.5-1 2.5-1S18 3.5 18 5c0 4 .5 5.5 2.5 7.5C21 13 21 14 20.5 15.5c-1 3-2 5.5-3 6.5s-2 1-3.5 0c-.8-.6-1-1.5-1-2.5V18c0-.6-.4-1-1-1s-1 .4-1 1v1.5c0 1-.2 1.9-1 2.5-1.5 1-2.5 1-3.5 0s-2-3.5-3-6.5C3 14 3 13 3.5 12.5 5.5 10.5 6 9 6 5Z" />
    </svg>
  )
  const features = [
    { icon: Users, label: 'Experienced\nTeam' },
    { icon: ShieldCheck, label: 'Advanced\nTechnology' },
    { icon: Gem, label: 'Comfortable\nEnvironment' },
    { icon: PatientCareIcon, label: 'Patient \nFocused Care' },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden ">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-section.webp"
          alt="Luxury Dental Clinic"
          fill
          priority
          className="object-cover object-right brightness-[1.15] contrast-[1.08] saturate-[1.15]"
        />

  {/* Soft dark overlay */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Left cinematic gradient */}
  <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />

  {/* Golden glow */}
  <div className="absolute left-[28%] top-0 h-full w-[400px] bg-[#C8A46B]/20 blur-[120px]" />

  {/* Bottom cinematic shading */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
  <div className="absolute left-[35%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#f6d28f]/25 blur-[160px]" />
</div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 flex items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl ml-0 lg:ml-6"
        >
        <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[4rem] md:text-[5.2rem] lg:text-[6.3rem] 
              leading-[0.95] 
              tracking-[-0.03em] 
              font-serif 
              font-medium 
              text-white 
              mb-12"
            > 
              Exceptional Care.
              <br />
              <span className="text-[#C8A46B]">Beautiful Results.</span>
            </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[1.45rem] md:text-[1.6rem] 
            leading-[1.8] 
            text-gray-200 
            mb-12 
            max-w-[500px]
            font-semibold
             tracking-wide"
          >
            
            Advanced dental care in a comfortable,
            <br />
            high-end environment. We're here to
            <br /> 
             
            help you smile with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-12"
            
          >
            <Button
              asChild
              className="
              bg-[#C8A46B] 
              hover:bg-[#b8935f]
              text-black
              rounded-md
              px-[26px]
              text-[1.25rem]
              font-semibold
              tracking-wide
              uppercase
              transition-all
              duration-300
              shadow-[0_0_30px_rgba(200,164,107,0.15)]"
            >
              <Link href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-[320px] h-[69px]"
              >
              <CalendarDays className="min-w-[30px] min-h-[30px] w-[30px] h-[30px] mr-3 shrink-0" />
              
              <span>Book Appointment</span>
              </Link>
              </Button>
              
              
            
            <Button
              asChild
              className="
              border
              border-[#C8A46B]
              text-white
              bg-black/20
              backdrop-blur-sm
              rounded-md
              px-[26px]
              text-[1.25rem]
              font-semibold
              tracking-wide
              uppercase
              hover:bg-[#C8A46B]/10
              transition-all
              duration-300
              "
            >
              <a href="tel:+18012261080" className="flex items-center justify-center w-[320px] h-[69px]">
              <Phone className="min-w-[30px] min-h-[30px] w-[30px] h-[30px] mr-3 shrink-0" />
              (801) 226-1080
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-start justify-between gap-16 pt-20"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <feature.icon
                  className="w-[52px] h-[52px] text-[#C8A46B] mb-4 drop-shadow-[0_0_12px_rgba(200,164,107,0.35)]"
                /> 
                <span className="
                  text-[1.25rem]
                  md:text-[1.35rem]
                  font-semibold
                  leading-[1.5]
                  tracking-wide
                  text-gray-200
                  text-center
                  max-w-[170px]
                  ">{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
