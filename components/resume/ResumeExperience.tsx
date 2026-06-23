const workHistory = [
  {
    role: 'Lead AI Engineer',
    company: 'Refactrd',
    desc: 'Leading the design and delivery of AI-powered products, intelligent automation systems, workflow optimization platforms, and AI solution architecture initiatives.',
  },
  {
    role: 'Software Engineer — AI Solutions',
    company: 'Datamellon',
    desc: 'Designed and delivered AI-powered applications, automation solutions, and cloud-native products across finance, logistics, and enterprise operations.',
  },
  {
    role: 'Software Engineer',
    company: 'Shestel',
    desc: 'Helped build and scale backend systems, engineering infrastructure, deployment pipelines, and software architecture.',
  },
  {
    role: 'Lead Software Engineer',
    company: 'Side Hustle',
    desc: 'Worked across application architecture, performance optimization, and product engineering initiatives.',
  },
  {
    role: 'Frontend Engineer',
    company: 'Dash Language School',
    desc: 'Built customer-facing applications focused on performance, usability, and engagement.',
  },
]

export default function ResumeExperience() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">EXPERIENCE</span>
        <h2>Career Highlights</h2>
        <div className="flex flex-col gap-10 mt-8">
          {workHistory.map(({ role, company, desc }) => (
            <div key={role} className="border-l-2 border-accent pl-7">
              <h3 className="mb-1">{role}</h3>
              <p className="text-accent text-sm font-semibold mb-3 max-w-none">{company}</p>
              <p className="max-w-[65ch]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
