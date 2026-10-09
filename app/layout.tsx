import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  "Zamin Abbas is a Local SEO Expert in Multan, Pakistan helping businesses improve Google Maps visibility, Google Business Profile rankings, local search traffic and customer leads.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Local SEO Expert in Multan, Pakistan | Zamin Abbas",
    template: "%s | Zamin Abbas",
  },
  description: DESCRIPTION,
  keywords: [
    "Zamin Abbas",
    "local SEO expert Multan",
    "Google Business Profile optimization",
    "GMB ranking Pakistan",
    "WordPress developer Multan",
    "social media marketing Pakistan",
    "SEO expert Pakistan",
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
    title: "Local SEO Expert in Multan, Pakistan | Zamin Abbas",
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zamin Abbas — Local SEO Expert in Multan, Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Expert in Multan, Pakistan | Zamin Abbas",
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
    <html
      lang="en"
      className={`${display.variable} ${inter.variable} ${mono.variable} h-full antialiased`}
    >
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
