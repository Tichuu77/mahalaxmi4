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
    <section id="why-choose-us" className="py-12 sm:py-20 lg:py-32 bg-background relative">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
            <div className="max inline-flex items-center gap-2 mb-3 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse" />
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
              Why Choose Us
            </span>
          </div>
        </div>
        
        

        {/* Mobile: 2 columns, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-lg border border-primary/20 bg-gradient-to-br from-white/5 to-transparent hover:from-primary/10 hover:to-primary/5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
              >
                <div className="mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary to-secondary/80 flex items-center justify-center text-primary group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                  <Icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-primary mb-1.5 sm:mb-2">{reason.title}</h3>
                <p className="text-secondary text-xs sm:text-sm lg:text-base leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>

        {/* Additional benefits section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 p-6 sm:p-8 rounded-xl sm:rounded-lg border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Proven Track Record</h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {["10+ years industry experience", "500+ satisfied clients", "Industry-leading satisfaction rate"].map(
                  (benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check size={20} className="text-primary hover:cursor-pointer flex-shrink-0 mt-0.5" />
                      <span className="text-secondary text-sm sm:text-base">{benefit}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Comprehensive Support</h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {["24/7 customer support", "Regular updates & training", "Dedicated account managers"].map(
                  (benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary text-sm sm:text-base">{benefit}</span>
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