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
  stepsHeading?: string;
  stepLabel?: string;
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
  {
    slug: "google-business-profile-suspended-appeal",
    title: "Google Business Profile Suspended? The Exact Appeal Process",
    description:
      "Your Business Profile is suspended and gone from Maps? Do not open a second profile. Find the violation, fix it first, gather your proof, then appeal — in that order.",
    date: "2026-10-28",
    dateDisplay: "October 28, 2026",
    readTime: "8 min read",
    stepsHeading: "The 7 steps",
    stepLabel: "Step",
    intro: [
      "A suspended profile does not show on Google Maps at all — and the fix is not a new profile. Opening a second listing is the most common mistake, and it usually makes the original problem worse, because Google then has two profiles for one business to flag.",
      "The order matters: find out what broke the rules, fix it, gather proof that the business is real and compliant, and only then appeal. Appealing before fixing wastes the appeal — and a denied appeal with nothing changed rarely gets a different answer the second time.",
    ],
    checks: [
      {
        title: "First, confirm it is actually a suspension",
        paragraphs: [
          "Open the Business Profile manager and look for a suspension notice. A profile can also disappear for other reasons — it may be unverified, under review after a major edit, or a duplicate may be splitting its signals (article 1 covers those checks in order). Do not start an appeal for a profile that is only waiting on verification or review.",
        ],
        actions: [
          "Check the manager for a suspension notice and read exactly what it says",
          "Rule out verification, review, and duplicate problems first",
          "Screenshot the notice for your own records before changing anything",
        ],
      },
      {
        title: "Do not do these three things",
        paragraphs: [],
        actions: [
          "Do not create a second profile. Duplicates get flagged and can complicate reinstatement of the original.",
          "Do not keep editing the profile while it is suspended. Repeated name, address, or category changes look like attempts to dodge the suspension.",
          "Do not appeal with nothing fixed. An appeal that says \"please restore it\" without a corrected profile and evidence has little for Google to approve.",
        ],
      },
      {
        title: "Find the violation — the usual suspects",
        paragraphs: [
          "Work through these before writing anything to Google:",
          "Fix every violation you find. If you are unsure about one item, fix the clear ones first and be honest about the rest in the appeal — do not argue that a rule does not apply.",
        ],
        actions: [
          "Business name: keywords stuffed into the name (for example, adding services or city names that are not part of the real business name). The name must be the real-world name customers see on the shopfront.",
          "Address: a virtual office, a co-working address where the business does not operate, or a home address shown for a business customers do not visit. Service-area businesses should hide the address and list only areas they genuinely serve.",
          "Category: a primary category that does not describe what the business actually is.",
          "Website or phone mismatch: a website or number on the profile that does not belong to the business, or contact details that do not match the website.",
          "Multiple profiles: an old listing from a previous address or name still live alongside the current one.",
          "Prohibited or misleading content: photos, posts, or descriptions that misrepresent the business.",
        ],
      },
      {
        title: "Gather proof before you appeal",
        paragraphs: [
          "Google decides on evidence, not on how strongly the appeal is worded. Collect, as applicable:",
          "Keep the name, address, and phone number identical across the profile, the website, and the evidence. A mismatch in the proof itself undermines the appeal.",
        ],
        actions: [
          "Proof the business exists at its stated address: a utility bill, lease, or business registration showing the name and address",
          "Photos of the real premises: shopfront with signage, interior, and the work being done — real photos, not stock images",
          "Proof of the real business name: signage, invoices, or registration matching the profile name",
          "The business website, showing the same name, address, and phone number as the profile",
        ],
      },
      {
        title: "Submit the appeal, in this order",
        paragraphs: [],
        actions: [
          "Fix the violations on the profile (or, where the manager blocks edits during suspension, be ready to describe exactly what was wrong and what has changed)",
          "Open the reinstatement/appeal flow from the Business Profile manager or Google Business Profile support, as shown for your account — the exact entry point varies, so follow the one Google presents for the suspended profile",
          "State plainly: what the violation was, what you changed, and what evidence you have. Keep it short and factual",
          "Attach the evidence from step 4",
          "Submit once, then wait. Submitting the same appeal repeatedly does not speed up the review and can slow it down",
        ],
      },
      {
        title: "If the appeal is denied",
        paragraphs: [
          "Read the denial carefully — it usually points at what is still wrong. Fix that specific issue, gather any extra proof it implies, and only then appeal again with the new information. If nothing has changed since the last appeal, a repeat appeal should not be expected to change the outcome.",
          "Timelines vary and Google does not publish a fixed reinstatement time. Judge the result only after Google replies; meanwhile, keep the website, social pages, and other directories accurate, so customers can still find the business while Maps is unavailable.",
        ],
        actions: [],
      },
      {
        title: "Staying reinstated",
        paragraphs: [
          "Once restored, keep the profile boring and consistent: one profile, the real name, the real address or honest service area, accurate categories, and no keyword additions to the name. Every major edit after reinstatement should be made once, deliberately — not in a burst.",
        ],
        actions: [],
      },
    ],
    closing: [
      "Suspension feels sudden, but it is almost always traceable to one of the violations in section 3. Fix first, prove it, appeal once with evidence — and do not let impatience create a second problem in the form of a duplicate profile.",
      "If you have worked through every section and the profile is still suspended, the remaining problem is usually in the details — a small mismatch between the profile, the website, and the proof. That is exactly what a proper profile audit checks.",
    ],
  },
];
