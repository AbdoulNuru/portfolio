import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      number: "01",
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      number: "02",
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs with Node.js, Python, and various databases.",
      technologies: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"]
    },
    {
      number: "03",
      title: "Cloud & DevOps",
      description: "Deploying and maintaining applications on cloud platforms with CI/CD pipelines and monitoring.",
      technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Vercel"]
    },
    {
      number: "04",
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with React Native and native technologies.",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Expo"]
    },
    {
      number: "05",
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries for better performance.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="skills" className="py-24 lg:py-32 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light mb-6">
              Skills & <span className="font-bold">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Skills Polished, Expertise Verified.
            </p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-8"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.number}
                variants={itemVariants}
                className="group"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center py-8 border-b border-gray-800/50 last:border-b-0">
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <span className="text-6xl lg:text-7xl font-light text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                      {skill.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="lg:col-span-4">
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
