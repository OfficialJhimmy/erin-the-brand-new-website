const capabilities = [
  {
    title: 'AI Agents',
    desc: 'Autonomous and semi-autonomous systems designed to execute complex workflows.',
  },
  {
    title: 'Enterprise Knowledge Systems',
    desc: 'Knowledge retrieval, search, and organizational intelligence.',
  },
  {
    title: 'Workflow Automation',
    desc: 'Operational efficiency through intelligent automation.',
  },
  {
    title: 'Decision Intelligence',
    desc: 'Systems that support strategic analysis and business decision-making.',
  },
]

export default function ProjectCapabilities() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">CAPABILITIES</span>
        <h2>Common Patterns Across My Projects</h2>
        <div className="cards mt-8">
          {capabilities.map(({ title, desc }) => (
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
