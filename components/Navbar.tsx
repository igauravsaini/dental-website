'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar({ forceSolid = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40)
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PATIENT RESOURCES', href: '/resources' },
    { name: 'REVIEWS', href: '/reviews' },
    { name: 'CONTACT', href: '/contact' },
  ]

  const headerClasses = forceSolid
    ? 'bg-black/90 border-b border-[#C8A46B]/10'
    : scrolled
      ? 'bg-black/30 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]'
      : 'bg-black/90 border-b border-[#C8A46B]/10'

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerClasses}`}>
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-[95px]">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Prestige Smiles"
              width={170}
              height={70}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  relative
                  text-[0.82rem]
                  font-semibold
                  tracking-[0.18em]
                  text-white/90
                  uppercase
                  transition-all
                  duration-300
                  hover:text-[#C8A46B]

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-[#C8A46B]
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              asChild
              className="
                border
                border-[#C8A46B]
                bg-black/30
                backdrop-blur-xl
                text-[#D6B06B]
                rounded-md
                h-[56px]
                px-8
                text-[0.9rem]
                font-semibold
                tracking-wide
                uppercase
                transition-all
                duration-300
                hover:bg-[#C8A46B]/8
                hover:border-[#DDBB7A]
                hover:shadow-[0_0_25px_rgba(200,164,107,0.25)]
              "
            >
              <a
                href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0"
                className="flex items-center justify-center"
              >
                <CalendarDays className="w-5 h-5 mr-3" />
                <span>Book Appointment</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#C8A46B]/10 py-6 bg-black">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    text-sm
                    font-medium
                    tracking-widest
                    text-white
                    uppercase
                    hover:text-[#C8A46B]
                    transition
                  "
                >
                  {link.name}
                </Link>
              ))}

<Button
  asChild
  className="
    mt-4
    border
    border-[#C8A46B]/70
    bg-black/30
    backdrop-blur-xl
    text-[#D6B06B]
    rounded-[4px]
    h-[48px]
    px-7
    text-[0.78rem]
    font-semibold
    tracking-[0.12em]
    uppercase
    transition-all
    duration-300
    hover:bg-[#C8A46B]/8
    hover:border-[#DDBB7A]
    hover:shadow-[0_0_18px_rgba(200,164,107,0.18)]
  "
>
  <a
    href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0"
    className="flex items-center justify-center gap-2.5 w-full h-full"
  >
    <CalendarDays
      className="w-[15px] h-[15px] text-[#D6B06B]"
    />

    <span>Book Appointment</span>
  </a>
</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}