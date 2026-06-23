import type { Metadata } from 'next'
import PageHero            from '@/components/shared/PageHero'
import InsightsFeatured    from '@/components/insights/InsightsFeatured'
import InsightsArticles    from '@/components/insights/InsightsArticles'
import InsightsTopics      from '@/components/insights/InsightsTopics'
import InsightsWhy         from '@/components/insights/InsightsWhy'
import InsightsComingSoon  from '@/components/insights/InsightsComingSoon'
import ContactCTA          from '@/components/shared/ContactCTA'

export const metadata: Metadata = {
  title: 'Insights | Feyijimi Erinle',
  description:
    'Articles and insights on AI engineering, enterprise AI systems, workflow automation, architecture patterns, RAG systems, and AI adoption.',
}

export default function Insights() {
  return (
    <main>
      <PageHero
        badge="Insights & Writing"
        heading={
          <>
            Thoughts on AI Systems,
            <br className="hidden sm:block" /> Architecture, and Adoption
          </>
        }
        description="I write about the challenges of moving AI from experimentation to production, designing scalable systems, and helping organizations adopt AI successfully."
      />
      <InsightsFeatured />
      <InsightsArticles />
      <InsightsTopics />
      <InsightsWhy />
      <InsightsComingSoon />
      <ContactCTA
        heading="Interested In These Topics?"
        description="If you're exploring AI adoption, system architecture, or workflow automation, I'd be happy to connect."
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
    </main>
  )
}
