import type { Metadata } from "next";
import { fontStackSansNotch, fontStackSansText } from "../font-library";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://revonsolutions.com"),
  title: "Client Acquisition Agency | Revon Solutions",
  description: "We build your business a proven 7-figure acquisition system — guaranteed qualified leads, or we work for free.",
  applicationName: "Revon Solutions",
  alternates: {
    canonical: "https://revonsolutions.com",
  },
  openGraph: {
    title: "Revon Solutions: Predictable Client Acquisition in 8 Weeks",
    description: "We build your business a proven 7-figure acquisition system — guaranteed qualified leads, or we work for free.",
    url: "https://revonsolutions.com",
    siteName: "Revon Solutions",
    images: [
      {
        url: "/favicon-search.svg",
        width: 800,
        height: 800,
        alt: "Revon Solutions Search Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-browser.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-browser.svg",
    apple: [
      { url: "/favicon-search.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://revonsolutions.com/#website",
        "url": "https://revonsolutions.com/",
        "name": "Revon Solutions",
        "alternateName": ["Revon Solutions", "REVON"],
        "publisher": {
          "@id": "https://revonsolutions.com/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://revonsolutions.com/#organization",
        "name": "Revon Solutions",
        "url": "https://revonsolutions.com/",
        "logo": "https://revonsolutions.com/favicon-search.svg",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`dark ${fontStackSansNotch.variable} ${fontStackSansText.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background overflow-x-hidden font-body-md">
        {children}
      </body>
    </html>
  );
}
