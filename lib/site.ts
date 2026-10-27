export const SITE = {
  name: "Zamin Abbas",
  fullName: "Zamin Abbas",
  tagline: "Local SEO Expert in Multan, Pakistan",
  url: "https://zaminabbas.tech",
  email: "digitalmarketingskills46@gmail.com",
  phoneDisplay: "+92 320 958 8428",
  phoneHref: "+923209588428",
  whatsapp: "https://wa.me/923209588428",
  address: "Metro Station, Pracha Street, Multan, Pakistan",
  locality: "Multan",
  country: "Pakistan",
  fiverr: "https://www.fiverr.com/zaminabbas28",
  instagram: "https://www.instagram.com/zaminabbas0000/",
  facebook: "https://www.facebook.com/people/Zamin-Abbas/61587334380259/",
  twitter: "https://x.com/ranazamin2846",
  linkedin: "https://www.linkedin.com/in/zamin-abbas-7479aa3a3/",
  gmb: "https://www.google.com/maps/place/Zamin+Abbas+Local+SEO+Expert/@30.171584,71.4910716,17z/data=!3m1!4b1!4m6!3m5!1s0x393b3753ce437bed:0x61116d5f41035fa8!8m2!3d30.171584!4d71.4910716!16s%2Fg%2F11mkpmpdh9",
  gaMeasurementId: "G-KMFJJ0HMVT",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Insights", href: "/#insights" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/#reviews" },
] as const;

export const HERO_PHOTOS = [
  { src: "/images/zamin-abbas-local-seo-expert.jpg", alt: "Zamin Abbas at his desk", rotate: "-6deg" },
  { src: "/images/rana-2.jpg", alt: "Zamin Abbas, local SEO expert", rotate: "3deg" },
  { src: "/images/rana-3.jpg", alt: "Zamin Abbas in the office", rotate: "-2deg" },
  { src: "/images/rana-4.jpg", alt: "Zamin Abbas, digital marketer", rotate: "5deg" },
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
      "Business photos, Google Posts & Q&A management",
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
    title: "How to Improve Your Google Maps Rankings in 2026",
    excerpt:
      "The map pack isn't luck — it's a system. Profile completeness, review velocity, citations and posting cadence: here's the exact order I optimize them in.",
    readTime: "8 min read",
    date: "Oct 2026",
  },
  {
    title: "Should You Geo-Tag Business Photos for Local SEO?",
    excerpt:
      "Do GPS-tagged photos actually help local rankings? Here's what matters most for your Google Business Profile photos — and what to focus on instead of myths.",
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
  url?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "City Dental Care – Conversion-focused Website",
    badge: "WEB + SEO",
    date: "October 2024",
    description:
      "Custom design, speed optimization, and local SEO for a conversion-focused business website.",
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
  },
];

export type ServiceSlug =
  | "local-seo"
  | "google-business-profile"
  | "social-media-marketing"
  | "technical-seo"
  | "wordpress-development"
  | "google-ads";

export interface Service {
  slug: ServiceSlug;
  number: string;
  title: string;
  short: string;
  icon: "pin" | "share" | "gear";
  benefits: string[];
  paragraphs: string[];
  h1?: string;
  metaDescription?: string;
  faqs?: Faq[];
  priceLine?: string;
}

export const SERVICES: Service[] = [
  {
    slug: "local-seo",
    number: "01",
    title: "Local SEO",
    h1: "Local SEO Services in Multan, Pakistan",
    short:
      "Dominate local search results and attract nearby customers with targeted local SEO strategies.",
    metaDescription:
      "Local SEO services in Multan, Pakistan — Google Maps ranking, Google Business Profile optimization, citations and reviews that turn nearby searches into calls.",
    priceLine:
      "Affordable SEO services from $30 — every project is scoped and quoted after a free audit, with no hidden fees.",
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
      "Local SEO is the fastest way for a neighborhood business to turn nearby searches into paying customers. When someone in Multan searches for what you offer, your business should be the first name they see — on Google Maps, in the map pack, in organic results, and on your Google Business Profile. My local SEO services in Multan are built around exactly that outcome: stronger Google Maps visibility through complete local search optimization.",
      "I start with a full local audit: your Google Business Profile, existing citations, NAP consistency, reviews, and how competitors are ranking around you. From there I build a clear action plan — Google Business Profile optimization across categories, services, photos and posts, cleaning up inconsistent directory listings, and creating location-focused content that matches how real customers search.",
      "Reviews are a ranking factor and a trust factor, so I also set up a simple, repeatable system for earning genuine customer reviews without awkward asks. Combined with locally relevant on-page optimization and authoritative local citations, this compounds into durable map-pack visibility.",
      "Every month you get a plain-language report: keyword positions, map-pack rankings, profile views, calls, and direction requests. No jargon, no vanity metrics — just the numbers that show whether more local customers are finding you.",
      "I work with businesses across Multan — Gulgasht, Cantt, Bosan Road, Nishtar Road and the Northern Bypass corridor — and with service-area businesses that cover the whole city. Wherever your customers search from, the goal is the same: your business in the map pack, with a profile that turns views into calls.",
    ],
    faqs: [
      {
        question: "How do I get my business to show up on Google Maps?",
        answer:
          "It starts with a complete, verified Google Business Profile: the correct primary category, accurate name, address and phone number, your services listed, and real photos of the business. Consistent citations, genuine reviews and a locally optimized website then build the prominence Google needs to place you in the map pack. That full system is what my local SEO service sets up and improves month by month.",
      },
      {
        question: "How long does local SEO take to show results?",
        answer:
          "Most businesses see early movement within 1 to 3 months — more profile views, calls and direction requests — with stronger map-pack positions typically building over 3 to 6 months. The timeline depends on your competition, review count and starting point, which is why I begin with an audit and report progress monthly in plain language.",
      },
      {
        question: "Can I pay Google to rank higher on Google Maps?",
        answer:
          "No. Map pack rankings are organic and cannot be bought. Google Ads can place a clearly labeled sponsored result above the map results, which is a separate service — but the map pack itself is earned through profile quality, relevance, distance and prominence.",
      },
      {
        question: "Do I need a physical address for local SEO?",
        answer:
          "Not always. If customers visit your location, a real address helps. If you visit customers instead — like many service businesses in Multan — you can register as a service-area business, hide the address, and still rank in the areas you serve. What you cannot use is a fake or virtual address; Google suspends profiles for that.",
      },
      {
        question: "Can I do local SEO myself?",
        answer:
          "Yes — the basics are public: claim your profile, complete every field, add photos, and ask happy customers for reviews. Where owners usually stall is consistency: weekly posts, citation cleanup, review replies and tracking what actually changed rankings. Hiring me buys that system, done every month, plus the hours it takes.",
      },
      {
        question: "How is local SEO different from regular SEO?",
        answer:
          "Regular SEO ranks websites in the main search results. Local SEO ranks your business in Google Maps and the map pack for searches with local intent — 'near me' and city-based searches. It leans on your Google Business Profile, citations, reviews and location signals rather than only on your website's pages and backlinks.",
      },
      {
        question: "Can I hire you as an SEO consultant?",
        answer:
          "Yes. If you need expert advice rather than monthly management, I offer one-off audits and a free initial consultation — for example, a local SEO audit of your profile, citations and rankings, with a prioritized action plan you can implement yourself or hand to me.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    number: "02",
    title: "Social Media Marketing",
    short:
      "Build brand awareness and engage your audience with strategic social media marketing campaigns.",
    metaDescription:
      "Social media marketing services — content strategy, profile optimization and campaigns that turn followers into customers, reported in plain language every month.",
    priceLine:
      "Packages start from $50 — scoped after a free consultation, with no hidden fees.",
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
    faqs: [
      {
        question: "Which social media platforms should my business be on?",
        answer:
          "The ones your customers actually use. For most local businesses that means Facebook and Instagram first; LinkedIn suits B2B services, and TikTok suits younger audiences and visual products. I help you choose based on your audience instead of opening accounts everywhere and maintaining none of them well.",
      },
      {
        question: "What does social media marketing include?",
        answer:
          "A content strategy and monthly calendar built around your goals, profile optimization so your pages are discoverable, content designed in your brand's voice, community management for comments and messages, optional paid campaigns, and a plain-language report every month covering what was posted and what it produced.",
      },
      {
        question: "How often will you post for my business?",
        answer:
          "Consistency matters more than volume. Your plan runs on a fixed monthly content calendar agreed with you in advance, so you always know what is going out and when — no random posting and no long silences on your pages.",
      },
      {
        question: "Can social media bring me customers, not just likes?",
        answer:
          "Yes, when it is run as a system: content that shows your work and proof, offers with clear calls to action, fast replies to enquiries, and paid campaigns targeted at people near your business. I report enquiries and leads alongside reach and engagement, so you can judge social media on business results.",
      },
      {
        question: "Do you also run paid social media ads?",
        answer:
          "Yes. Paid campaigns on Facebook and Instagram can be added to your plan with a defined budget, tight location and audience targeting, and conversion tracking — so every rupee of spend is accountable, the same way I run Google Ads.",
      },
    ],
  },
  {
    slug: "technical-seo",
    number: "03",
    title: "Technical SEO",
    short:
      "Fix technical issues that hinder your site's performance and ensure optimal crawling and indexing.",
    metaDescription:
      "Technical SEO services — in-depth audits, Core Web Vitals and speed fixes, crawlability, indexation and schema markup. Find what is holding your rankings back.",
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
    faqs: [
      {
        question: "What does a technical SEO audit include?",
        answer:
          "Crawlability and indexation, sitemap and robots directives, canonical tags and duplicate content, broken links and redirect chains, site speed and Core Web Vitals, mobile usability, structured data, and HTTPS basics. You receive the findings as a prioritized list scored by impact, so the fixes that move rankings come first.",
      },
      {
        question: "How long do technical SEO fixes take?",
        answer:
          "Most audits are completed within days. High-impact fixes usually go live within 1 to 3 weeks, depending on your platform and access. I implement directly in your stack where I can, and provide precise, ticket-ready instructions where your developer needs to be involved.",
      },
      {
        question: "Which platforms do you work on?",
        answer:
          "I work most deeply on WordPress and on custom-coded websites like this portfolio (Next.js). For other platforms, I provide the full audit and exact fix instructions your developer can implement, then verify the results in Search Console.",
      },
      {
        question: "Will technical SEO alone make me rank number one?",
        answer:
          "No. Technical SEO removes the obstacles that hold good content back — rankings still need relevant content and authority. What it does ensure is that search engines can crawl, index and present your site at its best: the foundation every other SEO effort stands on.",
      },
      {
        question: "How do I know the fixes worked?",
        answer:
          "After implementation I monitor Google Search Console for coverage and indexation changes, Core Web Vitals status, and ranking movement — and report it in plain language, including anything that still needs attention.",
      },
    ],
  },
  {
    slug: "wordpress-development",
    number: "04",
    title: "WordPress Development",
    short:
      "Fast, SEO-friendly WordPress websites designed to convert visitors into customers.",
    metaDescription:
      "WordPress development services — fast, SEO-friendly business websites and WooCommerce stores built to convert. Based in Multan, working with clients worldwide.",
    priceLine:
      "Projects start from $80 — the final quote depends on scope and is confirmed before any work begins.",
    icon: "gear",
    benefits: [
      "Custom WordPress design & development",
      "WooCommerce stores with payment integration",
      "Speed optimization & Core Web Vitals",
      "On-page SEO structure from day one",
      "Mobile-first responsive design",
      "Care, maintenance & training included",
    ],
    paragraphs: [
      "Your website should sell while you sleep. I build WordPress websites that load fast, look professional, and are structured for search engines from the very first line of code — so you get a site that both visitors and Google love.",
      "Every build starts with your goals: who you serve, what action visitors should take, and how they find you. From there I design a clean, conversion-focused layout and develop it on WordPress with lightweight themes and carefully chosen plugins — no bloated page builders slowing things down.",
      "For stores, I set up WooCommerce with secure payment integration, product pages optimized for search with ecommerce SEO basics, and a checkout flow designed to reduce abandoned carts. For business sites, I build service pages, contact flows, and local SEO foundations that help you rank in your market.",
      "After launch, you are not left guessing: I provide training videos, documentation, and an optional care plan covering updates, backups, and security. Your site stays fast, safe, and working for your business long after go-live.",
      "From my base in Multan I build websites for local businesses here — clinics, shops, restaurants and service companies across the city — and for clients abroad who hire me remotely, including website design and development delivered entirely over WhatsApp and video calls. Whether we meet in person or online, the process is the same: clear scope, honest timelines, and a website designed around the searches your customers actually make.",
    ],
    faqs: [
      {
        question: "How long does it take to build a WordPress website?",
        answer:
          "A typical business website takes 2 to 4 weeks from kickoff to launch, depending on the number of pages, how ready your content is, and the features involved. WooCommerce stores and custom systems take longer. You get a clear timeline before we start, and you can watch progress as the site is built.",
      },
      {
        question: "Will my website be SEO-friendly from day one?",
        answer:
          "Yes. Every build includes a clean site structure, fast-loading pages, mobile-first design, correct heading and meta setup, and the technical foundations Google needs to crawl and rank you. If you serve a local market, I also set up the local SEO basics — service pages structured for your city and aligned with your Google Business Profile.",
      },
      {
        question: "Can you redesign or fix my existing WordPress website?",
        answer:
          "Yes. I start with a quick audit of speed, structure and SEO issues, then either improve what you have or rebuild it cleanly if that is the better value. Your existing content and search presence are protected through the move with proper redirects.",
      },
      {
        question: "Do you build online stores?",
        answer:
          "Yes — WooCommerce stores with secure payment integration, product pages written and structured for search, and a checkout flow designed to reduce abandoned carts. I will also show you how to manage products and orders yourself after launch.",
      },
      {
        question: "What happens after my website launches?",
        answer:
          "You receive training and documentation so you can update the site yourself, plus an optional care plan covering updates, backups and security. Your site stays fast, safe and working for your business long after go-live — and I am one WhatsApp message away if you need changes.",
      },
      {
        question: "Can I hire you as a WordPress developer or web designer in Multan?",
        answer:
          "Yes. I am based in Multan and design and build websites for local businesses here — clinics, shops, restaurants and service companies — and I also work remotely with clients abroad over WhatsApp and video calls. Whether you need a new WordPress site or a redesign, you get a clear scope and timeline before work starts.",
      },
    ],
  },
  {
    slug: "google-ads",
    number: "05",
    title: "Google Ads",
    short:
      "Tightly targeted Google Ads campaigns with conversion tracking and transparent reporting.",
    metaDescription:
      "Google Ads management services — tightly targeted search campaigns with conversion tracking and transparent reporting, so your ad spend turns into customers.",
    icon: "share",
    benefits: [
      "Search & Maps campaign setup",
      "Keyword research & negative keyword sculpting",
      "Conversion tracking & call tracking",
      "Landing page guidance for better Quality Scores",
      "Weekly optimization & bid management",
      "Transparent reporting with no hidden fees",
    ],
    paragraphs: [
      "SEO builds long-term visibility; Google Ads brings customers today. I run tightly targeted search and Maps campaigns that put your business in front of people actively searching for what you offer — with every rupee of ad spend accounted for.",
      "We start with research: the keywords your customers actually type, what competitors are bidding, and which searches deserve your budget versus your negative keyword list. Campaigns are structured around intent, so high-intent searches get priority and tire-kickers get filtered out.",
      "Tracking is non-negotiable. I set up conversion tracking for calls, form fills, WhatsApp clicks, and direction requests — so you see exactly which keywords and ads produce customers, not just clicks. Landing pages get reviewed for Quality Score factors that lower your cost per click.",
      "Management is hands-on and ongoing: weekly bid adjustments, search term reviews, ad copy testing, and budget reallocation toward what converts. Reports are in plain language — spend, conversions, cost per lead, and what changed this week.",
      "Most of my campaigns are built for local intent: people in Multan searching for a service they need right now. Tight location targeting keeps your budget on the areas you actually serve, instead of paying for clicks from across the country.",
    ],
    faqs: [
      {
        question: "How much budget do I need for Google Ads?",
        answer:
          "There is no single figure that works for everyone — what matters is your cost per click and how many clicks a sale typically needs. I research your keywords first and recommend a realistic starting budget for your market, then scale only what proves it converts. You always know exactly where the money goes.",
      },
      {
        question: "How fast will I see results from Google Ads?",
        answer:
          "Ads can start showing the day a campaign launches, and enquiries can follow within days. The first 2 to 4 weeks are a learning period — testing keywords and ad copy and cutting waste — after which cost per lead usually stabilizes as the data improves.",
      },
      {
        question: "Should I choose Google Ads or SEO?",
        answer:
          "They do different jobs. Ads rent visibility today; SEO builds visibility you keep. Most local businesses get the best return using ads for immediate enquiries while SEO compounds in the background. Since I offer both, the advice you get is about your goals, not my service menu.",
      },
      {
        question: "What does your Google Ads management include?",
        answer:
          "Keyword research and negative keyword sculpting, campaign setup, ad copy, conversion and call tracking, weekly bid and budget optimization, and plain-language reporting on spend, conversions and cost per lead — with no hidden fees.",
      },
      {
        question: "Do you only run ads in Multan?",
        answer:
          "No. I am based in Multan and many of my campaigns target local searches here, but I manage campaigns for clients in other cities and countries too. Targeting is always set around your customers, wherever they are.",
      },
    ],
  },
  {
    slug: "google-business-profile",
    number: "06",
    title: "Google Business Profile",
    h1: "Google Business Profile Optimization Services in Pakistan",
    short:
      "Get found on Google Maps with complete Google Business Profile (GMB) optimization and ongoing management — categories, services, photos, posts and reviews handled for you.",
    metaDescription:
      "Google Business Profile optimization and management — setup, categories, services, photos, posts and review strategy that help you rank higher on Google Maps.",
    priceLine:
      "GBP optimization is part of my Local SEO packages, which start from $30 — scoped and quoted after a free profile audit.",
    icon: "pin",
    benefits: [
      "Complete profile setup, cleanup & optimization",
      "Category & services research that matches searches",
      "Photos, products & weekly Google Posts managed",
      "Review generation strategy & reply handling",
      "Q&A monitoring and accurate business information",
      "Suspension guidance & monthly insights reporting",
    ],
    paragraphs: [
      "For most local businesses, your Google Business Profile is your real storefront on Google. It is what appears in Google Maps and the map pack — usually before a customer ever reaches your website. My Google Business Profile optimization and management service makes that storefront complete, accurate and active, so more nearby customers find you, call you and visit you.",
      "Optimization starts with an audit of the whole profile: primary and secondary categories, services, attributes, business hours, photos, and name, address and phone consistency with your website and citations. I then write service descriptions around what customers actually search, add missing services and products, and set up a photo and post structure that keeps the profile looking alive — because Google rewards profiles that are maintained, not abandoned.",
      "Management is where the compounding happens. Every week your profile gets fresh posts and photo updates; every customer question gets an accurate answer; every review gets a professional reply. Each month you receive a plain-language report of profile views, calls, direction requests and the searches that found you — the numbers that show whether more customers are reaching your business.",
      "I run this exact routine on my own Multan business profile every day, and it is the same system I apply to client profiles in Pakistan and abroad. If your profile is suspended, duplicated or simply invisible on Maps, I will tell you honestly what can be fixed, what it takes, and what Google — not any freelancer — ultimately decides.",
    ],
    faqs: [
      {
        question: "How long does Google Business Profile verification take?",
        answer:
          "Most profiles verify within a few days, though it can take a week or more. Google chooses the method — video verification is now common, and some businesses are asked for documents or a postcard instead. I guide you through whichever method Google assigns, so the first attempt succeeds.",
      },
      {
        question: "Why is my business not showing on Google Maps?",
        answer:
          "The usual causes are an unverified or newly created profile, a wrong primary category, inconsistent business information, a service-area address set up incorrectly, or a suspension. An audit checks each cause in order instead of guessing — most visibility problems have a specific, fixable reason.",
      },
      {
        question: "Why did Google suspend my Business Profile?",
        answer:
          "Common triggers are keyword-stuffed business names, virtual or residential addresses that break the guidelines, duplicate profiles, or sudden suspicious edits. The fix is to correct the underlying issue first, then submit a policy-based appeal with evidence. I help prepare that appeal — but Google makes the final decision, and anyone who guarantees reinstatement is not being honest with you.",
      },
      {
        question: "Can I just create a new profile instead of appealing a suspension?",
        answer:
          "No. A new profile for the same business usually gets flagged as a duplicate and can make the original problem worse. The suspended profile carries your reviews and history — appealing it properly is almost always the right path.",
      },
      {
        question: "What is the difference between GBP optimization and GBP management?",
        answer:
          "Optimization is the one-time foundation: categories, services, attributes, photos, description and information accuracy. Management is the ongoing work that keeps the profile winning — weekly posts, new photos, Q&A answers, review replies and monthly insights reporting. Most businesses need optimization first, then management to compound it.",
      },
      {
        question: "Do you guarantee a number one ranking on Google Maps?",
        answer:
          "No — and no honest specialist can. Rankings depend on competition, the searcher's distance from your business, and factors only Google controls. What I do guarantee is the work: a completely optimized profile, consistent management, and transparent monthly reporting on views, calls and direction requests.",
      },
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
      "I offer a complete range of SEO and digital marketing services: local SEO (Google Business Profile, maps ranking, citations), technical SEO (site speed, Core Web Vitals, crawlability, schema), on-page optimization, off-page SEO and link building, full SEO audits, and keyword strategy. I also build high-performance, conversion-focused websites, so design and SEO work together from day one.",
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
      "Because I specialize in what actually moves the needle for local businesses in Pakistan: Google Business Profile optimization, Maps ranking, and websites built to convert. My process is data-driven — audits first, strategy second, execution with transparent monthly reporting — and I never use risky shortcuts that could get your site penalized. You always know what was done, why it was done, and what it achieved.",
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
  { value: "Local SEO", label: "Main Expertise" },
  { value: "WordPress", label: "Development" },
  { value: "Google Ads", label: "Paid Search" },
  { value: "Social Media", label: "Marketing" },
] as const;
