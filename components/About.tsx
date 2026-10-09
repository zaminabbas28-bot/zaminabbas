import Image from "next/image";
import { SITE, STATS } from "@/lib/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="label-caps">Know about me</p>
              <h2 className="font-display mt-3 text-4xl leading-tight text-white sm:text-5xl">
                Local SEO specialist,
                <br />
                with a marketer&apos;s <em className="text-gradient-accent">instinct</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 space-y-5 leading-relaxed text-mist-300">
                <p>
                  I&apos;m Rana (Zeeshan Abbas), a local SEO expert based in Multan,
                  Pakistan. I help small and medium businesses get found where it
                  matters most — on Google Maps and in local search results. My
                  agency, <strong className="text-white">Zeeshi Local SEO Expert</strong>,
                  is built on one belief: visibility should turn into customers,
                  not just impressions.
                </p>
                <p>
                  Beyond local SEO, I design and develop fast WordPress websites and
                  run social media marketing that actually grows brands. Every
                  project gets the same treatment — data first, honest reporting,
                  and white-hat work that holds its rankings.
                </p>
                <p>
                  When I&apos;m not optimizing profiles or auditing sites, I&apos;m
                  studying how Google&apos;s local algorithm shifts — so my clients
                  never have to.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="label-caps">{stat.label}</dt>
                    <dd className="font-display mt-2 text-3xl text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent-violet/25 via-accent-pink/10 to-transparent blur-2xl"
              />
              <div className="card-surface relative overflow-hidden p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/rana-3.png"
                    alt="Rana — Local SEO Expert in Multan"
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-3 py-4">
                  <div>
                    <p className="font-medium text-white">{SITE.fullName}</p>
                    <p className="text-sm text-mist-500">{SITE.locality}, {SITE.country}</p>
                  </div>
                  <span className="tag-pill">● OPEN TO WORK</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
