import type { Metadata } from 'next'
import ContactServices       from '@/components/contact/ContactServices'
import ContactSocials        from '@/components/contact/ContactSocials'
import ContactOS from '@/components/contact/ContactOS'
import ContactProcess from '@/components/contact/ContactProcess'

export const metadata: Metadata = {
  title: 'Contact | Feyijimi Erinle',
  description:
    'Get in touch with Feyijimi Erinle for AI engineering, AI architecture, workflow automation, enterprise AI systems, and technical leadership opportunities.',
}

export default function Contact() {
  return (
    <main>
      <ContactOS />
      <ContactProcess/>
      <ContactSocials/>
    </main>
  )
}
