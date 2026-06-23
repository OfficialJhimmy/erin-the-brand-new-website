const projects = [
  { name: 'Kora', desc: 'Enterprise Knowledge & Onboarding Platform' },
  { name: 'Quill', desc: 'AI-Powered Statement of Work Generation' },
  { name: 'Atlas', desc: 'Multi-Agent Research & Decision Intelligence Platform' },
]

export default function ResumeProjects() {
  return (
    <section className="section-alt">
      <div className="container">
        <span className="section-label">PROJECT HIGHLIGHTS</span>
        <h2>Representative AI Systems</h2>
        <div className="cards mt-8">
          {projects.map(({ name, desc }) => (
            <div key={name} className="card">
              <h3 className="mb-2">{name}</h3>
              <p className="max-w-none">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
