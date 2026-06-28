'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Boxes, Layers, Target, Workflow, type LucideIcon } from 'lucide-react'

const PILLARS: { title: string; description: string; icon: LucideIcon }[] = [
  { title: 'Scalable Architecture', description: 'Designed to evolve with business needs.', icon: Boxes },
  { title: 'Operational Workflows', description: 'Automation built around people and processes.', icon: Workflow },
  { title: 'Business Outcomes', description: 'Every architectural decision maps to measurable value.', icon: Target },
]

// Real exported diagram, not a hand-built SVG/CSS reconstruction — the
// background has been chroma-keyed to transparent (the source export had
// an opaque white background, which would have shown as a visible white
// panel against this section's gradient background otherwise).
function ArchitectureVisual() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5
    setParallax({ x: relX * 24, y: relY * 24 }) // *24 then clamped to ±12 below
  }

  const clampedX = Math.max(-12, Math.min(12, parallax.x))
  const clampedY = Math.max(-12, Math.min(12, parallax.y))

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setParallax({ x: 0, y: 0 })}
      className="relative mx-auto w-full max-w-[680px]"
    >
      <motion.div animate={{ x: clampedX, y: clampedY }} transition={{ type: 'spring', stiffness: 60, damping: 12 }}>
        <Image
          src="/assets/images/architecture-diagram.webp"
          alt="Architecture diagram: a central system core connecting Users, Systems, Data Sources, and External APIs through an Application Layer, Orchestration Layer, Intelligence Layer, and Data Foundation, producing measurable Business Impact"
          width={1402}
          height={1122}
          className="h-auto w-full"
          priority
        />
      </motion.div>
    </div>
  )
}

export default function ArchitectureHero() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative overflow-hidden pb-20 pt-28 sm:pt-32" style={{ background: '#FCFCFD' }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(#1B1B1B 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,137,6,0.05), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="grid items-center gap-14 xl:grid-cols-[1fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-4 py-1.5 text-xs font-bold text-accent">
              <Layers className="h-3.5 w-3.5" />
              Architecture Library
            </span>

            <h1 className="!mb-6 !mt-4 max-w-2xl !text-[clamp(2.25rem,4.5vw,3.4rem)]">Designing AI Systems Before Building Them</h1>

            <p className="max-w-[560px] text-[1.05rem] leading-relaxed">
              The difference between a successful AI initiative and a failed one usually isn&apos;t
              the model. It&apos;s the architecture.
            </p>
            <p className="mt-4 max-w-[560px] text-[1.05rem] leading-relaxed">
              I design scalable AI systems, operational workflows, orchestration layers, and
              implementation strategies that transform business requirements into
              production-ready AI platforms.
            </p>

            <div className="mt-10 flex flex-col">
              {PILLARS.map((pillar, i) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.title}
                    className={`flex items-start gap-4 py-5 ${i < PILLARS.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border">
                      <Icon className="h-4 w-4 text-accent" />
                    </span>
                    <div>
                      <p className="!mb-0.5 font-semibold text-foreground">{pillar.title}</p>
                      <p className="max-w-none text-sm text-muted">{pillar.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <ArchitectureVisual />
        </div>
      </div>
    </section>
  )
}