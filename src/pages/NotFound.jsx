import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button size="lg" className="group">
                <Home className="w-5 h-5 mr-2 inline-block" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.history.back()}
              className="group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 inline-block" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
