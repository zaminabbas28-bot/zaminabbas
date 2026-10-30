import Link from "next/link";
import Reveal from "./Reveal";

const DEMOS = [
  {
    title: "Restaurant Demo",
    text: "Sample restaurant website: menu, online ordering and table booking.",
    href: "/demos/restaurant",
  },
  {
    title: "Salon Demo",
    text: "Sample salon website: services, prices and appointment booking.",
    href: "/demos/salon",
  },
  {
    title: "Clinic Demo",
    text: "Sample clinic website: doctors, timings and patient booking.",
    href: "/demos/clinic",
  },
];

export default function DemoShowcase() {
  return (
    <section id="demos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps !text-gold">Demo Showcase</p>
          <h2 className="display-mega mt-4 max-w-3xl font-sans text-4xl text-mist-100 sm:text-6xl">
            See your business <span className="text-gradient-accent">online before you decide.</span>
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-mist-500">
            Three working sample websites — a restaurant website with online
            ordering, a salon appointment booking website and a clinic
            appointment booking website. Open any demo, try the forms, and see
            how your business could look online. They are examples of website
            development in Multan for local service businesses.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {DEMOS.map((demo, i) => (
            <Reveal key={demo.title} delay={i * 100}>
              <article className="card-surface card-hover flex h-full flex-col p-6 sm:p-7">
                <p className="tag-pill w-fit bg-accent/10 text-accent-deep">Working demo</p>
                <h3 className="mt-4 text-xl font-bold leading-snug text-mist-100">
                  {demo.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-500">
                  {demo.text}
                </p>
                <Link
                  href={demo.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-deep"
                >
                  Preview demo <span aria-hidden>&rarr;</span>
                </Link>
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
