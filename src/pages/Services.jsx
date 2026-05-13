import { Link } from 'react-router-dom'

const services_data = [
  {
    title: 'Web Application Development',
    description:
      'We build secure and scalable web applications for startups and enterprises, with strong frontend architecture, backend APIs, and deployment support.',
    href: '/services/frontend-development',
  },
  {
    title: 'Mobile App Development',
    description:
      'Our team develops Android and cross-platform mobile apps focused on usability, performance, and long-term maintainability for real business outcomes.',
    href: '/contact',
  },
  {
    title: 'IT Consulting and Solutions',
    description:
      'Internlift provides practical IT consulting to improve product strategy, automation, system performance, and digital transformation for growing teams.',
    href: '/services/no-code-automation',
  },
  {
    title: 'AI and Software Product Engineering',
    description:
      'From AI integrations and LLM workflows to custom software products, we help organizations in India ship faster with modern engineering practices.',
    href: '/services/ai-llm',
  },
]

const Services = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            <span className="text-white">IT</span> <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Internlift India Technology delivers high-impact IT services India businesses rely on for web products, automation, AI solutions, and software innovation.
          </p>
        </header>

        <div className="grid gap-6">
          {services_data.map((service_item) => (
            <section key={service_item.title} className="glass-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold gradient-text mb-3">{service_item.title}</h2>
              <p className="text-gray-300 mb-4">{service_item.description}</p>
              <Link to={service_item.href} className="text-primary-bright-green hover:underline">
                Learn more
              </Link>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
