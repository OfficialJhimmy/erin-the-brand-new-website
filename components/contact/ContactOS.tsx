'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Calendar, Globe, Mail, MapPin, type LucideIcon } from 'lucide-react'

// No real cal.com link exists yet — this is a clearly-marked placeholder,
// not a fabricated working URL. Swap in the real one when available.
const CAL_LINK = 'https://cal.com/your-username'

// LinkedIn has no real mark in lucide-react (same limitation as the
// Footer), so it gets a text monogram instead of a borrowed generic icon.
const CONTACT_ROWS: { label: string; value: string; href: string; mark: LucideIcon | string; external?: boolean; primary?: boolean }[] = [
  { label: 'Book a Call', value: 'cal.com/your-username', href: CAL_LINK, mark: Calendar, external: true, primary: true },
  { label: 'Email', value: 'info@erinhq.com', href: 'mailto:info@erinhq.com', mark: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/feyijimierinle', href: 'https://www.linkedin.com/in/feyijimierinle', mark: 'in', external: true },
  { label: 'Website', value: 'erinhq.com', href: 'https://erinhq.com', mark: Globe, external: true },
]

export default function ContactOS() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative bg-white pb-20 pt-28 sm:pt-32">
      <div className="container relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label">Get In Touch</span>
          <h1 className="!mb-4 !mt-3 !text-[clamp(2.25rem,5vw,3.25rem)]">Let&apos;s Talk</h1>
          <p className="mx-auto max-w-[46ch] text-[1.05rem] leading-relaxed">
            Pick whichever way works best for you. I usually reply within a day.
          </p>
        </motion.div>

        {/* OS-style window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        >
          {/* Title bar */}
          <div className="flex items-center gap-3 border-b border-border bg-surface px-5 py-3.5">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <span className="mx-auto font-mono text-xs text-muted">contact — ERIN</span>
          </div>

          <div className="grid sm:grid-cols-[200px_1fr]">
            {/* Sidebar */}
            <div className="flex flex-col gap-5 border-b border-border p-6 sm:border-b-0 sm:border-r">
              <div>
                <p className="!mb-0 text-sm font-bold text-foreground">Feyijimi Erinle</p>
                <p className="text-xs text-muted">Lead AI Engineer</p>
              </div>

              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"
                />
                <span className="text-xs font-semibold text-green-700">Available</span>
              </div>

              <div className="flex items-start gap-2 text-xs text-muted">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                Lagos, Nigeria (WAT)
              </div>

              <p className="text-xs text-muted">Usually replies within 24h.</p>
            </div>

            {/* Contact list */}
            <div className="divide-y divide-border">
              {CONTACT_ROWS.map((row) => {
                return (
                  <a
                    key={row.label}
                    href={row.href}
                    target={row.external ? '_blank' : undefined}
                    rel={row.external ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-4 px-6 py-4 transition-colors duration-200 hover:bg-surface ${
                      row.primary ? 'bg-surface/60' : ''
                    }`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-white">
                      {typeof row.mark === 'string' ? (
                        <span className="text-xs font-bold text-accent">{row.mark}</span>
                      ) : (
                        <row.mark className="h-4 w-4 text-accent" />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-foreground">{row.label}</span>
                      <span className="block truncate text-xs text-muted">{row.value}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}