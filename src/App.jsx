import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import SeoManager from './components/common/SeoManager'
import Home from './pages/Home'

const AboutUs = lazy(() => import('./pages/AboutUs'))
const InternshipProgram = lazy(() => import('./pages/InternshipProgram'))
const VerifyIntern = lazy(() => import('./pages/VerifyIntern'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const UniversityComplianceNotice = lazy(() => import('./pages/UniversityComplianceNotice'))
const SignupRedirect = lazy(() => import('./pages/SignupRedirect'))
const NotFound = lazy(() => import('./pages/NotFound'))
const BackendDevelopment = lazy(() => import('./pages/services/BackendDevelopment'))
const FrontendDevelopment = lazy(() => import('./pages/services/FrontendDevelopment'))
const AIandLLM = lazy(() => import('./pages/services/AIandLLM'))
const IoTSolutions = lazy(() => import('./pages/services/IoTSolutions'))
const NoCodeAutomation = lazy(() => import('./pages/services/NoCodeAutomation'))
const CustomSoftware = lazy(() => import('./pages/services/CustomSoftware'))
const Services = lazy(() => import('./pages/Services'))
const Internships = lazy(() => import('./pages/Internships'))
const Faq = lazy(() => import('./pages/Faq'))
const Analytics = lazy(() => import('@vercel/analytics/react').then((mod) => ({ default: mod.Analytics })))
const SpeedInsights = lazy(() => import('@vercel/speed-insights/react').then((mod) => ({ default: mod.SpeedInsights })))

const RouteFallback = () => (
  <div className="w-full min-h-[40vh] flex items-center justify-center text-gray-400">
    Loading...
  </div>
)

function App() {
  const [enableTelemetry, setEnableTelemetry] = useState(false)

  useEffect(() => {
    const schedule = () => setEnableTelemetry(true)
    const idleCallback = window.requestIdleCallback

    if (typeof idleCallback === 'function') {
      const id = idleCallback(schedule, { timeout: 3000 })
      return () => window.cancelIdleCallback?.(id)
    }

    const timer = window.setTimeout(schedule, 2000)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {/* Main app container - prevents horizontal scroll and ensures full width */}
      <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden relative">
        <SeoManager />
        <Navbar />
        <main className="flex-grow w-full max-w-full overflow-x-hidden relative">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/internship" element={<InternshipProgram />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/verify" element={<VerifyIntern />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/signup" element={<SignupRedirect />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/university-compliance-notice" element={<UniversityComplianceNotice />} />
              <Route path="/services/backend-development" element={<BackendDevelopment />} />
              <Route path="/services/frontend-development" element={<FrontendDevelopment />} />
              <Route path="/services/ai-llm" element={<AIandLLM />} />
              <Route path="/services/iot-solutions" element={<IoTSolutions />} />
              <Route path="/services/no-code-automation" element={<NoCodeAutomation />} />
              <Route path="/services/custom-software" element={<CustomSoftware />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      {enableTelemetry && (
        <Suspense fallback={null}>
          <Analytics />
          <SpeedInsights />
        </Suspense>
      )}
    </Router>
  )
}

export default App
