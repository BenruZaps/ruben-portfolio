"use client"
import { useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"
import Image from "next/image"
import ImageCarousel from "./ImageCarousel"
import { motion, AnimatePresence } from "framer-motion"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A comprehensive full-stack e-commerce solution featuring modern UI design, seamless checkout experience, real-time inventory management, and advanced analytics dashboard. Built with scalability in mind to handle thousands of concurrent users.",
      shortDesc: "Modern e-commerce platform with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, advanced filtering, time tracking, and comprehensive reporting. Includes mobile-responsive design and offline functionality.",
      shortDesc: "Collaborative task management with real-time updates",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind", "PWA"],
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful and intuitive weather dashboard featuring detailed forecasts, interactive maps, weather alerts, historical data analysis, and customizable widgets. Supports multiple locations and provides accurate weather predictions.",
      shortDesc: "Interactive weather dashboard with forecasts",
      tech: ["React", "Weather API", "Chart.js", "CSS3", "PWA"],
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.2 },
    },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card-dark p-6 cursor-pointer group"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                className="relative overflow-hidden rounded-lg mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{project.shortDesc}</p>

              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </motion.div>

              <div className="flex space-x-3">
                <motion.button
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </motion.button>
                <motion.button
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Live</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass-card-dark max-w-5xl w-full max-h-[90vh] overflow-y-auto"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                    <motion.button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors p-2"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X size={24} />
                    </motion.button>
                  </div>

                  {/* Image Carousel */}
                  <ImageCarousel images={selectedProject.images} title={selectedProject.title} />

                  <div className="mt-6">
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">{selectedProject.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tech.map((tech, index) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button px-6 py-3 text-white font-semibold rounded-full flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </motion.a>
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button-secondary px-6 py-3 text-white font-semibold rounded-full flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
