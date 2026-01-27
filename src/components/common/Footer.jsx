import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { path: '/about', label: 'About Us' },
      { path: '/case-studies', label: 'Case Studies' },
      { path: '/blog', label: 'Blog' },
      { path: '/contact', label: 'Contact' },
    ],
    services: [
      { path: '/services/backend-development', label: 'Backend Development' },
      { path: '/services/frontend-development', label: 'Frontend Development' },
      { path: '/services/ai-llm', label: 'AI & LLM Solutions' },
      { path: '/services/iot-solutions', label: 'IoT Solutions' },
    ],
    programs: [
      { path: '/internship', label: 'Internship Program' },
      { path: '/verify', label: 'Verify Intern' },
    ],
  }

  return (
    <footer className="bg-black border-t border-primary-bright-green/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo size="md" showLink={false} className="mb-4" />
            </div>
            <p className="text-gray-100 mb-4">
              MSME-registered IT services company and internship provider based in Bengaluru.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-primary-bright-green flex-shrink-0" />
                <span>64/4, 1st Floor, Gopal Reddy Building, G S Palya Road, Konapana Agrahara, Electronics City, Bengaluru, Karnataka – 560100</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-bright-green" />
                <a href="mailto:support@internlift.com" className="hover:text-primary-bright-green transition-colors">
                  support@internlift.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-bright-green" />
                <a href="tel:+919430814605" className="hover:text-primary-bright-green transition-colors">
                  +91 9430814605
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4 text-primary-bright-green" />
                <a href="https://www.internlift.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-bright-green transition-colors">
                  www.internlift.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-bright-green mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-primary-bright-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-primary-bright-green mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-primary-bright-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-primary-bright-green mb-4">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-primary-bright-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 glass-card p-4">
              <p className="text-xs text-gray-400 mb-2">MSME Registration</p>
              <p className="text-sm font-mono text-primary-bright-green">UDYAM-KR-03-0578695</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-bright-green/20 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Internlift India Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
