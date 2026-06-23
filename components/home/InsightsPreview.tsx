import Link from 'next/link'

const insights = [
  'What Changes When AI Moves From Prototype to Production',
  'The Architecture Patterns Behind Modern AI Systems',
  'When Should You Build an AI Agent Instead of a Workflow?',
  'Building Enterprise Knowledge Systems Beyond Basic RAG',
  'The AI Readiness Framework I Use Before Designing Any AI Solution',
]

export default function InsightsPreview() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">INSIGHTS</span>
        <h2>Latest Articles</h2>
        <div className="cards mt-8">
          {insights.map((title) => (
            <div key={title} className="card">
              <h3>{title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/insights" className="btn-secondary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
