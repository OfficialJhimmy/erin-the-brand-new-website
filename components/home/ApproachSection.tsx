'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Boxes,
  Calendar,
  Code2,
  Cog,
  Database,
  GitBranch,
  Mail,
  MessageSquare,
  Package,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'

type Color = 'blue' | 'green' | 'purple' | 'orange' | 'teal'

const COLOR_MAP: Record<Color, { bg: string; text: string; border: string; tagBg: string; tagText: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', tagBg: 'bg-blue-50', tagText: 'text-blue-600' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', tagBg: 'bg-green-50', tagText: 'text-green-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', tagBg: 'bg-purple-50', tagText: 'text-purple-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', tagBg: 'bg-orange-50', tagText: 'text-orange-600' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', tagBg: 'bg-teal-50', tagText: 'text-teal-600' },
}

const PROCESS_STEPS: { title: string; description: string; tag: string; icon: LucideIcon; color: Color }[] = [
  {
    title: 'Start the Conversation',
    description: "Share your idea, challenge, or goal. We'll align on what you're trying to achieve.",
    tag: '15–30 min intro call',
    icon: MessageSquare,
    color: 'blue',
  },
  {
    title: 'Discover & Define',
    description: 'I dive deep into your needs, users, and constraints to define the right AI solution.',
    tag: 'Research & analysis',
    icon: Search,
    color: 'green',
  },
  {
    title: 'Design the Solution',
    description: 'I architect the system, select the right tools, and map out the implementation.',
    tag: 'Architecture & plan',
    icon: Boxes,
    color: 'purple',
  },
  {
    title: 'Build & Integrate',
    description: 'I build, test, and integrate the solution with a focus on quality, performance, and scalability.',
    tag: 'Agile development',
    icon: Code2,
    color: 'orange',
  },
  {
    title: 'Launch & Scale',
    description: 'We launch confidently and iterate based on real-world feedback and data.',
    tag: 'Support & iteration',
    icon: Rocket,
    color: 'teal',
  },
]

const ENGAGE_CARDS: { title: string; description: string; tags: string[]; icon: LucideIcon; color: Color }[] = [
  {
    title: 'AI Consulting',
    description: 'Get expert guidance on AI strategy, architecture, and implementation.',
    tags: ['Strategy', 'Architecture', 'Roadmap'],
    icon: Users,
    color: 'purple',
  },
  {
    title: 'AI Product Development',
    description: 'End-to-end development of AI-powered products and intelligent systems.',
    tags: ['MVPs', 'Full Products', 'Integrations'],
    icon: Package,
    color: 'orange',
  },
  {
    title: 'AI Automation & Agents',
    description: 'Automate workflows and build AI agents that save time and drive results.',
    tags: ['Automation', 'Agents', 'Workflows'],
    icon: Cog,
    color: 'green',
  },
]

// Not present in the reference screenshot, but explicitly requested in the
// brief as a deliberate differentiator ("this is where most portfolios
// stop"), so it's included here even though there's no pixel reference for it.
const WHY_CARDS: { title: string; description: string; icon: LucideIcon }[] = [
  { title: 'Systems Thinking', description: 'I focus on architecture before implementation.', icon: GitBranch },
  { title: 'Production First', description: 'Built for real-world usage, not demos.', icon: ShieldCheck },
  { title: 'Business Outcomes', description: 'Technology tied directly to measurable results.', icon: TrendingUp },
  { title: 'Long-Term Thinking', description: 'Solutions designed to scale with your organization.', icon: Sparkles },
]

const ORBIT_NODES: { icon: LucideIcon; label: string; angle: number }[] = [
  { icon: MessageSquare, label: 'Strategy', angle: 0 },
  { icon: Code2, label: 'Automation', angle: 72 },
  { icon: BarChart3, label: 'Delivery', angle: 144 },
  { icon: Rocket, label: 'Agents', angle: 216 },
  { icon: Database, label: 'Architecture', angle: 288 },
]

function OrbitVisual() {
  const rx = 145
  const ry = 110

  return (
    <div className="relative mx-auto hidden h-[280px] w-[320px] shrink-0 items-center justify-center lg:flex">
      {/* Orbit paths */}
      <svg
        viewBox="0 0 320 280"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <ellipse
          cx="160"
          cy="140"
          rx={rx}
          ry={ry}
          fill="none"
          stroke="#FF8906"
          strokeOpacity="0.15"
          strokeDasharray="4 5"
        />
        <ellipse
          cx="160"
          cy="140"
          rx={rx * 0.78}
          ry={ry * 0.78}
          fill="none"
          stroke="#FF8906"
          strokeOpacity="0.1"
          strokeDasharray="4 5"
        />
      </svg>

      {/* Orbiting nodes — outer wrapper spins, each node counter-spins to stay upright */}
      <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
        {ORBIT_NODES.map((node) => {
          const rad = (node.angle * Math.PI) / 180
          const x = 160 + rx * Math.sin(rad)
          const y = 140 - ry * Math.cos(rad)
          const Icon = node.icon

          return (
            <div
              key={node.label}
              className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse] items-center justify-center rounded-full border border-border bg-white shadow-sm"
              style={{ left: x, top: y }}
              title={node.label}
            >
              <Icon className="h-4 w-4 text-accent" />
            </div>
          )
        })}
      </div>

      {/* Center: System Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute h-24 w-24 rounded-full bg-accent/15 blur-2xl" aria-hidden="true" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_8px_30px_rgba(255,137,6,0.25)]">
          <Boxes className="h-7 w-7 text-accent" />
        </div>
      </div>
    </div>
  )
}

export default function ApproachSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#1B1B1B 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        {/* Header + orbit visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <span className="section-label">HOW TO WORK WITH ME</span>
            <h2 className="max-w-xl text-[35px] lg:text-[55px]">
              Let&apos;s Build Something <br className="hidden sm:block" />
              Intelligent <span className="text-accent">Together</span>
            </h2>
            <p className="mt-5 max-w-[50ch]">
              A clear, collaborative process from idea to impact. Built for founders, teams, and
              organizations ready to ship AI solutions that scale.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground">
              <Zap className="h-4 w-4 text-accent" />
              <span>Fast</span>
              <span className="text-muted" aria-hidden="true">•</span>
              <span>Transparent</span>
              <span className="text-muted" aria-hidden="true">•</span>
              <span>Results-driven</span>
            </div>
          </div>

          <OrbitVisual />
        </motion.div>

        {/* Process timeline */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-xs font-bold uppercase tracking-[.15em] text-muted lg:text-left">
            Engagement Process
          </h3>

          <div className="grid gap-6 lg:grid-cols-5 lg:gap-0">
            {PROCESS_STEPS.map((step, i) => {
              const colors = COLOR_MAP[step.color]
              const Icon = step.icon
              const isHovered = hoveredStep === i

              return (
                <div key={step.title} className="relative lg:px-3">
                  {/* Connector line (desktop only, between cards) */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div
                      className={`absolute right-0 top-9 hidden h-px w-3 -translate-y-1/2 translate-x-full transition-colors duration-300 lg:block ${
                        hoveredStep === i || hoveredStep === i + 1 ? 'bg-accent' : 'bg-border'
                      }`}
                      aria-hidden="true"
                    />
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onMouseEnter={() => setHoveredStep(i)}
                    onMouseLeave={() => setHoveredStep(null)}
                    animate={{ y: isHovered ? -8 : 0 }}
                    className={`relative h-full rounded-[20px] border bg-white p-6 pt-9 transition-colors duration-300 ${
                      isHovered ? 'border-accent/30 shadow-[0_20px_40px_rgba(255,137,6,0.1)]' : 'border-border'
                    }`}
                  >
                    <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${colors.bg} transition-transform duration-300 ${
                        isHovered ? 'scale-110' : ''
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${colors.text}`} />
                    </span>

                    <h4 className="!mb-2 !text-base">{step.title}</h4>
                    <p className="max-w-none text-sm">{step.description}</p>

                    <span className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colors.tagBg} ${colors.tagText}`}>
                      {step.tag}
                    </span>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Ways to engage */}
        <div id="ways-to-engage" className="mt-20">
          <div className="mb-8 flex items-center justify-center gap-3">
            <ArrowLeft className="h-3.5 w-3.5 text-accent" />
            <h3 className="text-xs font-bold uppercase tracking-[.15em] text-foreground">Ways to Engage</h3>
            <ArrowRight className="h-3.5 w-3.5 text-accent" />
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {ENGAGE_CARDS.map((card, i) => {
              const colors = COLOR_MAP[card.color]
              const Icon = card.icon

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-[20px] border border-border bg-white p-7 transition-all duration-300 hover:border-accent"
                >
                  <div className="flex items-start justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg}`}>
                      <Icon className={`h-5 w-5 ${colors.text}`} />
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                  <h4 className="!mb-2 !mt-5 !text-lg">{card.title}</h4>
                  <p className="max-w-none text-sm">{card.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium">
                    {card.tags.map((tag, idx) => (
                      <span key={tag} className="flex items-center gap-2">
                        <span className={colors.text}>{tag}</span>
                        {idx < card.tags.length - 1 && <span className="text-muted" aria-hidden="true">•</span>}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Differentiator */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-xs font-bold uppercase tracking-[.15em] text-muted">
            Why People Work With Me
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CARDS.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-[18px] border border-border bg-white p-6"
                >
                  <Icon className="mb-4 h-5 w-5 text-accent" />
                  <h4 className="!mb-1.5 !text-base">{card.title}</h4>
                  <p className="max-w-none text-sm">{card.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col gap-6 rounded-[24px] bg-[#1B1B1B] p-8 sm:flex-row sm:items-center sm:justify-between md:p-10"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-white">
              <Calendar className="h-5 w-5 text-black" />
            </span>
            <div>
              <h3 className="!mb-1 !text-lg text-white">Ready to Build Something Extraordinary?</h3>
              <p className="max-w-none text-sm text-[#A1A1AA]">
                Book a call and let&apos;s talk about your project.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <motion.span
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 6.8 }}
              className="inline-block"
            >
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[14px] bg-gradient-to-r from-orange-400 to-yellow-400 text-black text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.span>
            <a
              href="mailto:erinlejhimmy@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-[#27272A] bg-white px-7 py-4 text-sm font-semibold text-black transition-colors hover:bg-[#18181B]"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}