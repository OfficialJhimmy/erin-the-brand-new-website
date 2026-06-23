const principles = [
  {
    title: 'Business First',
    desc: 'Every architecture decision should support a measurable business outcome.',
  },
  {
    title: 'Humans Remain In Control',
    desc: 'Critical decisions should allow for human oversight and intervention.',
  },
  {
    title: 'AI Is A System',
    desc: 'Models are only one component. Reliable AI requires orchestration, data, workflows, evaluation, and governance.',
  },
  {
    title: 'Production Over Prototype',
    desc: 'Architectures should be designed for long-term operation, not demos.',
  },
]

export default function ArchitecturePrinciples() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">PHILOSOPHY</span>
        <h2>My Architecture Principles</h2>
        <div className="cards mt-8">
          {principles.map(({ title, desc }) => (
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
