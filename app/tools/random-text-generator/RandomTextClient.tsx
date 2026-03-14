"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/ui/Button";

type Charset = "alphanumeric" | "alpha" | "numeric" | "hex" | "custom";

const CHARSETS: Record<Charset, string> = {
  alphanumeric: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  alpha: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  hex: "0123456789abcdef",
  custom: "",
};

function randomString(charset: string, length: number): string {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += charset[Math.floor(Math.random() * charset.length)];
  }
  return result;
}

export function RandomTextClient() {
  const [length, setLength] = useState(16);
  const [count, setCount] = useState(5);
  const [charset, setCharset] = useState<Charset>("alphanumeric");
  const [customCharset, setCustomCharset] = useState("");
  const [output, setOutput] = useState("");

  const generate = () => {
    if (charset === "custom" && !customCharset.trim()) {
      toast.warning("Please enter custom characters");
      return;
    }
    const cs =
      charset === "custom"
        ? customCharset || CHARSETS.alphanumeric
        : CHARSETS[charset];
    const results: string[] = [];
    for (let i = 0; i < count; i++) {
      results.push(randomString(cs, length));
    }
    setOutput(results.join("\n"));
    toast.success("Random text generated");
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
      title="Random Text Generator"
      description="Generate random strings. Choose length and charset."
    >
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-1">
              Length
            </label>
            <input
              type="number"
              min={1}
              max={1000}
              value={length}
              onChange={(e) => setLength(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full rounded-lg border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-1">
              Number of strings
            </label>
            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
              className="w-full rounded-lg border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 px-4 py-2"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-2">
            Charset
          </label>
          <select
            value={charset}
            onChange={(e) => setCharset(e.target.value as Charset)}
            className="rounded-lg border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 px-4 py-2 w-full"
          >
            <option value="alphanumeric">Alphanumeric (a-z, A-Z, 0-9)</option>
            <option value="alpha">Letters only</option>
            <option value="numeric">Numbers only</option>
            <option value="hex">Hexadecimal</option>
            <option value="custom">Custom</option>
          </select>
          {charset === "custom" && (
            <input
              type="text"
              placeholder="Enter characters (e.g. abc123!@#)"
              value={customCharset}
              onChange={(e) => setCustomCharset(e.target.value)}
              className="mt-2 w-full rounded-lg border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 px-4 py-2"
            />
          )}
        </div>
        <Button onClick={generate}>Generate</Button>
        {output && (
          <div>
            <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-2">
              Output
            </label>
            <TextArea
              value={output}
              onChange={setOutput}
              rows={Math.min(count + 2, 12)}
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
