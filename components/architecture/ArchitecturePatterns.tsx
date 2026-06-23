const patterns = [
  {
    title: 'Retrieval-Augmented Generation',
    desc: 'Enterprise knowledge systems powered by retrieval and contextual reasoning.',
  },
  {
    title: 'Agentic Workflows',
    desc: 'Multi-step systems capable of reasoning, planning, and executing tasks.',
  },
  {
    title: 'Human-In-The-Loop Systems',
    desc: 'AI systems designed for oversight, quality control, and governance.',
  },
  {
    title: 'Automation Pipelines',
    desc: 'End-to-end workflow automation connecting multiple business systems.',
  },
]

export default function ArchitecturePatterns() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">PATTERNS</span>
        <h2>Architecture Patterns I Frequently Use</h2>
        <div className="cards mt-8">
          {patterns.map(({ title, desc }) => (
            <div key={title} className="card">
              <h3 className="mb-3">{title}</h3>
              <p className="max-w-none">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
