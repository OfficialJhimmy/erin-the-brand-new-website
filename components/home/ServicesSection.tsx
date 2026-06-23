'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

/* ═══════════════════════════════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════════════════════════════ */

const IconBrain = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
)

const IconBolt = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)

const IconDatabase = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
  </svg>
)

const IconChart = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)

const IconRobot = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <circle cx="12" cy="5" r="2"/>
    <path d="M12 7v4"/>
    <circle cx="8.5" cy="15.5" r="1" fill="currentColor"/>
    <circle cx="15.5" cy="15.5" r="1" fill="currentColor"/>
    <path d="M8 19h8"/>
  </svg>
)

const IconCheck = () => (
  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
)

/* ═══════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════ */

const leftItems = [
  { Icon: IconBrain,    text: 'Systems that reason.'         },
  { Icon: IconBolt,     text: 'Workflows that run.'          },
  { Icon: IconDatabase, text: 'Knowledge that scales.'       },
  { Icon: IconChart,    text: 'Decisions that drive impact.' },
]

const capabilities = [
  { id: 0, title: 'AI Agents',                    desc: 'Autonomous systems that reason, plan, and execute complex workflows.',                     Icon: IconRobot    },
  { id: 1, title: 'Workflow Automation',           desc: 'Automation platforms that reduce manual effort and accelerate operations.',                Icon: IconBolt     },
  { id: 2, title: 'Enterprise Knowledge Systems',  desc: 'AI-powered knowledge platforms built on organizational data and expertise.',               Icon: IconDatabase },
  { id: 3, title: 'Decision Intelligence',         desc: 'Multi-agent systems supporting research, analysis, and strategic decision-making.',        Icon: IconChart    },
]

/* Architecture viz — SVG coordinate space */
const VIZ_W  = 186
const VIZ_H  = 360
const CENTER = { x: 93, y: 180 }
const vizNodes = [
  { id: 0, x: 146, y: 46,  Icon: IconRobot    },
  { id: 1, x: 160, y: 178, Icon: IconBolt     },
  { id: 2, x: 16,  y: 178, Icon: IconDatabase },
  { id: 3, x: 130, y: 308, Icon: IconChart    },
]

const TERMINAL_TEXT = '> initializing_capabilities.exe'

/* ═══════════════════════════════════════════════════════════════════════
   BACKGROUND MESH
═══════════════════════════════════════════════════════════════════════ */

function BackgroundMesh() {
  const dots: React.ReactNode[] = []
  for (let col = 0; col <= 22; col++) {
    for (let row = 0; row <= 14; row++) {
      dots.push(<circle key={`${col}-${row}`} cx={col * 48} cy={row * 40} r="1.4" fill="#2563EB" />)
    }
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" opacity="0.04">
        {dots}
        <path d="M0 300 Q250 240 500 300 Q750 360 1000 300" stroke="#2563EB" strokeWidth="1" fill="none"/>
        <path d="M0 350 Q250 290 500 350 Q750 410 1000 350" stroke="#2563EB" strokeWidth="1" fill="none"/>
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   ARCHITECTURE VIZ
═══════════════════════════════════════════════════════════════════════ */

function ArchViz({ activeNode, triggered }: { activeNode: number | null; triggered: boolean }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: VIZ_W, height: VIZ_H }} aria-hidden="true">

      {/* SVG layer — connection lines + midpoint dots */}
      <svg
        viewBox={`0 0 ${VIZ_W} ${VIZ_H}`}
        width={VIZ_W}
        height={VIZ_H}
        className="absolute inset-0"
        overflow="visible"
      >
        {vizNodes.map((node, i) => {
          const isActive = activeNode === node.id
          const dimmed   = activeNode !== null && !isActive
          const nx = node.x + 16   // node icon centre-x
          const ny = node.y + 16   // node icon centre-y
          const mx = (CENTER.x + nx) / 2
          const my = (CENTER.y + ny) / 2

          return (
            <g key={node.id}>
              <motion.path
                d={`M ${CENTER.x} ${CENTER.y} L ${nx} ${ny}`}
                stroke={isActive ? '#2563EB' : '#DBEAFE'}
                strokeWidth={isActive ? 1.8 : 1}
                fill="none"
                strokeDasharray="4 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={triggered ? { pathLength: 1, opacity: dimmed ? 0.2 : 0.9 } : {}}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.12 }}
              />
              <motion.circle
                cx={mx} cy={my} r="2.5"
                fill={isActive ? '#2563EB' : '#BFDBFE'}
                initial={{ scale: 0, opacity: 0 }}
                animate={triggered ? { scale: 1, opacity: dimmed ? 0.2 : 1 } : {}}
                transition={{ duration: 0.35, delay: 0.75 + i * 0.12 }}
              />
            </g>
          )
        })}
      </svg>

      {/* Center core — pulsing circle */}
      <div className="absolute" style={{ left: CENTER.x - 14, top: CENTER.y - 14 }}>
        <motion.div
          className="w-7 h-7 rounded-full bg-accent"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 0 0px rgba(37,99,235,0.4)',
              '0 0 0 10px rgba(37,99,235,0)',
              '0 0 0 0px rgba(37,99,235,0)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Surrounding icon nodes */}
      {vizNodes.map((node, i) => {
        const isActive = activeNode === node.id
        const dimmed   = activeNode !== null && !isActive
        return (
          <motion.div
            key={node.id}
            className="absolute"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={triggered ? { opacity: dimmed ? 0.3 : 1, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.55 + i * 0.12 }}
          >
            <div className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-200 ${
              isActive
                ? 'bg-accent text-white border-accent shadow-[0_0_0_4px_rgba(37,99,235,0.15)]'
                : 'bg-white border-[#EAEAEA] text-accent'
            }`}>
              <node.Icon size={15} />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════════════════════ */

export default function ServicesSection() {
  const sectionRef              = useRef<HTMLElement>(null)
  const isInView                = useInView(sectionRef, { once: true, margin: '-80px' })
  const [typed, setTyped]       = useState('')
  const [showStatus, setStatus] = useState(false)
  const [showCaps, setShowCaps] = useState(false)
  const [activeNode, setActive] = useState<number | null>(null)

  /* Typing animation — fires once section enters viewport */
  useEffect(() => {
    if (!isInView) return
    let i = 0
    const id = setInterval(() => {
      setTyped(TERMINAL_TEXT.slice(0, i))
      i++
      if (i > TERMINAL_TEXT.length) {
        clearInterval(id)
        setTimeout(() => setStatus(true),  350)
        setTimeout(() => setShowCaps(true), 750)
      }
    }, 40)
    return () => clearInterval(id)
  }, [isInView])

  const ease = 'easeOut' as const

  return (
    <section ref={sectionRef} className="relative py-[120px] bg-white overflow-hidden">
      <BackgroundMesh />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.18fr] gap-12 xl:gap-20 items-start">

          {/* ── LEFT COLUMN ──────────────────────────────────────────── */}
          <div>
            {/* Label */}
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.18em]">
                What I Do
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="!mb-5 text-[#0A0A0A] leading-[1.12]"
              style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.2rem)' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
            >
              Building AI Systems
              <br />That Solve Real
              <br />Business Problems
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-[#525252] text-[0.975rem] leading-[1.75] max-w-[40ch] mb-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
            >
              I architect and build intelligent systems that think, automate, and empower
              organizations to move faster and make smarter decisions.
            </motion.p>

            {/* Capability statements */}
            <div className="flex flex-col gap-5">
              {leftItems.map(({ Icon, text }, i) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-3.5 cursor-default group"
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: 0.28 + i * 0.1, ease }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    activeNode === i
                      ? 'bg-accent text-white border-accent shadow-[0_0_0_4px_rgba(37,99,235,0.12)]'
                      : 'bg-[#F4F8FF] text-accent border-[#E6EEFF]'
                  }`}>
                    <Icon size={17} />
                  </div>
                  <span className={`text-[0.925rem] font-medium transition-colors duration-150 ${
                    activeNode === i ? 'text-[#0A0A0A]' : 'text-[#525252]'
                  }`}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — TERMINAL PANEL ────────────────────────── */}
          <motion.div
            className="rounded-[32px] border border-[#EAEAEA] bg-white overflow-hidden"
            style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)' }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-2 px-6 pt-5 pb-4 border-b border-[#F0F0F0]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>

            {/* Terminal header row */}
            <div className="flex items-center justify-between gap-4 px-6 py-3.5 border-b border-[#F0F0F0]">
              <span className="font-mono text-[0.78rem] text-[#0A0A0A] min-h-[1.2em]">
                {typed}
                {typed.length < TERMINAL_TEXT.length && (
                  <motion.span
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.499, 0.5, 1], ease: 'linear' }}
                    className="inline-block w-[6px] h-[12px] bg-[#0A0A0A] ml-px align-middle"
                  />
                )}
              </span>

              {showStatus && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-1.5 text-[0.72rem] font-medium text-[#525252] shrink-0"
                >
                  system.online
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#22C55E] inline-block"
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.div>
              )}
            </div>

            {/* Body — capability list + architecture viz */}
            <div className="flex">

              {/* Capability list */}
              <div className="flex-1 min-w-0 divide-y divide-[#F6F6F6]">
                {capabilities.map(({ id, title, desc }, i) => (
                  <motion.div
                    key={id}
                    className={`px-6 py-4 cursor-default transition-colors duration-150 ${
                      activeNode === id ? 'bg-[#F6F9FF]' : 'hover:bg-[#FAFAFA]'
                    }`}
                    initial={{ opacity: 0, x: -14 }}
                    animate={showCaps ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.11, ease }}
                    onMouseEnter={() => setActive(id)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <div className="flex items-start gap-3">
                      <IconCheck />
                      <div>
                        <p className={`text-[0.83rem] font-semibold leading-tight mb-1 max-w-none transition-colors duration-150 ${
                          activeNode === id ? 'text-accent' : 'text-[#0A0A0A]'
                        }`}>
                          {title}
                        </p>
                        <p className="text-[0.75rem] text-[#525252] leading-relaxed max-w-none">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Terminal footer */}
                <div className="px-6 py-4 font-mono text-[0.72rem] text-[#888]">
                  <span className="text-accent font-semibold">{'>'}</span>
                  {' system.ready '}
                  <motion.span
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.499, 0.5, 1], ease: 'linear' }}
                    className="inline-block w-[5px] h-[10px] bg-[#888] ml-px align-middle"
                  />
                </div>
              </div>

              {/* Architecture viz — hidden on mobile */}
              <div className="hidden lg:flex items-center justify-center border-l border-[#F0F0F0] px-2">
                <ArchViz activeNode={activeNode} triggered={showCaps} />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
