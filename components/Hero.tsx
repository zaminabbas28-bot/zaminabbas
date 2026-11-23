import Link from "next/link";
import Reveal from "./Reveal";
import HeroVideoCycler from "./HeroVideoCycler";
import TypingRoles from "./TypingRoles";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-950 text-mist-100">
      {/* violet / cyan ambient glows (approved hero) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-violet/20 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-40">
        {/* ---------- Left: copy ---------- */}
        <div>
          <Reveal>
            <span className="hero-badge">
              <span className="dot" aria-hidden="true" />
              Available for Freelance Work
            </span>
            <p className="label-caps mt-6 !text-sm sm:!text-base">
              Zamin Abbas &mdash; Local SEO Expert &amp; WordPress Developer
              in Multan
            </p>
            <h1 className="display-mega mt-4 font-sans text-[2.9rem] sm:text-7xl lg:text-[5.2rem]">
              Local SEO Expert
              <br />
              in Multan,{" "}
              <span className="text-gradient-accent">Pakistan.</span>
            </h1>
            <p className="mt-5 font-display text-xl font-bold sm:text-2xl">
              <TypingRoles />
            </p>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-mist-300 sm:text-2xl">
              I help restaurants, salons and clinics in Multan get found on
              Google Maps &mdash; with fully optimized Business Profiles and
              fast, mobile-friendly websites that turn nearby searches into
              bookings, calls and walk-ins.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold"
              >
                Let&rsquo;s Work Together
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-black/20 px-8 py-4 text-sm font-bold text-mist-100 transition hover:border-violet hover:text-violet dark:border-white/20"
              >
                See My Work
              </Link>
              <Link
                href="#demos"
                className="inline-flex items-center gap-2 rounded-full border border-black/20 px-8 py-4 text-sm font-bold text-mist-100 transition hover:border-violet hover:text-violet dark:border-white/20"
              >
                See Live Demos
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-mist-500">
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Available for projects
              </span>
              <span>Multan, Pakistan &middot; Working worldwide</span>
            </div>
            <div className="mt-10 flex flex-wrap">
              <div className="border-l border-black/15 pr-7 pl-0 first:border-l-0 first:pl-0 dark:border-white/15">
                <strong className="grad-text block font-display text-3xl font-extrabold">
                  19+
                </strong>
                <span className="text-sm text-mist-500">Free Tools</span>
              </div>
              <div className="border-l border-black/15 px-7 dark:border-white/15">
                <strong className="grad-text block font-display text-3xl font-extrabold">
                  580+
                </strong>
                <span className="text-sm text-mist-500">Keywords Researched</span>
              </div>
              <div className="border-l border-black/15 px-7 dark:border-white/15">
                <strong className="grad-text block font-display text-3xl font-extrabold">
                  96%
                </strong>
                <span className="text-sm text-mist-500">Site Health</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- Right: hero video cycler ---------- */}
        <Reveal delay={180} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <HeroVideoCycler />
        </Reveal>
      </div>
    </section>
  );
}
