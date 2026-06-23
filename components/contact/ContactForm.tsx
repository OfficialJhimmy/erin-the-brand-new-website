'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Wire up your preferred form backend (Resend, Formspree, etc.)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card flex flex-col items-center justify-center py-16 text-center">
        <p className="text-accent font-semibold text-lg max-w-none mb-2">Message sent!</p>
        <p>Thanks for reaching out. I&apos;ll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
      <div className="flex flex-col gap-2">
        <label className="text-foreground text-sm font-medium">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          required
          className="bg-surface border border-border text-foreground placeholder:text-muted px-[18px] py-[18px] rounded-[14px] font-sans focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-foreground text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="your@email.com"
          required
          className="bg-surface border border-border text-foreground placeholder:text-muted px-[18px] py-[18px] rounded-[14px] font-sans focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-foreground text-sm font-medium">Company</label>
        <input
          type="text"
          placeholder="Company Name"
          className="bg-surface border border-border text-foreground placeholder:text-muted px-[18px] py-[18px] rounded-[14px] font-sans focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-foreground text-sm font-medium">How Can I Help?</label>
        <select className="bg-surface border border-border text-foreground px-[18px] py-[18px] rounded-[14px] font-sans focus:outline-none focus:border-accent transition-colors appearance-none">
          <option>AI Engineering</option>
          <option>AI Architecture</option>
          <option>Workflow Automation</option>
          <option>AI Product Development</option>
          <option>Technical Leadership</option>
          <option>Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-foreground text-sm font-medium">Message</label>
        <textarea
          rows={7}
          placeholder="Tell me about your project, challenge, or opportunity."
          className="bg-surface border border-border text-foreground placeholder:text-muted px-[18px] py-[18px] rounded-[14px] font-sans focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      <button type="submit" className="btn-primary self-start mt-2">
        Send Message
      </button>
    </form>
  )
}
