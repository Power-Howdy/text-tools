import type { Metadata } from "next";
import { RemoveSpacesClient } from "./RemoveSpacesClient";

export const metadata: Metadata = {
  title: "Remove Extra Spaces - TextTools",
  description:
    "Remove extra spaces and normalize newlines. Trim and collapse whitespace.",
};

export default function RemoveSpacesPage() {
  return <RemoveSpacesClient />;
}
