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
 * Dark-mode toggle (approved design): a round button that swaps between
 * a sun (dark mode on) and a moon (light mode on) icon.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
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
    return <span aria-hidden className="inline-block h-10 w-10 shrink-0 rounded-full border border-black/10 dark:border-white/20" />;
  }

  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => applyTheme(dark ? "light" : "dark")}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/15 bg-ink-850 text-mist-100 transition-colors hover:border-violet dark:border-white/20"
    >
      {dark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-[19px] w-[19px]" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[19px] w-[19px]" aria-hidden>
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}
