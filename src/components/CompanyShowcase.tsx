import { motion } from 'framer-motion'
import { Building, Star, TrendingUp } from 'lucide-react'

const CompanyShowcase = () => {
  const companies = [
    {
      name: 'Bank of Kigali',
      role: 'Senior Software Developer',
      period: '2022-2024',
      logo: 'BK',
      description: 'Leading digital transformation initiatives',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Equity Bank',
      role: 'Full-Stack Developer',
      period: '2021-2022',
      logo: 'EB',
      description: 'Building fintech solutions',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Guaranty Trust Bank',
      role: 'Software Engineer',
      period: '2020-2021',
      logo: 'GTB',
      description: 'Developing banking applications',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Andela',
      role: 'Software Developer',
      period: '2019-2020',
      logo: 'AD',
      description: 'Remote software development',
      color: 'from-purple-500 to-indigo-600'
    }
  ]

  const extendedCompanies = [...companies, ...companies, ...companies]

  const statsData = [
    { icon: Star, label: 'Years Experience', value: '5+' },
    { icon: Building, label: 'Companies', value: '4' },
    { icon: TrendingUp, label: 'Success Rate', value: '100%' }
  ]

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-transparent"></div>
      
      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mr-4"
            >
              <Building className="w-6 h-6 text-blue-400" />
            </motion.div>
            <h2 className="text-3xl lg:text-4xl font-light text-white">
              Trusted by{' '}
              <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Leading Companies
              </span>
            </h2>
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I have had the privilege of working with some of Africa's most innovative financial institutions,
            building solutions that serve millions of users.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-12 mb-16"
        >
          {statsData.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center mb-2">
                <stat.icon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <span className="text-sm text-gray-400">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ['-33.333%', '0%'] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="flex space-x-8 py-8"
            >
              {extendedCompanies.map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 group"
                >
                  <div className="w-80 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${company.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-lg">{company.logo}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-blue-400 font-medium mb-2">{company.role}</p>
                      <p className="text-gray-400 text-sm mb-4">{company.period}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{company.description}</p>
                      
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to add your company to this list?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Let's Work Together</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyShowcase
