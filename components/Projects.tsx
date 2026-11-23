import { PROJECTS } from "@/lib/site";
import { ArrowUpRightIcon, MapPinIcon, ShareNodesIcon, SparkleIcon } from "./icons";
import Reveal from "./Reveal";

const CARD_ICONS = [MapPinIcon, ShareNodesIcon, SparkleIcon];
const CARD_GRADIENTS = [
  "from-violet/25 via-violet/10 to-cyan/20",
  "from-violet/20 via-cyan/15 to-violet/10",
  "from-cyan/20 via-violet/15 to-violet/10",
];

/** Salman-style project cards: image panel top, cyan tag pill, title, desc, link. */
export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="salman-eyebrow">Selected work</p>
          <h2 className="salman-h2 mt-4">
            Work that <span className="text-gradient-accent">ranks.</span>
          </h2>
          <p className="salman-sub">
            A focused portfolio of client builds — websites designed to
            convert and optimized to be found.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const Icon = CARD_ICONS[i % CARD_ICONS.length];
            return (
              <Reveal key={project.title} delay={(i % 3) * 100} className="h-full">
                <article className="card-surface card-hover group flex h-full flex-col overflow-hidden">
                  <div
                    className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${CARD_GRADIENTS[i % CARD_GRADIENTS.length]}`}
                  >
                    <span className="salman-glass-tile transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="salman-tag w-fit">{project.badge}</span>
                    <h3 className="mt-4 text-xl font-bold leading-snug text-mist-100">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-500">
                      {project.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-black/10 pt-4 dark:border-white/15">
                      <p className="font-mono text-[0.65rem] tracking-[0.18em] text-mist-500">
                        {project.date}
                      </p>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-mist-100 transition-colors hover:text-accent"
                        >
                          Visit Website
                          <ArrowUpRightIcon className="h-4 w-4 text-mist-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                        </a>
                      )}
                    </div>
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
