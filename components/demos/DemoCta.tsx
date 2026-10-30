import Link from "next/link";
import { SITE } from "@/lib/site";

export default function DemoCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="card-surface flex flex-col items-start gap-5 p-8 sm:p-10">
        <h2 className="font-sans text-3xl font-bold leading-tight text-mist-100 sm:text-4xl">
          Want a website like this for your business?{" "}
          <span className="text-gradient-accent">Chat on WhatsApp</span>
        </h2>
        <p className="max-w-xl leading-relaxed text-mist-500">
          Tell us your industry and we will show you the matching demo, then
          shape it around your menu, services or clinic.
        </p>
        <Link
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-white transition hover:bg-accent-deep"
        >
          Chat on WhatsApp <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
