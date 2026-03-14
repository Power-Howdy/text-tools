"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { WordStats } from "@/lib/word-stats";

export function DetailsPanel({ stats }: { stats: WordStats }) {
  const [open, setOpen] = useState(false);

  const previewItems = [
    { label: "Unique words", value: stats.words > 0 ? stats.uniqueWords : "—" },
    {
      label: "Longest sentence",
      value: stats.words > 0 ? stats.longestSentence : "—",
    },
    {
      label: "Shortest sentence",
      value: stats.words > 0 ? stats.shortestSentence : "—",
    },
  ];

  const items = [
    { label: "Unique Words", value: stats.uniqueWords },
    { label: "Longest Sentence (words)", value: stats.longestSentence },
    { label: "Shortest Sentence (words)", value: stats.shortestSentence },
    { label: "Avg Sentence (words)", value: stats.avgSentenceWords },
    { label: "Avg Sentence (chars)", value: stats.avgSentenceChars },
    { label: "Avg Word Length", value: stats.avgWordLength },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Pages", value: stats.pages },
    { label: "Syllables", value: stats.syllables },
    {
      label: "Reading Level",
      value: stats.readingLevel != null ? `Grade ${stats.readingLevel}` : "N/A",
    },
    {
      label: "Reading Time",
      value:
        stats.words > 0
          ? `${Math.ceil(stats.readingTimeMinutes)} min`
          : "N/A",
    },
    {
      label: "Speaking Time",
      value:
        stats.words > 0
          ? `${Math.ceil(stats.speakingTimeMinutes)} min`
          : "N/A",
    },
  ];

  return (
    <div className="border border-warm-200 dark:border-warm-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 flex items-center justify-between bg-warm-100 dark:bg-warm-800/50 hover:bg-warm-200 dark:hover:bg-warm-700/50 transition-colors text-left"
      >
        <span className="font-medium text-warm-900 dark:text-warm-50">
          Details
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          ▼
        </motion.span>
      </button>
      <div className={`dark:bg-warm-900/30 ${open ? "bg-white" : ""}`}>
        {!open ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4">
            {previewItems.map((p) => (
              <div key={p.label} className="flex flex-col text-sm">
                <span className="text-warm-500 dark:text-warm-400">
                  {p.label}
                </span>
                <span className="font-medium text-warm-900 dark:text-warm-50">
                  {p.value}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col text-sm">
                <span className="text-warm-500 dark:text-warm-400">
                  {item.label}
                </span>
                <span className="font-medium text-warm-900 dark:text-warm-50">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
