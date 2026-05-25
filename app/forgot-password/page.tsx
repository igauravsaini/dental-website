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
import { Mail } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
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
              {!submitted ? (
                <>
                  {/* Logo */}
                  <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-poppins font-bold text-lg">PS</span>
                    </div>
                    <h1 className="text-2xl font-poppins font-bold text-text-dark dark:text-white">
                      Reset Password
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Enter your email to receive password reset instructions
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="border-gray-300 dark:border-slate-600"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary-blue hover:bg-blue-700 text-white h-11"
                    >
                      Send Reset Link
                    </Button>
                  </form>

                  {/* Back Link */}
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                    Remember your password?{' '}
                    <Link href="/login" className="text-primary-blue hover:underline">
                      Sign In
                    </Link>
                  </p>
                </>
              ) : (
                <>
                  {/* Success Message */}
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-poppins font-bold text-text-dark dark:text-white mb-4">
                      Check Your Email
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      We&apos;ve sent a password reset link to <span className="font-medium">{email}</span>. Please check your email and click the link to reset your password.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                      If you don&apos;t see the email, please check your spam folder.
                    </p>
                    <Button
                      asChild
                      className="w-full bg-primary-blue hover:bg-blue-700 text-white h-11"
                    >
                      <Link href="/login">Back to Login</Link>
                    </Button>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
