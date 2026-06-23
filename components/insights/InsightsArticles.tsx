const articles = [
  {
    category: 'Architecture',
    title: 'The Architecture Patterns Behind Modern AI Systems',
    desc: 'A practical look at the architectural patterns powering enterprise AI applications, agent workflows, and intelligent automation systems.',
  },
  {
    category: 'AI Agents',
    title: 'When Should You Build an AI Agent Instead of a Workflow?',
    desc: 'Understanding the tradeoffs between deterministic workflows and agent-based systems.',
  },
  {
    category: 'Enterprise AI',
    title: 'Building Enterprise Knowledge Systems Beyond Basic RAG',
    desc: 'Why successful knowledge systems require more than retrieval and generation.',
  },
  {
    category: 'AI Strategy',
    title: 'The AI Readiness Framework I Use Before Designing Any AI Solution',
    desc: 'A framework for assessing organizational readiness, data maturity, and process suitability before implementation.',
  },
]

export default function InsightsArticles() {
  return (
    <section className="pb-[120px]">
      <div className="container">
        <div className="cards">
          {articles.map(({ category, title, desc }) => (
            <article key={title} className="article-card">
              <span className="article-category">{category}</span>
              <h3 className="mb-3 mt-2">{title}</h3>
              <p className="mb-6 max-w-none">{desc}</p>
              <a
                href="#"
                className="text-accent hover:text-accent-hover transition-colors font-medium text-sm"
              >
                Read Article →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
