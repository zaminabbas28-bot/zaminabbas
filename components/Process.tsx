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

export default function Process() {
  return (
    <section aria-label="How I work" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: mega heading */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="label-caps !text-gold">How I work</p>
            <h2 className="display-mega mt-4 font-sans text-5xl text-mist-100 sm:text-7xl">
              Precision
              <br />
              <span className="text-gradient-accent">applied.</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-mist-500">
              A clear process keeps the ambition high without losing
              usability, performance or the real objective — more customers.
            </p>
          </Reveal>
        </div>

        {/* Right: steps */}
        <div className="space-y-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <article className="card-surface card-hover group relative overflow-hidden p-7 sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold-soft via-gold to-gold-deep opacity-70"
                />
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[0.65rem] tracking-[0.25em] text-gold">
                      {step.n} &mdash; {step.tag}
                    </p>
                    <h3 className="mt-2 font-sans text-2xl font-bold text-mist-100 sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-lg leading-relaxed text-mist-500">
                      {step.text}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="hidden font-sans text-6xl font-extrabold text-gold/15 transition-colors group-hover:text-gold/30 sm:block"
                  >
                    {step.n}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
