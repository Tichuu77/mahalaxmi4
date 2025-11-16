"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, MapPin, Award, TrendingUp, Phone } from "lucide-react"

export default function HeroSection() {
  const videoRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.js'
    script.async = true
    document.body.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    script.onload = () => {
      if (window.cloudinary && videoRef.current) {
        window.cloudinary.videoPlayer('cloudinary-player', {
          cloud_name: 'dxujnm2sl',
          publicId: 'Mahalaxmi_1_1_v6khvx',
          controls: false,
          autoplay: true,
          loop: true,
          muted: true,
          fluid: false,
          playsinline: true,
          bigPlayButton: false,
          showLogo: false,
          preload: 'auto',
        })
      }
    }

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
      if (document.head.contains(link)) document.head.removeChild(link)
    }
  }, [])

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div ref={videoRef} className="w-full h-full">
          <video
            id="cloudinary-player"
            className="cld-video-player"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              filter: 'brightness(0.65)'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        
        {/* Badge */}
        <div className={`inline-flex items-center lg:mt-4 gap-2 px-4 py-2 bg-primary rounded-full shadow-lg mb-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Award className="w-4 h-4 text-foreground" />
          <span className="text-xs font-bold text-foreground uppercase tracking-wide">
            RERA • NMRDA Approved
          </span>
        </div>

        {/* Main Heading */}
        <div className={`mb-6 transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-3">
            Build Your Dream Home
          </h1>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-3">
            With Mahalaxmi Developers
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className={`text-base sm:text-xl text-primary/90 mb-6 max-w-2xl transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Residential & Commercial Plots in Heart of Nagpur
        </p>

        {/* Special Offer Box */}
        <div className={`bg-gradient-to-r from-secondary to-secondary/90 rounded-xl p-4 sm:p-5 mb-6 max-w-xl shadow-xl border border-white/20 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 animate-pulse" />
            <div>
              <p className="text-primary font-bold text-sm sm:text-base mb-1">Best Investment Opportunity</p>
              <p className="text-primary/90 text-xs sm:text-sm">₹22 Lakh Only at Samruddhi Circle</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <button 
            onClick={() => handleScrollToSection("contact")}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-foreground rounded-lg font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:scale-105"
          >
            <Phone size={18} />
            Contact Us Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => handleScrollToSection("projects")}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-primary rounded-lg font-bold text-sm sm:text-base transition-all duration-300 border-2 border-white/30 hover:border-primary/50 shadow-lg hover:scale-105"
          >
            View Projects
          </button>
        </div>

        {/* Info Cards Grid */}
        <div className={`grid sm:grid-cols-2 gap-4 max-w-4xl transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          
          {/* Locations Card */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-tcol flex-shrink-0" />
              <h3 className="text-base sm:text-lg font-bold text-primary">Prime Locations</h3>
            </div>
            <p className="text-xs sm:text-sm text-primary/90 leading-relaxed">
              Besa, Beltarodi, Shankarpur, Wardha Road, Jamtha, Katol Road, Umred Road, Koradi Road & Samruddhi Circle
            </p>
          </div>

          {/* Stats Card */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-xl">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-tcol mb-1">15+</div>
                <div className="text-xs text-primary/90">Projects</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-tcol mb-1">500+</div>
                <div className="text-xs text-primary/90">Clients</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-tcol mb-1">100%</div>
                <div className="text-xs text-primary/90">RERA</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce transition-all duration-700 delay-600 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 bg-black/20 backdrop-blur-sm">
          <div className="w-1.5 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

declare global {
  interface Window {
    cloudinary: {
      videoPlayer: (elementId: string, options: any) => any;
    };
  }
}