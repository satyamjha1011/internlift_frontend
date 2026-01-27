import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Card from '../common/Card'
import { services } from '../../data/services'
import { Link } from 'react-router-dom'
import { 
  Server, 
  Monitor, 
  Brain, 
  Cpu, 
  Zap, 
  Code 
} from 'lucide-react'

const iconMap = {
  Server,
  Monitor,
  Brain,
  Cpu,
  Zap,
  Code,
}

const ServicesGrid = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 bg-gradient-to-b from-black to-gray-900 overflow-x-hidden">
      {/* Responsive container with max-width constraint and overflow prevention */}
      <div className="w-full max-w-full sm:max-w-[95%] md:max-w-[90rem] mx-auto overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Our</span>{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive IT solutions to power your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link to={service.path}>
                  <Card hover glow className="h-full group cursor-pointer">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center mb-4">
                        {Icon && <Icon className="w-6 h-6 text-black" />}
                      </div>
                      <h3 className="text-xl font-bold mb-2 gradient-text group-hover:text-primary-bright-green transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {service.shortDescription}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-primary-bright-green group-hover:text-primary-neon-green transition-colors">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-bright-green to-primary-neon-green text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,0,0.5)] transition-all"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGrid
