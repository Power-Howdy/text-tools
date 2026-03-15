import type { Metadata } from "next";
import { SlugGeneratorClient } from "./SlugGeneratorClient";

export const metadata: Metadata = {
  title: "Slug Generator - TextTools",
  description:
    "Generate URL-friendly slugs from titles. Lowercase, hyphens, remove special chars.",
  keywords: [
    "slug generator",
    "URL slug",
    "URL-friendly",
    "permalink",
    "slug from title",
    "Full Stack Developer",
    "Javascript Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
  ],
};

export default function SlugGeneratorPage() {
  return <SlugGeneratorClient />;
}
