import HeroSection from '../components/home/HeroSection'
import DualValueProp from '../components/home/DualValueProp'
import ServicesGrid from '../components/home/ServicesGrid'
import StatsCounter from '../components/home/StatsCounter'
import InternshipSpotlight from '../components/home/InternshipSpotlight'
import MSMEBadge from '../components/home/MSMEBadge'
import Testimonials from '../components/home/Testimonials'
import LatestBlogs from '../components/home/LatestBlogs'

const Home = () => {
  return (
    /* Main home container - ensures no horizontal overflow */
    <div className="w-full max-w-full overflow-x-hidden">
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
