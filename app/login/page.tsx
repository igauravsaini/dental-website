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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
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
                  Welcome Back
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Sign in to your patient account
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-primary-blue hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary-blue hover:bg-blue-700 text-white h-11"
                >
                  Sign In
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-slate-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400">
                    Don&apos;t have an account?
                  </span>
                </div>
              </div>

              {/* Sign Up Link */}
              <Link href="/signup">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-primary-blue text-primary-blue hover:bg-primary-blue/5 h-11"
                >
                  Create Account
                </Button>
              </Link>

              {/* Footer Link */}
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                <Link href="/" className="text-primary-blue hover:underline">
                  Back to Home
                </Link>
              </p>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
