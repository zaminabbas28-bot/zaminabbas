import Image from "next/image";
import Link from "next/link";
import { HERO_PHOTOS, SITE } from "@/lib/site";
import { ArrowRightIcon, ArrowUpRightIcon } from "./icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-0">
      {/* soft glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent-violet/15 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-40 h-[380px] w-[380px] rounded-full bg-accent-pink/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Left: headline + photos */}
          <div>
            <Reveal>
              <h1 className="font-display text-[clamp(3.2rem,9vw,7rem)] leading-[0.95] text-white">
                Local SEO
                <br />
                <em className="text-gradient-accent pr-2">expert</em>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="label-caps mt-6">
                Based in Multan, Pakistan · Ranking local businesses since 2022
              </p>
            </Reveal>

            {/* photo stack */}
            <Reveal delay={200}>
              <div className="relative mt-10 flex h-44 items-center sm:h-52" aria-label="Photos of Rana">
                {HERO_PHOTOS.map((photo, i) => (
                  <div
                    key={photo.src}
                    className="photo-tilt animate-floaty absolute overflow-hidden rounded-2xl"
                    style={
                      {
                        left: `${i * 24}%`,
                        width: "34%",
                        aspectRatio: "1 / 1",
                        transform: `rotate(${photo.rotate})`,
                        zIndex: HERO_PHOTOS.length - i,
                        animationDelay: `${i * 0.7}s`,
                        "--float-rotate": photo.rotate,
                      } as React.CSSProperties
                    }
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 40vw, 220px"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: availability + name */}
          <div className="lg:pb-2 lg:text-right">
            <Reveal delay={150}>
              <p className="label-caps flex items-center gap-2 lg:justify-end">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for projects
              </p>
              <Link
                href={SITE.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-2 font-display text-2xl text-white transition-colors hover:text-accent-pink sm:text-3xl"
              >
                Zeeshi Local SEO Expert
                <ArrowUpRightIcon className="h-6 w-6 text-mist-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-pink" />
              </Link>
              <p className="label-caps mt-1">Hire me on Fiverr</p>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-8 text-xl text-mist-300 sm:text-2xl">
                Marketing with data.
                <br />
                Built to rank.
              </p>
              <p className="font-display mt-4 text-[clamp(2.6rem,6vw,4.5rem)] leading-none text-white/90">
                Rana
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* bottom strip */}
      <Reveal delay={100}>
        <div className="relative mx-auto mt-16 max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-2 overflow-hidden rounded-t-3xl border border-b-0 border-white/10 bg-ink-900/60 backdrop-blur-sm lg:grid-cols-4">
            <div className="border-b border-r border-white/10 p-5 sm:p-6">
              <p className="label-caps flex items-center gap-2">
                <span className="h-2 w-2 rounded-[2px] bg-emerald-400" /> Now
              </p>
              <p className="mt-3 font-medium text-white">Local SEO Expert</p>
              <p className="mt-1 text-sm text-mist-500">Zeeshi Local SEO Expert · Multan</p>
            </div>
            <div className="border-b border-white/10 p-5 sm:p-6 lg:border-r">
              <p className="label-caps flex items-center gap-2">
                <span className="h-2 w-2 rounded-[2px] bg-accent-orange" /> Services
              </p>
              <p className="mt-3 font-medium text-white">What I do</p>
              <p className="mt-1 text-sm text-mist-500">Local SEO · WordPress · Social</p>
            </div>
            <div className="border-r border-white/10 p-5 sm:p-6">
              <p className="label-caps flex items-center gap-2">
                <span className="h-2 w-2 rounded-[2px] bg-sky-400" /> Insights
              </p>
              <p className="mt-3 font-medium text-white">SEO playbooks</p>
              <p className="mt-1 text-sm text-mist-500">Tips that actually rank</p>
            </div>
            <div className="p-5 sm:p-6">
              <p className="label-caps flex items-center gap-2">
                <span className="h-2 w-2 rounded-[2px] bg-accent-pink" /> Reach out
              </p>
              <Link
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex w-full items-center justify-between rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/25 hover:bg-white/10"
              >
                Start a conversation
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink-950 transition-transform group-hover:translate-x-1">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
