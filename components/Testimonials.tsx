"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { REVIEWS } from "@/lib/site";
import { PauseIcon, PlayIcon, QuoteIcon, StarIcon } from "./icons";
import Reveal from "./Reveal";

const CARD_GRADIENTS = [
  "from-orange-100 via-amber-50 to-white",
  "from-sky-100 via-blue-50 to-white",
  "from-emerald-100 via-teal-50 to-white",
  "from-amber-100 via-orange-50 to-white",
  "from-blue-100 via-indigo-50 to-white",
  "from-rose-100 via-pink-50 to-white",
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
    <section id="reviews" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps">Testimonials</p>
          <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
            Word on the <em className="text-gradient-accent">street</em>
          </h2>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted">
            <span className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            5.0 average across Google reviews
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
                    <QuoteIcon className="h-7 w-7 text-accent/30" />
                    <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-ink">
                      “{review.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-white">
                      {review.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">
                        {review.name}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <StarIcon className="h-3 w-3 text-amber-500" /> Google review
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 shadow-sm">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-ink" : "w-1.5 bg-line-dark hover:bg-muted"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play testimonials" : "Pause testimonials"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-colors hover:bg-cream"
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
