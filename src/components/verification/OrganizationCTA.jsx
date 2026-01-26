import { motion } from 'framer-motion'
import { Building2, ArrowRight } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const OrganizationCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card glow>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center glow-effect-strong">
                  <Building2 className="w-10 h-10 text-black" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Are you an organization?
                </h3>
                <p className="text-gray-300 mb-6">
                  Verify certificates of potential candidates or partner with us to provide 
                  internship opportunities. Our verification system ensures authenticity 
                  and credibility.
                </p>
                <Link to="/contact">
                  <Button variant="secondary" className="group">
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default OrganizationCTA
