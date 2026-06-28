'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers } from 'lucide-react'

interface Message {
  from: 'you' | 'erin'
  text: string
  typingDelay?: number // ms of "typing…" shown before this message appears
}

// Not a step list, a conversation — this is literally what reaching out
// looks like, told in the order it actually happens, not a formal process
// diagram (the homepage and About page already each have one of those).
const MESSAGES: Message[] = [
  { from: 'you', text: "Hey, I've got an AI project I'd love to talk through." },
  { from: 'erin', text: 'I read every message myself, no bots, no account managers.', typingDelay: 1000 },
  { from: 'erin', text: "I'll get back to you within 24 hours, usually sooner." },
  { from: 'you', text: 'Sounds good. What happens after that?' },
  { from: 'erin', text: 'We hop on a quick call, no pitch deck, no pressure.', typingDelay: 1100 },
  { from: 'you', text: "What if I'm not totally sure what I need yet?" },
  { from: 'erin', text: "Totally normal, that's actually the most common starting point." },
  { from: 'erin', text: "I'll ask about your goals, constraints, and what success looks like. We figure out the rest together.", typingDelay: 1200 },
  { from: 'you', text: 'And if we decide to move forward?' },
  { from: 'erin', text: "I'll put together a clear plan and timeline. No surprises, no jargon.", typingDelay: 1000 },
]

function TypingDots() {
  return (
    <span className="flex items-center gap-1 px-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
          className="h-1.5 w-1.5 rounded-full bg-muted"
        />
      ))}
    </span>
  )
}

function ChatBubble({ message, index }: { message: Message; index: number }) {
  const [showTyping, setShowTyping] = useState(Boolean(message.typingDelay))
  const isErin = message.from === 'erin'

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4, delay: index * 0.4 }}
      onAnimationComplete={() => {
        if (message.typingDelay) {
          setTimeout(() => setShowTyping(false), message.typingDelay)
        }
      }}
      className={`flex items-end gap-2.5 ${isErin ? '' : 'flex-row-reverse'}`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          isErin ? 'bg-accent text-white' : 'bg-surface text-muted'
        }`}
      >
        {isErin ? <Layers className="h-3.5 w-3.5" /> : 'Y'}
      </span>

      <div
        className={`max-w-[80%] rounded-[18px] px-4 py-2.5 text-sm leading-snug ${
          isErin ? 'rounded-bl-[4px] bg-accent text-white' : 'rounded-br-[4px] bg-surface text-foreground'
        }`}
      >
        {showTyping ? <TypingDots /> : message.text}
      </div>
    </motion.div>
  )
}

export default function ContactProcess() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} className="relative py-24" style={{ background: '#F8FAFC' }}>
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="section-label">How It Works</span>
            <h2 className="!mb-5">What Happens When You Reach Out</h2>
            <p className="max-w-[44ch] text-[1.05rem] leading-relaxed">
              No forms to disappear into. Here&apos;s what actually happens next, told the way it
              actually goes.
            </p>
          </motion.div>

          {/* Right: chat */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-[560px] rounded-[24px] border border-border bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-8 lg:ml-auto"
          >
            <div className="flex flex-col gap-4">
              {MESSAGES.map((message, i) => (
                <ChatBubble key={i} message={message} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}