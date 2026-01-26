import { motion } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'

const VerificationResult = ({ result, onReset, type = 'certificate' }) => {
  if (!result) return null

  const isVerified = result.status === 'verified'
  const isNotFound = result.status === 'not_found'
  const isError = result.status === 'error'
  const isOfferLetter = type === 'offer-letter'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <Card glow>
        {isVerified && (
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center mx-auto mb-6 glow-effect-strong">
              <CheckCircle className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              {isOfferLetter ? 'Offer Letter Verified!' : 'Certificate Verified!'}
            </h3>
            <p className="text-gray-300 mb-6">
              This {isOfferLetter ? 'offer letter' : 'certificate'} is authentic and has been issued by Internlift India Technology.
            </p>
            
            <div className="glass-card p-6 mb-6 text-left">
              <h4 className="text-xl font-bold mb-4 gradient-text">
                {isOfferLetter ? 'Offer Letter Details' : 'Certificate Details'}
              </h4>
              <div className="space-y-3">
                {isOfferLetter ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Reference Number:</span>
                      <span className="text-primary-bright-green font-mono font-semibold">{result.data.refNo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white font-semibold">{result.data.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white font-semibold">{result.data.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Position:</span>
                      <span className="text-white font-semibold">{result.data.position}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Issue Date:</span>
                      <span className="text-white font-semibold">{result.data.issueDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Joining Date:</span>
                      <span className="text-white font-semibold">{result.data.joiningDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white font-semibold">{result.data.location}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white font-semibold">{result.data.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Track:</span>
                      <span className="text-white font-semibold">{result.data.track}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white font-semibold">{result.data.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Issue Date:</span>
                      <span className="text-white font-semibold">{result.data.issueDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Certificate ID:</span>
                      <span className="text-primary-bright-green font-mono font-semibold">{result.data.certificateId}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {isNotFound && (
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-10 h-10 text-yellow-500" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-yellow-500">
              {isOfferLetter ? 'Offer Letter Not Found' : 'Certificate Not Found'}
            </h3>
            <p className="text-gray-300 mb-6">
              We couldn't find a {isOfferLetter ? 'offer letter' : 'certificate'} matching the provided details. Please verify the information and try again.
            </p>
          </div>
        )}

        {isError && (
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-red-500">
              Verification Error
            </h3>
            <p className="text-gray-300 mb-6">
              An error occurred during verification. Please try again later.
            </p>
          </div>
        )}

        <div className="text-center">
          <Button onClick={onReset} variant="secondary">
            Verify Another {isOfferLetter ? 'Offer Letter' : 'Certificate'}
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

export default VerificationResult
