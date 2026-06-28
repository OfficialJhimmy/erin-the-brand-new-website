import type { Metadata } from 'next'
import ArchitecturePrinciples    from '@/components/architecture/ArchitecturePrinciples'
import ArchitectureCaseStudies   from '@/components/architecture/ArchitectureCaseStudies'
import ArchitecturePatterns      from '@/components/architecture/ArchitecturePatterns'
import ArchitectureHero from '@/components/architecture/ArchitectureHero'
import EngagementTerminal from '@/components/home/EngagementTerminal'

export const metadata: Metadata = {
  title: 'Architecture | Feyijimi Erinle',
  description:
    'AI system architectures, enterprise knowledge systems, multi-agent platforms, workflow automation, and AI solution design.',
}

export default function Architecture() {
  return (
    <main>
      <ArchitectureHero/>
      <ArchitecturePrinciples />
      <ArchitectureCaseStudies />
      <ArchitecturePatterns />
      <EngagementTerminal/>
    </main>
  )
}
