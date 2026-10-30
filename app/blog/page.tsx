import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Blog | Zamin Abbas" },
  description:
    "Practical local SEO and Google Business Profile guides from Zamin Abbas — written from real client work in Multan, Pakistan.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Zamin Abbas",
    description:
      "Practical local SEO and Google Business Profile guides from Zamin Abbas — written from real client work in Multan, Pakistan.",
    url: `${SITE.url}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Zamin Abbas",
    description:
      "Practical local SEO and Google Business Profile guides from Zamin Abbas — written from real client work in Multan, Pakistan.",
  },
};

export default function BlogPage() {
  return (
    <article className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] text-gold-400 uppercase">
            Blog
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-mist-100 sm:text-5xl">
            Guides that <span className="text-gold-gradient">rank businesses</span>
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-mist-300">
            Practical local SEO and Google Business Profile guides — no theory,
            no guarantees, just the checks and systems used in real client work.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {BLOG_POSTS.map((post) => (
            <Reveal key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-glow group block rounded-2xl border border-black/10 dark:border-white/15 bg-ink-800/70 p-6 sm:p-8"
              >
                <p className="text-xs font-bold tracking-widest text-gold-500">
                  {post.dateDisplay} · {post.readTime}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-mist-100 transition-colors group-hover:text-gold-300">
                  {post.title}
                </h2>
                <p className="mt-3 leading-relaxed text-mist-300">{post.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold-400">
                  Read Article <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
