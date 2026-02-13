import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const CompanyLogos = () => {
  const [hoveredCompany, setHoveredCompany] = useState<number | null>(null)

  const companies = [
    {
      name: 'Bank of Kigali',
      role: 'Senior Software Developer',
      period: '2022-2024',
      logo: '/images/bank-of-kigali-logo.png', // You'll add this
      fallbackLogo: 'BK',
      description: 'Led digital transformation initiatives and built scalable fintech solutions',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Equity Bank',
      role: 'Full-Stack Developer', 
      period: '2021-2022',
      logo: '/images/equity-bank-logo.png', // You'll add this
      fallbackLogo: 'EB',
      description: 'Developed comprehensive banking applications and payment systems',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Guaranty Trust Bank',
      role: 'Software Engineer',
      period: '2020-2021', 
      logo: '/images/gtb-logo.png', // You'll add this
      fallbackLogo: 'GTB',
      description: 'Built robust banking applications serving millions of customers',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Andela',
      role: 'Software Developer',
      period: '2019-2020',
      logo: '/images/andela-logo.png', // You'll add this
      fallbackLogo: 'AD', 
      description: 'Collaborated on global software development projects',
      color: 'from-purple-500 to-indigo-600'
    }
  ]

  return (
    <>
      {/* Company Section */}
      <section id="companies" className="py-6 relative overflow-hidden -mt-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/30 to-black"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
              Trusted by Leading Companies
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-8 lg:space-x-12 mb-6"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCompany(index)}
                onMouseLeave={() => setHoveredCompany(null)}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-blue-500/20 overflow-hidden">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="w-8 h-8 lg:w-10 lg:h-10 object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback gradient logo */}
                  <div className={`w-full h-full bg-gradient-to-br ${company.color} rounded-lg items-center justify-center text-white font-bold text-sm lg:text-base hidden`}>
                    {company.fallbackLogo}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 text-center"
          >
            <div>
              <span className="text-lg font-semibold text-white">5+</span>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Years</p>
            </div>
            <div className="w-px h-8 bg-gray-800"></div>
            <div>
              <span className="text-lg font-semibold text-white">4</span>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Companies</p>
            </div>
            <div className="w-px h-8 bg-gray-800"></div>
            <div>
              <span className="text-lg font-semibold text-white">50+</span>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Projects</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portal-based Tooltip - Rendered at document root level */}
      <AnimatePresence>
        {hoveredCompany !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
              transform: `translate(50vw, 20vh)`, // Centered positioning
            }}
          >
            <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 min-w-80 shadow-2xl shadow-black/50 -translate-x-1/2">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Company logo */}
                <div className={`w-12 h-12 bg-gradient-to-br ${companies[hoveredCompany].color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-lg">{companies[hoveredCompany].fallbackLogo}</span>
                </div>
                
                <h4 className="text-white font-semibold text-lg mb-2">{companies[hoveredCompany].name}</h4>
                <p className="text-blue-400 font-medium mb-1">{companies[hoveredCompany].role}</p>
                <p className="text-gray-400 text-sm mb-3">{companies[hoveredCompany].period}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{companies[hoveredCompany].description}</p>
                
                {/* Decorative line */}
                <div className={`w-16 h-0.5 bg-gradient-to-r ${companies[hoveredCompany].color} mx-auto mt-4 rounded-full`}></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CompanyLogos
