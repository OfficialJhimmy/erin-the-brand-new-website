'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Compass, Mail, MessageSquare, type LucideIcon } from 'lucide-react'

type Accent = 'blue' | 'violet' | 'amber' | 'emerald'

const ACCENTS: Record<Accent, { bg: string; text: string; glow: string }> = {
  blue: { bg: 'bg-accent', text: 'text-accent', glow: 'rgba(37,99,235,0.18)' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-600', glow: 'rgba(139,92,246,0.18)' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', glow: 'rgba(245,158,11,0.18)' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', glow: 'rgba(16,185,129,0.18)' },
}

interface EngagementCard {
  title: string
  description: string
  icon: LucideIcon
  accent: Accent
  href: string
  external?: boolean
}

const CARDS: EngagementCard[] = [
  {
    title: 'Book a Call',
    description: 'A focused conversation about your goals.',
    icon: Calendar,
    accent: 'blue',
    href: '#contact-form',
  },
  {
    title: 'Discuss a Project',
    description: 'Tell me what you\u2019re building.',
    icon: MessageSquare,
    accent: 'violet',
    href: '#contact-form',
  },
  {
    title: 'Just Say Hi',
    description: 'No agenda needed.',
    icon: Mail,
    accent: 'amber',
    href: 'mailto:erinlejhimmy@gmail.com',
    external: true,
  },
  {
    title: 'Explore My Work',
    description: 'See what I\u2019ve actually shipped.',
    icon: Compass,
    accent: 'emerald',
    href: '/projects',
  },
]

function MagneticCard({ card, index }: { card: EngagementCard; index: number }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const colors = ACCENTS[card.accent]
  const Icon = card.icon

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5
    setOffset({ x: relX * 16, y: relY * 16 }) // *16 then clamped to ±8 below
  }

  const x = Math.max(-8, Math.min(8, offset.x))
  const y = Math.max(-8, Math.min(8, offset.y))

  const content = (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="group relative h-full"
    >
      <motion.div
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        className="relative flex h-full flex-col justify-between rounded-[22px] border border-border bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300 group-hover:shadow-[0_20px_44px_var(--glow)]"
        style={{ '--glow': colors.glow } as React.CSSProperties}
      >
        <div>
          <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${colors.bg}`}>
            <Icon className="h-5 w-5 text-white" />
          </span>
          <h3 className="!mb-1.5 !mt-4 !text-lg">{card.title}</h3>
          <p className="max-w-none text-sm">{card.description}</p>
        </div>
        <ArrowUpRight className={`mt-4 h-4 w-4 ${colors.text} transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1`} />
      </motion.div>
    </motion.div>
  )

  if (card.external) {
    return (
      <a href={card.href} className="block h-full">
        {content}
      </a>
    )
  }

  return (
    <Link href={card.href} className="block h-full">
      {content}
    </Link>
  )
}

export default function ContactHero() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section ref={ref} className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 15% 10%, rgba(37,99,235,0.07), transparent 40%), radial-gradient(circle at 85% 15%, rgba(139,92,246,0.06), transparent 40%), radial-gradient(circle at 50% 90%, rgba(245,158,11,0.05), transparent 45%), #FFFFFF',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#0A0A0A 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        aria-hidden="true"
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[.1em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Let&apos;s Talk
          </span>

          <h1 className="!mb-5 !mt-4 !text-[clamp(2.25rem,5vw,3.75rem)]">
            Have An Idea? <br />
            Let&apos;s <span className="bg-gradient-to-r from-accent to-violet-500 bg-clip-text text-transparent">Talk It Through.</span>
          </h1>

          <p className="mx-auto max-w-[50ch] text-[1.05rem] leading-relaxed">
            Pick whichever feels right, there&apos;s no wrong way to start a conversation. I
            usually reply within a day.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <MagneticCard key={card.title} card={card} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-10 flex max-w-4xl items-center justify-center gap-3 rounded-full border border-green-500/20 bg-green-50/50 px-5 py-3"
        >
          <motion.span
            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-2 shrink-0 rounded-full bg-green-500"
          />
          <span className="text-xs font-bold uppercase tracking-[.05em] text-green-700">
            Available for New Engagements
          </span>
        </motion.div>
      </div>
    </section>
  )
}