"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
            className="text-amber-600 font-semibold text-sm uppercase tracking-wider"
          >
            Get in Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">Contact Us</h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            Have a question or ready to get started? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 scroll-fade">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <Phone size={22} />
                </div>
                <div>
                  <h3
                    style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                    className="font-bold text-white mb-1"
                  >
                    Phone
                  </h3>
                  <p className="text-white/60">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <Mail size={22} />
                </div>
                <div>
                  <h3
                    style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                    className="font-bold text-white mb-1"
                  >
                    Email
                  </h3>
                  <p className="text-white/60">hello@premium.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3
                    style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                    className="font-bold text-white mb-1"
                  >
                    Address
                  </h3>
                  <p className="text-white/60">123 Luxury Avenue, Premium City, PC 12345</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-amber-900/20">
              <p className="text-white/60 mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full border border-amber-600/50 hover:border-amber-500 hover:bg-white/5 flex items-center justify-center text-amber-600 hover:text-amber-400 transition-all"
                  >
                    <span className="text-xs font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="scroll-fade" style={{ animationDelay: "100ms" }}>
            <div className="space-y-6 bg-gradient-to-br from-white/5 to-transparent border border-amber-900/20 p-8 rounded-lg">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">Thanks for reaching out!</p>
                  <p className="text-white/60 text-sm mt-1">We'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-amber-900/20 rounded text-white placeholder-white/40 focus:border-amber-600 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-amber-900/20 rounded text-white placeholder-white/40 focus:border-amber-600 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-amber-900/20 rounded text-white placeholder-white/40 focus:border-amber-600 focus:outline-none transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-amber-900/50"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
