'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Network, Server, Target, UserCheck, type LucideIcon } from 'lucide-react'

type Accent = 'blue' | 'emerald' | 'violet' | 'amber'

const ACCENTS: Record<Accent, { text: string; bg: string; hoverText: string }> = {
  blue: { text: 'text-accent', bg: 'bg-accent/10', hoverText: 'group-hover:border-current group-hover:text-accent' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-400/10', hoverText: 'group-hover:border-current group-hover:text-emerald-400' },
  violet: { text: 'text-violet-400', bg: 'bg-violet-400/10', hoverText: 'group-hover:border-current group-hover:text-violet-400' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-400/10', hoverText: 'group-hover:border-current group-hover:text-amber-400' },
}

interface Principle {
  index: string
  title: string
  description: string
  icon: LucideIcon
  accent: Accent
}

const PRINCIPLES: Principle[] = [
  {
    index: 'P.01',
    title: 'Business First',
    description: 'Every architecture decision should support a measurable business outcome.',
    icon: Target,
    accent: 'blue',
  },
  {
    index: 'P.02',
    title: 'Humans Remain In Control',
    description: 'Critical decisions should allow for human oversight and intervention.',
    icon: UserCheck,
    accent: 'emerald',
  },
  {
    index: 'P.03',
    title: 'AI Is A System',
    description:
      'Models are only one component. Reliable AI requires orchestration, data, workflows, evaluation, and governance.',
    icon: Network,
    accent: 'violet',
  },
  {
    index: 'P.04',
    title: 'Production Over Prototype',
    description: 'Architectures should be designed for long-term operation, not demos.',
    icon: Server,
    accent: 'amber',
  },
]

function PrincipleCard({ principle, index }: { principle: Principle; index: number }) {
  const accent = ACCENTS[principle.accent]
  const Icon = principle.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative rounded-[4px] p-7"
      style={{ transition: 'box-shadow 0.3s' }}
    >
      {/* Blueprint corner brackets — quiet by default, brighten and extend on hover */}
      {[
        'left-0 top-0 border-l border-t',
        'right-0 top-0 border-r border-t',
        'left-0 bottom-0 border-l border-b',
        'right-0 bottom-0 border-r border-b',
      ].map((pos, i) => (
        <span
          key={i}
          className={`absolute h-4 w-4 border-white/15 transition-all duration-300 group-hover:h-5 group-hover:w-5 ${pos} ${accent.hoverText}`}
          aria-hidden="true"
        />
      ))}

      <div
        className="absolute inset-0 rounded-[4px] border border-white/[0.08] bg-white/[0.02] transition-colors duration-300 group-hover:bg-white/[0.04]"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className={`font-mono text-xs font-bold tracking-[.1em] ${accent.text} opacity-70`}>
            {principle.index}
          </span>
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${accent.bg} transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className={`h-5 w-5 ${accent.text}`} />
          </span>
        </div>

        <h3 className="!mb-2 !mt-5 !text-xl text-white">{principle.title}</h3>
        <p className="max-w-none text-sm leading-relaxed text-white/55">{principle.description}</p>
      </div>
    </motion.div>
  )
}

export default function ArchitecturePrinciples() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} data-nav-theme="dark" className="relative overflow-hidden py-24" style={{ background: '#0B0E14' }}>
      {/* Blueprint grid — larger spacing and a blue tint, distinct from the
          dot-grid texture used on every light section elsewhere on the site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />

      {/* A single scan line that sweeps down once when the section enters view —
          a small, deliberate "engineered" moment rather than constant motion */}
      <motion.div
        initial={{ top: '-10%', opacity: 0 }}
        animate={inView ? { top: '110%', opacity: [0, 0.6, 0.6, 0] } : {}}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.8), transparent)' }}
        aria-hidden="true"
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-accent">Philosophy</span>
            <h2 className="!mb-0 !mt-3 text-white">My Architecture Principles</h2>
          </div>
          <span className="font-mono text-xs text-white/30">Blueprint — 4 Principles</span>
        </motion.div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[4px] border border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((principle, i) => (
            <PrincipleCard key={principle.index} principle={principle} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}