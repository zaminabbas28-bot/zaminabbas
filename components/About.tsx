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
      className="about-photo-3d relative mx-auto max-w-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/25 via-accent-pink/10 to-transparent blur-2xl"
      />
      <div
        className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-gold/60 via-gold/15 to-transparent p-[1px]"
        style={{
          boxShadow:
            "0 40px 80px -30px rgba(216,180,96,0.35), 0 25px 60px -20px rgba(0,0,0,0.8)",
        }}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1.75rem-1px)] bg-ink-900">
          {HERO_PHOTOS.map((photo, i) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              priority={i === 0}
              className={`object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/80 to-transparent"
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
          <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 font-mono text-[0.65rem] tracking-[0.15em] text-white/80 backdrop-blur-sm">
            {index + 1} / {HERO_PHOTOS.length}
          </span>
        </div>
        <div className="flex items-center justify-between bg-ink-950/95 px-4 py-4">
          <div>
            <p className="font-medium text-white">{SITE.fullName}</p>
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
          <div>
            <Reveal>
              <p className="label-caps">Know about me</p>
              <h2 className="font-display mt-3 text-4xl leading-tight text-white sm:text-5xl">
                Local SEO specialist,
                <br />
                with a marketer&apos;s <em className="text-gradient-accent">instinct</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 space-y-5 leading-relaxed text-mist-300">
                <p>
                  I&apos;m Zamin Abbas, a local SEO expert based in Multan,
                  Pakistan. I help small and medium businesses get found where it
                  matters most — on Google Maps and in local search results. My
                  agency, <strong className="text-white">Zeeshi Local SEO Expert</strong>,
                  is built on one belief: visibility should turn into customers,
                  not just impressions.
                </p>
                <p>
                  Beyond local SEO, I design and develop fast WordPress websites and
                  run social media marketing that actually grows brands. Every
                  project gets the same treatment — data first, honest reporting,
                  and white-hat work that holds its rankings.
                </p>
                <p>
                  When I&apos;m not optimizing profiles or auditing sites, I&apos;m
                  studying how Google&apos;s local algorithm shifts — so my clients
                  never have to.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="label-caps">{stat.label}</dt>
                    <dd className="font-display mt-2 text-3xl text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <PhotoCarousel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
