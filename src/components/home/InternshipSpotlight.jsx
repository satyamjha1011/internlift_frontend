import { motion } from 'framer-motion'
import { Calendar, Users, Award, ArrowRight } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const InternshipSpotlight = () => {
  const highlights = [
    {
      icon: Calendar,
      title: 'Flexible Duration',
      description: 'Programs ranging from 1 to 6 months',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Guidance from industry professionals',
    },
    {
      icon: Award,
      title: 'Verified Certificates',
      description: 'Industry-recognized completion certificates',
    },
  ]

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-16 bg-gradient-to-b from-gray-900 to-black">
      {/* Responsive container with max-width constraint */}
      <div className="w-full max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-5 md:mb-6">
              <span className="text-white">Internship</span>{' '}
              <span className="gradient-text">Program</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">
              Transform your career with hands-on experience in real-world projects. 
              Our internship programs are designed to bridge the gap between academic 
              learning and industry requirements.
            </p>
            <p className="text-gray-400 mb-6 md:mb-8">
              Join hundreds of successful interns who have kickstarted their careers 
              with Internlift. Get practical experience, mentorship, and industry 
              recognition through our comprehensive programs.
            </p>
            <Link to="/internship">
              <Button size="lg" className="group">
                Explore Programs
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card hover>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 gradient-text">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-300">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InternshipSpotlight
