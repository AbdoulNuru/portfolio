import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Rocket, Code2 } from 'lucide-react'

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

  const journey = [
    {
      icon: GraduationCap,
      period: "The Beginning",
      title: "First Lines of Code",
      description: "Wrote my first program and got hooked on the feedback loop. Change something, see the result. That never stopped being exciting.",
      color: "text-cyan-400",
      borderColor: "border-cyan-500/30",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: Code2,
      period: "Building Foundations",
      title: "Going Full-Stack",
      description: "Didn't want to own just half the product. Learned backend and infrastructure so I could build things end to end, no hand-offs needed.",
      color: "text-blue-400",
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Briefcase,
      period: "Professional Growth",
      title: "Real-World Impact",
      description: "Built fintech platforms processing real transactions, internal tools that teams depend on daily, and systems designed to scale.",
      color: "text-purple-400",
      borderColor: "border-purple-500/30",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Rocket,
      period: "Today",
      title: "Shipping What Matters",
      description: "Now I care less about what's new and more about what's right. The best technology choices are the ones you don't notice.",
      color: "text-green-400",
      borderColor: "border-green-500/30",
      bgColor: "bg-green-500/10",
    },
  ]

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
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
              I'm a software developer who cares about the details. Over the past
              5+ years, I've worked across the full stack, building payment systems,
              shipping internal tools, and scaling products that real users depend on.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-gray-300 leading-relaxed"
            >
              I don't just write code that works. I write code that other developers
              actually want to work with. Whether it's a greenfield project or an
              inherited codebase, my goal is the same: leave it better than I found it.
            </motion.p>

            {/* How I Work */}
            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <h3 className="text-xl font-semibold mb-5 text-white">How I Work</h3>
              <div className="space-y-4">
                {[
                  { label: "Ownership", desc: "I don't wait to be told. If something's broken, I fix it. If something's unclear, I ask." },
                  { label: "Clarity", desc: "Simple code beats clever code. If it needs a comment to explain, it probably needs a rewrite." },
                  { label: "Shipping", desc: "Done is better than perfect. I'd rather put something real in front of users and iterate than plan forever." },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <span className="text-white font-medium">{item.label}</span>
                      <span className="text-gray-400 ml-1.5">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Journey Timeline */}
          <div className="space-y-6">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-2"
            >
              My Journey
            </motion.h3>

            <div className="relative">
              {/* Timeline line - exactly centered on the 28px-wide gutter (28/2 = 14px) */}
              <div className="absolute left-[13px] top-0 bottom-0 w-px bg-gray-800"></div>

              <div className="space-y-6">
                {journey.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="relative flex gap-4 group"
                  >
                    {/* Timeline dot - w-3.5 (14px) in a 28px gutter, centered with 7px left offset */}
                    <div className="w-7 shrink-0 flex justify-center pt-5">
                      <div className={`w-3.5 h-3.5 rounded-full border-2 ${item.borderColor} ${item.bgColor} group-hover:scale-125 transition-transform duration-300`}></div>
                    </div>

                    <div className="flex-1 bg-gray-900/50 border border-gray-800 rounded-xl p-5 backdrop-blur-sm hover:border-gray-700 transition-colors duration-300">
                      <div className="flex items-center space-x-3 mb-2">
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                        <span className={`text-sm font-medium ${item.color}`}>{item.period}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-1.5">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-5 ml-0"
            >
              <h3 className="text-lg font-semibold mb-3 text-white">What I'm Into Right Now</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Integrating AI tooling into my development workflow, going deeper
                into system design and distributed architectures, and building side
                projects that have no deadline and no rules.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
