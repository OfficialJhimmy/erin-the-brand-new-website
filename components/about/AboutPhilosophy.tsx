const philosophy = [
  {
    title: 'AI Should Create Business Value',
    desc: "The goal isn't deploying AI. The goal is creating measurable outcomes.",
  },
  {
    title: 'Automation Should Improve Work',
    desc: 'Successful automation removes friction, not people.',
  },
  {
    title: 'Architecture Matters More Than Models',
    desc: 'Most AI failures come from poor system design, not poor model selection.',
  },
  {
    title: 'Adoption Is The Real Challenge',
    desc: 'The best AI systems are the ones people actually use.',
  },
]

export default function AboutPhilosophy() {
  return (
    <section className="section-alt">
      <div className="container">
        <span className="section-label">PHILOSOPHY</span>
        <h2>What I Believe About AI</h2>
        <div className="cards mt-8">
          {philosophy.map(({ title, desc }) => (
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
