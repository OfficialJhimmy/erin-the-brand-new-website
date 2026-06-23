const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/feyijimierinle',
    desc: 'Professional updates and networking.',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
    desc: 'Projects, code, and experiments.',
  },
  {
    name: 'X / Twitter',
    href: 'https://x.com/',
    desc: 'Thoughts on AI, systems, and technology.',
  },
  {
    name: 'Website',
    href: 'https://erinhq.com',
    desc: 'Projects, architecture, and insights.',
  },
]

export default function ContactSocials() {
  return (
    <section className="section-alt">
      <div className="container">
        <span className="section-label">SOCIALS</span>
        <h2>Connect Online</h2>
        <div
          className="grid gap-6 mt-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
        >
          {socials.map(({ name, href, desc }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <h3 className="mb-2">{name}</h3>
              <p className="max-w-none">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
