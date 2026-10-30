import Image from "next/image";
import Link from "next/link";
import { SITE, TOOLKIT } from "@/lib/site";
import { ArrowRightIcon, ArrowUpRightIcon, LinkedInIcon, MapPinIcon } from "./icons";
import Reveal from "./Reveal";

export default function Bento() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-28 sm:py-36">
      {/* gold ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gold/8 blur-[160px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* ---------- Mega closer ---------- */}
        <Reveal>
          <div className="text-center">
            <h2 className="display-mega font-sans text-5xl text-mist-100 sm:text-7xl lg:text-8xl">
              Have a business?
              <br />
              <span className="text-gradient-accent">Let&rsquo;s get it found.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-mist-500">
              Available for local SEO projects, WordPress builds and Google
              Business Profile optimization.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
              <Link
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-ink-950 transition hover:bg-accent-deep"
              >
                Start a Conversation
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
              <Link
                href="#top"
                className="inline-flex items-center gap-2 text-sm font-medium text-mist-500 transition-colors hover:text-mist-100"
              >
                Back to top <span aria-hidden>&uarr;</span>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* ---------- Free audit banner ---------- */}
        <Reveal delay={80}>
          <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-gold/25 bg-gold/5 p-6 text-center sm:flex-row sm:justify-between sm:p-7 sm:text-left">
            <div>
              <p className="text-lg font-bold text-mist-100">Get a free Local SEO audit</p>
              <p className="mt-1 text-sm text-mist-300">
                I&rsquo;ll check your Google Business Profile, rankings &amp; site health — no charge.
              </p>
            </div>
            <Link
              href={`${SITE.whatsapp}?text=${encodeURIComponent("Hi! I want a free SEO audit for my business.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-gold px-6 py-3 text-sm font-bold text-ink-950 transition hover:bg-accent-deep"
            >
              Claim free audit
            </Link>
          </div>
        </Reveal>

        {/* ---------- Contact cards ---------- */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* toolkit */}
          <Reveal>
            <div className="card-surface card-hover flex h-full min-h-[300px] flex-col justify-between p-7">
              <div className="flex flex-wrap gap-2">
                {TOOLKIT.slice(0, 6).map((tool) => (
                  <span key={tool} className="tag-pill">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <p className="label-caps !text-gold">Toolkit</p>
                <p className="mt-2 text-lg font-medium text-mist-100">My SEO arsenal</p>
              </div>
            </div>
          </Reveal>

          {/* journey */}
          <Reveal delay={100}>
            <div className="card-surface card-hover relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden p-7">
              <div>
                <p className="label-caps !text-gold">Behind the rankings</p>
                <p className="mt-2 text-lg font-medium text-mist-100">Journey &amp; experience</p>
                <p className="mt-3 text-sm leading-relaxed text-mist-500">
                  From Multan to the map pack — honest work, one clear report at a
                  time.
                </p>
              </div>
              <div className="relative mx-auto mt-6 w-40 overflow-hidden rounded-2xl border border-gold/20">
                <div className="relative aspect-square">
                  <Image
                    src="/images/zamin-abbas-local-seo-expert.jpg"
                    alt="Zamin Abbas"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* say hello */}
          <Reveal delay={200}>
            <Link
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface card-hover group flex h-full min-h-[300px] flex-col justify-between p-7"
            >
              <div className="relative">
                <p className="label-caps !text-gold">Say hello</p>
                <p className="mt-2 text-lg font-medium text-mist-100">Start a conversation</p>
                <p className="mt-3 text-sm leading-relaxed text-mist-500">
                  WhatsApp me at {SITE.phoneDisplay} — I reply fast, and the first
                  audit is free.
                </p>
              </div>
              <span className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink-950 transition-transform group-hover:translate-x-1">
                Chat now <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center gap-5 text-center">
            <Link
              href={SITE.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-medium text-mist-300 transition-colors hover:text-mist-100"
            >
              <span className="label-caps">Prefer Fiverr?</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/15 dark:border-white/15 px-4 py-2 transition-colors group-hover:border-gold/50">
                Order a gig <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="label-caps">Find me on</span>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zamin Abbas on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 dark:border-white/15 text-mist-300 transition-colors hover:border-gold/50 hover:text-gold"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE.gmb}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zamin Abbas Local SEO Expert on Google Maps"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 dark:border-white/15 text-mist-300 transition-colors hover:border-gold/50 hover:text-gold"
              >
                <MapPinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
