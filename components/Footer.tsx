import Image from "next/image";
import Link from "next/link";
import { ChatIcon, FacebookIcon, InstagramIcon, LinkedInIcon, LocationIcon, MailIcon, MapPinIcon, PhoneIcon, XIcon } from "./icons";
import { NAV_LINKS, SERVICES, SITE, TOOLKIT } from "@/lib/site";
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
    <>
    <footer className="relative overflow-hidden border-t border-black/10 bg-ink-950 dark:border-white/15">
      {/* ambient violet glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-gold/8 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20">
        {/* ---------- Logo + tagline ---------- */}
        <Reveal>
          <div className="flex items-center gap-3">
            <Image
              src="/images/za-logo.jpg"
              alt="Zamin Abbas logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl object-cover"
            />
            <div>
              <p className="font-sans text-lg font-extrabold tracking-[0.18em] text-mist-100">
                ZAMIN ABBAS
              </p>
              <p className="mt-1 font-mono text-[0.65rem] tracking-[0.3em] text-mist-500">
                LOCAL SEO EXPERT &mdash; MULTAN, PAKISTAN
              </p>
            </div>
          </div>
        </Reveal>

        {/* ---------- Link columns ---------- */}
        <div className="mt-14 grid gap-10 border-t border-black/10 dark:border-white/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label-caps">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mist-500 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps">Services</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-mist-500 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps">Connect</p>
            <ul className="mt-4 space-y-2.5">
              {SOCIALS.slice(0, 6).map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-2 text-sm text-mist-500 transition-colors hover:text-accent"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps">Get in touch</p>
            <ul className="mt-4 space-y-2.5">
              {SOCIALS.slice(6).map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 text-sm text-mist-500 transition-colors hover:text-accent"
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
              className="btn-gradient mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold"
            >
              Let&rsquo;s Work Together <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* ---------- Skills pills ---------- */}
        <div className="mt-12 border-t border-black/10 pt-10 dark:border-white/15">
          <p className="label-caps">Skills</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TOOLKIT.map((tool) => (
              <span key={tool} className="salman-tag">
                {tool}
              </span>
            ))}
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
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            Back to top <span aria-hidden>&uarr;</span>
          </Link>
        </div>
      </div>
    </footer>

    {/* Floating WhatsApp button (Salman-style) */}
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="salman-float-wa"
    >
      <ChatIcon className="h-7 w-7" />
    </a>
    </>
  );
}
