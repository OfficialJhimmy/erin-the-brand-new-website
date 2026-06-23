const stats = [
  { icon: '💼', value: '6+', label: 'Years Engineering Experience' },
  { icon: '🚀', value: '9+', label: 'AI Solutions Delivered' },
  { icon: '☁️', value: 'AWS', label: 'Certified Architect' },
  { icon: '✦',  value: 'AI',  label: 'Production Focused' },
]

export default function StatsSection() {
  return (
    <section className="pb-[80px]">
      <div className="container grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map(({ icon, value, label }) => (
          <div
            key={label}
            className="bg-white border border-border rounded-[14px] p-4 flex items-start gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-accent/[0.12] flex items-center justify-center flex-shrink-0 text-base">
              {icon}
            </div>
            <div>
              <p className="text-foreground font-bold text-lg max-w-none leading-tight">{value}</p>
              <p className="text-muted text-[0.7rem] max-w-none leading-snug mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
