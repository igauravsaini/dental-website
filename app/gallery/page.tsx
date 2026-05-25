'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { ZoomIn } from 'lucide-react'

const gallery = [
  { id: 1, category: 'Implants', title: 'Single Implant Restoration', before: true },
  { id: 2, category: 'Implants', title: 'Full Mouth Implants', before: false },
  { id: 3, category: 'Whitening', title: 'Professional Teeth Whitening', before: true },
  { id: 4, category: 'Whitening', title: 'Brightened Smile', before: false },
  { id: 5, category: 'Cosmetic', title: 'Veneers Application', before: true },
  { id: 6, category: 'Cosmetic', title: 'Complete Smile Makeover', before: false },
  { id: 7, category: 'Braces', title: 'Orthodontic Treatment Start', before: true },
  { id: 8, category: 'Braces', title: 'Perfect Alignment Result', before: false },
]

const categories = ['All', 'Implants', 'Whitening', 'Cosmetic', 'Braces']

export default function Gallery() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? gallery : gallery.filter(item => item.category === filter)

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
                Before & After Gallery
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                See the incredible transformations we've achieved for our patients
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {categories.map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  variant={filter === cat ? 'default' : 'outline'}
                  className={`${
                    filter === cat
                      ? 'bg-primary-blue hover:bg-blue-700 text-white'
                      : 'border-primary-blue text-primary-blue hover:bg-primary-blue/5'
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-blue/20 via-secondary-cyan/20 to-accent-green/20 aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition duration-300" />
                    </div>
                    <div className="text-center z-10">
                      <p className="text-sm font-semibold text-primary-blue mb-2">
                        {item.before ? 'Before' : 'After'}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">{item.title}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">{item.category}</p>
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
                Ready for Your Transformation?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Let us help you achieve your dream smile
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-primary-blue h-14 px-8"
              >
                <a href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
