import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const ServiceHero = ({ title, description, icon: Icon }) => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,0,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center space-x-2 text-primary-bright-green hover:text-primary-neon-green transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-shrink-0"
          >
            {Icon && (
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center glow-effect-strong">
                <Icon className="w-12 h-12 text-black" />
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-grow"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{title}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              {description}
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
