'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Dumbbell,
  GraduationCap,
  MessageCircle,
  Music2,
  Network,
  Plane,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react'

type Hue = 'blue' | 'violet' | 'emerald' | 'amber' | 'rose' | 'cyan' | 'indigo' | 'teal'

const HUES: Record<Hue, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600' },
}

// Pulled from two real sources: the existing "systems thinking / business
// strategy" framing already on this site, plus the personal interests
// (fitness, music, travel, community) confirmed from the live About page
// at erinhq.com — not invented for this redesign.
const INTERESTS: { label: string; icon: LucideIcon; hue: Hue }[] = [
  { label: 'Fitness', icon: Dumbbell, hue: 'rose' },
  { label: 'Music', icon: Music2, hue: 'violet' },
  { label: 'Travel & Exploration', icon: Plane, hue: 'cyan' },
  { label: 'Systems Thinking', icon: Network, hue: 'blue' },
  { label: 'Business Strategy', icon: TrendingUp, hue: 'amber' },
  { label: 'Continuous Learning', icon: GraduationCap, hue: 'emerald' },
  { label: 'Meaningful Conversations', icon: MessageCircle, hue: 'indigo' },
  { label: 'Community Building', icon: Users, hue: 'teal' },
]

// Real, working links confirmed from the live erinhq.com socials row —
// no placeholder URLs here.
const SOCIALS: { label: string; mark: string; handle: string; blurb: string; href: string; rotate: number }[] = [
  { label: 'LinkedIn', mark: 'in', handle: '@feyijimierinle', blurb: 'Professional updates and networking.', href: 'https://linkedin.com/in/feyijimierinle', rotate: -3 },
  { label: 'X', mark: 'x', handle: '@erinthebrand', blurb: 'Thoughts on AI, systems, and technology.', href: 'https://x.com/erinthebrand', rotate: 2 },
  { label: 'Instagram', mark: 'IG', handle: '@erinthebrand', blurb: 'Life beyond the screen — fitness, travel, and moments.', href: 'https://www.instagram.com/erinthebrand', rotate: -2 },
  { label: 'TikTok', mark: 'TT', handle: '@erinthebrand', blurb: 'Short-form takes on tech, creativity, and behind-the-scenes.', href: 'https://www.tiktok.com/@erinthebrand', rotate: 3 },
]

export default function AboutBeyond() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24"
      style={{ background: 'radial-gradient(circle at 25% 15%, rgba(251,146,60,0.07), transparent 50%), #FFFAF7' }}
    >
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="section-label">Beyond Technology</span>
          <h2>A Few Things About Me</h2>
          <p className="max-w-[60ch] text-[1.05rem] leading-relaxed">
            Outside of engineering, I&apos;m deeply interested in systems thinking, business
            strategy, and understanding how technology shapes organizations. But just as much, I
            love fitness, music, and discovering new places when I can, having meaningful
            conversations, and contributing to communities that help people grow.
          </p>
          <p className="mt-4 max-w-[60ch] text-[1.05rem] leading-relaxed">
            I believe the future belongs to people who can bridge technology, business, and human
            behavior, and growth, as an engineer, a builder, and a person, is the thread that
            connects all of it.
          </p>
        </motion.div>

        {/* Floating interest tags */}
        <div className="mt-10 flex flex-wrap gap-3">
          {INTERESTS.map((interest, i) => {
            const Icon = interest.icon
            const colors = HUES[interest.hue]
            return (
              <motion.span
                key={interest.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, scale: 1.04 }}
              >
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold ${colors.bg} ${colors.text}`}
                >
                  <Icon className="h-4 w-4" />
                  {interest.label}
                </motion.span>
              </motion.span>
            )
          })}
        </div>

        {/* Socials — the centerpiece this time, not a footer afterthought */}
        <div className="mt-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block text-xs font-bold uppercase tracking-[.1em] text-muted"
          >
            Find Me Elsewhere
          </motion.span>

          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {SOCIALS.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16, rotate: social.rotate }}
                whileInView={{ opacity: 1, y: 0, rotate: social.rotate }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
                className="block rounded-[18px] border border-border bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.1)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {social.mark}
                </span>
                <p className="!mb-0.5 !mt-3 text-sm font-bold text-foreground">{social.label}</p>
                <p className="text-xs font-medium text-accent">{social.handle}</p>
                <p className="mt-2 max-w-none text-xs leading-snug text-muted">{social.blurb}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}