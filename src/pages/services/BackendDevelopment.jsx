import { Server } from 'lucide-react'
import ServiceHero from '../../components/services/ServiceHero'
import TechStack from '../../components/services/TechStack'
import ProcessFlow from '../../components/services/ProcessFlow'
import UseCases from '../../components/services/UseCases'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

const BackendDevelopment = () => {
  const service = services.find(s => s.id === 'backend-development')
  
  const processSteps = [
    {
      title: 'Requirement Analysis',
      description: 'Understanding your business needs and technical requirements',
    },
    {
      title: 'Architecture Design',
      description: 'Designing scalable and maintainable system architecture',
    },
    {
      title: 'Development',
      description: 'Building robust backend systems with best practices',
    },
    {
      title: 'Testing & Deployment',
      description: 'Comprehensive testing and seamless deployment',
    },
  ]

  const useCases = [
    {
      title: 'E-commerce Platforms',
      description: 'Build scalable e-commerce backends handling thousands of transactions.',
      benefits: ['Payment Integration', 'Inventory Management', 'Order Processing'],
    },
    {
      title: 'SaaS Applications',
      description: 'Create multi-tenant SaaS platforms with robust APIs.',
      benefits: ['User Management', 'Subscription Handling', 'API Gateway'],
    },
    {
      title: 'Mobile App Backends',
      description: 'Powerful backends for iOS and Android applications.',
      benefits: ['RESTful APIs', 'Real-time Updates', 'Push Notifications'],
    },
  ]

  return (
    <div>
      <ServiceHero
        title={service.title}
        description={service.description}
        icon={Server}
      />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-white">Why Choose Our</span>{' '}
                <span className="gradient-text">Backend Services</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                We specialize in building robust, scalable, and secure backend systems 
                that power modern applications. Our team has extensive experience with 
                various technologies and follows industry best practices.
              </p>
              <p className="text-gray-400 mb-8">
                From API development to database optimization, we ensure your backend 
                is performant, secure, and ready to scale with your business needs.
              </p>
            </div>
            <Card glow>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Key Features</h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary-bright-green" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <TechStack technologies={service.technologies} />
      <ProcessFlow steps={processSteps} />
      <UseCases useCases={useCases} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-white">Ready to Build Your</span>{' '}
            <span className="gradient-text">Backend?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project requirements and create a solution that fits your needs.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BackendDevelopment
