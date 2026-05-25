'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(801) 226-1080',
      link: 'tel:+18012261080',
      subtext: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@utprestige.com',
      link: 'mailto:info@utprestige.com',
      subtext: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '163 N 400 W St A1',
      link: 'https://www.google.com/maps/dir/26.853376,80.9435136/Prestige+Smiles+Dental,+163+N+400+W+St+A1,+Orem,+UT+84057,+United+States/@40.0183423,-112.1046872,7.5z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x874d8441af9d140f:0x6744888566f1767d!2m2!1d-111.7058925!2d40.29991?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D',
      subtext: 'Orem, UT 84057'
    },
    {
      icon: Clock,
      title: 'Emergency',
      details: '(801) 226-1080',
      link: 'tel:+18012261080',
      subtext: 'Available 24/7'
    },
  ]

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
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Have questions? We'd love to hear from you. Contact us today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 text-center hover:shadow-soft-xl transition">
                      <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary-blue" />
                      </div>
                      <h3 className="font-poppins font-bold text-text-dark dark:text-white mb-2">
                        {info.title}
                      </h3>
                      <a href={info.link} className="text-primary-blue font-semibold mb-1 block hover:underline">{info.details}</a>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{info.subtext}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900">
                  <h2 className="text-2xl font-poppins font-bold text-text-dark dark:text-white mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="border-gray-300 dark:border-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="border-gray-300 dark:border-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(212) 555-1234"
                        className="border-gray-300 dark:border-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message here..."
                        rows={5}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 dark:text-white"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary-blue hover:bg-blue-700 text-white h-12"
                    >
                      {submitted ? 'Message Sent!' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 h-full flex flex-col">
                  <h2 className="text-2xl font-poppins font-bold text-text-dark dark:text-white mb-6">
                    Visit Our Clinic
                  </h2>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-inner group border border-gray-100 dark:border-slate-700">
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
                  <div className="space-y-4 flex-grow">
                    <div>
                      <p className="text-sm font-semibold text-text-dark dark:text-white mb-1">Location</p>
                      <a
                        href="https://www.google.com/maps/dir/26.853376,80.9435136/Prestige+Smiles+Dental,+163+N+400+W+St+A1,+Orem,+UT+84057,+United+States/@40.0183423,-112.1046872,7.5z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x874d8441af9d140f:0x6744888566f1767d!2m2!1d-111.7058925!2d40.29991?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-blue transition hover:underline"
                      >
                        163 N 400 W St A1, Orem, UT 84057
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-dark dark:text-white mb-1">Hours</p>
                      <p className="text-gray-600 dark:text-gray-400">Monday, Tuesday &amp; Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 dark:text-gray-400">Thursday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600 dark:text-gray-400">Wednesday, Saturday &amp; Sunday: Closed</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-dark dark:text-white mb-1">Parking</p>
                      <p className="text-gray-600 dark:text-gray-400">Free parking available in the building garage</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
