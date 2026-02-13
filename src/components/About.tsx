import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl lg:text-6xl font-light mb-6">
                About <span className="font-bold">Me</span>
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-gray-300 leading-relaxed"
            >
              I'm a passionate software developer with a deep love for creating 
              digital solutions that make a real impact. My journey in tech began 
              with curiosity and has evolved into a career dedicated to building 
              innovative, user-centric applications.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-gray-300 leading-relaxed"
            >
              I specialize in full-stack development with expertise in modern 
              technologies like React, Node.js, Python, and cloud platforms. 
              I believe in writing clean, maintainable code and following best 
              practices to deliver exceptional results.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="pt-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Full-Stack Development",
                  "Frontend Architecture",
                  "Backend Systems",
                  "API Development",
                  "Database Design",
                  "Cloud Solutions"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Highlights */}
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Experience</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Years of Experience</span>
                    <span className="text-2xl font-bold text-blue-400">5+</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      className="bg-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "85%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Projects Completed</span>
                    <span className="text-2xl font-bold text-green-400">50+</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      className="bg-green-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "90%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                    ></motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Client Satisfaction</span>
                    <span className="text-2xl font-bold text-purple-400">98%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      className="bg-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "98%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Current Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                Currently exploring advanced React patterns, microservices architecture, 
                and AI integration in web applications. Always learning, always growing.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
