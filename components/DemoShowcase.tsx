import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon, BadgeCheckIcon, CheckIcon, GearCodeIcon, MapPinIcon, SparkleIcon, StarIcon, TrendingUpIcon } from "./icons";

const DEMOS = [
  {
    title: "Restaurant Demo",
    text: "Sample restaurant website: menu, online ordering and table booking.",
    href: "/demos/restaurant",
    Icon: MapPinIcon,
  },
  {
    title: "Salon Demo",
    text: "Sample salon website: services, prices and appointment booking.",
    href: "/demos/salon",
    Icon: SparkleIcon,
  },
  {
    title: "Clinic Demo",
    text: "Sample clinic website: doctors, timings and patient booking.",
    href: "/demos/clinic",
    Icon: BadgeCheckIcon,
  },
  {
    title: "Super Store Demo",
    text: "Sample super store website: grocery categories, weekly offers and home delivery.",
    href: "/demos/super-store",
    Icon: TrendingUpIcon,
  },
  {
    title: "Medical Store Demo",
    text: "Sample medical store website: medicines, prescription orders and home delivery.",
    href: "/demos/medical-store",
    Icon: CheckIcon,
  },
  {
    title: "Doctor Portfolio Demo",
    text: "Sample doctor portfolio website: qualifications, services, reviews and appointment booking.",
    href: "/demos/doctor",
    Icon: StarIcon,
  },
  {
    title: "Software Services Demo",
    text: "Sample software services website: web apps, mobile apps, APIs and a get-a-quote form.",
    href: "/demos/software",
    Icon: GearCodeIcon,
  },
];

/** Salman-style project cards: image panel top, tag pill, title, desc, link. */
export default function DemoShowcase() {
  return (
    <section id="demos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="salman-eyebrow">Demo Showcase</p>
          <h2 className="salman-h2 mt-4 max-w-3xl">
            See your business <span className="text-gradient-accent">online before you decide.</span>
          </h2>
          <p className="salman-sub">
            Seven working sample websites — a restaurant website with online
            ordering, a salon appointment booking website, a clinic
            appointment booking website, a super store website with weekly
            offers, a medical store website with home delivery, a doctor
            portfolio website with appointment booking and a software services
            website with a get-a-quote form. Open any demo, try the forms, and see
            how your business could look online. They are examples of website
            development in Multan for local service businesses.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {DEMOS.map((demo, i) => (
            <Reveal key={demo.title} delay={i * 100} className="h-full">
              <article className="card-surface card-hover flex h-full flex-col overflow-hidden">
                <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-violet/25 via-violet/10 to-cyan/20">
                  <span className="salman-glass-tile">
                    <demo.Icon className="h-7 w-7" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="salman-tag w-fit">Working demo</span>
                  <h3 className="mt-4 text-xl font-bold leading-snug text-mist-100">
                    {demo.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-500">
                    {demo.text}
                  </p>
                  <Link
                    href={demo.href}
                    className="group mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-mist-100 transition-colors hover:text-accent"
                  >
                    Preview demo
                    <ArrowRightIcon className="h-4 w-4 text-mist-500 transition-all group-hover:translate-x-1 group-hover:text-accent" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mist-500">
            Every demo is a sample design, not a real business. The forms show
            a confirmation message and send your details nowhere.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
