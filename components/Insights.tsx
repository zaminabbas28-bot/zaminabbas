import { INSIGHTS } from "@/lib/site";
import { ArrowRightIcon, TrendingUpIcon, MapPinIcon, GearCodeIcon } from "./icons";
import Reveal from "./Reveal";

const CARD_ICONS = [MapPinIcon, TrendingUpIcon, GearCodeIcon];
const CARD_GRADIENTS = [
  "from-violet/25 via-violet/10 to-cyan/20",
  "from-violet/20 via-cyan/15 to-violet/10",
  "from-cyan/20 via-violet/15 to-violet/10",
];

/** Salman-style project cards: image panel top, title, excerpt, meta footer. */
export default function Insights() {
  return (
    <section id="insights" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="salman-eyebrow">From the desk</p>
          <h2 className="salman-h2 mt-4">
            Notes on <span className="text-gradient-accent">ranking</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((post, i) => {
            const Icon = CARD_ICONS[i % CARD_ICONS.length];
            return (
              <Reveal key={post.title} delay={i * 100} className="h-full">
                <article className="card-surface card-hover group flex h-full flex-col overflow-hidden">
                  <div
                    className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${CARD_GRADIENTS[i % CARD_GRADIENTS.length]}`}
                  >
                    <span className="salman-glass-tile transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-8 w-8" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold leading-snug text-mist-100">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-500">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 dark:border-white/15">
                      <p className="font-mono text-[0.65rem] tracking-[0.18em] text-mist-500">
                        {post.readTime} · {post.date}
                      </p>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 text-mist-300 transition-all duration-300 group-hover:border-accent group-hover:text-accent dark:border-white/15">
                        <ArrowRightIcon className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 text-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-mist-300">
              <span className="label-caps">More playbooks soon</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 dark:border-white/15">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
