import Link from "next/link";
import type { ReactElement } from "react";
import Reveal from "./Reveal";
import { ArrowRightIcon, GearCodeIcon, MapPinIcon, ShareNodesIcon } from "./icons";
import { SERVICES, type Service } from "@/lib/site";

const ICONS: Record<Service["icon"], (props: { className?: string }) => ReactElement> = {
  pin: (p) => <MapPinIcon {...p} />,
  share: (p) => <ShareNodesIcon {...p} />,
  gear: (p) => <GearCodeIcon {...p} />,
};

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 bg-ink-900/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gold-400 uppercase">
            What I Do
          </p>
          <h2
            id="services-heading"
            className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Services That <span className="text-gold-gradient">Drive Results</span>
          </h2>
          <p className="mt-4 text-lg text-mist-300">
            Focused services, one goal: more visibility, more traffic, more customers.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.slug} delay={i * 120} as="article">
                <div className="card-glow relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-800/80 p-8">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-2 right-4 font-display text-7xl font-extrabold text-white/5 select-none"
                  >
                    {service.number}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-400">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-mist-300">{service.short}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-400 transition-colors hover:text-gold-300"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
