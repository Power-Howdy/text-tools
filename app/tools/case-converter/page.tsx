import type { Metadata } from "next";
import { CaseConverterClient } from "./CaseConverterClient";

export const metadata: Metadata = {
  title: "Case Converter - TextTools",
  description:
    "Convert text to lowercase, UPPERCASE, Title Case, Sentence case, or aLtErNaTiNg.",
};

export default function CaseConverterPage() {
  return <CaseConverterClient />;
}
