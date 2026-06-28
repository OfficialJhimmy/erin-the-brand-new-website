'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Clock,
  Database,
  FileCheck,
  FileText,
  ShieldCheck,
  Sparkles,
  User,
  type LucideIcon,
} from 'lucide-react'

type Color = 'green' | 'violet' | 'blue'

const COLOR_MAP: Record<Color, { bg: string; text: string; tint: string; dot: string; pillBg: string; pillText: string }> = {
  green: { bg: 'bg-green-500', text: 'text-green-600', tint: '#F7FFF9', dot: 'bg-green-500', pillBg: 'bg-green-500/10', pillText: 'text-green-600' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-600', tint: '#FAF7FF', dot: 'bg-violet-500', pillBg: 'bg-violet-500/10', pillText: 'text-violet-600' },
  blue: { bg: 'bg-accent', text: 'text-accent', tint: '#F5F9FF', dot: 'bg-accent', pillBg: 'bg-accent/10', pillText: 'text-accent' },
}

interface CaseStudy {
  id: string
  index: string
  category: string
  name: string
  subtitle: string
  description: string
  capabilities: string[]
  color: Color
  centerIcon: LucideIcon
  satelliteIcons: LucideIcon[]
}

// Descriptions, capability lists, and the technology stack below are pulled
// from the same source data that powers the full write-ups further down
// the page (now linked via id, see the per-card arrow), not re-invented
// for this compact format.
const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'kora',
    index: '01',
    category: 'Enterprise Knowledge System',
    name: 'Kora',
    subtitle: 'Enterprise Knowledge & Onboarding Platform',
    description:
      'An enterprise RAG platform that transforms organizational knowledge into an intelligent onboarding and discovery experience.',
    capabilities: ['Enterprise Search', 'Knowledge Discovery', 'Semantic Retrieval', 'Document Intelligence', 'Context-Aware Responses'],
    color: 'green',
    centerIcon: BrainCircuit,
    satelliteIcons: [User, FileText, ShieldCheck, Database],
  },
  {
    id: 'quill',
    index: '02',
    category: 'Document Intelligence',
    name: 'Quill',
    subtitle: 'Proposal & Statement of Work Generator',
    description:
      'A document intelligence platform that transforms requirements into structured, client-ready proposals and Statements of Work.',
    capabilities: ['Requirement Analysis', 'Document Generation', 'Context Enrichment', 'Workflow Automation', 'Review & Approval Processes'],
    color: 'violet',
    centerIcon: FileText,
    satelliteIcons: [Sparkles, FileCheck, Clock, User],
  },
  {
    id: 'atlas',
    index: '03',
    category: 'Multi-Agent Intelligence',
    name: 'Atlas',
    subtitle: 'Multi-Agent Research & Decision Intelligence Platform',
    description:
      'A multi-agent system where specialized agents collaborate to conduct research, evaluate information, and generate decision intelligence.',
    capabilities: ['Research Automation', 'Agent Collaboration', 'Decision Intelligence', 'Recommendation Generation', 'Knowledge Synthesis'],
    color: 'blue',
    centerIcon: Bot,
    satelliteIcons: [Bot, Bot, Bot, Bot],
  },
]

// Generic icons standing in for these names — lucide-react has no actual
// OpenAI/Claude/AWS brand marks, so each is paired with its real text label
// rather than an icon pretending to be a logo it isn't.
const TECH_STACK: { label: string; icon: LucideIcon }[] = [
  { label: 'OpenAI', icon: Sparkles },
  { label: 'Claude', icon: BrainCircuit },
  { label: 'LangGraph', icon: Bot },
  { label: 'Python', icon: FileText },
  { label: 'Vector DB', icon: Database },
  { label: 'AWS', icon: ShieldCheck },
]

// Small icon-only nodes (no text), so there's no variable-height content
// that could overflow its bounds the way the hero's text-bearing cards did.
function MiniSystemVisual({ color, centerIcon: CenterIcon, satelliteIcons }: { color: Color; centerIcon: LucideIcon; satelliteIcons: LucideIcon[] }) {
  const colors = COLOR_MAP[color]
  const positions = [
    { top: '6%', left: '38%' },
    { top: '40%', left: '0%' },
    { top: '40%', left: '78%' },
    { top: '78%', left: '38%' },
  ]

  return (
    <div className="relative mx-auto hidden h-[180px] w-[180px] shrink-0 sm:block">
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="h-[150px] w-[150px] rounded-full border border-dashed" style={{ borderColor: `${colors.text === 'text-accent' ? '#2563EB' : ''}` }} />
      </div>
      <svg viewBox="0 0 180 180" className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
        <circle cx="90" cy="90" r="65" fill="none" stroke="currentColor" className={colors.text} strokeDasharray="3 5" strokeWidth="1" />
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        <CenterIcon className={`h-6 w-6 ${colors.text}`} />
      </div>

      {satelliteIcons.map((Icon, i) => {
        const pos = positions[i % positions.length]
        return (
          <div
            key={i}
            className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.07)]"
            style={pos}
          >
            <Icon className={`h-4 w-4 ${colors.text}`} />
          </div>
        )
      })}
    </div>
  )
}

function CaseStudyPanel({ study, index }: { study: CaseStudy; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const colors = COLOR_MAP[study.color]
  const CenterIcon = study.centerIcon

  return (
    <motion.div
      ref={ref}
      id={study.id}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[20px] border border-border bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:p-9"
      style={{ borderLeftWidth: 4, borderLeftColor: colors.text === 'text-accent' ? '#2563EB' : undefined }}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: content */}
        <div className="min-w-0 flex-1">
          <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg}`}>
            <CenterIcon className="h-5 w-5 text-white" />
          </span>

          <span className={`mt-4 block font-mono text-xs font-bold uppercase tracking-[.1em] ${colors.text}`}>
            Case Study {study.index} · {study.category}
          </span>
          <h3 className="!mb-1 !mt-1.5 !text-3xl">{study.name}</h3>
          <p className="mb-3 text-[0.95rem] font-medium text-foreground/80">{study.subtitle}</p>
          <p className="max-w-[55ch] text-[0.95rem]">{study.description}</p>

          <div className="mt-5">
            <span className={`text-xs font-bold uppercase tracking-[.08em] ${colors.text}`}>Core Capabilities</span>
            <ul className="mt-2.5 flex flex-wrap gap-x-5 gap-y-2">
              {study.capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-2 text-sm text-foreground">
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`} />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: mini system visual */}
        <MiniSystemVisual color={study.color} centerIcon={study.centerIcon} satelliteIcons={study.satelliteIcons} />

        {/* Far right: link to the full write-up below */}
        <a
          href={`#${study.id}-detail`}
          aria-label={`Read the full ${study.name} case study`}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-transparent group-hover:${colors.bg} group-hover:text-white`}
        >
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.div>
  )
}

export default function ProjectCaseStudiesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })

  return (
    <section
      className="relative overflow-hidden py-[40px] lg:py-[120px]"
      style={{
        background:
          'radial-gradient(circle at 20% 20%, rgba(37,99,235,0.04), transparent 40%), radial-gradient(circle at 80% 80%, rgba(16,185,129,0.04), transparent 40%), #FFFFFF',
      }}
    >
      <div className="container relative">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="section-label">Case Studies</span>
          <h2>AI Systems Designed For Real Business Impact</h2>
          <p className="max-w-[55ch] text-[1.05rem]">
            A collection of intelligent systems built to help organizations scale knowledge,
            automate workflows, and improve decision-making.
          </p>
        </motion.div>

        <div className="relative mt-12 flex flex-col gap-7">
          {CASE_STUDIES.map((study, i) => (
            <div key={study.id} onMouseEnter={() => setActiveIndex(i)}>
              <CaseStudyPanel study={study} index={i} />
            </div>
          ))}

          {/* Scroll-spy dots — purely a visual rail, mirrors whichever panel was last hovered */}
          <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex" aria-hidden="true">
            {CASE_STUDIES.map((study, i) => (
              <span
                key={study.id}
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                  i === activeIndex ? COLOR_MAP[study.color].dot : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Technology foundation + availability strip */}
        <div className="mt-10 grid gap-5 sm:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[20px] border border-border bg-white p-6">
            <span className="text-xs font-bold uppercase tracking-[.1em] text-accent">Technology Foundation</span>
            <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3">
              {TECH_STACK.map((tech) => {
                const Icon = tech.icon
                return (
                  <span key={tech.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Icon className="h-4 w-4 text-muted" />
                    {tech.label}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-[20px] border border-border bg-white p-6">
            <motion.span
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="h-2 w-2 shrink-0 rounded-full bg-green-500"
            />
            <div>
              <p className="!mb-0 text-sm font-bold uppercase tracking-[.05em] text-green-600">
                Available for New Engagements
              </p>
              <p className="max-w-none text-sm text-muted">Let&apos;s build something extraordinary together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}