import Link from "next/link";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-950 text-mist-100">
      {/* gold ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-gold/10 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-gold/5 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pt-40">
        {/* ---------- Left: copy ---------- */}
        <div>
          <Reveal>
            <p className="label-caps !text-gold">
              Zamin Abbas &mdash; Local SEO Expert &amp; Web Developer
            </p>
            <h1 className="display-mega mt-6 font-sans text-[2.9rem] sm:text-7xl lg:text-[5.2rem]">
              Local SEO Expert
              <br />
              in Multan,{" "}
              <span className="text-gradient-accent">Pakistan.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist-300 sm:text-xl">
              I build fast, mobile-friendly websites for restaurants, salons
              and clinics in Multan — designed to turn Google searches into
              bookings, calls and walk-ins.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-ink-950 transition hover:bg-accent-deep"
              >
                Let&rsquo;s Work Together
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 px-8 py-4 text-sm font-bold text-mist-100 transition hover:border-gold hover:text-gold"
              >
                See My Work
              </Link>
              <Link
                href="#demos"
                className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 px-8 py-4 text-sm font-bold text-mist-100 transition hover:border-gold hover:text-gold"
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
          </Reveal>
        </div>

        {/* ---------- Right: hero video (frameless, blends into background) ---------- */}
        <Reveal delay={180} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden [mask-image:radial-gradient(ellipse_78%_78%_at_50%_42%,black_52%,transparent_76%)]">
              <video
                src="/videos/hero-video.mp4"
                poster="/videos/hero-video-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Zamin Abbas — cinematic intro video"
                className="h-full w-full object-cover"
              />
              {/* top-down spotlight effect */}
              <div aria-hidden className="spotlight-top-glow" />
              <div aria-hidden className="spotlight-beam" />
              <div aria-hidden className="spotlight-floor" />
            </div>
            {/* floating badge */}
            <div className="absolute -left-4 top-6 rounded-2xl border border-gold/30 bg-black/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-8">
              <p className="font-mono text-[0.65rem] tracking-[0.2em] text-gold">
                GOOGLE MAPS
              </p>
              <p className="mt-1 font-sans text-sm font-bold text-white">
                Ranking Specialist
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
