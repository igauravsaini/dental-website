'use client'

import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { TestimonialsSection } from '@/components/TestimonialsSection'

export default function ReviewsPage() {
  return (
    <>
      <TopInfoBar />
      <Navbar forceSolid={true} />
      <main className="min-h-screen bg-[#FAFAF8] pt-24">
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
