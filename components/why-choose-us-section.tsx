"use client"

import { Check, Zap, Trophy, Users, Heart, Lightbulb } from "lucide-react"

const reasons = [
  {
    icon: Trophy,
    title: "Proven Excellence",
    description: "Award-winning solutions trusted by industry leaders",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Cutting-edge technology and forward-thinking approach",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with years of experience",
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description: "Your satisfaction is our top priority always",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "Tailored approaches for unique challenges",
  },
  {
    icon: Check,
    title: "Quality Assured",
    description: "Rigorous standards and quality control processes",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
            className="text-amber-600 font-semibold text-sm uppercase tracking-wider"
          >
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">The Difference We Make</h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            Discover what sets us apart from the competition and why leading brands choose us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-lg border border-amber-900/20 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-300 hover:border-amber-600/40 hover:shadow-lg hover:shadow-amber-900/20 scroll-fade"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-amber-900/50 transition-all">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>

        {/* Additional benefits section */}
        <div className="mt-16 p-8 rounded-lg border border-amber-900/30 bg-gradient-to-r from-amber-900/10 to-transparent">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Track Record</h3>
              <ul className="space-y-3">
                {["10+ years industry experience", "500+ satisfied clients", "Industry-leading satisfaction rate"].map(
                  (benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <Check size={20} className="text-amber-600 flex-shrink-0" />
                      <span className="text-white/80">{benefit}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Support</h3>
              <ul className="space-y-3">
                {["24/7 customer support", "Regular updates & training", "Dedicated account managers"].map(
                  (benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <Check size={20} className="text-amber-600 flex-shrink-0" />
                      <span className="text-white/80">{benefit}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
