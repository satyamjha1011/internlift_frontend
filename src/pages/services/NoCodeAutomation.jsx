import { Zap } from 'lucide-react'
import ServiceHero from '../../components/services/ServiceHero'
import TechStack from '../../components/services/TechStack'
import ProcessFlow from '../../components/services/ProcessFlow'
import UseCases from '../../components/services/UseCases'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

const NoCodeAutomation = () => {
  const service = services.find(s => s.id === 'no-code-automation')
  
  const processSteps = [
    { title: 'Process Analysis', description: 'Identifying automation opportunities' },
    { title: 'Platform Selection', description: 'Choosing the right no-code tools' },
    { title: 'Automation Setup', description: 'Building automated workflows' },
    { title: 'Testing & Launch', description: 'Testing and deploying automations' },
  ]

  const useCases = [
    {
      title: 'Workflow Automation',
      description: 'Automate repetitive business processes',
      benefits: ['Time Saving', 'Error Reduction', 'Efficiency'],
    },
    {
      title: 'Data Integration',
      description: 'Connect different systems and platforms',
      benefits: ['Seamless Sync', 'Real-time Updates', 'Centralized Data'],
    },
    {
      title: 'Customer Onboarding',
      description: 'Automate customer onboarding processes',
      benefits: ['Faster Onboarding', 'Consistent Experience', 'Reduced Manual Work'],
    },
  ]

  return (
    <div>
      <ServiceHero title={service.title} description={service.description} icon={Zap} />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-white">No-Code</span>{' '}
                <span className="gradient-text">Automation</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Streamline your business processes without writing code. 
                We help you automate workflows and integrate systems efficiently.
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
            <span className="text-white">Ready to Automate?</span>
          </h2>
          <Link to="/contact">
            <Button size="lg">Get Started Today</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default NoCodeAutomation
