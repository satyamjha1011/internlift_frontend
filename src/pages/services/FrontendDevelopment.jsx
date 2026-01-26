import { Monitor } from 'lucide-react'
import ServiceHero from '../../components/services/ServiceHero'
import TechStack from '../../components/services/TechStack'
import ProcessFlow from '../../components/services/ProcessFlow'
import UseCases from '../../components/services/UseCases'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

const FrontendDevelopment = () => {
  const service = services.find(s => s.id === 'frontend-development')
  
  const processSteps = [
    { title: 'Design & Wireframing', description: 'Creating user-centered designs and wireframes' },
    { title: 'UI Development', description: 'Building beautiful and responsive interfaces' },
    { title: 'Integration', description: 'Connecting with backend APIs and services' },
    { title: 'Testing & Optimization', description: 'Ensuring performance and cross-browser compatibility' },
  ]

  const useCases = [
    {
      title: 'Web Applications',
      description: 'Modern web apps with React, Vue, or Next.js',
      benefits: ['Responsive Design', 'Fast Performance', 'SEO Optimized'],
    },
    {
      title: 'Admin Dashboards',
      description: 'Intuitive admin panels for managing your business',
      benefits: ['Data Visualization', 'User Management', 'Analytics'],
    },
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages for your products',
      benefits: ['Mobile Responsive', 'Fast Loading', 'SEO Friendly'],
    },
  ]

  return (
    <div>
      <ServiceHero title={service.title} description={service.description} icon={Monitor} />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-white">Modern Frontend</span>{' '}
                <span className="gradient-text">Development</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                We create stunning, performant, and user-friendly frontend experiences 
                using the latest technologies and best practices.
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
            <span className="gradient-text">Frontend?</span>
          </h2>
          <Link to="/contact">
            <Button size="lg">Get Started Today</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default FrontendDevelopment
