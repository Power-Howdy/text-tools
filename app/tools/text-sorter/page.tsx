import type { Metadata } from "next";
import { TextSorterClient } from "./TextSorterClient";

export const metadata: Metadata = {
  title: "Text Sorter - TextTools",
  description:
    "Sort lines alphabetically A-Z, Z-A, by length, numerically, or randomly.",
  keywords: [
    "text sorter",
    "sort lines",
    "alphabetical sort",
    "sort by length",
    "randomize lines",
    "Full Stack Developer",
    "Javascript Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
  ],
};

export default function TextSorterPage() {
  return <TextSorterClient />;
}
