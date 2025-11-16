"use client"

import { useState } from "react"
import { ArrowRight, MapPin, Phone, CheckCircle } from "lucide-react"

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
      description: ``,
      location: ``,
      status: "upcoming"
    },
    {
      id: 16,
      title: "Mahalaxmi Nagar - 49",
      image: "/plotDef.avif",
      description: ``,
      location: ``,
      status: "upcoming"
    },
    {
      id: 17,
      title: "Mahalaxmi Nagar - 50",
      image: "/plotDef.avif",
      description: ``,
      location: ``,
      status: "upcoming"
    },
  ]
}

function ProjectCard({ project }: { project: Project }) {
  const [showFullDescription, setShowFullDescription] = useState(false)

  const statusColors = {
    completed: "bg-green-500 text-primary",
    ongoing: "bg-blue-500 text-primary",
    upcoming: "bg-secondary text-primary",
  }

  const statusLabels = {
    completed: "Completed",
    ongoing: "Ongoing",
    upcoming: "Upcoming",
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in the project "${project.title}" located at ${project.location}. Could you share more details?`
    const url = `https://wa.me/918766887828?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="bg-gradient-to-b from-secondary/20 to-primary/50 rounded-xl overflow-hidden border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status as keyof typeof statusColors]}`}>
            {statusLabels[project.status as keyof typeof statusLabels]}
          </span>
        </div>

        {/* Title on image for mobile */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-primary font-bold text-lg drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Location */}
        {project.location && (
          <div className="flex items-start gap-2 mb-3">
            <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-primary">{project.location}</p>
          </div>
        )}

       {/* Description */}
        {project.description && (
          <div className="mb-4">
            <p className={`text-xs sm:text-sm text-primary/70 ${!showFullDescription ? 'line-clamp-3' : ''}`}>
              {project.description}
            </p>
            {project.description.length > 150 && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-primary hover:cursor-pointer text-xs font-semibold mt-2 hover:underline flex items-center gap-1"
              >
                {showFullDescription ? 'Show Less' : 'Read More'}
                <ArrowRight className={`w-3 h-3 transition-transform ${showFullDescription ? 'rotate-90' : ''}`} />
              </button>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-primary/60 text-foreground text-xs rounded-full font-medium">
            NMRDA
          </span>
          <span className="px-2 py-1 bg-foreground/60 text-primary text-xs rounded-full font-medium">
            Bank Finance
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={handleWhatsApp}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2.5 sm:py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
        >
          <Phone className="w-4 h-4" />
          <span className="text-sm sm:text-base">Contact Now</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}

export  function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "ongoing" | "upcoming">("all")

  const allProjects = [
    ...projects.ongoing,
    ...projects.completed,
    ...projects.upcoming,
  ]

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((project) => project.status === activeTab)

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-primary-50 relative overflow-hidden">
      
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
           <div className="text-center">
            <div className="max inline-flex items-center gap-2 mb-3 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse" />
            <span
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider"
            >
             Our Projects
            </span>
          </div>
        </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto">
            Explore our completed, ongoing, and upcoming developments across Nagpur
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {[
            { label: "All", value: "all" },
            { label: "Ongoing", value: "ongoing" },
            { label: "Completed", value: "completed" },
            { label: "Upcoming", value: "upcoming" }
          ].map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`px-4 hover:cursor-pointer sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.value
                 ? "bg-gradient-to-r from-primary to-secondary text-foreground shadow-lg scale-105"
                  : "bg-primary/10 text-primary border border-primary hover:border-primary/50 hover:shadow-md"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🏗️</div>
            <p className="text-gray-500">No projects available in this category</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-secondary mb-4">
            Interested in our projects? Get in touch with us today!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            Contact Us
          </a>
        </div>
      </div>

      <style jsx>{`
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