import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from 'react'
import { ArrowRight, ArrowUpRight, Lock, MousePointer2 } from 'lucide-react'
import patrickDesktop800 from '../assets/images/projects/patrick-desktop-800.webp'
import patrickDesktop1200 from '../assets/images/projects/patrick-desktop-1200.webp'
import patrickMobile from '../assets/images/projects/patrick-mobile-480.webp'
import phoneinsideDesktop800 from '../assets/images/projects/phoneinside-desktop-800.webp'
import phoneinsideDesktop1200 from '../assets/images/projects/phoneinside-desktop-1200.webp'
import phoneinsideMobile from '../assets/images/projects/phoneinside-mobile-480.webp'
import mugishaDesktop800 from '../assets/images/projects/mugisha-desktop-800.webp'
import mugishaDesktop1200 from '../assets/images/projects/mugisha-desktop-1200.webp'
import mugishaMobile from '../assets/images/projects/mugisha-mobile-480.webp'

interface Project {
  number: string
  title: string
  category: string
  tagline: string
  description: string
  technologies: string[]
  url: string
  demo: string
  accent: string
  // Full-page captures of the live site: desktop at 1440px, mobile at 390px (first three screens)
  shots: {
    desktop800: string
    desktop1200: string
    desktopHeight: number // at 1200px wide
    mobile: string
    mobileHeight: number // at 480px wide
  }
}

// All projects data — add more projects here, only the first FEATURED_COUNT will show on the landing page
const allProjects: Project[] = [
  {
    number: "01",
    title: "Patrick Nzabonimpa",
    category: "Author website",
    tagline: "A literary home for a Rwandan writer, editor and journalist.",
    description: "Built a digital home for a Rwandan author to showcase published works, connect with readers, and offer editorial services. Designed to feel as personal as the writing itself.",
    technologies: ["WordPress", "Custom Theme", "PHP", "JavaScript", "SEO"],
    url: "patricknzabonimpa.com",
    demo: "https://patricknzabonimpa.com/",
    accent: "#E3A93C",
    shots: {
      desktop800: patrickDesktop800,
      desktop1200: patrickDesktop1200,
      desktopHeight: 4259,
      mobile: patrickMobile,
      mobileHeight: 3116,
    },
  },
  {
    number: "02",
    title: "Phone Inside",
    category: "E-commerce storefront",
    tagline: "A premium electronics store for shoppers in Kigali.",
    description: "A product-led catalogue for phones, tablets, gaming gear and accessories. Customers browse by category and order in seconds over WhatsApp, the way Kigali shoppers already like to buy.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase", "Vercel"],
    url: "phoneinside.rw",
    demo: "https://www.phoneinside.rw/",
    accent: "#6B9BFF",
    shots: {
      desktop800: phoneinsideDesktop800,
      desktop1200: phoneinsideDesktop1200,
      desktopHeight: 4784,
      mobile: phoneinsideMobile,
      mobileHeight: 3116,
    },
  },
  {
    number: "03",
    title: "Mugisha Spa",
    category: "Spa & wellness",
    tagline: "A calm, photography-led website for a luxury spa in Kicukiro.",
    description: "Designed to feel like the spa itself: soft tones, generous space and clear treatment menus with prices, so guests can pick a treatment and book in a couple of taps.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "SEO"],
    url: "mugishaspa.com",
    demo: "https://www.mugishaspa.com/",
    accent: "#A9BE96",
    shots: {
      desktop800: mugishaDesktop800,
      desktop1200: mugishaDesktop1200,
      desktopHeight: 3970,
      mobile: mugishaMobile,
      mobileHeight: 3116,
    },
  },
]

const FEATURED_COUNT = 3

// Visible height / width of each screen
const DESKTOP_SCREEN = 10 / 16
const PHONE_SCREEN = 844 / 390
const SECONDS_PER_SCREEN = 1.5

// CSS variables for the scroll-through preview (see .project-scroll in index.css):
// how far to move the capture, as a % of its own height, and how long it takes.
const scrollVars = (imageRatio: number, screenRatio: number, duration: number) =>
  ({
    '--scroll-end': `${(-(1 - screenRatio / imageRatio) * 100).toFixed(2)}%`,
    '--scroll-duration': `${duration.toFixed(1)}s`,
  }) as CSSProperties

// Browser mockup frame component
const BrowserFrame = ({ children, url }: { children: ReactNode; url: string }) => (
  <div className="rounded-xl overflow-hidden border border-white/10 bg-gray-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
    {/* Title bar */}
    <div className="flex items-center px-3 py-2.5 bg-gray-800/80 border-b border-white/5">
      <div className="flex space-x-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
      </div>
      <div className="ml-3 mr-8 flex-1 flex items-center justify-center gap-1.5 bg-gray-900/60 rounded-md px-3 py-1 text-[11px] text-gray-400 truncate">
        <Lock size={10} className="shrink-0 opacity-70" />
        <span className="truncate">{url}</span>
      </div>
    </div>
    {children}
  </div>
)

// Phone mockup frame component
const PhoneFrame = ({ children }: { children: ReactNode }) => (
  <div className="rounded-[1.4rem] sm:rounded-[1.9rem] bg-gray-950 p-[4px] sm:p-[6px] ring-1 ring-white/15 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.9)]">
    <div className="overflow-hidden rounded-[1.15rem] sm:rounded-[1.5rem] bg-black">
      {/* Status bar with the dynamic island */}
      <div className="relative h-3.5 sm:h-5">
        <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1.5 sm:h-2.5 rounded-full bg-gray-800/80" />
      </div>
      {children}
    </div>
  </div>
)

// Browser + phone composition. Hovering scrolls both screens through the real site
// and tilts the stage towards the cursor; on touch screens the preview scrolls by
// itself while it's on screen.
const ProjectStage = ({ project, reversed }: { project: Project; reversed: boolean }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { amount: 0.35 })

  // Pointer position over the stage, -0.5 to 0.5. Motion values keep this off React state.
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 120, damping: 18 })
  const springY = useSpring(pointerY, { stiffness: 120, damping: 18 })
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6])
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5])
  const phoneX = useTransform(springX, [-0.5, 0.5], [-16, 16])
  const phoneY = useTransform(springY, [-0.5, 0.5], [-12, 12])

  const handlePointerMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse') return
    const rect = e.currentTarget.getBoundingClientRect()
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handlePointerLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  const { shots } = project
  const desktopRatio = shots.desktopHeight / 1200
  const duration = (desktopRatio / DESKTOP_SCREEN - 1) * SECONDS_PER_SCREEN

  return (
    <a
      ref={ref}
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit the ${project.title} website (opens in new tab)`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`project-stage group/stage relative block pb-10 sm:pb-12 ${reversed ? 'pl-4 sm:pl-8' : 'pr-4 sm:pr-8'} ${inView ? 'is-inview' : ''}`}
      style={{ perspective: 1400 }}
    >
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 sm:-inset-10 opacity-40 transition-opacity duration-700 group-hover/stage:opacity-80"
        style={{ background: `radial-gradient(closest-side, ${project.accent}40, transparent)` }}
      />

      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative">
        <BrowserFrame url={project.url}>
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-950">
            <img
              src={shots.desktop1200}
              srcSet={`${shots.desktop800} 800w, ${shots.desktop1200} 1200w`}
              sizes="(min-width: 1024px) 700px, 100vw"
              alt={`${project.title} website on desktop`}
              className="project-scroll absolute inset-x-0 top-0 w-full"
              style={scrollVars(desktopRatio, DESKTOP_SCREEN, duration)}
              width={1200}
              height={shots.desktopHeight}
              loading="lazy"
              decoding="async"
            />
          </div>
        </BrowserFrame>

        {/* Phone, floating over the bottom corner */}
        <motion.div
          style={{ x: phoneX, y: phoneY, z: 40 }}
          className={`absolute -bottom-10 sm:-bottom-12 w-[27%] max-w-[190px] ${reversed ? '-left-4 sm:-left-8' : '-right-4 sm:-right-8'}`}
        >
          <PhoneFrame>
            <div className="relative aspect-[390/844] overflow-hidden">
              <img
                src={shots.mobile}
                alt={`${project.title} website on mobile`}
                className="project-scroll absolute inset-x-0 top-0 w-full"
                style={scrollVars(shots.mobileHeight / 480, PHONE_SCREEN, duration)}
                width={480}
                height={shots.mobileHeight}
                loading="lazy"
                decoding="async"
              />
            </div>
          </PhoneFrame>
        </motion.div>
      </motion.div>
    </a>
  )
}

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

  const textVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  }

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl lg:text-6xl font-light mb-4">
              Featured <span className="font-bold">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A few things I've built that I'm proud of.
            </p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-6"></div>
          </motion.div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24 lg:space-y-36">
          {featuredProjects.map((project, index) => {
            const reversed = index % 2 === 1

            return (
              <div
                key={project.title}
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                style={{ '--accent': project.accent } as CSSProperties}
              >
                {/* Stage side */}
                <motion.div
                  initial={{ opacity: 0, y: 60, rotateX: 8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
                  style={{ transformPerspective: 1200 }}
                >
                  <ProjectStage project={project} reversed={reversed} />
                </motion.div>

                {/* Content side */}
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}
                >
                  {/* Oversized outline number */}
                  <motion.span
                    variants={textItemVariants}
                    aria-hidden="true"
                    className="project-numeral block text-7xl lg:text-8xl font-bold leading-none mb-3 select-none"
                  >
                    {project.number}
                  </motion.span>

                  <motion.div variants={textItemVariants} className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8" style={{ backgroundColor: project.accent }} />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: project.accent }}>
                      {project.category}
                    </span>
                  </motion.div>

                  <motion.h3 variants={textItemVariants} className="text-3xl lg:text-4xl font-bold text-white mb-3">
                    {project.title}
                  </motion.h3>

                  <motion.p variants={textItemVariants} className="text-lg text-gray-300 mb-4">
                    {project.tagline}
                  </motion.p>

                  <motion.p variants={textItemVariants} className="text-gray-400 leading-relaxed text-sm mb-6">
                    {project.description}
                  </motion.p>

                  {/* Tech stack */}
                  <motion.div variants={textItemVariants} className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Links */}
                  <motion.div variants={textItemVariants} className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} live site (opens in new tab)`}
                      className="project-cta group/link inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300"
                    >
                      Visit live site
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                    <span className="hidden [@media(hover:hover)]:inline-flex items-center gap-2 text-xs text-gray-500">
                      <MousePointer2 size={14} />
                      Hover the preview to scroll the site
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* View All Projects Button */}
        {hasMore && (
          <div className="text-center mt-20">
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
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
