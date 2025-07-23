"use client"
import { useEffect, useState } from "react"
import { Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Experience() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Creciendo Philippines Inc.",
      location: "Quezon City, Metro Manila",
      period: "2024 - 2025",
      description: [
        "Developed end-to-end web applications for real clients using Next.js (React 19), Node.js, and MongoDB, ensuring seamless front-end and back-end integration.",
        "Collaborated closely with UI/UX designers, project managers, and backend teams to deliver responsive, user-centric solutions aligned with client requirements.",
        "Built full stack features including dynamic dashboards, secure authentication, and real-time updates, contributing to the successful deployment of scalable, production-ready systems."
      ],
      technologies: ["Next.js", "React", "JavaScript", "MongoDB", "Tailwind CSS", "DaisyUI", "AWS", "SendGrid"],
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  }

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  }

  const experienceVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const dotVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
      },
    },
  }

  const bulletVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
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
            Experience
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my skills.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline line */}
          <motion.div
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500 to-emerald-500 origin-top"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {experiences.map((exp, index) => (
              <motion.div key={index} className="relative mb-12" variants={experienceVariants}>
                {/* Animated Timeline dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-4 border-gray-900"
                  variants={dotVariants}
                  whileHover={{ scale: 1.5, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-8"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <motion.div
                    className="glass-card-dark p-6"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="flex items-center space-x-2 mb-2 text-green-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                        <Calendar size={16} />
                      </motion.div>
                      <span className="text-sm font-medium">{exp.period}</span>
                    </motion.div>

                    <motion.h3
                      className="text-xl font-bold text-white mb-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {exp.title}
                    </motion.h3>

                    <motion.div
                      className="flex items-center space-x-2 mb-4 text-gray-400"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                          <MapPin size={14} />
                        </motion.div>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </motion.div>

                    {/* Bullet Points Description */}
                    <motion.ul
                      className="text-gray-300 mb-4 leading-relaxed text-left space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {exp.description.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          className="flex items-start space-x-3"
                          variants={bulletVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + bulletIndex * 0.2 }}
                        >
                          <motion.span
                            className="text-green-400 mt-1.5 flex-shrink-0"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.8 + bulletIndex * 0.2 }}
                          >
                            •
                          </motion.span>
                          <span className="text-sm">{bullet}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 1.0 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 197, 94, 0.3)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}