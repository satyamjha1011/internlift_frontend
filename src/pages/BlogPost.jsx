import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft } from 'lucide-react'
import Card from '../components/common/Card'

const BlogPost = () => {
  const { slug } = useParams()

  // In a real app, this would fetch from an API
  const post = {
    title: 'Getting Started with React 18',
    date: '2024-01-15',
    category: 'Frontend',
    content: `
      <p>React 18 introduces several exciting features and improvements that make building modern web applications even more powerful and efficient.</p>
      
      <h2>New Features</h2>
      <p>One of the most significant additions is Concurrent Rendering, which allows React to interrupt, pause, and resume rendering work. This results in a more responsive user experience.</p>
      
      <h2>Automatic Batching</h2>
      <p>React 18 automatically batches state updates, even in promises, timeouts, and native event handlers. This reduces unnecessary re-renders and improves performance.</p>
      
      <h2>New Hooks</h2>
      <p>Several new hooks have been introduced, including useTransition, useDeferredValue, and useId, which provide more control over rendering and component behavior.</p>
      
      <h2>Server Components</h2>
      <p>While still experimental, Server Components represent a significant shift in how we think about React applications, enabling better performance and developer experience.</p>
    `,
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </div>
  )
}

export default BlogPost
