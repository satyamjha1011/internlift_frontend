import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import InternshipProgram from './pages/InternshipProgram'
import VerifyIntern from './pages/VerifyIntern'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'
import BackendDevelopment from './pages/services/BackendDevelopment'
import FrontendDevelopment from './pages/services/FrontendDevelopment'
import AIandLLM from './pages/services/AIandLLM'
import IoTSolutions from './pages/services/IoTSolutions'
import NoCodeAutomation from './pages/services/NoCodeAutomation'
import CustomSoftware from './pages/services/CustomSoftware'

function App() {
  return (
    <Router>
      {/* Main app container - prevents horizontal scroll and ensures full width */}
      <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-grow w-full max-w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/internship" element={<InternshipProgram />} />
            <Route path="/verify" element={<VerifyIntern />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services/backend-development" element={<BackendDevelopment />} />
            <Route path="/services/frontend-development" element={<FrontendDevelopment />} />
            <Route path="/services/ai-llm" element={<AIandLLM />} />
            <Route path="/services/iot-solutions" element={<IoTSolutions />} />
            <Route path="/services/no-code-automation" element={<NoCodeAutomation />} />
            <Route path="/services/custom-software" element={<CustomSoftware />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
