"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  as?: ElementType;
}

/**
 * Fades content in when it enters the viewport using IntersectionObserver.
 * Pure CSS transitions — no animation libraries.
 */
export default function Reveal({ children, className = "", delay = 0, as }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Failsafe: never leave content faded — force visible after 2.5s
    // even if the observer never fires (slow devices, odd viewports).
    const fallback = window.setTimeout(() => {
      el.classList.add("is-visible");
    }, 2500);
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      window.clearTimeout(fallback);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            window.clearTimeout(fallback);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(el);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
