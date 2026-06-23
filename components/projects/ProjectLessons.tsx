const lessons = [
  'Business Context Matters More Than Models',
  'AI Adoption Is As Important As AI Accuracy',
  'Architecture Determines Long-Term Success',
  'Human Oversight Creates Better Outcomes',
]

export default function ProjectLessons() {
  return (
    <section className="section-alt">
      <div className="container">
        <span className="section-label">LESSONS LEARNED</span>
        <h2>What Building AI Systems Has Taught Me</h2>
        <div className="cards mt-8">
          {lessons.map((lesson) => (
            <div key={lesson} className="card">
              <h3>{lesson}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
