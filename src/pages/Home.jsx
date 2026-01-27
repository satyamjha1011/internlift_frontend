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
 */
const Home = () => {
  return (
    /* Main home container - ensures no horizontal overflow and proper spacing */
    <div className="w-full max-w-full overflow-x-hidden min-h-screen">
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
