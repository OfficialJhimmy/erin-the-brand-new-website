const featuredArticle = {
  category: 'AI Engineering',
  title: 'What Changes When AI Moves From Prototype to Production',
  desc: 'The technical, operational, and organizational realities that emerge when AI systems leave the prototype stage and become part of daily business operations.',
}

export default function InsightsFeatured() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">FEATURED ARTICLES</span>
        <h2>Latest Writing</h2>
        <article className="card mt-8 md:p-12">
          <span className="article-category">{featuredArticle.category}</span>
          <h3 className="text-[1.6rem] mb-4 mt-2">{featuredArticle.title}</h3>
          <p className="mb-6 max-w-[65ch]">{featuredArticle.desc}</p>
          <a href="#" className="text-accent hover:text-accent-hover transition-colors font-medium">
            Read Article →
          </a>
        </article>
      </div>
    </section>
  )
}
