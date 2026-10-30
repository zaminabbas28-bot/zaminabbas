"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { REVIEWS } from "@/lib/site";
import { PauseIcon, PlayIcon, QuoteIcon, StarIcon } from "./icons";
import Reveal from "./Reveal";

const CARD_GRADIENTS = [
  "from-gold/25 via-gold-deep/20 to-ink-900",
  "from-gold-soft/20 via-gold/15 to-ink-900",
  "from-[#FFEDD5]/20 via-gold-deep/25 to-ink-900",
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % REVIEWS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, 4500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, next]);

  const visible = 3;
  const cards = Array.from({ length: visible }, (_, k) => REVIEWS[(index + k) % REVIEWS.length]);

  return (
    <section id="reviews" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps">Testimonials</p>
          <h2 className="font-display mt-3 text-4xl text-mist-100 sm:text-5xl">
            Word on the <em className="text-gradient-accent">street</em>
          </h2>
          <p className="mt-4 flex items-center gap-2 text-sm text-mist-500">
            <span className="flex text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            Client testimonials
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="mt-12 overflow-hidden">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {cards.map((review, k) => (
                <figure
                  key={`${review.name}-${k}`}
                  className={`card-surface relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-gradient-to-br p-7 ${CARD_GRADIENTS[(index + k) % CARD_GRADIENTS.length]}`}
                >
                  <div>
                    <QuoteIcon className="h-7 w-7 text-gold/30" />
                    <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-mist-100">
                      “{review.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 font-display text-sm font-bold text-accent-deep backdrop-blur-sm">
                      {review.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-mist-100">
                        {review.name}
                      </span>
                      <span className="mt-1 flex items-center gap-0.5 text-accent">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <StarIcon key={i} className="h-3 w-3" />
                        ))}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2.5">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-mist-100" : "w-1.5 bg-black/30 hover:bg-black/50"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play testimonials" : "Pause testimonials"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-mist-100 transition-colors hover:bg-black/10"
              >
                {paused ? <PlayIcon className="h-4 w-4" /> : <PauseIcon className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
