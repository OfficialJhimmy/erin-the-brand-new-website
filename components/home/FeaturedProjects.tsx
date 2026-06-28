'use client'

import { useRef, useState, useEffect, type ReactElement } from 'react'
import { motion, useInView } from 'framer-motion'

/* ═══════════════════════════════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════════════════════════════ */

const IconActivity = ({ s = 14 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)
const IconBox = ({ s = 14 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
)
const IconLayers = ({ s = 14 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
)
const IconClock = ({ s = 14 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)
const IconDatabase = ({ s = 22 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
)
const IconBolt = ({ s = 22 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)
const IconNetwork = ({ s = 22 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
  </svg>
)
const IconCube = ({ s = 26 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
)
const DragHandle = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="#CACAD0">
    {[1, 5, 9].map(cx => [1, 5].map(cy => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.1" />
    )))}
  </svg>
)

/* ═══════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════ */

const metrics = [
  { Icon: IconActivity, label: 'SYSTEM HEALTH',   value: '100%'   },
  { Icon: IconBox,      label: 'ACTIVE SYSTEMS',  value: '03'     },
  { Icon: IconLayers,   label: 'SERVICES ONLINE', value: '27'     },
  { Icon: IconClock,    label: 'UPTIME',           value: '99.98%' },
]

const projects = [
  {
    id: 'kora',
    name: 'KORA',
    subtitle: 'Enterprise Knowledge Platform',
    desc: 'Transforms organizational knowledge into intelligent onboarding experiences.',
    Icon: IconDatabase,
    tags: ['Knowledge Retrieval', 'Enterprise Search', 'Vector Search', 'RAG Pipelines'],
    coreLabel: 'Knowledge Architecture',
    variant: 'selected' as const,   // blue border
  },
  {
    id: 'quill',
    name: 'QUILL',
    subtitle: 'AI-Powered SOW Platform',
    desc: 'Generates statements of work from business requirements and documents.',
    Icon: IconBolt,
    tags: ['Document Intelligence', 'Workflow Automation', 'Generation Pipelines', 'Review Systems'],
    coreLabel: 'Document Intelligence',
    variant: 'elevated' as const,   // elevated, larger
  },
  {
    id: 'atlas',
    name: 'ATLAS',
    subtitle: 'Multi-Agent Intelligence System',
    desc: 'Advanced research and decision support through orchestrated AI agents.',
    Icon: IconNetwork,
    tags: ['Agent Orchestration', 'Research Automation', 'Decision Intelligence', 'Analytics Engine'],
    coreLabel: 'Decision Systems',
    variant: 'default' as const,
  },
]

const TERMINAL_LINES = [
  { text: '> initializing systems...', green: false },
  { text: '✓ loading KORA',            green: true  },
  { text: '✓ loading QUILL',           green: true  },
  { text: '✓ loading ATLAS',           green: true  },
  { text: '✓ all systems operational', green: true  },
  { text: '✓ ready for deployment',    green: true  },
]

/*
  SVG coordinate system:
  - viewBox 0 0 1060 560
  - 1060 = approximate desktop container width
  - 560 = windows area (24 top-pad + ~316 window height = 340) + connection zone (220px)
  - Window center-x positions (3-col, 24px padding, 16px gap, ~340px per col):
      KORA  = 24 + 170 = 194  →  round to 190
      QUILL = 24 + 340 + 16 + 170 = 550  →  530
      ATLAS = 24 + 680 + 32 + 170 = 906  →  870
  - QUILL is elevated 20px (CSS translateY -20), so its exit y is 20px less
*/
const SVG_W = 1060
const SVG_H = 560
// Exit points at window bottoms (y = top-pad + window-height)
// Core entry = center of connection zone = 340 + 110 = 450
const CONN = {
  kora:  { x: 190, y: 340 },
  quill: { x: 530, y: 320 },   // elevated 20px
  atlas: { x: 870, y: 340 },
  core:  { x: 530, y: 438 },   // entry to top of core rings
}

/* ═══════════════════════════════════════════════════════════════════════
   METRICS PANEL
═══════════════════════════════════════════════════════════════════════ */

function MetricsPanel({ triggered }: { triggered: boolean }) {
  return (
    <motion.div
      className="hidden lg:block flex-shrink-0 rounded-[16px] border border-[#E4E4E7] px-5 py-4 w-[290px]"
      style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)' }}
      initial={{ opacity: 0, y: -16 }}
      animate={triggered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
    >
      {metrics.map(({ Icon, label, value }, i) => (
        <div key={label} className={`flex items-center gap-3 py-2.5 ${i < metrics.length - 1 ? 'border-b border-[#F0F0F0]' : ''}`}>
          <span className="text-[#ADADAD] flex-shrink-0"><Icon s={13} /></span>
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#ADADAD] flex-1">{label}</span>
          <motion.span
            className="text-[0.8rem] font-bold text-[#22C55E] font-mono"
            initial={{ opacity: 0 }}
            animate={triggered ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
          >
            {value}
          </motion.span>
        </div>
      ))}
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   BLUEPRINT GRID BACKGROUND
═══════════════════════════════════════════════════════════════════════ */

function BlueprintGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bp-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#FF8906" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-grid)" opacity="0.03" />
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   PROJECT WINDOW
═══════════════════════════════════════════════════════════════════════ */

function ProjectWindow({
  project, isActive, isAnyActive, index, onEnter, onLeave,
}: {
  project: typeof projects[0]
  isActive: boolean
  isAnyActive: boolean
  index: number
  onEnter: () => void
  onLeave: () => void
}) {
  const { name, subtitle, desc, Icon, variant } = project

  const borderClass =
    variant === 'selected' ? 'border-accent' :
    variant === 'elevated' ? 'border-[#E4E4E7]' :
                             'border-[#E4E4E7]'

  const shadowStyle =
    variant === 'elevated'
      ? '0 8px 32px rgba(0,0,0,0.12)'
      : '0 2px 12px rgba(0,0,0,0.05)'

  const translateY =
    variant === 'elevated' ? (isActive ? -28 : -20) :
    isActive              ? -8 : 0

  return (
    <motion.div
      className={`relative rounded-[14px] border bg-white overflow-hidden cursor-default
        ${borderClass}
        ${isAnyActive && !isActive ? 'opacity-50' : 'opacity-100'}
      `}
      style={{ boxShadow: shadowStyle }}
      animate={{ y: translateY, scale: variant === 'elevated' ? (isActive ? 1.02 : 1) : 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: variant === 'elevated' ? -20 : 0 }}
      viewport={{ once: true, margin: '-40px' }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Traffic lights + drag handle */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#F0F0F0]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <DragHandle />
      </div>

      {/* Card body */}
      <div className="p-5">
        {/* Icon */}
        <div className="w-11 h-11 rounded-xl bg-[#EEF3FF] text-accent flex items-center justify-center mb-4">
          <Icon s={22} />
        </div>

        {/* Name */}
        <h3 className="text-[1.45rem] font-bold text-[#1B1B1B] tracking-tight leading-none mb-1.5">
          {name}
        </h3>

        {/* Subtitle */}
        <p className="text-[0.78rem] text-[#5F6675] mb-3 max-w-none leading-snug">{subtitle}</p>

        {/* Blue accent rule */}
        <div className="w-8 h-[2px] bg-accent rounded-full mb-4" />

        {/* Description */}
        <p className="text-[0.78rem] text-[#5F6675] leading-relaxed max-w-none">{desc}</p>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-[#F0F0F0]">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#ADADAD]">Status</span>
        <span className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#22C55E]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
          Production
        </span>
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   CONNECTION LINES SVG
═══════════════════════════════════════════════════════════════════════ */

function ConnectionLines({ hovered, triggered }: { hovered: string | null; triggered: boolean }) {
  // Cubic bezier: control points pull the curve down toward the core's y level
  // Bezier midpoint at t=0.5: (P0+3P1+3P2+P3)/8
  const cy = CONN.core.y - 68   // shared control-point y for KORA and ATLAS arcs

  const connections = [
    {
      id: 'kora',
      d: `M ${CONN.kora.x},${CONN.kora.y} C ${CONN.kora.x},${cy} ${CONN.core.x},${cy} ${CONN.core.x},${CONN.core.y}`,
      // Bezier midpoint x: (190+3*190+3*530+530)/8 = (190+570+1590+530)/8 = 360
      // Bezier midpoint y: (340+3*cy+3*cy+438)/8
      midX: Math.round((CONN.kora.x + 3*CONN.kora.x + 3*CONN.core.x + CONN.core.x) / 8),
      midY: Math.round((CONN.kora.y + 3*cy + 3*cy + CONN.core.y) / 8),
    },
    {
      id: 'quill',
      d: `M ${CONN.quill.x},${CONN.quill.y} L ${CONN.core.x},${CONN.core.y}`,
      midX: CONN.quill.x,
      midY: Math.round((CONN.quill.y + CONN.core.y) / 2),
    },
    {
      id: 'atlas',
      d: `M ${CONN.atlas.x},${CONN.atlas.y} C ${CONN.atlas.x},${cy} ${CONN.core.x},${cy} ${CONN.core.x},${CONN.core.y}`,
      midX: Math.round((CONN.atlas.x + 3*CONN.atlas.x + 3*CONN.core.x + CONN.core.x) / 8),
      midY: Math.round((CONN.atlas.y + 3*cy + 3*cy + CONN.core.y) / 8),
    },
  ]

  return (
    <svg
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
      aria-hidden="true"
    >
      {connections.map(({ id, d, midX, midY }) => {
        const isActive = hovered === id
        const dimmed   = hovered !== null && !isActive
        return (
          <g key={id}>
            {/* Connection path */}
            <motion.path
              d={d}
              fill="none"
              stroke={isActive ? '#FF8906' : '#BFDBFE'}
              strokeWidth={isActive ? 2 : 1.2}
              strokeDasharray={isActive ? '0' : '5 4'}
              opacity={dimmed ? 0.2 : 1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={triggered ? { pathLength: 1, opacity: dimmed ? 0.2 : 1 } : {}}
              transition={{ duration: 1.0, delay: 0.3 + connections.findIndex(c => c.id === id) * 0.15 }}
            />
            {/* Midpoint dot */}
            <motion.circle
              cx={midX} cy={midY} r="3.5"
              fill={isActive ? '#FF8906' : '#93C5FD'}
              opacity={dimmed ? 0.2 : 1}
              initial={{ scale: 0, opacity: 0 }}
              animate={triggered ? { scale: 1, opacity: dimmed ? 0.2 : 1 } : {}}
              transition={{ duration: 0.3, delay: 0.8 + connections.findIndex(c => c.id === id) * 0.12 }}
            />
            {/* Exit point dot (at window bottom) */}
            <motion.circle
              cx={id === 'kora' ? CONN.kora.x : id === 'quill' ? CONN.quill.x : CONN.atlas.x}
              cy={id === 'kora' ? CONN.kora.y : id === 'quill' ? CONN.quill.y : CONN.atlas.y}
              r="4"
              fill={isActive ? '#FF8906' : '#DBEAFE'}
              stroke="white"
              strokeWidth="1.5"
              opacity={dimmed ? 0.2 : 1}
              initial={{ scale: 0, opacity: 0 }}
              animate={triggered ? { scale: 1, opacity: dimmed ? 0.2 : 1 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + connections.findIndex(c => c.id === id) * 0.12 }}
            />
          </g>
        )
      })}
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SYSTEM CORE
═══════════════════════════════════════════════════════════════════════ */

function SystemCore({ hovered }: { hovered: string | null }) {
  const label = hovered === 'kora'  ? 'Knowledge Architecture' :
                hovered === 'quill' ? 'Document Intelligence'  :
                hovered === 'atlas' ? 'Decision Systems'       :
                'Orchestration Layer'

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Pulsing rings */}
      <div className="relative flex items-center justify-center">
        {[52, 40, 28].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-accent/20"
            style={{ width: size, height: size }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
          />
        ))}
        {/* Core node */}
        <motion.div
          className="relative z-10 w-14 h-14 rounded-2xl bg-accent flex items-center justify-center"
          style={{ boxShadow: '0 0 0 4px rgba(255,137,6,0.15)' }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <IconCube s={26} />
          {/* Override stroke color to white */}
          <style>{`.system-core-icon svg { stroke: white; }`}</style>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Labels */}
      <div className="text-center">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#1B1B1B]">System Core</p>
        <motion.p
          key={label}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-[0.68rem] text-[#5F6675] max-w-none"
        >
          {label}
        </motion.p>
      </div>

      {/* Online badge */}
      <span className="inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#22C55E] bg-[#F0FDF4] border border-[#BBF7D0] rounded-full px-2.5 py-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
        Online
      </span>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TERMINAL
═══════════════════════════════════════════════════════════════════════ */

function Terminal({ triggered }: { triggered: boolean }) {
  const [visibleLines, setVisible] = useState(0)

  useEffect(() => {
    if (!triggered) return
    const timers = TERMINAL_LINES.map((_, i) =>
      setTimeout(() => setVisible(i + 1), 300 + i * 380)
    )
    return () => timers.forEach(clearTimeout)
  }, [triggered])

  return (
    <div className="bg-[#0D0D0D] rounded-b-[18px] px-6 py-4 min-h-[130px]">
      {/* Terminal header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#555] text-[0.65rem] font-semibold uppercase tracking-[0.16em]">
          System Terminal
        </span>
        <span className="flex items-center gap-1.5 text-[#555] text-[0.65rem] font-semibold uppercase tracking-[0.12em]">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Live
        </span>
      </div>

      {/* Log lines */}
      <div className="space-y-1">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.p
            key={i}
            className={`font-mono text-[0.73rem] leading-relaxed max-w-none ${line.green ? 'text-[#22C55E]' : 'text-[#888]'}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {line.text}
          </motion.p>
        ))}

        {/* Blinking cursor after all lines appear */}
        {visibleLines >= TERMINAL_LINES.length && (
          <p className="font-mono text-[0.73rem] text-[#888] max-w-none">
            {'> '}
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.499, 0.5, 1], ease: 'linear' }}
              className="inline-block w-[6px] h-[12px] bg-[#888] ml-px align-middle"
            />
          </p>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════════════════════ */

export default function FeaturedProjects() {
  const ref      = useRef<HTMLElement>(null)
  const inView   = useInView(ref, { once: true, margin: '-60px' })
  const [triggered, setTriggered] = useState(false)
  const [hovered, setHovered]     = useState<string | null>(null)
  const ease = 'easeOut' as const

  useEffect(() => {
    if (inView) setTimeout(() => setTriggered(true), 300)
  }, [inView])

  return (
    <section ref={ref} className="py-[120px] bg-[#F2F2F2]">
      <div className="container">

        {/* ── Top row: header + metrics ──────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">

          {/* Header */}
          <div>
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={triggered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.18em]">
                Featured Projects
              </span>
            </motion.div>

            <motion.h2
              className="!mb-3 text-[#1B1B1B] leading-[1.06]"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}
              initial={{ opacity: 0, y: 28 }}
              animate={triggered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08, ease }}
            >
              Selected Work
            </motion.h2>

            <motion.p
              className="text-[#5F6675] text-[0.9rem] max-w-[38ch] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={triggered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16, ease }}
            >
              Enterprise AI systems architected and deployed
              <br />to solve complex operational problems.
            </motion.p>
          </div>

          {/* Metrics panel */}
          <MetricsPanel triggered={triggered} />
        </div>

        {/* ── Main workspace container ────────────────────────────── */}
        <motion.div
          className="rounded-[20px] border border-[#E4E4E7] bg-white overflow-hidden"
          style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.07)' }}
          initial={{ opacity: 0, y: 32 }}
          animate={triggered ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          {/* Workspace header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#EFEFEF]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <span className="text-[0.75rem] font-bold tracking-[0.1em] text-[#1B1B1B]">ERIN SYSTEMS</span>
              <span className="text-[0.7rem] text-[#ADADAD] font-medium">v1.0</span>
            </div>
            {/* Fake window controls */}
            <div className="flex items-center gap-3 text-[#ADADAD]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12" /></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </div>
          </div>

          {/* Workspace body */}
          <div className="relative bg-white">
            <BlueprintGrid />

            {/*
              ┌─────────────────── CONTENT WRAPPER ─────────────────────┐
              │  Section A: Project windows (natural height ~340px)      │
              │  Section B: Connection zone  (explicit 220px)            │
              │  SVG: absolute inset-0, spans A+B, draws the lines       │
              └──────────────────────────────────────────────────────────┘
            */}
            <div className="relative">

              {/* ── Section A: Project windows ──── */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4 px-6 pt-6">
                {projects.map((project, i) => (
                  <ProjectWindow
                    key={project.id}
                    project={project}
                    isActive={hovered === project.id}
                    isAnyActive={hovered !== null}
                    index={i}
                    onEnter={() => setHovered(project.id)}
                    onLeave={() => setHovered(null)}
                  />
                ))}
              </div>

              {/* ── Section B: Connection zone (desktop) ──── */}
              {/* Explicit height creates the visual space between windows and terminal */}
              <div className="hidden md:block relative" style={{ height: '220px' }}>
                {/* System Core — absolutely centered in this zone */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <SystemCore hovered={hovered} />
                </div>
              </div>

              {/* Mobile: system core below windows, no connection zone needed */}
              <div className="md:hidden flex items-center justify-center py-10 relative z-10">
                <SystemCore hovered={hovered} />
              </div>

              {/* SVG connection lines — absolute over BOTH Section A + B */}
              {/* z-[5] keeps it above blueprint grid (z-0) but below windows (z-10) */}
              {/* except the dots which peek above via their own position */}
              <div className="hidden md:block absolute inset-0 z-[5] pointer-events-none">
                <ConnectionLines hovered={hovered} triggered={triggered} />
              </div>

            </div>

            {/* Terminal — sits below the content wrapper, not inside it */}
            <Terminal triggered={triggered} />
          </div>
        </motion.div>

      </div>
    </section>
  )
}