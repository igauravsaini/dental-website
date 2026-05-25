import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="bg-[#1a1a1a] text-white py-14">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[760px]">
          {/* Left - Image */}
          <div className="relative w-full min-h-[760px] overflow-hidden">
            <Image
              src="/images/family-photo.jpg"
              alt="Happy Family"
              fill
              loading="lazy"
              className="object-cover object-center brightness-[0.98] contrast-[1.05] saturate-[1.02]"
            />
          </div>

          {/* Right - Content */}
          <div className="bg-black flex flex-col justify-center px-16 lg:px-24 py-20 min-h-[760px]">
            <p className="text-[#D4A574] font-semibold text-[0.9rem] tracking-[0.22em] mb-4">ABOUT US</p>
            <h2 className="font-serif text-[4rem] leading-[1.08] tracking-[-0.03em] font-medium mb-6 leading-tight">
              Dentistry You Can<br />Trust. <span className="text-[#D4A574]">Smiles You&apos;ll Love.</span>
            </h2>

            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              At Prestige Smiles, we combine modern technology with compassionate care to deliver exceptional results. Our experienced team takes time to understand your needs and create a personalized plan for your healthiest smile.
            </p>

            {/* Bullet Points */}
            <div className="space-y-6 mb-10">

              {[
                'State-of-the-art technology',
                'Comfortable spa-like environment',
                'Personalized treatment plans',
                'Focused on long-term oral health',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5"
                >

                  {/* Circle Tick */}
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-[36px]
                      h-[36px]
                      rounded-full
                      border-[2.8px]
                      border-[#D4A574]
                      shrink-0
                    "
                  >
                    <svg
                      className="w-[18px] h-[18px] text-[#D4A574]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <span className="text-white text-[1.05rem]">
                    {item}
                  </span>

                </div>
              ))}

            </div>

            <Link
              href="/about"
              className="
                mt-3
                bg-[#D4A574]
                text-[#111111]
                h-[50px]
                w-[330px]
                text-[0.9rem]
                font-semibold
                tracking-[0.12em]
                uppercase
                rounded-[4px]
                transition-all
                duration-300
                hover:bg-[#C69A56]
                flex
                items-center
                justify-center
              "
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
