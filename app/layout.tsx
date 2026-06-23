import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Feyijimi Erinle | AI Systems Architect & Lead AI Engineer',
  description:
    'Lead AI Engineer helping startups and enterprise teams design and deploy AI agents, enterprise knowledge systems, workflow automation platforms, and decision intelligence solutions.',
  keywords:
    'AI Engineer, AI Architect, AI Systems Architect, AI Agents, RAG Systems, LangGraph, OpenAI, AWS, Workflow Automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
