import type { Metadata } from "next";
import { WordCounterClient } from "./WordCounterClient";

export const metadata: Metadata = {
  title: "Word Counter - TextTools",
  description:
    "Free word counter. Count words, characters, sentences. Keyword density, reading time, flow score. No sign-in required.",
  keywords: [
    "word counter",
    "character count",
    "keyword density",
    "reading time",
    "sentence count",
    "free word counter",
    "Full Stack Developer",
    "Javascript Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
  ],
};

export default function WordCounterPage() {
  return <WordCounterClient />;
}
