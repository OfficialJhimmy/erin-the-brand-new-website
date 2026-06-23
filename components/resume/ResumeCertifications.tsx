const certifications = [
  'AWS Certified Solutions Architect',
  'AWS Developer Associate',
  'AWS Migration Ambassador',
  'Mobile Web Development',
]

export default function ResumeCertifications() {
  return (
    <section className="section-alt">
      <div className="container">
        <span className="section-label">CERTIFICATIONS</span>
        <h2>Professional Credentials</h2>
        <div className="cards mt-8">
          {certifications.map((cert) => (
            <div key={cert} className="card">
              <p className="text-foreground font-semibold max-w-none">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
