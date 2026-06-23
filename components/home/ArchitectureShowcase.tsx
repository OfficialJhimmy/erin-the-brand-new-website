'use client'

import Link from 'next/link'
import { useRef, type ReactElement } from 'react'
import { motion, useInView } from 'framer-motion'

/* ═══════════════════════════════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════════════════════════════ */

const IconDatabase = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
)

const IconBolt = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const IconNetwork = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
  </svg>
)

const IconGrid = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
  </svg>
)

const IconExpand = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
)

const IconTrending = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
  </svg>
)

const IconTarget = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
)

const IconShield = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

/* ═══════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════ */

const architectures = [
  {
    num: '01',
    name: 'Kora',
    subtitle: 'Enterprise Knowledge & Onboarding Platform',
    tags: ['Knowledge Retrieval', 'Vector Search', 'Enterprise RAG', 'Employee Enablement'],
    Icon: IconDatabase,
  },
  {
    num: '02',
    name: 'Quill',
    subtitle: 'AI-Powered SOW Generation Platform',
    tags: ['Document Intelligence', 'Workflow Automation', 'Generation Pipelines', 'Review Systems'],
    Icon: IconBolt,
  },
  {
    num: '03',
    name: 'Atlas',
    subtitle: 'Multi-Agent Research & Decision Intelligence',
    tags: ['Agent Orchestration', 'Research Automation', 'Decision Support', 'Intelligence Workflows'],
    Icon: IconNetwork,
  },
]

const principles = [
  { Icon: IconGrid,     title: 'Systems First',      desc: 'Every solution starts with a strong architecture.'          },
  { Icon: IconExpand,   title: 'Operational Fit',    desc: 'Designed around real workflows and constraints.'            },
  { Icon: IconTrending, title: 'Built to Scale',     desc: 'Architectures that grow with your organization.'            },
  { Icon: IconTarget,   title: 'Measurable Impact',  desc: 'Focused on outcomes that drive real value.'                 },
]

/* ═══════════════════════════════════════════════════════════════════════
   BACKGROUND — subtle dot grid + blue accent square (top-right)
═══════════════════════════════════════════════════════════════════════ */

function BackgroundGrid() {
  const dots: React.ReactNode[] = []
  for (let col = 0; col < 12; col++) {
    for (let row = 0; row < 10; row++) {
      dots.push(
        <circle
          key={`${col}-${row}`}
          cx={col * 28 + 14}
          cy={row * 28 + 14}
          r="1.5"
          fill="#2563EB"
          opacity="0.18"
        />
      )
    }
  }
  return (
    <div className="absolute top-0 right-0 w-[340px] h-[280px] overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <svg width="340" height="280" xmlns="http://www.w3.org/2000/svg">
        {dots}
        {/* Single blue accent square */}
        <rect x="290" y="112" width="10" height="10" rx="1" fill="#2563EB" />
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   ARCHITECTURE CARD
═══════════════════════════════════════════════════════════════════════ */

function ArchCard({
  num, name, subtitle, tags, Icon, index, isLast,
}: {
  num: string; name: string; subtitle: string; tags: string[]
  Icon: ({ size }: { size?: number }) => ReactElement
  index: number; isLast: boolean
}) {
  return (
    <motion.div
      className="relative bg-white rounded-[18px] border border-[#EAEAEA] overflow-hidden flex flex-col"
      style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
    >
      {/* Card body */}
      <div className="flex-1 p-7">

        {/* Top row — number + icon */}
        <div className="flex items-start justify-between mb-6">
          <span className="text-[0.72rem] font-semibold text-[#ADADAD] tracking-[0.12em]">
            {num}
          </span>
          <div className="w-10 h-10 rounded-xl bg-[#EEF3FF] text-accent flex items-center justify-center flex-shrink-0">
            <Icon size={20} />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-[1.6rem] font-bold text-[#0A0A0A] tracking-tight mb-2 leading-none">
          {name}
        </h3>

        {/* Subtitle */}
        <p className="text-[#525252] text-[0.83rem] leading-snug mb-4 max-w-none">
          {subtitle}
        </p>

        {/* Blue accent rule */}
        <div className="w-9 h-[2.5px] bg-accent rounded-full mb-5" />

        {/* Tags */}
        <ul className="space-y-2.5">
          {tags.map((tag) => (
            <li key={tag} className="flex items-center gap-2.5 text-[0.8rem] text-[#525252]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Full-width blue bottom bar */}
      <div className="h-[3px] bg-accent w-full" />

      {/* Inter-card connector circle — right edge of non-last cards */}
      {!isLast && (
        <div className="absolute right-0 top-[52%] translate-x-1/2 -translate-y-1/2 z-10 flex items-center">
          <div className="w-3 h-3 rounded-full bg-accent ring-[3px] ring-[#EEF3FF]" />
        </div>
      )}
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════════════════════ */

export default function ArchitectureShowcase() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const ease   = 'easeOut' as const

  return (
    <section ref={ref} className="relative py-[120px] bg-white overflow-hidden">
      <BackgroundGrid />

      <div className="container relative z-10">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <motion.div
          className="flex items-center gap-2 mb-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.18em]">
            Architecture
          </span>
        </motion.div>

        <motion.h2
          className="!mb-5 text-[#0A0A0A] leading-[1.08]"
          style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.06, ease }}
        >
          Systems Thinking
          <br />Before Implementation
        </motion.h2>

        <motion.p
          className="text-[#525252] text-[0.975rem] leading-relaxed max-w-[52ch] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.14, ease }}
        >
          Every successful AI initiative begins with architecture.
          <br />
          My focus is designing systems that fit operational realities,
          <br />
          scale effectively, and deliver measurable value.
        </motion.p>

        {/* ── Cards ──────────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {architectures.map(({ num, name, subtitle, tags, Icon }, i) => (
            <ArchCard
              key={name}
              num={num}
              name={name}
              subtitle={subtitle}
              tags={tags}
              Icon={Icon}
              index={i}
              isLast={i === architectures.length - 1}
            />
          ))}
        </div>

        {/* ── Bottom bar — CTA + principles ──────────────────────────── */}
        <motion.div
          className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          {/* Left — CTA + tagline */}
          <div className="flex-shrink-0">
            <Link
              href="/architecture"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-all duration-200 hover:-translate-y-0.5 mb-4"
            >
              View Architecture Library
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="flex items-start gap-2 text-[#ADADAD]">
              <IconShield size={15} />
              <p className="text-[0.75rem] leading-snug max-w-[20ch]">
                Architecture is the foundation.
                <br />
                Implementation is the outcome.
              </p>
            </div>
          </div>

          {/* Right — 4 principles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
            {principles.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: 0.35 + i * 0.08, ease }}
              >
                <div className="w-8 h-8 rounded-lg border border-[#EAEAEA] flex items-center justify-center text-accent mb-3">
                  <Icon size={16} />
                </div>
                <p className="text-[0.82rem] font-semibold text-[#0A0A0A] mb-1 max-w-none">
                  {title}
                </p>
                <p className="text-[0.75rem] text-[#525252] leading-snug max-w-none">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
