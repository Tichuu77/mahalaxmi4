import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-amber-900/20 relative overflow-hidden pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-700 to-amber-900 rounded"></div>
              <span
                style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                className="font-bold text-white text-lg"
              >
                Premium
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
              {["About", "Projects", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-amber-600 transition-colors text-sm">
                    {link}
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
              {["Blog", "Documentation", "Support", "FAQ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-amber-600 transition-colors text-sm">
                    {link}
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

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; {currentYear} Premium. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-600 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
