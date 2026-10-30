import Link from "next/link";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

const INDUSTRIES = [
  {
    title: "Restaurants & Cafes",
    text: "A restaurant website design in Multan that shows your menu, takes orders and books tables — without sending your customers to a food delivery app.",
    features: ["Digital menu display", "Online ordering", "Table booking", "Mobile-friendly design"],
    seoLine: "Pair it with local SEO for restaurants in Multan, so nearby diners find you on Google Maps.",
    demoHref: "/demos/restaurant",
    demoLabel: "See restaurant demo",
  },
  {
    title: "Salons & Barbershops",
    text: "A salon website design in Multan — and the same layout works as a barber shop website in Multan — with services, prices and a booking form your clients can use any time.",
    features: ["Service menu with pricing", "Appointment booking", "Stylist profiles", "Mobile-friendly design"],
    seoLine: "Built as a salon appointment booking website, with local SEO for salons in Multan available alongside.",
    demoHref: "/demos/salon",
    demoLabel: "See salon demo",
  },
  {
    title: "Dentists & Clinics",
    text: "A clinic website design in Multan that looks professional and makes it easy for patients to get in touch — including dental clinic website design in Multan for practices that want treatment pages and trust signals.",
    features: ["Patient booking forms", "Doctor profiles", "Clinic timings & location", "Mobile-friendly design"],
    seoLine: "Set up as a clinic appointment booking website, with local SEO for clinics in Multan available alongside.",
    demoHref: "/demos/clinic",
    demoLabel: "See clinic demo",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps !text-gold">Industries We Serve</p>
          <h2 className="display-mega mt-4 max-w-3xl font-sans text-4xl text-mist-100 sm:text-6xl">
            Websites built for <span className="text-gradient-accent">your kind of business.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-mist-500">
            Industry-specific website design in Multan, paired with local SEO —
            built around how your customers actually find, judge and contact you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.title} delay={i * 100}>
              <article className="card-surface card-hover flex h-full flex-col p-6 sm:p-7">
                <h3 className="text-xl font-bold leading-snug text-mist-100">
                  {industry.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-500">
                  {industry.text}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {industry.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium text-mist-100"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-mist-500">
                  {industry.seoLine}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={industry.demoHref}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-deep"
                  >
                    See demo <span aria-hidden>&rarr;</span>
                  </Link>
                  <Link
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-mist-100 transition hover:border-accent hover:text-accent"
                  >
                    Chat on WhatsApp
                  </Link>
                </div>
                <span className="sr-only">{industry.demoLabel}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
