'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/projects',      label: 'Projects' },
  { href: '/architecture',  label: 'Architecture' },
  { href: '/about',         label: 'About' },
  { href: '/resume',        label: 'Resume' },
  { href: '/insights',      label: 'Insights' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-[999] backdrop-blur-[20px] ">
      <div className="container flex justify-between items-center py-5">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/erinbrand.webp"
            alt="Erin"
            width={96}
            height={36}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? 'text-foreground'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-white text-sm font-semibold hover:bg-foreground/80 transition-all duration-300"
        >
          Let&apos;s Connect
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

      </div>
    </header>
  )
}
