import Link from 'next/link'
import Image from 'next/image'

const stats = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
    value: '6+',
    label: 'Years Engineering Experience',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    ),
    value: '9+',
    label: 'AI Solutions Delivered',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    value: 'AWS',
    label: 'Certified Architect',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    value: 'AI',
    label: 'Production Focused',
  },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="container grid lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-72px)] py-16 lg:py-0">

        {/* ── Left column ── */}
        <div className="flex flex-col justify-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 mb-7 self-start">
            <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
            <span className="text-sm font-medium text-foreground/70">
              AI Engineer&nbsp;•&nbsp;AI Systems Architect&nbsp;•&nbsp;Builder
            </span>
          </div>

          {/* Heading */}
          <h1 className="!mb-6 text-[42px] sm:text-[52px] lg:text-[50px] font-bold tracking-tight text-foreground leading-[1.1]">
            Designing AI Systems That Transform How Organizations{' '}
            <span className="relative inline-block whitespace-nowrap">
              Operate
              {/* Hand-drawn style underline in accent blue */}
              <svg
                className="absolute -bottom-3 left-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 7 Q75 2 150 6 Q225 10 297 5"
                  stroke="#2563EB"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          {/* Description */}
          <p className="text-[1.05rem] text-muted max-w-[50ch] mb-10 leading-relaxed">
            I help startups and enterprise teams architect, build, and deploy AI agents, knowledge systems,
            workflow automation platforms, and decision intelligence solutions that create measurable
            business outcomes.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[14px] bg-foreground text-white text-sm font-semibold hover:bg-foreground/80 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/architecture"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[14px] border border-border bg-white text-foreground text-sm font-semibold hover:bg-[#EBEBEB] transition-all duration-300"
            >
              Explore Architectures
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[14px] border border-border bg-white text-foreground text-sm font-semibold hover:bg-[#EBEBEB] transition-all duration-300"
            >
              Download Resume
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 2v7M4 6.5l3 3 3-3M2.5 11.5h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map(({ icon, value, label }) => (
              <div
                key={label}
                className="bg-white border border-border rounded-2xl p-4 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/[0.12] text-accent flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-foreground font-bold text-xl max-w-none leading-none">
                    {value}
                  </p>
                  <p className="text-muted text-[0.7rem] max-w-none leading-snug mt-1">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div> */}

        </div>

        {/* ── Right column ── */}
        <div className="relative flex items-end justify-center min-h-[520px] lg:min-h-[calc(100vh-72px)]">

          {/* Circular gradient backdrop */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(238,243,255,1) 0%, rgba(232,238,251,0.9) 65%, rgba(232,238,251,0) 100%)',
            }}
          />

          {/* Hero photo */}
          <div className="relative z-10 flex items-end justify-center w-full h-full">
            <Image
              src="/assets/images/hero-section-image.png"
              alt="Feyijimi Erinle"
              width={520}
              height={640}
              className="w-auto max-h-[min(640px,88vh)] object-contain object-bottom select-none"
              priority
            />
          </div>

          {/* Floating info card */}
          <div className="absolute top-[12%] right-0 z-20 bg-white rounded-2xl shadow-lg p-5 w-[195px]">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-foreground text-[0.82rem] font-medium leading-relaxed max-w-none">
              Building systems.
              <br />
              Solving real problems.
              <br />
              <span className="text-accent font-semibold">Driving impact.</span>
            </p>
          </div>

          {/* Decorative dots */}
          <span className="absolute top-[44%] left-4 w-3 h-3 rounded-full bg-foreground z-10" />
          <span className="absolute top-[44%] right-14 w-3 h-3 rounded-full bg-accent z-10" />

        </div>
      </div>
    </section>
  )
}
