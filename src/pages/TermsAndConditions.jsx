import { motion } from 'framer-motion'
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'

const TermsAndConditions = () => {
  const last_updated = new Date('2026-04-21').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const terms_sections = [
    {
      icon: FileText,
      title: '1. Acceptance of Terms',
      content:
        'By accessing or using internlift.com, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree, you must not use this website or our services.',
    },
    {
      icon: Scale,
      title: '2. Services and Eligibility',
      content:
        'Internlift India Technology provides internship-related information, IT service details, and contact channels. You agree to provide accurate information when submitting forms and to use the website only for lawful purposes.',
    },
    {
      icon: Shield,
      title: '3. Intellectual Property',
      content:
        'All content on this website, including text, graphics, branding, and layouts, is owned by or licensed to Internlift India Technology unless otherwise stated. Unauthorized copying, redistribution, or commercial use is prohibited.',
    },
    {
      icon: AlertTriangle,
      title: '4. Limitation of Liability',
      content:
        'We strive to keep all information accurate and up to date, but we do not guarantee completeness or uninterrupted availability. Internlift India Technology is not liable for any indirect or consequential losses arising from use of this website.',
    },
    {
      icon: FileText,
      title: '5. External Links',
      content:
        'Our website may contain links to third-party websites. We do not control and are not responsible for third-party content, privacy practices, or terms. Visiting external websites is at your own discretion.',
    },
    {
      icon: Scale,
      title: '6. Changes to Terms',
      content:
        'We may update these Terms and Conditions at any time. Updates are effective when posted on this page. Continued use of the website after updates means you accept the revised terms.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="w-full max-w-[90rem] mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
              <span className="text-white">Terms and</span>{' '}
              <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              Last updated: {last_updated}
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {terms_sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass-card p-5 sm:p-6 md:p-8"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 gradient-text">
                        {section.title}
                      </h2>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.section>
              )
            })}
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 sm:mt-12 glass-card p-5 sm:p-6 md:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 gradient-text">Contact</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              For questions about these Terms and Conditions, contact us at{' '}
              <a href="mailto:support@internlift.com" className="text-primary-bright-green hover:underline">
                support@internlift.com
              </a>{' '}
              or visit our Contact page.
            </p>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8 sm:mt-10 text-center"
          >
            <Link
              to="/"
              className="inline-block text-primary-bright-green hover:text-primary-neon-green transition-colors duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-bright-green rounded px-4 py-2"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions
