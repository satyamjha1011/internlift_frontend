import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const ProgramTimeline = () => {
  const phases = [
    {
      title: 'Application & Selection',
      description: 'Submit your application and get selected based on your skills and interests',
      duration: '1-2 weeks',
    },
    {
      title: 'Onboarding',
      description: 'Orientation session and project assignment',
      duration: '1 week',
    },
    {
      title: 'Learning & Development',
      description: 'Hands-on projects with mentorship and guidance',
      duration: '2-5 months',
    },
    {
      title: 'Project Completion',
      description: 'Final project submission and review',
      duration: '1-2 weeks',
    },
    {
      title: 'Certificate & Verification',
      description: 'Receive verified certificate and get added to our verification system',
      duration: '1 week',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Program</span>{' '}
            <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your journey from application to certification
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-bright-green via-primary-neon-green to-primary-bright-green" />

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative flex items-start space-x-6"
              >
                {/* Circle */}
                <div className="hidden md:block relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center glow-effect">
                    <span className="text-xl font-bold text-black">{index + 1}</span>
                  </div>
                </div>

                {/* Mobile Circle */}
                <div className="md:hidden flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center">
                    <span className="text-lg font-bold text-black">{index + 1}</span>
                  </div>
                </div>

                <div className="flex-grow glass-card p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold gradient-text">
                      {phase.title}
                    </h3>
                    <span className="text-sm text-primary-bright-green font-semibold">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-300">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramTimeline
