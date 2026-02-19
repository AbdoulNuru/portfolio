import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin, ArrowUpRight, MapPin, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const EMAIL = 'abdoulniyigena@gmail.com'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      // Fallback for older browsers or restricted contexts
      const textarea = document.createElement('textarea')
      textarea.value = EMAIL
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/AbdoulNuru",
      handle: "@AbdoulNuru",
      color: "hover:border-white/30 hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdou-nuru-niyigena/",
      handle: "Abdoul Nuru",
      color: "hover:border-[#0A66C2]/50 hover:text-[#0A66C2]",
    },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-light mb-6">
              Let's <span className="font-bold">Work Together</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind, a role to fill, or just want to talk shop?
              I'd love to hear what you're working on.
            </p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-8"></div>
          </motion.div>

          {/* Email CTA */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center space-x-3 px-5 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-base sm:text-lg"
            >
              <Mail size={22} />
              <span>{EMAIL}</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>

            {/* Copy email button */}
            <div className="mt-4">
              <button
                onClick={copyEmail}
                className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-green-400" />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-4 mb-12">
            <div className="h-px w-16 bg-gray-800"></div>
            <span className="text-sm text-gray-600 uppercase tracking-widest">or find me on</span>
            <div className="h-px w-16 bg-gray-800"></div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            {socials.map(({ icon: Icon, label, href, handle, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center space-x-3 px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-xl transition-all duration-300 w-full sm:w-auto ${color} hover:bg-gray-900/80`}
              >
                <Icon size={20} className="shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-medium text-white">{label}</p>
                  <p className="text-xs text-gray-500">{handle}</p>
                </div>
                <ArrowUpRight size={16} className="text-gray-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-gray-500">
              <MapPin size={16} />
              <span className="text-sm">Based in Kigali, Rwanda</span>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-12 border-t border-gray-800/50"
          >
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Abdoul Nuru. Built with React & Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
