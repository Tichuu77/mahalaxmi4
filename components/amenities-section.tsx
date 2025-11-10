"use client"

import { Zap, Shield, Feather, Award, Sparkles, Lock } from "lucide-react"

const amenities = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Performance optimized for maximum speed and responsiveness",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Enterprise-grade security to protect your data",
  },
  {
    icon: Feather,
    title: "Lightweight",
    description: "Minimal footprint, maximum impact and efficiency",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Certified excellence in every aspect of delivery",
  },
  {
    icon: Sparkles,
    title: "Elegant Design",
    description: "Thoughtfully crafted aesthetics and user experience",
  },
  {
    icon: Lock,
    title: "Reliable",
    description: "99.9% uptime guarantee with 24/7 support",
  },
]

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 lg:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
            className="text-amber-600 font-semibold text-sm uppercase tracking-wider"
          >
            Our Amenities
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">Everything You Need</h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive features designed to exceed your expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-lg border border-amber-900/20 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-300 hover:border-amber-600/40 hover:shadow-lg hover:shadow-amber-900/20 scroll-fade"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-amber-900/50 transition-all">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{amenity.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{amenity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
