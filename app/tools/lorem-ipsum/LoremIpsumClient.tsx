"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/ui/Button";

const LOREM_WORDS = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat",
  "duis",
  "aute",
  "irure",
  "in",
  "reprehenderit",
  "voluptate",
  "velit",
  "esse",
  "cillum",
  "fugiat",
  "nulla",
  "pariatur",
  "excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident",
  "sunt",
  "culpa",
  "qui",
  "officia",
  "deserunt",
  "mollit",
  "anim",
  "id",
  "est",
  "laborum",
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function randomWord() {
  return LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
}

function sentence(words: number): string {
  const w: string[] = [];
  for (let i = 0; i < words; i++) {
    w.push(i === 0 ? capitalize(randomWord()) : randomWord());
  }
  return w.join(" ") + ".";
}

function paragraph(sentences: number): string {
  const s: string[] = [];
  for (let i = 0; i < sentences; i++) {
    s.push(sentence(5 + Math.floor(Math.random() * 10)));
  }
  return s.join(" ");
}

export function LoremIpsumClient() {
  const [mode, setMode] = useState<"paragraphs" | "sentences" | "words">(
    "paragraphs"
  );
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");

  const generate = () => {
    if (count < 1 || count > 100) {
      toast.warning("Count must be between 1 and 100");
      return;
    }
    if (mode === "words") {
      const w: string[] = [];
      for (let i = 0; i < count; i++) {
        w.push(i === 0 ? capitalize(randomWord()) : randomWord());
      }
      setOutput(w.join(" "));
      return;
    }
    if (mode === "sentences") {
      setOutput(
        Array(count)
          .fill(0)
          .map(() => sentence(5 + Math.floor(Math.random() * 10)))
          .join(" ")
      );
      return;
    }
    setOutput(
      Array(count)
        .fill(0)
        .map(() => paragraph(3 + Math.floor(Math.random() * 4)))
        .join("\n\n")
    );
    toast.success("Lorem ipsum generated");
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
      title="Lorem Ipsum Generator"
      description="Generate placeholder text for mockups and designs."
    >
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-1">
              Mode
            </label>
            <select
              value={mode}
              onChange={(e) =>
                setMode(e.target.value as "paragraphs" | "sentences" | "words")
              }
              className="w-full rounded-lg border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 px-4 py-2"
            >
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-1">
              Count
            </label>
            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) =>
                setCount(
                  Math.max(1, Math.min(100, parseInt(e.target.value) || 1))
                )
              }
              className="w-full rounded-lg border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 px-4 py-2"
            />
          </div>
        </div>
        <Button onClick={generate}>Generate</Button>
        {output && (
          <div>
            <label className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-2">
              Output
            </label>
            <TextArea value={output} onChange={setOutput} rows={12} />
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
