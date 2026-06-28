import type { Metadata } from 'next'
import AboutHero        from '@/components/about/AboutHero'
import AboutJourney    from '@/components/about/AboutJourney'
import AboutPhilosophy from '@/components/about/AboutPhilosophy'
import AboutProcess    from '@/components/about/AboutProcess'
import AboutBeyond     from '@/components/about/AboutBeyond'
import EngagementTerminal from '@/components/home/EngagementTerminal'
import ExperienceTimeline from '@/components/home/ExperienceTimeline'
import AboutTools from '@/components/about/AboutTools'
import AboutSpecialization from '@/components/about/AboutSpecialization'

export const metadata: Metadata = {
  title: 'About | Feyijimi Erinle',
  description:
    'Learn about Feyijimi Erinle, Lead AI Engineer and AI Systems Architect specializing in AI agents, workflow automation, enterprise knowledge systems, and AI solution architecture.',
}

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutJourney />
      <ExperienceTimeline/>
      <AboutTools />
      <AboutSpecialization />
      <AboutPhilosophy />
      <AboutProcess />
      <AboutBeyond />
      <EngagementTerminal/>
    </main>
  )
}