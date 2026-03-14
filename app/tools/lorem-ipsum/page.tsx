import type { Metadata } from "next";
import { LoremIpsumClient } from "./LoremIpsumClient";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator - TextTools",
  description:
    "Generate placeholder text. Paragraphs, sentences, or words. Classic lorem ipsum.",
};

export default function LoremIpsumPage() {
  return <LoremIpsumClient />;
}
