'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

interface Belief {
  numeral: string
  title: string
  myth: string
  truth: string
}

// Myth/truth pairs are pulled directly out of the existing real copy for
// each belief (e.g. "The goal isn't deploying AI. The goal is creating
// measurable outcomes." already contains the contrast), restructured for
// presentation, not new claims.
const BELIEFS: Belief[] = [
  {
    numeral: 'I',
    title: 'AI Should Create Business Value',
    myth: 'The goal is deploying AI.',
    truth: 'The goal is creating measurable outcomes.',
  },
  {
    numeral: 'II',
    title: 'Automation Should Improve Work',
    myth: 'Automation removes people.',
    truth: 'Automation removes friction.',
  },
  {
    numeral: 'III',
    title: 'Architecture Matters More Than Models',
    myth: 'Most AI fails because of poor model selection.',
    truth: 'Most AI fails because of poor system design.',
  },
  {
    numeral: 'IV',
    title: 'Adoption Is The Real Challenge',
    myth: 'The best AI systems are the most advanced ones.',
    truth: 'The best AI systems are the ones people actually use.',
  },
]

function BeliefRow({ belief, index }: { belief: Belief; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <div
      ref={ref}
      className={`relative pb-12 pl-16 sm:pl-20 ${index < BELIEFS.length - 1 ? 'border-b border-white/10' : ''} ${
        index > 0 ? 'pt-12' : 'pt-2'
      }`}
    >
      <span
        className="pointer-events-none absolute left-0 top-2 select-none font-heading text-[5rem] font-bold leading-none text-white/[0.06] sm:text-[6.5rem]"
        aria-hidden="true"
      >
        {belief.numeral}
      </span>

      <span className="absolute left-[26px] top-7 z-10 h-3 w-3 rounded-full border-2 border-accent bg-[#15130E] sm:left-[34px]" aria-hidden="true" />

      <span className="block font-mono text-xs font-bold uppercase tracking-[.1em] text-white/40">{belief.title}</span>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-lg text-white/35 line-through decoration-white/25"
      >
        {belief.myth}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-2 max-w-[44ch] font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.2] text-white"
      >
        {belief.truth}
      </motion.p>
    </div>
  )
}

export default function AboutPhilosophy() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.4 })

  const spineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: spineRef, offset: ['start 0.75', 'end 0.4'] })
  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section data-nav-theme="dark" className="relative overflow-hidden py-24" style={{ background: '#15130E' }}>
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.07), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container relative max-w-3xl">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-accent">Philosophy</span>
          <h2 className="!mb-3 !mt-3 text-white">What I Believe About AI</h2>
          <p className="max-w-[55ch] text-[1.05rem] text-white/55">
            Four things I&apos;ve learned the hard way, building AI systems that actually work.
          </p>
        </motion.div>

        <div ref={spineRef} className="relative mt-14">
          {/* Static track + scroll-tied fill, the one mechanic carrying this section */}
          <div className="absolute left-[31px] top-2 bottom-2 w-px bg-white/10 sm:left-[39px]" aria-hidden="true" />
          <motion.div
            style={{ height: fillHeight }}
            className="absolute left-[31px] top-2 w-px bg-accent sm:left-[39px]"
            aria-hidden="true"
          />

          {BELIEFS.map((belief, i) => (
            <BeliefRow key={belief.numeral} belief={belief} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 max-w-[50ch] text-base text-white/45"
        >
          This is the lens I bring to every system I design, before a single line of code gets
          written.
        </motion.p>
      </div>
    </section>
  )
}