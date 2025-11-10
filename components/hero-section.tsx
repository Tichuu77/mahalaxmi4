"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-black to-black"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-700/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Elegance Meets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Innovation
            </span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg sm:text-xl text-white/70 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
            Experience premium design and performance optimized for the modern web. Crafted with attention to every
            detail.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 flex gap-4 justify-center ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white rounded font-semibold transition-all duration-300 flex items-center gap-2">
            Explore Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded font-semibold transition-colors border border-white/20">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
