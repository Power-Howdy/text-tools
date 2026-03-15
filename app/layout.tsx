import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "TextTools - Free Online Text Utilities for Writers & Marketers",
  description:
    "Word counter, case converter, text sorter, remove duplicates, slug generator, and more. Free text tools with no sign-in required. By Severus Snape.",
  keywords: [
    "text tools",
    "word counter",
    "case converter",
    "free online tools",
    "writer tools",
    "marketing tools",
    "text utilities",
    "slug generator",
    "lorem ipsum",
    "remove duplicate lines",
    "text sorter",
    "Severus Snape",
    "Full Stack Developer",
    "Javascript Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
  ],
  authors: [{ name: "Severus Snape" }],
  openGraph: {
    title: "TextTools - Free Online Text Utilities",
    description:
      "Word counter, case converter, text sorter, and more. No sign-in required.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme');
                var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (t === 'dark' || (!t && d)) document.documentElement.classList.add('dark');
                else document.documentElement.classList.remove('dark');
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
