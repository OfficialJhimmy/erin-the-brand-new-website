export default function ResumeHero() {
  return (
    <section className="pt-[140px] pb-[90px]">
      <div className="container">
        <span className="badge">Resume</span>
        <h1>Lead AI Engineer &amp; AI Systems Architect</h1>
        <p className="text-[1.15rem] mt-5 max-w-[65ch]">
          AI Engineer with 6+ years of software engineering experience building scalable
          applications, AI-powered products, workflow automation systems, and enterprise AI
          solutions.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <a href="/assets/Feyijimi-Erinle-AI-Engineer-CV.pdf" className="btn-primary" download>
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/feyijimierinle"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  )
}
