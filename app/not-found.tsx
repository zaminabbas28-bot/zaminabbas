import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist on zaminabbas.me.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="notfound-heading"
      className="flex min-h-[70vh] items-center justify-center px-4 pt-24 pb-16"
    >
      <div className="text-center">
        <p aria-hidden className="font-display text-8xl font-extrabold text-gold-gradient sm:text-9xl">
          404
        </p>
        <h1 id="notfound-heading" className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-mist-300">
          The page you&apos;re looking for doesn&apos;t exist or was moved. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-base font-bold text-ink-950 transition-all hover:bg-gold-300"
          >
            Back to Home <ArrowRightIcon className="h-5 w-5" />
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-gold-400/60 hover:text-gold-300"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
