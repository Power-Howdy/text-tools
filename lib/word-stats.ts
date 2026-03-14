export type WordStats = {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  lines: number;
  uniqueWords: number;
  avgWordLength: number;
  avgSentenceWords: number;
  avgSentenceChars: number;
  longestSentence: number;
  shortestSentence: number;
  pages: number;
  syllables: number;
  readingLevel: number | null;
  readingTimeMinutes: number;
  speakingTimeMinutes: number;
};

const SENTENCE_END = /[.!?]+/;
const WORD_REGEX = /\b[\w'-]+\b/g;
const SYLLABLE_REGEX = /[aeiouy]+/gi;

function countSyllables(word: string): number {
  if (word.length <= 3) return 1;
  const lower = word.toLowerCase();
  const matches = lower.match(SYLLABLE_REGEX);
  if (!matches) return 1;
  let count = matches.length;
  if (lower.endsWith("e") && !lower.endsWith("le")) count--;
  if (count < 1) count = 1;
  return count;
}

export function getWordStats(
  text: string,
  readingWpm = 200,
  speakingWpm = 150
): WordStats {
  const trimmed = text.trim();
  if (!trimmed) {
    return {
      words: 0,
      characters: 0,
      charactersNoSpaces: 0,
      sentences: 0,
      paragraphs: 0,
      lines: 0,
      uniqueWords: 0,
      avgWordLength: 0,
      avgSentenceWords: 0,
      avgSentenceChars: 0,
      longestSentence: 0,
      shortestSentence: 0,
      pages: 0,
      syllables: 0,
      readingLevel: null,
      readingTimeMinutes: 0,
      speakingTimeMinutes: 0,
    };
  }

  const chars = trimmed.length;
  const charsNoSpaces = trimmed.replace(/\s/g, "").length;
  const words = trimmed.match(WORD_REGEX) ?? [];
  const wordCount = words.length;
  const uniqueWords = new Set(words.map((w) => w.toLowerCase())).size;
  const paragraphs = trimmed
    .split(/\n\s*\n/)
    .filter((p) => p.trim().length > 0).length;
  const lines = trimmed.split(/\n/).length;

  const sentenceChunks = trimmed.split(SENTENCE_END).filter((s) => s.trim());
  const sentences = sentenceChunks.length;
  const sentenceWordCounts = sentenceChunks.map((s) => {
    const m = s.match(WORD_REGEX);
    return m ? m.length : 0;
  });
  const longestSentence =
    sentenceWordCounts.length > 0 ? Math.max(...sentenceWordCounts) : 0;
  const shortestSentence =
    sentenceWordCounts.length > 0
      ? Math.min(...sentenceWordCounts.filter((n) => n > 0), 9999) || 0
      : 0;
  const avgSentenceWords =
    sentences > 0 ? wordCount / sentences : 0;
  const sentenceChars = sentenceChunks.map((s) => s.length);
  const avgSentenceChars =
    sentences > 0
      ? sentenceChars.reduce((a, b) => a + b, 0) / sentences
      : 0;
  const avgWordLength =
    wordCount > 0
      ? words.reduce((acc, w) => acc + w.length, 0) / wordCount
      : 0;

  const syllables = words.reduce((acc, w) => acc + countSyllables(w), 0);

  let readingLevel: number | null = null;
  if (sentences > 0 && wordCount > 0) {
    readingLevel =
      0.39 * (wordCount / sentences) +
      11.8 * (syllables / wordCount) -
      15.59;
    readingLevel = Math.round(readingLevel * 10) / 10;
  }

  const pages = Math.ceil(wordCount / 250) || 0;
  const readingTimeMinutes = wordCount / readingWpm;
  const speakingTimeMinutes = wordCount / speakingWpm;

  return {
    words: wordCount,
    characters: chars,
    charactersNoSpaces: charsNoSpaces,
    sentences,
    paragraphs,
    lines,
    uniqueWords,
    avgWordLength: Math.round(avgWordLength * 10) / 10,
    avgSentenceWords: Math.round(avgSentenceWords * 10) / 10,
    avgSentenceChars: Math.round(avgSentenceChars),
    longestSentence,
    shortestSentence: shortestSentence === 9999 ? 0 : shortestSentence,
    pages,
    syllables,
    readingLevel,
    readingTimeMinutes,
    speakingTimeMinutes,
  };
}

export type KeywordItem = { word: string; count: number; density: number };

export function getKeywordDensity(
  text: string,
  topN = 10,
  excludeCommon = true
): KeywordItem[] {
  const common = new Set(
    "the a an and or but in on at to for of with by from as is was are were been be have has had do does did will would could should may might must shall can need".split(
      " "
    )
  );
  const words = (text.match(WORD_REGEX) ?? []).map((w) => w.toLowerCase());
  const total = words.length;
  if (total === 0) return [];

  const counts = new Map<string, number>();
  for (const w of words) {
    if (excludeCommon && common.has(w)) continue;
    counts.set(w, (counts.get(w) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([word, count]) => ({
      word,
      count,
      density: Math.round((count / total) * 10000) / 100,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, topN);
}
