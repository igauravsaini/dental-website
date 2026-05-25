'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff } from 'lucide-react'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
  }

  return (
    <>
      <TopInfoBar />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 bg-white dark:bg-slate-800 shadow-soft-lg p-8">
              {/* Logo */}
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-poppins font-bold text-lg">PS</span>
                </div>
                <h1 className="text-2xl font-poppins font-bold text-text-dark dark:text-white">
                  Create Account
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Join us and get access to your patient portal
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-dark dark:text-white mb-2">
                      First Name
                    </label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="border-gray-300 dark:border-slate-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark dark:text-white mb-2">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="border-gray-300 dark:border-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark dark:text-white mb-2">
                    Email Address
                  </label>
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
                  <label className="block text-sm font-medium text-text-dark dark:text-white mb-2">
                    Phone Number
                  </label>
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
                  <label className="block text-sm font-medium text-text-dark dark:text-white mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      required
                      className="border-gray-300 dark:border-slate-600 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark dark:text-white mb-2">
                    Confirm Password
                  </label>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    required
                    className="border-gray-300 dark:border-slate-600"
                  />
                </div>

                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" required />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    I agree to the{' '}
                    <Link href="#" className="text-primary-blue hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="#" className="text-primary-blue hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                <Button
                  type="submit"
                  className="w-full bg-primary-blue hover:bg-blue-700 text-white h-11"
                >
                  Create Account
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-slate-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400">
                    Already have an account?
                  </span>
                </div>
              </div>

              {/* Login Link */}
              <Link href="/login">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-primary-blue text-primary-blue hover:bg-primary-blue/5 h-11"
                >
                  Sign In
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
