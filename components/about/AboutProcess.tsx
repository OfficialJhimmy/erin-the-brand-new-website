'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowDown, Boxes, Code2, Search, Users, type LucideIcon } from 'lucide-react'

type Accent = 'blue' | 'emerald' | 'violet' | 'amber'

const ACCENTS: Record<Accent, { text: string; bg: string; line: string }> = {
  blue: { text: 'text-accent', bg: 'bg-accent/10', line: '#FF8906' },
  emerald: { text: 'text-emerald-600', bg: 'bg-emerald-50', line: '#10B981' },
  violet: { text: 'text-violet-600', bg: 'bg-violet-50', line: '#8B5CF6' },
  amber: { text: 'text-amber-600', bg: 'bg-amber-50', line: '#D97706' },
}

interface Stage {
  number: string
  title: string
  description: string
  icon: LucideIcon
  accent: Accent
}

const STAGES: Stage[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understand business goals, workflows, stakeholders, and constraints.',
    icon: Search,
    accent: 'blue',
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'Design systems, data flows, automation logic, and implementation strategy.',
    icon: Boxes,
    accent: 'emerald',
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Build scalable, production-ready AI solutions.',
    icon: Code2,
    accent: 'violet',
  },
  {
    number: '04',
    title: 'Adoption',
    description: 'Ensure teams can successfully integrate AI into day-to-day operations.',
    icon: Users,
    accent: 'amber',
  },
]

export default function AboutProcess() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.4 })

  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 0.8', 'end 0.3'] })
  const fillWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: 'radial-gradient(circle at 80% 0%, rgba(139,92,246,0.05), transparent 55%), #FAF9FD' }}
    >
      <div className="container relative">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="section-label">How I Work</span>
          <h2>My Approach To AI Projects</h2>
          <p className="max-w-[55ch] text-[1.05rem]">
            Every project follows the same path, whether it&apos;s a two-week build or a
            multi-month engagement. Here&apos;s the journey from first conversation to a system
            people actually use.
          </p>
        </motion.div>

        {/* Desktop: horizontal connected journey */}
        <div ref={trackRef} className="relative mt-16 hidden lg:block">
          {/* Scroll-tied progress line, the mechanic carrying this section, same
              technique as the Philosophy spine, just horizontal here */}
          <div className="absolute left-0 right-0 top-[26px] h-px bg-border" aria-hidden="true" />
          <motion.div
            style={{ width: fillWidth }}
            className="absolute left-0 top-[26px] h-px bg-accent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-6">
            {STAGES.map((stage, i) => {
              const colors = ACCENTS[stage.accent]
              const Icon = stage.icon
              return (
                <div key={stage.number} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <span className={`relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-border bg-[#FAF9FD] ${colors.text}`}>
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="mt-5 block font-mono text-xs font-bold text-muted">{stage.number}</span>
                    <h3 className="!mb-2 !mt-1 !text-xl">{stage.title}</h3>
                    <p className="max-w-[28ch] text-sm">{stage.description}</p>
                  </motion.div>

                  {i < STAGES.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0.25 }}
                      whileInView={{ opacity: [0.25, 1, 0.25] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + i * 0.35, repeat: Infinity, repeatDelay: 2.5 }}
                      className="absolute -right-3 top-[18px] z-10"
                    >
                      <ArrowRight className="h-4 w-4" style={{ color: colors.line }} />
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile/tablet: vertical stack */}
        <div className="mt-12 flex flex-col lg:hidden">
          {STAGES.map((stage, i) => {
            const colors = ACCENTS[stage.accent]
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-start gap-4">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${colors.bg} ${colors.text}`}>
                    <Icon className="h-[1.125rem] w-[1.125rem]" />
                  </span>
                  <div className="pb-2">
                    <span className="font-mono text-xs font-bold text-muted">{stage.number}</span>
                    <h3 className="!mb-1.5 !mt-0.5 !text-xl">{stage.title}</h3>
                    <p className="max-w-none text-sm">{stage.description}</p>
                  </div>
                </div>
                {i < STAGES.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="h-4 w-4 text-muted" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}