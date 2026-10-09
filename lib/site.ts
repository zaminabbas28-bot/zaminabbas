export const SITE = {
  name: "Rana",
  fullName: "Zeeshan Abbas",
  tagline: "Local SEO Expert in Multan, Pakistan",
  url: "https://zaminabbas28.vercel.app",
  email: "digitalmarketingskills46@gmail.com",
  phoneDisplay: "+92 304 282 8068",
  phoneHref: "+923042828068",
  whatsapp: "https://wa.me/923042828068",
  address: "Metro Station, Pracha Street, Multan, Pakistan",
  locality: "Multan",
  country: "Pakistan",
  fiverr: "https://www.fiverr.com/zaminabbas28",
  instagram: "https://www.instagram.com/zamindigitalmarketing",
  linkedin: "https://www.linkedin.com/in/zamin-abbas-7479aa3a3",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Insights", href: "/#insights" },
  { label: "Reviews", href: "/#reviews" },
] as const;

export const HERO_PHOTOS = [
  { src: "/images/rana-1.jpg", alt: "Rana at his desk", rotate: "-6deg" },
  { src: "/images/rana-2.jpg", alt: "Rana, local SEO expert", rotate: "3deg" },
  { src: "/images/rana-3.jpg", alt: "Rana in the office", rotate: "-2deg" },
  { src: "/images/rana-4.jpg", alt: "Rana, digital marketer", rotate: "5deg" },
] as const;

export interface ServiceCard {
  title: string;
  period: string;
  description: string;
  points: string[];
  tags: string[];
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Local SEO",
    period: "Main expertise",
    description:
      "I put local businesses on the Google Map — literally. Complete Google Business Profile optimization, local citations, review strategy and map-pack ranking that turns nearby searches into phone calls.",
    points: [
      "Google Business Profile setup & full optimization",
      "Google Maps 3-pack ranking strategy",
      "Local citations & NAP consistency cleanup",
      "Review generation & reputation management",
      "Geo-tagged photos, posts & Q&A management",
    ],
    tags: ["GMB OPTIMIZATION", "GOOGLE MAPS", "CITATIONS", "REVIEWS", "LOCAL 3-PACK"],
  },
  {
    title: "WordPress Development",
    period: "Design + build",
    description:
      "Fast, mobile-friendly WordPress websites built to convert and built to rank. From business sites to WooCommerce stores — clean code, sharp design, SEO baked in from the first line.",
    points: [
      "Custom WordPress design & development",
      "WooCommerce stores with payment integration",
      "Speed optimization & Core Web Vitals",
      "On-page SEO structure from day one",
      "Care, maintenance & training included",
    ],
    tags: ["WORDPRESS", "WOOCOMMERCE", "ELEMENTOR", "SPEED", "ON-PAGE SEO"],
  },
  {
    title: "Social Media Marketing",
    period: "Growth",
    description:
      "Content and campaigns that turn followers into customers. Monthly content calendars, profile optimization and community management for brands that want to be impossible to ignore.",
    points: [
      "Monthly content calendars & post design",
      "Profile optimization for discoverability",
      "Community management & engagement",
      "Paid social campaigns with ROI tracking",
      "Monthly reporting in plain language",
    ],
    tags: ["CONTENT", "INSTAGRAM", "FACEBOOK", "PAID SOCIAL", "BRANDING"],
  },
  {
    title: "Google Ads",
    period: "Paid traffic",
    description:
      "Search campaigns that bring customers, not just clicks. Tightly targeted Google Ads with conversion tracking, so every rupee of ad spend is accountable.",
    points: [
      "Search & Maps campaign setup",
      "Keyword research & negative keyword sculpting",
      "Conversion tracking & call tracking",
      "Landing page guidance for better Quality Scores",
      "Weekly optimization & transparent reporting",
    ],
    tags: ["GOOGLE ADS", "PPC", "CONVERSIONS", "TRACKING"],
  },
];

export interface Insight {
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
}

export const INSIGHTS: Insight[] = [
  {
    title: "How to Rank #1 on Google Maps in 2026",
    excerpt:
      "The map pack isn't luck — it's a system. Profile completeness, review velocity, citations and posting cadence: here's the exact order I optimize them in.",
    readTime: "8 min read",
    date: "Oct 2026",
  },
  {
    title: "Geo-Tagged Photos: The Local SEO Signal Everyone Ignores",
    excerpt:
      "Google reads the GPS data in your business photos. Here's how I geo-tag images for my clients and why it moves the needle on local rankings.",
    readTime: "6 min read",
    date: "Sep 2026",
  },
  {
    title: "Why Your WordPress Site Is Slow (And How I Fix It)",
    excerpt:
      "Bloated themes, render-blocking scripts, unoptimized images. A practical checklist for getting a WordPress site under 2 seconds — without breaking it.",
    readTime: "10 min read",
    date: "Aug 2026",
  },
];

export const TOOLKIT = [
  "Google Business Profile",
  "Ahrefs",
  "SEMrush",
  "Screaming Frog",
  "WordPress",
  "Google Search Console",
  "Google Ads",
  "Canva",
] as const;

export interface Project {
  title: string;
  badge: string;
  date: string;
  description: string;
  url: string;
}

export const PROJECTS: Project[] = [
  {
    title: "City Dental Care – Conversion-focused Website",
    badge: "WEB + SEO",
    date: "October 2024",
    description:
      "Custom design, speed optimization, local SEO, and 80% more calls in 60 days.",
    url: "https://maps.app.goo.gl/wtqznxrT44FBifxQ6",
  },
  {
    title: "Sparksails Pakistan – Digital Marketing Agency",
    badge: "WEB PROJECT",
    date: "July 2025",
    description:
      "Modern agency website showcasing services, portfolio, and client success stories with strong conversion focus.",
    url: "https://sparksails.com/pk/",
  },
  {
    title: "Kapri Kids Daycare – Child-friendly Conversion Experience",
    badge: "WEB PROJECT",
    date: "June 2025",
    description:
      "Colorful parent-focused site with service detail pages, trust-building testimonials, and playful visual patterns.",
    url: "https://kaprikidsdaycare.pk/",
  },
];

export type ServiceSlug = "local-seo" | "social-media-marketing" | "technical-seo";

export interface Service {
  slug: ServiceSlug;
  number: string;
  title: string;
  short: string;
  icon: "pin" | "share" | "gear";
  benefits: string[];
  paragraphs: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "local-seo",
    number: "01",
    title: "Local SEO",
    short:
      "Dominate local search results and attract nearby customers with targeted local SEO strategies.",
    icon: "pin",
    benefits: [
      "Google Business Profile setup & optimization",
      "Local keyword targeting that brings foot traffic",
      "NAP consistency across directories & citations",
      "Review generation strategy to build trust",
      "Google Maps ranking for high-intent searches",
      "Location pages optimized for nearby areas",
    ],
    paragraphs: [
      "Local SEO is the fastest way for a neighborhood business to turn nearby searches into paying customers. When someone in your city searches for what you offer, your business should be the first name they see — in the map pack, in organic results, and on your Google Business Profile. My local SEO service is built around exactly that outcome.",
      "I start with a full local audit: your Google Business Profile, existing citations, NAP consistency, reviews, and how competitors are ranking around you. From there I build a clear action plan — optimizing your profile categories, services, photos and posts, cleaning up inconsistent directory listings, and creating location-focused content that matches how real customers search.",
      "Reviews are a ranking factor and a trust factor, so I also set up a simple, repeatable system for earning genuine customer reviews without awkward asks. Combined with locally relevant on-page optimization and authoritative local citations, this compounds into durable map-pack visibility.",
      "Every month you get a plain-language report: keyword positions, map-pack rankings, profile views, calls, and direction requests. No jargon, no vanity metrics — just the numbers that show whether more local customers are finding you.",
    ],
  },
  {
    slug: "social-media-marketing",
    number: "02",
    title: "Social Media Marketing",
    short:
      "Build brand awareness and engage your audience with strategic social media marketing campaigns.",
    icon: "share",
    benefits: [
      "Platform-specific content strategy & calendars",
      "Profile optimization for discoverability",
      "Engaging posts designed to spark conversations",
      "Community management that builds loyalty",
      "Paid social campaigns with clear ROI tracking",
      "Monthly performance reports in plain language",
    ],
    paragraphs: [
      "Social media works when it is strategic, not random. Posting without a plan burns time and rarely moves the needle. My social media marketing service gives your brand a consistent voice, a content system, and campaigns designed around one thing: measurable business results.",
      "We begin by defining your audience and choosing the platforms where they actually spend time — there is no point being everywhere and effective nowhere. I then build a content calendar mixing educational posts, proof of work, behind-the-scenes content, and offers, all written in a tone that sounds like you on your best day.",
      "Engagement is treated as a discipline: comments answered, messages handled, and community conversations that turn followers into customers. When paid promotion makes sense, I run tightly targeted campaigns with clear budgets and conversion tracking, so every rupee is accountable.",
      "You will know exactly what is working through monthly reports covering reach, engagement, follower growth, and — most importantly — leads and sales attributed to social. Strategy evolves from data, not guesswork.",
    ],
  },
  {
    slug: "technical-seo",
    number: "03",
    title: "Technical SEO",
    short:
      "Fix technical issues that hinder your site's performance and ensure optimal crawling and indexing.",
    icon: "gear",
    benefits: [
      "Full technical audit with prioritized fixes",
      "Core Web Vitals & page-speed optimization",
      "Crawlability and indexation improvements",
      "Mobile usability and responsive checks",
      "Structured data (schema) implementation",
      "Fixing broken links, redirects & duplicate content",
    ],
    paragraphs: [
      "Great content cannot rank on a broken foundation. Technical SEO is the behind-the-scenes work that makes sure search engines can crawl, understand, and trust your website — and that visitors get a fast, smooth experience on every device.",
      "My process starts with a deep technical audit covering site speed, Core Web Vitals, mobile usability, crawl errors, indexation, sitemaps, robots directives, canonicalization, and structured data. Every issue is scored by impact, so we fix what moves rankings first instead of chasing minor tweaks.",
      "Implementation is hands-on: compressing and modernizing assets, eliminating render-blocking resources, fixing redirect chains and broken links, resolving duplicate content, and adding schema markup that helps you win rich results. I work directly in your stack or alongside your developers with precise, ticket-ready instructions.",
      "After fixes go live, I monitor Search Console data to confirm indexing improvements and ranking movement. Technical SEO is not a one-time project — I offer ongoing monitoring so new issues are caught before they cost you traffic.",
    ],
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "What SEO services do you offer?",
    answer:
      "I offer a complete range of SEO services: local SEO (Google Business Profile, maps ranking, citations), technical SEO (site speed, Core Web Vitals, crawlability, schema), on-page optimization, off-page SEO and link building, full SEO audits, and keyword strategy. I also build high-performance, conversion-focused websites, so design and SEO work together from day one.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "Most clients start seeing meaningful movement in 3 to 6 months. The exact timeline depends on your niche's competition, your website's current state, and the keywords we target. Local SEO often shows wins sooner, while highly competitive national keywords take longer. I set realistic expectations upfront and report progress monthly so you always know where things stand.",
  },
  {
    question: "Do you offer custom SEO packages?",
    answer:
      "Yes. Every business is different, so I build packages around your goals, market, and budget rather than forcing you into a fixed plan. Whether you are a local shop needing map-pack visibility or a growing company needing full technical and content SEO, we scope the work together and you only pay for what actually moves the needle.",
  },
  {
    question: "Why should I hire you as my SEO specialist?",
    answer:
      "Because I specialize in what actually moves the needle for local businesses: Google Business Profile optimization, Maps ranking, and websites built to convert. My process is data-driven — audits first, strategy second, execution with transparent monthly reporting — and I never use risky shortcuts that could get your site penalized. You always know what was done, why it was done, and what it achieved.",
  },
  {
    question: "How do I rank my business on Google Maps in Pakistan?",
    answer:
      "Ranking on Google Maps comes down to four things done consistently: a fully completed and verified Google Business Profile, the right primary and secondary categories, a steady flow of genuine customer reviews that you reply to, and local citations with matching name, address and phone number. Add weekly Google Posts and geo-tagged photos, and most local businesses in Pakistan start seeing map-pack movement within 2 to 3 months. That is exactly the system I run for my clients.",
  },
  {
    question: "Do you provide ongoing monitoring and reporting?",
    answer:
      "Absolutely. SEO is never 'done' — algorithms change and competitors keep working. I provide ongoing monitoring of rankings, traffic, and technical health, plus clear monthly reports showing keyword positions, organic growth, and completed work. You will always know what was done, why it was done, and what it achieved.",
  },
];

export interface Review {
  name: string;
  initials: string;
  quote: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Ahmed Feroz",
    initials: "AF",
    quote:
      "Zamin took our business to the first page of Google within a few months. Phone calls and walk-in customers have grown noticeably since.",
  },
  {
    name: "Qazi Emad",
    initials: "QE",
    quote:
      "Professional, transparent, and completely data-driven. He explained every step clearly and our rankings improved month after month.",
  },
  {
    name: "Aun Abbas",
    initials: "AA",
    quote:
      "His technical SEO audit uncovered issues we never knew existed. Site speed improved dramatically and our pages started ranking better.",
  },
  {
    name: "Jhanzaib Moiz",
    initials: "JM",
    quote:
      "His local SEO strategy put us on the map — literally. Our Google Maps visibility brought in double the leads we had before.",
  },
  {
    name: "Sarah Mitchell",
    initials: "SM",
    quote:
      "Excellent communication and genuine results. Our organic traffic grew steadily every single month under his management.",
  },
  {
    name: "Rizwan Hassan",
    initials: "RH",
    quote:
      "A highly recommended SEO expert. Honest advice, clear monthly reporting, and rankings that actually held their position.",
  },
];

export const STATS = [
  { value: "500+", label: "Websites Ranked" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5★", label: "Average Rating" },
] as const;
