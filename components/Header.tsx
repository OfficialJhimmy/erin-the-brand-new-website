'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-[999] backdrop-blur-[20px] bg-[rgba(251,245,228,.92)] border-b border-border">
      <div className="container flex justify-between items-center py-7">
        <Link href="/" className="font-heading font-bold tracking-[.08em] text-base">
          FEYIJIMI
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium transition-colors ${
                pathname === href ? 'text-foreground' : 'text-muted hover:text-foreground'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
