import { useState } from 'react'
import SearchForm from '../components/verification/SearchForm'
import OfferLetterSearchForm from '../components/verification/OfferLetterSearchForm'
import VerificationResult from '../components/verification/VerificationResult'
import VerificationTabs from '../components/verification/VerificationTabs'
import OrganizationCTA from '../components/verification/OrganizationCTA'
import { motion } from 'framer-motion'

const VerifyIntern = () => {
  const [verificationResult, setVerificationResult] = useState(null)
  const [activeTab, setActiveTab] = useState('certificate')

  const handleCertificateSearch = (data) => {
    // Simulate verification logic
    // In a real app, this would be an API call
    const mockResults = [
      {
        status: 'verified',
        data: {
          name: data.name,
          track: 'Full Stack Development',
          duration: '6 months',
          issueDate: '2024-01-15',
          certificateId: 'INT-2024-001234',
        },
      },
      {
        status: 'not_found',
      },
    ]

    // Randomly return verified or not found for demo
    const result = Math.random() > 0.5 ? mockResults[0] : mockResults[1]
    setVerificationResult(result)
  }

  const handleOfferLetterSearch = (data) => {
    // Simulate verification logic for offer letter
    // In a real app, this would be an API call
    const mockResults = [
      {
        status: 'verified',
        data: {
          refNo: data.refNo,
          name: data.name,
          email: data.email,
          position: 'Web Development - Internship',
          issueDate: '22/01/2026',
          joiningDate: '27th January 2026',
          location: 'E-City Bangalore, Karnataka',
        },
      },
      {
        status: 'not_found',
      },
    ]

    // Randomly return verified or not found for demo
    const result = Math.random() > 0.5 ? mockResults[0] : mockResults[1]
    setVerificationResult(result)
  }

  const handleReset = () => {
    setVerificationResult(null)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setVerificationResult(null) // Reset result when switching tabs
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Verify</span>{' '}
            <span className="gradient-text">Documents</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Verify the authenticity of certificates and offer letters issued by Internlift India Technology
          </p>
        </motion.div>

        <VerificationTabs activeTab={activeTab} onTabChange={handleTabChange} />

        {!verificationResult ? (
          <>
            {activeTab === 'certificate' ? (
              <SearchForm onSearch={handleCertificateSearch} />
            ) : (
              <OfferLetterSearchForm onSearch={handleOfferLetterSearch} />
            )}
          </>
        ) : (
          <VerificationResult 
            result={verificationResult} 
            onReset={handleReset}
            type={activeTab}
          />
        )}

        <OrganizationCTA />
      </div>
    </div>
  )
}

export default VerifyIntern
