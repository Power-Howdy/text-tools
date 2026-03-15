import type { Metadata } from "next";
import { ToolCard } from "@/components/ToolCard";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Free Online Text Tools for Writers, Marketers & Students",
  description:
    "Free text utilities: word counter, case converter, text sorter, remove duplicates, slug generator, lorem ipsum and more. No sign-in. All tools run in your browser. By a Full Stack Developer.",
  keywords: [
    "free text tools",
    "online word counter",
    "case converter",
    "text sorter",
    "writer tools",
    "marketing text tools",
    "student tools",
    "no sign up",
    "Full Stack Developer",
    "Javascript Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
  ],
};

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-900 dark:text-warm-50 mb-4 tracking-tight">
          Free Online Text Tools
        </h1>
        <p className="text-xl text-warm-600 dark:text-warm-400 max-w-2xl mx-auto">
          For writers, marketers, and students. No sign-in required.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TOOLS.map((tool, i) => (
          <ToolCard key={tool.slug} tool={tool} index={i} />
        ))}
      </section>
    </div>
  );
}
