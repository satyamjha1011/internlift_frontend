import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Card from '../common/Card'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      company: 'Tech Corp',
      content: 'Internlift provided me with an excellent internship experience. The mentorship was outstanding, and I gained real-world skills that helped me land my dream job.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Frontend Developer',
      company: 'StartupXYZ',
      content: 'The hands-on projects and expert guidance during my internship were invaluable. The certificate verification system is also a great addition for credibility.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Backend Developer',
      company: 'Digital Solutions',
      content: 'I learned so much during my 6-month internship. The team is supportive, and the projects are challenging yet manageable. Highly recommended!',
      rating: 5,
    },
  ]

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-16">
      {/* Responsive container with max-width constraint */}
      <div className="w-full max-w-[90rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">What Our</span>{' '}
            <span className="gradient-text">Interns Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real feedback from our successful interns
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card hover className="h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary-bright-green mb-4" />
                <p className="text-gray-300 mb-6 flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-bright-green text-primary-bright-green" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
