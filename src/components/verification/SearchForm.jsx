import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Search, AlertCircle } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'
import LoadingSpinner from '../common/LoadingSpinner'

const SearchForm = ({ onSearch }) => {
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
      <h2 className="text-2xl font-bold mb-6 gradient-text text-center">
        Verify Intern Certificate
      </h2>
      <p className="text-gray-300 mb-6 text-center">
        Enter the certificate ID or intern details to verify authenticity
      </p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Certificate ID
          </label>
          <input
            {...register('certificateId')}
            type="text"
            className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20"
            placeholder="Enter certificate ID (optional)"
          />
        </div>

        <div className="text-center text-gray-400 text-sm">OR</div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Intern Name *
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            className="w-full px-4 py-3 bg-black/40 border border-primary-bright-green/30 rounded-lg text-white focus:outline-none focus:border-primary-bright-green focus:ring-2 focus:ring-primary-bright-green/20"
            placeholder="Enter intern's full name"
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
            placeholder="Enter intern's email"
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
              Verify Certificate
            </>
          )}
        </Button>
      </form>
    </Card>
  )
}

export default SearchForm
