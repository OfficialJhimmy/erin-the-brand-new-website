const experience = [
  {
    title: 'Software Engineering Foundation',
    desc: 'Years of experience building scalable systems, APIs, infrastructure, and cloud-native applications.',
  },
  {
    title: 'AI Implementation Experience',
    desc: 'Designing and deploying AI-powered solutions for real-world business use cases.',
  },
  {
    title: 'Architecture Thinking',
    desc: 'Experience translating business challenges into scalable technical solutions.',
  },
  {
    title: 'Leadership & Collaboration',
    desc: 'Working closely with founders, stakeholders, engineers, and business teams.',
  },
]

export default function AboutExperience() {
  return (
    <section className="section-alt">
      <div className="container">
        <span className="section-label">EXPERIENCE</span>
        <h2>What I Bring To The Table</h2>
        <div className="cards mt-8">
          {experience.map(({ title, desc }) => (
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
