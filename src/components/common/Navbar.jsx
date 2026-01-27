import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { 
      path: '#', 
      label: 'Services', 
      dropdown: [
        { path: '/services/backend-development', label: 'Backend Development' },
        { path: '/services/frontend-development', label: 'Frontend Development' },
        { path: '/services/ai-llm', label: 'AI & LLM Solutions' },
        { path: '/services/iot-solutions', label: 'IoT Solutions' },
        { path: '/services/no-code-automation', label: 'No-Code Automation' },
        { path: '/services/custom-software', label: 'Custom Software' },
      ]
    },
    { path: '/internship', label: 'Internship Program' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-primary-bright-green/20' : 'bg-transparent'
    }`}>
      {/* Responsive navbar container with max-width constraint */}
      <div className="w-full max-w-[90rem] mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center space-x-1 text-white hover:text-primary-bright-green transition-colors">
                    <span>{link.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-56 sm:w-64 md:w-72 glass-card"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-3 text-white hover:text-primary-bright-green hover:bg-primary-bright-green/10 transition-colors rounded-lg"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-white hover:text-primary-bright-green transition-colors ${
                    location.pathname === link.path ? 'text-primary-bright-green' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-primary-bright-green transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-primary-bright-green/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.label} className="space-y-2">
                    <div className="text-primary-bright-green font-semibold px-2 py-2">{link.label}</div>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-white hover:text-primary-bright-green hover:bg-primary-bright-green/10 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-2 py-2 text-white hover:text-primary-bright-green transition-colors rounded-lg ${
                      location.pathname === link.path ? 'text-primary-bright-green bg-primary-bright-green/10' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
