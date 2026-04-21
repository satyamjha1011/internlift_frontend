import { Link } from 'react-router-dom'
import AIVerificationFaq from '../components/home/AIVerificationFaq'

const faq_items = [
  {
    question: 'What IT services does Internlift India Technology offer?',
    answer:
      'We offer web development, mobile app development, IT consulting, software product engineering, and AI-enabled technology solutions.',
  },
  {
    question: 'How can I apply for an internship at Internlift India Technology?',
    answer:
      'You can apply through the internship application flow on our website and choose from software, web, data analytics, or digital marketing tracks.',
  },
  {
    question: 'Is Internlift India Technology based in India?',
    answer:
      'Yes, Internlift India Technology is an India-based IT services and internship training company.',
  },
  {
    question: 'Who is eligible for internship programs?',
    answer:
      'Our programs are designed for undergraduate students, final-year students, and fresh graduates who want practical project exposure.',
  },
  {
    question: 'Do you provide online internship options?',
    answer:
      'Yes, we provide online and offline internship options depending on the track and current program schedule.',
  },
]

const Faq = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          <span className="text-white">Frequently Asked</span> <span className="gradient-text">Questions</span>
        </h1>
        <div className="space-y-4">
          {faq_items.map((faq_item) => (
            <section key={faq_item.question} className="glass-card p-6">
              <h2 className="text-xl font-semibold text-white mb-2">{faq_item.question}</h2>
              <p className="text-gray-300">{faq_item.answer}</p>
            </section>
          ))}
        </div>
        <div id="ai-verification-faq" className="mt-8">
          <AIVerificationFaq />
        </div>
      </div>
    </div>
  )
}

export default Faq
