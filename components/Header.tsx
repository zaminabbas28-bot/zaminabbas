"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";
import { ArrowUpRightIcon, CloseIcon, MenuIcon, SearchIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className={`flex items-center gap-1 rounded-full border border-white/10 bg-ink-900/80 py-1.5 pl-2 pr-1.5 shadow-2xl shadow-black/60 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "bg-ink-900/95" : ""
        }`}
      >
        <Link
          href="/#top"
          aria-label={`${SITE.name} — home`}
          className="mr-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet to-accent-pink font-display text-base font-bold text-white"
        >
          Z
        </Link>

        <ul className="hidden items-center md:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  i === 0
                    ? "bg-white/10 font-medium text-white"
                    : "text-mist-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 hidden items-center gap-1.5 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15 md:inline-flex"
        >
          Hire Me
        </Link>

        <Link
          href="/#insights"
          aria-label="Search insights"
          className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors hover:text-white md:inline-flex"
        >
          <SearchIcon className="h-4 w-4" />
        </Link>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="absolute top-full mt-2 w-[calc(100%-2rem)] max-w-sm rounded-3xl border border-white/10 bg-ink-900/95 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl md:hidden"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-mist-100 hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-base font-medium text-white"
              >
                Hire Me <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
