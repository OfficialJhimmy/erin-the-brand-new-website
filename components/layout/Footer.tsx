'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ArrowUp, Boxes, Globe, Mail, MapPin, type LucideIcon } from 'lucide-react'

// lucide-react dropped brand glyphs (GitHub/LinkedIn/X) in this version, so
// these render as text monograms instead of a generic icon pretending to be
// a specific brand mark.
const SOCIALS: { label: string; href: string; mark: string | LucideIcon }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/feyijimierinle', mark: 'in' },
  { label: 'GitHub', href: 'https://github.com/', mark: 'gh' },
  { label: 'X', href: 'https://x.com/erinthebrand', mark: 'x' },
  { label: 'Email', href: 'mailto:erinlejhimmy@gmail.com', mark: Mail },
]

// href present -> renders as a real link with an arrow. href absent -> renders
// as plain text. There's no dedicated page or section anchor behind every
// item in the original design, and a styled-but-dead link is worse than an
// honest label.
const NAV_COLUMNS: { title: string; items: { label: string; href?: string }[] }[] = [
  {
    title: 'Explore',
    items: [
      { label: 'Projects', href: '/projects' },
      { label: 'Architecture', href: '/architecture' },
      { label: 'Insights', href: '/insights' },
    ],
  },
  {
    title: 'Services',
    items: [
      { label: 'AI Advisory' },
      { label: 'AI Products' },
      { label: 'Automation' },
      { label: 'Architecture' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Research Notes', href: '/insights' },
      { label: 'Frameworks' },
      { label: 'Tech Stack' },
      { label: 'Tools & Systems' },
    ],
  },
]

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      data-nav-theme="dark"
      ref={ref}
      className="relative overflow-hidden pt-24"
      style={{ background: 'linear-gradient(180deg, #181B22 0%, #11131A 100%)' }}
    >
      {/* One soft, static glow — no motion, just depth behind the statement */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent/[0.08] blur-[140px]"
        aria-hidden="true"
      />

      <div className="container relative">
        {/* The statement — the one thing this footer should be remembered for */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl border-b border-white/[0.08] pb-16"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-accent">
            {'> '}System Footer
          </span>

          <h2 className="!mb-7 !mt-4 font-heading text-[clamp(2.75rem,6vw,4.75rem)] font-bold uppercase leading-[0.97] tracking-[-0.02em] text-zinc-100">
            {['Architecting', 'Intelligent', 'Systems.'].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`block ${i === 2 ? 'text-accent' : ''}`}
              >
                {line}
              </motion.span>
            ))}
          </h2>

          <p className="max-w-[48ch] text-[1.05rem] leading-relaxed text-white/70">
            I help organizations design, build, and scale AI systems that solve real business
            problems and create measurable impact.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-3 rounded-[16px] border border-white/[0.08] px-5 py-3.5">
              <motion.span
                animate={{ opacity: [1, 0.4, 1], scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="h-2 w-2 shrink-0 rounded-full bg-green-500"
              />
              <span className="font-mono text-xs font-bold uppercase tracking-[.05em] text-zinc-100">
                Available for New Engagements
              </span>
            </div>

            <div className="inline-flex items-center gap-2.5 rounded-[16px] border border-white/[0.08] px-5 py-3.5">
              <span className="font-mono text-xs text-white/60">
                <span className="text-accent">{'> '}</span>building systems that create impact
                <span
                  className="inline-block w-[2px] animate-pulse bg-white/60"
                  style={{ height: '0.9em', marginLeft: 2, verticalAlign: 'text-bottom' }}
                />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Footer navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-10 border-b border-white/[0.08] py-14 sm:grid-cols-2 lg:grid-cols-5"
        >
          {/* Profile */}
          <div>
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.03]">
              <Boxes className="h-4 w-4 text-accent" />
            </div>
            <p className="!mb-0.5 font-semibold text-zinc-100">Feyijimi Erinle</p>
            <p className="text-sm text-white/60">Lead AI Engineer &amp; AI Systems Architect</p>

            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.08] text-white/60 transition-all duration-300 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_16px_rgba(255,137,6,0.25)]"
                >
                  {typeof social.mark === 'string' ? (
                    <span className="text-[11px] font-bold uppercase">{social.mark}</span>
                  ) : (
                    <social.mark className="h-4 w-4" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {NAV_COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-mono text-xs font-bold uppercase tracking-[.12em] text-zinc-100">
                  {col.title}
                </span>
              </div>
              <ul className="space-y-3">
                {col.items.map((item) =>
                  item.href ? (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {item.label}
                        <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ) : (
                    <li key={item.label} className="text-sm text-white/40">
                      {item.label}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}

          {/* Connect */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-xs font-bold uppercase tracking-[.12em] text-zinc-100">Connect</span>
            </div>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <a href="mailto:erinlejhimmy@gmail.com" className="transition-colors hover:text-white">
                  erinlejhimmy@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                Lagos, Nigeria (WAT)
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                Remote Worldwide
              </li>
              <li className="pl-[26px] text-white/40">Usually replies within 24h</li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-5 py-8 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Feyijimi Erinle. All rights reserved.</p>

          <span className="inline-flex items-center gap-1.5 rounded-md border border-green-500/20 px-3 py-1.5 font-mono text-xs text-green-400">
            [<span>LAST UPDATED: {lastUpdated.toUpperCase()}</span>]
          </span>

          <p className="hidden items-center gap-2 lg:flex">
            <span>Lead AI Engineer</span>
            <span className="text-white/20">•</span>
            <span>AI Systems Architect</span>
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        whileHover={{ y: -4 }}
        className="group fixed bottom-8 right-8 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#1C1F27] text-zinc-100 shadow-lg transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(255,137,6,0.35)]"
      >
        <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-[10deg]" />
      </motion.button>
    </footer>
  )
}