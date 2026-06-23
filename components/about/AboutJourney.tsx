const currentFocus = [
  'AI Agents',
  'Enterprise RAG Systems',
  'Workflow Automation',
  'Decision Intelligence',
  'AI Solution Architecture',
  'Multi-Agent Systems',
]

const intersections = [
  'AI Engineering',
  'Software Engineering',
  'Systems Architecture',
  'Workflow Automation',
  'Business Transformation',
]

export default function AboutJourney() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid md:grid-cols-[1fr_320px] gap-16">
          <div>
            <h2>My Journey</h2>
            <div className="space-y-4">
              <p className="max-w-none">
                My career started in technology long before AI became mainstream. I studied Actuarial
                Science, a discipline built on analytical thinking, risk assessment, statistics, and
                structured problem solving. That foundation shaped how I approach engineering today.
              </p>
              <p className="max-w-none">
                I transitioned into software engineering and spent years building applications, APIs,
                cloud infrastructure, deployment pipelines, and scalable systems across startups and
                growing organizations.
              </p>
              <p className="max-w-none">
                As AI capabilities matured, I became increasingly interested in how organizations
                could use AI to improve operations, automate work, and create entirely new products.
              </p>
              <p className="max-w-none">Today my work sits at the intersection of:</p>
              <ul className="space-y-2 pl-5 list-disc">
                {intersections.map((item) => (
                  <li key={item} className="text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white border border-border rounded-md p-8 h-fit">
            <h3 className="mb-4">Current Focus</h3>
            <ul className="space-y-3">
              {currentFocus.map((item) => (
                <li key={item} className="text-muted text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
