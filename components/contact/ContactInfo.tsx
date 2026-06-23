import ContactForm from './ContactForm'

const contactDetails = [
  { label: 'Email',    value: 'erinlejhimmy@gmail.com',       href: 'mailto:erinlejhimmy@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/feyijimierinle', href: 'https://www.linkedin.com/in/feyijimierinle' },
  { label: 'Location', value: 'Lagos, Nigeria',                href: null },
  { label: 'Website',  value: 'erinhq.com',                   href: 'https://erinhq.com' },
]

export default function ContactInfo() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16">

          {/* Contact details */}
          <div>
            <span className="section-label">GET IN TOUCH</span>
            <h2>How To Reach Me</h2>
            <div className="flex flex-col gap-8 mt-8">
              {contactDetails.map(({ label, value, href }) => (
                <div key={label}>
                  <h3 className="mb-1">{label}</h3>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="max-w-none">{value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
