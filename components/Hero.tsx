import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

const CHECKLIST = [
  "Google Business Profile setup & optimization",
  "Google Maps 3-pack ranking strategy",
  "SEO-ready WordPress development",
  "Fast, direct communication",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0a0f1c] text-white"
    >
      {/* subtle orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-accent/15 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pt-36">
        {/* ---------- Left: copy ---------- */}
        <div>
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-accent">
              I&rsquo;M RANA
            </p>
            <h1 className="mt-5 font-sans text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Get Found.
              <br />
              Get Calls.
              <br />
              <span className="text-gradient-accent">Grow Local.</span>
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-white/70">
              Local SEO expert in Multan, Pakistan. I put local businesses on
              the Google Map — optimized profiles, map-pack rankings, and
              WordPress websites built to convert.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 font-mono text-xs tracking-[0.25em] text-white/50">
              WHY WORK WITH ME?
            </p>
            <ul className="mt-4 space-y-3">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-white/85">
                  <span aria-hidden className="h-2.5 w-2.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="https://www.fiverr.com/zaminabbas28"
                target="_blank"
                rel="noopener"
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/85 transition hover:border-accent hover:text-accent"
              >
                Fiverr
              </Link>
              <Link
                href={SITE.linkedin}
                target="_blank"
                rel="noopener"
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/85 transition hover:border-accent hover:text-accent"
              >
                LinkedIn
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white transition hover:bg-accent-deep"
              >
                Hire Me
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
              >
                See My Work
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ---------- Right: photo ---------- */}
        <Reveal delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            {/* giant outlined letterform */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-16 right-0 select-none font-sans text-[11rem] font-extrabold leading-none text-transparent sm:text-[15rem]"
              style={{ WebkitTextStroke: "2px rgba(249,106,27,0.35)" }}
            >
              R
            </span>
            {/* orange outlined frame */}
            <div
              aria-hidden
              className="absolute -right-4 -top-4 h-full w-full rounded-3xl border-2 border-accent/70"
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/rana-1.jpg"
                alt="Rana — Local SEO expert in Multan, Pakistan"
                width={880}
                height={1060}
                priority
                className="h-auto w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent"
              />
            </div>
            {/* orange bar at bottom edge */}
            <div aria-hidden className="absolute -bottom-3 left-10 right-10 h-2 rounded-full bg-accent" />
            {/* availability badge */}
            <div className="absolute -left-3 top-8 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-ink shadow-xl sm:-left-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              AVAILABLE FOR PROJECTS
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
