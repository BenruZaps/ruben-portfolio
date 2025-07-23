"use client"
import { useState, useEffect } from "react"
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, Mail } from "lucide-react"

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Determine nav background - always black on mobile, or when on home section in mobile
  const getNavBackground = () => {
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      return "backdrop-blur-md bg-black/80 shadow-lg"
    }
    return scrolled ? "backdrop-blur-md bg-black/60 shadow-lg" : "bg-transparent"
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          getNavBackground()
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Icon Initials */}
            <div
              onClick={scrollToTop}
              className="cursor-pointer group flex-shrink-0"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-800 via-emerald-700 to-green-600 flex items-center justify-center text-white font-bold text-sm shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-green-400/50 relative">
                <span className="relative z-10 transform transition-transform duration-300 group-hover:scale-105">
                  RS
                </span>
                
                {/* Animated border ring */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-green-300 via-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                     style={{ 
                       background: 'conic-gradient(from 0deg, transparent, #10b981, transparent)',
                       animation: 'spin 3s linear infinite',
                       padding: '2px'
                     }}>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-green-400/20 blur-md scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full border border-green-400/30 animate-ping opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-full border border-green-400/20 animate-ping opacity-0 group-hover:opacity-50 transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -top-1 -right-1 w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute top-1/2 -right-2 w-0.5 h-0.5 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute top-1/4 -left-2 w-0.5 h-0.5 bg-emerald-300 rounded-full animate-bounce" style={{ animationDelay: '0.9s' }}></div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.id
                const IconComponent = item.icon

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:-translate-y-1 group ${
                      isActive
                        ? "text-white bg-green-500/20 border border-green-500/30 shadow-lg shadow-green-500/20"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`transform transition-all duration-300 relative z-10 ${
                        isActive ? "rotate-360 text-green-400" : "group-hover:rotate-12"
                      }`}
                    >
                      <IconComponent size={16} />
                    </div>

                    {/* Text */}
                    <span className="text-sm relative z-10">{item.name}</span>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 animate-pulse">
                      </div>
                    )}

                    {/* Glow effect for active item */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-green-400/10 blur-md scale-110 animate-pulse">
                      </div>
                    )}

                    {/* Particles for active item */}
                    {isActive && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-1 left-2 w-1 h-1 bg-green-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0s' }}></div>
                        <div className="absolute -top-1 right-2 w-0.5 h-0.5 bg-emerald-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.2s' }}></div>
                        <div className="absolute -bottom-1 left-1/4 w-0.5 h-0.5 bg-green-300 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.4s' }}></div>
                        <div className="absolute -bottom-1 right-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.6s' }}></div>
                        <div className="absolute top-1/2 -left-1 w-0.5 h-0.5 bg-green-400 rounded-full animate-bounce opacity-75" style={{ animationDelay: '0.8s' }}></div>
                        <div className="absolute top-1/2 -right-1 w-0.5 h-0.5 bg-emerald-400 rounded-full animate-bounce opacity-65" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute top-1/4 left-1/2 w-0.5 h-0.5 bg-green-300 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1.2s' }}></div>
                        <div className="absolute bottom-1/4 left-1/2 w-0.5 h-0.5 bg-emerald-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.4s' }}></div>
                      </div>
                    )}

                    {/* Hover underline */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-4/5">
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:rotate-12 relative z-60"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative">
                {isOpen ? (
                  <div className="transform transition-transform duration-300 rotate-180">
                    <X size={24} />
                  </div>
                ) : (
                  <div className="transform transition-transform duration-300">
                    <Menu size={24} />
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Active Section Indicator (Desktop) */}
        <div
          className={`hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent transform transition-all duration-600 ${
            scrolled ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex items-center justify-center">
          {/* Full screen backdrop */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-lg"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu content */}
          <div className="relative z-50 w-full max-w-sm mx-4 px-6 py-8">
            {/* Welcome text */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Navigation</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto"></div>
            </div>

            {/* Menu items */}
            <div className="space-y-3">
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.id
                const IconComponent = item.icon

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-4 w-full text-left py-4 px-6 rounded-xl font-medium transition-all duration-500 transform hover:translate-x-2 hover:scale-105 group ${
                      isActive
                        ? "text-white bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-400/50 shadow-lg shadow-green-500/20"
                        : "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: 'slideInFromRight 0.6s ease-out forwards'
                    }}
                  >
                    {/* Icon */}
                    <div
                      className={`transform transition-all duration-300 flex-shrink-0 ${
                        isActive 
                          ? "rotate-360 scale-110 text-green-400" 
                          : "group-hover:rotate-12 group-hover:scale-110"
                      }`}
                    >
                      <IconComponent size={22} />
                    </div>

                    {/* Text */}
                    <span className="text-lg font-medium flex-1">{item.name}</span>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    )}

                    {/* Hover arrow */}
                    <div className={`transform transition-all duration-300 ${
                      isActive ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}>
                      <div className="w-2 h-2 border-r-2 border-t-2 border-current rotate-45"></div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Footer */}
            <div className="text-center mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">Tap anywhere to close</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slideInFromRight {
          from { 
            opacity: 0; 
            transform: translateX(50px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: slideInFromRight 0.6s ease-out;
        }
      `}</style>
    </>
  )
}