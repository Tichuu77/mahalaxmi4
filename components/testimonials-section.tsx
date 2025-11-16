"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

 const testimonials = [
    {
      id: 1,
      content:
        "Investing in a by Maha Laxmi Developers transparent process made effortless experience. The best decision I ever made. The local transparent process made it an effortless experience.",
      name: "Rajkumar Gharjale",
      location: "Nagpur",
      image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/1-9.png",
      rating: 5,
    },
    {
      id: 2,
      content:
        "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect. Maha Laxmi Developers exceeded my expectations. Highly recommended!",
      name: "Priya Shah",
      location: "Mumbai",
      image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/3-4.png",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Investing in residential plots with Mahalaxmi Developers was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me peace of mind.",
      name: "Karan Akojwar",
      location: "Pune",
      image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/4-2.png",
      rating: 5,
    },
  ]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-gradient-to-b from-background/20 to-primary/50 relative overflow-hidden"
    >
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max inline-flex items-center gap-2 mb-3 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse" />
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
             Testimonials
            </span>
          </div>
        </div>

        <h2
          style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
          className="my-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6"
        >
          What Our Clients Say
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative h-fit">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === current ? "opacity-100 scale-100" : "absolute opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="bg-gradient-to-br from-primary/70 to-secondary/70 border border-primary/20 rounded-lg p-8 lg:p-12">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-gradient animate-pulse fast delay-[0.2s] fill-gradient-to-br from-amber-400 from-primary to-secondary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg lg:text-xl text-primary/90 mb-8 leading-relaxed italic">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <p
                        style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                        className="font-bold text-primary mb-1"
                      >
                        {testimonial.name}
                      </p>
                      <p className="text-primary/80 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-2 bg-gradient-to-br from-primary to-secondary rounded-full hover:cursor-pointer border border-primary/50 hover:border-white text-primary hover:textwhite transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setAutoplay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-gradient-to-br from-primary to-secondary w-6" : "bg-primary/40 hover:bg-gradient-to-br from-primary to-secondary   hover:cursor-pointer"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 bg-gradient-to-br from-primary to-secondary hover:cursor-pointer rounded-full border border-primary/50 hover:border-primary text-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
