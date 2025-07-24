"use client"
import { useEffect, useState } from "react"
import { Code, Palette, Zap, GraduationCap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault()
      return false
    }

    // Disable common keyboard shortcuts
    const handleKeyDown = (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 's')
      ) {
        e.preventDefault()
        return false
      }
    }

    // Disable drag and drop
    const handleDragStart = (e) => {
      e.preventDefault()
      return false
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('dragstart', handleDragStart)

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('dragstart', handleDragStart)
    }
  }, [])

  const skills = [
    { icon: Code, title: "Development", desc: "React, Next.js, Node.js, PHP, Laravel" },
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
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About{" "}
            <motion.span
              className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Me
            </motion.span>
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Get to know me more!
          </p>
        </motion.div>

        {/* Photo and Story Section - Responsive Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Photo Card with Protection */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 text-center flex flex-col justify-center min-h-[450px] sm:min-h-[500px]"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="relative w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 mx-auto mb-6 sm:mb-8"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full">
                {/* Protected Image Container */}
                <div
                  className="relative w-full h-full select-none"
                  style={{
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none',
                    WebkitTouchCallout: 'none',
                    WebkitUserDrag: 'none',
                    KhtmlUserSelect: 'none'
                  }}
                >
                  {/* Background pattern to make extraction harder */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.02'%3E%3Cpolygon points='0,0 0,20 10,10'/%3E%3C/g%3E%3C/svg%3E")`,
                      zIndex: 10,
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Main Image */}
                  <Image
                    src="/self/GRADPIC.jpg" // Replace with your actual photo path
                    alt="Ruben Saporne - Profile Photo"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-full border-4 border-green-500/50"
                    style={{
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      MozUserSelect: 'none',
                      msUserSelect: 'none',
                      WebkitTouchCallout: 'none',
                      WebkitUserDrag: 'none',
                      KhtmlUserSelect: 'none',
                      pointerEvents: 'none'
                    }}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    draggable={false}
                    priority
                  />

                  {/* Invisible overlay to prevent interaction */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: 'transparent',
                      zIndex: 20,
                      cursor: 'default'
                    }}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    onSelectStart={(e) => e.preventDefault()}
                  />
                </div>

                {/* Animated decorative ring */}
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-green-400/30 pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 select-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ruben Saporne
            </motion.h3>

            <motion.p
              className="text-green-400 font-semibold text-base sm:text-lg mb-4 sm:mb-6 select-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-sm mx-auto select-none px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm a passionate developer who spent the last few years honing my skills through school projects, personal builds, and lots of late-night coding. Ready to bring ideas to life.
            </motion.p>
          </motion.div>

          {/* Story Card */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-center min-h-[450px] sm:min-h-[500px]"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              My Story
            </motion.h3>

            <motion.p
              className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I started my journey in web development through school projects and classroom activities during college. At first, it was all about completing requirements, but the more I built, the more I enjoyed the process.
              <br /> <br />
              As the projects got more complex, I found myself diving deeper into design, layout, and user experience. Each line of code felt like progress, and over time, what began as simple tasks turned into a genuine passion.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Since then, I've worked on several projects that challenged me to grow both technically and creatively. Now, I'm excited and ready to apply these skills in a real-world setting and contribute to the tech industry.
              <br /> <br />
              Outside of coding, I enjoy exploring new technologies and unwinding with a good cup of coffee while sketching out new ideas.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8" 
            whileHover={{ scale: 1.02 }} 
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-2 sm:p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 sm:mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Education</h3>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="border-l-4 border-green-500 pl-4 sm:pl-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">BS Information Technology with Specialization in Mobile and Web Application</h4>
                  <p className="text-green-400 font-medium mb-1 text-sm sm:text-base">National University - Baliwag</p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2">2021 - 2025</p>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Graduated in 2025 with a focus on Web and Mobile Application Development, no Latin honors, but I did master the art of debugging at 2 AM.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-6 sm:mt-8 pt-6 border-t border-gray-700/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Certifications</h4>
              <motion.div
                className="flex flex-wrap gap-2 sm:gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Microsoft Security, Compliance, and Identity Fundamentals (February 2024)",
                  "IIOE Training- Blockchain Essentials for Higher Education Workforce (July 2024)",
                  "Certificate of Leadership: Nuebe Nobela President (A.Y. 2023-2024)",
                ].map((cert, index) => (
                  <motion.span
                    key={cert}
                    className="px-3 sm:px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-xs sm:text-sm border border-green-500/30"
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

        {/* Skills Section */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center" 
              variants={cardVariants} 
              whileHover="hover"
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-2 sm:p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                  <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </motion.div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{skill.title}</h4>
              <p className="text-gray-300 text-xs sm:text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}