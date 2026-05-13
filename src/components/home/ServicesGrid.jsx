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
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-16 bg-gradient-to-b from-black to-gray-900">
      {/* Responsive container with max-width constraint */}
      <div className="w-full max-w-[90rem] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Our</span>{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive IT solutions to power your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div key={service.id}>
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
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-bright-green to-primary-neon-green text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,0,0.5)] transition-all">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
