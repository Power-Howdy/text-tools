const SENTENCE_END = /([.!?]+)/g;
const WORD_REGEX = /\b[\w'-]+\b/g;

export type SentenceBand =
  | "impact"      // 1 word
  | "staccato"    // 2-6
  | "standard"    // 7-15
  | "complex"     // 16-25
  | "long"        // 26-39
  | "verylong";   // 40+

export type SentenceWithBand = {
  text: string;
  wordCount: number;
  band: SentenceBand;
};

function getBand(wordCount: number): SentenceBand {
  if (wordCount <= 1) return "impact";
  if (wordCount <= 6) return "staccato";
  if (wordCount <= 15) return "standard";
  if (wordCount <= 25) return "complex";
  if (wordCount <= 39) return "long";
  return "verylong";
}

export function getSentencesWithBands(text: string): SentenceWithBand[] {
  if (!text.trim()) return [];

  const parts = text.split(SENTENCE_END);
  const result: SentenceWithBand[] = [];
  let current = "";

  for (const part of parts) {
    if (/^[.!?]+$/.test(part)) {
      current += part;
      const words = current.match(WORD_REGEX) ?? [];
      const wordCount = words.length;
      if (wordCount > 0) {
        result.push({
          text: current.trim(),
          wordCount,
          band: getBand(wordCount),
        });
      }
      current = "";
    } else {
      current += part;
    }
  }
  if (current.trim()) {
    const words = current.match(WORD_REGEX) ?? [];
    const wordCount = words.length;
    if (wordCount > 0) {
      result.push({
        text: current.trim(),
        wordCount,
        band: getBand(wordCount),
      });
    }
  }
  return result;
}

export function getFlowScore(sentences: SentenceWithBand[]): number {
  if (sentences.length < 2) return 100;
  const bands = sentences.map((s) => s.band);
  const unique = new Set(bands);
  const variety = unique.size / 6;
  const ideal = 4;
  const bandCounts: Record<SentenceBand, number> = {
    impact: 0,
    staccato: 0,
    standard: 0,
    complex: 0,
    long: 0,
    verylong: 0,
  };
  for (const b of bands) bandCounts[b]++;
  const standardPct = bandCounts.standard / sentences.length;
  const score = Math.round(
    (variety * 30 + Math.min(standardPct * 100, 50) + Math.min(unique.size * 15, 30))
  );
  return Math.min(100, Math.max(0, score));
}

export const BAND_COLORS: Record<SentenceBand, string> = {
  impact: "bg-emerald-200 dark:bg-emerald-900/50",
  staccato: "bg-green-200 dark:bg-green-900/50",
  standard: "bg-lime-200 dark:bg-lime-900/50",
  complex: "bg-amber-200 dark:bg-amber-900/50",
  long: "bg-orange-200 dark:bg-orange-900/50",
  verylong: "bg-red-200 dark:bg-red-900/50",
};
