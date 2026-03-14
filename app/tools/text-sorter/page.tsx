import type { Metadata } from "next";
import { TextSorterClient } from "./TextSorterClient";

export const metadata: Metadata = {
  title: "Text Sorter - TextTools",
  description:
    "Sort lines alphabetically A-Z, Z-A, by length, numerically, or randomly.",
};

export default function TextSorterPage() {
  return <TextSorterClient />;
}
