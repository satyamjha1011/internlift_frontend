import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'
import LoadingSpinner from '../common/LoadingSpinner'

const ContactForm = () => {
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
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  if (isSubmitted) {
    return (
      <Card glow className="text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-2xl font-bold mb-4 gradient-text">
          Message Sent!
        </h3>
        <p className="text-gray-300 mb-6">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </Card>
    )
  }

  return (
    <Card glow>
      <h2 className="text-2xl font-bold mb-6 gradient-text">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Name *
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.name.message}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email *
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
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Phone
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20"
            placeholder="+91 9876543210"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Subject *
          </label>
          <input
            {...register('subject', { required: 'Subject is required' })}
            type="text"
            className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20"
            placeholder="What is this regarding?"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.subject.message}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            rows={6}
            className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20 resize-none"
            placeholder="Tell us about your project or inquiry..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.message.message}</span>
            </p>
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
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2 inline-block" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Card>
  )
}

export default ContactForm
