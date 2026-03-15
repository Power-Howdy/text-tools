import type { Metadata } from "next";
import { RandomTextClient } from "./RandomTextClient";

export const metadata: Metadata = {
  title: "Random Text Generator - TextTools",
  description:
    "Generate random strings with custom length and charset. Alphanumeric, hex, custom.",
  keywords: [
    "random text generator",
    "random string",
    "random password",
    "alphanumeric generator",
    "hex generator",
    "Full Stack Developer",
    "Javascript Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
  ],
};

export default function RandomTextPage() {
  return <RandomTextClient />;
}
