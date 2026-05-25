'use client'

import { motion } from 'framer-motion'
import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Check } from 'lucide-react'
import Link from 'next/link'

const insuranceProviders = [
  'Cigna', 'Blue Shield', 'Aetna', 'Delta Dental', 'United Healthcare',
  'Humana', 'MetLife', 'Guardian', 'Principal', 'CIGNA',
]

const coverageInfo = [
  {
    title: 'Preventive Care',
    percentage: '100%',
    description: 'Cleanings, exams, and X-rays',
  },
  {
    title: 'Basic Restorative',
    percentage: '80%',
    description: 'Fillings and extractions',
  },
  {
    title: 'Major Restorative',
    percentage: '50%',
    description: 'Crowns, bridges, and root canals',
  },
  {
    title: 'Orthodontics',
    percentage: '50%',
    description: 'Braces and aligners',
  },
]

export default function Insurance() {
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
                Insurance & Coverage
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We accept most major insurance plans and can help maximize your benefits
              </p>
            </motion.div>
          </div>
        </section>

        {/* Insurance Providers */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-poppins font-bold text-text-dark dark:text-white mb-4">
                Insurance Plans We Accept
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We work with most major insurance providers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {insuranceProviders.map((provider, index) => (
                <Card
                  key={index}
                  className="p-6 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-center hover:shadow-soft-lg transition"
                >
                  <p className="font-semibold text-text-dark dark:text-white">{provider}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Coverage Info */}
        <section className="py-20 bg-gray-50 dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-poppins font-bold text-text-dark dark:text-white mb-4">
                Typical Coverage Levels
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coverageInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 border-0 bg-white dark:bg-slate-800">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-poppins font-bold text-text-dark dark:text-white">
                        {info.title}
                      </h3>
                      <span className="text-2xl font-bold text-primary-blue">{info.percentage}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{info.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-poppins font-bold text-text-dark dark:text-white mb-6">
                  How We Help Maximize Your Benefits
                </h2>
                <ul className="space-y-4">
                  {[
                    'Verify your insurance coverage before treatment',
                    'Handle all insurance claims and paperwork',
                    'Provide detailed treatment cost estimates',
                    'Explain your coverage and out-of-pocket costs',
                    'Work with your insurance company on appeals if needed',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-primary-blue/20">
                  <div className="flex items-start gap-4 mb-6">
                    <Shield className="w-8 h-8 text-primary-blue flex-shrink-0" />
                    <div>
                      <h3 className="font-poppins font-bold text-text-dark dark:text-white mb-2">
                        Our Insurance Specialists
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Our team is well-versed in navigating insurance requirements and can help ensure you get the maximum benefit from your coverage.
                      </p>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-primary-blue hover:bg-blue-700 text-white">
                    <Link href="/contact">Contact Insurance Specialist</Link>
                  </Button>
                </Card>
              </motion.div>
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
                Questions About Your Coverage?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Let our insurance specialists help you understand your benefits
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-primary-blue h-14 px-8"
              >
                <Link href="/contact">Get Help Today</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
