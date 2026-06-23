import type { Metadata } from 'next'
import PageHero              from '@/components/shared/PageHero'
import ContactInfo           from '@/components/contact/ContactInfo'
import ContactServices       from '@/components/contact/ContactServices'
import ContactOpportunities  from '@/components/contact/ContactOpportunities'
import ContactSocials        from '@/components/contact/ContactSocials'
import ContactCTA            from '@/components/shared/ContactCTA'

export const metadata: Metadata = {
  title: 'Contact | Feyijimi Erinle',
  description:
    'Get in touch with Feyijimi Erinle for AI engineering, AI architecture, workflow automation, enterprise AI systems, and technical leadership opportunities.',
}

export default function Contact() {
  return (
    <main>
      <PageHero
        badge="Let's Connect"
        heading={
          <>
            Building AI Systems, Products,
            <br className="hidden sm:block" /> and Intelligent Workflows
          </>
        }
        description="Whether you're exploring AI adoption, designing a new AI product, implementing workflow automation, or hiring for a technical leadership role, I'd love to hear from you."
      />
      <ContactInfo />
      <ContactServices />
      <ContactOpportunities />
      <ContactSocials />
      <ContactCTA
        heading="Let's Build Something Meaningful"
        description="The most valuable AI systems aren't the most advanced. They're the ones that solve real problems."
        buttonText="Email Me"
        buttonHref="mailto:erinlejhimmy@gmail.com"
        external
      />
    </main>
  )
}
