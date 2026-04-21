import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const base_url = 'https://www.internlift.com'
const default_image = `${base_url}/og-image.jpg`
const default_title = 'Internlift India Technology | IT Services and Internships'
const default_description =
  'Internlift India Technology is an India-based IT services company serving Tier-1 cities including Bengaluru, Delhi, Kolkata, and Hyderabad, plus other markets, with internship programs that provide handholding practice on live projects.'

const page_seo = {
  '/': {
    title: 'Internlift India Technology | IT Services and Internships',
    description: default_description,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Internlift India Technology',
        url: base_url,
        logo: `${base_url}/logo.png`,
        description:
          'IT services company in India serving Tier-1 cities including Bengaluru, Delhi, Kolkata, and Hyderabad, while also operating in additional markets. Primary focus is IT services delivery for clients and partners, along with internship programs with live project handholding for students.',
        foundingDate: '2020',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
        areaServed: ['Bengaluru', 'Delhi', 'Kolkata', 'Hyderabad', 'India'],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          availableLanguage: ['English', 'Hindi'],
        },
        sameAs: [
          'https://www.linkedin.com/company/internlift',
          'https://twitter.com/internlift',
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Internlift India Technology',
        url: base_url,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${base_url}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What IT services does Internlift India Technology offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Internlift India Technology offers web development, mobile app development, IT consulting, software solutions, and professional internship training programs for students and fresh graduates.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I apply for an internship at Internlift India Technology?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can apply for internships through our website at internlift.com. We offer programs in web development, software engineering, data analytics, and digital marketing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Internlift India Technology based in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Internlift India Technology is an India-based IT services company providing technology solutions and internship programs to clients and students across India.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why does Internlift charge internship registration fees in some university-linked programs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For specific university-linked internship programs, fees are applied in line with official university directives and notified fee structures. In the listed Purnea University case, the Online Mode registration fee is capped at a maximum of ₹400/- (All Inclusive), and Internlift charges ₹400 in compliance with that cap.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is there official documentation like notification reference or MOU/empanelment support for verification?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Verification can be supported through official university notification references and institutional empanelment or MOU-related records where applicable. Students can verify through published university notices and by contacting support@internlift.com.',
            },
          },
        ],
      },
    ],
  },
  '/about': {
    title: 'About Internlift India Technology | IT Services Company',
    description:
      'Know Internlift India Technology, an IT services India company with internship programs and tech internships India students use to gain practical industry experience.',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What IT services does Internlift India Technology offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Internlift India Technology offers web development, mobile app development, IT consulting, software solutions, and professional internship training programs for students and fresh graduates.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I apply for an internship at Internlift India Technology?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can apply for internships through our website at internlift.com. We offer programs in web development, software engineering, data analytics, and digital marketing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Internlift India Technology based in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Internlift India Technology is an India-based IT services company providing technology solutions and internship programs to clients and students across India.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Internlift operate only in Tier-2 and Tier-3 cities?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Internlift operates across Tier-1 and additional cities in India, including Bengaluru, Delhi, Kolkata, and Hyderabad.',
            },
          },
        ],
      },
    ],
  },
  '/services': {
    title: 'IT Services in India | Web, App, AI and Consulting',
    description:
      'Explore IT services India offerings from Internlift, including web development, mobile apps, AI solutions, consulting, and internship programs for future tech talent.',
  },
  '/internships': {
    title: 'Internship Programs in India | Tech Internships India',
    description:
      'Apply to internship programs at Internlift India Technology. Join tech internships India tracks in software, web, data analytics, and digital marketing.',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Internship Programs at Internlift India Technology',
        description:
          'Structured internship training programs in software engineering, web development, data analytics, and digital marketing.',
        provider: {
          '@type': 'Organization',
          name: 'Internlift India Technology',
          sameAs: base_url,
        },
        educationalLevel: 'Undergraduate',
        inLanguage: 'en',
      },
    ],
  },
  '/faq': {
    title: 'FAQ | Internlift India Technology Services and Internships',
    description:
      'Read FAQs about Internlift India Technology, including IT services India capabilities, internship programs, and tech internships India application details.',
  },
  '/contact': {
    title: 'Contact Internlift India Technology | IT Services India',
    description:
      'Contact Internlift India Technology for IT services India projects, internship programs, and tech internships India enrollment support for students and graduates.',
  },
  '/internship': {
    title: 'Internship Program | Internlift India Technology',
    description:
      'Explore Internlift internship programs with project-based learning, mentorship, and practical exposure for students seeking tech internships India opportunities.',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Internship Program',
        description:
          'Professional internship training program with real projects in software, web development, analytics, and digital domains.',
        provider: {
          '@type': 'Organization',
          name: 'Internlift India Technology',
          sameAs: base_url,
        },
        educationalLevel: 'Undergraduate',
        inLanguage: 'en',
      },
    ],
  },
  '/case-studies': {
    title: 'Case Studies | Internlift India Technology',
    description:
      'Review Internlift case studies covering IT services India projects, implementation outcomes, and technology solutions delivered across industries.',
  },
  '/blog': {
    title: 'Blog | Internlift India Technology',
    description:
      'Read technology insights, career guidance, and internship program updates from Internlift India Technology experts and mentors.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Internlift India Technology',
    description:
      'Read the privacy policy for Internlift India Technology covering data collection, usage, user rights, and compliance standards.',
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | Internlift India Technology',
    description:
      'View the terms and conditions for using Internlift India Technology website, IT services, and internship-related information.',
  },
  '/verify': {
    title: 'Verify Internship Records | Internlift India Technology',
    description:
      'Use Internlift verification tools to validate internship records and related credentials with trusted confirmation support.',
  },
  '/signup': {
    title: 'Sign Up | Internlift India Technology',
    description:
      'Create your Internlift profile to access internship programs, updates, and IT services India engagement opportunities.',
  },
}

const service_schema = (name, description) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  provider: {
    '@type': 'Organization',
    name: 'Internlift India Technology',
  },
  description,
  areaServed: 'IN',
  serviceType: 'IT Services',
})

const service_pages = {
  '/services/backend-development': {
    title: 'Backend Development Services India | Internlift',
    description:
      'Scalable backend development from Internlift for APIs, databases, and cloud-ready systems, built for IT services India projects and high-growth products.',
    schemas: [service_schema('Backend Development', 'Backend engineering, APIs, databases, and secure architecture for modern applications.')],
  },
  '/services/frontend-development': {
    title: 'Frontend Development Services India | Internlift',
    description:
      'Responsive frontend development services in India for web apps, dashboards, and user-centric interfaces that improve performance and engagement.',
    schemas: [service_schema('Frontend Development', 'Responsive UI engineering, accessibility-focused interfaces, and modern frontend architecture.')],
  },
  '/services/ai-llm': {
    title: 'AI and LLM Solutions India | Internlift Technology',
    description:
      'AI and LLM services in India from Internlift, including chatbots, automation, and intelligent workflows for growth-focused technology teams.',
    schemas: [service_schema('AI and LLM Solutions', 'AI integration, LLM-based automation, and intelligent product features for business workflows.')],
  },
  '/services/iot-solutions': {
    title: 'IoT Solutions in India | Internlift IT Services',
    description:
      'IoT solutions by Internlift connect devices, automate operations, and deliver real-time monitoring for businesses across India.',
    schemas: [service_schema('IoT Solutions', 'Connected device solutions, monitoring systems, and IoT architecture for business automation.')],
  },
  '/services/no-code-automation': {
    title: 'No-Code Automation Services India | Internlift',
    description:
      'No-code automation services in India to streamline operations, sync tools, and reduce manual effort through reliable workflows.',
    schemas: [service_schema('No-Code Automation', 'Workflow automation and no-code integrations for process efficiency and faster execution.')],
  },
  '/services/custom-software': {
    title: 'Custom Software Development India | Internlift Tech',
    description:
      'Custom software development from Internlift for startups and enterprises needing secure, scalable, and business-specific IT solutions in India.',
    schemas: [service_schema('Custom Software Development', 'Tailored software products designed around business requirements, scalability, and security.')],
  },
}

const get_seo_data = (pathname) => {
  if (service_pages[pathname]) {
    return service_pages[pathname]
  }
  if (pathname.startsWith('/blog/')) {
    return {
      title: 'Internlift Blog | IT Services India Insights and Careers',
      description:
        'Read Internlift insights on IT services India trends, internship programs, and tech internships India guidance for students, founders, and teams.',
    }
  }
  return page_seo[pathname] || { title: default_title, description: default_description }
}

const set_meta = (key, value, is_property = false) => {
  const selector = is_property ? `meta[property="${key}"]` : `meta[name="${key}"]`
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    if (is_property) {
      tag.setAttribute('property', key)
    } else {
      tag.setAttribute('name', key)
    }
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', value)
}

const SeoManager = () => {
  const location = useLocation()
  const { pathname, hash } = location

  useEffect(() => {
    const seo = get_seo_data(pathname)
    const canonical_url = `${base_url}${pathname === '/' ? '/' : pathname}`

    document.title = seo.title
    set_meta('description', seo.description)
    set_meta('robots', 'index, follow')

    set_meta('og:title', seo.title, true)
    set_meta('og:description', seo.description, true)
    set_meta('og:type', 'website', true)
    set_meta('og:url', canonical_url, true)
    set_meta('og:image', default_image, true)
    set_meta('og:site_name', 'Internlift India Technology', true)

    set_meta('twitter:card', 'summary_large_image')
    set_meta('twitter:title', seo.title)
    set_meta('twitter:description', seo.description)
    set_meta('twitter:image', default_image)

    let canonical_tag = document.head.querySelector('link[rel="canonical"]')
    if (!canonical_tag) {
      canonical_tag = document.createElement('link')
      canonical_tag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical_tag)
    }
    canonical_tag.setAttribute('href', canonical_url)

    document.querySelectorAll('script[data-seo-schema="true"]').forEach((script_tag) => {
      script_tag.remove()
    })

    if (seo.schemas && seo.schemas.length > 0) {
      seo.schemas.forEach((schema_item) => {
        const script_tag = document.createElement('script')
        script_tag.type = 'application/ld+json'
        script_tag.setAttribute('data-seo-schema', 'true')
        script_tag.text = JSON.stringify(schema_item)
        document.head.appendChild(script_tag)
      })
    }
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

export default SeoManager
