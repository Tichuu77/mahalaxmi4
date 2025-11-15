"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What makes your service premium?",
    answer:
      "Our commitment to excellence spans every aspect of our work. From sourcing the finest materials to employing expert craftsmanship, we ensure exceptional quality in every deliverable.",
  },
  {
    id: 2,
    question: "How do you ensure fast performance?",
    answer:
      "We utilize cutting-edge optimization techniques, including lazy loading, code splitting, and performance monitoring. Our infrastructure is designed for speed and reliability.",
  },
  {
    id: 3,
    question: "What is your security approach?",
    answer:
      "Security is paramount. We implement enterprise-grade encryption, regular security audits, and follow industry best practices to protect your data at all times.",
  },
  {
    id: 4,
    question: "Do you offer 24/7 support?",
    answer:
      "Yes, our dedicated support team is available around the clock to assist with any questions or concerns. We pride ourselves on rapid response times.",
  },
  {
    id: 5,
    question: "What is your uptime guarantee?",
    answer:
      "We guarantee 99.9% uptime with multiple redundancies and failover systems in place to ensure your service is always available.",
  },
  {
    id: 6,
    question: "Can I customize the service for my needs?",
    answer:
      "Absolutely. Every solution is tailored to your specific requirements. We work closely with clients to ensure the final product perfectly meets their expectations.",
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-32 bg-background relative">
      <div className="max-w-[60%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-4 text-balance">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border border-primary/20 rounded-lg overflow-hidden scroll-fade"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors text-left"
              >
                <span
                  style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                  className="font-semibold text-primary"
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-primary hover:cursor-pointer transition-transform duration-300 flex-shrink-0 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-6 py-4 bg-primary/5 border-t border-primary/20 animate-in slide-in-from-top-2 duration-200">
                  <p className="text-primary/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
