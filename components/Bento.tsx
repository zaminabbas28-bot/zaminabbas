import Image from "next/image";
import Link from "next/link";
import { SITE, TOOLKIT } from "@/lib/site";
import { ArrowRightIcon, ArrowUpRightIcon, LinkedInIcon } from "./icons";
import Reveal from "./Reveal";

export default function Bento() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps text-center">Let&apos;s connect</p>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-center text-5xl leading-tight text-ink sm:text-6xl">
            Have a business?
            <br />
            <em className="text-gradient-accent">Let&apos;s rank it.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* toolkit */}
          <Reveal>
            <div className="card-surface card-hover flex h-full min-h-[320px] flex-col justify-between p-7">
              <div className="flex flex-wrap gap-2">
                {TOOLKIT.slice(0, 6).map((tool) => (
                  <span key={tool} className="tag-pill">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <p className="label-caps">Toolkit</p>
                <p className="mt-2 text-lg font-medium text-ink">My SEO arsenal</p>
              </div>
            </div>
          </Reveal>

          {/* journey */}
          <Reveal delay={100}>
            <div className="card-surface card-hover relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden p-7">
              <div>
                <p className="label-caps">Behind the rankings</p>
                <p className="mt-2 text-lg font-medium text-ink">Journey & experience</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  From Multan to the map pack — 500+ websites ranked, one honest
                  report at a time.
                </p>
              </div>
              <div className="relative mx-auto mt-6 w-40 overflow-hidden rounded-2xl border border-line">
                <div className="relative aspect-square">
                  <Image
                    src="/images/rana-1.jpg"
                    alt="Rana"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* say hello */}
          <Reveal delay={200}>
            <Link
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface card-hover group flex h-full min-h-[320px] flex-col justify-between p-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-soft to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="relative">
                <p className="label-caps">Say hello</p>
                <p className="mt-2 text-lg font-medium text-ink">Start a conversation</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  WhatsApp me at {SITE.phoneDisplay} — I reply fast, and the first
                  audit is free.
                </p>
              </div>
              <span className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-accent">
                Chat now <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center gap-5 text-center">
            <Link
              href={SITE.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-medium text-body transition-colors hover:text-ink"
            >
              <span className="label-caps">Prefer Fiverr?</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 transition-colors group-hover:border-line-dark">
                Order a gig <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="label-caps">Find me on</span>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rana on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-body shadow-sm transition-colors hover:border-line-dark hover:text-ink"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
