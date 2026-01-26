import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Search, AlertCircle, FileText } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'
import LoadingSpinner from '../common/LoadingSpinner'

const OfferLetterSearchForm = ({ onSearch }) => {
  const [isSearching, setIsSearching] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsSearching(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSearching(false)
    onSearch(data)
  }

  return (
    <Card glow className="max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center mr-3">
          <FileText className="w-6 h-6 text-black" />
        </div>
        <h2 className="text-2xl font-bold gradient-text text-center">
          Verify Offer Letter
        </h2>
      </div>
      <p className="text-gray-300 mb-6 text-center">
        Enter the reference number, name, and email to verify the authenticity of the offer letter
      </p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Reference Number *
          </label>
          <input
            {...register('refNo', { 
              required: 'Reference number is required',
              pattern: {
                value: /^[0-9]{4}\/INTERN\/[0-9]{1,}$/,
                message: 'Invalid format. Expected format: YYYY/INTERN/XXX (e.g., 2026/INTERN/001)',
              },
            })}
            type="text"
            className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20"
            placeholder="e.g., 2026/INTERN/001"
          />
          {errors.refNo && (
            <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.refNo.message}</span>
            </p>
          )}
          <p className="mt-1 text-xs text-gray-400">
            Format: YYYY/INTERN/XXX (e.g., 2026/INTERN/001)
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20"
            placeholder="Enter full name as on offer letter"
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
            placeholder="Enter email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSearching}
        >
          {isSearching ? (
            <>
              <LoadingSpinner size="sm" className="mr-2" />
              Verifying...
            </>
          ) : (
            <>
              <Search className="w-5 h-5 mr-2 inline-block" />
              Verify Offer Letter
            </>
          )}
        </Button>
      </form>
    </Card>
  )
}

export default OfferLetterSearchForm
