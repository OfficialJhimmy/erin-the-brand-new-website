const expertise = [
  'AI Agents',
  'Agentic Workflows',
  'Enterprise RAG Systems',
  'Workflow Automation',
  'AI Product Development',
  'AI Solution Architecture',
  'Cloud Architecture',
  'Decision Intelligence',
]

export default function ResumeExpertise() {
  return (
    <section className="section-alt">
      <div className="container">
        <span className="section-label">CORE EXPERTISE</span>
        <h2>Areas of Specialization</h2>
        <div className="cards mt-8">
          {expertise.map((item) => (
            <div key={item} className="card">
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
