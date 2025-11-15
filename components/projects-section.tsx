"use client"

import { useState } from "react"
import { ArrowRight, MapPin, Phone } from "lucide-react"

type Project = {
  id: number
  title: string
  image: string
  description: string
  location: string
  status: string
}

const projects: {
  completed: Project[]
  ongoing: Project[]
  upcoming: Project[]
} = {
  ongoing: [
    {
      id: 2,
      title: "Mahalaxmi Nagar-31",
      image: "/ongoingProject8.webp",
      description: `This Project Ready to Move and Fully Residential Layout Are Located Besa-Pipla Road Opposite Zudio, Croma on Prime Location and upto 90% Bank Finance Available.`,
      location: `MOUZA - PIPLA`,
      status: "ongoing"
    },
    {
      id: 3,
      title: "Mahalaxmi Nagar-39",
      image: "/ongoingProject5.webp",
      description: `Katol Road Mahalaxmi Developers Launched Project Mahalaxmi Nagar-39 This Project Located Fetri (Chicholi) New Outer Ring Road Touch Layout.`,
      location: `MOUZA - CHICHOLI`,
      status: "ongoing"
    },
    {
      id: 4,
      title: "Mahalaxmi Nagar-41",
      image: "/ongoingProject3.webp",
      description: `Located Near Samruddhi Mahamarg on South Nagpur Premium Layout Mahalaxmi Nagar-41 This Premium Luxury Club House & Swimming Pool NMRDA & RL Project Aminities and Easy Bank Finance Available upto 90% 
A Prime Location in Nagpur for Smart Investment.`,
      location: `MOUZA - GOMGAON`,
      status: "ongoing"
    },
    {
      id: 5,
      title: "Mahalaxmi Nagar - 42",
      image: "/ongoingProject2.webp",
      description: `Mahalaxmi Nagar – 42, near Jamtha on Wardha Road, offers well-connected plots perfect for homes or businesses. Approved by NMRDA and equipped with RL, this project comes with excellent amenities and easy bank finance options.
Best for investment to buy plots in Nagpur.`,
      location: `MOUZA - JAMTHA`,
      status: "ongoing"
    },
    {
      id: 6,
      title: "Mahalaxmi Nagar - 43",
      image: "/ongoingProject10.webp",
      description: `Ready to Move Project by Mahalaxmi Nagar-43 offering Residential Plot With Aminities Behind Royal Gondwana School & Singapure City Shankarpur, Nagpur 
An Affordable Price & Fully Developed NMRDA & RL upto 90% Bank Finance Available.`,
      location: `MOUZA - SHANKARPUR`,
      status: "ongoing"
    },
    {
      id: 7,
      title: "Mahalaxmi Nagar - 45",
      image: "/ongoingProject11.webp",
      description: `Mahalaxmi Nagar-45 is a Premium Residential Plotted Development Project Located South Nagpur Near Samruddhi Mahamarg
Location - The Project is Situated in Mouza - Sumthana Behind Godrej Properties Close to D- Mart Connectivity - The Location Offers Excellent Connectivity to Major City Hubs, Including Nagpur Airport, AIIMS, IIM, TCS, INFOSYS,TECH MAHINDRA, Patanjali as soon as Mihan.`,
      location: `MOUZA - SHANKARPUR`,
      status: "ongoing"
    },
    {
      id: 11,
      title: "Mahalaxmi Nagar - 47",
      image: "/ongoingProject12.jpg",
      description: `Mahalaxmi Developers New Project Launch In Koradi Road,(Nanda) This Project Located are Behind Haldiram,AM Cinema,Rokde Jwellers & Naivedyam Hotel
This Project Fully NMRDA & RL Residential Plotted Project With upto 90% Bank Finance Available.`,
      location: `MOUZA - KORADI ROAD HALDIRAM & AM CINEMA BACKSIDE`,
      status: "ongoing"
    },
  ],
  completed: [
    {
      id: 12,
      title: "Mahalaxmi Nagar - 37",
      image: "/completedProject1.webp",
      description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 37. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - KOTEWADA`,
      status: "completed"
    },
    {
      id: 13,
      title: "Mahalaxmi Nagar - 35",
      image: "/completedProject2.webp",
      description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 35. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - KOTEWADA`,
      status: "completed"
    },
    {
      id: 14,
      title: "Mahalaxmi Nagar - 34",
      image: "/completedProject3.webp",
      description: `Mahalaxmi Developers launched the project Mahalaxmi Nagar 34. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - BAHADURA`,
      status: "completed"
    },
  ],
 upcoming: [
      {
        id: 15,
        title: "Mahalaxmi Nagar - 48",
        image: "/plotDef.avif",
        description : ``,
        location: ``,
        status: "upcoming"
      },
      {
        id: 16,
        title: "Mahalaxmi Nagar - 49",
        image: "/plotDef.avif",
        description : ``,
        location: ``,
        status: "upcoming"
      },
      {
        id: 17,
        title: "Mahalaxmi Nagar - 50",
        image: "/plotDef.avif",
        description : ``,
        location: ``,
        status: "upcoming"
      },
    ]
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)

  const statusColors = {
    completed: "bg-green-500/80 text-white border-green-500/40",
    ongoing: "bg-blue-500/80 text-white border-blue-500/40",
    upcoming: "bg-primary/80 text-white border-primary/40",
  }

  const statusLabels = {
    completed: "✓ Completed",
    ongoing: "⚡ Ongoing",
    upcoming: "🚀 Upcoming",
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in the project "${project.title}" located at ${project.location}. Could you share more details?`
    const url = `https://wa.me/918766887828?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div
      className="group bg-gradient-to-br from-white/5 to-transparent rounded-xl overflow-hidden border border-amber-900/20 hover:border-primary/40 hover:shadow-lg hover:shadow-amber-900/50 transition-all duration-300 hover:scale-105 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animation: 'fadeInUp 0.6s ease-out forwards',
        opacity: 0
      }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>

      {/* Image Container */}
      <div className="relative h-48 md:h-64 overflow-hidden bg-black/50">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm ${statusColors[project.status as keyof typeof statusColors]}`}>
            {statusLabels[project.status as keyof typeof statusLabels]}
          </span>
        </div>

        {/* Title Overlay on Mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden">
          <h3 className="text-primary font-bold text-lg drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 relative z-10">
        {/* Title - Desktop only */}
        <h3 className="hidden md:block text-xl font-bold text-primary mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-primary/60 mb-3">
          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
          <p className="text-sm font-medium">{project.location}</p>
        </div>

        {/* Description */}
        <p className="text-primary/60 text-xs md:text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-3">
          {project.description}
        </p>

        {/* Action Button */}
        <div className="flex gap-2">
          <button
            onClick={handleWhatsApp}
            className="flex-1 bg-gradient-to-r from-primary to-primary text-white py-2.5 md:py-3 px-4 rounded-lg font-semibold hover:from-primary hover:to-primary hover:shadow-lg hover:shadow-amber-900/50 transition-all flex items-center justify-center gap-2 group/btn"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm md:text-base">Contact Us</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Quick Info Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">
            NMRDA Approved
          </span>
          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
            Bank Finance
          </span>
        </div>
      </div>

      {/* Corner glow */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  )
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "ongoing" | "upcoming">("all")

  const allProjects = [
    ...projects.completed,
    ...projects.ongoing,
    ...projects.upcoming,
  ]

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((project) => project.status === activeTab)

  return (
    <section id="projects" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div> */}

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-primary/20 rounded-full border border-primary/40 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
              <span
                style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                className="text-primary font-semibold text-sm uppercase tracking-wider"
              >
                Portfolio
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-4 text-balance">Our Projects</h2>
            <p className="text-primary/60 text-lg mt-4 max-w-2xl">
              Explore our portfolio of completed, ongoing, and upcoming developments
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
          {[
            { label: "All Projects", value: "all", icon: "🏢" },
            { label: "Completed", value: "completed", icon: "✓" },
            { label: "Ongoing", value: "ongoing", icon: "⚡" },
            { label: "Upcoming", value: "upcoming", icon: "🚀" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`px-5 md:px-6 py-2.5 rounded-full font-semibold transition-all text-sm md:text-base ${
                activeTab === tab.value
                  ? "bg-gradient-to-r from-primary to-primary text-white shadow-lg shadow-primary/50"
                  : "bg-white/5 text-primary/70 hover:bg-white/10 border border-primary-900/20 hover:border-primary/40"
              }`}
            >
              <span className="mr-1">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏗️</div>
            <p className="text-primary/60 text-lg">
              No projects available under this category.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}