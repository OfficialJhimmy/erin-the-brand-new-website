import type { Metadata } from 'next'
import PageHero        from '@/components/shared/PageHero'
import AboutJourney    from '@/components/about/AboutJourney'
import AboutPhilosophy from '@/components/about/AboutPhilosophy'
import AboutProcess    from '@/components/about/AboutProcess'
import AboutExperience from '@/components/about/AboutExperience'
import AboutBeyond     from '@/components/about/AboutBeyond'
import ContactCTA      from '@/components/shared/ContactCTA'

export const metadata: Metadata = {
  title: 'About | Feyijimi Erinle',
  description:
    'Learn about Feyijimi Erinle, Lead AI Engineer and AI Systems Architect specializing in AI agents, workflow automation, enterprise knowledge systems, and AI solution architecture.',
}

export default function About() {
  return (
    <main>
      <PageHero
        badge="About Me"
        heading="Building AI Systems That People Actually Use"
        description="I'm an AI Engineer, Software Engineer, and Systems Thinker focused on helping organizations successfully adopt AI through practical, scalable, and production-ready solutions."
      />
      <AboutJourney />
      <AboutPhilosophy />
      <AboutProcess />
      <AboutExperience />
      <AboutBeyond />
      <ContactCTA
        heading="Let's Connect"
        description="Whether you're building an AI product, exploring automation opportunities, or looking for engineering leadership, I'd love to hear from you."
        buttonText="Get In Touch"
        buttonHref="/contact"
      />
    </main>
  )
}
