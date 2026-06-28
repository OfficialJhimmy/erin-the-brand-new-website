'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Shield, Target, Zap, type LucideIcon } from 'lucide-react'

const TRUST_ITEMS: { icon: LucideIcon; title: string; subtitle: string }[] = [
  { icon: Zap, title: 'Fast Response', subtitle: 'Usually within 24 hours' },
  { icon: Shield, title: 'Clear & Transparent', subtitle: 'No jargon, no fluff' },
  { icon: Target, title: 'Outcome Focused', subtitle: 'Impact over output' },
]

const ENGAGEMENT_OPTIONS: { number: string; title: string; description: string; href: string }[] = [
  {
    number: '01',
    title: 'Book Discovery Call',
    description: 'A focused 30-minute call to explore your goals and how I can help.',
    href: '#contact-form',
  },
  {
    number: '02',
    title: 'Discuss AI Strategy',
    description: 'Deep dive into architecture, roadmaps, and technical decisions.',
    href: '#contact-form',
  },
  {
    number: '03',
    title: 'Explore Partnership',
    description: 'For long-term collaboration and ongoing AI leadership support.',
    href: '#contact-form',
  },
  {
    number: '04',
    title: 'Download Resume',
    description: 'View my experience, projects, and credentials.',
    href: '/resume',
  },
]

function TypedPrompt({ start }: { start: boolean }) {
  const fullText = 'Select an engagement path'
  const [length, setLength] = useState(0)

  useEffect(() => {
    if (!start) return
    const interval = setInterval(() => {
      setLength((l) => {
        if (l >= fullText.length) {
          clearInterval(interval)
          return l
        }
        return l + 1
      })
    }, 35)
    return () => clearInterval(interval)
  }, [start, fullText.length])

  return (
    <span className="font-mono text-base font-semibold text-foreground sm:text-lg">
      <span className="text-accent">{'> '}</span>
      {fullText.slice(0, length)}
      <span
        className="inline-block w-[2px] animate-pulse bg-foreground"
        style={{ height: '1em', marginLeft: 2, verticalAlign: 'text-bottom' }}
      />
    </span>
  )
}

function SystemWaveBackground() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden" aria-hidden="true">
      <div
        className="h-[220px] w-[140%] -translate-x-[20%]"
        style={{
          backgroundImage: 'radial-gradient(circle, #2563EB 1.2px, transparent 1.6px)',
          backgroundSize: '16px 16px',
          opacity: 0.05,
          transform: 'perspective(500px) rotateX(58deg)',
        }}
      />
    </div>
  )
}

export default function EngagementTerminal() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.15 })
  const [hoveredOption, setHoveredOption] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden pb-40 pt-20 sm:pt-28">
      <SystemWaveBackground />

      <div className="container relative">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between border-b border-border px-7 py-4 sm:px-9">
            <span className="font-mono text-sm font-semibold text-accent">
              {'> '}ENGAGEMENT TERMINAL
            </span>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            </div>
          </div>

          {/* Body — two columns, one divider, no boxes-within-boxes */}
          <div className="grid divide-y divide-border lg:grid-cols-[1fr_1.2fr] lg:divide-x lg:divide-y-0">
            {/* Left panel — Ready to Build */}
            <div className="p-7 sm:p-10 lg:pr-10">
              <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-muted">
                Ready to Build
              </span>
              <h2 className="!mb-5 !mt-3 !text-3xl leading-tight sm:!text-4xl">
                Let&apos;s Turn AI Ambition <br />
                <span className="">
                  Into Real-World Impact.
                </span>
              </h2>
              <p className="max-w-none text-[0.95rem]">
                Choose how you&apos;d like to engage. Each path is designed to help us start the
                right conversation and move efficiently toward meaningful outcomes.
              </p>

              {/* Trust items: icon + text, no boxes */}
              <div className="mt-9 flex flex-col gap-5">
                {TRUST_ITEMS.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-center gap-3.5">
                      <Icon className="h-4 w-4 shrink-0 text-muted" />
                      <p className="text-sm">
                        <span className="font-semibold text-foreground">{item.title}</span>
                        <span className="text-muted"> — {item.subtitle}</span>
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Availability — the one block on the left that earns its own container */}
              <div className="mt-9 rounded-[16px] bg-surface p-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-[.05em] text-green-600">
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1], scale: [1, 1.15, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-2 w-2 rounded-full bg-green-500"
                  />
                  AVAILABLE FOR NEW ENGAGEMENTS
                </div>

                <div className="mt-4 space-y-1.5 font-mono text-xs text-muted">
                  <p>
                    <span className="text-accent">{'> '}</span>Location:{' '}
                    <span className="text-foreground">Remote Worldwide</span>
                  </p>
                  <p>
                    <span className="text-accent">{'> '}</span>Timezone:{' '}
                    <span className="text-foreground">WAT (Nigeria)</span>
                  </p>
                </div>
              </div>

              <p className="mt-7 font-mono text-xs text-muted">
                // Serious about building something extraordinary? Let&apos;s talk.
              </p>
            </div>

            {/* Right panel — engagement_options.exe (the only other column now) */}
            <div className="p-7 sm:p-10">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm font-semibold text-foreground">engagement_options.exe</span>
                <span className="font-mono text-xs text-muted">v2.5.0</span>
              </div>

              <div className="mt-6">
                <TypedPrompt start={inView} />
                <p className="mt-1.5 text-sm text-muted">Choose an option below to get started.</p>
              </div>

              <div className="mt-6 flex flex-col gap-3.5">
                {ENGAGEMENT_OPTIONS.map((option, i) => {
                  const isHovered = hoveredOption === i
                  return (
                    <motion.a
                      key={option.title}
                      href={option.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={inView ? { opacity: 1, y: isHovered ? -4 : 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      onMouseEnter={() => setHoveredOption(i)}
                      onMouseLeave={() => setHoveredOption(null)}
                      className={`flex items-center gap-4 rounded-[14px] border p-5 transition-colors duration-300 ${
                        isHovered ? 'border-accent bg-blue-50/40' : 'border-border'
                      }`}
                    >
                      <span className="font-mono text-2xl font-bold text-black">{option.number}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block !text-base font-semibold text-foreground">{option.title}</span>
                        <span className="mt-0.5 block max-w-none text-sm text-muted">{option.description}</span>
                      </span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] transition-all duration-300 ${
                          isHovered ? 'bg-accent text-white' : 'bg-surface text-muted'
                        }`}
                      >
                        <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-0.5' : ''}`} />
                      </span>
                    </motion.a>
                  )
                })}
              </div>

              {/* "Book Call Now" lived in the panel you removed — it's folded in here
                  as a direct shortcut rather than dropped, since option 01 above is
                  more of an "explore" framing while this is the no-friction version. */}
              <a
                href="#contact-form"
                className="mt-5 justify-center w-full inline-flex items-center gap-2 px-6 py-3.5 rounded-[14px] bg-gradient-to-r from-orange-400 to-yellow-400 text-black text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}