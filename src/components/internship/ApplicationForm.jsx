import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'
import LoadingSpinner from '../common/LoadingSpinner'

const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl mx-auto">
          <Card glow className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Application Submitted!
            </h3>
            <p className="text-gray-300 mb-6">
              Thank you for your interest. We'll review your application and get back to you within 2-3 business days.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Submit Another Application
            </Button>
          </Card>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="application" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Apply for</span>{' '}
            <span className="gradient-text">Internship</span>
          </h2>
          <p className="text-xl text-gray-300">
            Fill out the form below to start your journey
          </p>
        </motion.div>

        <Card glow>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Phone Number *
              </label>
              <input
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Invalid phone number',
                  },
                })}
                type="tel"
                className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20"
                placeholder="9876543210"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Preferred Track *
              </label>
              <select
                {...register('track', { required: 'Please select a track' })}
                className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20"
              >
                <option value="">Select a track</option>
                <option value="full-stack">Full Stack Development</option>
                <option value="ai-ml">AI & Machine Learning</option>
                <option value="mobile">Mobile Development</option>
                <option value="backend">Backend Development</option>
                <option value="iot">IoT Development</option>
                <option value="devops">DevOps & Automation</option>
              </select>
              {errors.track && (
                <p className="mt-1 text-sm text-red-400">{errors.track.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Educational Background
              </label>
              <input
                {...register('education')}
                type="text"
                className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20"
                placeholder="B.Tech Computer Science, XYZ University"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Why are you interested in this internship? *
              </label>
              <textarea
                {...register('motivation', { required: 'Please tell us about your motivation' })}
                rows={4}
                className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20 resize-none"
                placeholder="Tell us about your goals and what you hope to learn..."
              />
              {errors.motivation && (
                <p className="mt-1 text-sm text-red-400">{errors.motivation.message}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2 inline-block" />
                  Submit Application
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}

export default ApplicationForm
