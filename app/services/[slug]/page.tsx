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

  const title = `${service.title} Services | ${SITE.name}`;
  const description = `${service.short} Work with ${SITE.name}, a top-ranked SEO specialist in Pakistan with 10+ years of experience and 500+ websites ranked.`;

  return {
    title,
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
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
                <li>
                  <Link href="/" className="transition-colors hover:text-accent">
                    Home
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronDownIcon className="h-3.5 w-3.5 -rotate-90" />
                </li>
                <li>
                  <Link href="/#services" className="transition-colors hover:text-accent">
                    Services
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronDownIcon className="h-3.5 w-3.5 -rotate-90" />
                </li>
                <li aria-current="page" className="font-medium text-accent">
                  {service.title}
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-8 text-xs font-bold tracking-[0.3em] text-accent uppercase">
              Service {service.number}
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {service.title} <span className="text-gradient-accent">Services</span>
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-body">{service.short}</p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 space-y-6">
              {service.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-body">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-12 font-display text-2xl font-bold text-ink">
              What&apos;s <span className="text-gradient-accent">Included</span>
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label={`${service.title} benefits`}>
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-ink sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 rounded-3xl border border-accent/25 bg-gradient-to-br from-accent-soft to-white p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                Ready to grow with <span className="text-gradient-accent">{service.title}</span>?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-body">
                Get a free consultation and a clear action plan for your business — no
                obligations, no jargon.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-accent-deep hover:shadow-xl hover:shadow-accent/25"
                >
                  Start a Project <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <Link
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-dark bg-white px-8 py-3.5 text-base font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  WhatsApp Me
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-14 font-display text-2xl font-bold text-ink">
              Explore Other <span className="text-gradient-accent">Services</span>
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="card-surface card-hover group p-6"
                >
                  <p className="text-xs font-bold tracking-widest text-accent">
                    {other.number}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink transition-colors group-hover:text-accent">
                    {other.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{other.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent">
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
