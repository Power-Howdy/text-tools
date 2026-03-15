import type { Metadata } from "next";
import { CaseConverterClient } from "./CaseConverterClient";

export const metadata: Metadata = {
  title: "Case Converter - TextTools",
  description:
    "Convert text to lowercase, UPPERCASE, Title Case, Sentence case, or aLtErNaTiNg.",
  keywords: [
    "case converter",
    "lowercase",
    "uppercase",
    "title case",
    "sentence case",
    "text case",
    "Full Stack Developer",
    "Javascript Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
  ],
};

export default function CaseConverterPage() {
  return <CaseConverterClient />;
}
