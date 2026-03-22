"use client"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/BenruZaps", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/rubensaporneit", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rubensaporne@gmail.com", label: "Email" },
  ]

  const contactInfo = [
    { icon: Mail, label: "rubensaporne@gmail.com", href: "mailto:rubensaporne@gmail.com" },
    { icon: Phone, label: "+(63) 949 - 907 - 5288", href: "tel:+639499075288" },
    { icon: MapPin, label: "Bulacan, Philippines", href: null },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const socialVariants = {
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

  return (
    <motion.footer
      className="py-12 px-4 border-t border-gray-800/50 bg-black/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Ruben Saporne
            </motion.h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              You&apos;ve made it to the end of my portfolio — either you&apos;re impressed, curious, or just really good at scrolling.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm mt-3">
              Got questions, ideas, or inquiries? Hit me up!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <motion.div
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["About", "Skills", "Experience", "Projects", "Contact"].map((link, index) => (
                <motion.button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center gap-1 text-gray-400 hover:text-green-300 transition-colors duration-300 text-sm group"
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.4,
                        delay: index * 0.1,
                      },
                    },
                  }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-green-400">→</span>
                  {link}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <motion.div
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map(({ icon: Icon, label, href }, index) => {
                const sharedProps = {
                  className: "flex items-center gap-2 text-gray-400 hover:text-green-300 transition-colors duration-300 text-sm",
                  variants: {
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: index * 0.1 },
                    },
                  },
                  whileHover: { x: 4 },
                  transition: { duration: 0.2 },
                }

                return href ? (
                  <motion.a key={label} href={href} {...sharedProps}>
                    <Icon className="w-4 h-4 text-green-500/70 shrink-0" />
                    <span>{label}</span>
                  </motion.a>
                ) : (
                  <motion.div key={label} {...sharedProps}>
                    <Icon className="w-4 h-4 text-green-500/70 shrink-0" />
                    <span>{label}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card-dark rounded-full group"
              aria-label={social.label}
              variants={socialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-green-300 transition-colors" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p
            className="text-gray-500 text-sm mb-4 md:mb-0"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} Ruben Saporne. All rights reserved.
          </motion.p>
          <motion.button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-green-300 transition-colors duration-300 text-sm"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top ↑
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  )
}
