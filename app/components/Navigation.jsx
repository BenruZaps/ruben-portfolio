"use client"
import { useState, useEffect } from "react"
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const menuItems = [
    { name: "Home", id: "home", icon: Home },
    { name: "About", id: "about", icon: User },
    { name: "Skills", id: "skills", icon: Code },
    { name: "Experience", id: "experience", icon: Briefcase },
    { name: "Projects", id: "projects", icon: FolderOpen },
    { name: "Contact", id: "contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = menuItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
    setActiveSection(sectionId)
  }

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/10 shadow-lg" : "bg-transparent"
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="text-2xl font-bold text-white"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
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
              Portfolio
            </motion.span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div className="hidden md:flex space-x-2" variants={itemVariants}>
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.id
              const IconComponent = item.icon

              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActive
                      ? "text-white bg-green-500/20 border border-green-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <motion.div
                    animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <IconComponent size={16} />
                  </motion.div>

                  {/* Text */}
                  <span className="text-sm">{item.name}</span>

                  {/* Active indicator */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Glow effect for active item */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-green-400/10 blur-md"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Hover underline */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-400"
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              )
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden backdrop-blur-md bg-black/40 rounded-lg mt-2 p-4 border border-white/10"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.id
                const IconComponent = item.icon

                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white bg-green-500/20 border border-green-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    variants={mobileItemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Icon */}
                    <motion.div
                      animate={isActive ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className={isActive ? "text-green-400" : ""}
                    >
                      <IconComponent size={18} />
                    </motion.div>

                    {/* Text */}
                    <span>{item.name}</span>

                    {/* Active indicator dot */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-green-400 rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.button>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Active Section Indicator (Desktop) */}
      <motion.div
        className="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      />
    </motion.nav>
  )
}
