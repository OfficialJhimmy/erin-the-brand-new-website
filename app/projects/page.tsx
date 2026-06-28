import type { Metadata } from 'next'
import ProjectCaseStudies  from '@/components/projects/ProjectCaseStudies'
import ProjectLessons      from '@/components/projects/ProjectLessons'
import ProjectsHero from '@/components/projects/ProjectsHero'
import ProjectCaseStudiesShowcase from '@/components/projects/ProjectCaseStudiesShowcase'
import EngagementTerminal from '@/components/home/EngagementTerminal'

export const metadata: Metadata = {
  title: 'Projects | Feyijimi Erinle',
  description:
    'AI projects, enterprise knowledge systems, workflow automation platforms, multi-agent architectures, and production AI implementations.',
}

export default function Projects() {
  return (
    <main>
      <ProjectsHero />
      <ProjectCaseStudiesShowcase/>
      {/* <ProjectCaseStudies /> */}
      <ProjectLessons />
      <EngagementTerminal/>
    </main>
  )
}