'use client'

import { motion } from 'framer-motion'
import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Standard Plan',
    description: 'For basic dental work',
    price: '0%',
    terms: '12 months',
    features: [
      'Up to $2,000',
      'No interest for 12 months',
      'Easy online approval',
      'Flexible payment options',
    ],
  },
  {
    name: 'Premium Plan',
    description: 'For major procedures',
    price: '0%',
    terms: '24 months',
    features: [
      'Up to $10,000',
      'No interest for 24 months',
      'Fast approval',
      'Extended payment terms',
      'Dedicated support',
    ],
    featured: true,
  },
  {
    name: 'Elite Plan',
    description: 'For comprehensive care',
    price: '2.9%',
    terms: '36 months',
    features: [
      'Unlimited amount',
      'Extended financing',
      'Rewards program',
      'Priority customer service',
      'Annual review',
    ],
  },
]

export default function Financing() {
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
                Flexible Financing Options
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Make your dental care affordable with our flexible payment plans
              </p>
            </motion.div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`overflow-hidden border-0 h-full flex flex-col ${
                    plan.featured
                      ? 'bg-primary-blue text-white shadow-soft-xl scale-105'
                      : 'bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900'
                  }`}>
                    <div className="p-8 flex-grow">
                      <h3 className={`text-2xl font-poppins font-bold mb-2 ${plan.featured ? '' : 'text-text-dark dark:text-white'}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-sm mb-6 ${plan.featured ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                        {plan.description}
                      </p>
                      <div className="mb-6">
                        <span className="text-4xl font-poppins font-bold">{plan.price}</span>
                        <span className={`ml-2 ${plan.featured ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                          APR
                        </span>
                      </div>
                      <p className={`text-sm font-medium mb-6 ${plan.featured ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                        Up to {plan.terms}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? '' : 'text-primary-blue'}`} />
                            <span className={plan.featured ? '' : 'text-gray-600 dark:text-gray-400'}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-8 pt-0">
                      <Button
                        asChild
                        className={`w-full h-12 ${
                          plan.featured
                            ? 'bg-white hover:bg-gray-100 text-primary-blue'
                            : 'bg-primary-blue hover:bg-blue-700 text-white'
                        }`}
                      >
                        <Link href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0" target="_blank" rel="noopener noreferrer">Get Started</Link>
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
                Ready to Start Your Treatment?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Apply for financing and get approved in minutes
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-primary-blue h-14 px-8"
              >
                <Link href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0" target="_blank" rel="noopener noreferrer">Apply Now</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
