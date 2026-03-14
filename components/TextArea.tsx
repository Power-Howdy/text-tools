"use client";

type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  rows?: number;
  className?: string;
};

export function TextArea({
  value,
  onChange,
  placeholder = "Enter your text...",
  readOnly = false,
  rows = 8,
  className = "",
}: TextAreaProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      readOnly={readOnly}
      rows={rows}
      className={`w-full rounded-lg border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 text-warm-900 dark:text-warm-100 placeholder-warm-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-y font-mono text-sm ${className}`}
    />
  );
}
