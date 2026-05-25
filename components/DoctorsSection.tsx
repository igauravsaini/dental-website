'use client'

import { Heart, MapPin, Star, Users } from 'lucide-react'

const stats = [
  {
    label: 'YEARS OF EXPERIENCE',
    value: '15+',
    icon: Users,
  },
  {
    label: '5-STAR REVIEWS',
    value: '1,000+',
    icon: Star,
  },
  {
    label: 'HAPPY PATIENTS',
    value: '5,000+',
    icon: Heart,
  },
  {
    label: 'PROUDLY SERVING OUR COMMUNITY',
    value: 'OREM, UT',
    icon: MapPin,
  },
]

export function DoctorsSection() {
  return (
    <section className="w-full bg-[#F7F4EF] border-y border-[#E8DED0] py-6">
      <div className="w-full px-0">
        
        {/* Top Heading */}
        <div className="text-center pt-10 pb-8">
          <p className="text-[18px] tracking-[0.28em] uppercase text-[#B2874E] font-medium">
            Why Choose Prestige Smiles?
          </p>
        </div>

        {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {stats.map((item, index) => {
          const Icon = item.icon

          return (
            <div
              key={index}
              className={`
                flex items-center justify-center gap-7
                py-16
                min-h-[190px]
                border-[#DDD3C5]
                ${index !== stats.length - 1 ? 'border-r' : ''}
              `}
            >
              {/* Bigger Icon */}
              <div className="flex-shrink-0 text-[#C89B5B]">
                <Icon
                  strokeWidth={1.4}
                  className="w-16 h-16"
                />
              </div>

              {/* Content */}
              <div className="max-w-[260px]">
                <h3 className="text-[55px] leading-none font-semibold tracking-tight text-[#1A1A1A] whitespace-nowrap">
                  {item.value}
                </h3>

                <p className="mt-3 text-[16.5px] leading-[1.8] tracking-[0.30em] uppercase text-[#666]">
                  {item.label}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      </div>
    </section>
  )
}