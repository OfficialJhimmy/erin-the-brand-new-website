'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  ArrowUpRight,
  Boxes,
  Brain,
  ChevronDown,
  Database,
  Feather,
  Layers,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

type Color = 'blue' | 'green' | 'violet'

const COLOR_MAP: Record<Color, { bg: string; text: string; border: string; label: string }> = {
  blue: { bg: 'bg-accent', text: 'text-accent', border: 'border-accent/30', label: 'text-accent' },
  green: { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-500/30', label: 'text-green-600' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-600', border: 'border-violet-500/30', label: 'text-violet-600' },
}

const PROOF_METRICS: { value: string; label: string; icon: LucideIcon }[] = [
  { value: '3', label: 'AI Systems Built & Deployed', icon: Boxes },
  { value: 'Enterprise', label: 'Grade Solutions', icon: Users },
  { value: 'Impact', label: 'Driven Outcomes', icon: Target },
]

// Reveal order matches the brief's "system discovery" sequence: Kora, then
// Quill, then Atlas — independent of their visual position in the layout.
const SYSTEMS: {
  id: string
  badge: string
  title: string
  description: string
  icon: LucideIcon
  color: Color
  revealDelay: number
}[] = [
  {
    id: 'kora',
    badge: 'ENTERPRISE KNOWLEDGE SYSTEM',
    title: 'Kora',
    description: 'Internal knowledge base that centralizes information, enhances discovery, and preserves institutional memory.',
    icon: Database,
    color: 'green',
    revealDelay: 0.2,
  },
  {
    id: 'quill',
    badge: 'DOCUMENT INTELLIGENCE',
    title: 'Quill',
    description: 'Proposal & SOW generator that turns requirements into structured, client-ready proposals in minutes.',
    icon: Feather,
    color: 'violet',
    revealDelay: 0.4,
  },
  {
    id: 'atlas',
    badge: 'MULTI-AGENT INTELLIGENCE',
    title: 'Atlas',
    description: 'Multi-agent research and decision intelligence platform that analyzes complex problems and surfaces actionable insight.',
    icon: Network,
    color: 'blue',
    revealDelay: 0.6,
  },
]

const CAPABILITIES: { label: string; icon: LucideIcon }[] = [
  { label: 'Multi-Agent Systems', icon: Brain },
  { label: 'Knowledge Retrieval', icon: Database },
  { label: 'Enterprise RAG', icon: Sparkles },
  { label: 'Workflow Automation', icon: Workflow },
  { label: 'Secure by Design', icon: ShieldCheck },
  { label: 'Decision Intelligence', icon: TrendingUp },
]

// One coordinate system, used identically for every piece — the card
// positions, the SVG paths, and the center node — so nothing can drift
// out of alignment the way it did when cards used corner-anchoring
// classes while the paths used separately hand-picked coordinates.
// Canvas: 440 x 620. Card height is sized for the worst case (a two-line
// badge + a three-line description) so real content never gets clipped,
// with line-clamp-3 only as a safety cap if copy gets longer later.
const CANVAS_W = 440
const CANVAS_H = 620
const CARD_W = 200
const CARD_H = 210

const LAYOUT = {
  atlas: { x: CANVAS_W - CARD_W, y: 0 },
  kora: { x: 0, y: CANVAS_H - CARD_H },
  quill: { x: CANVAS_W - CARD_W, y: CANVAS_H - CARD_H },
  core: { x: (CANVAS_W - 110) / 2, y: (CANVAS_H - 110) / 2 - 10, size: 110 },
}

function connectionPoint(node: 'atlas' | 'kora' | 'quill', edge: 'bottom' | 'top') {
  const pos = LAYOUT[node]
  return edge === 'bottom' ? { x: pos.x + CARD_W / 2, y: pos.y + CARD_H } : { x: pos.x + CARD_W / 2, y: pos.y }
}

function EcosystemVisual() {
  const atlasPoint = connectionPoint('atlas', 'bottom')
  const koraPoint = connectionPoint('kora', 'top')
  const quillPoint = connectionPoint('quill', 'top')
  const coreCenter = { x: LAYOUT.core.x + LAYOUT.core.size / 2, y: LAYOUT.core.y + LAYOUT.core.size / 2 }

  return (
    <div
      className="relative mx-auto hidden w-full max-w-[440px] lg:block"
      style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
    >
      {/* Slow orbital rings, decorative only, centered on the core */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div
          className="animate-[spin_45s_linear_infinite] rounded-full border border-border"
          style={{ width: '76%', height: '76%' }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div
          className="animate-[spin_60s_linear_infinite_reverse] rounded-full border border-dashed border-border"
          style={{ width: '96%', height: '96%' }}
        />
      </div>

      {/* Connections — routed through open space between the cards, not behind them */}
      <svg viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          id="path-kora-atlas"
          d={`M${koraPoint.x},${koraPoint.y} C${koraPoint.x},${coreCenter.y} ${atlasPoint.x},${coreCenter.y} ${atlasPoint.x},${atlasPoint.y}`}
          fill="none"
          stroke="#22C55E"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />
        <path
          id="path-atlas-quill"
          d={`M${atlasPoint.x},${atlasPoint.y} C${atlasPoint.x},${(atlasPoint.y + quillPoint.y) / 2} ${quillPoint.x},${(atlasPoint.y + quillPoint.y) / 2} ${quillPoint.x},${quillPoint.y}`}
          fill="none"
          stroke="#FF8906"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />
        <path
          id="path-kora-quill"
          d={`M${koraPoint.x},${koraPoint.y} Q${coreCenter.x},${koraPoint.y - 70} ${quillPoint.x},${quillPoint.y}`}
          fill="none"
          stroke="#8B5CF6"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />

        <circle r="3.5" fill="#22C55E">
          <animateMotion dur="4s" repeatCount="indefinite" begin="0s">
            <mpath href="#path-kora-atlas" />
          </animateMotion>
        </circle>
        <circle r="3.5" fill="#FF8906">
          <animateMotion dur="4s" repeatCount="indefinite" begin="1.3s">
            <mpath href="#path-atlas-quill" />
          </animateMotion>
        </circle>
        <circle r="3.5" fill="#8B5CF6">
          <animateMotion dur="4s" repeatCount="indefinite" begin="2.6s">
            <mpath href="#path-kora-quill" />
          </animateMotion>
        </circle>
      </svg>

      {/* Labels — positioned in the same open gap the paths run through, well clear of every card */}
      <span
        className="absolute -translate-x-1/2 whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[.08em] text-green-600"
        style={{ left: `${(koraPoint.x / CANVAS_W) * 100}%`, top: `${((koraPoint.y - 30) / CANVAS_H) * 100}%` }}
      >
        Knowledge Flow
      </span>
      <span
        className="absolute -translate-x-1/2 whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[.08em] text-accent"
        style={{ left: `${(((atlasPoint.x + quillPoint.x) / 2) / CANVAS_W) * 100}%`, top: `${(((atlasPoint.y + quillPoint.y) / 2) / CANVAS_H) * 100}%` }}
      >
        Insight Generation
      </span>
      <span
        className="absolute -translate-x-1/2 whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[.08em] text-violet-600"
        style={{ left: `${(coreCenter.x / CANVAS_W) * 100}%`, top: `${((koraPoint.y - 60) / CANVAS_H) * 100}%` }}
      >
        Output Automation
      </span>

      {/* Center node */}
      <div
        className="absolute flex flex-col items-center justify-center rounded-full border border-border bg-white/90 px-3 text-center shadow-[0_20px_60px_rgba(255,137,6,0.12)] backdrop-blur"
        style={{
          left: `${(coreCenter.x / CANVAS_W) * 100}%`,
          top: `${(coreCenter.y / CANVAS_H) * 100}%`,
          width: LAYOUT.core.size,
          height: LAYOUT.core.size,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Layers className="mb-1.5 h-5 w-5 shrink-0 text-accent" />
        <p className="text-[10px] font-bold uppercase leading-tight tracking-[.04em] text-foreground">
          Intelligence
          <br />
          Ecosystem
        </p>
      </div>

      {/* Satellite system cards — height capped via line-clamp so the gaps above can't be eaten by overflow text */}
      {SYSTEMS.map((system) => {
        const colors = COLOR_MAP[system.color]
        const Icon = system.icon
        const pos = LAYOUT[system.id as 'atlas' | 'kora' | 'quill']

        return (
          <motion.div
            key={system.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.5, delay: system.revealDelay }}
            className="absolute overflow-hidden rounded-[18px] border border-border bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(255,137,6,0.12)]"
            style={{
              left: `${(pos.x / CANVAS_W) * 100}%`,
              top: `${(pos.y / CANVAS_H) * 100}%`,
              width: `${(CARD_W / CANVAS_W) * 100}%`,
              height: CARD_H,
            }}
          >
            <span className={`mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl ${colors.bg}`}>
              <Icon className="h-4 w-4 text-white" />
            </span>
            <span className={`block font-mono text-[9px] font-bold uppercase tracking-[.06em] ${colors.label}`}>
              {system.badge}
            </span>
            <h3 className="!mb-1 !mt-0.5 !text-base">{system.title}</h3>
            <p className="line-clamp-3 max-w-none text-xs leading-snug">{system.description}</p>
            <a
              href={`/projects#${system.id}`}
              className={`mt-1.5 inline-flex items-center gap-1 text-xs font-semibold ${colors.text} hover:underline`}
            >
              View System
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </motion.div>
        )
      })}
    </div>
  )
}

function EcosystemVisualCompact() {
  return (
    <div className="flex flex-col gap-4 lg:hidden">
      {SYSTEMS.map((system) => {
        const colors = COLOR_MAP[system.color]
        const Icon = system.icon
        return (
          <div key={system.id} className="rounded-[20px] border border-border bg-white p-5">
            <span className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${colors.bg}`}>
              <Icon className="h-5 w-5 text-white" />
            </span>
            <span className={`block font-mono text-[10px] font-bold uppercase tracking-[.08em] ${colors.label}`}>
              {system.badge}
            </span>
            <h3 className="!mb-1.5 !mt-1 !text-lg">{system.title}</h3>
            <p className="max-w-none text-sm leading-snug">{system.description}</p>
            <a
              href={`/projects#${system.id}`}
              className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold ${colors.text} hover:underline`}
            >
              View System
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default function ProjectsHero() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pb-20 pt-28 sm:pt-32"
      style={{
        background:
          'radial-gradient(circle at 75% 20%, rgba(255,137,6,0.08), transparent 45%), radial-gradient(circle at 25% 75%, rgba(139,92,246,0.06), transparent 45%), #FFFFFF',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#1B1B1B 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[.1em] text-accent shadow-[0_0_20px_rgba(255,137,6,0.08)]">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              AI Systems Portfolio
            </span>

            <h1 className="!mb-6 !mt-4 text-[clamp(2.5rem,5.5vw,3.5rem)] font-bold leading-[1.17] tracking-[-0.03em]">
              Building The Systems <br />
              Behind Intelligent <br />
              <span className="text-accent">
                Organizations.
              </span>
            </h1>

            <p className="max-w-[40rem] text-[1.05rem] leading-relaxed">
              A collection of AI platforms, knowledge systems, and decision intelligence products
              designed to help organizations scale expertise, automate workflows, and make better
              decisions.
            </p>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-5">
              {PROOF_METRICS.map((metric) => {
                const Icon = metric.icon
                return (
                  <div key={metric.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-border">
                      <Icon className="h-4 w-4 text-accent" />
                    </span>
                    <div>
                      <p className="!mb-0 text-base font-bold leading-tight text-foreground">{metric.value}</p>
                      <p className="max-w-[14ch] text-xs leading-tight text-muted">{metric.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-[16px] border border-green-500/20 px-5 py-3.5">
              <motion.span
                animate={{ opacity: [1, 0.4, 1], scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="h-2 w-2 shrink-0 rounded-full bg-green-500"
              />
              <span className="font-mono text-xs font-bold uppercase tracking-[.05em] text-green-600">
                Status: Available for New Engagements
              </span>
            </div>
          </motion.div>

          {/* Right: ecosystem visualization */}
          <div>
            <EcosystemVisual />
            <EcosystemVisualCompact />
          </div>
        </div>

        {/* Core capabilities bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col gap-8 rounded-[28px] border border-border bg-white/70 p-8 backdrop-blur sm:flex-row sm:items-center"
        >
          <span className="shrink-0 font-mono text-xs font-bold uppercase leading-tight tracking-[.1em] text-muted">
            Core <br className="hidden sm:block" /> Capabilities
          </span>

          <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon
              return (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-2.5"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">{cap.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <ChevronDown className="h-5 w-5 animate-bounce text-muted" />
        </div>
      </div>
    </section>
  )
}