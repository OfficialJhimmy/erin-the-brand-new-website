'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Boxes, Cloud, Sparkles } from 'lucide-react'

interface Tool {
  name: string
  slug?: string // simple-icons slug — undefined means no real logo exists, see fallback below
  hex: string
}

// Real logos, sourced live from simple-icons via jsdelivr's CDN — nothing
// downloaded or stored in this project's assets. Every slug below was
// verified to actually exist before being used (checked against the
// simple-icons repo directly, not assumed). The simple-icons SVGs ship
// with no fill attribute, which means they render in their default black
// when loaded via a plain <img> tag — cross-origin SVGs loaded this way
// can't be recolored with CSS the way an inline SVG could. Rather than
// fight that, the design leans into it: logos sit monochrome by default
// (a common, deliberate pattern for tech-stack grids) and reveal each
// tool's real brand color only as a hover glow on the tile itself.
const CATEGORIES: { label: string; tools: Tool[] }[] = [
  {
    label: 'Frontend',
    tools: [
      { name: 'Next.js', slug: 'nextdotjs', hex: '000000' },
      { name: 'React', slug: 'react', hex: '61DAFB' },
      { name: 'TypeScript', slug: 'typescript', hex: '3178C6' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', hex: '06B6D4' },
    ],
  },
  {
    label: 'Backend & Infrastructure',
    tools: [
      { name: 'Python', slug: 'python', hex: '3776AB' },
      { name: 'FastAPI', slug: 'fastapi', hex: '009688' },
      { name: 'PostgreSQL', slug: 'postgresql', hex: '4169E1' },
      { name: 'Supabase', slug: 'supabase', hex: '3FCF8E' },
      { name: 'Docker', slug: 'docker', hex: '2496ED' },
      { name: 'AWS', hex: 'FF9900' }, // no real logo in simple-icons — see fallback
      { name: 'Git', slug: 'git', hex: 'F03C2E' },
      { name: 'GitHub', slug: 'github', hex: '181717' },
    ],
  },
  {
    label: 'AI & Machine Learning',
    tools: [
      { name: 'Claude', slug: 'claude', hex: 'D97757' },
      { name: 'OpenAI', hex: '412991' }, // no real logo in simple-icons — see fallback
      { name: 'LangChain', slug: 'langchain', hex: '7FC8FF' },
      { name: 'LangGraph', slug: 'langgraph', hex: '7FC8FF' },
    ],
  },
]

const FALLBACK_ICON: Record<string, typeof Boxes> = {
  AWS: Cloud,
  OpenAI: Sparkles,
}

function ToolTile({ tool, index }: { tool: Tool; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]"
      style={{ boxShadow: '0 0 0 0 transparent' }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at 50% 0%, #${tool.hex}14, transparent 70%)` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ borderColor: `#${tool.hex}` }}
        aria-hidden="true"
      />

      <span className="relative flex h-10 w-10 items-center justify-center">
        {tool.slug ? (
          <img
            src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tool.slug}.svg`}
            alt={`${tool.name} logo`}
            width={36}
            height={36}
            loading="lazy"
            className="h-9 w-9 object-contain"
          />
        ) : (
          (() => {
            const Icon = FALLBACK_ICON[tool.name]
            return <Icon className="h-7 w-7 text-muted" />
          })()
        )}
      </span>
      <span className="relative text-sm font-semibold text-foreground">{tool.name}</span>
    </motion.div>
  )
}

export default function AboutTools() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative py-24" style={{ background: '#FAFAFA' }}>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="section-label">Tools &amp; Technologies</span>
          <h2>What I Build With</h2>
          <p className="max-w-[55ch] text-[1.05rem]">
            The real stack behind the systems I design and ship, grouped by where each piece
            does its work.
          </p>
        </motion.div>

        <div className="mt-12 space-y-10">
          {CATEGORIES.map((category) => (
            <div key={category.label}>
              <span className="block text-xs font-bold uppercase tracking-[.1em] text-muted">{category.label}</span>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.tools.map((tool, i) => (
                  <ToolTile key={tool.name} tool={tool} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}