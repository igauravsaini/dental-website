'use client'

import { motion } from 'framer-motion'
import { TopInfoBar } from '@/components/TopInfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import { Award, GraduationCap, Heart, Globe, Wrench, BookOpen } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Stace Lind',
    credential: 'DDS',
    photo: '/images/dr-stace-lind.webp',
    experience: '25+',
    expLabel: 'Years',
    highlights: [
      { icon: Award, text: 'AGD Master' },
      { icon: GraduationCap, text: 'University of Louisville' },
      { icon: Wrench, text: 'Diplomate in Implantology' },
    ],
    specialties: ['Implantology', 'Cosmetic Dentistry', 'Prosthodontics', 'Occlusion', 'Perio / Tissue Grafting'],
    bio: [
      'Dr. Lind has been in private practice for over 25 years since graduating from The University of Louisville dental school. He has continued his education receiving advanced training in several disciplines: diplomate in implantology, a certificate in perio/tissue grafting, completion of Advanced Cosmetic Dentistry Program at LSU, and a four-year program in occlusion and prosthodontics at the University of Oregon. Doctor Lind is a Master in the Academy of General Dentistry and is also on the Board for the AGD in Colorado. He is actively pursuing his life-long recognition with the AGD and will be presented with this prestigious honor in Boston 2016.',
      'Dr. Lind has obtained his Master Bee Keeper certification at Cornell University, a degree in Entomology. He enjoys every day with his wonderful staff and supports them in their personal endeavors, as well as their unique and incredible contribution to Flat Rate Doctors. Stace enjoys life and seeks patients who desire the same. He has an amazing wife of 27 years, Kristin, who works by his side as his EDDA (Expanded Duty Dental Assistant). Together they have two beautiful daughters!',
    ],
  },
  {
    name: 'Dr. Bob',
    credential: 'DDS',
    photo: '/images/dr-bob.webp',
    experience: '30+',
    expLabel: 'Years',
    highlights: [
      { icon: Heart, text: 'Humanitarian—Central America' },
      { icon: Globe, text: 'Fluent in Spanish' },
      { icon: Wrench, text: 'Fast Braces Specialist' },
    ],
    specialties: ['Fast Braces', 'Oral Surgery', 'Endodontics', 'Implants', 'Bone Grafts'],
    bio: [
      'Dr. Bob has over 30 years of experience helping patients with orthodontic braces using the Fast Braces system, which can be completed within 6 months. He also provides most dental services and specialty treatment including implants, bone grafts, oral surgery, endodontics, and more.',
      'Dr. Bob is fluent in Spanish and participates in humanitarian efforts in Central America. He\'s a family man with 10 children, 24 grandchildren, and a lovely wife, Wendy, who will be a team member with us as well. His hobbies include camping, traveling/cruises, golfing, and coaching youth sports.',
    ],
  },
  {
    name: 'Dr. Steve Garlick',
    credential: 'DDS',
    photo: '/images/dr-steve-garlick.webp',
    experience: '15+',
    expLabel: 'Years',
    highlights: [
      { icon: BookOpen, text: 'Roseman University Faculty' },
      { icon: GraduationCap, text: 'UT San Antonio' },
      { icon: Wrench, text: 'Oral Surgery Specialist' },
    ],
    specialties: ['Oral Surgery', 'General Dentistry', 'Patient-Centered Care'],
    bio: [
      'Dr. Steve Garlick grew up in Pleasant Grove, Utah. He served a mission in Germany and loves to speak it when he gets a chance. He then went to Brigham Young University and then University of Texas in San Antonio for dental school. Steve is married to Kallie and they have 3 kids — the oldest, Madi, just got married.',
      'Dr. Steve enjoys mountain biking, golfing, and anything that has a motor like cars, motorcycles, and boats. He loves woodworking and building anything he can out of metal or wood. He enjoys listening to music and especially his children in the Millennial Choir or when they sit to play the piano. He also enjoys jamming with his kids playing the bass guitar.',
      'Dr. Garlick is passionate about dentistry and is also currently working at Roseman University Dental School. He loves to teach Oral Surgery the most and enjoys getting to know patients and their interests.',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  return (
    <>
      <TopInfoBar />
      <Navbar />
      <main className="min-h-screen bg-[#FAFAF8]">

        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden bg-[#0D0D0D] pt-28 pb-24 md:pt-36 md:pb-32">
          {/* decorative gradient orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#C8A46B]/6 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8A46B]/4 blur-[100px] pointer-events-none" />

          {/* thin gold line accent */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A46B]/30 to-transparent" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#C8A46B] text-xs tracking-[0.35em] uppercase mb-4 font-medium"
            >
              Prestige Smiles Dental
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-5"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              The Doctors Behind<br className="hidden md:block" /> Your Best Smile
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-16 h-[1px] bg-[#C8A46B] mx-auto mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light"
            >
              Combined 70+ years of expertise in implantology, cosmetic dentistry, and oral surgery — dedicated to transforming lives, one smile at a time.
            </motion.p>

            {/* stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap justify-center gap-4 mt-10"
            >
              {[
                { value: '70+', label: 'Combined Years' },
                { value: '3', label: 'Expert Doctors' },
                { value: '6+', label: 'Specialties' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 px-5 py-3 rounded-full border border-[#C8A46B]/15 bg-white/[0.02] backdrop-blur-sm"
                >
                  <span className="text-[#C8A46B] text-lg font-semibold">{s.value}</span>
                  <span className="text-white/40 text-xs tracking-wide uppercase">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── DOCTORS ─── */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            {doctors.map((doctor, index) => {
              const isReversed = index % 2 !== 0
              return (
                <motion.div
                  key={doctor.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 mb-24 last:mb-0`}
                >
                  {/* ── Photo Column ── */}
                  <motion.div
                    custom={0}
                    variants={fadeUp}
                    className="lg:w-[380px] flex-shrink-0"
                  >
                    <div className="relative group">
                      {/* gold frame accent */}
                      <div className={`absolute ${isReversed ? '-right-3' : '-left-3'} -top-3 w-full h-full border border-[#C8A46B]/20 rounded-2xl transition-all duration-500 group-hover:border-[#C8A46B]/40 group-hover:translate-x-0 group-hover:translate-y-0`} />

                      {/* photo container */}
                      <div className="relative rounded-2xl overflow-hidden bg-gray-200 aspect-[3/4] shadow-2xl shadow-black/10">
                        <Image
                          src={doctor.photo}
                          alt={doctor.name}
                          fill
                          loading="lazy"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        {/* bottom gradient overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* experience badge */}
                        <div className="absolute bottom-5 left-5 flex items-baseline gap-1">
                          <span className="text-[#C8A46B] text-4xl font-bold leading-none">{doctor.experience}</span>
                          <span className="text-white/70 text-xs uppercase tracking-wider">{doctor.expLabel}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* ── Info Column ── */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    {/* name */}
                    <motion.div custom={1} variants={fadeUp}>
                      <p className="text-[#C8A46B] text-xs tracking-[0.3em] uppercase mb-2 font-medium">
                        {doctor.credential}
                      </p>
                      <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] tracking-tight mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                        {doctor.name}
                      </h2>
                    </motion.div>

                    {/* highlight chips */}
                    <motion.div custom={2} variants={fadeUp} className="flex flex-wrap gap-3 mb-7">
                      {doctor.highlights.map((h) => {
                        const Icon = h.icon
                        return (
                          <div
                            key={h.text}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D0D0D] text-white text-xs tracking-wide"
                          >
                            <Icon className="w-3.5 h-3.5 text-[#C8A46B]" />
                            <span>{h.text}</span>
                          </div>
                        )
                      })}
                    </motion.div>

                    {/* specialties */}
                    <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-2 mb-7">
                      {doctor.specialties.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-[#C8A46B]/25 text-[#8B6914] bg-[#C8A46B]/[0.06] tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* bio */}
                    <motion.div custom={4} variants={fadeUp}>
                      {doctor.bio.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-[14.5px] text-[#555] leading-[1.85] mb-4 last:mb-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </motion.div>

                    {/* decorative line */}
                    {index < doctors.length - 1 && (
                      <motion.div custom={5} variants={fadeUp}>
                        <div className="mt-10 w-12 h-[1px] bg-[#C8A46B]/30" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* ─── VALUES STRIP ─── */}
        <section className="bg-[#0D0D0D] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <p className="text-[#C8A46B] text-xs tracking-[0.35em] uppercase mb-3 font-medium">Our Philosophy</p>
              <h2
                className="text-white text-3xl md:text-4xl font-light tracking-tight"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Why Patients Choose Us
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
              {[
                { icon: '🦷', title: 'Advanced Technology', desc: 'State-of-the-art equipment for precise, comfortable treatment' },
                { icon: '🤝', title: 'Patient-First Care', desc: 'Your comfort and goals always guide our approach' },
                { icon: '🎓', title: 'Continued Education', desc: 'Our doctors stay at the forefront of dental science' },
                { icon: '❤️', title: 'Community Spirit', desc: 'Humanitarian work and local engagement define who we are' },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#0D0D0D] p-8 md:p-10 text-center group hover:bg-[#141414] transition-colors duration-300"
                >
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="text-white text-sm font-semibold tracking-wide uppercase mb-2">{v.title}</h3>
                  <p className="text-white/40 text-[13px] leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#8B6914] via-[#C8A46B] to-[#8B6914] py-16 md:py-20">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.12' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20l2.83-2.83 1.41 1.41L1.41 21.41 0 20zm0-18.59L2.83.59l1.41 1.41L1.41 4.83 0 3.41V1.41zM20 18.59l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-white text-3xl md:text-4xl font-light tracking-tight mb-4 italic"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Ready to Meet Your New Dentist?
              </h2>
              <p className="text-white/70 text-base mb-8 max-w-lg mx-auto">
                Schedule a consultation and discover why thousands of patients trust Prestige Smiles.
              </p>
              <a
                href="https://booking.adit.com/ace345df-c1b4-4779-8df6-5fb2e0aad5b0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#8B6914] font-semibold text-sm tracking-[0.12em] uppercase rounded-none hover:bg-[#0D0D0D] hover:text-[#C8A46B] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Your Appointment
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
