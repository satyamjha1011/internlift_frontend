import { ExternalLink } from 'lucide-react'

const signup_form_url = 'https://forms.gle/XpiXeaj5YyQWzKbf6'

const SignupRedirect = () => {
  return (
    <div className="pt-32 pb-20 min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Student Signup</span>
          </h1>
          <p className="text-gray-300 text-lg mb-3">
            This signup form is for <span className="text-white font-semibold">Purnea University students only</span>.
          </p>
          <p className="text-gray-400 mb-6">
            Click signup below to open the secure response form.
          </p>

          <a
            href={signup_form_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-bright-green text-black font-semibold hover:opacity-90 transition-opacity"
          >
            Signup
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignupRedirect
