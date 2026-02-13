import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { ChevronDown, Sparkles, Code, Zap, Globe } from 'lucide-react'

const Hero = () => {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 10 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 10 })

  // Scroll-based transformations
  const y = useTransform(scrollY, [0, 1000], [0, -200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.95])

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToNext = () => {
    const companiesElement = document.getElementById('companies')
    if (companiesElement) {
      const offsetTop = companiesElement.offsetTop - 100 // Account for navbar height
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <motion.section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ y, opacity, scale }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Interactive Particles */}
      <ParticleField mousePosition={mousePosition} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        
        {/* Availability Badge with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
        >
          <motion.div 
            className="w-2 h-2 bg-green-500 rounded-full mr-3"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Sparkles className="w-4 h-4 mr-2" />
          Available for new opportunities
        </motion.div>

        {/* Main Heading with Stagger Animation */}
        <div className="space-y-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-light leading-tight">
              <span className="inline-block">Hey, I'm </span>
              <motion.span 
                className="font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Abdoul
              </motion.span>
              <span className="inline-block">.</span>
            </h1>
            
            {/* Decorative line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-light text-gray-300"
          >
            A <TypewriterText />
          </motion.h2>
        </div>

        {/* Dynamic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center space-x-8 mb-8"
        >
          {[
            { icon: Code, label: "Projects", value: "50+" },
            { icon: Zap, label: "Experience", value: "5+ Years" },
            { icon: Globe, label: "Clients", value: "Global" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 text-blue-400 mb-2" />
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-sm text-gray-400">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
        >
          With 5+ years of experience in full-stack development, I specialize in building 
          <motion.span 
            className="text-blue-400 font-medium"
            whileHover={{ scale: 1.05 }}
          > scalable web applications </motion.span>
          and digital solutions that drive business growth and deliver exceptional user experiences. 
          From fintech to e-commerce, I turn complex problems into elegant solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 group"
          >
            <span>View My Work</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            Let's Talk
          </motion.button>
        </motion.div>

      </div>

      {/* Animated Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={scrollToNext}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 group flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full border border-gray-600 group-hover:border-blue-500 transition-colors"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>

      {/* Floating Elements */}
      <FloatingElements />
    </motion.section>
  )
}

// Typewriter Text Component
const TypewriterText = () => {
  const texts = ["Software Developer", "Full-Stack Engineer", "Problem Solver", "Digital Creator"]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, texts])

  return (
    <motion.span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-blue-400"
      >
        |
      </motion.span>
    </motion.span>
  )
}

// Particle Field Component
const ParticleField = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 0.5 + 0.1,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/30 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [particle.x, particle.x + 100, particle.x],
            y: [particle.y, particle.y - 100, particle.y],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Floating Elements Component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400/40 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-6 h-6 bg-purple-400/40 rotate-45"
        animate={{
          y: [0, -30, 0],
          rotate: [45, 225, 405],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-20 w-3 h-3 bg-cyan-400/40 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  )
}

export default Hero
