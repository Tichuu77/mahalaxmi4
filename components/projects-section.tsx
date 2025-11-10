"use client"

import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Elegant Lounge Design",
    category: "Interior",
    image: "/elegant-lounge-interior-design.jpg",
  },
  {
    id: 2,
    title: "Modern Architecture",
    category: "Building",
    image: "/modern-architecture-building.png",
  },
  {
    id: 3,
    title: "Luxury Retail Space",
    category: "Retail",
    image: "/luxury-retail-store-design.jpg",
  },
  {
    id: 4,
    title: "Premium Workspace",
    category: "Office",
    image: "/premium-office-workspace.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <div>
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-amber-600 font-semibold text-sm uppercase tracking-wider"
            >
              Portfolio
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 text-balance">Our Projects</h2>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 text-amber-600 hover:text-amber-400 font-medium transition-colors">
            View All <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer scroll-fade"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-amber-400 text-sm font-medium">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
