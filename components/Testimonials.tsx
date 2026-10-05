import Reveal from "./Reveal";
import { BadgeCheckIcon, QuoteIcon, StarIcon } from "./icons";
import { REVIEWS } from "@/lib/site";

function Stars() {
  return (
    <div className="flex gap-1 text-gold-400" role="img" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            id="reviews-heading"
            className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Proven Results, <span className="text-gold-gradient">Happy Clients</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Stars />
            <p className="text-sm text-mist-300">Based on 55 reviews on Google</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 120} as="article">
              <figure className="card-glow flex h-full flex-col rounded-3xl border border-white/10 bg-ink-800/80 p-7">
                <QuoteIcon className="h-8 w-8 text-gold-500/40" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-mist-100">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 font-display text-sm font-bold text-ink-950"
                  >
                    {review.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-white">{review.name}</p>
                    <p className="flex items-center gap-1 text-xs text-mist-300">
                      <BadgeCheckIcon className="h-3.5 w-3.5 text-gold-400" />
                      Verified Google Review
                    </p>
                  </div>
                  <div className="ml-auto">
                    <Stars />
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
