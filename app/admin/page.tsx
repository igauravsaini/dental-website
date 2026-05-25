'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Calendar, DollarSign, TrendingUp, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: Users, label: 'Total Patients', value: '2,450', change: '+12%' },
  { icon: Calendar, label: 'Appointments', value: '156', change: '+8%' },
  { icon: DollarSign, label: 'Revenue', value: '$45,230', change: '+15%' },
  { icon: TrendingUp, label: 'Growth', value: '24%', change: '+3%' },
]

const recentAppointments = [
  { id: 1, patient: 'John Smith', service: 'Dental Implant', doctor: 'Dr. Brown', time: '2:00 PM', status: 'Confirmed' },
  { id: 2, patient: 'Sarah Johnson', service: 'Teeth Whitening', doctor: 'Dr. Smith', time: '3:30 PM', status: 'Pending' },
  { id: 3, patient: 'Mike Davis', service: 'Checkup', doctor: 'Dr. Williams', time: '4:00 PM', status: 'Confirmed' },
]

const navigation = [
  { label: 'Dashboard', href: '#' },
  { label: 'Patients', href: '#' },
  { label: 'Doctors', href: '#' },
  { label: 'Appointments', href: '#' },
  { label: 'Invoices', href: '#' },
  { label: 'Analytics', href: '#' },
  { label: 'Blog Posts', href: '#' },
  { label: 'Settings', href: '#' },
]

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className="w-64 bg-text-dark dark:bg-slate-900 text-white p-6 hidden md:block">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
            <span className="font-poppins font-bold">PS</span>
          </div>
          <span className="font-poppins font-bold">Prestige Smiles</span>
        </div>
        <nav className="space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 rounded-lg hover:bg-white/10 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-12 pt-6 border-t border-white/10">
          <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-poppins font-bold text-text-dark dark:text-white">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back, Administrator</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="p-6 border-0 bg-white dark:bg-slate-800">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-blue" />
                  </div>
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">{stat.change}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-poppins font-bold text-text-dark dark:text-white">{stat.value}</p>
              </Card>
            )
          })}
        </motion.div>

        {/* Recent Appointments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-0 bg-white dark:bg-slate-800 p-6">
            <h2 className="text-xl font-poppins font-bold text-text-dark dark:text-white mb-6">Recent Appointments</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <th className="text-left py-3 font-semibold text-text-dark dark:text-white">Patient</th>
                    <th className="text-left py-3 font-semibold text-text-dark dark:text-white">Service</th>
                    <th className="text-left py-3 font-semibold text-text-dark dark:text-white">Doctor</th>
                    <th className="text-left py-3 font-semibold text-text-dark dark:text-white">Time</th>
                    <th className="text-left py-3 font-semibold text-text-dark dark:text-white">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAppointments.map((apt) => (
                    <tr key={apt.id} className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                      <td className="py-4 text-text-dark dark:text-white">{apt.patient}</td>
                      <td className="py-4 text-gray-600 dark:text-gray-400">{apt.service}</td>
                      <td className="py-4 text-gray-600 dark:text-gray-400">{apt.doctor}</td>
                      <td className="py-4 text-gray-600 dark:text-gray-400">{apt.time}</td>
                      <td className="py-4">
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${
                          apt.status === 'Confirmed'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {apt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
              <Button asChild className="bg-primary-blue hover:bg-blue-700 text-white">
                <Link href="#appointments">View All Appointments</Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
