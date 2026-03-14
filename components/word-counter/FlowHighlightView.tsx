"use client";

import { getSentencesWithBands, BAND_COLORS } from "@/lib/flow-score";

export function FlowHighlightView({ text }: { text: string }) {
  const sentences = getSentencesWithBands(text);
  if (sentences.length === 0) return null;

  return (
    <div className="rounded-lg border border-warm-200 dark:border-warm-700 p-4 bg-warm-50 dark:bg-warm-900/50">
      <p className="text-xs text-warm-500 dark:text-warm-400 mb-2">
        Sentence flow (colors show length variety)
      </p>
      <div className="text-sm leading-relaxed text-warm-900 dark:text-warm-100">
        {sentences.map((s, i) => (
          <span
            key={i}
            className={`px-0.5 rounded ${BAND_COLORS[s.band]}`}
          >
            {s.text}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
