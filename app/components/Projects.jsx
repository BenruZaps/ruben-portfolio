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
      title: "“SCHED - NU” Scheduling Management Web Application",
      description: `Developed a full stack scheduling system for National University Baliwag using Next.js 15
(React 19), Tailwind CSS, and MongoDB, featuring real-time notifications and chat via
Pusher. Implemented secure authentication, role-based access control, and dynamic
calendar views with FullCalendar. Built PDF export functionality, managed complex state
with Zustand, and optimized data handling with advanced MongoDB aggregation.
Designed with a focus on conflict prevention, usability, and performance through clean
architecture and server-side rendering. `,
      shortDesc: "NU - Baliwag Scheduling Management Web Application",
      tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB", "Pusher", "PHPMailer", "Zustand", "Full Calendar JS"],
      images: [
        "/schednu/1.png",
        "/schednu/2.png",
        "/schednu/3.png",
        "/schednu/4.png",
        "/schednu/5.png",
        "/schednu/6.png",
        "/schednu/7.png",
        "/schednu/8.png",
        "/schednu/9.png",
        "/schednu/10.png",
      ],
      github: "https://github.com/BenruZaps/schednu",
      live: "https://schednu.onrender.com",
    },
    {
      id: 2,
      title: "Orange Panda POS Mobile App",
      description:
        `Orange Panda POS is a modern Android-based Point-of-Sale system developed using Flutter,
tailored specifically for restaurants and food businesses. Designed through real client
feedback, it features secure user authentication, dynamic menu and order management,
support for various order types and payment methods, Bluetooth receipt printing, and
detailed sales reporting. The app emphasizes customization, usability, and sleek UI, making
it a robust POS solution for fast-paced dining environments `,

      shortDesc: "Orange Panda POS is a modern Android-based Point-of-Sale system",
      tech: ["Flutter", "Material UI", "Hive DB",],
      images: [
        "/orange/1.jpg",
        "/orange/2.jpg",
        "/orange/3.jpg",
        "/orange/4.jpg",
        "/orange/5.jpg",
        "/orange/6.jpg",
        "/orange/7.jpg",
        "/orange/8.jpg",
        "/orange/9.jpg",
        "/orange/10.jpg",

      ],
      github: "https://github.com/BenruZaps/orange_panda",
      // live: "https://example.com",
    },
    {
      id: 3,
      title: "Jamcris Trading E-commerce Mobile App",
      description:
        `Developed a mobile platform for Jamcris Trading Surplus to facilitate buying and selling
surplus car parts. The app featured real-time messaging, e-commerce functionality, and
secure Stripe payment processing. Built with FlutterFlow for a responsive UI and Firebase for
back-end services, including real-time database management and user authentication. This
project enhanced my skills in creating scalable, functional apps with integrated messaging,
payments, and seamless user experiences.`,
      shortDesc: `Mobile platform for Jamcris Trading Surplus to facilitate buying and selling surplus car parts`,
      tech: ["Flutter", "Firebase", "FlutterFlow"],
      images: [
        "/jamcris/1.jpg",
        "/jamcris/2.jpg",
        "/jamcris/3.jpg",
        "/jamcris/4.jpg",
        "/jamcris/5.jpg",
        "/jamcris/6.jpg",
        "/jamcris/7.jpg",
        "/jamcris/8.jpg",
        "/jamcris/9.jpg",
        "/jamcris/10.jpg",

      ],
      // github: "https://github.com",
      // live: "https://example.com",
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
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My{" "}
            <motion.span
              className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Projects
            </motion.span>
          </motion.h2>
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
