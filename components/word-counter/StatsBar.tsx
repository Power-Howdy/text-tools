"use client";

import { motion } from "framer-motion";
import type { WordStats } from "@/lib/word-stats";

type StatItem = { label: string; value: number | string };

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl sm:text-3xl font-bold text-warm-900 dark:text-warm-50">
        {value}
      </span>
      <span className="text-xs text-warm-500 dark:text-warm-400">{label}</span>
    </div>
  );
}

export function StatsBar({ stats }: { stats: WordStats }) {
  const items: StatItem[] = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.characters },
    { label: "Chars (no spaces)", value: stats.charactersNoSpaces },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Lines", value: stats.lines },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-4 rounded-xl bg-warm-100 dark:bg-warm-800/50 border border-warm-200 dark:border-warm-700"
    >
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.03 }}
        >
          <Stat label={item.label} value={item.value} />
        </motion.div>
      ))}
    </motion.div>
  );
}
