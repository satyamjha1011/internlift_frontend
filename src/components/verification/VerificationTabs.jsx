import { motion } from 'framer-motion'
import { Award, FileText } from 'lucide-react'

const VerificationTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex glass-card p-1 rounded-lg">
        <button
          onClick={() => onTabChange('certificate')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
            activeTab === 'certificate'
              ? 'bg-gradient-to-r from-primary-bright-green to-primary-neon-green text-black'
              : 'text-gray-300 hover:text-primary-bright-green'
          }`}
        >
          <Award className="w-5 h-5" />
          <span>Certificate</span>
        </button>
        <button
          onClick={() => onTabChange('offer-letter')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
            activeTab === 'offer-letter'
              ? 'bg-gradient-to-r from-primary-bright-green to-primary-neon-green text-black'
              : 'text-gray-300 hover:text-primary-bright-green'
          }`}
        >
          <FileText className="w-5 h-5" />
          <span>Offer Letter</span>
        </button>
      </div>
    </div>
  )
}

export default VerificationTabs
