import type { Metadata } from "next";
import { RemoveDuplicatesClient } from "./RemoveDuplicatesClient";

export const metadata: Metadata = {
  title: "Remove Duplicate Lines - TextTools",
  description:
    "Remove duplicate lines from text. Paste a list and get unique lines. Preserves order.",
  keywords: [
    "remove duplicates",
    "unique lines",
    "deduplicate text",
    "remove duplicate lines",
    "text deduplication",
    "Full Stack Developer",
    "Javascript Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
  ],
};

export default function RemoveDuplicatesPage() {
  return <RemoveDuplicatesClient />;
}
