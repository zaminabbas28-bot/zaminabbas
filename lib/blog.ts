export interface BlogCheck {
  title: string;
  paragraphs: string[];
  actions: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateDisplay: string;
  readTime: string;
  intro: string[];
  checks: BlogCheck[];
  closing: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "business-not-showing-on-google-maps",
    title: "Why Is My Business Not Showing on Google Maps? 9 Checks in the Right Order",
    description:
      "Your business is missing from Google Maps? Run these 9 checks in order — verification, suspension, category, address and more — to find the real reason.",
    date: "2026-10-25",
    dateDisplay: "October 25, 2026",
    readTime: "9 min read",
    intro: [
      "You search for your own business on Google Maps and it is nowhere to be found — while competitors show up without a problem. Before changing anything, work through the causes in order. Most visibility problems have one specific reason, and fixing the wrong thing first wastes weeks.",
      "The nine checks below run from the most common and most blocking causes to the slower, compounding ones. Start at the top and stop as soon as you find your problem — you usually only need to fix one or two things.",
    ],
    checks: [
      {
        title: "Is the profile actually verified?",
        paragraphs: [
          "An unverified profile rarely appears in Maps results. Open your Business Profile manager: if it still asks you to verify, that is your answer. Google offers different methods — video, documents, or postcard — and you cannot choose which one you get.",
          "Complete the method Google assigns, and do not edit the name, address, or category while verification is pending — edits can restart the process.",
        ],
        actions: [
          "Open the Business Profile manager and check for a verification prompt",
          "Complete the verification method Google assigns, exactly as instructed",
          "Leave the name, address, and category untouched until verification clears",
        ],
      },
      {
        title: "Is the profile suspended or disabled?",
        paragraphs: [
          "A suspended profile is removed from Maps entirely, and the manager usually shows a notice. Common triggers are a business name stuffed with keywords, an address that breaks the guidelines, a duplicate profile, or a sudden run of suspicious edits.",
          "Do not create a second profile to get around a suspension — duplicates usually get flagged and can make the original problem worse. Fix the underlying issue first, then submit a policy-based appeal with evidence. Google makes the final decision, and anyone who guarantees reinstatement is not being honest with you.",
        ],
        actions: [
          "Check the manager for a suspension notice and read what it says",
          "Correct the underlying issue before appealing",
          "Appeal with evidence — never open a replacement profile",
        ],
      },
      {
        title: "Is the profile brand new or still under review?",
        paragraphs: [
          "New profiles and major edits can sit in review for days. If everything else looks right and the profile is only a few days old, waiting is often the correct move.",
          "Keep the information stable during this period. Repeated edits extend the review, so resist the urge to keep tweaking the profile while Google is still checking it.",
        ],
        actions: [
          "Confirm the profile creation or last major edit date",
          "If it is only a few days old, wait before changing anything",
          "Avoid repeated edits while a review is pending",
        ],
      },
      {
        title: "Is the primary category right?",
        paragraphs: [
          "Category is one of the strongest relevance signals Google uses. If you are a dental clinic listed under a generic category, or a restaurant listed under the wrong cuisine, you will not match the searches your customers actually make.",
          "Pick the single category that best describes what the business is, then add secondary categories only where they genuinely apply. More categories do not mean more visibility — the wrong primary category actively hurts you.",
        ],
        actions: [
          "Compare your primary category with what your best customers would search",
          "Change the primary category to the closest real match",
          "Remove secondary categories that do not genuinely apply",
        ],
      },
      {
        title: "Is the address or service area set up correctly?",
        paragraphs: [
          "Storefront businesses need an accurate, real address. Service-area businesses — plumbers, tutors, home services — should hide the address and set the areas they actually serve.",
          "Two mistakes are common: hiding the address when customers do visit you, and listing a service area far wider than you genuinely cover. Both confuse Google's distance calculations. Never use a virtual office or an address where the business does not operate — that is a fast route to suspension.",
        ],
        actions: [
          "Storefront: show the real address customers visit",
          "Service-area business: hide the address and list only areas you serve",
          "Remove any address where the business does not genuinely operate",
        ],
      },
      {
        title: "Is the information consistent everywhere?",
        paragraphs: [
          "Google cross-checks your name, address, and phone number against your website and other directories. If your website says one phone number, Facebook says another, and the profile says a third, Google trusts the business less.",
          "Make the name, address, and phone number identical everywhere they appear, starting with your own website. This consistency work is unglamorous, but it is one of the first things an audit checks — because inconsistency is such a common, silent cause of weak visibility.",
        ],
        actions: [
          "Compare the name, address, and phone number on your website, profile, and social pages",
          "Fix every mismatch so all three match exactly",
          "Check the main directories next, not just the profile",
        ],
      },
      {
        title: "Is it simply a distance problem?",
        paragraphs: [
          "Maps results are centered on the searcher. If someone searches far from your shop, a competitor two streets away from them will usually win, no matter how good your profile is. You cannot change where searchers stand.",
          "What you can strengthen are the other two factors Google weighs: relevance — categories, services, and content that match the search — and prominence — reviews, citations, and an active profile. For service-area businesses, the areas you list define where you can realistically appear, so set them honestly and completely.",
        ],
        actions: [
          "Search from different locations before concluding the profile is broken",
          "Strengthen relevance with accurate categories and services",
          "Build prominence with reviews, citations, and regular profile activity",
        ],
      },
      {
        title: "Is there a duplicate profile splitting your signals?",
        paragraphs: [
          "Duplicates happen after rebrands, moves, or when a well-meaning employee creates a second listing. Two profiles for one business split reviews, photos, and ranking signals between them — and Google may show neither.",
          "Search Maps for your business name and address variants, including old names and old addresses. If you find a duplicate you control, remove it properly through the manager. If you do not control it, use the “Suggest an edit” flow to report it as a duplicate.",
        ],
        actions: [
          "Search Maps for your business name, old names, and old addresses",
          "Remove duplicates you control through the manager",
          "Report duplicates you do not control as duplicates",
        ],
      },
      {
        title: "Is the profile complete and active?",
        paragraphs: [
          "Once the blocking problems are ruled out, completeness is what separates visible profiles from invisible ones. Fill every field: services with descriptions, attributes, hours including holiday hours, and real photos of the business, the team, and the work — not stock images.",
          "Then keep it alive: a post every week, answers to customer questions, and replies to every review. Profiles that are maintained outrank profiles that were set up once and abandoned. This is the slowest check on the list, but it is also the one that keeps working after the others are fixed.",
        ],
        actions: [
          "Fill every field: services, attributes, hours, and real photos",
          "Publish a post every week and answer customer questions",
          "Reply to every review, good or bad",
        ],
      },
    ],
    closing: [
      "Most businesses that “disappear” from Maps are failing one of the first five checks. Work the list in order, fix what you find, and give Google a few days after each fix before judging the result — changes are not instant.",
      "If you have worked through all nine checks and the business still does not appear, the problem is usually in the details — a small mismatch, an old duplicate, or a category choice that looks right but is not. That is exactly what a proper profile audit is for.",
    ],
  },
];
