import type { Metadata } from 'next'
import PageHero                  from '@/components/shared/PageHero'
import ArchitecturePrinciples    from '@/components/architecture/ArchitecturePrinciples'
import ArchitectureCaseStudies   from '@/components/architecture/ArchitectureCaseStudies'
import ArchitecturePatterns      from '@/components/architecture/ArchitecturePatterns'
import ContactCTA                from '@/components/shared/ContactCTA'

export const metadata: Metadata = {
  title: 'Architecture | Feyijimi Erinle',
  description:
    'AI system architectures, enterprise knowledge systems, multi-agent platforms, workflow automation, and AI solution design.',
}

export default function Architecture() {
  return (
    <main>
      <PageHero
        badge="Architecture Library"
        heading="Designing AI Systems Before Building Them"
        description="The difference between a successful AI initiative and a failed one usually isn't the model. It's the architecture. I focus on designing scalable systems, operational workflows, and implementation strategies that allow AI solutions to create real business value."
      />
      <ArchitecturePrinciples />
      <ArchitectureCaseStudies />
      <ArchitecturePatterns />
      <ContactCTA
        heading="Need Help Designing an AI System?"
        description="From architecture discovery to implementation, I help organizations design AI systems that are practical, scalable, and valuable."
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
    </main>
  )
}
