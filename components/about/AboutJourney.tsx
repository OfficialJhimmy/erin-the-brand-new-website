'use client'

import { useRef } from 'react'
import '@fontsource/caveat/500.css'
import '@fontsource/caveat/600.css'
import '@fontsource/caveat/700.css'
import { motion, useInView } from 'framer-motion'
import {
  Box,
  Brain,
  Cloud,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Layers,
  Lightbulb,
  Rocket,
  Target,
  Triangle,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'

const VALUE_CARDS: { icon: LucideIcon; title: string; description: string; color: 'blue' | 'green' | 'violet' }[] = [
  { icon: Lightbulb, title: 'Learned constantly', description: 'Curiosity is my compass.', color: 'blue' },
  { icon: Code2, title: 'Built intentionally', description: 'Systems over features.', color: 'green' },
  { icon: Zap, title: 'Solved meaningfully', description: 'Impact over everything.', color: 'violet' },
  { icon: Target, title: 'Focused on outcomes', description: 'Business value is the goal.', color: 'blue' },
]

const VALUE_COLORS = {
  blue: { bg: 'bg-accent/10', text: 'text-accent' },
  green: { bg: 'bg-green-50', text: 'text-green-600' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600' },
}

const STAGES = [
  {
    eyebrow: 'Day 1',
    title: 'Actuarial Science',
    bullets: ['Statistics', 'Probability', 'Risk Models', 'Analytical Thinking'],
    note: 'Understanding uncertainty and patterns.',
    sketch: 'distribution' as const,
  },
  {
    eyebrow: 'Then',
    title: 'Software Engineering',
    bullets: ['APIs', 'Cloud', 'Scalable Systems', 'Clean Architecture'],
    note: 'Building systems that are reliable, scalable, and maintainable.',
    sketch: 'api' as const,
  },
  {
    eyebrow: 'Later',
    title: 'AI Engineering',
    bullets: ['LLMs', 'RAG', 'Agents', 'Automation'],
    note: 'Exploring intelligence layers and how machines can augment human capability.',
    sketch: 'nodegraph' as const,
  },
  {
    eyebrow: 'Now',
    title: 'Building AI Systems That People Actually Use',
    bullets: ['Architecture', 'Reliability', 'Business Value', 'Adoption'],
    note: null,
    sketch: 'cubes' as const,
  },
]

const DRIVES: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Users, title: 'People First', description: 'Build for humans, always.' },
  { icon: Target, title: 'Solve Real Problems', description: 'Technology should make a difference.' },
  { icon: Rocket, title: 'Ship & Iterate', description: 'Progress over perfection.' },
  { icon: Brain, title: 'Never Stop Learning', description: 'Stay curious. Stay evolving.' },
]

const LESSONS = [
  'Understand deeply before you build.',
  'Simplicity scales.',
  'Great systems are invisible.',
  'Business value is the real metric.',
]

const TODAYS_FOCUS = ['AI Agents', 'Enterprise RAG', 'Workflow Automation', 'Decision Intelligence', 'AI Solution Architecture', 'Multi-Agent Systems']

const TECH_STACK: { label: string; icon: LucideIcon }[] = [
  { label: 'Python', icon: Code2 },
  { label: 'TypeScript', icon: FileCode2 },
  { label: 'AWS', icon: Cloud },
  { label: 'Docker', icon: Box },
  { label: 'LangChain', icon: GitBranch },
  { label: 'PostgreSQL', icon: Database },
  { label: 'Vector DBs', icon: Layers },
  { label: 'Next.js', icon: Triangle },
]

function DistributionSketch() {
  return (
    <svg viewBox="0 0 200 130" className="h-28 w-full max-w-[220px]" fill="none">
      <motion.path
        d="M10,110 L10,15 M10,110 L190,110"
        stroke="#1B1B1B"
        strokeWidth="1.2"
        strokeOpacity="0.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M15,108 C45,108 60,20 100,20 C140,20 155,108 185,108"
        stroke="#FF8906"
        strokeWidth="1.8"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.2 }}
      />
      <path d="M100,108 C120,108 130,90 138,75 L138,108 Z" fill="#FF8906" fillOpacity="0.12" stroke="none" />
      <line x1="100" y1="108" x2="100" y2="22" stroke="#FF8906" strokeOpacity="0.3" strokeDasharray="2 3" strokeWidth="1" />
      <text x="98" y="124" fontSize="9" fill="#5F6675" fontStyle="italic">
        μ
      </text>
      <text x="135" y="124" fontSize="9" fill="#5F6675" fontStyle="italic">
        σ
      </text>
    </svg>
  )
}

function ApiArchitectureSketch() {
  const box = (x: number, y: number, w: number, label: string) => (
    <g key={label}>
      <rect x={x} y={y} width={w} height={22} rx={4} fill="white" stroke="#FF8906" strokeOpacity="0.5" strokeWidth="1.2" />
      <text x={x + w / 2} y={y + 15} fontSize="9" fill="#1B1B1B" textAnchor="middle" fontWeight="600">
        {label}
      </text>
    </g>
  )
  return (
    <svg viewBox="0 0 200 130" className="h-28 w-full max-w-[220px]" fill="none">
      {box(65, 5, 70, 'Client')}
      {box(50, 48, 100, 'API Gateway')}
      {box(8, 95, 50, 'Auth')}
      {box(75, 95, 50, 'DB')}
      {box(142, 95, 50, 'Storage')}
      <motion.g initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <path d="M100,27 L100,48" stroke="#FF8906" strokeOpacity="0.45" strokeWidth="1.2" />
        <path d="M100,70 C100,80 60,80 33,95" stroke="#FF8906" strokeOpacity="0.45" strokeWidth="1.2" />
        <path d="M100,70 L100,95" stroke="#FF8906" strokeOpacity="0.45" strokeWidth="1.2" />
        <path d="M100,70 C100,80 140,80 167,95" stroke="#FF8906" strokeOpacity="0.45" strokeWidth="1.2" />
      </motion.g>
    </svg>
  )
}

function NodeGraphSketch() {
  const nodes = [
    { x: 100, y: 30 },
    { x: 150, y: 52 },
    { x: 150, y: 98 },
    { x: 100, y: 120 },
    { x: 50, y: 98 },
    { x: 50, y: 52 },
  ]
  return (
    <svg viewBox="0 0 200 150" className="h-28 w-full max-w-[220px]" fill="none">
      {nodes.map((n, i) => (
        <line key={i} id={`node-line-${i}`} x1={100} y1={75} x2={n.x} y2={n.y} stroke="#FF8906" strokeOpacity="0.3" strokeWidth="1" />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} r="3" fill="#FF8906">
          <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`}>
            <mpath href={`#node-line-${i}`} />
          </animateMotion>
        </circle>
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="11" fill="white" stroke="#FF8906" strokeOpacity="0.5" strokeWidth="1.2" />
      ))}
      <circle cx="100" cy="75" r="26" fill="#FF8906" fillOpacity="0.08" stroke="#FF8906" strokeWidth="1.4" />
      <text x="100" y="79" fontSize="11" fill="#FF8906" textAnchor="middle" fontWeight="700">
        LLM
      </text>
    </svg>
  )
}

function CubesSketch() {
  const cube = (x: number, y: number, s: number, key: string) => (
    <rect key={key} x={x} y={y} width={s} height={s} rx={4} fill="#FF8906" fillOpacity="0.08" stroke="#FF8906" strokeWidth="1.3" />
  )
  return (
    <svg viewBox="0 0 200 130" className="h-28 w-full max-w-[220px]" fill="none">
      {cube(75, 10, 50, 'a')}
      {cube(60, 65, 50, 'b')}
      {cube(125, 80, 38, 'c')}
      {cube(10, 85, 36, 'd')}
      <motion.g initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <path d="M100,60 L100,65" stroke="#FF8906" strokeOpacity="0.5" strokeWidth="1.2" />
        <path d="M95,108 L46,98" stroke="#FF8906" strokeOpacity="0.5" strokeWidth="1.2" />
        <path d="M110,108 L130,100" stroke="#FF8906" strokeOpacity="0.5" strokeWidth="1.2" />
      </motion.g>
    </svg>
  )
}

const SKETCHES = { distribution: DistributionSketch, api: ApiArchitectureSketch, nodegraph: NodeGraphSketch, cubes: CubesSketch }

function StickyNote({
  rotate,
  delay,
  className,
  children,
}: {
  rotate: number
  delay: number
  className: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, rotate: 0 }}
      animate={{ y: [0, -2, 0] }}
      style={{ rotate: `${rotate}deg` }}
      className={`shadow-[0_8px_20px_rgba(0,0,0,0.08)] ${className}`}
    >
      {children}
    </motion.div>
  )
}

function NotebookSpread() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7 }}
      whileHover={{ rotate: 0.5 }}
      className="relative hidden rounded-[28px] border border-[#E8DFC8] bg-[#FBF7EC] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.08)] lg:block"
    >
      <div
        className="pointer-events-none absolute inset-3 rounded-[24px] opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(#FF8906 1px, transparent 1px), linear-gradient(90deg, #FF8906 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        aria-hidden="true"
      />

      <div className="absolute left-1/2 top-3 bottom-3 w-2 -translate-x-1/2 rounded-full bg-[#1B1B1B]/80" aria-hidden="true" />

      {/* Scrollable page area — the spread's content is taller than the
          "My Journey" column beside it, so it scrolls within a fixed
          frame instead of stretching the whole section and leaving a
          wall of empty space next to a much shorter left column. */}
      <div className="relative max-h-[720px] overflow-y-auto rounded-[24px] p-7" style={{ scrollbarWidth: 'thin' }}>
        <div className="grid grid-cols-2 gap-10">
          {/* Left page */}
          <div className="pr-4">
            {STAGES.map((stage, i) => {
              const Sketch = SKETCHES[stage.sketch]
              return (
                <div key={stage.title} className={`relative pl-5 ${i < STAGES.length - 1 ? 'pb-7' : ''}`}>
                  {i < STAGES.length - 1 && <div className="absolute left-[3px] top-3 bottom-0 w-px bg-[#FF8906]/20" aria-hidden="true" />}
                  <span className="absolute -left-0.5 top-1.5 h-2 w-2 rounded-full border-2 border-accent bg-[#FBF7EC]" aria-hidden="true" />

                  <span className="font-hand text-lg text-accent">{stage.eyebrow}</span>
                  <h3 className="!mb-2 !mt-0.5 font-hand !text-2xl !font-bold text-foreground" style={{ textDecoration: 'underline', textDecorationColor: 'rgba(255,137,6,0.3)' }}>
                    {stage.title}
                  </h3>

                  <div className="flex flex-wrap items-start gap-5">
                    <ul className="space-y-1">
                      {stage.bullets.map((b) => (
                        <li key={b} className="text-sm text-foreground/80">
                          • {b}
                        </li>
                      ))}
                    </ul>
                    <Sketch />
                  </div>

                  {stage.note && <p className="mt-2 max-w-[200px] font-hand text-base text-accent/80">{stage.note}</p>}
                </div>
              )
            })}
          </div>

          {/* Right page */}
          <div className="grid grid-cols-[1.3fr_1fr] gap-5 pl-4">
            <div>
              <h3 className="!mb-4 font-hand !text-2xl !font-bold text-foreground" style={{ textDecoration: 'underline', textDecorationColor: 'rgba(255,137,6,0.3)' }}>
                What Drives Me
              </h3>
              <div className="space-y-4">
                {DRIVES.map((d) => {
                  const Icon = d.icon
                  return (
                    <div key={d.title} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <div>
                        <p className="!mb-0 text-sm font-bold text-foreground">{d.title}</p>
                        <p className="max-w-none text-xs leading-snug text-muted">{d.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <h3 className="!mb-3 !mt-7 font-hand !text-2xl !font-bold text-foreground" style={{ textDecoration: 'underline', textDecorationColor: 'rgba(255,137,6,0.3)' }}>
                Lessons I Live By
              </h3>
              <ul className="space-y-2">
                {LESSONS.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-accent">→</span>
                    {l}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-lg border border-accent/25 p-4">
                <p className="font-hand text-lg leading-snug text-foreground">
                  I don&apos;t just build with code. I design systems that solve complex problems and
                  create lasting impact.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <StickyNote rotate={2} delay={0.1} className="rounded-md border border-[#E8DFC8] bg-[#FCF3D9] p-4">
                <span className="mb-2 block h-2 w-10 rounded-sm bg-accent/30" aria-hidden="true" />
                <p className="!mb-2 font-hand !text-lg !font-bold text-accent">Today&apos;s Focus</p>
                <ul className="space-y-1">
                  {TODAYS_FOCUS.map((f) => (
                    <li key={f} className="text-xs text-foreground/80">
                      ✓ {f}
                    </li>
                  ))}
                </ul>
              </StickyNote>

              <StickyNote rotate={-1.5} delay={0.2} className="rounded-md border-2 border-dashed border-accent/30 bg-white p-4">
                <p className="!mb-1.5 font-hand !text-lg !font-bold text-foreground">Current Mission</p>
                <p className="text-xs leading-snug text-muted">
                  Design and build intelligent systems that help organizations work smarter, move
                  faster, and create more value.
                </p>
              </StickyNote>

              <StickyNote rotate={1.5} delay={0.3} className="rounded-md bg-[#DBEAFE] p-4">
                <span className="mb-2 block h-2 w-10 rounded-sm bg-accent/30" aria-hidden="true" />
                <p className="font-hand text-base leading-snug text-foreground">
                  The intersection of AI, systems, and human purpose is where I choose to build.
                </p>
                <p className="mt-2 text-right font-hand text-sm font-bold text-accent">— ERIN</p>
              </StickyNote>
            </div>
          </div>
        </div>
      </div>

      {/* Fade hint at the bottom of the frame, signals there's more to scroll */}
      <div
        className="pointer-events-none absolute inset-x-3 bottom-3 h-10 rounded-b-[24px]"
        style={{ background: 'linear-gradient(to bottom, transparent, #FBF7EC)' }}
        aria-hidden="true"
      />
    </motion.div>
  )
}

function NotebookCompact() {
  return (
    <div className="flex flex-col gap-6 lg:hidden">
      {STAGES.map((stage) => {
        const Sketch = SKETCHES[stage.sketch]
        return (
          <div key={stage.title} className="rounded-2xl border border-[#E8DFC8] bg-[#FBF7EC] p-6">
            <span className="font-hand text-base text-accent">{stage.eyebrow}</span>
            <h3 className="!mb-2 !mt-0.5 font-hand !text-xl !font-bold text-foreground">{stage.title}</h3>
            <ul className="mb-3 flex flex-wrap gap-x-4 gap-y-1">
              {stage.bullets.map((b) => (
                <li key={b} className="text-sm text-foreground/80">
                  • {b}
                </li>
              ))}
            </ul>
            <Sketch />
            {stage.note && <p className="mt-2 font-hand text-base text-accent/80">{stage.note}</p>}
          </div>
        )
      })}

      <div className="rounded-2xl border border-[#E8DFC8] bg-[#FBF7EC] p-6">
        <h3 className="!mb-4 font-hand !text-xl !font-bold text-foreground">What Drives Me</h3>
        <div className="space-y-4">
          {DRIVES.map((d) => {
            const Icon = d.icon
            return (
              <div key={d.title} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="!mb-0 text-sm font-bold text-foreground">{d.title}</p>
                  <p className="max-w-none text-xs leading-snug text-muted">{d.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-[#E8DFC8] bg-[#FCF3D9] p-6">
        <p className="!mb-2 font-hand !text-lg !font-bold text-accent">Today&apos;s Focus</p>
        <ul className="space-y-1">
          {TODAYS_FOCUS.map((f) => (
            <li key={f} className="text-xs text-foreground/80">
              ✓ {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function AboutJourney() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="journey"
      ref={ref}
      className="relative overflow-hidden py-24"
      style={{ background: 'radial-gradient(circle at 20% 10%, rgba(255,137,6,0.04), transparent 50%), #F8FAFC' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(#1B1B1B 1px, transparent 1px), linear-gradient(90deg, #1B1B1B 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1fr] lg:gap-10">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">My Journey</span>
            <h2 className="!mb-5">My Journey</h2>
            <p className="max-w-[42ch] text-[1.05rem] leading-relaxed">
              A more personal look at my journey, notes, sketches, and lessons along the way.
            </p>
            <p className="mt-3 max-w-[42ch] text-[1.05rem] leading-relaxed">
              Every step shaped how I build AI systems that people actually use.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {VALUE_CARDS.map((card, i) => {
                const Icon = card.icon
                const colors = VALUE_COLORS[card.color]
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="rounded-[22px] border border-border bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(255,137,6,0.12)]"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colors.bg}`}>
                        <Icon className={`h-[1.125rem] w-[1.125rem] ${colors.text}`} />
                      </span>
                      <div>
                        <p className="!mb-0 text-sm font-bold text-foreground">{card.title}</p>
                        <p className="max-w-none text-xs text-muted">{card.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-10">
              <p className="font-hand text-lg leading-snug text-muted">
                This is an ongoing journey. The best chapters are still being written.
              </p>
              <svg viewBox="0 0 60 30" className="mt-1 h-7 w-16" fill="none">
                <motion.path
                  d="M4,6 C10,16 22,22 40,18 C46,17 50,15 52,10"
                  stroke="#FF8906"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <path d="M44,7 L52,10 L47,16" stroke="#FF8906" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </motion.div>

          {/* Right column: notebook */}
          <div>
            <NotebookSpread />
            <NotebookCompact />
          </div>
        </div>

        {/* Tech stack bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 rounded-[20px] border border-border bg-white/70 px-8 py-5 backdrop-blur"
        >
          <span className="text-xs font-bold uppercase tracking-[.08em] text-accent">Tech Stack &amp; Tools</span>
          {TECH_STACK.map((tech) => {
            const Icon = tech.icon
            return (
              <motion.span
                key={tech.label}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Icon className="h-4 w-4 text-muted" />
                {tech.label}
              </motion.span>
            )
          })}
          <span className="text-sm text-muted">+ Many more</span>
        </motion.div>
      </div>
    </section>
  )
}