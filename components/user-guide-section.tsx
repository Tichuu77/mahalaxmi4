"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const guides = [
  {
    step: "01",
    title: "Getting Started",
    description: "Begin your journey with our simple onboarding process",
    details: [
      "Create your account in less than 2 minutes",
      "Complete your profile with essential information",
      "Explore the dashboard and familiarize yourself with features",
      "Watch our quick tutorial videos for guidance",
    ],
  },
  {
    step: "02",
    title: "Setup & Configuration",
    description: "Customize settings to match your needs",
    details: [
      "Configure your preferences in the settings panel",
      "Set up integrations with your favorite tools",
      "Manage team members and permissions",
      "Establish your workflow and automation rules",
    ],
  },
  {
    step: "03",
    title: "Advanced Features",
    description: "Master the powerful tools available",
    details: [
      "Utilize advanced analytics and reporting",
      "Create custom workflows and automation",
      "Access API documentation for integration",
      "Join our community forum for tips and tricks",
    ],
  },
  {
    step: "04",
    title: "Optimization & Support",
    description: "Get the most out of your experience",
    details: [
      "Schedule regular check-ins with support team",
      "Attend webinars and training sessions",
      "Access exclusive resources and documentation",
      "Receive personalized recommendations",
    ],
  },
]

export function UserGuideSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="user-guide" className="py-20 lg:py-32 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
            className="text-amber-600 font-semibold text-sm uppercase tracking-wider"
          >
            User Guide
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">How to Get Started</h2>
          <p className="text-white/60 text-lg mt-4">Follow our simple step-by-step guide to maximize your experience</p>
        </div>

        <div className="space-y-4">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="border border-amber-900/20 rounded-lg overflow-hidden bg-gradient-to-r from-white/5 to-transparent hover:border-amber-600/40 transition-all duration-300 scroll-fade"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:from-white/10 hover:to-transparent transition-all"
              >
                <div className="flex items-center gap-6 text-left">
                  <div className="text-4xl font-bold text-amber-600 opacity-40">{guide.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{guide.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{guide.description}</p>
                  </div>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-amber-600 transition-transform duration-300 flex-shrink-0 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              {expandedIndex === index && (
                <div className="px-6 pb-6 pt-0 border-t border-amber-900/20">
                  <ul className="space-y-3">
                    {guide.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="mt-12 p-8 rounded-lg border border-amber-900/30 bg-gradient-to-r from-amber-900/10 to-transparent">
          <h3 className="text-2xl font-bold text-white mb-4">Quick Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-amber-600 font-semibold mb-2">💡 Pro Tip</div>
              <p className="text-white/70 text-sm">
                Use keyboard shortcuts to navigate faster. Check the help menu for a complete list.
              </p>
            </div>
            <div>
              <div className="text-amber-600 font-semibold mb-2">🎯 Best Practice</div>
              <p className="text-white/70 text-sm">
                Regularly review your settings and integrations to ensure optimal performance.
              </p>
            </div>
            <div>
              <div className="text-amber-600 font-semibold mb-2">📚 Resources</div>
              <p className="text-white/70 text-sm">
                Visit our knowledge base and community forum for additional help and advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
