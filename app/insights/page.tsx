import ResearchInsights from '@/components/insights/ResearchInsights'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights | Feyijimi Erinle',
  description:
    'Articles and insights on AI engineering, enterprise AI systems, workflow automation, architecture patterns, RAG systems, and AI adoption.',
}

export default function Insights() {
  return (
    <main>
      <ResearchInsights />
    </main>
  )
}