import Link from "next/link";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";
import {
  BadgeCheckIcon,
  GearCodeIcon,
  MapPinIcon,
  ShareNodesIcon,
  TrendingUpIcon,
} from "./icons";

const CAPABILITIES = [
  {
    n: "01",
    kicker: "LOCAL SEO",
    title: "Local SEO & Google Maps Ranking",
    text: "Get your business into the Google Map 3-pack. Complete profile optimization, local citations, review strategy and map-pack ranking systems that bring calls from nearby customers.",
    tags: ["Google Maps", "3-Pack Ranking", "Reviews"],
    slug: "local-seo",
  },
  {
    n: "02",
    kicker: "WORDPRESS",
    title: "WordPress Development",
    text: "Fast, SEO-ready WordPress websites — business sites, e-commerce stores and custom builds like restaurant management systems with online ordering, reservations and billing.",
    tags: ["Business Websites", "WooCommerce", "Speed"],
    slug: "wordpress-development",
  },
  {
    n: "03",
    kicker: "GBP",
    title: "Google Business Profile Optimization",
    text: "Fully optimized GBP: correct categories, services, products, posts, photos and Q&A — everything Google needs to show your business more often and build customer trust.",
    tags: ["Profile Setup", "Categories", "Posts"],
    slug: "google-business-profile",
  },
  {
    n: "04",
    kicker: "SOCIAL",
    title: "Social Media Marketing",
    text: "Content and campaigns that keep your brand visible where your customers spend time — profile optimization, monthly content and growth-focused posting.",
    tags: ["Content", "Profiles", "Growth"],
    slug: "social-media-marketing",
  },
  {
    n: "05",
    kicker: "ADS",
    title: "Google Ads",
    text: "High-intent search campaigns for local businesses — keyword targeting, ad copy and conversion tracking set up to turn ad spend into booked jobs and sales.",
    tags: ["Search Ads", "Targeting", "ROI"],
    slug: "google-ads",
  },
];

const CAP_ICONS = [
  MapPinIcon,
  GearCodeIcon,
  BadgeCheckIcon,
  ShareNodesIcon,
  TrendingUpIcon,
];

/** Salman-style services grid: icon tile, bold title, muted desc, tag pills. */
export default function Capabilities() {
  return (
    <section
      id="services"
      aria-label="Capabilities"
      className="relative bg-ink-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="salman-eyebrow">Capabilities — scroll to explore</p>
          <h2 className="salman-h2 mt-4 max-w-3xl">
            Scroll through <span className="text-gradient-accent">what I do.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => {
            const Icon = CAP_ICONS[i % CAP_ICONS.length];
            return (
              <Reveal key={cap.n} delay={(i % 3) * 100} className="h-full">
                <article className="card-surface card-hover flex h-full flex-col p-7 sm:p-8">
                  <span className="salman-icon-tile">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-6 font-mono text-[0.65rem] tracking-[0.25em] text-mist-500">
                    {cap.n} / {cap.kicker}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-mist-100">
                    {cap.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-500">
                    {cap.text}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cap.tags.map((t) => (
                      <span key={t} className="salman-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${cap.slug}`}
                      aria-label={`Learn more about ${cap.title}`}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-mist-100 transition-colors hover:text-accent"
                    >
                      Learn More{" "}
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </Link>
                    <Link
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Discuss ${cap.title} on WhatsApp`}
                      className="btn-gradient inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold"
                    >
                      Start Project <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
