'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Boxes, Database, Network, TrendingUp, Workflow, type LucideIcon } from 'lucide-react'

type Accent = 'blue' | 'violet' | 'emerald' | 'amber'

const ACCENTS: Record<Accent, { bg: string; text: string; ring: string }> = {
  blue: { bg: 'bg-accent', text: 'text-accent', ring: 'ring-accent/20' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-600', ring: 'ring-violet-200' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', ring: 'ring-emerald-200' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', ring: 'ring-amber-200' },
}

interface Area {
  title: string
  description: string
  icon: LucideIcon
  accent: Accent
  featured?: boolean
}

// Matches the same real focus areas already established elsewhere on this
// site (the homepage services section and the "Today's Focus" sticky note
// in the journey notebook) — not a fresh, unrelated list.
const AREAS: Area[] = [
  {
    title: 'AI Agents',
    description: 'Autonomous systems that reason, plan, and execute complex, multi-step workflows on their own.',
    icon: Bot,
    accent: 'blue',
    featured: true,
  },
  {
    title: 'Decision Intelligence',
    description: 'Multi-agent systems that support research, analysis, and strategic decision-making at scale.',
    icon: TrendingUp,
    accent: 'violet',
    featured: true,
  },
  {
    title: 'Workflow Automation',
    description: 'Automation platforms that reduce manual effort and accelerate day-to-day operations.',
    icon: Workflow,
    accent: 'emerald',
  },
  {
    title: 'Enterprise Knowledge Systems',
    description: 'AI-powered platforms built on top of organizational data and institutional expertise.',
    icon: Database,
    accent: 'amber',
  },
  {
    title: 'AI Solution Architecture',
    description: 'Designing the systems, data flows, and infrastructure that make AI initiatives production-ready.',
    icon: Boxes,
    accent: 'blue',
  },
  {
    title: 'Multi-Agent Systems',
    description: 'Coordinating specialized agents toward a single, reliable outcome.',
    icon: Network,
    accent: 'violet',
  },
]

function AreaCard({ area, index }: { area: Area; index: number }) {
  const colors = ACCENTS[area.accent]
  const Icon = area.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-border bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_44px_rgba(0,0,0,0.08)] ${
        area.featured ? 'sm:col-span-2 sm:row-span-2' : ''
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-[0.06] transition-transform duration-500 group-hover:scale-125 ${colors.bg}`}
        aria-hidden="true"
      />

      <div className="relative">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${colors.bg}`}>
          <Icon className="h-5 w-5 text-white" />
        </span>
        <h3 className={`!mb-2.5 !mt-5 ${area.featured ? '!text-2xl' : '!text-lg'}`}>{area.title}</h3>
        <p className={`max-w-[40ch] ${area.featured ? 'text-[0.95rem]' : 'text-sm'}`}>{area.description}</p>
      </div>
    </motion.div>
  )
}

export default function AboutSpecialization() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="relative py-24"
      style={{ background: 'radial-gradient(circle at 75% 10%, rgba(20,184,166,0.05), transparent 50%), #F7FBFA' }}
    >
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="section-label">Areas of Specialization</span>
          <h2>Where I Focus</h2>
          <p className="max-w-[55ch] text-[1.05rem]">
            Six areas I keep coming back to, each one a real capability I&apos;ve built and
            shipped, not a buzzword on a slide.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((area, i) => (
            <AreaCard key={area.title} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}