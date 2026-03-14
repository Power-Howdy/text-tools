"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/ui/Button";

export function RemoveDuplicatesClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);

  const process = () => {
    if (!input.trim()) {
      toast.warning("Please enter text with lines");
      return;
    }
    const lines = input.split(/\n/);
    const seen = new Set<string>();
    const result: string[] = [];
    for (const line of lines) {
      const key = caseSensitive ? line : line.trim().toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        result.push(line);
      }
    }
    setOutput(result.join("\n"));
    toast.success("Duplicates removed");
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
      title="Remove Duplicate Lines"
      description="Remove duplicate lines from your text. Paste a list and get unique lines."
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-2">
            Input (one item per line)
          </label>
          <TextArea
            value={input}
            onChange={setInput}
            placeholder="apple&#10;banana&#10;apple&#10;cherry&#10;banana"
            rows={8}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
              className="rounded border-warm-300"
            />
            Case sensitive
          </label>
          <Button onClick={process}>Remove Duplicates</Button>
        </div>
        {output && (
          <div>
            <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-2">
              Output
            </label>
            <TextArea value={output} onChange={setOutput} rows={8} />
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
