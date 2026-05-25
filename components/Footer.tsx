'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer>
      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B6914] via-[#C8A46B] to-[#8B6914]" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-semibold text-white mb-3 italic" style={{ fontFamily: 'Georgia, serif' }}>
                Ready to Love<br />Your Smile?
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                Schedule your appointment today<br />and experience the difference.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                asChild
                className="
                  border-2 border-white bg-transparent text-white
                  rounded-none h-[52px] px-8
                  text-sm font-semibold tracking-[0.15em] uppercase
                  transition-all duration-300
                  hover:bg-white hover:text-[#8B6914]
                "
              >
                <a
                  href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <CalendarDays className="w-5 h-5" />
                  <span>Book Appointment</span>
                </a>
              </Button>
              <Button
                asChild
                className="
                  border-2 border-white bg-transparent text-white
                  rounded-none h-[52px] px-8
                  text-sm font-semibold tracking-[0.08em]
                  transition-all duration-300
                  hover:bg-white hover:text-[#8B6914]
                "
              >
                <a href="tel:+18012261080" className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>(801) 226-1080</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 lg:py-20">

            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-5">
                <Image
                  src="/images/logo.png"
                  alt="Prestige Smiles"
                  width={180}
                  height={74}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Providing exceptional dental care with integrity, compassion, and advanced technology.
              </p>
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a href="#" className="w-9 h-9 rounded-full border border-[#C8A46B]/40 flex items-center justify-center text-[#C8A46B] hover:bg-[#C8A46B] hover:text-black transition-all duration-300" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-9 h-9 rounded-full border border-[#C8A46B]/40 flex items-center justify-center text-[#C8A46B] hover:bg-[#C8A46B] hover:text-black transition-all duration-300" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                {/* Google */}
                <a href="https://maps.app.goo.gl/uPhRt9ZRyWuhrQ5q6" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#C8A46B]/40 flex items-center justify-center text-[#C8A46B] hover:bg-[#C8A46B] hover:text-black transition-all duration-300" aria-label="Google">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </a>
                {/* Yelp */}
                <a href="#" className="w-9 h-9 rounded-full border border-[#C8A46B]/40 flex items-center justify-center text-[#C8A46B] hover:bg-[#C8A46B] hover:text-black transition-all duration-300" aria-label="Yelp">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308c.564-.835 1.772-.486 1.772.512v3.993zm-8.985 3.49l.232 5.252c.036.84-1.116 1.188-1.596.48L6.526 17.1c-.48-.708.18-1.62 1.068-1.356l3.581 1.34zm-.504-5.386L5.58 8.67c-.816-.348-.612-1.548.288-1.668l5.064-.696c.9-.12 1.284 1.02.576 1.668l-3.36 2.724c-.42.336-.96.324-1.392 0zM11.28 2.4l1.152 5.088c.192.876-.84 1.464-1.524.876L6.3 4.296c-.684-.588-.264-1.68.612-1.596l4.368.348v.012c.324 0 .684.192.78.456l.22.884zm2.004 8.988l4.308 2.928c.732.492.384 1.644-.504 1.644h-5.34c-.888 0-1.2-1.08-.468-1.584l1.536-1.044.468-1.944z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#C8A46B] font-semibold text-xs tracking-[0.2em] uppercase mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-[#C8A46B] transition text-sm">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-[#C8A46B] transition text-sm">About Us</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-[#C8A46B] transition text-sm">Services</Link></li>
                <li><Link href="/resources" className="text-gray-400 hover:text-[#C8A46B] transition text-sm">Patient Resources</Link></li>
                <li><Link href="/reviews" className="text-gray-400 hover:text-[#C8A46B] transition text-sm">Reviews</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-[#C8A46B] transition text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[#C8A46B] font-semibold text-xs tracking-[0.2em] uppercase mb-6">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/services/general" className="text-gray-400 hover:text-[#C8A46B] transition text-sm">General Dentistry</Link></li>
                <li><Link href="/services/implants" className="text-gray-400 hover:text-[#C8A46B] transition text-sm">Dental Implants</Link></li>
                <li><Link href="/services/dentures" className="text-gray-400 hover:text-[#C8A46B] transition text-sm">Dentures</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-[#C8A46B] font-semibold text-xs tracking-[0.2em] uppercase mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#C8A46B] flex-shrink-0" />
                  <a
                    href="https://maps.app.goo.gl/uPhRt9ZRyWuhrQ5q6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#C8A46B] transition text-sm leading-relaxed"
                  >
                    163 N 400 W St A1<br />Orem, UT 84057
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C8A46B] flex-shrink-0" />
                  <a href="tel:+18012261080" className="text-gray-400 hover:text-[#C8A46B] transition text-sm">(801) 226-1080</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C8A46B] flex-shrink-0" />
                  <a href="mailto:info@utprestige.com" className="text-gray-400 hover:text-[#C8A46B] transition text-sm">info@utprestige.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 Prestige Smiles. All Rights Reserved.</p>
            <div className="flex items-center gap-4 mt-3 md:mt-0">
              <Link href="#" className="hover:text-[#C8A46B] transition">Privacy Policy</Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="hover:text-[#C8A46B] transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
