import { Code } from 'lucide-react'
import ServiceHero from '../../components/services/ServiceHero'
import TechStack from '../../components/services/TechStack'
import ProcessFlow from '../../components/services/ProcessFlow'
import UseCases from '../../components/services/UseCases'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

const CustomSoftware = () => {
  const service = services.find(s => s.id === 'custom-software')
  
  const processSteps = [
    { title: 'Discovery', description: 'Understanding your unique requirements' },
    { title: 'Design & Planning', description: 'Creating detailed architecture and plans' },
    { title: 'Development', description: 'Building your custom solution' },
    { title: 'Deployment & Support', description: 'Launching and maintaining your software' },
  ]

  const useCases = [
    {
      title: 'Enterprise Solutions',
      description: 'Custom software for large organizations',
      benefits: ['Scalability', 'Security', 'Integration'],
    },
    {
      title: 'Startup MVPs',
      description: 'Minimum viable products for startups',
      benefits: ['Fast Development', 'Cost Effective', 'Scalable'],
    },
    {
      title: 'Legacy Modernization',
      description: 'Upgrading old systems to modern platforms',
      benefits: ['Improved Performance', 'Better UX', 'Modern Tech'],
    },
  ]

  return (
    <div>
      <ServiceHero title={service.title} description={service.description} icon={Code} />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-white">Custom</span>{' '}
                <span className="gradient-text">Software</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Tailored software solutions designed specifically for your business needs. 
                From concept to deployment, we handle everything.
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
            <span className="gradient-text">Custom Solution?</span>
          </h2>
          <Link to="/contact">
            <Button size="lg">Get Started Today</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CustomSoftware
