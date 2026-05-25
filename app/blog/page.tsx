'use client'

import { motion } from 'framer-motion'
import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: '10 Tips for Maintaining Perfect Oral Health',
    excerpt: 'Discover the secrets to keeping your teeth and gums healthy for a lifetime. Learn expert tips from our dental professionals.',
    category: 'Oral Health',
    author: 'Dr. Sarah Smith',
    date: '2024-01-15',
    readTime: '5 min read',
    image: 'Dental Health'
  },
  {
    id: 2,
    title: 'The Benefits of Dental Implants Over Bridges',
    excerpt: 'Comparing different tooth replacement options. Learn why dental implants are the gold standard for missing teeth.',
    category: 'Restorative',
    author: 'Dr. David Brown',
    date: '2024-01-10',
    readTime: '7 min read',
    image: 'Implants'
  },
  {
    id: 3,
    title: 'Invisalign vs Traditional Braces: A Complete Guide',
    excerpt: 'Understand the differences between clear aligners and traditional braces to make the right choice for your smile.',
    category: 'Orthodontics',
    author: 'Dr. Michael Johnson',
    date: '2024-01-05',
    readTime: '6 min read',
    image: 'Orthodontics'
  },
  {
    id: 4,
    title: 'Professional Teeth Whitening: What to Expect',
    excerpt: 'Learn about professional whitening treatments and how they can safely brighten your smile by several shades.',
    category: 'Cosmetic',
    author: 'Dr. Sarah Smith',
    date: '2023-12-28',
    readTime: '4 min read',
    image: 'Whitening'
  },
  {
    id: 5,
    title: 'Root Canal Myths Debunked',
    excerpt: 'Discover the truth about root canal treatments and why they are essential for saving your natural teeth.',
    category: 'Endodontics',
    author: 'Dr. David Brown',
    date: '2023-12-20',
    readTime: '5 min read',
    image: 'Root Canal'
  },
  {
    id: 6,
    title: 'Pediatric Dental Care: Building Healthy Habits',
    excerpt: 'Tips for parents on establishing good oral hygiene habits in children from an early age.',
    category: 'Pediatric',
    author: 'Dr. Emily Williams',
    date: '2023-12-15',
    readTime: '6 min read',
    image: 'Pediatric Care'
  },
]

export default function Blog() {
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
                Dental Blog
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Expert tips and insights for optimal oral health
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-soft-xl transition h-full flex flex-col">
                    {/* Image */}
                    <div className="h-48 bg-gradient-to-br from-primary-blue/20 via-secondary-cyan/20 to-accent-green/20 flex items-center justify-center">
                      <p className="text-gray-600 dark:text-gray-400">{post.image}</p>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-poppins font-bold text-text-dark dark:text-white mb-3">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="border-t border-gray-200 dark:border-slate-700 pt-4 mb-4">
                        <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                      </div>

                      <Button
                        asChild
                        variant="ghost"
                        className="w-full justify-center text-primary-blue hover:bg-primary-blue/5"
                      >
                        <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
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
                Have Questions About Your Dental Health?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Schedule a consultation with our experts
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-primary-blue h-14 px-8"
              >
                <Link href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0" target="_blank" rel="noopener noreferrer">Book Now</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
