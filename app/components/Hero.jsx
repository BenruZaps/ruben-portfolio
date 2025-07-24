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

  const chevronVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.9 },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black/20">
      {/* Main content container with proper mobile spacing */}
      <motion.div 
        className="text-center z-10 px-4 pt-20 pb-24 md:pt-8 md:pb-16 w-full" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.div
          className="glass-card-dark p-6 md:p-8 max-w-5xl mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Hero Image */}
          <motion.div className="mb-6 md:mb-8" variants={itemVariants}>
            <motion.div className="relative w-28 h-28 md:w-40 md:h-40 mx-auto mb-4 md:mb-6" variants={imageVariants}>
              <Image
                src="/self/FORMAL.jpg"
                alt="Ruben Saporne - Hero Photo"
                width={160}
                height={160}
                className="w-full h-full object-cover rounded-full border-3 border-green-500/50 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full"></div>
              {/* Static white glow border */}
              <div className="absolute -inset-1 rounded-full border-4 border-green-700 shadow-[0_0_20px_rgba(0,255,91,0.5)]"></div>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span
              className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              Ruben Saporne
            </motion.span>
          </motion.h1>

          <motion.p className="text-lg md:text-2xl text-gray-200 mb-6 md:mb-8 leading-relaxed" variants={itemVariants}>
            Full Stack Developer
          </motion.p>

          <motion.p
            className="text-base md:text-lg xs:text-sm text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto text-center px-2"
            variants={itemVariants}
          >
            Welcome to my corner of the web! <br />
            I craft useful, beautiful, and fun things, where ideas come to life. <br />
            Maybe it was fate, curiosity, or a rogue click, glad you're here! <br />
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-0" variants={itemVariants}>
            <motion.button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-button px-6 md:px-8 py-3 text-white font-semibold rounded-full text-sm md:text-base"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-button-secondary px-6 md:px-8 py-3 text-white font-semibold rounded-full text-sm md:text-base"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Chevron positioned outside the card */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        variants={chevronVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          // Replace 'about' with the ID of your next section
          const nextSection = document.getElementById("about") || document.getElementById("projects")
          nextSection?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <ChevronDown className="text-white w-6 h-6 md:w-8 md:h-8" />
      </motion.div>
    </section>
  )
}