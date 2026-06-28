// 'use client'

// import { useRef } from 'react'
// import Link from 'next/link'
// import { motion, useInView } from 'framer-motion'
// import { ArrowUpRight, Bot, Database, UserCheck, Workflow, type LucideIcon } from 'lucide-react'

// interface Pattern {
//   index: string
//   title: string
//   description: string
//   icon: LucideIcon
//   usedIn: string
//   href: string
// }

// // Each pattern links back to the actual case study that demonstrates it —
// // these aren't abstract concepts, they're what Kora, Quill, and Atlas
// // actually are. "Automation Pipelines" doesn't get a single owner since
// // ingestion, generation, and orchestration all involve it; it points at
// // the case studies section as a whole rather than forcing a single link.
// const PATTERNS: Pattern[] = [
//   {
//     index: '01',
//     title: 'Retrieval-Augmented Generation',
//     description: 'Enterprise knowledge systems powered by retrieval and contextual reasoning.',
//     icon: Database,
//     usedIn: 'Used in Kora',
//     href: '/architecture#kora',
//   },
//   {
//     index: '02',
//     title: 'Agentic Workflows',
//     description: 'Multi-step systems capable of reasoning, planning, and executing tasks.',
//     icon: Bot,
//     usedIn: 'Used in Atlas',
//     href: '/architecture#atlas',
//   },
//   {
//     index: '03',
//     title: 'Human-In-The-Loop Systems',
//     description: 'AI systems designed for oversight, quality control, and governance.',
//     icon: UserCheck,
//     usedIn: 'Used in Quill',
//     href: '/architecture#quill',
//   },
//   {
//     index: '04',
//     title: 'Automation Pipelines',
//     description: 'End-to-end workflow automation connecting multiple business systems.',
//     icon: Workflow,
//     usedIn: 'Used across all systems',
//     href: '/architecture#case-studies',
//   },
// ]

// function PatternRow({ pattern, index }: { pattern: Pattern; index: number }) {
//   const Icon = pattern.icon
//   const ref = useRef<HTMLDivElement>(null)
//   const inView = useInView(ref, { once: true, amount: 0.4 })

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 24 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.08 }}
//     >
//       <Link
//         href={pattern.href}
//         className="group block border-t border-white/[0.08] py-9 transition-colors duration-300 first:border-t-0 hover:bg-white/[0.02]"
//       >
//         <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
//           <span className="font-mono text-sm text-white/30">{pattern.index}</span>

//           <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-accent/40">
//             <Icon className="h-[1.125rem] w-[1.125rem] text-accent" />
//           </span>

//           <div className="flex-1">
//             <h3 className="!mb-0 inline !text-2xl text-white">
//               <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
//                 {pattern.title}
//               </span>
//             </h3>
//             <p className="mt-2 max-w-[60ch] text-sm text-white/45 transition-colors duration-300 group-hover:text-white/65">
//               {pattern.description}
//             </p>
//           </div>

//           <span className="flex shrink-0 items-center gap-1.5 self-start text-xs font-semibold text-white/40 transition-colors duration-300 group-hover:text-accent sm:self-center">
//             {pattern.usedIn}
//             <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//           </span>
//         </div>
//       </Link>
//     </motion.div>
//   )
// }

// export default function ArchitecturePatterns() {
//   const ref = useRef<HTMLDivElement>(null)
//   const inView = useInView(ref, { once: true, amount: 0.2 })

//   return (
//     <section ref={ref} className="relative py-24" style={{ background: '#0A0C10' }}>
//       <div className="container relative">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-accent">Patterns</span>
//           <h2 className="!mb-3 !mt-3 text-white">Architecture Patterns I Frequently Use</h2>
//           <p className="max-w-[55ch] text-[1.05rem] text-white/55">
//             Not abstractions. Each one is something I&apos;ve actually shipped, click through to see where.
//           </p>
//         </motion.div>

//         <div className="mt-10">
//           {PATTERNS.map((pattern, i) => (
//             <PatternRow key={pattern.index} pattern={pattern} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Bot, Database, UserCheck, Workflow, type LucideIcon } from 'lucide-react'

interface Pattern {
  index: string
  title: string
  description: string
  icon: LucideIcon
  usedIn: string
  href: string
}

// Each pattern links back to the actual case study that demonstrates it —
// these aren't abstract concepts, they're what Kora, Quill, and Atlas
// actually are. "Automation Pipelines" doesn't get a single owner since
// ingestion, generation, and orchestration all involve it; it points at
// the case studies section as a whole rather than forcing a single link.
const PATTERNS: Pattern[] = [
  {
    index: '01',
    title: 'Retrieval-Augmented Generation',
    description: 'Enterprise knowledge systems powered by retrieval and contextual reasoning.',
    icon: Database,
    usedIn: 'Used in Kora',
    href: '/architecture#kora',
  },
  {
    index: '02',
    title: 'Agentic Workflows',
    description: 'Multi-step systems capable of reasoning, planning, and executing tasks.',
    icon: Bot,
    usedIn: 'Used in Atlas',
    href: '/architecture#atlas',
  },
  {
    index: '03',
    title: 'Human-In-The-Loop Systems',
    description: 'AI systems designed for oversight, quality control, and governance.',
    icon: UserCheck,
    usedIn: 'Used in Quill',
    href: '/architecture#quill',
  },
  {
    index: '04',
    title: 'Automation Pipelines',
    description: 'End-to-end workflow automation connecting multiple business systems.',
    icon: Workflow,
    usedIn: 'Used across all systems',
    href: '/architecture#case-studies',
  },
]

function PatternRow({ pattern, index }: { pattern: Pattern; index: number }) {
  const Icon = pattern.icon
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link
        href={pattern.href}
        className="group block border-t border-border py-9 px-4 transition-colors duration-300 first:border-t-0 hover:bg-white/60"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <span className="font-mono text-sm text-muted/70">{pattern.index}</span>

          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-white transition-colors duration-300 group-hover:border-accent/40">
            <Icon className="h-[1.125rem] w-[1.125rem] text-accent" />
          </span>

          <div className="flex-1">
            <h3 className="!mb-0 inline !text-2xl text-foreground">
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                {pattern.title}
              </span>
            </h3>
            <p className="mt-2 max-w-[60ch] text-sm text-muted transition-colors duration-300 group-hover:text-foreground/80">
              {pattern.description}
            </p>
          </div>

          <span className="flex shrink-0 items-center gap-1.5 self-start text-xs font-semibold text-muted transition-colors duration-300 group-hover:text-accent sm:self-center">
            {pattern.usedIn}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ArchitecturePatterns() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-24"
      style={{ background: 'radial-gradient(circle at 50% 0%, rgba(251,191,36,0.06), transparent 60%), #FDFBF7' }}
    >
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-accent">Patterns</span>
          <h2 className="!mb-3 !mt-3">Architecture Patterns I Frequently Use</h2>
          <p className="max-w-[55ch] text-[1.05rem]">
            Not abstractions. Each one is something I&apos;ve actually shipped, click through to see where.
          </p>
        </motion.div>

        <div className="mt-10">
          {PATTERNS.map((pattern, i) => (
            <PatternRow key={pattern.index} pattern={pattern} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}