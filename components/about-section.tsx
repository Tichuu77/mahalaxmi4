"use client"

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden scroll-fade">
            <img src="/luxury-lounge-interior.jpg" alt="Premium interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>

          {/* Right: Content */}
          <div className="scroll-fade">
            <div className="mb-4">
              <span
                style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                className="text-amber-600 font-semibold text-sm uppercase tracking-wider"
              >
                About Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Where Luxury Meets Craftsmanship
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Our brand represents a commitment to excellence in every detail. We believe that true luxury is not just
              about what you see, but how it makes you feel. Each element is carefully curated to create an
              unforgettable experience.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              With over a decade of expertise, we've established ourselves as leaders in delivering premium solutions
              that exceed expectations. Our philosophy is simple: quality over quantity, always.
            </p>
            <ul className="space-y-3">
              {["Premium Materials", "Expert Craftsmanship", "Attention to Detail"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
