'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Box,
  Brain,
  ChevronDown,
  Code2,
  Crown,
  ArrowRight,
  FileText,
  Grid2x2,
  Layers,
  Rocket,
  Server,
  ShieldCheck,
  Sprout,
  Star,
  User,
  Zap,
  type LucideIcon,
} from 'lucide-react'

type ColorKey = 'blue' | 'indigo' | 'purple' | 'teal' | 'orange'

const COLOR_MAP: Record<
  ColorKey,
  { iconBg: string; icon: string; dot: string; label: string; ring: string; bar: string }
> = {
  blue: {
    iconBg: 'bg-blue-50',
    icon: 'text-blue-600',
    dot: 'bg-blue-500',
    label: 'text-blue-600',
    ring: 'ring-2 ring-blue-200',
    bar: 'bg-blue-500',
  },
  indigo: {
    iconBg: 'bg-indigo-50',
    icon: 'text-indigo-600',
    dot: 'bg-indigo-500',
    label: 'text-indigo-600',
    ring: 'ring-2 ring-indigo-200',
    bar: 'bg-indigo-500',
  },
  purple: {
    iconBg: 'bg-purple-50',
    icon: 'text-purple-600',
    dot: 'bg-purple-500',
    label: 'text-purple-600',
    ring: 'ring-2 ring-purple-200',
    bar: 'bg-purple-500',
  },
  teal: {
    iconBg: 'bg-teal-50',
    icon: 'text-teal-600',
    dot: 'bg-teal-500',
    label: 'text-teal-600',
    ring: 'ring-2 ring-teal-200',
    bar: 'bg-teal-500',
  },
  orange: {
    iconBg: 'bg-orange-50',
    icon: 'text-orange-600',
    dot: 'bg-orange-500',
    label: 'text-orange-600',
    ring: 'ring-2 ring-orange-200',
    bar: 'bg-orange-500',
  },
}

interface JourneyItem {
  color: ColorKey
  role: {
    title: string
    company: string
    dates: string
    description: string
    icon: LucideIcon
    current?: boolean
  }
  stage: {
    label: string
    title: string
    description: string
    impact: string[]
    icon: LucideIcon
  }
}

// Ordered oldest -> newest (top to bottom) so it reads as growth, matching
// the evolution arrow in the brief, and so it stays in sync with the
// "Evolution At Each Stage" panel on the right.
const JOURNEY: JourneyItem[] = [
  {
    color: 'blue',
    role: {
      title: 'Frontend Engineer',
      company: 'Dash Language School',
      dates: 'Jan 2018 — Feb 2019',
      description:
        'Built and optimized customer-facing web applications, improving usability and performance.',
      icon: Zap,
    },
    stage: {
      label: 'FOUNDATION',
      title: 'Frontend Development',
      description: 'Focus on user experience, interface development, and performance.',
      impact: [
        'Built responsive web interfaces',
        'Improved usability and engagement',
        'Learned performance optimization',
      ],
      icon: Sprout,
    },
  },
  {
    color: 'indigo',
    role: {
      title: 'Software Engineer',
      company: 'Side Hustle',
      dates: 'Mar 2019 — Dec 2020',
      description:
        'Developed and optimized digital products with a focus on performance, maintainability, and engineering efficiency.',
      icon: Box,
    },
    stage: {
      label: 'APPLICATIONS',
      title: 'Web Applications',
      description: 'Building scalable web applications with modern JavaScript frameworks.',
      impact: [
        'Developed full-stack web apps',
        'Worked with React, JavaScript',
        'Delivered feature-rich products',
      ],
      icon: Grid2x2,
    },
  },
  {
    color: 'purple',
    role: {
      title: 'Software Engineer',
      company: 'Shestel',
      dates: 'Jan 2021 — Sept 2023',
      description:
        'Built and scaled backend systems, improved reliability, and established engineering best practices.',
      icon: Code2,
    },
    stage: {
      label: 'BACKEND & SCALE',
      title: 'Backend Engineering',
      description: 'Designing APIs, improving reliability, and establishing engineering standards.',
      impact: [
        'Built and maintained scalable APIs',
        'Implemented testing & CI/CD',
        'Improved system reliability by 40%',
      ],
      icon: Server,
    },
  },
  {
    color: 'teal',
    role: {
      title: 'Software Engineer — AI Solutions',
      company: 'Datamellon',
      dates: 'Nov 2022 — Jan 2026',
      description:
        'Designed and delivered AI-powered applications, automation solutions, and cloud-native products.',
      icon: Layers,
    },
    stage: {
      label: 'AI SOLUTIONS',
      title: 'AI-Powered Systems',
      description: 'Integrating AI into real-world products and automating business workflows.',
      impact: ['Built 9+ GPT-powered solutions', 'Integrated OpenAI & LLMs', 'Deployed cloud-native AI apps'],
      icon: Brain,
    },
  },
  {
    color: 'orange',
    role: {
      title: 'Lead AI Engineer',
      company: 'Refactrd',
      dates: 'Apr 2025 — Present',
      description:
        'Leading the design and delivery of AI-powered products, automation solutions, and workflow systems.',
      icon: Star,
      current: true,
    },
    stage: {
      label: 'LEADERSHIP',
      title: 'AI Architecture & Leadership',
      description: 'Leading architecture, AI strategy, and delivering high-impact solutions.',
      impact: [
        'Leading AI product development',
        'Designing scalable AI architectures',
        'Driving automation & innovation',
      ],
      icon: Crown,
    },
  },
]

type Metric = {
  value: number
  suffix: string
  label: string
  icon: LucideIcon
  isText?: false
} | {
  isText: true
  value: string
  label: string
  sub: string
  icon: LucideIcon
}

const METRICS: Metric[] = [
  { value: 6, suffix: '+', label: 'Years Experience', icon: Rocket },
  { value: 9, suffix: '+', label: 'AI Systems Delivered', icon: Box },
  { value: 3, suffix: '', label: 'AWS Certifications', icon: ShieldCheck },
  { value: 2, suffix: '', label: 'Production AI Platforms', icon: Layers },
  { isText: true, value: 'Lead', label: 'AI Engineer', sub: 'Current Role', icon: User },
]

function useCountUp(end: number, shouldStart: boolean, duration = 1400) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return
    let frame: number
    let startTime: number | null = null

    function tick(timestamp: number) {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [shouldStart, end, duration])

  return count
}

function MetricCard({ metric, start, index }: { metric: Metric; start: boolean; index: number }) {
  const count = useCountUp(metric.isText ? 0 : metric.value, start && !metric.isText)
  const Icon = metric.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card group min-w-[180px] shrink-0 snap-start hover:shadow-[0_20px_40px_rgba(255,137,6,0.08)] lg:min-w-0"
    >
      <Icon className="mb-5 h-6 w-6 text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
      <div className="font-heading text-3xl font-bold text-foreground">
        {metric.isText ? (
          metric.value
        ) : (
          <>
            {count}
            {metric.suffix}
          </>
        )}
      </div>
      <p className="mt-1 max-w-none text-sm">{metric.label}</p>
      {metric.isText && (
        <span className="mt-1 inline-block text-sm font-semibold text-accent">{metric.sub}</span>
      )}
    </motion.div>
  )
}

export default function ExperienceTimeline() {
  const lastIndex = JOURNEY.length - 1
  const [activeIndex, setActiveIndex] = useState(lastIndex)
  const [openMobile, setOpenMobile] = useState<number | null>(lastIndex)

  const metricsRef = useRef<HTMLDivElement>(null)
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.4 })

  const timelineRef = useRef<HTMLDivElement>(null)
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 })

  return (
    <section className="section relative overflow-hidden py-[40px] lg:py-[120px]">
      {/* faint blueprint grid, only visible on close inspection */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#1B1B1B 1px, transparent 1px), linear-gradient(90deg, #1B1B1B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        {/* Section header */}
        <span className="section-label">CAREER EVOLUTION</span>
        <h2 className="max-w-3xl text-[32px] lg:text-[54px]">
          From Building Interfaces <br className="hidden sm:block" />
          To <span className="text-accent">Architecting AI Systems</span>
        </h2>
        <p className="mt-5 max-w-[60ch]">
          Over 6+ years, I evolved from frontend development and software engineering into
          AI systems architecture, intelligent automation, and technical leadership.
        </p>

        {/* Metrics row */}
        <div
          ref={metricsRef}
          className="mt-12 flex gap-5 overflow-x-auto pb-2 snap-x lg:grid lg:grid-cols-5 lg:overflow-visible"
        >
          {METRICS.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} start={metricsInView} index={i} />
          ))}
        </div>

        {/* Main layout: timeline + evolution panel */}
        <div ref={timelineRef} className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Left panel: Career Progression (desktop/tablet) */}
          <div className="hidden rounded-md border border-border bg-surface p-8 lg:block">
            <h3 className="mb-8 text-xs font-bold uppercase tracking-[.15em] text-muted">
              Career Progression
            </h3>

            <ol className="relative">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={timelineInView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{ transformOrigin: 'top' }}
                className="absolute left-5 top-5 bottom-5 w-px bg-border"
                aria-hidden="true"
              />

              {JOURNEY.map((item, i) => {
                const colors = COLOR_MAP[item.color]
                const Icon = item.role.icon
                const isActive = activeIndex === i

                return (
                  <motion.li
                    key={item.role.title + item.role.company}
                    initial={{ opacity: 0, x: -12 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                    className="relative pb-8 last:pb-0"
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(i)}
                      onFocus={() => setActiveIndex(i)}
                      aria-current={item.role.current ? 'true' : undefined}
                      className={`flex w-full items-start gap-4 rounded-lg pl-1 pr-3 py-1 text-left transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-45 hover:opacity-80'
                      }`}
                    >
                      <span
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colors.iconBg} ${
                          isActive ? colors.ring : ''
                        } transition-all duration-300`}
                      >
                        <Icon className={`h-5 w-5 ${colors.icon}`} />
                      </span>

                      <span className="min-w-0">
                        <span className="mb-1 block text-xs font-medium text-muted">
                          {item.role.dates}
                        </span>
                        <span className="flex flex-wrap items-center gap-2">
                          <h3 className="!mb-0 !text-lg">{item.role.title}</h3>
                          {item.role.current && (
                            <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-bold text-green-600">
                              CURRENT
                            </span>
                          )}
                        </span>
                        <span className={`block text-sm font-semibold ${colors.label}`}>
                          {item.role.company}
                        </span>
                        <p className="mt-1 max-w-none text-sm">{item.role.description}</p>
                      </span>
                    </button>
                  </motion.li>
                )
              })}
            </ol>
          </div>

          {/* Right panel: Evolution At Each Stage (desktop/tablet) */}
          <div className="hidden rounded-md border border-border bg-surface p-8 lg:block">
            <div className="mb-8 flex items-baseline justify-between gap-4">
              <h3 className="text-xs font-bold uppercase tracking-[.15em] text-muted">
                Evolution At Each Stage
              </h3>
              <span className="hidden text-xs font-bold uppercase tracking-[.15em] text-muted sm:inline">
                Key Impact &amp; Focus
              </span>
            </div>

            <ul>
              {JOURNEY.map((item, i) => {
                const colors = COLOR_MAP[item.color]
                const Icon = item.stage.icon
                const isActive = activeIndex === i

                return (
                  <li
                    key={item.stage.title}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`grid grid-cols-[40px_1fr] gap-4 border-b border-border py-5 transition-opacity duration-300 last:border-b-0 last:pb-0 sm:grid-cols-[40px_1fr_1fr] ${
                      isActive ? 'opacity-100' : 'opacity-45'
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${colors.iconBg}`}
                    >
                      <Icon className={`h-5 w-5 ${colors.icon}`} />
                    </span>

                    <div>
                      <span className={`text-xs font-bold uppercase tracking-[.1em] ${colors.label}`}>
                        {item.stage.label}
                      </span>
                      <h4 className="mt-1 font-heading text-base font-semibold text-foreground">
                        {item.stage.title}
                      </h4>
                      <p className="mt-1 max-w-none text-sm">{item.stage.description}</p>
                    </div>

                    <ul className="col-span-2 mt-1 space-y-1.5 sm:col-span-1 sm:mt-0">
                      {item.stage.impact.map((line) => (
                        <li key={line} className="flex items-start gap-2 text-sm text-muted">
                          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`} />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Mobile: single accordion combining role + stage */}
          <div className="rounded-md border border-border bg-surface p-4 lg:hidden">
            {JOURNEY.map((item, i) => {
              const colors = COLOR_MAP[item.color]
              const Icon = item.role.icon
              const isOpen = openMobile === i

              return (
                <div key={item.role.title + item.role.company} className="border-b border-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenMobile(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 py-4 text-left"
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colors.iconBg}`}>
                      <Icon className={`h-5 w-5 ${colors.icon}`} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="mb-0.5 block text-xs font-medium text-muted">{item.role.dates}</span>
                      <span className="flex flex-wrap items-center gap-2">
                        <h3 className="!mb-0 !text-base">{item.role.title}</h3>
                        {item.role.current && (
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-600">
                            CURRENT
                          </span>
                        )}
                      </span>
                      <span className={`block text-sm font-semibold ${colors.label}`}>{item.role.company}</span>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pb-5 pl-14"
                    >
                      <p className="max-w-none text-sm">{item.role.description}</p>
                      <span className={`mt-3 block text-xs font-bold uppercase tracking-[.1em] ${colors.label}`}>
                        {item.stage.label}
                      </span>
                      <ul className="mt-2 space-y-1.5">
                        {item.stage.impact.map((line) => (
                          <li key={line} className="flex items-start gap-2 text-sm text-muted">
                            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`} />
                            {line}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-col gap-6 rounded-md border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-accent/10">
              <FileText className="h-5 w-5 text-accent" />
            </span>
            <div>
              <h3 className="!mb-1 !text-lg">Want the full story?</h3>
              <p className="max-w-none text-sm">
                Explore my complete career journey, the lessons that shaped how I work, and the
                impact behind it in detail.
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex w-fit items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] bg-gradient-to-r from-orange-400 to-yellow-400 text-black text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Background
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}