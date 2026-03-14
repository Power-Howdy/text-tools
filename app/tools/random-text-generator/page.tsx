import type { Metadata } from "next";
import { RandomTextClient } from "./RandomTextClient";

export const metadata: Metadata = {
  title: "Random Text Generator - TextTools",
  description:
    "Generate random strings with custom length and charset. Alphanumeric, hex, custom.",
};

export default function RandomTextPage() {
  return <RandomTextClient />;
}
