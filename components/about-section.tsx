"use client"

import { useEffect, useState } from "react"
import { Award, Users, Building2, CheckCircle2, TrendingUp, Shield, Home, Target } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, sqft: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { projects: 50, clients: 1000, years: 20, sqft: 500 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let current = { projects: 0, clients: 0, years: 0, sqft: 0 }

    const timer = setInterval(() => {
      current.projects = Math.min(current.projects + targets.projects / steps, targets.projects)
      current.clients = Math.min(current.clients + targets.clients / steps, targets.clients)
      current.years = Math.min(current.years + targets.years / steps, targets.years)
      current.sqft = Math.min(current.sqft + targets.sqft / steps, targets.sqft)

      setCounters({
        projects: Math.floor(current.projects),
        clients: Math.floor(current.clients),
        years: Math.floor(current.years),
        sqft: Math.floor(current.sqft)
      })

      if (
        current.projects >= targets.projects &&
        current.clients >= targets.clients &&
        current.years >= targets.years &&
        current.sqft >= targets.sqft
      ) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, increment)
  }

  const stats = [
    { value: counters.projects, suffix: "+", label: "Projects", icon: Building2 },
    { value: counters.clients, suffix: "+", label: "Happy Families", icon: Users },
    { value: counters.years, suffix: "+", label: "Years", icon: Award },
    { value: counters.sqft, suffix: "K+", label: "Sq.Ft", icon: TrendingUp }
  ]

  const features = [
    { icon: Award, title: "Premium Quality", desc: "Top-grade materials" },
    { icon: Shield, title: "Fully Legal", desc: "100% documentation" },
    { icon: Target, title: "Prime Locations", desc: "Strategic spots" },
    { icon: Home, title: "Modern Design", desc: "Contemporary style" }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
             <div className="text-center">
            <div className="max inline-flex items-center gap-2 mb-3 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse" />
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
              About Us
            </span>
          </div>
        </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
            Building Dreams Into Reality
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className={`mb-8 sm:mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          
          {/* Image with Stats Overlay */}
          <div className="relative rounded-xl overflow-hidden mb-6 sm:mb-8">
            <img 
              src="/aboutUs.webp" 
              alt="Mahalaxmi Developers" 
              className="w-full h-48 sm:h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Stats overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon
                  return (
                    <div key={idx} className="text-center">
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-tcol mx-auto mb-1" />
                      <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-[10px] sm:text-xs text-white/90">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* RERA Badge */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 shadow-lg">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-foreground" />
              <span className="text-[10px] sm:text-xs font-bold text-foreground">RERA</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-primary leading-relaxed">
              With over <span className="text-secondary font-semibold">20 years of excellence</span> in real estate, Mahalaxmi Infra has established itself as a trusted name in Nagpur. We specialize in creating premium residential and commercial properties that combine quality, location, and value.
            </p>
            <p className="text-sm sm:text-base text-primary leading-relaxed">
              Our commitment to transparency, legal compliance, and customer satisfaction has helped over 1000 families find their dream properties across Nagpur's prime locations.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 text-center">{feature.title}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-600 text-center">{feature.desc}</p>
                </div>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Our Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 pt-6 border-t border-gray-200 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-2 text-primary">
            <Shield className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium">NMRDA Sanctioned</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium">RERA Approved</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2 text-primary">
            <Award className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium">ISO Certified</span>
          </div>
        </div>
      </div>
    </section>
  )
}