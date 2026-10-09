import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import Bento from "@/components/Bento";
import JsonLd from "@/components/JsonLd";
import { SERVICES, SITE } from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.fullName,
  alternateName: SITE.name,
  url: SITE.url,
  jobTitle: "Local SEO Expert & WordPress Developer",
  description:
    "Local SEO expert in Multan, Pakistan. Google Business Profile optimization, WordPress development and social media marketing.",
  email: `mailto:${SITE.email}`,
  telephone: SITE.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Metro Station, Pracha Street",
    addressLocality: SITE.locality,
    addressCountry: "PK",
  },
  sameAs: [SITE.whatsapp, SITE.fiverr, SITE.instagram, SITE.facebook, SITE.twitter, SITE.linkedin, SITE.gmb],
  knowsAbout: [
    "Local SEO",
    "Google Business Profile Optimization",
    "Google Maps Ranking",
    "WordPress Development",
    "Social Media Marketing",
    "Google Ads",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#business`,
  name: `${SITE.name} — Local SEO & Digital Marketing`,
  url: SITE.url,
  image: `${SITE.url}/images/zamin-abbas-local-seo-expert.jpg`,
  description:
    "Local SEO expert in Multan, Pakistan: Google Business Profile optimization, WordPress development, social media marketing and Google Ads.",
  provider: { "@type": "Person", name: SITE.fullName, url: SITE.url },
  areaServed: [
    { "@type": "City", name: "Multan" },
    { "@type": "Country", name: SITE.country },
  ],
  telephone: SITE.phoneHref,
  email: `mailto:${SITE.email}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Metro Station, Pracha Street",
    addressLocality: SITE.locality,
    addressRegion: "Punjab",
    postalCode: "60000",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.17295,
    longitude: 71.49142,
  },
  hasMap: SITE.gmb,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "21:00",
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
};

export default function Home() {
  return (
    <div className="relative">
      {/* striped page edges */}
      <div aria-hidden className="edge-stripes pointer-events-none fixed inset-y-0 left-0 z-0 hidden w-10 lg:block" />
      <div aria-hidden className="edge-stripes pointer-events-none fixed inset-y-0 right-0 z-0 hidden w-10 lg:block" />

      <div className="relative z-10">
        <JsonLd id="person-jsonld" data={personSchema} />
        <JsonLd id="service-jsonld" data={serviceSchema} />
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Projects />
        <Insights />
        <Testimonials />
        <Bento />
      </div>
    </div>
  );
}
