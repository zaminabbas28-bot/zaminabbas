import Link from "next/link";
import { ChatIcon, FacebookIcon, InstagramIcon, LinkedInIcon, LocationIcon, MailIcon, MapPinIcon, PhoneIcon, XIcon } from "./icons";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/site";
import Reveal from "./Reveal";

const SOCIALS = [
  { label: "WhatsApp", href: SITE.whatsapp, Icon: ChatIcon, external: true },
  { label: "LinkedIn", href: SITE.linkedin, Icon: LinkedInIcon, external: true },
  { label: "Google Maps", href: SITE.gmb, Icon: MapPinIcon, external: true },
  { label: "Instagram", href: SITE.instagram, Icon: InstagramIcon, external: true },
  { label: "Facebook", href: SITE.facebook, Icon: FacebookIcon, external: true },
  { label: "Twitter", href: SITE.twitter, Icon: XIcon, external: true },
  { label: SITE.phoneDisplay, href: `tel:${SITE.phoneHref}`, Icon: PhoneIcon, external: false },
  { label: "Email", href: `mailto:${SITE.email}`, Icon: MailIcon, external: false },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-ink-950">
      {/* ambient gold glow behind the 3D name */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-gold/8 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20">
        {/* ---------- Giant 3D name ---------- */}
        <Reveal>
          <p
            aria-label="Zamin Abbas"
            className="text-3d-gold select-none text-center font-sans text-[clamp(2.8rem,10vw,8.5rem)] font-extrabold leading-[0.95] tracking-tight text-gold"
          >
            ZAMIN ABBAS
          </p>
          <p className="mt-4 text-center font-mono text-[0.7rem] tracking-[0.35em] text-mist-500">
            LOCAL SEO EXPERT &mdash; MULTAN, PAKISTAN
          </p>
        </Reveal>

        {/* ---------- Link columns ---------- */}
        <div className="mt-14 grid gap-10 border-t border-black/10 dark:border-white/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label-caps !text-gold">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mist-500 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps !text-gold">Services</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-mist-500 transition-colors hover:text-gold"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps !text-gold">Connect</p>
            <ul className="mt-4 space-y-2.5">
              {SOCIALS.slice(0, 6).map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-2 text-sm text-mist-500 transition-colors hover:text-gold"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps !text-gold">Get in touch</p>
            <ul className="mt-4 space-y-2.5">
              {SOCIALS.slice(6).map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 text-sm text-mist-500 transition-colors hover:text-gold"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                </li>
              ))}
              <li className="inline-flex items-center gap-2 pt-1 text-sm text-mist-500">
                <LocationIcon className="h-4 w-4" /> {SITE.locality}, {SITE.country}
              </li>
            </ul>
            <Link
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-ink-950 transition hover:bg-accent-deep"
            >
              Let&rsquo;s Work Together <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 dark:border-white/15 py-8 text-sm text-mist-600 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
          <p className="font-mono text-[0.65rem] tracking-[0.25em]">
            LOCAL SEO &middot; WORDPRESS &middot; GOOGLE ADS
          </p>
          <Link
            href="#top"
            className="inline-flex items-center gap-2 transition-colors hover:text-gold"
          >
            Back to top <span aria-hidden>&uarr;</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
