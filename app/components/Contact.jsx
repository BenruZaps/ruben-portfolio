"use client"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react"
import { sendEmail } from "../actions/sendEmail"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (submitStatus === "success") {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setSubmitStatus(null);
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simple validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) newErrors.email = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShake(true);
      setIsSubmitting(false);
      setTimeout(() => setShake(false), 500); // Remove shake after animation
      return;
    }

    setErrors({});

    try {
      const result = await sendEmail(formData)
      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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

  const contactInfoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-14 lg:mb-16"
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
            Contact{" "}
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
              Me!
            </motion.span>
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div className="space-y-6 sm:space-y-8" variants={contactInfoVariants}>
            <motion.div className="glass-card-dark p-6 sm:p-8" whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
              <motion.h3
                className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Let's Connect
              </motion.h3>
              <motion.div
                className="space-y-4 sm:space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Mail, title: "Email", info: "rubensaporne@gmail.com", color: "from-orange-500 to-yellow-500", href: "mailto:rubensaporne@gmail.com" },
                  { icon: Phone, title: "Phone", info: "(+63) 949 - 907 - 5288", color: "from-green-500 to-emerald-500", href: "tel:+639499075288" },
                  { icon: MapPin, title: "Location", info: "Bulacan, Philippines", color: "from-purple-500 to-pink-500" },
                  { icon: Linkedin, title: "LinkedIn", info: "linkedin.com/in/rubensaporneit/", color: "from-blue-500 to-cyan-500", href: "https://linkedin.com/in/rubensaporneit/" },

                ].map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    className="flex items-center space-x-3 sm:space-x-4"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className={`p-2 sm:p-3 bg-gradient-to-r ${contact.color} rounded-full flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <contact.icon className="w-4 h-4 sm:w-5 md:w-6 text-white" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-semibold text-sm sm:text-base">{contact.title}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-gray-300 hover:text-green-400 transition-colors text-xs sm:text-sm break-all sm:break-normal focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 rounded"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.info}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-xs sm:text-sm">{contact.info}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="glass-card-dark p-6 sm:p-8" variants={formVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { name: "name", type: "text", label: "Name", placeholder: "Your Name" },
                { name: "email", type: "email", label: "Email", placeholder: "your.email@example.com" },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <label htmlFor={field.name} className="block text-white font-semibold mb-2 text-sm sm:text-base">
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    
                    className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all backdrop-blur-sm text-sm sm:text-base
                      ${errors[field.name] ? 'border-red-500' : 'border-white/20'}
                      ${shake && errors[field.name] ? 'animate-shake' : ''}
                    `}
                    placeholder={field.placeholder}
                    whileFocus={{ scale: 1.02, borderColor: "#22c55e" }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors[field.name] && (
                    <span className="text-red-400 text-xs sm:text-sm mt-1 block">{field.label} is required{field.name === 'email' ? ' and must be valid.' : '.'}</span>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label htmlFor="message" className="block text-white font-semibold mb-2 text-sm sm:text-base">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  
                  rows={5}
                  className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all backdrop-blur-sm resize-none min-h-[120px] sm:min-h-[140px] text-sm sm:text-base
                    ${errors.message ? 'border-red-500' : 'border-white/20'}
                    ${shake && errors.message ? 'animate-shake' : ''}
                  `}
                  placeholder="Tell me about your ideas, inquiries, or anything else..."
                  whileFocus={{ scale: 1.02, borderColor: "#22c55e" }}
                  transition={{ duration: 0.2 }}
                />
                {errors.message && (
                  <span className="text-red-400 text-xs sm:text-sm mt-1 block">Message is required.</span>
                )}
              </motion.div>

              {showSuccess && submitStatus === "success" && (
                <motion.div
                  className="p-3 sm:p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center font-bold relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <button
                    className="absolute top-2 right-2 text-green-300 hover:text-green-500 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 rounded w-6 h-6 flex items-center justify-center"
                    onClick={() => { setShowSuccess(false); setSubmitStatus(null); }}
                    aria-label="Close"
                    type="button"
                  >
                    ×
                  </button>
                  <div className="text-sm sm:text-base">
                    Message sent successfully! I'll get back to you soon.<br/>
                    <span className="text-gray-400">Check your email for a thank you message. </span>
                    <br/>
                    <span className="text-gray-400 font-normal italic">If you don't see it, please check your spam or junk folder.</span>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  className="p-3 sm:p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm sm:text-base"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass-button px-4 sm:px-6 py-3 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                ) : (
                  <>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </motion.div>
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}