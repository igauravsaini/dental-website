'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M6 5C6 3.5 7.5 2 9.5 2S12 3 12 3s.5-1 2.5-1S18 3.5 18 5c0 4 .5 5.5 2.5 7.5C21 13 21 14 20.5 15.5c-1 3-2 5.5-3 6.5s-2 1-3.5 0c-.8-.6-1-1.5-1-2.5V18c0-.6-.4-1-1-1s-1 .4-1 1v1.5c0 1-.2 1.9-1 2.5-1.5 1-2.5 1-3.5 0s-2-3.5-3-6.5C3 14 3 13 3.5 12.5 5.5 10.5 6 9 6 5Z" />
  </svg>
)

const ImplantIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M6 5C6 3.5 7.5 2 9.5 2S12 3 12 3s.5-1 2.5-1S18 3.5 18 5c0 2.5.5 4 2 5.5.5.5.5 1 0 1.5-1 1-1.5 2.5-1.5 4H5.5c0-1.5-.5-3-1.5-4-.5-.5-.5-1 0-1.5C5.5 9 6 7.5 6 5Z" />
    <path d="M10 16h4" />
    <path d="M12 16v2" />
    <path d="M9 18h6" />
    <path d="M10 20h4" />
    <path d="M11 22h2" />
    <path d="M9 18l3 4 3-4" />
  </svg>
)

const DentureIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M4 11a8 8 0 0 1 16 0" />
    <path d="M4 13a8 8 0 0 0 16 0" />
    <path d="M7 11v2" />
    <path d="M10 11.5v1" />
    <path d="M12 12v1" />
    <path d="M14 11.5v1" />
    <path d="M17 11v2" />
  </svg>
)

const services = [
  {
    id: 'general',
    name: 'General Dentistry',
    description: 'Preventive care, cleanings,\n and exams for a lifetime \nof healthy smiles.',
    icon: ToothIcon,
    href: '/services/general',
    image: '/images/general.webp',
  },
  {
    id: 'implants',
    name: 'Dental\nImplants',
    description: 'Permanent, natural-looking tooth replacements that restore confidence.',
    icon: ImplantIcon,
    href: '/services/implants',
    image: '/images/dental-implants.webp',
  },
  {
    id: 'dentures',
    name: 'Dentures',
    description: 'Custom dentures designed for comfort, function, and a natural appearance.',
    icon: DentureIcon,
    href: '/services/dentures',
    image: '/images/dental.webp',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F4F1EC]">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#C8A46B] font-semibold text-[1.4rem] tracking-[0.25em] uppercase mb-3">
            Our Services
          </p>

          <h2 className="text-[3.5rem] md:text-[4.2rem] font-serif font-medium text-[#1E1E1E] tracking-[-0.03em]">
            Comprehensive Dental Solutions
          </h2>
        </motion.div>

        {/* Services Grid - 3 Columns */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 "
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div 
                  className="bg-white rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-white/80 hover:-translate-y-1 transition-transform duration-300"
                  style={{ willChange: 'transform' }}
                >
                  {/* Icon and Text Section */}
<div className="p-10 pb-7">

  {/* Icon + Heading Row */}
  <div className="flex items-start gap-5 mb-7">

    <div className="flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-full bg-[#C8A46B]">
      <Icon className="w-9 h-9 text-white" />
    </div>

    <div className="pt-2">
    <h3
      className="
        text-[1.55rem]
        leading-[1.4]
        font-semibold
        uppercase
        tracking-[0.08em]
        text-[#1F1F1F]
        whitespace-pre-line
      "
    >
      {service.name}
    </h3>
    </div>

  </div>

  {/* Description */}
    <p
      className="
        ml-[102px]
        text-[1.1rem]
        font-semibold
        leading-[2]
        text-[#5E5E5E]
        mb-8
        max-w-[260px]
        whitespace-pre-line
      "
    >
    {service.description}
  </p>

  {/* Learn More */}
  <Link
    href={service.href}
  className="
    ml-[102px]
    flex
    items-center
    gap-2
    text-[#C8A46B]
    font-semibold
    text-[1.0rem]
    uppercase
    tracking-[0.18em]
    hover:text-[#d4b278]
    transition-all
    duration-300
  "
  >
    Learn More →
  </Link>

</div>

                  {/* Image Section */}
                  <div className="relative h-72 md:h-80 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      loading="lazy"
                      className="object-cover object-center transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
