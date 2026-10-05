import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { SERVICES, SITE } from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  jobTitle: "SEO Specialist & Web Developer",
  description:
    "Top-ranked SEO specialist in Pakistan with 10+ years of experience and 500+ websites ranked.",
  email: `mailto:${SITE.email}`,
  telephone: SITE.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Metro Station, Pracha Street",
    addressLocality: SITE.locality,
    addressCountry: "PK",
  },
  sameAs: [SITE.whatsapp],
  knowsAbout: [
    "Local SEO",
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
    "Web Development",
    "Social Media Marketing",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${SITE.name} — SEO Services`,
  url: SITE.url,
  description:
    "Professional SEO services in Pakistan: local SEO, technical SEO, social media marketing and conversion-focused web development.",
  provider: { "@type": "Person", name: SITE.name, url: SITE.url },
  areaServed: { "@type": "Country", name: SITE.country },
  telephone: SITE.phoneHref,
  email: `mailto:${SITE.email}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Metro Station, Pracha Street",
    addressLocality: SITE.locality,
    addressCountry: "PK",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO & Marketing Services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `${SITE.url}/services/${s.slug}`,
        description: s.short,
      },
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "55",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd id="person-jsonld" data={personSchema} />
      <JsonLd id="service-jsonld" data={serviceSchema} />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Testimonials />
      <CtaSection />
      <Faq />
    </>
  );
}
