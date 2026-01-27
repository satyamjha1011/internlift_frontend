import HeroSection from '../components/home/HeroSection'
import DualValueProp from '../components/home/DualValueProp'
import ServicesGrid from '../components/home/ServicesGrid'
import StatsCounter from '../components/home/StatsCounter'
import InternshipSpotlight from '../components/home/InternshipSpotlight'
import MSMEBadge from '../components/home/MSMEBadge'
import Testimonials from '../components/home/Testimonials'
import LatestBlogs from '../components/home/LatestBlogs'

/**
 * Home Page - Main container with mobile-first responsive design
 * Prevents overlapping and ensures clean layout on all screen sizes
 * Fixes layout breaks when switching between mobile/desktop views
 */
const Home = () => {
  return (
    /* Main home container - ensures no horizontal overflow, proper spacing, and fluid adaptation */
    <div 
      className="w-full max-w-full min-w-0 overflow-x-hidden min-h-screen"
      style={{ 
        width: '100%', 
        maxWidth: '100%', 
        overflowX: 'hidden',
        minWidth: 0
      }}
    >
      <HeroSection />
      <DualValueProp />
      <ServicesGrid />
      <StatsCounter />
      <InternshipSpotlight />
      <MSMEBadge />
      <Testimonials />
      <LatestBlogs />
    </div>
  )
}

export default Home
