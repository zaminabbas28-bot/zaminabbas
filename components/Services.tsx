import Link from "next/link";
import { SERVICE_CARDS, SITE } from "@/lib/site";
import { ArrowRightIcon, MapPinIcon, GearCodeIcon, ShareNodesIcon, TrendingUpIcon, SparkleIcon } from "./icons";
import Reveal from "./Reveal";

const CARD_ICONS = [MapPinIcon, GearCodeIcon, ShareNodesIcon, TrendingUpIcon];
const CARD_GRADIENTS = [
  "from-violet-600/40 via-indigo-600/20 to-transparent",
  "from-sky-600/40 via-blue-600/20 to-transparent",
  "from-pink-600/40 via-rose-600/20 to-transparent",
  "from-orange-600/40 via-amber-600/20 to-transparent",
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps">Services</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              What I do <em className="text-gradient-accent">best</em>
            </h2>
            <Link
              href={SITE.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-mist-300 transition-colors hover:text-white"
            >
              See gigs on Fiverr
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 space-y-16 sm:space-y-20">
          {SERVICE_CARDS.map((service, i) => {
            const Icon = CARD_ICONS[i % CARD_ICONS.length];
            const flip = i % 2 === 1;
            return (
              <div
                key={service.title}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12`}
              >
                {/* visual card */}
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <div className="card-surface card-hover relative overflow-hidden p-8 sm:p-10">
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${CARD_GRADIENTS[i % CARD_GRADIENTS.length]}`}
                    />
                    <div className="relative">
                      <p className="label-caps">{service.period}</p>
                      <div className="mt-8 flex h-28 w-28 items-center justify-center rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm">
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                      <p className="font-display mt-8 text-5xl text-white/95 sm:text-6xl">
                        {service.title}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* content */}
                <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
                  <p className="label-caps text-accent-pink">— {service.title}</p>
                  <p className="mt-4 leading-relaxed text-mist-300">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-[0.95rem] text-mist-100">
                        <SparkleIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-sky-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
