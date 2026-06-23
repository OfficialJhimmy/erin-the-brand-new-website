const opportunities = [
  'Lead AI Engineer',
  'AI Solutions Architect',
  'Founding AI Engineer',
  'AI Automation Engineer',
  'Technical Leadership Roles',
  'AI Transformation Initiatives',
]

export default function ContactOpportunities() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">OPEN TO</span>
        <h2>Opportunities I&apos;m Interested In</h2>
        <div
          className="grid gap-4 mt-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {opportunities.map((opp) => (
            <div key={opp} className="opportunity-card">
              <h3>{opp}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
