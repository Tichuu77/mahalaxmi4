"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

  const  guides = [
    {
      number: "01",
      title: "Explore Properties",
      description:
        "Browse through our extensive collection of premium residential and commercial properties in Nagpur.",
      icon: "🏠",
      details: [
        "Visit our website and create an account",
        "Filter properties by location, price, and amenities",
        "Save your favorite properties to a wishlist",
      ],
    },
    {
      number: "02",
      title: "Schedule Site Visit",
      description:
        "Book a personalized site visit with our expert consultants to experience the property firsthand.",
      icon: "📅",
      details: [
        "Select your preferred date and time",
        "Our team will confirm your visit within 24 hours",
        "Receive directions and consultant contact details",
      ],
    },
    {
      number: "03",
      title: "Consultation & Financing",
      description:
        "Get expert advice on financing options and investment benefits from our experienced team.",
      icon: "💼",
      details: [
        "Discuss investment strategies with our experts",
        "Explore various financing and payment options",
        "Get personalized financial advice",
      ],
    },
    {
      number: "04",
      title: "Complete Purchase",
      description:
        "Finalize your investment with our transparent and hassle-free documentation process.",
      icon: "✅",
      details: [
        "Sign all required legal documents",
        "Complete payment processing",
        "Receive your property documentation",
      ],
    },
  ]

export function UserGuideSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="user-guide" className="py-20 lg:py-32 bg-background relative">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            User Guide
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-4 text-balance">How to Get Started</h2>
          <p className="text-white/60 text-lg mt-4">Follow our simple step-by-step guide to maximize your experience</p>
        </div>

        <div className="space-y-4">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="border border-primary/20 rounded-lg overflow-hidden bg-gradient-to-r from-primary/5 to-transparent hover:border-primary/40 transition-all duration-300 scroll-fade"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:from-white/10 hover:to-transparent transition-all"
              >
                <div className="flex items-center gap-6 text-left">
                  <div className="text-4xl font-bold text-primary opacity-40">{guide.number}</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{guide.title}</h3>
                    <p className="text-black/60 text-sm mt-1">{guide.description}</p>
                  </div>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-primary hover:cursor-pointer transition-transform duration-300 flex-shrink-0 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              {expandedIndex === index && (
                <div className="px-6 pb-6 pt-0 border-t border-primary/20">
                  <ul className="space-y-3">
                    {guide.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-primary/80 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="mt-12 p-8 rounded-lg border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent">
          <h3 className="text-2xl font-bold text-primary mb-4">Quick Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-primary font-semibold mb-2">💡 Pro Tip</div>
              <p className="text-primary/70 text-sm">
                Use keyboard shortcuts to navigate faster. Check the help menu for a complete list.
              </p>
            </div>
            <div>
              <div className="text-primary font-semibold mb-2">🎯 Best Practice</div>
              <p className="text-primary/70 text-sm">
                Regularly review your settings and integrations to ensure optimal performance.
              </p>
            </div>
            <div>
              <div className="text-primary font-semibold mb-2">📚 Resources</div>
              <p className="text-primary/70 text-sm">
                Visit our knowledge base and community forum for additional help and advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
