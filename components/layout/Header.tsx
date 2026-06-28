// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import { AnimatePresence, motion } from 'framer-motion'
// import { ArrowUpRight, Menu, X } from 'lucide-react'

// const navLinks = [
//   { href: '/projects', label: 'Projects' },
//   { href: '/architecture', label: 'Architecture' },
//   { href: '/about', label: 'About' },
//   { href: '/insights', label: 'Insights' },
// ]

// const HEADER_HEIGHT = 64

// export default function Header() {
//   const pathname = usePathname()
//   const [isDark, setIsDark] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const darkSections = useRef<Set<Element>>(new Set())

//   // Watches every section on the current page marked data-nav-theme="dark"
//   // (currently: the Footer, Architecture Principles, and About Philosophy)
//   // and tracks whether one is sitting directly behind the header's strip
//   // of the viewport right now — not just "scrolled past the hero," but
//   // genuinely "is something dark behind me at this exact moment."
//   useEffect(() => {
//     darkSections.current.clear()
//     setIsDark(false)
//     setMobileOpen(false)

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) darkSections.current.add(entry.target)
//           else darkSections.current.delete(entry.target)
//         })
//         setIsDark(darkSections.current.size > 0)
//       },
//       {
//         rootMargin: `-${HEADER_HEIGHT}px 0px -${Math.max(window.innerHeight - HEADER_HEIGHT - 1, 0)}px 0px`,
//         threshold: 0,
//       }
//     )

//     document.querySelectorAll('[data-nav-theme="dark"]').forEach((el) => observer.observe(el))
//     return () => observer.disconnect()
//   }, [pathname])

//   // Lock page scroll while the mobile drawer is open
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? 'hidden' : ''
//     return () => {
//       document.body.style.overflow = ''
//     }
//   }, [mobileOpen])

//   return (
//     <header
//       className={`sticky top-0 z-[999] border-b backdrop-blur-xl transition-colors duration-300 ${
//         isDark ? 'border-white/10 bg-[#1B1B1B]/80' : 'border-border bg-white/80'
//       }`}
//     >
//       <div className="container flex items-center justify-between" style={{ height: HEADER_HEIGHT }}>
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/assets/images/erinbrand.webp"
//             alt="Erin"
//             width={96}
//             height={36}
//             className="h-16 w-auto object-contain"
//             priority
//           />
//         </Link>

//         {/* Desktop nav */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {navLinks.map(({ href, label }) => (
//             <Link
//               key={href}
//               href={href}
//               className={`text-sm font-medium transition-colors ${
//                 pathname === href
//                   ? isDark
//                     ? 'text-white'
//                     : 'text-foreground'
//                   : isDark
//                     ? 'text-white/60 hover:text-white'
//                     : 'text-muted hover:text-foreground'
//               }`}
//             >
//               {label}
//             </Link>
//           ))}
//         </nav>

//         <Link
//           href="/contact"
//           className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-hover md:inline-flex"
//         >
//           Let&apos;s Connect
//           <ArrowUpRight className="h-3.5 w-3.5" />
//         </Link>

//         {/* Mobile toggle */}
//         <button
//           type="button"
//           onClick={() => setMobileOpen((v) => !v)}
//           aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
//           aria-expanded={mobileOpen}
//           className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors md:hidden ${
//             isDark ? 'text-white' : 'text-foreground'
//           }`}
//         >
//           <Menu className="h-5 w-5" />
//         </button>
//       </div>

//       {/* Mobile drawer — slides in from the right, doesn't span the viewport */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               onClick={() => setMobileOpen(false)}
//               className="fixed inset-0 z-[998] bg-black/30 md:hidden"
//               aria-hidden="true"
//             />
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ duration: 0.3, ease: 'easeInOut' }}
//               className={`fixed right-0 top-0 z-[999] h-full w-[78%] max-w-[300px] border-l shadow-2xl md:hidden ${
//                 isDark ? 'border-white/10 bg-[#1B1B1B]' : 'border-border bg-white'
//               }`}
//             >
//               <div className="flex items-center justify-between px-5" style={{ height: HEADER_HEIGHT }}>
//                 <span className={`text-xs font-bold uppercase tracking-[.1em] ${isDark ? 'text-white/50' : 'text-muted'}`}>
//                   Menu
//                 </span>
//                 <button
//                   type="button"
//                   onClick={() => setMobileOpen(false)}
//                   aria-label="Close menu"
//                   className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
//                     isDark ? 'text-white' : 'text-foreground'
//                   }`}
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>

//               <nav className="flex flex-col gap-1 px-5 py-2">
//                 {navLinks.map(({ href, label }) => (
//                   <Link
//                     key={href}
//                     href={href}
//                     onClick={() => setMobileOpen(false)}
//                     className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
//                       pathname === href
//                         ? isDark
//                           ? 'bg-white/10 text-white'
//                           : 'bg-surface text-foreground'
//                         : isDark
//                           ? 'text-white/60'
//                           : 'text-muted'
//                     }`}
//                   >
//                     {label}
//                   </Link>
//                 ))}
//                 <Link
//                   href="/contact"
//                   onClick={() => setMobileOpen(false)}
//                   className="mt-3 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
//                 >
//                   Let&apos;s Connect
//                   <ArrowUpRight className="h-3.5 w-3.5" />
//                 </Link>
//               </nav>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }

'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
]

const HEADER_HEIGHT = 64

export default function Header() {
  const pathname = usePathname()
  const [isDark, setIsDark] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const darkSections = useRef<Set<Element>>(new Set())

  // Watches every section on the current page marked data-nav-theme="dark"
  // (currently: the Footer, Architecture Principles, and About Philosophy)
  // and tracks whether one is sitting directly behind the header's strip
  // of the viewport right now — not just "scrolled past the hero," but
  // genuinely "is something dark behind me at this exact moment."
  useEffect(() => {
    darkSections.current.clear()
    setIsDark(false)
    setMobileOpen(false)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) darkSections.current.add(entry.target)
          else darkSections.current.delete(entry.target)
        })
        setIsDark(darkSections.current.size > 0)
      },
      {
        rootMargin: `-${HEADER_HEIGHT}px 0px -${Math.max(window.innerHeight - HEADER_HEIGHT - 1, 0)}px 0px`,
        threshold: 0,
      }
    )

    document.querySelectorAll('[data-nav-theme="dark"]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  // Lock page scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-[999] border-b backdrop-blur-xl transition-colors duration-300 ${
          isDark ? 'border-white/10 bg-[#1B1B1B]/80' : 'border-border bg-white/80'
        }`}
      >
      <div className="container flex items-center justify-between" style={{ height: HEADER_HEIGHT }}>
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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? isDark
                    ? 'text-white'
                    : 'text-foreground'
                  : isDark
                    ? 'text-white/60 hover:text-white'
                    : 'text-muted hover:text-foreground'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-hover md:inline-flex"
        >
          Let&apos;s Connect
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors md:hidden ${
            isDark ? 'text-white' : 'text-foreground'
          }`}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      </header>

      {/* Mobile drawer — slides in from the right, doesn't span the viewport.
          Rendered as a sibling of <header>, not a child — backdrop-filter
          (used for the header's blur) makes an element a containing block
          for position:fixed descendants, which was confining this drawer
          to the header's own 64px-tall box instead of the full viewport. */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[998] bg-black/30 md:hidden"
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`fixed right-0 top-0 z-[999] h-full w-[78%] max-w-[300px] border-l shadow-2xl md:hidden ${
                isDark ? 'border-white/10 bg-[#1B1B1B]' : 'border-border bg-white'
              }`}
            >
              <div className="flex items-center justify-between px-5" style={{ height: HEADER_HEIGHT }}>
                <span className={`text-xs font-bold uppercase tracking-[.1em] ${isDark ? 'text-white/50' : 'text-muted'}`}>
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                    isDark ? 'text-white' : 'text-foreground'
                  }`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 px-5 py-2">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                      pathname === href
                        ? isDark
                          ? 'bg-white/10 text-white'
                          : 'bg-surface text-foreground'
                        : isDark
                          ? 'text-white/60'
                          : 'text-muted'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  Let&apos;s Connect
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}