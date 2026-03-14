import type { Metadata } from "next";
import { RemoveDuplicatesClient } from "./RemoveDuplicatesClient";

export const metadata: Metadata = {
  title: "Remove Duplicate Lines - TextTools",
  description:
    "Remove duplicate lines from text. Paste a list and get unique lines. Preserves order.",
};

export default function RemoveDuplicatesPage() {
  return <RemoveDuplicatesClient />;
}
