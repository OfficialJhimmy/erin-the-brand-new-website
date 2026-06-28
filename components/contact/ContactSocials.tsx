'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Social {
  name: string
  mark: string
  handle: string
  description: string
  href: string
  color: string // real flat brand hex — never used as a gradient
}

// Real platforms only, and only the ones not already covered by the
// contact methods above this section on the same page (LinkedIn and a
// website link already appear there) — X, Instagram, and TikTok are the
// ones that actually add something new here. All four links are real,
// confirmed against erinhq.com's own social row, not placeholders.
const SOCIALS: Social[] = [
  {
    name: 'LinkedIn',
    mark: 'in',
    handle: '@feyijimierinle',
    description: 'Professional updates and networking.',
    href: 'https://www.linkedin.com/in/feyijimierinle',
    color: '0A66C2',
  },
  {
    name: 'X',
    mark: 'X',
    handle: '@erinthebrand',
    description: 'Thoughts on AI, systems, and technology.',
    href: 'https://x.com/erinthebrand',
    color: '0A0A0A',
  },
  {
    name: 'Instagram',
    mark: 'IG',
    handle: '@erinthebrand',
    description: 'Life beyond the screen.',
    href: 'https://www.instagram.com/erinthebrand',
    color: 'E1306C',
  },
  {
    name: 'TikTok',
    mark: 'TT',
    handle: '@erinthebrand',
    description: 'Short-form takes on tech and creativity.',
    href: 'https://www.tiktok.com/@erinthebrand',
    color: '0A0A0A',
  },
]

function FlipCard({ social, index }: { social: Social; index: number }) {
  const [flipped, setFlipped] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  // A brief, automatic flip-and-settle once the card enters view — a quick
  // preview that hints "this flips" before the visitor has to discover it
  // by hovering.
  useEffect(() => {
    if (!inView) return
    const peek = setTimeout(() => setFlipped(true), 400 + index * 250)
    const settle = setTimeout(() => setFlipped(false), 1300 + index * 250)
    return () => {
      clearTimeout(peek)
      clearTimeout(settle)
    }
  }, [inView, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative h-[200px]"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-[20px] border border-border bg-white"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full text-base font-bold text-white"
            style={{ backgroundColor: `#${social.color}` }}
          >
            {social.mark}
          </span>
          <p className="!mb-0 text-sm font-bold text-foreground">{social.name}</p>
        </div>

        {/* Back */}
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex flex-col justify-between rounded-[20px] border p-5"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderColor: `#${social.color}33`,
            background: `#${social.color}08`,
          }}
        >
          <div>
            <p className="!mb-0.5 text-sm font-bold" style={{ color: `#${social.color}` }}>
              {social.name}
            </p>
            <p className="text-xs font-medium text-muted">{social.handle}</p>
            <p className="mt-2 max-w-none text-xs leading-snug text-foreground">{social.description}</p>
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: `#${social.color}` }}>
            Visit
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
      </motion.div>
    </motion.div>
  )
}

export default function ContactSocials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative py-24" style={{ background: '#FFFFFF' }}>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label">Elsewhere Online</span>
          <h2>Find Me Around The Internet</h2>
          <p className="mx-auto max-w-[46ch] text-[1.05rem] leading-relaxed">
            Hover a card to see what&apos;s actually there.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
          {SOCIALS.map((social, i) => (
            <FlipCard key={social.name} social={social} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}