"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    src: "/luxury-details-close-up.jpg",
    alt: "Luxury Details",
  },
  {
    id: 2,
    src: "/premium-materials-texture.jpg",
    alt: "Premium Materials",
  },
  {
    id: 3,
    src: "/elegant-lighting-design.jpg",
    alt: "Elegant Lighting",
  },
  {
    id: 4,
    src: "/modern-furniture-arrangement.jpg",
    alt: "Modern Furniture",
  },
  {
    id: 5,
    src: "/architectural-details.jpg",
    alt: "Architecture",
  },
  {
    id: 6,
    src: "/luxury-ambiance-setting.jpg",
    alt: "Ambiance",
  },
]

export function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
            className="text-amber-600 font-semibold text-sm uppercase tracking-wider"
          >
            Gallery
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">Visual Inspiration</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer relative h-64 rounded-lg overflow-hidden scroll-fade"
              onClick={() => setSelectedId(item.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                  <div
                    className="w-0 h-0 border-l-8 border-r-0 border-t-5 border-b-5 border-l-white border-t-transparent border-b-transparent ml-1"
                    style={{
                      borderLeft: "8px solid white",
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedId !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedId(null)}
        >
          <div className="relative max-w-4xl w-full h-[70vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems.find((item) => item.id === selectedId)?.src || "/placeholder.svg"}
              alt="Gallery"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
