import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon, CheckIcon, ChevronDownIcon } from "@/components/icons";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/site";

interface BlogArticleProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: { absolute: `${post.title} | Zamin Abbas` },
    description: post.description,
    keywords: ["Google Maps ranking", "Google Business Profile", "local SEO", SITE.name],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE.url}/blog/${post.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticleProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleUrl = `${SITE.url}/blog/${post.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: SITE.name, url: SITE.url },
    datePublished: post.date,
    mainEntityOfPage: articleUrl,
  };

  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <JsonLd id="breadcrumb-jsonld" data={breadcrumbSchema} />
      <JsonLd id="article-jsonld" data={articleSchema} />

      <article className="pt-28 pb-20 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-mist-500">
                <li>
                  <Link href="/" className="transition-colors hover:text-gold-300">
                    Home
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronDownIcon className="h-3.5 w-3.5 -rotate-90" />
                </li>
                <li>
                  <Link href="/blog" className="transition-colors hover:text-gold-300">
                    Blog
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronDownIcon className="h-3.5 w-3.5 -rotate-90" />
                </li>
                <li aria-current="page" className="font-medium text-gold-300">
                  {post.dateDisplay}
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-8 text-xs font-bold tracking-[0.3em] text-gold-400 uppercase">
              {post.dateDisplay} · {post.readTime}
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-mist-300">{post.description}</p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 space-y-6">
              {post.intro.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-mist-100/90">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-12 font-display text-2xl font-bold text-white">
              {post.stepsHeading ?? `The ${post.checks.length} checks`},{" "}
              <span className="text-gold-gradient">in order</span>
            </h2>
            <ol className="mt-6 space-y-2">
              {post.checks.map((check, i) => (
                <li key={check.title}>
                  <a
                    href={`#check-${i + 1}`}
                    className="flex items-baseline gap-3 rounded-xl border border-white/10 bg-ink-800/70 px-5 py-3.5 text-mist-100 transition-colors hover:border-gold-400/40 hover:text-gold-300"
                  >
                    <span className="font-display text-sm font-bold text-gold-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium sm:text-base">{check.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>

          {post.checks.map((check, i) => (
            <Reveal key={check.title} delay={80}>
              <section id={`check-${i + 1}`} className="mt-14 scroll-mt-28">
                <p className="text-xs font-bold tracking-[0.3em] text-gold-400 uppercase">
                  {post.stepLabel ?? "Check"} {i + 1} of {post.checks.length}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                  {check.title}
                </h2>
                <div className="mt-5 space-y-5">
                  {check.paragraphs.map((p, j) => (
                    <p key={j} className="text-lg leading-relaxed text-mist-100/90">
                      {p}
                    </p>
                  ))}
                </div>
                <ul className="mt-6 space-y-3" aria-label={`What to do for ${check.title}`}>
                  {check.actions.map((action) => (
                    <li key={action} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span className="text-base font-medium text-mist-100">{action}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}

          <Reveal delay={100}>
            <div className="mt-14 space-y-6">
              {post.closing.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-mist-100/90">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 rounded-3xl border border-gold-400/25 bg-gradient-to-br from-ink-800 to-ink-900 p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                Still not showing on <span className="text-gold-gradient">Google Maps</span>?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-mist-300">
                Get a proper profile audit — the same system behind my{" "}
                <Link href="/services/local-seo" className="font-semibold text-gold-300 hover:text-gold-400">
                  Local SEO
                </Link>{" "}
                and{" "}
                <Link href="/services/google-business-profile" className="font-semibold text-gold-300 hover:text-gold-400">
                  Google Business Profile optimization
                </Link>{" "}
                services — and a clear list of what to fix first.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#contact"
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
                  WhatsApp 0320 9588428
                </Link>
              </div>
            </div>
          </Reveal>

          {others.length > 0 && (
            <Reveal delay={80}>
              <h2 className="mt-14 font-display text-2xl font-bold text-white">
                More from the <span className="text-gold-gradient">Blog</span>
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/blog/${other.slug}`}
                    className="card-glow group rounded-2xl border border-white/10 bg-ink-800/70 p-6"
                  >
                    <p className="text-xs font-bold tracking-widest text-gold-500">
                      {other.dateDisplay} · {other.readTime}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold text-white transition-colors group-hover:text-gold-300">
                      {other.title}
                    </h3>
                    <p className="mt-2 text-sm text-mist-300">{other.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold-400">
                      Read Article <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </article>
    </>
  );
}
