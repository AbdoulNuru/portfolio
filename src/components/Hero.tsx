import { motion, useScroll, useTransform, useMotionValue, type MotionValue } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { ChevronDown, Sparkles, Github, Linkedin } from 'lucide-react'
import TechScroller from './TechScroller'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()

  // Mouse parallax offset (±10px) for the particles. Motion values update the
  // DOM directly, so moving the mouse doesn't re-render the Hero.
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Scroll-based transformations
  const y = useTransform(scrollY, [0, 1000], [0, -200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.95])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 20)
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 20)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToNext = () => {
    const aboutElement = document.getElementById('about')
    if (aboutElement) {
      const offsetTop = aboutElement.offsetTop - 100 // Account for navbar height
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <motion.section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-24 lg:pb-32"
      style={{ y, opacity, scale }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs (loops are CSS keyframes in index.css) */}
        <div className="hero-orb-1 absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="hero-orb-2 absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="hero-orb-3 absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />
      </div>

      {/* Interactive Particles */}
      <div aria-hidden="true">
        <ParticleField offsetX={mouseX} offsetY={mouseY} />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        
        {/* Availability Badge with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
        >
          <div className="hero-pulse-dot w-2 h-2 bg-green-500 rounded-full mr-3" />
          <Sparkles className="w-4 h-4 mr-2" />
          Available for new opportunities
        </motion.div>

        {/* Main Heading. The heading, subtitle and paragraph are visible on the
            first frame: fading them in delayed Largest Contentful Paint by ~1.4s. */}
        <div className="space-y-4 sm:space-y-6 mb-8">
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light leading-tight">
              <span className="inline-block">Hello, I'm</span>{' '}
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
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-gray-300">
            A <TypewriterText />
          </h2>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center items-center space-x-5 mb-6 sm:mb-8"
        >
          {[
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abdou-nuru-niyigena/", color: "hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 hover:text-[#0A66C2]" },
            { icon: Github, label: "GitHub", href: "https://github.com/AbdoulNuru", color: "hover:bg-white/10 hover:border-white/30 hover:text-white" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.15 }}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-gray-400 transition-all duration-300 ${social.color}`}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Description */}
        <p className="text-base sm:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8 cursor-default">
          <InteractiveText text="For the past 5+ years, I've been turning ideas into real products, from fintech platforms handling millions in transactions to tools people rely on every day. I thrive on hard problems, clean architecture, and building software that simply works." />
        </p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>View My Work</span>
            <div aria-hidden="true" className="hero-nudge-x">
              →
            </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            Let's Talk
          </motion.button>
        </motion.div>

        {/* Tech Scroller - in flow on mobile, absolute on lg */}
        <div className="mt-8 lg:hidden">
          <TechScroller />
        </div>

      </div>

      {/* Tech Scroller - absolute on lg+ only */}
      <div className="hidden lg:block absolute bottom-36 left-0 right-0 z-10">
        <TechScroller />
      </div>

      {/* Scroll Indicator - absolute on lg+ only */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={scrollToNext}
        className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-10 group flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <div className="hero-bob-y p-2 rounded-full border border-gray-600 group-hover:border-blue-500 transition-colors">
          <ChevronDown size={20} />
        </div>
      </motion.button>

      {/* Floating Elements */}
      <div aria-hidden="true">
        <FloatingElements />
      </div>
    </motion.section>
  )
}

// Typewriter Text Component
// Module-level so it's the same array on every render; inside the component it
// was a new array each render, which restarted the typing timer.
const TYPEWRITER_TEXTS = ["Full-Stack Engineer", "Fintech Builder", "Systems Thinker", "Product Engineer"]

const TypewriterText = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = TYPEWRITER_TEXTS[currentIndex]
    const fullyTyped = !isDeleting && displayText === current
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1))
        } else {
          setIsDeleting(true)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length)
        }
      }
    }, fullyTyped ? 2000 : isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex])

  return (
    <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {displayText}
      <span className="hero-blink text-blue-400">|</span>
    </span>
  )
}

// Interactive Text Component - word-level hover effect
const InteractiveText = ({ text }: { text: string }) => {
  const words = text.split(' ')

  return (
    <>
      {words.map((word, index) => (
        <span key={index}>
          <span
            className="transition-colors duration-300 hover:text-white"
            style={{ display: 'inline-block' }}
          >
            {word}
          </span>
          {index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  )
}

// Particle Field Component
// Positions are generated once, from a fixed seed (mulberry32): the pre-rendered
// HTML and the browser must place the particles identically for hydration.
const seededRandom = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}
const random = seededRandom(29)

const PARTICLES = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: random() * 100,
  top: random() * 100,
  size: random() * 3 + 1,
  duration: 10 + random() * 10,
}))

const ParticleField = ({ offsetX, offsetY }: { offsetX: MotionValue<number>; offsetY: MotionValue<number> }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ x: offsetX, y: offsetY }}
    >
      {PARTICLES.map((particle) => (
        <div
          key={particle.id}
          className="hero-particle absolute bg-blue-400/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </motion.div>
  )
}

// Floating Elements Component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Shapes */}
      <div className="hero-float-1 absolute top-1/4 left-10 w-4 h-4 bg-blue-400/40 rounded-full" />
      <div className="hero-float-2 absolute top-1/3 right-10 w-6 h-6 bg-purple-400/40 rotate-45" />
      <div className="hero-float-3 absolute bottom-1/3 left-20 w-3 h-3 bg-cyan-400/40 rounded-full" />
    </div>
  )
}

export default Hero
