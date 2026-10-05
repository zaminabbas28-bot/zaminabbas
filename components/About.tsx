import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon, CheckIcon } from "./icons";
import { STATS } from "@/lib/site";

const CHECKLIST = [
  "10+ Years SEO Experience",
  "500+ Websites Ranked",
  "Top Rated Freelancer",
  "Expertise in Local & Technical SEO",
] as const;

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-gold-500/10 blur-2xl"
              />
              <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-8 sm:p-10">
                <div aria-hidden className="grid grid-cols-4 gap-3 opacity-60">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-14 rounded-xl bg-gradient-to-br from-gold-400/25 to-transparent"
                    />
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <span
                    aria-hidden
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-600 font-display text-2xl font-extrabold text-ink-950"
                  >
                    ZA
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-white">Zamin Abbas</p>
                    <p className="text-sm text-mist-300">Multan, Pakistan</p>
                  </div>
                </div>
                <p className="mt-6 border-l-2 border-gold-400 pl-4 text-sm text-mist-300 italic">
                  “Rankings are earned with strategy, patience, and clean execution — never
                  shortcuts.”
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-bold tracking-[0.3em] text-gold-400 uppercase">
                About Me
              </p>
              <h2
                id="about-heading"
                className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                Driving Growth With <span className="text-gold-gradient">Smart SEO</span> &amp;
                Web Solutions
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-lg leading-relaxed text-mist-300">
                I&apos;m Zamin Abbas, an SEO specialist and web developer helping businesses
                grow online through data-driven strategies and high-performance websites.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Experience highlights">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-mist-100">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-base font-bold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-xl hover:shadow-gold-500/25"
              >
                Hire Me <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal delay={150}>
          <dl className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="card-glow rounded-2xl border border-white/10 bg-ink-900/70 p-6 text-center"
              >
                <dt className="order-2 mt-2 block text-sm text-mist-300">{stat.label}</dt>
                <dd className="order-1 font-display text-3xl font-extrabold text-gold-gradient sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
