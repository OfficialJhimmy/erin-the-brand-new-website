import {
  Bot,
  Cog,
  Database,
  FileText,
  Network,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export type Category = 'Architecture' | 'Agents' | 'RAG' | 'Automation' | 'Leadership' | 'Production'

export interface CategoryStyle {
  name: Category
  icon: LucideIcon
  iconBg: string
  iconColor: string
  badgeBg: string
  badgeText: string
}

export const CATEGORIES: CategoryStyle[] = [
  { name: 'Architecture', icon: Network, iconBg: 'bg-purple-50', iconColor: 'text-purple-600', badgeBg: 'bg-purple-50', badgeText: 'text-purple-600' },
  { name: 'Agents', icon: Bot, iconBg: 'bg-green-50', iconColor: 'text-green-600', badgeBg: 'bg-green-50', badgeText: 'text-green-600' },
  { name: 'RAG', icon: Database, iconBg: 'bg-orange-50', iconColor: 'text-orange-600', badgeBg: 'bg-orange-50', badgeText: 'text-orange-600' },
  { name: 'Automation', icon: Cog, iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600', badgeBg: 'bg-indigo-50', badgeText: 'text-indigo-600' },
  { name: 'Leadership', icon: Workflow, iconBg: 'bg-blue-50', iconColor: 'text-blue-600', badgeBg: 'bg-blue-50', badgeText: 'text-blue-600' },
  { name: 'Production', icon: FileText, iconBg: 'bg-rose-50', iconColor: 'text-rose-600', badgeBg: 'bg-rose-50', badgeText: 'text-rose-600' },
]

export function categoryStyle(name: Category): CategoryStyle {
  return CATEGORIES.find((c) => c.name === name)!
}

export interface Article {
  category: Category
  title: string
  description: string
  readTime: string
  date: string
  href: string
}

// Single source of truth for every published research note. The full
// /insights page and the homepage preview both read from this array, so
// adding a note here is the only thing required to make it show up
// everywhere, and counts/totals can never drift out of sync.
export const ARTICLES: Article[] = [
  {
    category: 'Architecture',
    title: 'The Architecture Patterns Behind Modern AI Systems',
    description: 'Deep dive into architectural patterns that power scalable AI systems.',
    readTime: '9 min read',
    date: 'May 5, 2025',
    href: '#',
  },
  {
    category: 'Agents',
    title: 'When Should You Build an AI Agent Instead of a Workflow?',
    description: 'A decision framework for choosing between AI agents and traditional workflows.',
    readTime: '6 min read',
    date: 'Apr 28, 2025',
    href: '#',
  },
  {
    category: 'RAG',
    title: 'Building Enterprise Knowledge Systems Beyond Basic RAG',
    description: 'Moving beyond naive RAG to create systems that understand your business.',
    readTime: '8 min read',
    date: 'Apr 20, 2025',
    href: '#',
  },
  {
    category: 'Leadership',
    title: 'The AI Readiness Framework I Use Before Designing Any AI Solution',
    description: 'A step-by-step framework to ensure your AI idea is worth building.',
    readTime: '7 min read',
    date: 'Apr 10, 2025',
    href: '#',
  },
  {
    category: 'Automation',
    title: "Designing AI-Powered Automations That Don't Break",
    description: 'Principles for building automations that are resilient, observable, and easy to scale.',
    readTime: '6 min read',
    date: 'Apr 2, 2025',
    href: '#',
  },
]

export interface FeaturedNote {
  category: string
  title: string
  description: string
  readTime: string
  date: string
  href: string
}

// Pinned/featured notes shown in the hero carousel on the full page.
// Built to support many, currently holds one.
export const FEATURED_NOTES: FeaturedNote[] = [
  {
    category: 'PRODUCTION AI',
    title: 'What Changes When AI Moves From Prototype to Production',
    description:
      'A practical guide to taking AI systems from early prototypes to reliable, scalable, and maintainable production systems.',
    readTime: '7 min read',
    date: 'May 12, 2025',
    href: '#',
  },
]