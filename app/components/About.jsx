"use client"
import { useEffect, useState } from "react"
import { Code, Palette, Zap, GraduationCap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    { icon: Code, title: "Development", desc: "React, Next.js, Node.js, Python" },
    { icon: Palette, title: "Design", desc: "UI/UX, Figma, Adobe Creative Suite" },
    { icon: Zap, title: "Performance", desc: "Optimization, SEO, Best Practices" },
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital experiences that are both beautiful
            and functional.
          </p>
        </motion.div>

        {/* Photo and Story Section - Equal Height Cards */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Photo Card */}
          <motion.div
            className="glass-card p-8 text-center flex flex-col justify-center min-h-[500px]"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="relative w-64 h-64 mx-auto mb-8"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/placeholder.svg?height=256&width=256&text=Your+Photo"
                  alt="John Doe - Profile Photo"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover rounded-full border-4 border-green-500/50 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/20 to-emerald-500/20"></div>
                {/* Animated decorative ring */}
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-green-400/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>
            </motion.div>

            <motion.h3
              className="text-3xl font-bold text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              John Doe
            </motion.h3>

            <motion.p
              className="text-green-400 font-semibold text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed text-base max-w-sm mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Passionate about creating innovative solutions and bringing ideas to life through code.
            </motion.p>
          </motion.div>

          {/* Story Card */}
          <motion.div
            className="glass-card p-8 flex flex-col justify-center min-h-[500px]"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.h3
              className="text-3xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              My Story
            </motion.h3>

            <motion.p
              className="text-gray-300 mb-8 leading-relaxed text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Started my journey in web development during college, where I discovered my passion for creating intuitive
              user experiences. Since then, I've worked with startups and established companies to bring their visions
              to life.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or
              enjoying a good cup of coffee while sketching out new ideas.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div className="glass-card p-8" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Science</h4>
                  <p className="text-green-400 font-medium mb-1">University of Technology</p>
                  <p className="text-gray-400 text-sm mb-2">2018 - 2022</p>
                  <p className="text-gray-300 text-sm">
                    Graduated Magna Cum Laude with a focus on Software Engineering and Web Development.
                  </p>
                </div>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-2">Full Stack Web Development</h4>
                  <p className="text-green-400 font-medium mb-1">Coding Bootcamp</p>
                  <p className="text-gray-400 text-sm mb-2">2022</p>
                  <p className="text-gray-300 text-sm">
                    Intensive 6-month program covering modern web technologies and industry best practices.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="mt-8 pt-6 border-t border-gray-700/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Certifications</h4>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "AWS Certified Developer",
                  "Google Cloud Professional",
                  "React Developer Certification",
                  "MongoDB Certified",
                ].map((cert, index) => (
                  <motion.span
                    key={cert}
                    className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30"
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          duration: 0.4,
                          delay: index * 0.1,
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {cert}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills Section - Smaller Cards in Row */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} className="glass-card p-6 text-center" variants={cardVariants} whileHover="hover">
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <h4 className="text-xl font-semibold text-white mb-2">{skill.title}</h4>
              <p className="text-gray-300 text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
