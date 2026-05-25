import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import AboutSection from '@/components/WhyChooseUs'
import { DoctorsSection } from '@/components/DoctorsSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopInfoBar />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <DoctorsSection />
      <TestimonialsSection isHomePage={true} />
      <Footer />
    </main>
  )
}

