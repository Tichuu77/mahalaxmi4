"use client"

import { Wifi, Dumbbell, Trees, Zap, Shield, Users } from "lucide-react"
import { useState } from "react"

const secondSectionAmenities = [
  {
    icon: Wifi,
    title: "Smart Home",
    description: "Advanced IoT integration for modern living.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym facilities.",
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Lush landscaping and parks.",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted power supply 24/7.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "CCTV surveillance and personnel.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Spaces for social gatherings.",
  },
  {
    emoji: "🏊",
    title: "Swimming Pool",
    description: "Olympic-sized pool with children's area.",
  },
  {
    emoji: "🎮",
    title: "Gaming Zone",
    description: "Indoor games and entertainment facilities.",
  },
  {
    emoji: "🧘",
    title: "Yoga & Meditation",
    description: "Dedicated spaces for wellness activities.",
  },
  {
    emoji: "🚗",
    title: "Covered Parking",
    description: "Secure multi-level parking facilities.",
  },
  {
    emoji: "🎪",
    title: "Banquet Hall",
    description: "Event spaces for celebrations.",
  },
  {
    emoji: "👶",
    title: "Kids Play Area",
    description: "Safe and fun playground for children.",
  },
]

export function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-700 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-amber-600/20 rounded-full border border-amber-600/40 animate-bounce" style={{animationDuration: '3s'}}>
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-ping"></div>
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-amber-600 font-semibold text-sm uppercase tracking-wider"
            >
              Our Amenities
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">Everything You Need</h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive features designed to exceed your expectations
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
              activeTab === "all"
                ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/50"
                : "bg-white/5 text-white/70 hover:bg-white/10 border border-amber-900/20"
            }`}
          >
            All Amenities
          </button>
          <button
            onClick={() => setActiveTab("wellness")}
            className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
              activeTab === "wellness"
                ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/50"
                : "bg-white/5 text-white/70 hover:bg-white/10 border border-amber-900/20"
            }`}
          >
            🧘 Wellness
          </button>
          <button
            onClick={() => setActiveTab("entertainment")}
            className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
              activeTab === "entertainment"
                ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/50"
                : "bg-white/5 text-white/70 hover:bg-white/10 border border-amber-900/20"
            }`}
          >
            🎮 Entertainment
          </button>
          <button
            onClick={() => setActiveTab("facilities")}
            className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
              activeTab === "facilities"
                ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/50"
                : "bg-white/5 text-white/70 hover:bg-white/10 border border-amber-900/20"
            }`}
          >
            🏢 Facilities
          </button>
        </div>

        {/* Amenities Grid - 3 columns on mobile, 6 on desktop */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
          {secondSectionAmenities
            .filter(amenity => {
              if (activeTab === "all") return true
              if (activeTab === "wellness") return ["Fitness Center", "Yoga & Meditation", "Green Spaces", "Swimming Pool"].includes(amenity.title)
              if (activeTab === "entertainment") return ["Gaming Zone", "Banquet Hall", "Kids Play Area", "Community"].includes(amenity.title)
              if (activeTab === "facilities") return ["Smart Home", "Power Backup", "Security", "Covered Parking"].includes(amenity.title)
              return true
            })
            .map((amenity, index) => {
              const Icon = amenity.icon
              const isEmoji = amenity.emoji
              
              return (
                <div
                  key={index}
                  className="group p-4 md:p-6 rounded-lg md:rounded-xl border border-amber-900/20 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-300 hover:border-amber-600/40 hover:shadow-lg hover:shadow-amber-900/50 hover:scale-105 relative overflow-hidden scroll-fade"
                  style={{ 
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${index * 50}ms`,
                    opacity: 0
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-600/20 to-amber-600/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  
                  {/* Icon */}
                  <div className="mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12 mx-auto rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-amber-900/50 transition-all group-hover:rotate-12 relative">
                    {isEmoji ? (
                      <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">{amenity.emoji}</span>
                    ) : (
                      <Icon size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                    )}
                    {/* Rotating border */}
                    <div className="absolute inset-0 rounded-lg border-2 border-dashed border-amber-400/30 animate-spin" style={{animationDuration: '8s'}}></div>
                  </div>
                  
                  {/* Text */}
                  <h3 className="text-xs md:text-sm lg:text-base font-bold text-white mb-1 md:mb-2 text-center">{amenity.title}</h3>
                  <p className="text-white/60 text-[10px] md:text-xs leading-relaxed text-center line-clamp-2 md:line-clamp-3">{amenity.description}</p>
                  
                  {/* Corner glow */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-amber-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              )
            })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}