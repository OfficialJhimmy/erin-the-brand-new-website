const steps = [
  {
    step: '01.',
    title: 'Discovery',
    desc: 'Understand business goals, workflows, stakeholders, and constraints.',
  },
  {
    step: '02.',
    title: 'Architecture',
    desc: 'Design systems, data flows, automation logic, and implementation strategy.',
  },
  {
    step: '03.',
    title: 'Implementation',
    desc: 'Build scalable, production-ready AI solutions.',
  },
  {
    step: '04.',
    title: 'Adoption',
    desc: 'Ensure teams can successfully integrate AI into day-to-day operations.',
  },
]

export default function AboutProcess() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">HOW I WORK</span>
        <h2>My Approach To AI Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="card">
              <p className="text-accent font-mono font-bold mb-3 max-w-none">{step}</p>
              <h3 className="mb-2">{title}</h3>
              <p className="max-w-none text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
