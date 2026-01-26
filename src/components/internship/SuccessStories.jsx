import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import Card from '../common/Card'

const SuccessStories = () => {
  const stories = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      company: 'Tech Corp',
      image: '👨‍💻',
      quote: 'The internship at Internlift gave me real-world experience that helped me land my dream job. The mentorship was exceptional!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Frontend Developer',
      company: 'StartupXYZ',
      image: '👩‍💻',
      quote: 'I learned React, Node.js, and so much more. The projects were challenging and the support was always there when I needed it.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Backend Developer',
      company: 'Digital Solutions',
      image: '👨‍💼',
      quote: 'The 6-month program transformed my career. I went from a fresh graduate to a confident developer ready for the industry.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Success</span>{' '}
            <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from our alumni who have transformed their careers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card hover className="h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary-bright-green mb-4" />
                <p className="text-gray-300 mb-6 flex-grow">
                  "{story.quote}"
                </p>
                <div className="flex items-center mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-bright-green text-primary-bright-green" />
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center text-2xl">
                    {story.image}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{story.name}</p>
                    <p className="text-sm text-gray-400">
                      {story.role} at {story.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
