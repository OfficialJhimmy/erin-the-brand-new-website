const services = [
  {
    title: 'AI Agents',
    desc: 'Designing and implementing intelligent agent systems for operational workflows.',
  },
  {
    title: 'Enterprise Knowledge Systems',
    desc: 'RAG systems, knowledge assistants, and organizational intelligence platforms.',
  },
  {
    title: 'Workflow Automation',
    desc: 'Reducing manual effort through AI-powered process automation.',
  },
  {
    title: 'AI Product Development',
    desc: 'Building customer-facing and internal AI-powered applications.',
  },
  {
    title: 'AI Architecture',
    desc: 'Designing scalable architectures for AI systems and automation platforms.',
  },
  {
    title: 'Technical Leadership',
    desc: 'Helping teams move from AI ideas to successful implementations.',
  },
]

export default function ContactServices() {
  return (
    <section className="section-alt">
      <div className="container">
        <span className="section-label">WHAT I WORK ON</span>
        <h2>Areas Where I Can Help</h2>
        <div className="cards mt-8">
          {services.map(({ title, desc }) => (
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
