import type { Metadata } from 'next'
import './globals.css'
import { satoshi, generalSans } from './fonts'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Replace with the site's real deployed domain before going live — every
// Open Graph URL, the canonical base, and the sitemap/robots files below
// all depend on this being correct.
const SITE_URL = 'https://www.erinhq.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Feyijimi Erinle | AI Systems Architect & Lead AI Engineer',
    template: '%s | Feyijimi Erinle',
  },
  description:
    'Feyijimi Erinle (Erin) is a Lead AI Engineer and AI Systems Architect helping startups and enterprise teams design and deploy AI agents, enterprise knowledge systems, workflow automation platforms, and decision intelligence solutions.',
  keywords: [
    'AI Engineer',
    'AI Systems Architect',
    'Lead AI Engineer',
    'AI Agents',
    'RAG Systems',
    'Enterprise RAG',
    'LangGraph',
    'LangChain',
    'Multi-Agent Systems',
    'Workflow Automation',
    'AI Solution Architecture',
    'Decision Intelligence',
    'Feyijimi Erinle',
    'Erin The Brand',
  ],
  authors: [{ name: 'Feyijimi Erinle', url: SITE_URL }],
  creator: 'Feyijimi Erinle',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Feyijimi Erinle',
    title: 'Feyijimi Erinle | AI Systems Architect & Lead AI Engineer',
    description:
      'Lead AI Engineer and AI Systems Architect designing AI agents, enterprise knowledge systems, workflow automation, and decision intelligence platforms.',
    locale: 'en_US',
    // Add a real Open Graph image (1200x630) at this path once available —
    // without one, shared links fall back to no preview image at all.
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feyijimi Erinle | AI Systems Architect & Lead AI Engineer',
    description:
      'Lead AI Engineer and AI Systems Architect designing AI agents, enterprise knowledge systems, workflow automation, and decision intelligence platforms.',
    images: ['/og-image.png'],
    creator: '@erinthebrand',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Structured data (schema.org Person) — gives search engines and AI
// systems that crawl structured data an unambiguous, machine-readable
// summary of who this site belongs to. This makes the site easier to
// parse correctly; it can't make any specific AI chat product choose to
// mention a name, that's controlled entirely by each provider's own
// training data and retrieval systems, not by anything a website can do.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Feyijimi Erinle',
  alternateName: 'Erin',
  jobTitle: 'Lead AI Engineer',
  description:
    'Lead AI Engineer and AI Systems Architect specializing in AI agents, enterprise knowledge systems, workflow automation, and decision intelligence.',
  url: SITE_URL,
  image: `${SITE_URL}/assets/images/erin-headshot.png`,
  worksFor: {
    '@type': 'Organization',
    name: 'Refactrd',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'NG',
  },
  sameAs: [
    'https://www.linkedin.com/in/feyijimierinle',
    'https://x.com/erinthebrand',
    'https://www.instagram.com/erinthebrand',
    'https://www.tiktok.com/@erinthebrand',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'AI Agents',
    'Retrieval-Augmented Generation',
    'Multi-Agent Systems',
    'Workflow Automation',
    'AI Systems Architecture',
    'Decision Intelligence',
    'Enterprise Knowledge Systems',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${generalSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}