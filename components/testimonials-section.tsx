"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, Design Co.",
    image: "/placeholder.svg?key=user1",
    quote:
      "An exceptional experience from start to finish. The attention to detail and quality is unmatched in the industry.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Founder, Tech Startup",
    image: "/placeholder.svg?key=user2",
    quote: "Working with this team transformed our vision into reality. Highly professional and incredibly skilled.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Director, luxury Brand",
    image: "/placeholder.svg?key=user3",
    quote: "The level of sophistication and excellence they bring is truly remarkable. A pleasure to partner with.",
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
      className="py-20 lg:py-32 bg-gradient-to-b from-black to-amber-950/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
            className="text-amber-600 font-semibold text-sm uppercase tracking-wider"
          >
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">Loved by Clients</h2>
        </div>

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
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-amber-900/20 rounded-lg p-8 lg:p-12">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed italic">"{testimonial.quote}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-600"
                    />
                    <div>
                      <p
                        style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                        className="font-bold text-white"
                      >
                        {testimonial.name}
                      </p>
                      <p className="text-amber-600 text-sm">{testimonial.role}</p>
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
              className="p-2 rounded-full border border-amber-600/50 hover:border-amber-500 text-amber-600 hover:text-amber-500 transition-colors"
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
                    index === current ? "bg-amber-600 w-6" : "bg-amber-600/40 hover:bg-amber-600/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full border border-amber-600/50 hover:border-amber-500 text-amber-600 hover:text-amber-500 transition-colors"
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
