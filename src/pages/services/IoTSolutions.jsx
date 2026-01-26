import { Cpu } from 'lucide-react'
import ServiceHero from '../../components/services/ServiceHero'
import TechStack from '../../components/services/TechStack'
import ProcessFlow from '../../components/services/ProcessFlow'
import UseCases from '../../components/services/UseCases'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

const IoTSolutions = () => {
  const service = services.find(s => s.id === 'iot-solutions')
  
  const processSteps = [
    { title: 'Planning', description: 'Designing IoT architecture' },
    { title: 'Hardware Setup', description: 'Setting up devices and sensors' },
    { title: 'Software Development', description: 'Building control and monitoring systems' },
    { title: 'Deployment', description: 'Deploying and monitoring IoT solutions' },
  ]

  const useCases = [
    {
      title: 'Smart Home',
      description: 'Automated home control systems',
      benefits: ['Energy Efficiency', 'Remote Control', 'Automation'],
    },
    {
      title: 'Industrial IoT',
      description: 'Monitoring and automation for industries',
      benefits: ['Real-time Monitoring', 'Predictive Maintenance', 'Efficiency'],
    },
    {
      title: 'Agriculture',
      description: 'Smart farming solutions',
      benefits: ['Crop Monitoring', 'Automated Irrigation', 'Data Analytics'],
    },
  ]

  return (
    <div>
      <ServiceHero title={service.title} description={service.description} icon={Cpu} />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-white">IoT</span>{' '}
                <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Connect devices, collect data, and automate processes with our 
                comprehensive IoT solutions.
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
            <span className="text-white">Ready to Connect</span>{' '}
            <span className="gradient-text">Your Devices?</span>
          </h2>
          <Link to="/contact">
            <Button size="lg">Get Started Today</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default IoTSolutions
