const experience = [
  { role: 'Lead AI Engineer',             company: 'Refactrd' },
  { role: 'Software Engineer — AI Solutions', company: 'Datamellon' },
  { role: 'Software Engineer',            company: 'Shestel' },
]

export default function ExperienceTimeline() {
  return (
    <section className="section-alt">
      <div className="container">
        <span className="section-label">EXPERIENCE</span>
        <h2>Career Snapshot</h2>
        <div className="flex flex-col gap-8 mt-8">
          {experience.map(({ role, company }) => (
            <div key={role} className="timeline-item">
              <h3 className="mb-1">{role}</h3>
              <p className="max-w-none">{company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
