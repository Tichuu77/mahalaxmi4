"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e:any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Get in Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-4">Contact Us</h2>
          <p className="text-primary/60 text-lg mt-4 max-w-2xl mx-auto">
            Have a question or ready to get started? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 scroll-fade">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <a href="tel:+198530003338" className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <Phone size={22} />
                </a>
                <div>
                  <h3
                    style={{ fontFamily: "var(--font-heading)" }}
                    className="font-bold text-primary mb-1"
                  >
                    Phone
                  </h3>
                  <p className="text-primary/60">+198530003338</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <a href="mailto:siddhantbansod44@gmail.com" className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <Mail size={22} />
                </a>
                <div>
                  <h3
                    style={{ fontFamily: "var(--font-heading)" }}
                    className="font-bold text-primary mb-1"
                  >
                    Email
                  </h3>
                  <p className="text-primary/60">siddhantbansod44@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3
                    style={{ fontFamily: "var(--font-heading)" }}
                    className="font-bold text-primary mb-1"
                  >
                    Address
                  </h3>
                  <p className="text-primary/60">Nagpur Maharashtra India 441106</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-fade" style={{ animationDelay: "100ms" }}>
            <div className="space-y-6 bg-background border border-border p-8 rounded-lg">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-primary font-medium">Thanks for reaching out!</p>
                  <p className="text-muted-primary text-sm mt-1">We'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="block text-primary font-medium mb-2 text-sm">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary/80 border border-border rounded text-white placeholder:text-muted-primary focus:border-ring focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-primary font-medium mb-2 text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary/80 border border-border rounded text-white placeholder:text-muted-primary focus:border-ring focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-primary font-medium mb-2 text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-primary/80 border border-border rounded text-white placeholder:text-muted-white focus:border-ring focus:outline-none transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full px-6 py-3 bg-primary hover:bg-primary/80 text-white hover:text-white rounded font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}