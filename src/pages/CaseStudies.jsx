import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Card from '../components/common/Card'
import { Link } from 'react-router-dom'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform Development',
      client: 'Retail Startup',
      description: 'Built a scalable e-commerce platform with React frontend and Django backend, handling 10,000+ daily transactions.',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
      results: ['300% increase in sales', '99.9% uptime', '50% faster load times'],
    },
    {
      title: 'AI-Powered Customer Support',
      client: 'SaaS Company',
      description: 'Implemented LLM-based chatbot reducing support tickets by 60% and improving response time.',
      technologies: ['OpenAI', 'LangChain', 'Python', 'FastAPI'],
      results: ['60% ticket reduction', '24/7 availability', '90% satisfaction'],
    },
    {
      title: 'IoT Smart Home System',
      client: 'Home Automation',
      description: 'Developed comprehensive IoT solution connecting 50+ devices with real-time monitoring and control.',
      technologies: ['Raspberry Pi', 'MQTT', 'React', 'Node.js'],
      results: ['50+ devices connected', 'Real-time monitoring', 'Energy savings'],
    },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Case</span>{' '}
            <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real projects, real results. See how we've helped businesses succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card hover glow className="h-full flex flex-col">
                <div className="mb-4">
                  <span className="text-sm text-primary-bright-green font-semibold">
                    {study.client}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {study.title}
                </h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  {study.description}
                </p>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary-bright-green/10 text-primary-bright-green rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Results:</p>
                  <ul className="space-y-1">
                    {study.results.map((result) => (
                      <li key={result} className="text-sm text-gray-300 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-bright-green" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-bright-green to-primary-neon-green text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,0,0.5)] transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 inline-block" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default CaseStudies
