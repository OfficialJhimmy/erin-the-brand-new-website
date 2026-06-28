// 'use client'

// import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
// import { motion } from 'framer-motion'
// import {
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   FileText,
//   Grid3x3,
//   List,
//   Search,
//   Star,
// } from 'lucide-react'
// import { ARTICLES, CATEGORIES, FEATURED_NOTES, categoryStyle, type Category } from '@/lib/insights-data'

// function highlightMatch(text: string, query: string): ReactNode {
//   if (!query.trim()) return text
//   const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
//   const parts = text.split(new RegExp(`(${escaped})`, 'ig'))
//   return parts.map((part, i) =>
//     part.toLowerCase() === query.trim().toLowerCase() ? (
//       <mark key={i} className="rounded bg-accent/15 text-accent">
//         {part}
//       </mark>
//     ) : (
//       <span key={i}>{part}</span>
//     )
//   )
// }

// function LayeredVisual() {
//   return (
//     <div className="relative mx-auto hidden h-[220px] w-[220px] shrink-0 sm:block">
//       <div className="absolute inset-0 -z-10 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
//       <div className="absolute inset-0 translate-x-7 translate-y-10 rotate-6 rounded-2xl border border-border bg-white shadow-sm" />
//       <div className="absolute inset-0 translate-x-3 translate-y-5 rotate-3 rounded-2xl border border-border bg-surface-light shadow-sm" />
//       <div className="absolute inset-0 overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-white to-blue-50 shadow-[0_20px_60px_rgba(255,137,6,0.18)]">
//         <div className="absolute inset-5 flex flex-col gap-2.5">
//           <div className="h-2 w-3/4 rounded-full bg-foreground/10" />
//           <div className="h-2 w-full rounded-full bg-foreground/10" />
//           <div className="h-2 w-5/6 rounded-full bg-foreground/10" />
//           <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
//         </div>
//         <div className="absolute bottom-4 right-4 h-3 w-10 rounded-full bg-accent" />
//       </div>
//     </div>
//   )
// }

// export default function ResearchInsights() {
//   const [query, setQuery] = useState('')
//   const [activeCategory, setActiveCategory] = useState<Category | 'All Topics'>('All Topics')
//   const [hoveredCategory, setHoveredCategory] = useState<Category | 'All Topics' | null>(null)
//   const [featuredIndex, setFeaturedIndex] = useState(0)
//   const [viewMode, setViewMode] = useState<'list' | 'grid'>('list')
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [email, setEmail] = useState('')
//   const [subscribed, setSubscribed] = useState(false)

//   const searchInputRef = useRef<HTMLInputElement>(null)

//   useEffect(() => {
//     function handleKeydown(e: KeyboardEvent) {
//       if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
//         e.preventDefault()
//         searchInputRef.current?.focus()
//       }
//     }
//     window.addEventListener('keydown', handleKeydown)
//     return () => window.removeEventListener('keydown', handleKeydown)
//   }, [])

//   const counts = useMemo(() => {
//     const map = new Map<Category, number>()
//     for (const article of ARTICLES) {
//       map.set(article.category, (map.get(article.category) ?? 0) + 1)
//     }
//     return map
//   }, [])

//   const filteredArticles = useMemo(() => {
//     const q = query.trim().toLowerCase()
//     return ARTICLES.filter((a) => {
//       const matchesCategory = activeCategory === 'All Topics' || a.category === activeCategory
//       const matchesQuery =
//         !q || a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
//       return matchesCategory && matchesQuery
//     })
//   }, [query, activeCategory])

//   const featured = FEATURED_NOTES[featuredIndex]

//   function handleSubscribe(e: React.FormEvent) {
//     e.preventDefault()
//     // Wire up your preferred newsletter provider (Resend, ConvertKit, Substack, etc.)
//     setSubscribed(true)
//   }

//   return (
//     <section className="section relative overflow-hidden">
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage:
//             'linear-gradient(#1B1B1B 1px, transparent 1px), linear-gradient(90deg, #1B1B1B 1px, transparent 1px)',
//           backgroundSize: '40px 40px',
//         }}
//         aria-hidden="true"
//       />

//       <div className="container relative">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
//         >
//           <div>
//             <span className="section-label">INSIGHTS</span>
//             <h2 className="max-w-xl">
//               Research &amp; Insights <br className="hidden sm:block" />
//               On <span className="text-accent">AI Systems</span> That Scale
//             </h2>
//             <p className="mt-5 max-w-[55ch]">
//               Thoughts, frameworks, and patterns from building AI products, leading engineering
//               teams, and shipping systems that create real impact.
//             </p>
//           </div>

//           <div className="w-full shrink-0 lg:w-[420px]">
//             <div className="relative">
//               <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search insights, topics, or keywords..."
//                 className="w-full rounded-[14px] border border-border bg-surface py-3.5 pl-11 pr-14 text-sm placeholder:text-muted focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/[0.08] transition-all"
//               />
//               <kbd className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md border border-border bg-white px-1.5 py-0.5 text-xs text-muted">
//                 ⌘K
//               </kbd>
//             </div>
//           </div>
//         </motion.div>

//         {/* Filter chips */}
//         <div className="mt-6 flex gap-2.5 overflow-x-auto pb-1">
//           <motion.button
//             type="button"
//             whileTap={{ scale: 1.02 }}
//             onClick={() => setActiveCategory('All Topics')}
//             onMouseEnter={() => setHoveredCategory('All Topics')}
//             onMouseLeave={() => setHoveredCategory(null)}
//             className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
//               activeCategory === 'All Topics'
//                 ? 'bg-accent text-white'
//                 : 'border border-border text-foreground hover:bg-[#EFF6FF]'
//             }`}
//           >
//             All Topics
//           </motion.button>
//           {CATEGORIES.map((cat) => (
//             <motion.button
//               key={cat.name}
//               type="button"
//               whileTap={{ scale: 1.02 }}
//               onClick={() => setActiveCategory(cat.name)}
//               onMouseEnter={() => setHoveredCategory(cat.name)}
//               onMouseLeave={() => setHoveredCategory(null)}
//               className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
//                 activeCategory === cat.name
//                   ? 'bg-accent text-white'
//                   : 'border border-border text-foreground hover:bg-[#EFF6FF]'
//               }`}
//             >
//               {cat.name}
//             </motion.button>
//           ))}
//         </div>

//         {/* Featured note */}
//         {featured && (
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -6 }}
//             transition={{ duration: 0.5 }}
//             className="mt-8 rounded-[24px] border border-border bg-surface p-8 md:p-10"
//           >
//             <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
//               <div className="flex gap-6">
//                 <span className="select-none font-heading text-[5rem] font-bold leading-none text-[#EAEAEA] sm:text-[6rem]">
//                   {featured.category && String(featuredIndex + 1).padStart(2, '0')}
//                 </span>
//                 <div className="min-w-0">
//                   <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[.1em] text-accent">
//                     <Star className="h-3 w-3" fill="currentColor" />
//                     Featured Research Note
//                   </span>
//                   <div className="text-xs font-bold uppercase tracking-[.1em] text-accent">{featured.category}</div>
//                   <h3 className="!mb-3 !mt-2 max-w-xl !text-2xl">{featured.title}</h3>
//                   <p className="max-w-[55ch]">{featured.description}</p>
//                   <div className="mt-4 flex items-center gap-4 text-sm text-muted">
//                     <span>{featured.readTime}</span>
//                     <span aria-hidden="true">·</span>
//                     <span>{featured.date}</span>
//                   </div>
//                   <a
//                     href={featured.href}
//                     className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[30px] bg-gradient-to-r from-orange-400 to-yellow-400 text-black text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 mt-5"
//                   >
//                     Read Note
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-6">
//                 <LayeredVisual />
//                 {FEATURED_NOTES.length > 1 && (
//                   <div className="flex shrink-0 items-center gap-3">
//                     <button
//                       type="button"
//                       disabled={featuredIndex === 0}
//                       onClick={() => setFeaturedIndex((i) => Math.max(0, i - 1))}
//                       className="flex h-9 w-9 items-center justify-center rounded-full border border-border disabled:opacity-30"
//                     >
//                       <ChevronLeft className="h-4 w-4" />
//                     </button>
//                     <span className="text-sm text-muted">
//                       {featuredIndex + 1} / {FEATURED_NOTES.length}
//                     </span>
//                     <button
//                       type="button"
//                       disabled={featuredIndex === FEATURED_NOTES.length - 1}
//                       onClick={() => setFeaturedIndex((i) => Math.min(FEATURED_NOTES.length - 1, i + 1))}
//                       className="flex h-9 w-9 items-center justify-center rounded-full border border-border disabled:opacity-30"
//                     >
//                       <ChevronRight className="h-4 w-4" />
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {/* Sidebar + article database */}
//         <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
//           {/* Sidebar */}
//           <div>
//             <button
//               type="button"
//               onClick={() => setSidebarOpen((v) => !v)}
//               className="mb-3 flex w-full items-center justify-between rounded-[14px] border border-border bg-surface px-4 py-3 text-sm font-medium lg:hidden"
//             >
//               Topics &amp; Filters
//               <ChevronRight className={`h-4 w-4 transition-transform ${sidebarOpen ? 'rotate-90' : ''}`} />
//             </button>

//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className={`${sidebarOpen ? 'block' : 'hidden'} space-y-4 lg:block`}
//             >
//               <div className="rounded-[24px] border border-border bg-surface p-5">
//                 <h3 className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-muted">Topics</h3>
//                 <ul className="space-y-1">
//                   <li>
//                     <button
//                       type="button"
//                       onClick={() => setActiveCategory('All Topics')}
//                       onMouseEnter={() => setHoveredCategory('All Topics')}
//                       onMouseLeave={() => setHoveredCategory(null)}
//                       className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
//                         activeCategory === 'All Topics' ? 'bg-accent/10 font-semibold text-accent' : 'hover:bg-[#EFF6FF]'
//                       }`}
//                     >
//                       All Topics
//                       <span className="text-xs text-muted">{ARTICLES.length}</span>
//                     </button>
//                   </li>
//                   {CATEGORIES.map((cat) => {
//                     const count = counts.get(cat.name) ?? 0
//                     const Icon = cat.icon
//                     return (
//                       <li key={cat.name}>
//                         <button
//                           type="button"
//                           onClick={() => setActiveCategory(cat.name)}
//                           onMouseEnter={() => setHoveredCategory(cat.name)}
//                           onMouseLeave={() => setHoveredCategory(null)}
//                           className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
//                             activeCategory === cat.name ? 'bg-accent/10 font-semibold text-accent' : 'hover:bg-[#EFF6FF]'
//                           }`}
//                         >
//                           <span className="flex items-center gap-2.5">
//                             <Icon className={`h-3.5 w-3.5 ${cat.iconColor}`} />
//                             {cat.name}
//                           </span>
//                           <span className="text-xs text-muted">{count}</span>
//                         </button>
//                       </li>
//                     )
//                   })}
//                 </ul>
//               </div>

//               <div id="subscribe" className="rounded-[24px] border border-border bg-surface p-5">
//                 {subscribed ? (
//                   <p className="text-sm font-medium text-accent">You&apos;re on the list — thanks!</p>
//                 ) : (
//                   <form onSubmit={handleSubscribe}>
//                     <h3 className="!mb-1 !text-base">Stay in the loop</h3>
//                     <p className="max-w-none text-sm">Get notified when I publish new research notes.</p>
//                     <input
//                       type="email"
//                       required
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="you@email.com"
//                       className="mt-3 w-full rounded-[10px] border border-border bg-white px-3.5 py-2.5 text-sm placeholder:text-muted focus:border-accent focus:outline-none"
//                     />
//                     <button
//                       type="submit"
//                       className="mt-3 inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover"
//                     >
//                       Subscribe
//                       <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </motion.div>
//           </div>

//           {/* Article database */}
//           <div className="rounded-[24px] border border-border bg-surface">
//             <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-4">
//               <p className="text-sm text-muted">
//                 {filteredArticles.length} research note{filteredArticles.length === 1 ? '' : 's'}
//               </p>
//               <div className="flex items-center gap-1 rounded-lg border border-border p-1">
//                 <button
//                   type="button"
//                   onClick={() => setViewMode('list')}
//                   aria-label="List view"
//                   className={`flex h-7 w-7 items-center justify-center rounded-md ${
//                     viewMode === 'list' ? 'bg-accent text-white' : 'text-muted'
//                   }`}
//                 >
//                   <List className="h-3.5 w-3.5" />
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setViewMode('grid')}
//                   aria-label="Grid view"
//                   className={`flex h-7 w-7 items-center justify-center rounded-md ${
//                     viewMode === 'grid' ? 'bg-accent text-white' : 'text-muted'
//                   }`}
//                 >
//                   <Grid3x3 className="h-3.5 w-3.5" />
//                 </button>
//               </div>
//             </div>

//             {filteredArticles.length === 0 ? (
//               <div className="px-6 py-16 text-center">
//                 <p className="text-sm text-muted">No research notes match that search yet.</p>
//               </div>
//             ) : viewMode === 'list' ? (
//               <ul>
//                 {filteredArticles.map((article, i) => {
//                   const cat = categoryStyle(article.category)
//                   const Icon = cat.icon
//                   const dimmed = hoveredCategory && hoveredCategory !== 'All Topics' && hoveredCategory !== article.category

//                   return (
//                     <motion.li
//                       key={article.title}
//                       initial={{ opacity: 0, y: 12 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.4, delay: i * 0.1 }}
//                       className={`border-b border-border last:border-b-0 transition-opacity duration-300 ${
//                         dimmed ? 'opacity-50' : 'opacity-100'
//                       }`}
//                     >
//                       <a
//                         href={article.href}
//                         className="group flex items-center gap-4 px-6 py-4 transition-all duration-300 hover:translate-x-2 hover:bg-surface-light"
//                       >
//                         <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${cat.iconBg}`}>
//                           <Icon className={`h-5 w-5 ${cat.iconColor}`} />
//                         </span>

//                         <span className="min-w-0 flex-1">
//                           <span className="mb-0.5 block text-xs font-bold uppercase tracking-[.08em] text-muted">
//                             {article.category}
//                           </span>
//                           <h4 className="truncate font-heading text-base font-semibold text-foreground transition-colors group-hover:text-accent">
//                             {highlightMatch(article.title, query)}
//                           </h4>
//                           <p className="mt-0.5 max-w-none truncate text-sm">
//                             {highlightMatch(article.description, query)}
//                           </p>
//                         </span>

//                         <span
//                           className={`hidden shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold transition-shadow duration-300 group-hover:shadow-[0_0_0_4px_rgba(255,137,6,0.08)] sm:inline-block ${cat.badgeBg} ${cat.badgeText}`}
//                         >
//                           {article.category}
//                         </span>
//                         <span className="hidden shrink-0 text-sm text-muted md:inline">{article.readTime}</span>
//                         <span className="hidden shrink-0 text-sm text-muted md:inline">{article.date}</span>

//                         <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
//                       </a>
//                     </motion.li>
//                   )
//                 })}
//               </ul>
//             ) : (
//               <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
//                 {filteredArticles.map((article, i) => {
//                   const cat = categoryStyle(article.category)
//                   const Icon = cat.icon
//                   const dimmed = hoveredCategory && hoveredCategory !== 'All Topics' && hoveredCategory !== article.category

//                   return (
//                     <motion.a
//                       key={article.title}
//                       href={article.href}
//                       initial={{ opacity: 0, y: 12 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.4, delay: i * 0.1 }}
//                       className={`group rounded-[18px] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 ${
//                         dimmed ? 'opacity-50' : 'opacity-100'
//                       }`}
//                     >
//                       <span className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${cat.iconBg}`}>
//                         <Icon className={`h-5 w-5 ${cat.iconColor}`} />
//                       </span>
//                       <span className={`text-xs font-bold uppercase tracking-[.08em] ${cat.badgeText}`}>
//                         {article.category}
//                       </span>
//                       <h4 className="!mb-2 !mt-1 !text-base font-semibold transition-colors group-hover:text-accent">
//                         {article.title}
//                       </h4>
//                       <p className="max-w-none text-sm">{article.description}</p>
//                       <div className="mt-4 flex items-center gap-3 text-xs text-muted">
//                         <span>{article.readTime}</span>
//                         <span aria-hidden="true">·</span>
//                         <span>{article.date}</span>
//                       </div>
//                     </motion.a>
//                   )
//                 })}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Closing CTA */}
//         <div className="mt-6 flex flex-col gap-6 rounded-[24px] border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-4">
//             <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-accent/10">
//               <FileText className="h-5 w-5 text-accent" />
//             </span>
//             <div>
//               <h3 className="!mb-1 !text-lg">Want the deep dives first?</h3>
//               <p className="max-w-none text-sm">
//                 New frameworks and implementation patterns land here before anywhere else.
//               </p>
//             </div>
//           </div>

//           <a
//             href="#subscribe"
//             className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[30px] bg-gradient-to-r from-orange-400 to-yellow-400 text-black text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
//           >
//             Subscribe
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  Grid3x3,
  List,
  Search,
  Star,
} from 'lucide-react'
import { ARTICLES, CATEGORIES, FEATURED_NOTES, categoryStyle, type Category } from '@/lib/insights-data'

function highlightMatch(text: string, query: string): ReactNode {
  if (!query.trim()) return text
  const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const parts = text.split(new RegExp(`(${escaped})`, 'ig'))
  return parts.map((part, i) =>
    part.toLowerCase() === query.trim().toLowerCase() ? (
      <mark key={i} className="rounded bg-accent/15 text-accent">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

function LayeredVisual() {
  return (
    <div className="relative mx-auto hidden h-[220px] w-[220px] shrink-0 sm:block">
      <div className="absolute inset-0 -z-10 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-0 translate-x-7 translate-y-10 rotate-6 rounded-2xl border border-border bg-white shadow-sm" />
      <div className="absolute inset-0 translate-x-3 translate-y-5 rotate-3 rounded-2xl border border-border bg-surface-light shadow-sm" />
      <div className="absolute inset-0 overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-white to-blue-50 shadow-[0_20px_60px_rgba(255,137,6,0.18)]">
        <div className="absolute inset-5 flex flex-col gap-2.5">
          <div className="h-2 w-3/4 rounded-full bg-foreground/10" />
          <div className="h-2 w-full rounded-full bg-foreground/10" />
          <div className="h-2 w-5/6 rounded-full bg-foreground/10" />
          <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
        </div>
        <div className="absolute bottom-4 right-4 h-3 w-10 rounded-full bg-accent" />
      </div>
    </div>
  )
}

export default function ResearchInsights() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<Category | 'All Topics'>('All Topics')
  const [hoveredCategory, setHoveredCategory] = useState<Category | 'All Topics' | null>(null)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [])

  const counts = useMemo(() => {
    const map = new Map<Category, number>()
    for (const article of ARTICLES) {
      map.set(article.category, (map.get(article.category) ?? 0) + 1)
    }
    return map
  }, [])

  const filteredArticles = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ARTICLES.filter((a) => {
      const matchesCategory = activeCategory === 'All Topics' || a.category === activeCategory
      const matchesQuery =
        !q || a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  const featured = FEATURED_NOTES[featuredIndex]

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    // Wire up your preferred newsletter provider (Resend, ConvertKit, Substack, etc.)
    setSubscribed(true)
  }

  return (
    <section className="section relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(#1B1B1B 1px, transparent 1px), linear-gradient(90deg, #1B1B1B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
        >
          <div>
            <span className="section-label">INSIGHTS</span>
            <h2 className="max-w-xl">
              Research &amp; Insights <br className="hidden sm:block" />
              On <span className="text-accent">AI Systems</span> That Scale
            </h2>
            <p className="mt-5 max-w-[55ch]">
              Thoughts, frameworks, and patterns from building AI products, leading engineering
              teams, and shipping systems that create real impact.
            </p>
          </div>

          <div className="w-full shrink-0 lg:w-[420px]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search insights, topics, or keywords..."
                className="w-full rounded-[14px] border border-border bg-surface py-3.5 pl-11 pr-4 text-sm placeholder:text-muted focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/[0.08] transition-all sm:pr-14"
              />
              <kbd className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-md border border-border bg-white px-1.5 py-0.5 text-xs text-muted sm:block">
                ⌘K
              </kbd>
            </div>
          </div>
        </motion.div>

        {/* Filter chips */}
        <div className="mt-6 flex gap-2.5 overflow-x-auto pb-1">
          <motion.button
            type="button"
            whileTap={{ scale: 1.02 }}
            onClick={() => setActiveCategory('All Topics')}
            onMouseEnter={() => setHoveredCategory('All Topics')}
            onMouseLeave={() => setHoveredCategory(null)}
            className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
              activeCategory === 'All Topics'
                ? 'bg-accent text-white'
                : 'border border-border text-foreground hover:bg-[#EFF6FF]'
            }`}
          >
            All Topics
          </motion.button>
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.name}
              type="button"
              whileTap={{ scale: 1.02 }}
              onClick={() => setActiveCategory(cat.name)}
              onMouseEnter={() => setHoveredCategory(cat.name)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                activeCategory === cat.name
                  ? 'bg-accent text-white'
                  : 'border border-border text-foreground hover:bg-[#EFF6FF]'
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Featured note */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5 }}
            className="mt-8 rounded-[24px] border border-border bg-surface p-5 sm:p-8 md:p-10"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <span className="select-none font-heading text-[3.5rem] font-bold leading-none text-[#EAEAEA] sm:text-[5rem] md:text-[6rem]">
                  {featured.category && String(featuredIndex + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[.1em] text-accent">
                    <Star className="h-3 w-3" fill="currentColor" />
                    Featured Research Note
                  </span>
                  <div className="text-xs font-bold uppercase tracking-[.1em] text-accent">{featured.category}</div>
                  <h3 className="!mb-3 !mt-2 max-w-xl !text-xl sm:!text-2xl">{featured.title}</h3>
                  <p className="max-w-[55ch]">{featured.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted">
                    <span>{featured.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featured.date}</span>
                  </div>
                  <a
                    href={featured.href}
                    className="mt-5 inline-flex items-center gap-2 rounded-[30px] bg-gradient-to-r from-orange-400 to-yellow-400 px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Read Note
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                <LayeredVisual />
                {FEATURED_NOTES.length > 1 && (
                  <div className="flex shrink-0 items-center gap-3">
                    <button
                      type="button"
                      disabled={featuredIndex === 0}
                      onClick={() => setFeaturedIndex((i) => Math.max(0, i - 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border disabled:opacity-30"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <span className="text-sm text-muted">
                      {featuredIndex + 1} / {FEATURED_NOTES.length}
                    </span>
                    <button
                      type="button"
                      disabled={featuredIndex === FEATURED_NOTES.length - 1}
                      onClick={() => setFeaturedIndex((i) => Math.min(FEATURED_NOTES.length - 1, i + 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border disabled:opacity-30"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Sidebar + article database */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <div className="min-w-0">
            <button
              type="button"
              onClick={() => setSidebarOpen((v) => !v)}
              className="mb-3 flex w-full items-center justify-between rounded-[14px] border border-border bg-surface px-4 py-3 text-sm font-medium lg:hidden"
            >
              Topics &amp; Filters
              <ChevronRight className={`h-4 w-4 transition-transform ${sidebarOpen ? 'rotate-90' : ''}`} />
            </button>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${sidebarOpen ? 'block' : 'hidden'} space-y-4 lg:block`}
            >
              <div className="rounded-[24px] border border-border bg-surface p-5">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-muted">Topics</h3>
                <ul className="space-y-1">
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveCategory('All Topics')}
                      onMouseEnter={() => setHoveredCategory('All Topics')}
                      onMouseLeave={() => setHoveredCategory(null)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                        activeCategory === 'All Topics' ? 'bg-accent/10 font-semibold text-accent' : 'hover:bg-[#EFF6FF]'
                      }`}
                    >
                      All Topics
                      <span className="text-xs text-muted">{ARTICLES.length}</span>
                    </button>
                  </li>
                  {CATEGORIES.map((cat) => {
                    const count = counts.get(cat.name) ?? 0
                    const Icon = cat.icon
                    return (
                      <li key={cat.name}>
                        <button
                          type="button"
                          onClick={() => setActiveCategory(cat.name)}
                          onMouseEnter={() => setHoveredCategory(cat.name)}
                          onMouseLeave={() => setHoveredCategory(null)}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                            activeCategory === cat.name ? 'bg-accent/10 font-semibold text-accent' : 'hover:bg-[#EFF6FF]'
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <Icon className={`h-3.5 w-3.5 ${cat.iconColor}`} />
                            {cat.name}
                          </span>
                          <span className="text-xs text-muted">{count}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div id="subscribe" className="rounded-[24px] border border-border bg-surface p-5">
                {subscribed ? (
                  <p className="text-sm font-medium text-accent">You&apos;re on the list — thanks!</p>
                ) : (
                  <form onSubmit={handleSubscribe}>
                    <h3 className="!mb-1 !text-base">Stay in the loop</h3>
                    <p className="max-w-none text-sm">Get notified when I publish new research notes.</p>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="mt-3 w-full rounded-[10px] border border-border bg-white px-3.5 py-2.5 text-sm placeholder:text-muted focus:border-accent focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="mt-3 inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover"
                    >
                      Subscribe
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Article database */}
          <div className="min-w-0 rounded-[24px] border border-border bg-surface">
            <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-4 sm:px-6">
              <p className="text-sm text-muted">
                {filteredArticles.length} research note{filteredArticles.length === 1 ? '' : 's'}
              </p>
              <div className="flex items-center gap-1 rounded-lg border border-border p-1">
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                  className={`flex h-7 w-7 items-center justify-center rounded-md ${
                    viewMode === 'list' ? 'bg-accent text-white' : 'text-muted'
                  }`}
                >
                  <List className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                  className={`flex h-7 w-7 items-center justify-center rounded-md ${
                    viewMode === 'grid' ? 'bg-accent text-white' : 'text-muted'
                  }`}
                >
                  <Grid3x3 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="px-6 py-16 text-center">
                <p className="text-sm text-muted">No research notes match that search yet.</p>
              </div>
            ) : viewMode === 'list' ? (
              <ul>
                {filteredArticles.map((article, i) => {
                  const cat = categoryStyle(article.category)
                  const Icon = cat.icon
                  const dimmed = hoveredCategory && hoveredCategory !== 'All Topics' && hoveredCategory !== article.category

                  return (
                    <motion.li
                      key={article.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className={`border-b border-border last:border-b-0 transition-opacity duration-300 ${
                        dimmed ? 'opacity-50' : 'opacity-100'
                      }`}
                    >
                      <a
                        href={article.href}
                        className="group flex min-w-0 items-center gap-3 overflow-hidden px-4 py-4 transition-all duration-300 hover:translate-x-1 hover:bg-surface-light sm:gap-4 sm:px-6 sm:hover:translate-x-2"
                      >
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${cat.iconBg}`}>
                          <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${cat.iconColor}`} />
                        </span>

                        <span className="min-w-0 flex-1 overflow-hidden">
                          <span className="mb-0.5 block text-xs font-bold uppercase tracking-[.08em] text-muted">
                            {article.category}
                          </span>
                          <h4 className="block max-w-full truncate font-heading text-sm font-semibold text-foreground transition-colors group-hover:text-accent sm:text-base">
                            {highlightMatch(article.title, query)}
                          </h4>
                          <p className="mt-0.5 hidden max-w-full truncate text-sm sm:block">
                            {highlightMatch(article.description, query)}
                          </p>
                        </span>

                        <span
                          className={`hidden shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold transition-shadow duration-300 group-hover:shadow-[0_0_0_4px_rgba(255,137,6,0.08)] sm:inline-block ${cat.badgeBg} ${cat.badgeText}`}
                        >
                          {article.category}
                        </span>
                        <span className="hidden shrink-0 text-sm text-muted md:inline">{article.readTime}</span>
                        <span className="hidden shrink-0 text-sm text-muted md:inline">{article.date}</span>

                        <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                      </a>
                    </motion.li>
                  )
                })}
              </ul>
            ) : (
              <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:p-6">
                {filteredArticles.map((article, i) => {
                  const cat = categoryStyle(article.category)
                  const Icon = cat.icon
                  const dimmed = hoveredCategory && hoveredCategory !== 'All Topics' && hoveredCategory !== article.category

                  return (
                    <motion.a
                      key={article.title}
                      href={article.href}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className={`group rounded-[18px] border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 sm:p-6 ${
                        dimmed ? 'opacity-50' : 'opacity-100'
                      }`}
                    >
                      <span className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${cat.iconBg}`}>
                        <Icon className={`h-5 w-5 ${cat.iconColor}`} />
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-[.08em] ${cat.badgeText}`}>
                        {article.category}
                      </span>
                      <h4 className="!mb-2 !mt-1 !text-base font-semibold transition-colors group-hover:text-accent">
                        {article.title}
                      </h4>
                      <p className="max-w-none text-sm">{article.description}</p>
                      <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                        <span>{article.readTime}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.date}</span>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-6 flex flex-col gap-6 rounded-[24px] border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-accent/10">
              <FileText className="h-5 w-5 text-accent" />
            </span>
            <div>
              <h3 className="!mb-1 !text-lg">Want the deep dives first?</h3>
              <p className="max-w-none text-sm">
                New frameworks and implementation patterns land here before anywhere else.
              </p>
            </div>
          </div>

          <a
            href="#subscribe"
            className="inline-flex items-center justify-center gap-2 rounded-[30px] bg-gradient-to-r from-orange-400 to-yellow-400 px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5"
          >
            Subscribe
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}``