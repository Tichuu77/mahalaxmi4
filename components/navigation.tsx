"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#amenities", label: "Amenities" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-700 to-amber-900 rounded"></div>
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-white text-xl"
            >
              Premium
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-amber-500 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-amber-700 hover:bg-amber-600 text-white rounded transition-colors font-medium text-sm">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-white/80 hover:text-amber-500 hover:bg-white/5 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-amber-700 hover:bg-amber-600 text-white rounded transition-colors font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
