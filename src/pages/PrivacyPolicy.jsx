import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Database, Users, Globe, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Privacy Policy Page - Comprehensive Privacy Policy for Internlift India Technology
 * 
 * This page provides detailed information about how we collect, use, and protect
 * user data in compliance with privacy regulations.
 */
const PrivacyPolicy = () => {
  const lastUpdated = new Date('2024-01-15').toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  const policySections = [
    {
      id: 'introduction',
      icon: Shield,
      title: '1. Introduction',
      content: [
        'Welcome to Internlift India Technology ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.internlift.com) or use our services.',
        'By accessing or using our website and services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.',
      ],
    },
    {
      id: 'information-collection',
      icon: Database,
      title: '2. Information We Collect',
      content: [
        'We collect information that you provide directly to us, including:',
        '• Personal Information: Name, email address, phone number, postal address, and other contact details when you register for our services, apply for internships, or contact us.',
        '• Professional Information: Educational background, work experience, skills, resume, and portfolio when you apply for internship programs.',
        '• Account Information: Username, password, and account preferences when you create an account.',
        '• Communication Data: Messages, emails, and other communications you send to us.',
        '• Technical Information: IP address, browser type, device information, operating system, and usage data collected automatically when you visit our website.',
        '• Cookies and Tracking: We use cookies and similar tracking technologies to track activity on our website and store certain information.',
      ],
    },
    {
      id: 'how-we-use',
      icon: Lock,
      title: '3. How We Use Your Information',
      content: [
        'We use the information we collect for the following purposes:',
        '• To provide, maintain, and improve our services and website functionality.',
        '• To process and manage internship applications and program enrollments.',
        '• To communicate with you about our services, respond to inquiries, and provide customer support.',
        '• To send you updates, newsletters, and promotional materials (with your consent).',
        '• To verify your identity and prevent fraud or unauthorized access.',
        '• To analyze usage patterns and improve user experience.',
        '• To comply with legal obligations and enforce our terms and conditions.',
        '• To protect our rights, property, and safety, as well as that of our users.',
      ],
    },
    {
      id: 'information-sharing',
      icon: Eye,
      title: '4. Information Sharing and Disclosure',
      content: [
        'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:',
        '• With Your Consent: We may share information when you explicitly consent to such sharing.',
        '• Service Providers: We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our users, provided they agree to keep this information confidential.',
        '• Legal Requirements: We may disclose information if required by law, court order, or government regulation, or to protect our rights and safety.',
        '• Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.',
        '• Internship Partners: With your consent, we may share your application information with potential internship host organizations.',
      ],
    },
    {
      id: 'data-security',
      icon: Shield,
      title: '5. Data Security',
      content: [
        'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:',
        '• Encryption of sensitive data during transmission and storage.',
        '• Regular security assessments and updates.',
        '• Access controls and authentication mechanisms.',
        '• Secure server infrastructure and data backup systems.',
        'However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.',
      ],
    },
    {
      id: 'data-retention',
      icon: FileText,
      title: '6. Data Retention',
      content: [
        'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.',
        'Account information is retained while your account is active. Application data may be retained for up to 3 years after the completion of internship programs for verification and record-keeping purposes.',
      ],
    },
    {
      id: 'your-rights',
      icon: Users,
      title: '7. Your Rights and Choices',
      content: [
        'You have the following rights regarding your personal information:',
        '• Access: You can request access to the personal information we hold about you.',
        '• Correction: You can request correction of inaccurate or incomplete information.',
        '• Deletion: You can request deletion of your personal information, subject to legal obligations.',
        '• Objection: You can object to certain processing of your information.',
        '• Data Portability: You can request a copy of your data in a structured format.',
        '• Withdraw Consent: You can withdraw your consent at any time where we rely on consent for processing.',
        'To exercise these rights, please contact us using the contact information provided below.',
      ],
    },
    {
      id: 'cookies',
      icon: Globe,
      title: '8. Cookies and Tracking Technologies',
      content: [
        'We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.',
        'Types of cookies we use:',
        '• Essential Cookies: Required for the website to function properly.',
        '• Analytics Cookies: Help us understand how visitors interact with our website.',
        '• Preference Cookies: Remember your preferences and settings.',
        '• Marketing Cookies: Used to deliver relevant advertisements (with your consent).',
      ],
    },
    {
      id: 'third-party',
      icon: Globe,
      title: '9. Third-Party Links',
      content: [
        'Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.',
      ],
    },
    {
      id: 'children',
      icon: Users,
      title: '10. Children\'s Privacy',
      content: [
        'Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.',
      ],
    },
    {
      id: 'changes',
      icon: FileText,
      title: '11. Changes to This Privacy Policy',
      content: [
        'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.',
        'Changes to this Privacy Policy are effective when they are posted on this page.',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Main Container - Responsive with max-width constraint */}
      <div className="w-full max-w-[90rem] mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
              <span className="text-white">Privacy</span>{' '}
              <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              Last updated: {lastUpdated}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-5 sm:p-6 md:p-8 mb-8 sm:mb-10"
          >
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Welcome to Internlift India Technology. We are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website or use our services.
            </p>
          </motion.div>

          {/* Table of Contents - Mobile Friendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-5 sm:p-6 mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 gradient-text">Table of Contents</h2>
            <nav aria-label="Privacy Policy table of contents">
              <ul className="space-y-2 text-sm sm:text-base">
                {policySections.map((section, index) => (
                  <li key={section.id}>
                    <a 
                      href={`#${section.id}`}
                      className="text-gray-300 hover:text-primary-bright-green transition-colors duration-200"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-6 sm:space-y-8">
            {policySections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-5 sm:p-6 md:p-8 scroll-mt-20"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 gradient-text">
                        {section.title}
                      </h2>
                      <div className="space-y-3 sm:space-y-4">
                        {section.content.map((paragraph, pIndex) => (
                          <p 
                            key={pIndex}
                            className="text-gray-300 text-sm sm:text-base leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.section>
              )
            })}
          </div>

          {/* Contact Information Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 sm:mt-12 md:mt-16 glass-card p-5 sm:p-6 md:p-8"
            aria-label="Contact information for privacy inquiries"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text text-center">
              Contact Us
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6 text-center leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            
            <div className="space-y-4 sm:space-y-5">
              {/* Company Name */}
              <div className="text-center">
                <p className="text-white font-semibold text-base sm:text-lg mb-2">
                  Internlift India Technology
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  MSME Registered Company
                </p>
                <p className="text-gray-400 text-xs sm:text-sm font-mono mt-1">
                  UDYAM-KR-03-0578695
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-bright-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Address</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      64/4, 1st Floor, Gopal Reddy Building,<br />
                      G S Palya Road, Konapana Agrahara,<br />
                      Electronics City, Bengaluru,<br />
                      Karnataka – 560100
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-bright-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Email</p>
                    <a 
                      href="mailto:support@internlift.com" 
                      className="text-primary-bright-green hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-primary-bright-green rounded"
                      aria-label="Send email to support@internlift.com"
                    >
                      support@internlift.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 sm:col-span-2 sm:justify-center">
                  <Phone className="w-5 h-5 text-primary-bright-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Phone</p>
                    <a 
                      href="tel:+917004284412" 
                      className="text-primary-bright-green hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-primary-bright-green rounded"
                      aria-label="Call +91 7004284412"
                    >
                      +91 7004284412
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Back to Home Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-8 sm:mt-10 text-center"
          >
            <Link 
              to="/"
              className="inline-block text-primary-bright-green hover:text-primary-neon-green transition-colors duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-bright-green rounded px-4 py-2"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
