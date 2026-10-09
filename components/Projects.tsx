import { PROJECTS } from "@/lib/site";
import { ArrowUpRightIcon, MapPinIcon, ShareNodesIcon, SparkleIcon } from "./icons";
import Reveal from "./Reveal";

const CARD_ICONS = [MapPinIcon, ShareNodesIcon, SparkleIcon];
const CARD_GRADIENTS = [
  "from-accent-soft via-accent-soft/60 to-transparent",
  "from-sky-100 via-sky-50 to-transparent",
  "from-orange-100 via-amber-50 to-transparent",
];

export default function Projects() {
  return (
    <section id="work" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps">Selected work</p>
          <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
            Projects that <em className="text-gradient-accent">rank</em>
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            A few client builds — websites designed to convert and optimized to
            be found.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const Icon = CARD_ICONS[i % CARD_ICONS.length];
            return (
              <Reveal key={project.title} delay={i * 100}>
                <article className="card-surface card-hover flex h-full flex-col overflow-hidden">
                  <div
                    className={`relative flex h-40 items-center justify-between bg-gradient-to-br p-6 ${CARD_GRADIENTS[i % CARD_GRADIENTS.length]}`}
                  >
                    <span className="tag-pill bg-white/80">{project.badge}</span>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white shadow-sm">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="label-caps">{project.date}</p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
                    >
                      Visit Website
                      <ArrowUpRightIcon className="h-4 w-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
