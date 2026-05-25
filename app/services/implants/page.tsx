'use client'

import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

export default function DentalImplants() {
  return (
    <>
      <TopInfoBar />
      <Navbar forceSolid={true} />
      <main className="min-h-screen bg-[#FAFAF8] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C8A46B] font-semibold text-[0.9rem] tracking-[0.22em] uppercase mb-4">Services</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-8 leading-tight">
              Dental Implants
            </h1>
            <div className="w-16 h-[2px] bg-[#C8A46B] mb-8" />
            
            <p className="text-[1.15rem] text-gray-700 leading-relaxed mb-8 font-light max-w-3xl">
              Dental implants are the best solution for missing teeth — permanent, natural-feeling, and life-changing. Our dentist is a diplomat in implantology and teaches implant placement to other dentists worldwide. We offer single tooth implants, implant bridges, snap-in overdentures, and full arch All-on-4 and All-on-6 screw-retained implant dentures. Every implant case includes a free consultation and a free 3D CT scan. Patients report that implants transformed their confidence and ability to eat their favorite foods again.
            </p>
            
            <a 
              href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C8A46B] hover:bg-[#b8935f] text-black font-semibold text-xs tracking-[0.18em] uppercase rounded transition-all duration-300 shadow-sm"
            >
              Book Your Free Visit
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
