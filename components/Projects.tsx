import { PROJECTS } from "@/lib/site";
import { ArrowUpRightIcon, MapPinIcon, ShareNodesIcon, SparkleIcon } from "./icons";
import Reveal from "./Reveal";

const CARD_ICONS = [MapPinIcon, ShareNodesIcon, SparkleIcon];
const CARD_GRADIENTS = [
  "from-gold/40 via-gold/10 to-transparent",
  "from-accent/40 via-gold/10 to-transparent",
  "from-accent-deep/30 via-gold/10 to-transparent",
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps !text-gold">Selected work</p>
          <h2 className="display-mega mt-4 font-sans text-5xl text-mist-100 sm:text-7xl">
            Work that <span className="text-gradient-accent">ranks.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-mist-500">
            A focused portfolio of client builds — websites designed to
            convert and optimized to be found.
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
                    <span className="tag-pill bg-ink-950/50">{project.badge}</span>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/15 bg-black/60 backdrop-blur-sm">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="label-caps">{project.date}</p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-mist-100">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-500">
                      {project.description}
                    </p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-mist-100 transition-colors hover:text-accent-pink"
                      >
                        Visit Website
                        <ArrowUpRightIcon className="h-4 w-4 text-mist-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-pink" />
                      </a>
                    )}
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
