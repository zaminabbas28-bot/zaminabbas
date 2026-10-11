import { INSIGHTS } from "@/lib/site";
import { ArrowRightIcon, TrendingUpIcon, MapPinIcon, GearCodeIcon } from "./icons";
import Reveal from "./Reveal";

const CARD_ICONS = [MapPinIcon, TrendingUpIcon, GearCodeIcon];
const CARD_STYLES = [
  { gradient: "from-gold-soft via-gold to-gold-deep", glow: "rgba(216,180,96,0.45)" },
  { gradient: "from-gold via-gold-deep to-[#8a6a24]", glow: "rgba(180,132,48,0.45)" },
  { gradient: "from-[#f5e2ae] via-gold-soft to-gold", glow: "rgba(240,217,152,0.4)" },
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

        <div className="mt-12 grid gap-6 md:grid-cols-3" style={{ perspective: "1200px" }}>
          {INSIGHTS.map((post, i) => {
            const Icon = CARD_ICONS[i % CARD_ICONS.length];
            const style = CARD_STYLES[i % CARD_STYLES.length];
            return (
              <Reveal key={post.title} delay={i * 100} className="h-full">
                <article
                  className={`insight-card group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${style.gradient} p-[1px]${i % 2 === 1 ? " tilt-r" : ""}`}
                  style={{
                    boxShadow: `0 30px 60px -25px ${style.glow}, 0 20px 40px -20px rgba(0,0,0,0.7)`,
                  }}
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-ink-950/90 backdrop-blur-sm">
                    <div
                      className="relative flex h-44 items-center justify-center bg-gradient-to-br from-gold/25 via-gold/10 to-transparent"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-ink-950/60 shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-8 w-8 text-gold" />
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
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-mist-300 transition-all duration-300 group-hover:border-gold group-hover:text-gold">
                          <ArrowRightIcon className="h-4 w-4" />
                        </span>
                      </div>
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
