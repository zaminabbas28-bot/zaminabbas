const ITEMS = [
  "Zamin Abbas",
  "Local SEO Expert",
  "Web Developer",
  "Technical SEO",
  "Google Business Profile",
] as const;

/** Infinite marquee strip (approved design) — CSS animation only. */
export default function Ticker() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-black/10 bg-ink-900 py-[18px] dark:border-white/10"
    >
      <div className="ticker-track flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {ITEMS.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center whitespace-nowrap px-[18px] font-display text-[1.35rem] font-bold tracking-[0.04em] text-mist-100"
              >
                {item}
                <i className="grad-text pl-[18px] not-italic" aria-hidden>
                  ✦
                </i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
