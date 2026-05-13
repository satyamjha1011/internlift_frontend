import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import Card from '../components/common/Card'
import { Link } from 'react-router-dom'
import { blog_posts } from '../data/blogPosts'

const Blog = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Our</span>{' '}
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, tutorials, and industry updates from our team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog_posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link to={`/blog/${post.slug}`}>
                <Card hover className="h-full group cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs bg-primary-bright-green/10 text-primary-bright-green rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 gradient-text group-hover:text-primary-bright-green transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
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
      </div>
    </div>
  )
}

export default Blog
