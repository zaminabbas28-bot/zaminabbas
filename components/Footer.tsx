import Link from "next/link";
import { ChatIcon, LinkedInIcon, LocationIcon, MailIcon, PhoneIcon } from "./icons";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl text-ink">
              Rana <em className="text-gradient-accent">.</em>
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              Local SEO expert in Multan, Pakistan — helping businesses rank #1 on
              Google Maps.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={`tel:${SITE.phoneHref}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <PhoneIcon className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <MailIcon className="h-4 w-4" /> Email
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <ChatIcon className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
            <span className="inline-flex items-center gap-2">
              <LocationIcon className="h-4 w-4" /> {SITE.locality}, {SITE.country}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
