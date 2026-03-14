"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/ui/Button";

type SortOption = "a-z" | "z-a" | "length" | "length-desc" | "numeric" | "random";

export function TextSorterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("a-z");

  const process = () => {
    if (!input.trim()) {
      toast.warning("Please enter lines to sort");
      return;
    }
    const lines = input.split(/\n/).filter((l) => l.length > 0);
    const sorted = [...lines].sort((a, b) => {
      switch (sortBy) {
        case "a-z":
          return a.localeCompare(b);
        case "z-a":
          return b.localeCompare(a);
        case "length":
          return a.length - b.length;
        case "length-desc":
          return b.length - a.length;
        case "numeric": {
          const na = parseFloat(a.replace(/[^0-9.-]/g, "")) || 0;
          const nb = parseFloat(b.replace(/[^0-9.-]/g, "")) || 0;
          return na - nb;
        }
        case "random":
          return Math.random() - 0.5;
        default:
          return 0;
      }
    });
    setOutput(sorted.join("\n"));
    toast.success("Lines sorted");
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
      title="Text Sorter"
      description="Sort lines alphabetically, by length, numerically, or randomly."
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-2">
            Input (one item per line)
          </label>
          <TextArea
            value={input}
            onChange={setInput}
            placeholder="zebra&#10;apple&#10;banana&#10;cherry"
            rows={8}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="rounded-lg border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 px-3 py-2 text-sm"
          >
            <option value="a-z">A → Z</option>
            <option value="z-a">Z → A</option>
            <option value="length">Shortest first</option>
            <option value="length-desc">Longest first</option>
            <option value="numeric">Numeric</option>
            <option value="random">Random</option>
          </select>
          <Button onClick={process}>Sort</Button>
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
