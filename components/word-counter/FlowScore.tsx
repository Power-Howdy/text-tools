"use client";

import { motion } from "framer-motion";
import {
  getFlowScore,
  getSentencesWithBands,
  BAND_COLORS,
  type SentenceBand,
} from "@/lib/flow-score";

const BAND_LABELS: Record<SentenceBand, string> = {
  impact: "1 word",
  staccato: "2–6 words",
  standard: "7–15 words",
  complex: "16–25 words",
  long: "26–39 words",
  verylong: "40+ words",
};

export function FlowScore({ text }: { text: string }) {
  const sentences = getSentencesWithBands(text);
  const score = getFlowScore(sentences);

  return (
    <div className="border border-warm-200 dark:border-warm-700 rounded-xl p-4 bg-white dark:bg-warm-900/30">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-warm-900 dark:text-warm-50">
          Flow Score
        </h3>
        <span
          className={`text-lg font-bold ${
            score >= 70 ? "text-green-600" : score >= 40 ? "text-amber-600" : "text-red-600"
          }`}
        >
          {score}%
        </span>
      </div>
      <p className="text-xs text-warm-500 dark:text-warm-400 mb-4">
        Sentence length variety improves readability. Use a mix of short,
        medium, and long sentences.
      </p>
      <div className="flex flex-wrap gap-2">
        {(Object.keys(BAND_LABELS) as SentenceBand[]).map((band) => (
          <span
            key={band}
            className={`px-2 py-1 rounded text-xs ${BAND_COLORS[band]}`}
          >
            {BAND_LABELS[band]}
          </span>
        ))}
      </div>
    </div>
  );
}
