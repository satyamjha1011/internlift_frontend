import { motion } from 'framer-motion'
import { GraduationCap, ArrowRight } from 'lucide-react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const InternshipHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)]" />
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-primary-bright-green/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-bright-green to-primary-neon-green mb-8 glow-effect-strong"
          >
            <GraduationCap className="w-10 h-10 text-black" />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Internship</span>{' '}
            <span className="gradient-text">Program</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your career with hands-on experience in real-world projects. 
            Join our comprehensive internship programs designed to bridge the gap 
            between academic learning and industry requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="#application">
              <Button size="lg" className="group">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/verify">
              <Button variant="secondary" size="lg">
                Verify Certificate
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InternshipHero
