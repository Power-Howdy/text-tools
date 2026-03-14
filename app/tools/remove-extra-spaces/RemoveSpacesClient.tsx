"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/ui/Button";

export function RemoveSpacesClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [singleLine, setSingleLine] = useState(false);

  const process = () => {
    if (!input.trim()) {
      toast.warning("Please enter text to clean");
      return;
    }
    let result = input
      .trim()
      .replace(/\s+/g, " ")
      .replace(/\n{3,}/g, "\n\n");
    if (singleLine) {
      result = result.replace(/\n/g, " ");
    }
    setOutput(result);
    toast.success("Text cleaned");
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
      title="Remove Extra Spaces"
      description="Trim and collapse multiple spaces and newlines. Normalize whitespace."
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-2">
            Input
          </label>
          <TextArea
            value={input}
            onChange={setInput}
            placeholder="Paste text with extra   spaces   and


multiple newlines..."
            rows={8}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={singleLine}
              onChange={(e) => setSingleLine(e.target.checked)}
              className="rounded border-warm-300"
            />
            Single line (remove all newlines)
          </label>
          <Button onClick={process}>Clean</Button>
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
