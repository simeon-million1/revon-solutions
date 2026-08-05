import type { Metadata } from "next";
import { fontStackSansNotch, fontStackSansText } from "../font-library";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://revonsolutions.com"),
  title: "REVON SOLUTIONS | Customer Acquisition System",
  description: "Not enough people buying from you? We fix that in 4 weeks with a 7-figure strategy built just for you.",
  applicationName: "REVON SOLUTIONS",
  openGraph: {
    title: "REVON SOLUTIONS | Customer Acquisition System",
    description: "Not enough people buying from you? We fix that in 4 weeks with a 7-figure strategy built just for you.",
    url: "https://revonsolutions.com",
    siteName: "REVON SOLUTIONS",
    images: [
      {
        url: "/favicon-search.svg",
        width: 800,
        height: 800,
        alt: "REVON SOLUTIONS Search Logo",
      },
      {
        url: "/logo.svg",
        width: 800,
        height: 800,
        alt: "REVON SOLUTIONS Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-browser.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
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
        "name": "REVON SOLUTIONS",
        "alternateName": ["Revon Solutions", "REVON"],
        "publisher": {
          "@id": "https://revonsolutions.com/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://revonsolutions.com/#organization",
        "name": "REVON SOLUTIONS",
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
