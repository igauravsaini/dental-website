'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CalendarIcon, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react'
import { useState as useStateTwo } from 'react'

export default function BookAppointment() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    doctor: '',
    date: '',
    time: '',
    notes: '',
  })

  const services = [
    'Dental Implants',
    'Invisalign',
    'Braces',
    'Teeth Whitening',
    'Root Canal',
    'Cosmetic Dentistry',
    'Pediatric Dentistry',
    'Emergency Care',
  ]

  const doctors = [
    'Dr. Sarah Smith',
    'Dr. Michael Johnson',
    'Dr. Emily Williams',
    'Dr. David Brown',
  ]

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <TopInfoBar />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 py-12">
        <div className="max-w-4xl mx-auto px-4">
          {!submitted ? (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-poppins font-bold text-text-dark dark:text-white mb-4">
                  Book Your Appointment
                </h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Schedule a convenient time to visit our clinic and receive expert dental care
                </p>
              </motion.div>

              {/* Steps Indicator */}
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                          step >= s
                            ? 'bg-primary-blue text-white'
                            : 'bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {s}
                      </div>
                      {s < 4 && (
                        <div
                          className={`flex-1 h-1 mx-2 rounded transition ${
                            step > s ? 'bg-primary-blue' : 'bg-gray-200 dark:bg-slate-700'
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-sm">
                  <span className={step >= 1 ? 'text-primary-blue font-medium' : 'text-gray-600'}>Personal Info</span>
                  <span className={step >= 2 ? 'text-primary-blue font-medium' : 'text-gray-600'}>Service</span>
                  <span className={step >= 3 ? 'text-primary-blue font-medium' : 'text-gray-600'}>Date & Time</span>
                  <span className={step >= 4 ? 'text-primary-blue font-medium' : 'text-gray-600'}>Confirmation</span>
                </div>
              </div>

              {/* Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-0 bg-white dark:bg-slate-800 shadow-soft-lg p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Personal Information */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-poppins font-bold text-text-dark dark:text-white mb-6">
                          Personal Information
                        </h3>
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name</label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                            className="border-gray-300 dark:border-slate-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email Address</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            required
                            className="border-gray-300 dark:border-slate-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(212) 555-1234"
                            required
                            className="border-gray-300 dark:border-slate-600"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Service Selection */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-poppins font-bold text-text-dark dark:text-white mb-6">
                          Select Service
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {services.map((svc) => (
                            <label
                              key={svc}
                              className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                                formData.service === svc
                                  ? 'border-primary-blue bg-primary-blue/5'
                                  : 'border-gray-200 dark:border-slate-600 hover:border-primary-blue'
                              }`}
                            >
                              <input
                                type="radio"
                                name="service"
                                value={svc}
                                checked={formData.service === svc}
                                onChange={handleInputChange}
                                className="mr-2"
                              />
                              {svc}
                            </label>
                          ))}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Select Doctor</label>
                          <select
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 dark:text-white"
                          >
                            <option value="">Choose a doctor...</option>
                            {doctors.map((doc) => (
                              <option key={doc} value={doc}>
                                {doc}
                              </option>
                            ))}
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Date and Time */}
                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-poppins font-bold text-text-dark dark:text-white mb-6">
                          Choose Date & Time
                        </h3>
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Date</label>
                          <Input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                            className="border-gray-300 dark:border-slate-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-4">Select Time Slot</label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {timeSlots.map((time) => (
                              <label
                                key={time}
                                className={`p-3 text-center border-2 rounded-lg cursor-pointer transition ${
                                  formData.time === time
                                    ? 'border-primary-blue bg-primary-blue/5 font-medium text-primary-blue'
                                    : 'border-gray-200 dark:border-slate-600 hover:border-primary-blue'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="time"
                                  value={time}
                                  checked={formData.time === time}
                                  onChange={handleInputChange}
                                  className="hidden"
                                />
                                {time}
                              </label>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Confirmation */}
                    {step === 4 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-poppins font-bold text-text-dark dark:text-white mb-6">
                          Additional Notes
                        </h3>
                        <div>
                          <label className="block text-sm font-medium mb-2">Any Additional Information?</label>
                          <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder="Tell us about any specific concerns or preferences..."
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 dark:text-white"
                          />
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-primary-blue/20">
                          <p className="font-poppins font-bold text-text-dark dark:text-white mb-3">Appointment Summary:</p>
                          <div className="space-y-2 text-sm">
                            <p><span className="font-medium">Name:</span> {formData.name}</p>
                            <p><span className="font-medium">Email:</span> {formData.email}</p>
                            <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                            <p><span className="font-medium">Service:</span> {formData.service}</p>
                            <p><span className="font-medium">Doctor:</span> {formData.doctor}</p>
                            <p><span className="font-medium">Date:</span> {formData.date}</p>
                            <p><span className="font-medium">Time:</span> {formData.time}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 pt-6">
                      {step > 1 && (
                        <Button
                          type="button"
                          onClick={() => setStep(step - 1)}
                          variant="outline"
                          className="flex-1 border-primary-blue text-primary-blue hover:bg-primary-blue/5"
                        >
                          Previous
                        </Button>
                      )}
                      {step < 4 && (
                        <Button
                          type="button"
                          onClick={() => setStep(step + 1)}
                          disabled={
                            (step === 1 && (!formData.name || !formData.email || !formData.phone)) ||
                            (step === 2 && (!formData.service || !formData.doctor)) ||
                            (step === 3 && (!formData.date || !formData.time))
                          }
                          className="flex-1 bg-primary-blue hover:bg-blue-700 text-white"
                        >
                          Next
                        </Button>
                      )}
                      {step === 4 && (
                        <Button
                          type="submit"
                          className="flex-1 bg-primary-blue hover:bg-blue-700 text-white"
                        >
                          Confirm Appointment
                        </Button>
                      )}
                    </div>
                  </form>
                </Card>
              </motion.div>
            </>
          ) : (
            /* Success Message */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Card className="border-0 bg-white dark:bg-slate-800 shadow-soft-lg p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-poppins font-bold text-text-dark dark:text-white mb-4">
                  Appointment Confirmed!
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We have received your appointment request. A confirmation email has been sent to <span className="font-medium">{formData.email}</span>
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6 text-left">
                  <p className="text-sm font-medium text-text-dark dark:text-white mb-2">Appointment Details:</p>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <p>{formData.service} • {formData.doctor}</p>
                    <p>{formData.date} at {formData.time}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  If you need to reschedule or cancel, please contact us at (212) 555-1234
                </p>
                <Button
                  asChild
                  className="w-full bg-primary-blue hover:bg-blue-700 text-white"
                >
                  <a href="/">Return to Home</a>
                </Button>
              </Card>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
