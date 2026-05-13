import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft } from 'lucide-react'
import Card from '../components/common/Card'
import { blog_posts } from '../data/blogPosts'

const BlogPost = () => {
  const { slug } = useParams()
  const post = blog_posts.find((item) => item.slug === slug)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!post ? (
          <Card glow>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Blog post not found</h1>
            <p className="text-gray-300 mb-6">
              The post you are looking for does not exist or has been moved.
            </p>
            <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-bright-green hover:text-primary-neon-green transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
          </Card>
        ) : (
          <>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-bright-green hover:text-primary-neon-green transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Card glow>
            <div className="mb-6">
              <span className="px-3 py-1 text-xs bg-primary-bright-green/10 text-primary-bright-green rounded-full mb-4 inline-block">
                {post.category}
              </span>
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
                {post.title}
              </h1>
            </div>

            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: '#D1D5DB',
              }}
            />
          </Card>
        </motion.article>
          </>
        )}
      </div>
    </div>
  )
}

export default BlogPost
