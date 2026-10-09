const ITEMS = [
  "Zamin Abbas",
  "Local SEO Expert",
  "Web Developer",
  "Technical SEO",
  "500+ Sites Ranked",
] as const;

/** Infinite marquee strip — CSS animation only. */
export default function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-gold-400/20 bg-ink-900/60 py-4"
    >
      <div className="ticker-track flex w-max items-center gap-8 pr-8">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                <span className="font-display text-sm font-bold tracking-[0.25em] text-gold-300 uppercase">
                  {item}
                </span>
                <span className="h-2 w-2 rounded-full bg-gold-500/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
