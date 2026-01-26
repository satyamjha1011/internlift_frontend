import { motion } from 'framer-motion'
import { Award, Shield, CheckCircle } from 'lucide-react'
import Card from '../common/Card'

const MSMEBadge = () => {
  const benefits = [
    'Government Recognition',
    'Quality Assurance',
    'Trusted Partner',
    'Compliance Verified',
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card glow className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-bright-green rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-neon-green rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center glow-effect-strong">
                    <Award className="w-12 h-12 text-black" />
                  </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <Shield className="w-6 h-6 text-primary-bright-green" />
                    <h3 className="text-2xl font-bold gradient-text">MSME Registered Company</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Internlift India Technology is a registered MSME (Micro, Small & Medium Enterprise) 
                    under the Government of India, ensuring quality, reliability, and compliance with 
                    all regulatory standards.
                  </p>

                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">Registration Number:</p>
                    <p className="text-lg font-mono text-primary-bright-green font-semibold">
                      UDYAM-KR-03-0578695
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary-bright-green flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default MSMEBadge
