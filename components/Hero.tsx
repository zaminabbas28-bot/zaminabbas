import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon, BadgeCheckIcon, CheckIcon, TrendingUpIcon } from "./icons";

const CHECKLIST = [
  "250+ high-impact websites optimized",
  "Local SEO + conversion-focused design",
] as const;

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* decorative background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-ink-600/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-300 uppercase">
              <BadgeCheckIcon className="h-4 w-4" />
              Top Ranked SEO Specialist
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1
              id="hero-heading"
              className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Grow Fast, <span className="text-gold-gradient">Rank Higher</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 text-xl font-medium text-mist-300 sm:text-2xl">
              Proven SEO &amp; Web Development
            </p>
          </Reveal>

          <Reveal delay={300}>
            <ul className="mt-6 space-y-3" aria-label="Key achievements">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-mist-100">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-base font-bold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-xl hover:shadow-gold-500/25"
              >
                Hire Me <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-gold-400/60 hover:text-gold-300"
              >
                View Services
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Portrait card — pure CSS, no external images */}
        <Reveal delay={250} className="mx-auto w-full max-w-md">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-400/25 via-transparent to-gold-600/15 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900 p-8 shadow-2xl">
              <div aria-hidden className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gold-500/20 blur-3xl" />
              <div className="relative flex flex-col items-center text-center">
                <div className="animate-floaty relative">
                  <div
                    aria-hidden
                    className="absolute -inset-3 rounded-full border-2 border-dashed border-gold-400/40"
                  />
                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 font-display text-6xl font-extrabold text-ink-950 shadow-lg shadow-gold-500/30">
                    ZA
                  </div>
                </div>
                <p className="mt-6 font-display text-2xl font-bold text-white">Zamin Abbas</p>
                <p className="mt-1 text-sm font-medium tracking-wide text-gold-300">
                  SEO Specialist &amp; Web Developer
                </p>
                <div className="mt-6 grid w-full grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="flex items-center justify-center gap-1.5 font-display text-2xl font-bold text-gold-400">
                      <TrendingUpIcon className="h-5 w-5" /> 500+
                    </p>
                    <p className="mt-1 text-xs text-mist-300">Websites Ranked</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-display text-2xl font-bold text-gold-400">10+</p>
                    <p className="mt-1 text-xs text-mist-300">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
