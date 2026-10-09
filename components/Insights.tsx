import { INSIGHTS } from "@/lib/site";
import { ArrowRightIcon, TrendingUpIcon, MapPinIcon, GearCodeIcon } from "./icons";
import Reveal from "./Reveal";

const CARD_ICONS = [MapPinIcon, TrendingUpIcon, GearCodeIcon];
const CARD_GRADIENTS = [
  "from-violet-600/50 via-purple-600/20 to-transparent",
  "from-sky-600/50 via-blue-600/20 to-transparent",
  "from-pink-600/50 via-rose-600/20 to-transparent",
];

export default function Insights() {
  return (
    <section id="insights" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps">From the desk</p>
          <h2 className="font-display mt-3 text-4xl text-white sm:text-5xl">
            Notes on <em className="text-gradient-accent">ranking</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((post, i) => {
            const Icon = CARD_ICONS[i % CARD_ICONS.length];
            return (
              <Reveal key={post.title} delay={i * 100}>
                <article className="card-surface card-hover flex h-full flex-col overflow-hidden">
                  <div
                    className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${CARD_GRADIENTS[i % CARD_GRADIENTS.length]}`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-ink-950/60 backdrop-blur-sm">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold leading-snug text-white">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-500">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                      <p className="label-caps">
                        {post.readTime} · {post.date}
                      </p>
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
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
