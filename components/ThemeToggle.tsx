"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "zamin-theme";

function readTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // private mode: theme just lasts for the visit
  }
  window.dispatchEvent(new CustomEvent("theme-change", { detail: theme }));
}

/**
 * Dark-mode toggle, designed as a pill switch: a sliding orange knob
 * travels between a sun (light) and a moon (dark) icon.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(readTheme());
    setMounted(true);
    const onChange = (e: Event) => {
      const next = (e as CustomEvent<"light" | "dark">).detail;
      if (next === "light" || next === "dark") setTheme(next);
    };
    window.addEventListener("theme-change", onChange);
    return () => window.removeEventListener("theme-change", onChange);
  }, []);

  if (!mounted) {
    // Same-size placeholder so the header never shifts on hydration.
    return <span aria-hidden className="inline-block h-9 w-16 rounded-full border border-black/10" />;
  }

  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => applyTheme(dark ? "light" : "dark")}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border border-black/10 bg-ink-850 px-1.5 transition-colors duration-300 hover:border-accent/60 dark:border-white/20 dark:bg-ink-700"
    >
      {/* sun (light) */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4 text-accent" aria-hidden>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      {/* moon (dark) */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto h-4 w-4 text-mist-500" aria-hidden>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      {/* sliding orange knob */}
      <span
        aria-hidden
        className={`absolute left-1.5 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-accent shadow-md shadow-black/30 transition-transform duration-300 ${dark ? "translate-x-7" : "translate-x-0"}`}
      />
    </button>
  );
}
