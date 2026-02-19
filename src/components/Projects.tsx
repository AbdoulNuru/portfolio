import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

// Browser mockup frame component
const BrowserFrame = ({ children, url }: { children: React.ReactNode; url?: string }) => (
  <div className="rounded-xl overflow-hidden border border-gray-700/30 bg-gray-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_70px_-15px_rgba(59,130,246,0.15)] transition-shadow duration-500">
    {/* Title bar */}
    <div className="flex items-center px-3 py-2.5 bg-gray-800/60 border-b border-gray-700/30">
      <div className="flex space-x-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
      </div>
      {url && (
        <div className="ml-3 flex-1 bg-gray-900/40 rounded-md px-3 py-1 text-[11px] text-gray-500 truncate text-center">
          {url}
        </div>
      )}
    </div>
    {/* Content */}
    <div className="overflow-hidden">
      {children}
    </div>
  </div>
)

// All projects data — add more projects here, only the first FEATURED_COUNT will show on the landing page
const allProjects = [
  {
    number: "01",
    title: "Patrick Nzabonimpa",
    description: "Built a digital home for a Rwandan author to showcase published works, connect with readers, and offer editorial services. Designed to feel as personal as the writing itself.",
    highlight: "Custom Elementor layouts with a reading-first hierarchy, structured data for SEO, and a sub-2s load time on mobile.",
    technologies: ["WordPress", "Elementor", "CSS", "SEO", "Responsive Design"],
    image: "/images/patricknzabonimpa.png",
    url: "patricknzabonimpa.com",
    github: "",
    demo: "https://www.patricknzabonimpa.com/",
  },
]

const FEATURED_COUNT = 3

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredProjects = allProjects.slice(0, FEATURED_COUNT)
  const hasMore = allProjects.length > FEATURED_COUNT

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-light mb-4">
              Featured <span className="font-bold">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A few things I've built that I'm proud of.
            </p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-6"></div>
          </motion.div>

          {/* Projects */}
          <div className="space-y-8 lg:space-y-16">
            {featuredProjects.map((project, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="group"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 items-center`}>
                    {/* Image side */}
                    <div
                      className={`${!isEven ? 'lg:order-2' : ''}`}
                      style={{ perspective: '1200px' }}
                    >
                      <motion.div
                        initial={{ rotateY: isEven ? 4 : -4, rotateX: 2 }}
                        whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <BrowserFrame url={project.url}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full aspect-[16/10] object-cover"
                          />
                        </BrowserFrame>
                      </motion.div>
                    </div>

                    {/* Content side */}
                    <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                      <span className="text-sm font-mono text-blue-400 mb-2 block">{project.number}</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-4 mb-3 backdrop-blur-sm">
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {project.description}
                        </p>
                      </div>

                      {/* Technical highlight */}
                      <p className="text-gray-500 text-sm italic mb-3">
                        {project.highlight}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-400 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex space-x-5">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                          >
                            <ExternalLink size={18} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            <span className="text-sm font-medium">Live Site</span>
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group/link"
                          >
                            <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                            <span className="text-sm font-medium">Source Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* View All Projects Button */}
          {hasMore && (
            <motion.div
              variants={itemVariants}
              className="text-center mt-20"
            >
              <a
                href="#projects"
                className="group/btn inline-flex items-center space-x-3 px-8 py-4 border border-gray-700 rounded-full text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
              >
                <span className="text-sm font-medium">View All Projects</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
              <p className="text-gray-600 text-sm mt-3">
                {allProjects.length - FEATURED_COUNT} more project{allProjects.length - FEATURED_COUNT !== 1 ? 's' : ''} to explore
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
