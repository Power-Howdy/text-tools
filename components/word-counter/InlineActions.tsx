"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";

type CaseOption = "lowercase" | "uppercase" | "title" | "sentence";

function applyCase(text: string, option: CaseOption): string {
  if (!text) return text;
  switch (option) {
    case "lowercase":
      return text.toLowerCase();
    case "uppercase":
      return text.toUpperCase();
    case "title":
      return text.replace(
        /\b\w/g,
        (c) => c.toUpperCase()
      );
    case "sentence":
      return text
        .toLowerCase()
        .replace(/(^\w|\.\s+\w|\?\s+\w|!\s+\w)/g, (m) =>
          m.slice(0, -1) + m.slice(-1).toUpperCase()
        );
    default:
      return text;
  }
}

function cleanText(text: string): string {
  return text
    .replace(/\s+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function InlineActions({
  text,
  onTextChange,
  onCopy,
}: {
  text: string;
  onTextChange: (t: string) => void;
  onCopy: () => void;
}) {
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [showFindReplace, setShowFindReplace] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCase = (option: CaseOption) => {
    if (!text.trim()) {
      toast.warning("Please enter text first");
      return;
    }
    onTextChange(applyCase(text, option));
    toast.success("Case converted");
  };

  const handleClean = () => {
    if (!text.trim()) {
      toast.warning("Please enter text first");
      return;
    }
    onTextChange(cleanText(text));
    toast.success("Text cleaned");
  };

  const handleFindReplace = () => {
    if (!text.trim()) {
      toast.warning("Please enter text first");
      return;
    }
    if (!find) {
      toast.warning("Please enter text to find");
      return;
    }
    const regex = new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    onTextChange(text.replace(regex, replace));
    toast.success("Find & replace applied");
  };

  const handleDownload = () => {
    if (!text.trim()) {
      toast.warning("Please enter text first");
      return;
    }
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "text.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded as text.txt");
  };

  const handleCopy = async () => {
    if (!text.trim()) {
      toast.warning("Nothing to copy");
      return;
    }
    await onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="flex flex-wrap gap-2">
      <div className="flex flex-wrap gap-1">
        <Button size="sm" variant="secondary" onClick={() => handleCase("lowercase")}>
          lowercase
        </Button>
        <Button size="sm" variant="secondary" onClick={() => handleCase("uppercase")}>
          UPPERCASE
        </Button>
        <Button size="sm" variant="secondary" onClick={() => handleCase("title")}>
          Title Case
        </Button>
        <Button size="sm" variant="secondary" onClick={() => handleCase("sentence")}>
          Sentence case
        </Button>
      </div>
      <Button size="sm" variant="secondary" onClick={handleClean}>
        Clean text
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => setShowFindReplace(!showFindReplace)}
      >
        Find & Replace
      </Button>
      <Button size="sm" variant="secondary" onClick={handleDownload}>
        Download .txt
      </Button>
      <Button size="sm" variant="primary" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy"}
      </Button>

      {showFindReplace && (
        <div className="w-full flex flex-col sm:flex-row gap-2 p-3 rounded-lg bg-warm-100 dark:bg-warm-800/50 border border-warm-200 dark:border-warm-700">
          <input
            type="text"
            placeholder="Find"
            value={find}
            onChange={(e) => setFind(e.target.value)}
            className="flex-1 px-3 py-2 rounded border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 text-sm"
          />
          <input
            type="text"
            placeholder="Replace with"
            value={replace}
            onChange={(e) => setReplace(e.target.value)}
            className="flex-1 px-3 py-2 rounded border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 text-sm"
          />
          <Button size="sm" onClick={handleFindReplace}>
            Replace
          </Button>
        </div>
      )}
    </div>
  );
}
