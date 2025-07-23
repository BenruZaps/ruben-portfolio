"use client"
import { useEffect, useState } from "react"
import { Code, Database, Cloud, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      iconColor: "from-cyan-500 to-blue-500",
      skills: ["Next.js", "React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "TypeScript", "Vue.js"],
    },
    {
      title: "Backend Development",
      icon: Database,
      iconColor: "from-purple-500 to-pink-500",
      skills: ["Node.js", "PHP", "MongoDB", "SQL", "Firebase", "Express.js", "Python", "PostgreSQL"],
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      iconColor: "from-green-500 to-emerald-500",
      skills: ["AWS", "GitHub", "Bit Bucket", "SendGrid", "Docker", "Vercel", "Git", "Linux"],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      iconColor: "from-orange-500 to-red-500",
      skills: ["Flutter Flow", "Flutter", "Java", "React Native", "Kotlin", "Swift"],
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(34, 197, 94, 0.2)",
      transition: { duration: 0.2 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
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
            Technical{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Skills
            </motion.span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} className="glass-card-dark p-8" variants={cardVariants} whileHover="hover">
              {/* Category Header */}
              <motion.div
                className="flex items-center mb-6"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <motion.div
                  className={`p-3 bg-gradient-to-r ${category.iconColor} rounded-xl mr-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </motion.div>

              {/* Skills Grid */}
              <motion.div
                className="grid grid-cols-2 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="glass-card p-3 text-center cursor-pointer"
                    variants={skillVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    custom={skillIndex}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    <span className="text-gray-300 font-medium text-sm">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
