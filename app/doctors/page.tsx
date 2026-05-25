'use client'

import { motion } from 'framer-motion'
import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Link from 'next/link'

const doctors = [
  {
    id: 'dr-smith',
    name: 'Dr. Sarah Smith',
    specialization: 'Cosmetic & General Dentistry',
    experience: '18 years',
    rating: 4.9,
    bio: 'Specializes in smile design and full mouth restoration. Dr. Smith is a graduate of Harvard Dental School and has trained extensively in advanced cosmetic procedures.',
    education: 'DDS - Harvard Dental School',
    certifications: ['American Board of Cosmetic Dentistry', 'Invisalign Premier Provider'],
  },
  {
    id: 'dr-johnson',
    name: 'Dr. Michael Johnson',
    specialization: 'Orthodontist',
    experience: '15 years',
    rating: 4.8,
    bio: 'Expert in braces and clear aligners with a passion for creating beautiful smiles. Dr. Johnson has treated over 5,000 patients with outstanding results.',
    education: 'DDS - NYU College of Dentistry, MS - Orthodontics',
    certifications: ['American Board of Orthodontics', 'Certified Invisalign Provider'],
  },
  {
    id: 'dr-williams',
    name: 'Dr. Emily Williams',
    specialization: 'Pediatric Dentistry',
    experience: '12 years',
    rating: 4.9,
    bio: 'Dedicated to providing gentle, compassionate care for children. Dr. Williams specializes in creating positive dental experiences for young patients.',
    education: 'DDS - University of Pennsylvania, Pediatric Dentistry Certificate',
    certifications: ['American Academy of Pediatric Dentistry', 'Certified Sedation Provider'],
  },
  {
    id: 'dr-brown',
    name: 'Dr. David Brown',
    specialization: 'Implant & Oral Surgery',
    experience: '20 years',
    rating: 4.8,
    bio: 'Advanced implant surgery specialist with expertise in complex surgical cases. Dr. Brown has successfully placed over 10,000 implants.',
    education: 'DDS - Columbia University, Oral Surgery Certificate',
    certifications: ['American Board of Oral and Maxillofacial Surgery', 'Implant Surgeon Specialist'],
  },
]

export default function Doctors() {
  return (
    <>
      <TopInfoBar />
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-poppins font-bold text-text-dark dark:text-white mb-6">
                Our Dental Team
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Meet our experienced and compassionate dental professionals
              </p>
            </motion.div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-soft-xl transition">
                    <div className="grid grid-cols-3 gap-4 p-8">
                      {/* Image Area */}
                      <div className="col-span-1">
                        <div className="aspect-square bg-gradient-to-br from-primary-blue/20 via-secondary-cyan/20 to-accent-green/20 rounded-xl flex items-center justify-center">
                          <svg className="w-16 h-16 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      {/* Info Area */}
                      <div className="col-span-2">
                        <h3 className="text-2xl font-poppins font-bold text-text-dark dark:text-white mb-1">
                          {doctor.name}
                        </h3>
                        <p className="text-primary-blue font-semibold mb-2">{doctor.specialization}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{doctor.experience} Experience</p>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{doctor.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="px-8 pb-6 border-t border-gray-200 dark:border-slate-700">
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{doctor.bio}</p>
                      
                      {/* Education */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-text-dark dark:text-white mb-2">Education</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{doctor.education}</p>
                      </div>

                      {/* Certifications */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-text-dark dark:text-white mb-2">Certifications</p>
                        <ul className="space-y-1">
                          {doctor.certifications.map((cert, i) => (
                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400">• {cert}</li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        asChild
                        className="w-full bg-primary-blue hover:bg-blue-700 text-white"
                      >
                        <Link href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0" target="_blank" rel="noopener noreferrer">Schedule Consultation</Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-blue to-blue-600 dark:from-primary-blue dark:to-blue-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-poppins font-bold text-white mb-6">
                Choose Your Perfect Doctor
              </h2>
              <p className="text-white/90 text-lg mb-8">
                All our dentists are available for consultations
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-primary-blue h-14 px-8"
              >
                <Link href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0" target="_blank" rel="noopener noreferrer">Book Now</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
