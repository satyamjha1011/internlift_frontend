import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-32 overflow-hidden">
      {/* Animated Background - Using relative units for responsiveness */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)]" />
        {/* Background blur elements - responsive sizing with clamp() equivalent via Tailwind */}
        <motion.div
          className="absolute top-[5rem] sm:top-[6rem] md:top-[8rem] left-[2.5rem] sm:left-[4rem] md:left-[6rem] 
                     w-[12rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] 
                     h-[12rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem]
                     bg-primary-bright-green/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[5rem] sm:bottom-[6rem] md:bottom-[8rem] right-[2.5rem] sm:right-[4rem] md:right-[6rem]
                     w-[14rem] sm:w-[18rem] md:w-[20rem] lg:w-[24rem] 
                     h-[14rem] sm:h-[18rem] md:h-[20rem] lg:h-[24rem]
                     bg-primary-neon-green/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content - Responsive container with max-width constraint for ultra-wide screens */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-16 text-center">
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

        {/* Responsive heading with fluid typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl 
                     font-bold mb-3 sm:mb-4 md:mb-5 leading-tight"
        >
          <span className="text-white">Empowering</span>{' '}
          <span className="gradient-text">Innovation</span>
          <br />
          <span className="text-white">Through</span>{' '}
          <span className="gradient-text">Technology</span>
        </motion.h1>

        {/* Responsive paragraph with constrained max-width */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl 
                     text-gray-300 mb-5 sm:mb-6 md:mb-8 
                     max-w-[90%] xs:max-w-[85%] sm:max-w-2xl md:max-w-3xl mx-auto"
        >
          Leading IT services provider and internship platform based in Bengaluru. 
          We deliver cutting-edge solutions and nurture the next generation of tech talent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/internship">
            <Button variant="secondary" size="lg">
              Explore Internships
            </Button>
          </Link>
        </motion.div>

        {/* Stats Preview - Responsive grid with proper spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 sm:mt-10 md:mt-12 
                     grid grid-cols-2 md:grid-cols-4 
                     gap-3 xs:gap-4 sm:gap-5 md:gap-6 
                     max-w-[95%] xs:max-w-[90%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto"
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
              className="glass-card text-center"
            >
              {/* Responsive stat values */}
              <div className="text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl 
                            font-bold gradient-text mb-1 sm:mb-2">{stat.value}</div>
              {/* Responsive stat labels */}
              <div className="text-xs xs:text-sm sm:text-sm md:text-base text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator - Responsive positioning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
