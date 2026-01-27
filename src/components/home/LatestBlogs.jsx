import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import Card from '../common/Card'
import { Link } from 'react-router-dom'

const LatestBlogs = () => {
  const blogs = [
    {
      title: 'Getting Started with React 18',
      excerpt: 'Learn the latest features and best practices in React 18 for modern web development.',
      date: '2024-01-15',
      slug: 'getting-started-with-react-18',
    },
    {
      title: 'AI Integration in Modern Applications',
      excerpt: 'Discover how to integrate AI and LLM solutions into your applications effectively.',
      date: '2024-01-10',
      slug: 'ai-integration-modern-applications',
    },
    {
      title: 'IoT Solutions for Smart Businesses',
      excerpt: 'Explore how IoT can transform your business operations and improve efficiency.',
      date: '2024-01-05',
      slug: 'iot-solutions-smart-businesses',
    },
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 bg-gradient-to-b from-black to-gray-900 overflow-x-hidden">
      {/* Responsive container with max-width constraint and overflow prevention */}
      <div className="w-full max-w-full sm:max-w-[95%] md:max-w-[90rem] mx-auto overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Latest</span>{' '}
              <span className="gradient-text">Blog Posts</span>
            </h2>
            <p className="text-xl text-gray-300">
              Insights, tutorials, and industry updates
            </p>
          </div>
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-2 px-6 py-3 border-2 border-primary-bright-green text-primary-bright-green rounded-lg hover:bg-primary-bright-green hover:text-black transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link to={`/blog/${blog.slug}`}>
                <Card hover className="h-full group cursor-pointer">
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 gradient-text group-hover:text-primary-bright-green transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-primary-bright-green group-hover:text-primary-neon-green transition-colors">
                    <span className="text-sm font-semibold">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-8 md:hidden"
        >
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-primary-bright-green text-primary-bright-green rounded-lg hover:bg-primary-bright-green hover:text-black transition-colors"
            >
              View All Posts
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default LatestBlogs
