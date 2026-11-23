"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_PHOTOS, SITE, STATS } from "@/lib/site";
import Reveal from "./Reveal";

const SLIDE_MS = 4000;

function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % HERO_PHOTOS.length),
      SLIDE_MS
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative mx-auto max-w-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-[1.25rem] border border-black/10 bg-ink-900 dark:border-white/15">
        <div className="relative overflow-hidden bg-ink-900">
          {/* sliding track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {HERO_PHOTOS.map((photo, i) => (
              <div key={photo.src} className="relative aspect-[4/5] w-full shrink-0">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 420px"
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"
          />
          {/* slide dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {HERO_PHOTOS.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-gold" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          {/* counter */}
          <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 font-mono text-[0.65rem] tracking-[0.15em] text-white/80 backdrop-blur-sm">
            {index + 1} / {HERO_PHOTOS.length}
          </span>
          {/* prev/next arrows */}
          <button
            type="button"
            onClick={() => setIndex((index - 1 + HERO_PHOTOS.length) % HERO_PHOTOS.length)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/80 backdrop-blur-sm transition hover:bg-black/90 hover:text-white"
          >
            <span aria-hidden>&larr;</span>
          </button>
          <button
            type="button"
            onClick={() => setIndex((index + 1) % HERO_PHOTOS.length)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/80 backdrop-blur-sm transition hover:bg-black/90 hover:text-white"
          >
            <span aria-hidden>&rarr;</span>
          </button>
        </div>
        <div className="flex items-center justify-between bg-ink-850 px-4 py-4">
          <div>
            <p className="font-medium text-mist-100">{SITE.fullName}</p>
            <p className="text-sm text-mist-500">
              {SITE.locality}, {SITE.country}
            </p>
          </div>
          <span className="tag-pill">● OPEN TO WORK</span>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal delay={150}>
            <PhotoCarousel />
          </Reveal>

          <div>
            <Reveal>
              <p className="salman-eyebrow">Know about me</p>
              <h2 className="salman-h2 mt-3">
                Local SEO specialist,
                <br />
                with a marketer&apos;s{" "}
                <span className="text-gradient-accent">instinct</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 space-y-5 leading-relaxed text-mist-300">
                <p>
                  I&apos;m Zamin Abbas, an SEO expert in Multan, Pakistan,
                  and local SEO specialist in Multan, working in SEO since 2018. I help small and medium businesses get found where it
                  matters most — on Google Maps and in local search results. My
                  agency, <strong className="text-mist-100">Zamin Abbas Local SEO Expert</strong>,
                  is built on one belief: visibility should turn into customers,
                  not just impressions.
                </p>
                <p>
                  Beyond local SEO, I design and develop fast WordPress websites and
                  run social media marketing that actually grows brands. Every
                  project gets the same treatment — data first, honest reporting,
                  and white-hat work that holds its rankings.
                  If you are searching for the best local SEO expert in Multan, that is the standard to judge by.
                  Businesses looking for the best digital marketing agency in Multan usually want one place for SEO, websites and social — that is exactly what this agency covers.
                  If you are searching for a top ranked SEO &amp; AI search specialist in Multan, that is the same standard — local SEO plus AI search visibility (GEO), so your business shows up in Google results and in AI answers too.
                </p>
                <p>
                  When I&apos;m not optimizing profiles or auditing sites, I&apos;m
                  studying how Google&apos;s local algorithm shifts — so my clients
                  never have to.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="salman-stat">
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
