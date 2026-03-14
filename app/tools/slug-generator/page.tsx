import type { Metadata } from "next";
import { SlugGeneratorClient } from "./SlugGeneratorClient";

export const metadata: Metadata = {
  title: "Slug Generator - TextTools",
  description:
    "Generate URL-friendly slugs from titles. Lowercase, hyphens, remove special chars.",
};

export default function SlugGeneratorPage() {
  return <SlugGeneratorClient />;
}
