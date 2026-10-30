"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/site";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/10 dark:border-white/15 bg-ink-950/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        {/* Logo */}
        <Link
          href="/#top"
          aria-label={`${SITE.name} — home`}
          className="flex items-center gap-2.5"
        >
          <Image
            src="/images/za-logo.jpg"
            alt="Zamin Abbas logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-cover"
          />
          <span className="font-sans text-sm font-extrabold tracking-[0.18em] text-mist-100">
            ZAMIN&nbsp;ABBAS
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-mist-300 transition-colors hover:bg-black/5 dark:bg-white/10 dark:hover:bg-white/10 hover:text-mist-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-ink-950 transition hover:bg-accent-deep"
          >
            Let&rsquo;s Work Together
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile actions: theme toggle + menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/15 text-mist-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="mx-4 mb-4 rounded-3xl border border-black/10 dark:border-white/15 bg-ink-900/95 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl lg:hidden"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-mist-100 hover:bg-black/5 dark:bg-white/10 dark:hover:bg-white/10"
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
                className="flex items-center justify-center gap-2 rounded-2xl bg-gold px-4 py-3 text-base font-bold text-ink-950"
              >
                Let&rsquo;s Work Together <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
