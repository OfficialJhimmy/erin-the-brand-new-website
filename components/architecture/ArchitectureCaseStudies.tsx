'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Brain,
  ClipboardList,
  Database,
  Edit3,
  FileDown,
  FileText,
  Gauge,
  Layers,
  Lightbulb,
  Network,
  Search,
  Send,
  Sparkles,
  Tag,
  Target,
  UserCheck,
  Zap,
  type LucideIcon,
} from 'lucide-react'

type Accent = 'green' | 'violet' | 'blue'

const ACCENTS: Record<Accent, { text: string; bg: string; border: string; line: string; hoverBorder: string }> = {
  green: { text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', line: '#22C55E', hoverBorder: 'group-hover:border-green-400' },
  violet: { text: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200', line: '#8B5CF6', hoverBorder: 'group-hover:border-violet-400' },
  blue: { text: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20', line: '#FF8906', hoverBorder: 'group-hover:border-accent' },
}

interface PipelineStep {
  label: string
  detail: string
  icon: LucideIcon
}

interface CaseStudy {
  fig: string
  label: string
  client: string
  title: string
  summary: string
  challenge: string
  focus: string
  metric: { value: string; label: string }
  components: string[]
  pipeline: PipelineStep[]
  accent: Accent
  reverse: boolean
}

// Kora and Quill content is drawn from the actual published case studies
// (real architecture decisions, real numbers), not generic placeholder
// copy. There's no equivalent write-up for Atlas, so its content is kept
// as it was rather than inventing detail that doesn't exist.
const CASE_STUDIES: CaseStudy[] = [
  {
    fig: 'FIG. 01',
    label: 'KORA',
    client: 'Built for Meridian Works',
    title: 'An Internal Knowledge Assistant That Cites Its Sources',
    summary:
      'Employees ask questions in plain English. Kora retrieves the most relevant sections from indexed company documents and returns a precise, sourced answer in seconds, and says so when it doesn\u2019t know.',
    challenge:
      'Knowledge existed but wasn\u2019t reachable. New hires took too long to ramp up, and managers kept answering the same questions a document had already answered.',
    focus:
      'RAG over fine-tuning, since a fine-tuned model goes stale the moment a document changes. Semantic caching and confidence-scored retrieval keep it fast, cheap, and honest about what it doesn\u2019t know.',
    metric: { value: '<2s', label: 'Median response time' },
    components: ['RAG', 'pgvector', 'Semantic Caching', 'Claude Sonnet 4', 'Streaming (SSE)', 'Confidence Scoring'],
    pipeline: [
      { label: 'Document Ingestion', detail: 'Chunked & embedded via OpenAI text-embedding-3-small', icon: FileText },
      { label: 'Vector Storage', detail: 'pgvector inside Supabase \u2014 no separate vector DB needed at this scale', icon: Database },
      { label: 'Semantic Cache', detail: 'Repeated questions answered instantly above a 0.92 similarity threshold', icon: Zap },
      { label: 'Similarity Retrieval', detail: 'Top-matching chunks pulled for the query', icon: Search },
      { label: 'Confidence Scoring', detail: 'Low-confidence matches route to an honest "uncertain" response', icon: Gauge },
      { label: 'Claude Reasoning', detail: 'Answers only from retrieved context, every claim cited', icon: Brain },
      { label: 'Streamed Response', detail: 'Token-by-token via Server-Sent Events', icon: Send },
    ],
    accent: 'green',
    reverse: false,
  },
  {
    fig: 'FIG. 02',
    label: 'QUILL',
    client: 'Built for Nexus Labs',
    title: 'From Discovery Notes To Client-Ready SOW In Minutes',
    summary:
      'Quill turns raw discovery-call notes into a complete, branded Statement of Work, extraction, pricing, and generation handled end to end, with a human review checkpoint before anything is finalized.',
    challenge:
      'Manual proposal writing cost two to three hours per document and produced inconsistent output, and proposals that arrive days late close at lower rates than ones sent the same day.',
    focus:
      'A two-pass Claude pipeline: structured extraction first, with a human-editable review step, then tool-augmented generation that pulls real pricing data before writing a single section.',
    metric: { value: '~12min', label: 'Down from 2-3 hours per proposal' },
    components: ['Structured Extraction', 'Tool Use', 'Claude', 'Human-in-the-Loop Review', 'PDF Rendering'],
    pipeline: [
      { label: 'Discovery Notes', detail: 'Pasted in directly from a client call', icon: ClipboardList },
      { label: 'Structured Extraction', detail: 'Claude parses client, project, and signal data into clean fields', icon: Sparkles },
      { label: 'Human Review', detail: 'Every extracted field is editable before generation begins', icon: UserCheck },
      { label: 'Pricing Tool Call', detail: 'Claude queries real service packages via tool use', icon: Tag },
      { label: 'SOW Generation', detail: 'All eight sections drafted in a senior-consultant tone', icon: FileText },
      { label: 'Inline Editing', detail: 'Section-by-section edits, no separate editor', icon: Edit3 },
      { label: 'Branded PDF Export', detail: 'Rendered via WeasyPrint with the client\u2019s own styling', icon: FileDown },
    ],
    accent: 'violet',
    reverse: true,
  },
  {
    fig: 'FIG. 03',
    label: 'ATLAS',
    client: 'Multi-Agent Research & Decision Intelligence',
    title: 'Specialized Agents Coordinating Toward One Decision',
    summary:
      'Atlas coordinates multiple specialized agents to support research, analysis, evaluation, and recommendation workflows for complex strategic decisions.',
    challenge:
      'Complex decisions require gathering, analyzing, and synthesizing large volumes of information from multiple sources before a recommendation is even possible.',
    focus: 'Agent orchestration, decision intelligence, multi-agent systems, research automation.',
    metric: { value: '4', label: 'Coordinated agent roles' },
    components: ['Agent Coordination', 'Research Pipelines', 'Evaluation Frameworks', 'Decision Support', 'Intelligence Workflows'],
    pipeline: [
      { label: 'User Request', detail: 'A research or decision question is submitted', icon: Lightbulb },
      { label: 'Research Agent', detail: 'Gathers relevant information from available sources', icon: Search },
      { label: 'Analysis Agent', detail: 'Structures and interprets the gathered information', icon: Network },
      { label: 'Evaluation Agent', detail: 'Weighs tradeoffs and surfaces risk', icon: Target },
      { label: 'Recommendation Agent', detail: 'Synthesizes findings into a clear recommendation', icon: Bot },
      { label: 'Decision Brief', detail: 'Delivered as a structured, actionable summary', icon: FileText },
    ],
    accent: 'blue',
    reverse: false,
  },
]

function Pipeline({ steps, accent }: { steps: PipelineStep[]; accent: Accent }) {
  const colors = ACCENTS[accent]
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="relative rounded-[16px] border border-border bg-white p-7">
      <div className="relative pl-9">
        {/* The connecting line, with a small pulse continuously traveling down it once revealed */}
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
        {inView && (
          <motion.div
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 0.6, ease: 'linear' }}
            className="absolute left-[15px] h-3 w-px"
            style={{ background: `linear-gradient(${colors.line}, transparent)` }}
            aria-hidden="true"
          />
        )}

        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group relative flex items-start gap-3.5 rounded-lg p-2 transition-colors duration-200 hover:bg-surface ${
                i < steps.length - 1 ? 'mb-1' : ''
              }`}
            >
              <span
                className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-white transition-colors duration-200 ${colors.hoverBorder} ${colors.border}`}
                style={{ marginLeft: -2 }}
              >
                <Icon className={`h-3.5 w-3.5 ${colors.text}`} />
              </span>
              <div className="pb-1">
                <p className="!mb-0 text-sm font-semibold text-foreground">{step.label}</p>
                <p className="mt-0.5 max-w-[34ch] text-xs leading-snug text-muted">{step.detail}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

function DiagramRow({ steps, accent }: { steps: PipelineStep[]; accent: Accent }) {
  const colors = ACCENTS[accent]
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="hidden rounded-[16px] border border-border bg-white p-8 lg:block">
      <span className="mb-6 block text-xs font-bold uppercase tracking-[.1em] text-muted">Architecture Diagram</span>

      <div className="flex items-stretch">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="flex flex-1 items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-1 flex-col items-center gap-2 text-center"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full border bg-white ${colors.border}`}
                >
                  <Icon className={`h-[1.125rem] w-[1.125rem] ${colors.text}`} />
                </span>
                <span className="px-1 text-[11px] font-semibold leading-tight text-foreground">{step.label}</span>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0.25 }}
                  animate={
                    inView
                      ? { opacity: [0.25, 1, 0.25] }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: 1 + i * 0.35,
                    repeat: Infinity,
                    repeatDelay: steps.length * 0.35 + 1.5,
                  }}
                  className="-mt-5 shrink-0 px-1"
                >
                  <ArrowRight className="h-3.5 w-3.5" style={{ color: colors.line }} />
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CaseStudyPanel({ study }: { study: CaseStudy }) {
  const colors = ACCENTS[study.accent]
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      id={study.label.toLowerCase()}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="py-16 first:pt-4"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className={study.reverse ? 'lg:order-2' : ''}>
          <div className="flex items-center gap-3">
            <span className={`font-mono text-xs font-bold tracking-[.1em] ${colors.text}`}>{study.fig}</span>
            <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
            <span className="text-xs font-medium text-muted">{study.client}</span>
          </div>

          <h2 className="!mb-3 !mt-3 !text-3xl">{study.title}</h2>
          <p className="max-w-[55ch] text-[0.95rem]">{study.summary}</p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.08em] text-muted">The Challenge</span>
              <p className="mt-1.5 max-w-none text-sm">{study.challenge}</p>
            </div>
            <div>
              <span className={`text-xs font-bold uppercase tracking-[.08em] ${colors.text}`}>Architecture Focus</span>
              <p className="mt-1.5 max-w-none text-sm">{study.focus}</p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 rounded-[14px] border border-border bg-surface px-5 py-4">
            <span className={`font-heading text-2xl font-bold ${colors.text}`}>{study.metric.value}</span>
            <span className="max-w-[20ch] text-xs leading-snug text-muted">{study.metric.label}</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {study.components.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${colors.bg} ${colors.text} ${colors.border}`}
              >
                {c}
              </motion.span>
            ))}
          </div>
        </div>

        <div className={study.reverse ? 'lg:order-1' : ''}>
          <Pipeline steps={study.pipeline} accent={study.accent} />
        </div>
      </div>

      <div className="mt-8">
        <DiagramRow steps={study.pipeline} accent={study.accent} />
      </div>
    </motion.div>
  )
}

export default function ArchitectureCaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden"
      style={{
        background: '#FBFBFC',
        backgroundImage:
          'linear-gradient(rgba(10,10,10,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.025) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <div className="container relative py-8">
        <div className="max-w-2xl">
          <span className="section-label">Schematic Sheets</span>
          <h2>Architecture In Practice</h2>
          <p className="max-w-[55ch] text-[1.05rem]">
            Three systems, three different problems. Here&apos;s how each one is actually built.
          </p>
        </div>

        <div className="divide-y divide-border">
          {CASE_STUDIES.map((study) => (
            <CaseStudyPanel key={study.label} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}