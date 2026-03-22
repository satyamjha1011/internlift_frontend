import { motion } from 'framer-motion'
import {
  BarChart3,
  Brain,
  Briefcase,
  Code,
  Cpu,
  Database,
  FileCode,
  Globe,
  Laptop,
  Palette,
  Share2,
  Shield,
  Smartphone,
  Sparkles,
  ShoppingCart,
  Workflow,
  Zap,
} from 'lucide-react'
import Card from '../common/Card'
import { internship_tracks } from '../../data/internshipTracks'

const track_icons = {
  Code,
  Brain,
  Smartphone,
  Database,
  Cpu,
  Zap,
  Laptop,
  FileCode,
  Globe,
  Shield,
  Palette,
  Sparkles,
  Briefcase,
  BarChart3,
  ShoppingCart,
  Workflow,
  Share2,
}

const TrackCards = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Internship</span>{' '}
            <span className="gradient-text">Tracks</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose a track that aligns with your career goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internship_tracks.map((track, index) => {
            const Icon = track_icons[track.icon_name] || Code
            return (
              <motion.div
                key={track.value}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card hover glow className="h-full">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 gradient-text">
                    {track.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {track.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-xs text-gray-400">Duration: </span>
                    <span className="text-sm text-primary-bright-green font-semibold">
                      {track.duration}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {track.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs bg-primary-bright-green/10 text-primary-bright-green rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrackCards
