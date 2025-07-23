"use client"
import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const buttonVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <motion.div className="text-center z-10 px-4" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div
          className="glass-card p-8 md:p-12 max-w-5xl mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Hero Image */}
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6" variants={imageVariants}>
              <Image
                src="/placeholder.svg?height=160&width=160&text=Hero+Photo"
                alt="John Doe - Hero Photo"
                width={160}
                height={160}
                className="w-full h-full object-cover rounded-full border-3 border-green-500/50 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/10 to-emerald-500/10"></div>
              {/* Animated glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-sm"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span
              className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              John Doe
            </motion.span>
          </motion.h1>

          <motion.p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed" variants={itemVariants}>
            Full Stack Developer & Creative Problem Solver
          </motion.p>

          <motion.p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto" variants={itemVariants}>
            I craft beautiful, functional web experiences that bring ideas to life. Passionate about modern technologies
            and clean, efficient code.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <motion.button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-button px-8 py-3 text-white font-semibold rounded-full"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-button-secondary px-8 py-3 text-white font-semibold rounded-full"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <ChevronDown className="text-white w-8 h-8" />
      </motion.div>
    </section>
  )
}
