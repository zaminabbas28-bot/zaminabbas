import Link from "next/link";
import { ChatIcon, LocationIcon, MailIcon, PhoneIcon } from "./icons";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold text-white">
              Zamin <span className="text-gold-gradient">Abbas</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist-300">
              SEO specialist &amp; web developer helping businesses grow online with
              data-driven strategies and high-performance websites.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-display text-sm font-bold tracking-widest text-gold-400 uppercase">
              Quick Links
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mist-300 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-sm font-bold tracking-widest text-gold-400 uppercase">
              Get In Touch
            </p>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <p className="flex items-start gap-3 text-mist-300">
                <LocationIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                {SITE.address}
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-mist-300 transition-colors hover:text-gold-300"
                >
                  <MailIcon className="h-5 w-5 shrink-0 text-gold-400" />
                  {SITE.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="flex items-center gap-3 text-mist-300 transition-colors hover:text-gold-300"
                >
                  <PhoneIcon className="h-5 w-5 shrink-0 text-gold-400" />
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-mist-300 transition-colors hover:text-gold-300"
                >
                  <ChatIcon className="h-5 w-5 shrink-0 text-gold-400" />
                  WhatsApp: {SITE.phoneDisplay}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-mist-500">© 2026 {SITE.name}. All rights reserved.</p>
          <p className="text-sm text-mist-500">
            SEO Specialist &amp; Web Developer — {SITE.locality}, {SITE.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
