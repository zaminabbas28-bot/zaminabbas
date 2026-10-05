import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  "Zamin Abbas is a top-ranked SEO specialist in Pakistan offering local SEO, technical SEO & web development. 500+ websites ranked. Hire for proven growth.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Zamin Abbas | Top Ranked SEO Specialist Pakistan",
    template: "%s | Zamin Abbas",
  },
  description: DESCRIPTION,
  keywords: [
    "Zamin Abbas",
    "SEO specialist Pakistan",
    "local SEO expert",
    "technical SEO services",
    "SEO specialist Multan",
    "web developer Pakistan",
    "social media marketing",
    "hire SEO expert",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Zamin Abbas | Top Ranked SEO Specialist Pakistan",
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zamin Abbas — Top Ranked SEO Specialist Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zamin Abbas | Top Ranked SEO Specialist Pakistan",
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ink-950 text-mist-100">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
