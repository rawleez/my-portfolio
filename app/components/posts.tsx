const featuredWorkItems = [
  {
    title: 'Melody',
    subtitle: 'Hackathon project • Voice AI career companion',
    problem:
      'Resumes and keyword-based job search fail to capture how candidates actually describe their experience, priorities, and career goals.',
    approach:
      'Built a real-time voice AI agent with Google ADK, Gemini Live, FastAPI, and WebSockets that conducts conversational interviews, extracts candidate preferences and dealbreakers, and searches live job listings.',
    solution:
      'Delivered a conversational career companion that recommends relevant opportunities based on who candidates are—not just what's written on their resume.',
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
      'Architecting agentic AI workflows to improve throughput analysis and labor forecasting for senior logistics managers.',
  },
  {
    title: 'Data Center Project Team Lead',
    company: 'Microsoft (Contract)',
    period: 'March 2026 – May 2026',
    location: 'Redmond, WA',
    summary:
      'Led coordination across site teams to support server configuration delivery and keep project milestones on track.',
  },
  {
    title: 'In-Store Specialist',
    company: 'Apple',
    period: 'October 2025 – January 2026',
    location: 'Seattle, WA',
    summary:
      'Helped customers navigate technology decisions with product expertise and clear communication.',
  },
  {
    title: 'Operations Manager Intern',
    company: 'Amazon',
    period: 'June 2025 – August 2025',
    location: 'San Diego, CA',
    summary:
      'Built a device tracking and compliance system that improved site visibility and reduced manual reporting work.',
  },
]

export function BlogPosts() {
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
              className="rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
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

      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Product Thinking
          </h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Concept work focused on AI, product context, and smarter user outcomes.
          </p>
        </div>

        <div className="space-y-3">
          {productThinkingItems.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
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

      <section className="space-y-4">
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
              key={`${item.company}-${item.title}`}
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
