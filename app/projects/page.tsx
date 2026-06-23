import type { Metadata } from 'next'
import PageHero            from '@/components/shared/PageHero'
import ProjectCaseStudies  from '@/components/projects/ProjectCaseStudies'
import ProjectCapabilities from '@/components/projects/ProjectCapabilities'
import ProjectLessons      from '@/components/projects/ProjectLessons'
import ContactCTA          from '@/components/shared/ContactCTA'

export const metadata: Metadata = {
  title: 'Projects | Feyijimi Erinle',
  description:
    'AI projects, enterprise knowledge systems, workflow automation platforms, multi-agent architectures, and production AI implementations.',
}

export default function Projects() {
  return (
    <main>
      <PageHero
        badge="Selected Work"
        heading="Building AI Systems That Deliver Real Outcomes"
        description="My work focuses on designing and deploying AI systems that improve operations, accelerate decision-making, and help organizations unlock value from their data."
      />
      <ProjectCaseStudies />
      <ProjectCapabilities />
      <ProjectLessons />
      <ContactCTA
        heading="Interested In Building Something Similar?"
        description="Whether you're exploring AI adoption, workflow automation, enterprise knowledge systems, or multi-agent architectures, I'd be happy to discuss your goals."
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
    </main>
  )
}
