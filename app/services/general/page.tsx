'use client'

import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

export default function GeneralDentistry() {
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
              General Dentistry
            </h1>
            <div className="w-16 h-[2px] bg-[#C8A46B] mb-8" />
            
            <p className="text-[1.15rem] text-gray-700 leading-relaxed mb-8 font-light max-w-3xl">
              Our experienced hygienists are among the gentlest you will ever meet. Preventive care is our top priority — regular exams, digital x-rays, cleanings, and oral cancer screenings every six months as recommended by the American Dental Association. We also offer composite white fillings, dental crowns, porcelain fixed bridges, emergency dentistry, and periodontal disease treatment. Most patients are in and out in under an hour. New patients receive a free exam and x-rays on their first visit.
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
