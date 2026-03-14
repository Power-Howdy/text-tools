"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/ui/Button";

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function SlugGeneratorClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const process = () => {
    if (!input.trim()) {
      toast.warning("Please enter titles to convert");
      return;
    }
    const lines = input.split(/\n/).filter((l) => l.trim());
    const slugs = lines.map(toSlug);
    setOutput(slugs.join("\n"));
    toast.success("Slugs generated");
  };

  const copyOutput = async () => {
    if (!output.trim()) {
      toast.warning("Nothing to copy");
      return;
    }
    await navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard");
  };

  return (
    <ToolLayout
      title="Slug Generator"
      description="Generate URL-friendly slugs. Lowercase, hyphens, no accents."
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-2">
            Input (titles, one per line)
          </label>
          <TextArea
            value={input}
            onChange={setInput}
            placeholder="My Blog Post Title&#10;Another Article"
            rows={6}
          />
        </div>
        <Button onClick={process}>Generate Slugs</Button>
        {output && (
          <div>
            <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-2">
              Output
            </label>
            <TextArea
              value={output}
              onChange={setOutput}
              rows={6}
              className="font-mono"
            />
            <Button
              className="mt-2"
              size="sm"
              variant="secondary"
              onClick={copyOutput}
            >
              Copy
            </Button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
