import Link from "next/link";
import { SITE } from "@/lib/site";

export default function DemoBanner() {
  return (
    <div className="bg-mist-100 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <p className="text-sm leading-relaxed">
          <span className="mr-2 rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-white">
            DEMO WEBSITE
          </span>
          This is a sample design, not a real business. Prices, names and
          timings on this page are examples.
        </p>
        <Link
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-white underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
        >
          Want one for your business? Chat on WhatsApp &rarr;
        </Link>
      </div>
    </div>
  );
}
