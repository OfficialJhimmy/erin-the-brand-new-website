import type { Metadata } from 'next'
import ResumeHero           from '@/components/resume/ResumeHero'
import ResumeSummary        from '@/components/resume/ResumeSummary'
import ResumeExpertise      from '@/components/resume/ResumeExpertise'
import ResumeExperience     from '@/components/resume/ResumeExperience'
import ResumeProjects       from '@/components/resume/ResumeProjects'
import ResumeTechStack      from '@/components/resume/ResumeTechStack'
import ResumeCertifications from '@/components/resume/ResumeCertifications'
import ResumeEducation      from '@/components/resume/ResumeEducation'
import ContactCTA           from '@/components/shared/ContactCTA'

export const metadata: Metadata = {
  title: 'Resume | Feyijimi Erinle',
  description:
    'Resume of Feyijimi Erinle, Lead AI Engineer and AI Systems Architect specializing in AI agents, workflow automation, enterprise AI systems, and cloud-native architecture.',
}

export default function Resume() {
  return (
    <main>
      <ResumeHero />
      <ResumeSummary />
      <ResumeExpertise />
      <ResumeExperience />
      <ResumeProjects />
      <ResumeTechStack />
      <ResumeCertifications />
      <ResumeEducation />
      <ContactCTA
        heading="Interested In Working Together?"
        description="I'm always open to discussing AI engineering, AI architecture, automation initiatives, and leadership opportunities."
        buttonText="Get In Touch"
        buttonHref="/contact"
      />
    </main>
  )
}
