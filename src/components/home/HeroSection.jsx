import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

/**
 * HeroSection Component - Mobile-First Responsive Design
 * 
 * Features:
 * - Prevents overlapping elements on mobile
 * - Proper spacing between sections
 * - Buttons stack vertically on mobile
 * - Stats grid adapts to screen size
 * - Typography scales correctly
 * - Uses relative units (rem, %, vh/vw)
 * - Media queries: 480px, 768px, 1024px
 */
const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[100vh] sm:min-h-[90vh] md:min-h-[85vh] 
                 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 
                 overflow-hidden overflow-x-hidden w-full max-w-full"
      style={{ 
        overflowX: 'hidden', 
        width: '100%', 
        maxWidth: '100%',
        position: 'relative'
      }}
      aria-label="Hero section"
    >
      {/* Animated Background - Using relative units for responsiveness */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)]" />
        {/* Background blur elements - hidden on very small screens to prevent overlap */}
        <motion.div
          className="hidden sm:block absolute top-[20%] sm:top-[15%] md:top-[10%] 
                     left-[5%] sm:left-[8%] md:left-[10%]
                     w-[10rem] sm:w-[14rem] md:w-[18rem] lg:w-[20rem] 
                     h-[10rem] sm:h-[14rem] md:h-[18rem] lg:h-[20rem]
                     bg-primary-bright-green/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          aria-hidden="true"
        />
        <motion.div
          className="hidden sm:block absolute bottom-[15%] sm:bottom-[10%] md:bottom-[8%]
                     right-[5%] sm:right-[8%] md:right-[10%]
                     w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[24rem] 
                     h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[24rem]
                     bg-primary-neon-green/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          aria-hidden="true"
        />
      </div>

      {/* Content Container - Responsive with proper spacing and overflow prevention */}
      <div className="relative z-10 
                     w-full max-w-full min-w-0
                     sm:max-w-[95%] md:max-w-[90rem] 
                     mx-auto 
                     px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 
                     text-center
                     overflow-x-hidden"
                     style={{ maxWidth: '100%' }}>
        {/* MSME Badge - Commented out for now */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 glass-card mb-6 md:mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary-bright-green" />
            <span className="text-primary-bright-green font-semibold">MSME Registered Company</span>
          </motion.div>
        </motion.div> */}

        {/* Responsive heading with fluid typography - prevents text overflow */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 
                     font-bold mb-4 sm:mb-5 md:mb-6 
                     leading-[1.1] sm:leading-[1.15] md:leading-tight
                     px-2 sm:px-0"
        >
          <span className="text-white block sm:inline">Empowering</span>{' '}
          <span className="gradient-text block sm:inline">Innovation</span>
          <br className="hidden sm:block" />
          <span className="text-white block sm:inline">Through</span>{' '}
          <span className="gradient-text block sm:inline">Technology</span>
        </motion.h1>

        {/* Responsive paragraph with constrained max-width - prevents text overflow */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 
                     text-gray-300 mb-6 sm:mb-8 md:mb-10 
                     max-w-[95%] xs:max-w-[90%] sm:max-w-[85%] md:max-w-2xl lg:max-w-3xl 
                     mx-auto px-2 sm:px-0
                     leading-relaxed"
        >
          Leading IT services provider and internship platform based in Bengaluru. 
          We deliver cutting-edge solutions and nurture the next generation of tech talent.
        </motion.p>

        {/* Buttons Container - Stacks vertically on mobile, horizontal on larger screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row 
                     items-stretch sm:items-center 
                     justify-center 
                     gap-3 xs:gap-4 sm:gap-4 md:gap-5
                     mb-8 sm:mb-10 md:mb-12
                     w-full sm:w-auto
                     px-2 sm:px-0"
        >
          <Link 
            to="/contact" 
            className="w-full sm:w-auto flex justify-center"
            aria-label="Navigate to contact page"
          >
            <Button size="lg" className="group w-full sm:w-auto min-w-[12rem] sm:min-w-[10rem]">
              Get Started
              <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link 
            to="/internship" 
            className="w-full sm:w-auto flex justify-center"
            aria-label="Navigate to internship program page"
          >
            <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[12rem] sm:min-w-[10rem]">
              Explore Internships
            </Button>
          </Link>
        </motion.div>

        {/* Stats Preview - Responsive grid with proper spacing and container constraints */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 
                     grid grid-cols-2 md:grid-cols-4 
                     gap-2.5 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 
                     w-full max-w-full min-w-0
                     xs:max-w-[98%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-4xl xl:max-w-5xl 
                     mx-auto
                     px-1 sm:px-2 md:px-0
                     overflow-x-hidden"
                     style={{ maxWidth: '100%', width: '100%' }}
          role="region"
          aria-label="Company statistics"
        >
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '100+', label: 'Interns Placed' },
            { value: '6+', label: 'Services Offered' },
            { value: '5+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="glass-card text-center 
                        p-3 xs:p-3.5 sm:p-4 md:p-5
                        min-h-[5rem] xs:min-h-[5.5rem] sm:min-h-[6rem] md:min-h-[7rem]
                        flex flex-col justify-center
                        overflow-hidden"
            >
              {/* Responsive stat values - prevents overflow */}
              <div className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl 
                            font-bold gradient-text mb-1.5 xs:mb-2 sm:mb-2.5
                            break-words">{stat.value}</div>
              {/* Responsive stat labels - prevents text overflow */}
              <div className="text-[0.65rem] xs:text-xs sm:text-sm md:text-base 
                            text-gray-400 
                            leading-tight
                            break-words
                            px-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator - Responsive positioning, hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden xs:block absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-bright-green/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-bright-green rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
