import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Logo from './Logo'

/**
 * Footer Component - Fully Responsive and Semantically Correct
 * 
 * Features:
 * - CSS Grid layout for responsive column structure
 * - Semantic HTML5 elements (footer, nav, address)
 * - ARIA roles and labels for accessibility
 * - Relative units (rem, %) for all sizing
 * - Mobile-first responsive design
 * - Breakpoints: 480px, 768px, 1024px, 1440px
 * - Ultra-wide screen support with max-width constraints
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Footer navigation links organized by category
  const footerLinks = {
    company: [
      { path: '/about', label: 'About Us' },
      { path: '/case-studies', label: 'Case Studies' },
      { path: '/blog', label: 'Blog' },
      { path: '/contact', label: 'Contact' },
      { path: '/privacy-policy', label: 'Privacy Policy' }, // New link added
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
    <footer 
      className="bg-black border-t border-primary-bright-green/20 mt-8 sm:mt-10 md:mt-12 lg:mt-16"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer container - responsive padding and max-width constraint */}
      <div className="w-full max-w-[90rem] mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
        
        {/* Footer content grid - responsive columns */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          
          {/* ============================================
              COLUMN 1: Company Information
              ============================================ */}
          <div className="xs:col-span-1 sm:col-span-2 lg:col-span-1">
            {/* Company Logo */}
            <div className="mb-4 sm:mb-5 md:mb-6" aria-label="Company logo">
              <Logo size="md" showLink={false} className="mb-3 sm:mb-4" />
            </div>
            
            {/* Company Description */}
            <p className="text-gray-100 text-sm sm:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
              MSME-registered IT services company and internship provider based in Bengaluru.
            </p>
            
            {/* Contact Information - Using semantic address element */}
            <address 
              className="not-italic space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-300"
              aria-label="Contact information"
            >
              {/* Physical Address */}
              <div className="flex items-start gap-2 sm:gap-2.5" role="group" aria-label="Physical address">
                <MapPin 
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-primary-bright-green flex-shrink-0" 
                  aria-hidden="true"
                />
                <span className="leading-relaxed">
                  64/4, 1st Floor, Gopal Reddy Building, G S Palya Road, Konapana Agrahara, 
                  Electronics City, Bengaluru, Karnataka – 560100
                </span>
              </div>
              
              {/* Email Address */}
              <div className="flex items-center gap-2 sm:gap-2.5" role="group" aria-label="Email address">
                <Mail 
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-bright-green flex-shrink-0" 
                  aria-hidden="true"
                />
                <a 
                  href="mailto:support@internlift.com" 
                  className="hover:text-primary-bright-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-bright-green focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Send email to support@internlift.com"
                >
                  support@internlift.com
                </a>
              </div>
              
              {/* Phone Number */}
              <div className="flex items-center gap-2 sm:gap-2.5" role="group" aria-label="Phone number">
                <Phone 
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-bright-green flex-shrink-0" 
                  aria-hidden="true"
                />
                <a 
                  href="tel:+917004284412" 
                  className="hover:text-primary-bright-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-bright-green focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Call +91 7004284412"
                >
                  +91 7004284412
                </a>
              </div>
              
              {/* Website URL */}
              <div className="flex items-center gap-2 sm:gap-2.5" role="group" aria-label="Website">
                <ExternalLink 
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-bright-green flex-shrink-0" 
                  aria-hidden="true"
                />
                <a 
                  href="https://www.internlift.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-bright-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-bright-green focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Visit www.internlift.com (opens in new tab)"
                >
                  www.internlift.com
                </a>
              </div>
            </address>
          </div>

          {/* ============================================
              COLUMN 2: Company Navigation Links
              ============================================ */}
          <nav 
            className="xs:col-span-1 sm:col-span-1 lg:col-span-1"
            aria-label="Company navigation"
          >
            <h2 className="text-base sm:text-lg font-semibold text-primary-bright-green mb-3 sm:mb-4 md:mb-5">
              Company
            </h2>
            <ul 
              className="space-y-2 sm:space-y-2.5" 
              role="list"
            >
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 text-sm sm:text-base hover:text-primary-bright-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-bright-green focus:ring-offset-2 focus:ring-offset-black rounded inline-block"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ============================================
              COLUMN 3: Services Navigation Links
              ============================================ */}
          <nav 
            className="xs:col-span-1 sm:col-span-1 lg:col-span-1"
            aria-label="Services navigation"
          >
            <h2 className="text-base sm:text-lg font-semibold text-primary-bright-green mb-3 sm:mb-4 md:mb-5">
              Services
            </h2>
            <ul 
              className="space-y-2 sm:space-y-2.5" 
              role="list"
            >
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 text-sm sm:text-base hover:text-primary-bright-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-bright-green focus:ring-offset-2 focus:ring-offset-black rounded inline-block"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ============================================
              COLUMN 4: Programs & MSME Registration
              ============================================ */}
          <div className="xs:col-span-1 sm:col-span-1 lg:col-span-1">
            {/* Programs Navigation */}
            <nav aria-label="Programs navigation">
              <h2 className="text-base sm:text-lg font-semibold text-primary-bright-green mb-3 sm:mb-4 md:mb-5">
                Programs
              </h2>
              <ul 
                className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5 md:mb-6" 
                role="list"
              >
              {footerLinks.programs.map((link) => (
                <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 text-sm sm:text-base hover:text-primary-bright-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-bright-green focus:ring-offset-2 focus:ring-offset-black rounded inline-block"
                      aria-label={`Navigate to ${link.label}`}
                    >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            </nav>
            
            {/* MSME Registration Card */}
            <div 
              className="glass-card p-3 sm:p-4" 
              role="region"
              aria-label="MSME registration information"
            >
              <p className="text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2 font-medium">
                MSME Registration
              </p>
              <p 
                className="text-xs sm:text-sm md:text-base font-mono text-primary-bright-green break-all"
                aria-label="MSME registration number UDYAM-KR-03-0578695"
              >
                UDYAM-KR-03-0578695
              </p>
            </div>
          </div>
        </div>

        {/* ============================================
            COPYRIGHT SECTION
            ============================================ */}
        <div 
          className="mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 border-t border-primary-bright-green/20 text-center"
          role="contentinfo"
          aria-label="Copyright information"
        >
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {currentYear} Internlift India Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
