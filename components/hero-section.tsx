"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const videoRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Load Cloudinary Video Player script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.js'
    script.async = true
    document.body.appendChild(script)

    // Load Cloudinary Video Player CSS
    const link = document.createElement('link')
    link.href = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    script.onload = () => {
      // Initialize Cloudinary player
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
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
    }
  }, [])

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen   flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background - Cloudinary */}
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
              filter: 'brightness(0.4)'
            }}
          />
        </div>
        {/* Enhanced gradient overlay with primary tones */}
        <div className="absolute inset-0  pointer-events-none" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-[1]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-xl animate-pulse"
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance leading-tight drop-shadow-lg">
            Build Your Dream Home With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/90 to-secondary">
              Mahalaxmi Developers
            </span>{" "}
            In Nagpur
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90 mb-6 text-balance leading-tight drop-shadow-lg">
            Residential & Commercial Plots Heart Of City Nagpur
          </h2>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 inline-block py-2 px-6 bg-primary mb-4 shadow-lg ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-sm sm:text-base text-white font-medium tracking-wide">
            NMRDA SANCTION | RERA APPROVED PROJECTS
          </h3>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-base sm:text-lg text-white/70 mb-8 text-balance max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Location- Besa, Beltarodi, Shankarpur, Wardha Road, Jamtha, Katol Road, Umred Road, Koradi Road & Samruddhi Circle Nagpur
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-400 flex flex-col sm:flex-row gap-4 justify-center mb-8 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button 
            onClick={() => handleScrollToSection("contact")}
            className="group hover:cursor-pointer px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/50 hover:shadow-2xl hover:scale-105"
          >
            Contact Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => handleScrollToSection("projects")}
            className="px-8 hover:cursor-pointer py-4 bg-white/10 hover:bg-white/20 text-white rounded font-semibold transition-all duration-300 border border-white/20 hover:scale-105 hover:border-primary/50"
          >
            Explore Projects
          </button>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 inline-block bg-primary py-3 px-6 rounded shadow-lg ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-white text-sm sm:text-base font-medium">
            Best For Investment @ ₹22 Lakh Only on Samruddhi Circle Nagpur
          </h3>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce transition-all duration-1000 delay-600 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

// TypeScript declaration for Cloudinary
declare global {
  interface Window {
    cloudinary: {
      videoPlayer: (elementId: string, options: any) => any;
    };
  }
}