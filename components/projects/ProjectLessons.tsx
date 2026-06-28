'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, BrainCircuit, Database, Quote, Sparkles, Users, type LucideIcon } from 'lucide-react'

type TagColor = 'green' | 'violet' | 'blue' | 'emerald'

const TAG_COLORS: Record<TagColor, { text: string; bg: string }> = {
  green: { text: 'text-green-600', bg: 'bg-green-50' },
  violet: { text: 'text-violet-600', bg: 'bg-violet-50' },
  blue: { text: 'text-accent', bg: 'bg-accent/10' },
  emerald: { text: 'text-emerald-600', bg: 'bg-emerald-50' },
}

interface Lesson {
  number: string
  title: string
  description: string
  tag: string
  icon: LucideIcon
  color: TagColor
}

const LESSONS: Lesson[] = [
  {
    number: '01',
    title: 'Business Context Matters More Than Models',
    description:
      'The best model rarely wins. The system that deeply understands the business problem, constraints, and workflows usually delivers the most value.',
    tag: 'Learned while building Kora',
    icon: Database,
    color: 'green',
  },
  {
    number: '02',
    title: 'AI Adoption Is As Important As Accuracy',
    description:
      "A highly accurate system nobody uses creates less value than a simpler system that's embedded into daily workflows people love.",
    tag: 'Learned while building Quill',
    icon: BrainCircuit,
    color: 'violet',
  },
  {
    number: '03',
    title: 'Architecture Determines Long-Term Success',
    description:
      'Most AI failures are architecture failures, not model failures. Design for change, scale, and observability from day one.',
    tag: 'Learned while building Atlas',
    icon: Bot,
    color: 'blue',
  },
  {
    number: '04',
    title: 'Human Oversight Creates Better Outcomes',
    description:
      "The strongest AI systems combine automation with human judgment. AI augments people — it doesn't replace them.",
    tag: 'Learned across all systems',
    icon: Users,
    color: 'emerald',
  },
]

export default function ProjectLessons() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const lineRef = useRef<HTMLDivElement>(null)
  const lineInView = useInView(lineRef, { once: true, amount: 0.05 })

  return (
    <section ref={ref} className="relative py-24" style={{ background: '#FCFCFD' }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#0A0A0A 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-[860px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="section-label">Lessons Learned</span>
          <h2>What Building AI Systems Has Taught Me</h2>
          <p className="mx-auto max-w-[55ch] text-[1.05rem]">
            Principles shaped by years of designing and shipping AI systems that solve real
            business problems.
          </p>
        </motion.div>

        <div ref={lineRef} className="relative mt-16">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={lineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-[27px] top-3 bottom-3 w-px bg-border"
            aria-hidden="true"
          />

          {LESSONS.map((lesson, i) => {
            const colors = TAG_COLORS[lesson.color]
            const Icon = lesson.icon
            return (
              <motion.div
                key={lesson.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`group relative py-9 pl-14 ${i < LESSONS.length - 1 ? 'border-b border-border' : ''}`}
              >
                <span
                  className="pointer-events-none absolute -left-3 -top-3 select-none font-heading text-[clamp(4.5rem,9vw,7rem)] font-bold leading-none text-foreground opacity-[0.05]"
                  aria-hidden="true"
                >
                  {lesson.number}
                </span>

                <span className="absolute left-5 top-10 h-3.5 w-3.5 rounded-full border-2 border-border bg-white transition-colors duration-300 group-hover:border-accent" />

                <div className="relative">
                  <h3 className="!mb-2.5 !text-2xl transition-colors duration-300 group-hover:text-accent">{lesson.title}</h3>
                  <p className="max-w-[60ch] text-[0.95rem]">{lesson.description}</p>
                  <span
                    className={`mt-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-shadow duration-300 group-hover:shadow-[0_0_0_4px_rgba(0,0,0,0.03)] ${colors.bg} ${colors.text}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {lesson.tag}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col gap-8 rounded-[20px] border border-border bg-white/70 p-8 backdrop-blur sm:flex-row sm:items-center"
        >
          <div className="flex items-start gap-4 sm:flex-1">
            <Quote className="mt-1 h-6 w-6 shrink-0 text-accent" />
            <p className="max-w-[48ch] text-[1.05rem] leading-relaxed text-foreground">
              AI systems are not built with models.{' '}
              <span className="font-semibold">They are built with decisions, tradeoffs, and deep empathy for users.</span>
            </p>
          </div>

          <div className="h-px w-full bg-border sm:h-12 sm:w-px" aria-hidden="true" />

          <div className="flex items-center gap-3 sm:flex-1">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <Sparkles className="h-4 w-4 text-accent" />
            </span>
            <p className="max-w-none text-sm text-muted">
              These principles continue to guide every system I design and ship.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}