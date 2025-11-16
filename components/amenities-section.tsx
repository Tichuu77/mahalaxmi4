"use client"

import { Wifi, Dumbbell, Trees, Zap, Shield, Users } from "lucide-react"
import { useState } from "react"

const amenities = [
  {
    icon: Wifi,
    title: "Smart Home",
    description: "Advanced IoT integration",
    category: "facilities"
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym",
    category: "wellness"
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Lush landscaping",
    category: "wellness"
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "24/7 power supply",
    category: "facilities"
  },
  {
    icon: Shield,
    title: "Security",
    description: "CCTV surveillance",
    category: "facilities"
  },
  {
    icon: Users,
    title: "Community",
    description: "Social gathering spaces",
    category: "entertainment"
  },
  {
    emoji: "🏊",
    title: "Swimming Pool",
    description: "Olympic-sized pool",
    category: "wellness"
  },
  {
    emoji: "🎮",
    title: "Gaming Zone",
    description: "Indoor entertainment",
    category: "entertainment"
  },
  {
    emoji: "🧘",
    title: "Yoga & Meditation",
    description: "Wellness activities",
    category: "wellness"
  },
  {
    emoji: "🚗",
    title: "Covered Parking",
    description: "Multi-level parking",
    category: "facilities"
  },
  {
    emoji: "🎪",
    title: "Banquet Hall",
    description: "Event spaces",
    category: "entertainment"
  },
  {
    emoji: "👶",
    title: "Kids Play Area",
    description: "Safe playground",
    category: "entertainment"
  },
]

export  function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredAmenities = amenities.filter(amenity => {
    if (activeTab === "all") return true
    return amenity.category === activeTab
  })

  return (
    <section id="amenities" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-primary/10 relative overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
            <div className="text-center">
            <div className="max inline-flex items-center gap-2 mb-3 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse" />
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
              Amenities
            </span>
          </div>
        </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
            Premium Lifestyle Features
          </h2>
          <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto">
            Experience luxury living with comprehensive facilities designed for your comfort
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {[
            { id: "all", label: "All Amenities" },
            { id: "wellness", label: "Wellness" },
            { id: "entertainment", label: "Entertainment" },
            { id: "facilities", label: "Facilities" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs hover:cursor-pointer sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-primary to-secondary text-foreground shadow-lg scale-105"
                  : "bg-primary/10 text-primary border border-primary hover:border-primary/50 hover:shadow-md"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Amenities Grid - Simplified and Mobile-Friendly */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {filteredAmenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-4 sm:p-5 border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                  {amenity.emoji ? (
                    <span className="text-2xl sm:text-3xl">{amenity.emoji}</span>
                  ) : (
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  )}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-sm sm:text-base font-bold text-primary mb-1">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-secondary sm:text-600 line-clamp-2">
                    {amenity.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-xs sm:text-sm text-secondary italic">
            * Amenities may vary by project location
          </p>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}