import { motion } from 'framer-motion'
import { Code, Brain, Cpu, Zap, Database, Smartphone } from 'lucide-react'
import Card from '../common/Card'

const TrackCards = () => {
  const tracks = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Master both frontend and backend technologies',
      duration: '3-6 months',
      skills: ['React', 'Node.js', 'Database', 'APIs'],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Learn AI/ML concepts and build intelligent systems',
      duration: '3-6 months',
      skills: ['Python', 'TensorFlow', 'LLMs', 'NLP'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Build iOS and Android applications',
      duration: '3-6 months',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Specialize in server-side development',
      duration: '2-4 months',
      skills: ['Django', 'Node.js', 'APIs', 'Database'],
    },
    {
      icon: Cpu,
      title: 'IoT Development',
      description: 'Build connected devices and smart systems',
      duration: '3-6 months',
      skills: ['Arduino', 'Raspberry Pi', 'Sensors', 'Cloud'],
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'Learn CI/CD, cloud, and automation tools',
      duration: '2-4 months',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    },
  ]

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
          {tracks.map((track, index) => {
            const Icon = track.icon
            return (
              <motion.div
                key={track.title}
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
