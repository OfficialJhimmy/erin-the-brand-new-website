import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border py-20">
      <div className="container">
        <h3 className="text-foreground">Feyijimi Erinle</h3>
        <p className="mt-2">Lead AI Engineer &amp; AI Systems Architect</p>

        <div className="flex gap-5 my-5 flex-wrap">
          <a
            href="https://www.linkedin.com/in/feyijimierinle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            X
          </a>
          <a
            href="mailto:erinlejhimmy@gmail.com"
            className="text-muted hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-muted text-sm">© 2026 Feyijimi Erinle</p>
      </div>
    </footer>
  )
}
