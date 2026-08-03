import type { Metadata } from "next";
import { fontStackSansNotch, fontStackSansText } from "../font-library";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://revonsolutions.com"),
  title: "Customer Acquisition System by REVON",
  description: "Not enough people buying from you? We fix that in 4 weeks with a 7-figure strategy built just for you.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${fontStackSansNotch.variable} ${fontStackSansText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-background overflow-x-hidden font-body-md">{children}</body>
    </html>
  );
}
