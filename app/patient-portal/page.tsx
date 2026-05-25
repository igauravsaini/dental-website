'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, FileText, Download, Bell, Settings, LogOut, Clock, MapPin, User, DollarSign } from 'lucide-react'
import Link from 'next/link'

const appointments = [
  {
    id: 1,
    service: 'Dental Implant Consultation',
    doctor: 'Dr. David Brown',
    date: '2024-02-15',
    time: '2:00 PM',
    status: 'Upcoming',
    location: 'Room 201',
  },
  {
    id: 2,
    service: 'Teeth Whitening',
    doctor: 'Dr. Sarah Smith',
    date: '2024-01-20',
    time: '10:00 AM',
    status: 'Completed',
    location: 'Room 101',
  },
]

const invoices = [
  { id: 1, date: '2024-01-15', amount: '$450', service: 'Teeth Whitening', status: 'Paid' },
  { id: 2, date: '2024-01-10', amount: '$2,500', service: 'Dental Implant', status: 'Pending' },
  { id: 3, date: '2023-12-20', amount: '$150', service: 'Checkup & Cleaning', status: 'Paid' },
]

const prescriptions = [
  { id: 1, name: 'Amoxicillin 500mg', dosage: '1 tablet 3x daily', date: '2024-01-15', notes: 'Take with food' },
  { id: 2, name: 'Pain Relief (Ibuprofen)', dosage: '200mg as needed', date: '2024-01-10', notes: 'For post-procedure pain' },
]

const tabVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
}

export default function PatientPortal() {
  const [activeTab, setActiveTab] = useState('appointments')

  const tabs = [
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'invoices', label: 'Invoices', icon: DollarSign },
    { id: 'prescriptions', label: 'Prescriptions', icon: FileText },
    { id: 'records', label: 'Medical Records', icon: FileText },
  ]

  return (
    <>
      <TopInfoBar />
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 pb-12" style={{ paddingTop: '175px' }}>
          <div
            className="sticky z-40 mb-8 rounded-4xl border border-slate-200/70 bg-white/95 p-6 shadow-2xl backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/95"
            style={{ top: '95px' }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h1 className="text-4xl font-serif font-semibold text-text-dark dark:text-white sm:text-5xl">
                  Patient Portal
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-base sm:text-lg">
                  Welcome back, John Doe
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="icon" className="border-gray-300 dark:border-slate-600">
                  <Bell className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-gray-300 dark:border-slate-600">
                  <Settings className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 dark:border-red-600 dark:hover:bg-red-900/20">
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6"
            >
              <div className="overflow-x-auto">
                <div className="flex gap-4 border-b border-gray-200 dark:border-slate-700" style={{ minWidth: '520px' }}>
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-3 font-medium flex items-center gap-2 transition border-b-2 ${
                          activeTab === tab.id
                            ? 'text-primary-blue border-primary-blue'
                            : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-primary-blue'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {tab.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4 }}
          >
            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div className="space-y-4">
                {appointments.map((apt, index) => (
                  <motion.div
                    key={apt.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="p-6 border-0 bg-white dark:bg-slate-800">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-poppins font-bold text-text-dark dark:text-white mb-3">
                            {apt.service}
                          </h3>
                          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <p className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              {apt.doctor}
                            </p>
                            <p className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {new Date(apt.date).toLocaleDateString()}
                            </p>
                            <p className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {apt.time}
                            </p>
                            <p className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {apt.location}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            apt.status === 'Upcoming'
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                              : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          }`}>
                            {apt.status}
                          </span>
                          {apt.status === 'Upcoming' && (
                            <Button size="sm" className="bg-primary-blue hover:bg-blue-700 text-white">
                              Reschedule
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Invoices Tab */}
            {activeTab === 'invoices' && (
              <div className="space-y-4">
                {invoices.map((inv, index) => (
                  <motion.div
                    key={inv.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="p-6 border-0 bg-white dark:bg-slate-800">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-text-dark dark:text-white">{inv.service}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{inv.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-text-dark dark:text-white">{inv.amount}</p>
                          <span className={`text-xs font-semibold px-2 py-1 rounded ${
                            inv.status === 'Paid'
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30'
                              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30'
                          }`}>
                            {inv.status}
                          </span>
                        </div>
                        <Button size="sm" variant="outline" className="ml-4">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Prescriptions Tab */}
            {activeTab === 'prescriptions' && (
              <div className="space-y-4">
                {prescriptions.map((rx, index) => (
                  <motion.div
                    key={rx.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="p-6 border-0 bg-white dark:bg-slate-800">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-poppins font-bold text-text-dark dark:text-white">{rx.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Dosage: {rx.dosage}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Date: {rx.date}</p>
                          <p className="text-sm text-primary-blue mt-2">{rx.notes}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Medical Records Tab */}
            {activeTab === 'records' && (
              <div className="space-y-4">
                <Card className="p-6 border-0 bg-white dark:bg-slate-800">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Your medical records are securely stored and can be accessed here
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-4 border border-gray-200 dark:border-slate-700 rounded-lg">
                      <div>
                        <p className="font-medium text-text-dark dark:text-white">Dental Radiographs</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Latest X-rays from 2024-01-15</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-4 border border-gray-200 dark:border-slate-700 rounded-lg">
                      <div>
                        <p className="font-medium text-text-dark dark:text-white">Treatment Plan</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Created on 2024-01-10</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
