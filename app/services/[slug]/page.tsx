import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon, CheckIcon, ChevronDownIcon } from "@/components/icons";
import { SERVICES, SITE, type ServiceSlug } from "@/lib/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === (slug as ServiceSlug));
  if (!service) return {};

  const META_TITLES: Record<ServiceSlug, string> = {
    "local-seo": "Local SEO Services in Multan, Pakistan | Zamin Abbas",
    "technical-seo": "Technical SEO Services | Zamin Abbas",
    "wordpress-development": "WordPress Development Services | Zamin Abbas",
    "social-media-marketing": "Social Media Marketing Services | Zamin Abbas",
    "google-ads": "Google Ads Services | Zamin Abbas",
  };
  const title = META_TITLES[service.slug];
  const description = `${service.short} Work with ${SITE.name}, a local SEO expert in Multan, Pakistan offering ${service.title.toLowerCase()} that is built to rank and convert.`;

  return {
    title: { absolute: title },
    description,
    keywords: [service.title, "SEO specialist Pakistan", SITE.name, "hire SEO expert"],
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/services/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === (slug as ServiceSlug));
  if (!service) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/#services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE.url}/services/${service.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} Services`,
    provider: { "@type": "Person", name: SITE.name, url: SITE.url },
    url: `${SITE.url}/services/${service.slug}`,
    description: service.short,
    areaServed: { "@type": "Country", name: SITE.country },
  };

  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd id="breadcrumb-jsonld" data={breadcrumbSchema} />
      <JsonLd id="service-detail-jsonld" data={serviceSchema} />

      <article className="pt-28 pb-20 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-mist-500">
                <li>
                  <Link href="/" className="transition-colors hover:text-gold-300">
                    Home
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronDownIcon className="h-3.5 w-3.5 -rotate-90" />
                </li>
                <li>
                  <Link href="/#services" className="transition-colors hover:text-gold-300">
                    Services
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronDownIcon className="h-3.5 w-3.5 -rotate-90" />
                </li>
                <li aria-current="page" className="font-medium text-gold-300">
                  {service.title}
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-8 text-xs font-bold tracking-[0.3em] text-gold-400 uppercase">
              Service {service.number}
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {service.h1 ?? (
                <>
                  {service.title} <span className="text-gold-gradient">Services</span>
                </>
              )}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-mist-300">{service.short}</p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 space-y-6">
              {service.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-mist-100/90">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-12 font-display text-2xl font-bold text-white">
              What&apos;s <span className="text-gold-gradient">Included</span>
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label={`${service.title} benefits`}>
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-ink-800/70 p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-mist-100 sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 rounded-3xl border border-gold-400/25 bg-gradient-to-br from-ink-800 to-ink-900 p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                Ready to grow with <span className="text-gold-gradient">{service.title}</span>?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-mist-300">
                Get a free consultation and a clear action plan for your business — no
                obligations, no jargon.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-base font-bold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-xl hover:shadow-gold-500/25"
                >
                  Start a Project <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <Link
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-gold-400/60 hover:text-gold-300"
                >
                  WhatsApp Me
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-14 font-display text-2xl font-bold text-white">
              Explore Other <span className="text-gold-gradient">Services</span>
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="card-glow group rounded-2xl border border-white/10 bg-ink-800/70 p-6"
                >
                  <p className="text-xs font-bold tracking-widest text-gold-500">
                    {other.number}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-white transition-colors group-hover:text-gold-300">
                    {other.title}
                  </h3>
                  <p className="mt-2 text-sm text-mist-300">{other.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold-400">
                    Learn More <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </article>
    </>
  );
}
