import { motion } from 'framer-motion'
import { Target, Users, Award, Zap } from 'lucide-react'
import Card from '../components/common/Card'
import Logo from '../components/common/Logo'

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To bridge the gap between academic learning and industry requirements by providing quality IT services and comprehensive internship programs.',
    },
    {
      icon: Users,
      title: 'Our Vision',
      description: 'To become a leading IT services provider and internship platform that empowers the next generation of tech professionals.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'We believe in quality, integrity, innovation, and continuous learning. Every project and program is designed with excellence in mind.',
    },
    {
      icon: Zap,
      title: 'Our Approach',
      description: 'We combine industry expertise with cutting-edge technology to deliver solutions that drive real business value.',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <Logo size="lg" showLink={false} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">About</span>{' '}
            <span className="gradient-text">Internlift</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            MSME-registered IT services company and internship provider based in Bengaluru, 
            dedicated to empowering innovation through technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass-card p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text">Who We Are</h2>
          <p className="text-gray-300 mb-4 text-lg leading-relaxed">
            Internlift India Technology is a registered MSME (Micro, Small & Medium Enterprise) 
            company based in Bengaluru, Karnataka. We specialize in providing comprehensive IT 
            services and internship programs that help bridge the gap between academic learning 
            and industry requirements.
          </p>
          <p className="text-gray-300 mb-4 text-lg leading-relaxed">
            Our team of experienced professionals is committed to delivering high-quality solutions 
            while nurturing the next generation of tech talent through our structured internship programs.
          </p>
          <div className="mt-6 p-4 bg-primary-bright-green/10 rounded-lg border border-primary-bright-green/20">
            <p className="text-sm text-gray-400 mb-1">MSME Registration Number</p>
            <p className="text-lg font-mono text-primary-bright-green font-semibold">
              UDYAM-KR-03-0578695
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card hover className="h-full text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-bright-green to-primary-neon-green flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 gradient-text">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
