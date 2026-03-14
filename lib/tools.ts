export type Tool = {
  name: string;
  slug: string;
  description: string;
  icon: string;
};

export const TOOLS: Tool[] = [
  {
    name: "Word Counter",
    slug: "word-counter",
    description:
      "Count words, characters, sentences. Keyword density, reading time, flow score.",
    icon: "📊",
  },
  {
    name: "Remove Duplicate Lines",
    slug: "remove-duplicate-lines",
    description: "Remove duplicate lines from text while preserving order.",
    icon: "🔄",
  },
  {
    name: "Text Sorter",
    slug: "text-sorter",
    description: "Sort lines A-Z, Z-A, by length, or randomly.",
    icon: "↕️",
  },
  {
    name: "Case Converter",
    slug: "case-converter",
    description: "Convert to lowercase, UPPERCASE, Title Case, Sentence case.",
    icon: "🔤",
  },
  {
    name: "Remove Extra Spaces",
    slug: "remove-extra-spaces",
    description: "Trim and collapse multiple spaces and newlines.",
    icon: "✂️",
  },
  {
    name: "Slug Generator",
    slug: "slug-generator",
    description: "Generate URL-friendly slugs from titles.",
    icon: "🔗",
  },
  {
    name: "Random Text Generator",
    slug: "random-text-generator",
    description: "Generate random strings with custom length and charset.",
    icon: "🎲",
  },
  {
    name: "Lorem Ipsum Generator",
    slug: "lorem-ipsum",
    description: "Generate placeholder text in paragraphs or sentences.",
    icon: "📝",
  },
];
