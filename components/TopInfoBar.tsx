'use client'

import { Phone, MapPin, Clock, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export function TopInfoBar() {
  return (
    <div className="hidden md:block bg-primary-blue text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <a
              href="https://www.google.com/maps/dir/26.853376,80.9435136/Prestige+Smiles+Dental,+163+N+400+W+St+A1,+Orem,+UT+84057,+United+States/@40.0183423,-112.1046872,7.5z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x874d8441af9d140f:0x6744888566f1767d!2m2!1d-111.7058925!2d40.29991?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
              className="hover:underline"
            >
              163 N 400 W St A1, Orem, UT 84057
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:+18012261080" className="hover:underline">(801) 226-1080</a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon-Fri: 9AM-6PM | Sat: 10AM-4PM</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          <span>Emergency: <a href="tel:+18012261080" className="font-semibold hover:underline">(801) 226-1080</a></span>
        </div>
      </div>
    </div>
  )
}
