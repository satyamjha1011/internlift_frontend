import { Link } from 'react-router-dom'

const internship_tracks = [
  {
    name: 'Software Engineering Internship',
    description: 'Hands-on training in backend systems, APIs, and software development workflows.',
  },
  {
    name: 'Web Development Internship',
    description: 'Practical experience in responsive frontend development, performance, and UI engineering.',
  },
  {
    name: 'Data Analytics Internship',
    description: 'Work with datasets, dashboards, and reporting to develop industry-ready analytical skills.',
  },
  {
    name: 'Digital Marketing Internship',
    description: 'Learn campaign planning, SEO execution, and content-led growth for technology businesses.',
  },
]

const Internships = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            <span className="text-white">Internship</span> <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join structured tech internships India students and fresh graduates use to gain practical project experience and career guidance.
          </p>
        </header>

        <section className="glass-card p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold gradient-text mb-4">Program Tracks</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {internship_tracks.map((track_item) => (
              <article key={track_item.name} className="border border-primary-bright-green/20 rounded-lg p-4">
                <h3 className="text-xl text-white font-semibold mb-2">{track_item.name}</h3>
                <p className="text-gray-300">{track_item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-card p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold gradient-text mb-4">Who Should Apply</h2>
          <p className="text-gray-300">
            These programs are ideal for undergraduate students, final-year students, and fresh graduates in India who want practical exposure in real project environments.
          </p>
        </section>

        <section className="glass-card p-6 sm:p-8">
          <h2 className="text-2xl font-bold gradient-text mb-4">How to Apply</h2>
          <p className="text-gray-300 mb-4">
            Submit your details through our internship form, choose your preferred track, and our team will guide you through screening and onboarding.
          </p>
          <Link to="/internship" className="text-primary-bright-green hover:underline mr-6">
            Apply Now
          </Link>
          <Link to="/contact" className="text-primary-bright-green hover:underline">
            Contact Team
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Internships
