import type { Metadata } from "next";
import { WordCounterClient } from "./WordCounterClient";

export const metadata: Metadata = {
  title: "Word Counter - TextTools",
  description:
    "Free word counter. Count words, characters, sentences. Keyword density, reading time, flow score. No sign-in required.",
};

export default function WordCounterPage() {
  return <WordCounterClient />;
}
