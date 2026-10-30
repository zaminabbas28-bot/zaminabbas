"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

const CAPABILITIES = [
  {
    n: "01",
    kicker: "LOCAL SEO",
    title: "Local SEO & Google Maps Ranking",
    text: "Get your business into the Google Map 3-pack. Complete profile optimization, local citations, review strategy and map-pack ranking systems that bring calls from nearby customers.",
    tags: ["Google Maps", "3-Pack Ranking", "Reviews"],
    gradient: "from-accent via-accent-deep to-mist-100",
    glow: "rgba(255,106,0,0.45)",
    slug: "local-seo",
  },
  {
    n: "02",
    kicker: "WORDPRESS",
    title: "WordPress Development",
    text: "Fast, SEO-ready WordPress websites — business sites, e-commerce stores and custom builds like restaurant management systems with online ordering, reservations and billing.",
    tags: ["Business Websites", "WooCommerce", "Speed"],
    gradient: "from-accent via-accent-deep to-mist-100",
    glow: "rgba(255,106,0,0.45)",
    slug: "wordpress-development",
  },
  {
    n: "03",
    kicker: "GBP",
    title: "Google Business Profile Optimization",
    text: "Fully optimized GBP: correct categories, services, products, posts, photos and Q&A — everything Google needs to show your business more often and build customer trust.",
    tags: ["Profile Setup", "Categories", "Posts"],
    gradient: "from-accent via-accent-deep to-mist-100",
    glow: "rgba(255,106,0,0.4)",
    slug: "google-business-profile",
  },
  {
    n: "04",
    kicker: "SOCIAL",
    title: "Social Media Marketing",
    text: "Content and campaigns that keep your brand visible where your customers spend time — profile optimization, monthly content and growth-focused posting.",
    tags: ["Content", "Profiles", "Growth"],
    gradient: "from-accent via-accent-deep to-mist-100",
    glow: "rgba(255,106,0,0.45)",
    slug: "social-media-marketing",
  },
  {
    n: "05",
    kicker: "ADS",
    title: "Google Ads",
    text: "High-intent search campaigns for local businesses — keyword targeting, ad copy and conversion tracking set up to turn ad spend into booked jobs and sales.",
    tags: ["Search Ads", "Targeting", "ROI"],
    gradient: "from-accent via-accent-deep to-mist-100",
    glow: "rgba(255,106,0,0.45)",
    slug: "google-ads",
  },
];

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);
  return progress;
}

export default function Capabilities() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);
  const count = CAPABILITIES.length;

  return (
    <section ref={sectionRef} id="services" aria-label="Capabilities" className="relative bg-ink-950">
      {/* header */}
      <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <p className="label-caps !text-gold">Capabilities — scroll to explore</p>
          <h2 className="display-mega mt-4 max-w-3xl font-sans text-4xl text-mist-100 sm:text-6xl">
            Scroll through <span className="text-gradient-accent">what I do.</span>
          </h2>
        </Reveal>
      </div>

      {/* 3D fan stage */}
      <div className="relative h-[320vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* subtle warm wash behind the fan only, so the glass translucency reads on the flat white section */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_50%,rgba(255,106,0,0.09),rgba(255,106,0,0)_70%)]"
          />
          <div
            className="relative h-[560px] w-full max-w-6xl"
            style={{ perspective: "1400px" }}
          >
            {CAPABILITIES.map((cap, i) => {
              // fan position: cards travel left as you scroll, active card centers
              const offset = i - progress * (count - 1);
              const abs = Math.abs(offset);
              const spread = typeof window !== "undefined" && window.innerWidth < 640 ? 190 : 330;
              const x = offset * spread;
              const rotateY = Math.max(Math.min(offset * -16, 38), -38);
              const rotateX = 4;
              const scale = Math.max(1 - abs * 0.14, 0.55);
              const z = 100 - Math.round(abs * 10);
              const opacity = abs > 2.4 ? 0 : 1;
              const blur = abs > 1.6 ? `blur(${(abs - 1.6) * 1}px)` : "none";
              const dim = abs > 0.6 ? `brightness(${Math.max(1 - (abs - 0.6) * 0.15, 0.75)})` : "none";

              return (
                <article
                  key={cap.n}
                  aria-label={cap.title}
                  className={`absolute left-1/2 top-1/2 h-[440px] w-[300px] sm:h-[480px] sm:w-[380px] rounded-[1.75rem] bg-gradient-to-br ${cap.gradient} p-[1px] transition-opacity duration-300`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${x}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
                    transformStyle: "preserve-3d",
                    zIndex: z,
                    opacity,
                    filter: `${blur} ${dim}`,
                    boxShadow: `0 40px 90px -30px ${cap.glow}, 0 16px 40px -16px rgba(0,0,0,0.18)`,
                    willChange: "transform",
                  }}
                >
                  <div className="flex h-full flex-col justify-between rounded-[calc(1.75rem-1px)] bg-white/65 p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] ring-1 ring-inset ring-white/70 backdrop-blur-sm sm:p-8">
                    <div>
                      <p className="font-mono text-[0.65rem] tracking-[0.25em] text-mist-100/60">
                        {cap.n} / {cap.kicker}
                      </p>
                      <h3 className="mt-3 font-sans text-2xl font-extrabold leading-tight text-mist-100 sm:text-[1.7rem]">
                        {cap.title}
                      </h3>
                      <p className="mt-4 text-[0.95rem] leading-relaxed text-mist-100/70">
                        {cap.text}
                      </p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {cap.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-black/20 bg-black/10 px-3 py-1 font-mono text-[0.62rem] tracking-[0.08em] text-mist-100/85"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/services/${cap.slug}`}
                          aria-label={`Learn more about ${cap.title}`}
                          className="inline-flex items-center gap-2 rounded-full border border-black/25 px-5 py-3 text-sm font-semibold text-mist-100/90 transition hover:border-black/60 hover:text-mist-100"
                        >
                          Learn More <span aria-hidden>&rarr;</span>
                        </Link>
                        <Link
                          href={SITE.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Discuss ${cap.title} on WhatsApp`}
                          className="inline-flex items-center gap-2 rounded-full bg-mist-100 px-6 py-3 text-sm font-bold text-ink-950 transition hover:bg-mist-300"
                        >
                          Start Project <span aria-hidden>&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* progress hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="h-1 w-40 overflow-hidden rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft transition-[width] duration-150"
                style={{ width: `${8 + progress * 92}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
