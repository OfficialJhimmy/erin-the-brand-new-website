const topics = [
  { title: 'AI Engineering',                desc: 'Designing production-ready AI systems.' },
  { title: 'AI Architecture',               desc: 'System design patterns and implementation strategies.' },
  { title: 'AI Agents',                     desc: 'Agentic workflows and orchestration systems.' },
  { title: 'Workflow Automation',           desc: 'Using AI to improve operational efficiency.' },
  { title: 'Enterprise Knowledge Systems',  desc: 'Retrieval, search, and organizational intelligence.' },
  { title: 'AI Adoption',                   desc: 'Helping organizations move from experimentation to value.' },
]

export default function InsightsTopics() {
  return (
    <section className="section-alt">
      <div className="container">
        <span className="section-label">TOPICS</span>
        <h2>Areas I Write About</h2>
        <div className="cards mt-8">
          {topics.map(({ title, desc }) => (
            <div key={title} className="card">
              <h3 className="mb-2">{title}</h3>
              <p className="max-w-none">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
