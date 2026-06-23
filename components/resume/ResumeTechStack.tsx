const techStack = [
  {
    category: 'AI & Automation',
    items: ['OpenAI', 'Claude', 'LangGraph', 'LangChain', 'Prompt Engineering', 'Workflow Automation'],
  },
  {
    category: 'Programming',
    items: ['Python', 'TypeScript', 'JavaScript', 'Node.js'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Vector Databases'],
  },
]

export default function ResumeTechStack() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">TECHNOLOGY STACK</span>
        <h2>Tools &amp; Technologies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {techStack.map(({ category, items }) => (
            <div key={category} className="card">
              <h3 className="mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-muted text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
