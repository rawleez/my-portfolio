'use client'

import { useRouter } from 'next/navigation'

const featuredWorkItems = [
  {
    title: 'Melody',
    subtitle: 'Hackathon project • Voice AI career companion',
    problem:
      "Resumes show what you've done, not what you want. Job seekers waste time on roles that match their skills but not their goals.",
    approach:
      'Melody has a live AI voice conversation to learn your must-haves, nice-to-haves, and dealbreakers from how you talk about your work.',
    solution:
      'Melody searches the web in real time and recommends jobs that fit both your experience and what you actually want.',
  },
  {
    title: 'Watchtower',
    subtitle: 'Excel-driven operations visibility',
    problem:
      'Manual asset tracking limited visibility into device accountability and compliance across $75K in equipment.',
    approach:
      'Built an Excel-based operations platform using VBA macros, automated reporting, and compliance workflows to centralize asset management.',
    solution:
      'Provided real-time operational visibility while reducing manual reporting by over 10 hours per week for frontline managers.',
  },
]

const productThinkingItems = [
  {
    title: 'Find My+',
    subtitle: 'Context-aware notifications',
    summary:
      'Designed a context-aware notification model that learns device behavior across routines, locations, and time to tell when a missing device is expected versus important.',
    outcome:
      'Turns Find My from a location-based alert system into a predictive assistant that reduces noise and surfaces moments that matter.',
  },
  {
    title: 'Generation Nest',
    subtitle: 'Predictive maintenance for smart buildings',
    summary:
      'Designed an AI platform combining IoT sensors, machine learning, and maintenance workflows to identify issues before failures happen.',
    outcome:
      'Creates a proactive maintenance model that improves resident experience and operational efficiency.',
  },
  {
    title: 'Wispr Flow Smart Attribution',
    subtitle: 'Context-aware knowledge capture',
    summary:
      'Explored a feature concept that uses time, location, source, and speaker context to organize captured knowledge more intelligently.',
    outcome:
      'Makes conversations easier to transform into useful, structured information.',
  },
  {
    title: 'Audible',
    subtitle: 'Transcript-powered learning navigation',
    summary:
      'Designed a feature concept to bring audiobook discovery and navigation closer to ebook workflows through transcript search and chapter-level navigation.',
    outcome:
      'Turns audiobooks into a stronger medium for study, review, and reference.',
  },
]

const experienceItems = [
  {
    title: 'Operations Manager Intern',
    company: 'Amazon',
    period: 'June 2026 – Present',
    location: 'San Francisco, CA',
    summary:
      'Built and deployed AI-powered operational tools that reduced manual throughput analysis by 30% enabling faster labor planning and data-driven operational decisions.',
  },
  {
    title: 'Data Center Project Team Lead',
    company: 'Microsoft (Contract)',
    period: 'March 2026 – May 2026',
    location: 'Redmond, WA',
    summary:
      'Coordinated server deployment across multiple project sites, delivering 100% of assigned milestones on schedule through proactive task and stakeholder management.',
  },
  {
    title: 'In-Store Specialist',
    company: 'Apple',
    period: 'October 2025 – January 2026',
    location: 'Seattle, WA',
    summary:
      'Earned 100+ Net Promoter Score (NPS) recognitions by delivering expert product guidance and consistently high customer satisfaction.',
  },
  {
    title: 'Operations Manager Intern',
    company: 'Amazon',
    period: 'June 2025 – August 2025',
    location: 'San Diego, CA',
    summary:
      'Automated compliance reporting for $75K in warehouse assets, eliminating 10+ hours of manual work per week while improving operational visibility.',
  },
]

export function BlogPosts() {
  const router = useRouter()

  const handleCardClick = (title: string) => {
    if (title === 'Melody') {
      window.open('https://github.com/rawleez/melody', '_blank', 'noopener,noreferrer')
      return
    }

    if (title === 'Watchtower') {
      router.push('/blog/watchtower')
      return
    }

    if (title === 'Find My+') {
      router.push('/blog/findmy')
      return
    }

    if (title === 'Generation Nest') {
      router.push('/blog/generationnest')
      return
    }

    if (title === 'Wispr Flow Smart Attribution') {
      router.push('/blog/wisprflow')
      return
    }

    if (title === 'Audible') {
      router.push('/blog/audible')
    }
  }

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Featured Work
          </h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            A brief product project-based view of my product thinking experience with Melody and Watchtower.
          </p>
        </div>

        <div className="space-y-3">
          {featuredWorkItems.map((item) => (
            <article
              key={item.title}
              className={`rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 ${item.title === 'Melody' || item.title === 'Watchtower' ? 'cursor-pointer' : ''}`}
              onClick={() => handleCardClick(item.title)}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div className="flex items-center gap-3">
                  {item.title === 'Find My+' && (
                    <img
                      src="/images/findmy.png"
                      alt="Find My flow"
                      className="w-12 h-12 rounded-md object-cover"
                    />
                  )}
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-100">
                      {item.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                {item.problem}
              </p>
              <p className="mt-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Approach
              </p>
              <p className="mt-1 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                {item.approach}
              </p>
              <p className="mt-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Solution
              </p>
              <p className="mt-1 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                {item.solution}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Product Thinking
          </h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Concept work focused on AI, product context, and smarter user outcomes.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {productThinkingItems.map((item) => (
            <article
              key={item.title}
              className={`rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 ${item.title === 'Find My+' || item.title === 'Generation Nest' || item.title === 'Wispr Flow Smart Attribution' || item.title === 'Audible' ? 'cursor-pointer' : ''}`}
              onClick={() => handleCardClick(item.title)}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    {item.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                {item.summary}
              </p>
              <p className="mt-2 text-sm text-neutral-500">{item.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="scroll-mt-20 space-y-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Experience
          </h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Selected roles and project work shaped by operations, product, and AI-driven problem solving.
          </p>
        </div>

        <div className="space-y-3">
          {experienceItems.map((item) => (
            <article
              key={`${item.company}-${item.title}-${item.period}`}
              className="rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    {item.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.company}
                  </p>
                </div>
                <div className="text-sm text-neutral-500">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
