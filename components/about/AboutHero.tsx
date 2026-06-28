"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Boxes, Code2, Network, User } from "lucide-react";

const METRICS = [
  {
    value: "6+",
    label: "Years Building Software",
    icon: Code2,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    value: "20+",
    label: "AI Systems Designed",
    icon: Boxes,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    value: "Impact",
    label: "Business Outcomes That Scale",
    icon: Network,
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

const FLOATING_CARDS = [
  {
    title: "Engineer",
    body: "I build robust, scalable systems that solve real problems.",
    icon: Code2,
    position: "-top-6 -left-6 sm:-left-10",
    floatDelay: 0,
  },
  {
    title: "AI Architect",
    body: "I design intelligent architectures that drive business value.",
    icon: Boxes,
    position: "top-1/2 -right-6 -translate-y-1/2 sm:-right-12",
    floatDelay: 1.5,
  },
  {
    title: "Systems Thinker",
    body: "I focus on the bigger picture and long-term impact.",
    icon: Network,
    position: "-bottom-8 -left-4 sm:-left-12",
    floatDelay: 3,
  },
];

function Portrait() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: relY * -10, y: relX * 10 }); // *10 then clamped to ±5deg below
  }

  const rotateX = Math.max(-5, Math.min(5, tilt.x));
  const rotateY = Math.max(-5, Math.min(5, tilt.y));

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative mx-auto w-full max-w-[420px]"
      style={{ perspective: 1200 }}
    >
      {/* Breathing glow behind everything */}
      <motion.div
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[80px]"
        aria-hidden="true"
      />

      {/* Slow orbit rings */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="animate-[spin_80s_linear_infinite] rounded-full border border-accent/15"
          style={{ width: "115%", height: "115%" }}
        />
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="animate-[spin_80s_linear_infinite_reverse] rounded-full border border-dashed border-accent/10"
          style={{ width: "130%", height: "130%" }}
        />
      </div>

      {/* Faint blueprint dots */}
      <div
        className="pointer-events-none absolute -inset-10 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#FF8906 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />

      {/* Slowly drifting particles */}
      {[
        { top: "8%", left: "12%", delay: 0 },
        { top: "15%", left: "85%", delay: 2 },
        { top: "80%", left: "10%", delay: 4 },
        { top: "70%", left: "90%", delay: 1 },
      ].map((p, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -10, 0], x: [0, 6, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
          className="absolute h-1 w-1 rounded-full bg-accent"
          style={{ top: p.top, left: p.left }}
          aria-hidden="true"
        />
      ))}

      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, rotateX, rotateY }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          rotateX: { type: "spring", stiffness: 80, damping: 15 },
          rotateY: { type: "spring", stiffness: 80, damping: 15 },
        }}
        className="relative mx-auto aspect-[4/5] w-[78%] overflow-hidden rounded-[28px] border border-white/60 shadow-[0_30px_70px_rgba(255,137,6,0.18)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src="/assets/images/erin-headshot.png"
          alt="Feyijimi Erinle"
          fill
          sizes="(min-width: 1024px) 360px, 70vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Floating glass cards */}
      {FLOATING_CARDS.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: 1,
              y: [0, -6, 0, 6, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.8 + i * 0.2 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.floatDelay,
              },
            }}
            className={`absolute z-10 hidden w-[200px] rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)] backdrop-blur-md sm:block ${card.position}`}
          >
            <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
              <Icon className="h-4 w-4 text-accent" />
            </span>
            <p className="!mb-0.5 text-sm font-bold text-foreground">
              {card.title}
            </p>
            <p className="max-w-none text-xs leading-snug text-muted">
              {card.body}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-28 sm:pt-32">
      <div className="container relative mx-auto max-w-[1400px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-bold uppercase tracking-[.08em] text-foreground"
            >
              <User className="h-3.5 w-3.5 text-accent" />
              About Me
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="!mb-6 !mt-5 !text-[clamp(2.5rem,5.2vw,3.5rem)] !leading-[1.15]"
            >
              Building AI Systems That People Actually Use
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[620px] text-[1.05rem] leading-relaxed text-muted"
            >
              I&apos;m an AI Engineer, Software Engineer, and Systems Thinker
              focused on helping organizations successfully adopt AI through
              practical, scalable, and production-ready solutions.
            </motion.p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {METRICS.map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-border bg-white/90 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(255,137,6,0.1)]"
                  >
                    <span
                      className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${metric.bg}`}
                    >
                      <Icon className={`h-4 w-4 ${metric.color}`} />
                    </span>
                    <p className="!mb-0 font-heading text-xl font-bold text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-0.5 max-w-none text-xs leading-snug text-muted">
                      {metric.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <Link
                href="#journey"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[30px] bg-gradient-to-r from-orange-400 to-yellow-400 text-black text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                My Journey
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right */}
          <Portrait />
        </div>
      </div>
    </section>
  );
}
