import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon, ChatIcon } from "./icons";
import { SITE } from "@/lib/site";

export default function CtaSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 bg-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase">
            Thank You for Visiting
          </p>
          <h2
            id="contact-heading"
            className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl"
          >
            I&apos;m Here to Help You <span className="text-gradient-accent">Grow Smarter</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-body">
            Ready to grow smarter and rank higher? Whether you need more local customers, a
            faster website, or a complete SEO strategy — let&apos;s talk about what&apos;s
            possible for your business.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p
            className="mt-6 font-display text-2xl font-bold text-gradient-accent italic"
            aria-label="Signed, Zamin Abbas"
          >
            zamin abbas
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`mailto:${SITE.email}?subject=Project%20Inquiry%20—%20zaminabbas.me`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-accent-deep hover:shadow-xl hover:shadow-accent/25"
            >
              Start a Project <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-dark bg-white px-8 py-3.5 text-base font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <ChatIcon className="h-5 w-5" /> WhatsApp Me
            </Link>
          </div>
        </Reveal>
        <Reveal delay={360}>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-5 py-2 text-sm font-semibold text-accent-deep">
            <span aria-hidden className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            500+ Happy Clients
          </p>
        </Reveal>
      </div>
    </section>
  );
}
