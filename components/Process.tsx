import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    text: "I audit your Google Business Profile, website and competitors to find exactly what's holding your rankings back.",
    tag: "DEEP AUDIT",
  },
  {
    n: "02",
    title: "Optimize",
    text: "Every issue gets fixed — profile completeness, on-page SEO, site speed and technical errors, all cleaned up.",
    tag: "FULL FIX-UP",
  },
  {
    n: "03",
    title: "Rank",
    text: "Citations, review strategy and content build steady momentum until your business climbs the map pack.",
    tag: "MOMENTUM",
  },
  {
    n: "04",
    title: "Report",
    text: "Clear monthly reports in plain language — rankings, calls and traffic, so you always know what's working.",
    tag: "NO JARGON",
  },
];

/**
 * Salman-style service cards with big step numbers: the reference
 * Experience timeline isn't clearly visible in the frames, so the four
 * steps use the same card pattern as the Services grid, with the big
 * gradient step number in place of the icon tile.
 */
export default function Process() {
  return (
    <section aria-label="How I work" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="salman-eyebrow">How I work</p>
          <h2 className="salman-h2 mt-4">
            Precision
            <br />
            <span className="text-gradient-accent">applied.</span>
          </h2>
          <p className="salman-sub">
            A clear process keeps the ambition high without losing
            usability, performance or the real objective — more customers.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 80} className="h-full">
              <article className="card-surface card-hover flex h-full flex-col p-7 sm:p-8">
                <span
                  aria-hidden
                  className="grad-text font-sans text-5xl font-extrabold leading-none"
                >
                  {step.n}
                </span>
                <p className="mt-6 font-mono text-[0.65rem] tracking-[0.25em] text-cyan">
                  {step.tag}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-mist-100">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-mist-500">
                  {step.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
