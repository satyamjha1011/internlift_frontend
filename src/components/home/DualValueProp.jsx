import { motion } from 'framer-motion'
import { Code, Users, ArrowRight } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const DualValueProp = () => {
  const valueProps = [
    {
      icon: Code,
      title: 'IT Services',
      description: 'Comprehensive software development solutions including backend, frontend, AI/LLM, IoT, and custom software development.',
      features: [
        'Backend Development',
        'Frontend Development',
        'AI & LLM Solutions',
        'IoT Solutions',
        'No-Code Automation',
        'Custom Software',
      ],
      cta: 'Explore Services',
      link: '/services/backend-development',
      gradient: 'from-primary-bright-green to-primary-neon-green',
    },
    {
      icon: Users,
      title: 'Internship Programs',
      description: 'Hands-on internship programs designed to bridge the gap between academic learning and industry requirements.',
      features: [
        'Real-world Projects',
        'Mentorship Support',
        'Industry Exposure',
        'Certificate of Completion',
        'Career Guidance',
        'Verification System',
      ],
      cta: 'Learn More',
      link: '/internship',
      gradient: 'from-primary-neon-green to-primary-bright-green',
    },
  ]

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-16">
      {/* Responsive container with max-width constraint */}
      <div className="w-full max-w-[90rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">What We</span>{' '}
            <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Two powerful solutions to help you succeed in the tech industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card glow className="h-full flex flex-col">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${prop.gradient} flex items-center justify-center mb-6`}>
                  <prop.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 gradient-text">{prop.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{prop.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {prop.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-bright-green" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={prop.link}>
                  <Button variant="secondary" className="w-full group">
                    {prop.cta}
                    <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DualValueProp
