const ITEMS = [
  "Zamin Abbas",
  "Local SEO Expert",
  "Web Developer",
  "Technical SEO",
  "Google Business Profile",
] as const;

/**
 * Salman-style giant marquee: two stacked rows — an outline-text row
 * scrolling left and a gradient-text row scrolling right, ✦ separators.
 * Same items/text as before, CSS animation only.
 */
export default function Ticker() {
  return (
    <div aria-hidden className="salman-marquee">
      {/* Row 1: outline text, scrolls left */}
      <div className="ticker-track salman-marquee-row">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {ITEMS.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="salman-marquee-text salman-marquee-outline"
              >
                {item}
                <i className="salman-marquee-sep not-italic" aria-hidden>
                  ✦
                </i>
              </span>
            ))}
          </div>
        ))}
      </div>
      {/* Row 2: gradient text, scrolls right */}
      <div className="ticker-track-reverse salman-marquee-row mt-2">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {ITEMS.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="salman-marquee-text text-gradient-accent"
              >
                {item}
                <i className="not-italic" aria-hidden>
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
