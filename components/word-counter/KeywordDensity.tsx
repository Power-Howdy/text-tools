"use client";

import { motion } from "framer-motion";
import type { KeywordItem } from "@/lib/word-stats";

export function KeywordDensity({ keywords }: { keywords: KeywordItem[] }) {
  const maxCount = keywords[0]?.count ?? 1;

  return (
    <div className="border border-warm-200 dark:border-warm-700 rounded-xl p-4 bg-white dark:bg-warm-900/30">
      <h3 className="font-medium text-warm-900 dark:text-warm-50 mb-4">
        Keyword Density
      </h3>
      {keywords.length === 0 ? (
        <p className="text-sm text-warm-500 dark:text-warm-400">
          No keywords yet. Type or paste text to see density.
        </p>
      ) : (
        <div className="space-y-3">
          {keywords.map((kw, i) => (
            <motion.div
              key={kw.word}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center justify-between gap-4 mb-1">
                <span className="text-sm font-mono text-warm-800 dark:text-warm-200">
                  {kw.word}
                </span>
                <span className="text-xs text-warm-500 dark:text-warm-400">
                  {kw.count} · {kw.density}%
                </span>
              </div>
              <div className="h-2 bg-warm-200 dark:bg-warm-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(kw.count / maxCount) * 100}%`,
                  }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
