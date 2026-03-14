"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/ui/Button";

type CaseOption = "lowercase" | "uppercase" | "title" | "sentence" | "alternating";

function alternatingCase(text: string): string {
  let result = "";
  let upper = true;
  for (const c of text) {
    if (/[a-zA-Z]/.test(c)) {
      result += upper ? c.toUpperCase() : c.toLowerCase();
      upper = !upper;
    } else {
      result += c;
    }
  }
  return result;
}

function applyCase(text: string, option: CaseOption): string {
  if (!text) return text;
  switch (option) {
    case "lowercase":
      return text.toLowerCase();
    case "uppercase":
      return text.toUpperCase();
    case "title":
      return text.replace(/\b\w/g, (c) => c.toUpperCase());
    case "sentence":
      return text
        .toLowerCase()
        .replace(/(^\w|\.\s+\w|\?\s+\w|!\s+\w)/g, (m) =>
          m.slice(0, -1) + m.slice(-1).toUpperCase()
        );
    case "alternating":
      return alternatingCase(text);
    default:
      return text;
  }
}

export function CaseConverterClient() {
  const [input, setInput] = useState("");

  const convert = (option: CaseOption) => {
    if (!input.trim()) {
      toast.warning("Please enter text first");
      return;
    }
    setInput(applyCase(input, option));
    toast.success("Case converted");
  };

  const copy = async () => {
    if (!input.trim()) {
      toast.warning("Nothing to copy");
      return;
    }
    await navigator.clipboard.writeText(input);
    toast.success("Copied to clipboard");
  };

  return (
    <ToolLayout
      title="Case Converter"
      description="Convert text to different cases. Works on selected text or full content."
    >
      <div className="space-y-6">
        <div>
          <TextArea
            value={input}
            onChange={setInput}
            placeholder="Type or paste your text here..."
            rows={8}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="secondary" onClick={() => convert("lowercase")}>
            lowercase
          </Button>
          <Button size="sm" variant="secondary" onClick={() => convert("uppercase")}>
            UPPERCASE
          </Button>
          <Button size="sm" variant="secondary" onClick={() => convert("title")}>
            Title Case
          </Button>
          <Button size="sm" variant="secondary" onClick={() => convert("sentence")}>
            Sentence case
          </Button>
          <Button size="sm" variant="secondary" onClick={() => convert("alternating")}>
            aLtErNaTiNg
          </Button>
          <Button size="sm" variant="primary" onClick={copy}>
            Copy
          </Button>
        </div>
      </div>
    </ToolLayout>
  );
}
