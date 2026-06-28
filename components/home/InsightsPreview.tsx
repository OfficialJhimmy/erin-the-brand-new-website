'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ARTICLES, categoryStyle } from '@/lib/insights-data'

const PREVIEW_COUNT = 3

export default function InsightsPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const preview = ARTICLES.slice(0, PREVIEW_COUNT)

  return (
    <section ref={ref} className="section py-[60px] lg:py-[120px]">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label">INSIGHTS</span>
            <h2>
              Research &amp; <span className="text-accent">Insights</span>
            </h2>
            <p className="mt-3 max-w-[50ch]">
              Frameworks and patterns from building AI products and shipping systems that scale.
            </p>
          </div>

          <Link
            href="/insights"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover sm:inline-flex"
          >
            View All Research
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 rounded-[24px] border border-border bg-surface">
          {preview.map((article, i) => {
            const cat = categoryStyle(article.category)
            const Icon = cat.icon

            return (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-b border-border last:border-b-0"
              >
                <a
                  href={article.href}
                  className="group flex items-center gap-4 px-6 py-5 transition-all duration-300 hover:translate-x-2 hover:bg-surface-light"
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${cat.iconBg}`}>
                    <Icon className={`h-5 w-5 ${cat.iconColor}`} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="mb-0.5 block text-xs font-bold uppercase tracking-[.08em] text-muted">
                      {article.category}
                    </span>
                    <h3 className="!mb-0 truncate !text-base transition-colors group-hover:text-accent">
                      {article.title}
                    </h3>
                    <p className="mt-0.5 hidden max-w-none truncate text-sm sm:block">{article.description}</p>
                  </span>

                  <span className="hidden shrink-0 text-sm text-muted md:inline">{article.readTime}</span>

                  <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                </a>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/insights" className="btn-secondary">
            View All Research
          </Link>
        </div>
      </div>
    </section>
  )
}