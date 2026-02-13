import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Home, User, Code, Briefcase, Mail, Download } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  // Transform scroll position to blur and background opacity
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.1, 0.8])
  const blurAmount = useTransform(scrollY, [0, 100], [8, 20])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail }
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Glassmorphic Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4"
      >
        <motion.div
          style={{
            backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
            backdropFilter: `blur(${blurAmount}px)`,
          }}
          className={`max-w-7xl mx-auto rounded-2xl border transition-all duration-300 ${
            scrolled 
              ? 'border-white/20 shadow-lg shadow-black/20' 
              : 'border-white/10 shadow-md shadow-black/10'
          }`}
        >
          {/* Animated border shimmer effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
          </div>
          
          <div className="relative flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
              >
                Abdoul Nuru
              </a>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                  className="relative group px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon size={16} className="opacity-70 group-hover:opacity-100" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                </motion.a>
              ))}
              
              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 group"
              >
                <Download size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Resume</span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 text-white hover:text-blue-400 transition-colors rounded-lg hover:bg-white/10"
              >
                <div className="w-6 h-6 relative">
                  <motion.div
                    animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="absolute w-full h-0.5 bg-current top-1 transition-all duration-300"
                  />
                  <motion.div
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute w-full h-0.5 bg-current top-3 transition-all duration-300"
                  />
                  <motion.div
                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="absolute w-full h-0.5 bg-current top-5 transition-all duration-300"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-24 left-4 right-4 z-40 md:hidden overflow-hidden"
      >
        <div className="bg-black/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl shadow-black/20">
          <div className="p-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -20 
                }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <item.icon size={20} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
            
            {/* Mobile CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                y: isOpen ? 0 : 20 
              }}
              transition={{ delay: 0.5 }}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  )
}

export default Navigation
