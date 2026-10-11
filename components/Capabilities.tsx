import Link from "next/link";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

const CAPABILITIES = [
  {
    n: "01",
    title: "Local SEO & Google Maps Ranking",
    text: "Get your business into the Google Map 3-pack. Complete profile optimization, local citations, review strategy and map-pack ranking systems that bring calls from nearby customers.",
    tags: ["Google Maps", "3-Pack Ranking", "Local Citations", "Reviews"],
  },
  {
    n: "02",
    title: "WordPress Development",
    text: "Fast, SEO-ready WordPress websites — business sites, e-commerce stores and custom builds like restaurant management systems with online ordering, reservations and billing.",
    tags: ["Business Websites", "WooCommerce", "Speed Optimization", "Custom Systems"],
  },
  {
    n: "03",
    title: "Google Business Profile Optimization",
    text: "Fully optimized GBP: correct categories, services, products, posts, photos and Q&A — everything Google needs to show your business more often and build customer trust.",
    tags: ["Profile Setup", "Categories", "Posts", "Photos"],
  },
  {
    n: "04",
    title: "Social Media Marketing",
    text: "Content and campaigns that keep your brand visible where your customers spend time — profile optimization, monthly content and growth-focused posting.",
    tags: ["Content", "Profiles", "Campaigns", "Growth"],
  },
  {
    n: "05",
    title: "Google Ads",
    text: "High-intent search campaigns for local businesses — keyword targeting, ad copy and conversion tracking set up to turn ad spend into booked jobs and sales.",
    tags: ["Search Ads", "Local Targeting", "Tracking", "ROI"],
  },
];

export default function Capabilities() {
  return (
    <section aria-label="Capabilities" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps !text-gold">Capabilities</p>
          <h2 className="display-mega mt-4 max-w-3xl font-sans text-4xl text-white sm:text-6xl">
            Scroll through <span className="text-gradient-accent">what I do.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-mist-500">
            Five services, one goal — more visibility, more calls, more
            customers for your business.
          </p>
        </Reveal>

        <div className="mt-14 space-y-6 pb-10">
          {CAPABILITIES.map((cap, i) => (
            <article
              key={cap.n}
              className="stack-card card-surface overflow-hidden"
              style={{ top: `${5.5 + i * 1.1}rem` }}
              aria-label={cap.title}
            >
              <div className="grid gap-6 bg-ink-900/80 p-8 backdrop-blur sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10 sm:p-10">
                <span
                  aria-hidden
                  className="font-sans text-6xl font-extrabold text-gold/20 sm:text-7xl"
                >
                  {cap.n}
                </span>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-white sm:text-3xl">
                    {cap.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-mist-500">
                    {cap.text}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cap.tags.map((t) => (
                      <span key={t} className="tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Discuss ${cap.title} on WhatsApp`}
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-ink-950"
                >
                  <span aria-hidden className="text-xl">&rarr;</span>
                </Link>
              </div>
              {/* gold top edge */}
              <div aria-hidden className="h-[3px] bg-gradient-to-r from-gold-deep via-gold to-gold-soft" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
