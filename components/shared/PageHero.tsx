import type { ReactNode } from 'react'

interface PageHeroProps {
  badge: string
  heading: ReactNode
  description: ReactNode
  buttons?: ReactNode
}

export default function PageHero({ badge, heading, description, buttons }: PageHeroProps) {
  return (
    <section className="pt-[140px] pb-[90px]">
      <div className="container">
        <span className="badge">{badge}</span>
        <h1>{heading}</h1>
        <p className="text-[1.15rem] mt-5 max-w-[65ch]">{description}</p>
        {buttons && <div className="flex flex-wrap gap-4 mt-10">{buttons}</div>}
      </div>
    </section>
  )
}
