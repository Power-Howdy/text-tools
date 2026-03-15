import type { Metadata } from "next";
import { RemoveSpacesClient } from "./RemoveSpacesClient";

export const metadata: Metadata = {
  title: "Remove Extra Spaces - TextTools",
  description:
    "Remove extra spaces and normalize newlines. Trim and collapse whitespace.",
  keywords: [
    "remove extra spaces",
    "trim spaces",
    "collapse whitespace",
    "normalize spaces",
    "clean text",
    "Full Stack Developer",
    "Javascript Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
  ],
};

export default function RemoveSpacesPage() {
  return <RemoveSpacesClient />;
}
