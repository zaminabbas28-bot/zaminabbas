import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon, ChatIcon } from "./icons";
import { SITE } from "@/lib/site";

export default function CtaSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 bg-ink-900/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] text-gold-400 uppercase">
            Thank You for Visiting
          </p>
          <h2
            id="contact-heading"
            className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            I&apos;m Here to Help You <span className="text-gold-gradient">Grow Smarter</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist-300">
            Ready to grow smarter and rank higher? Whether you need more local customers, a
            faster website, or a complete SEO strategy — let&apos;s talk about what&apos;s
            possible for your business.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p
            className="mt-6 font-display text-2xl font-bold text-gold-gradient italic"
            aria-label="Signed, Zamin Abbas"
          >
            Zamin Abbas
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`mailto:${SITE.email}?subject=Project%20Inquiry%20—%20zaminabbas.me`}
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-base font-bold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-xl hover:shadow-gold-500/25"
            >
              Start a Project <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-gold-400/60 hover:text-gold-300"
            >
              <ChatIcon className="h-5 w-5" /> WhatsApp Me
            </Link>
          </div>
        </Reveal>
        <Reveal delay={360}>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-5 py-2 text-sm font-semibold text-gold-300">
            <span aria-hidden className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" />
            </span>
            Available for New Projects
          </p>
        </Reveal>
      </div>
    </section>
  );
}
