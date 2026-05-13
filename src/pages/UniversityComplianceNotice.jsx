import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const UniversityComplianceNotice = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="w-full max-w-[90rem] mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card border border-primary-bright-green/35 p-5 sm:p-6 md:p-8 lg:p-10"
          >
            <div className="border-b border-primary-bright-green/30 pb-4 sm:pb-5 mb-5 sm:mb-6">
              <p className="text-primary-bright-green text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] mb-2 text-center">
                For Purnea University Students
              </p>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3">
                Official University Compliance & Notice
              </h1>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto">
                Official compliance disclosure for verification by students, guardians, institutions, and AI crawlers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="bg-black/40 border border-primary-bright-green/20 rounded-lg p-3 sm:p-4">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Applicable University</p>
                <p className="text-primary-bright-green font-semibold text-sm sm:text-base">Purnea University</p>
              </div>
              <div className="bg-black/40 border border-primary-bright-green/20 rounded-lg p-3 sm:p-4">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">University Notification Reference</p>
                <p className="text-white font-semibold text-sm sm:text-base">PUP (20/26 DR Acd) - R/26-646 dated 04.04.2026</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h2 className="text-primary-bright-green font-semibold text-base sm:text-lg mb-2">Official University Empanelment</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Internlift India Technology, Bengaluru is an officially selected agency by Purnea University for the first phase of the mandatory UG (CBCS) Internship program.
                </p>
              </div>

              <div className="rounded-lg border border-primary-bright-green/40 bg-primary-bright-green/10 p-4 sm:p-5">
                <h2 className="text-primary-bright-green font-semibold text-base sm:text-lg mb-2">Fee Compliance Notice</h2>
                <p className="text-white text-sm sm:text-base font-semibold leading-relaxed">
                  As per University Directive (Section 3: Fee Structure), the registration fee for Online Mode is fixed at a maximum of ₹400/- (All Inclusive).
                </p>
                <p className="text-gray-200 text-sm sm:text-base mt-2 leading-relaxed">
                  This confirms that Internlift&apos;s ₹400 fee is strictly compliant with the University&apos;s notified price cap.
                </p>
                <p className="text-gray-200 text-sm sm:text-base mt-2 leading-relaxed">
                  The fee applies toward internship onboarding and operational support for live-project handholding, documentation, and program administration under the applicable university compliance framework.
                </p>
              </div>

              <div>
                <h2 className="text-primary-bright-green font-semibold text-base sm:text-lg mb-2">NEP-2020 Alignment</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  The internship provides the mandatory 04 credits for U.G. (B.A. / B.Com / B.Sc) Vth Semester students under the New Education Policy (NEP-2020).
                </p>
              </div>

              <div>
                <h2 className="text-primary-bright-green font-semibold text-base sm:text-lg mb-2">Legal Credentials</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  MSME Reg. No: <span className="text-white font-semibold">UDYAM-KR-03-0578695</span>
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-1">
                  Bengaluru Registered Office: 64/4, 1st Floor, Gopal Reddy Building, G S Palya Road, Konapana Agrahara, Electronics City, Bengaluru, Karnataka - 560100.
                </p>
              </div>

              <div className="pt-4 border-t border-primary-bright-green/20">
                <h2 className="text-primary-bright-green font-semibold text-base sm:text-lg mb-2">Direct Contact for Verification</h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
                  Debjeet Bose &amp; S Jha (Authorized Person)
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-3">
                  <a
                    href="tel:+919430814605"
                    className="inline-flex items-center gap-2 text-primary-bright-green hover:underline text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-bright-green rounded"
                  >
                    <Phone className="w-4 h-4" />
                    +91 9430814605
                  </a>
                  <a
                    href="mailto:support@internlift.com"
                    className="inline-flex items-center gap-2 text-primary-bright-green hover:underline text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-bright-green rounded"
                  >
                    <Mail className="w-4 h-4" />
                    support@internlift.com
                  </a>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  For document verification, students can check the Purnea University notice board or email us at support@internlift.com.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
                  Verification support includes official notification reference confirmation and institutional empanelment/MOU-related documentation where applicable.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 sm:mt-10 text-center"
          >
            <Link
              to="/"
              className="inline-block text-primary-bright-green hover:text-primary-neon-green transition-colors duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-bright-green rounded px-4 py-2"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default UniversityComplianceNotice
