import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t-4 border-amber-900/50 relative overflow-hidden pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 cursor-pointer">
              <img src="/Mahalaxmi Infra new Logo.png" alt="Logo" className="bg-white w-8 h-8" />
              <span
                style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                className="font-bold text-white text-lg"
              >
                 Mahalaxmi Developers
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Delivering premium solutions with excellence and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-white mb-4"
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {[{href : "#about", label : "About"}, {href : "#amenities", label : "Amenities"}, {href : "#projects", label : "Projects"}, { label: "Gallery", href: "#gallery" }, ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-amber-600 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-white mb-4"
            >
              Resources
            </h4>
            <ul className="space-y-2">
              {[ { label: "User Guide", href: "#user-guide" }, { label: "News", href: "#news" }, { href: "#testimonials", label: "Testimonials" }, { href: "#contact", label: "Contact" }].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-amber-600 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-bold text-white mb-4"
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone size={14} className="text-amber-600" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail size={14} className="text-amber-600" />
                hello@premium.com
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="text-amber-600 mt-0.5 flex-shrink-0" />
                123 Luxury Avenue
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-900/20 to-transparent my-8"></div>

      
      </div>
    </footer>
  )
}
