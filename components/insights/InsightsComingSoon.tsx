const comingSoon = [
  'Designing Reliable Multi-Agent Systems',
  'Evaluating Enterprise RAG Systems',
  'The Hidden Costs of Poor AI Architecture',
  'Human-in-the-Loop Design Patterns',
  'Lessons Learned Building Decision Intelligence Platforms',
  'What CTOs Should Know Before Starting an AI Initiative',
]

export default function InsightsComingSoon() {
  return (
    <section className="section-alt">
      <div className="container">
        <span className="section-label">COMING SOON</span>
        <h2>Future Articles</h2>
        <ul className="mt-8 space-y-4">
          {comingSoon.map((topic) => (
            <li
              key={topic}
              className="flex items-center gap-3 text-muted border-b border-border pb-4 last:border-0"
            >
              <span className="w-2 h-2 rounded-full bg-accent/50 flex-shrink-0" />
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
