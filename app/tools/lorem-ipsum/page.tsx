import type { Metadata } from "next";
import { LoremIpsumClient } from "./LoremIpsumClient";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator - TextTools",
  description:
    "Generate placeholder text. Paragraphs, sentences, or words. Classic lorem ipsum.",
  keywords: [
    "lorem ipsum",
    "placeholder text",
    "dummy text",
    "fill text",
    "lorem ipsum generator",
    "Full Stack Developer",
    "Javascript Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
  ],
};

export default function LoremIpsumPage() {
  return <LoremIpsumClient />;
}
