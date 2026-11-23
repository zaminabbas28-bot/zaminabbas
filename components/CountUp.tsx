"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Final value to count up to (e.g. 19, 580, 96). */
  value: number;
  /** Suffix rendered after the number (e.g. "+", "%"). */
  suffix?: string;
  /** Animation length in ms. */
  duration?: number;
}

/**
 * Counts up from 0 to `value` the first time it scrolls into view.
 * Respects prefers-reduced-motion: shows the final value immediately.
 * No new dependencies — IntersectionObserver + requestAnimationFrame only.
 */
export default function CountUp({ value, suffix = "", duration = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || started.current) continue;
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // easeOutCubic: fast start, gentle landing
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
