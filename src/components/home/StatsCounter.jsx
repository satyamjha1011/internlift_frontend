import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Users, Code, Award } from 'lucide-react'

const StatsCounter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const stats = [
    { icon: Code, value: 50, suffix: '+', label: 'Projects Completed', color: 'text-primary-bright-green' },
    { icon: Users, value: 100, suffix: '+', label: 'Interns Placed', color: 'text-primary-neon-green' },
    { icon: TrendingUp, value: 95, suffix: '%', label: 'Client Satisfaction', color: 'text-primary-bright-green' },
    { icon: Award, value: 6, suffix: '+', label: 'Years Experience', color: 'text-primary-neon-green' },
  ]

  const Counter = ({ end, suffix, duration = 2 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isInView) return

      let startTime = null
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      
      requestAnimationFrame(animate)
    }, [isInView, end, duration])

    return <span>{count}{suffix}</span>
  }

  return (
    <section ref={ref} className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 bg-black overflow-x-hidden">
      {/* Responsive container with max-width constraint and overflow prevention */}
      <div className="w-full max-w-full sm:max-w-[95%] md:max-w-[90rem] mx-auto overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Our</span>{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card text-center"
              >
                {/* Responsive icon container */}
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                                  rounded-full bg-gradient-to-br from-primary-bright-green/20 to-primary-neon-green/20 
                                  flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${stat.color}`} />
                  </div>
                </div>
                {/* Responsive stat value */}
                <div className={`text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl 
                                font-bold ${stat.color} mb-1 sm:mb-2`}>
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                {/* Responsive stat label */}
                <div className="text-gray-300 text-xs xs:text-sm sm:text-sm md:text-base">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter
