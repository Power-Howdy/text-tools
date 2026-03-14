"use client";

import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/TextArea";
import { StatsBar } from "@/components/word-counter/StatsBar";
import { DetailsPanel } from "@/components/word-counter/DetailsPanel";
import { KeywordDensity } from "@/components/word-counter/KeywordDensity";
import { FlowScore } from "@/components/word-counter/FlowScore";
import { FlowHighlightView } from "@/components/word-counter/FlowHighlightView";
import { InlineActions } from "@/components/word-counter/InlineActions";
import { getWordStats, getKeywordDensity } from "@/lib/word-stats";

export function WordCounterClient() {
  const [text, setText] = useState("");

  const stats = getWordStats(text);
  const keywords = getKeywordDensity(text, 10);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToolLayout
      title="Word Counter"
      description="Count words, characters, and more. See keyword density, reading time, and flow score. All processing happens in your browser."
    >
      <div className="space-y-6">
        <div>
          <TextArea
            value={text}
            onChange={setText}
            placeholder="Paste or type your text here..."
            rows={10}
          />
        </div>

        <InlineActions
          text={text}
          onTextChange={setText}
          onCopy={handleCopy}
        />

        <StatsBar stats={stats} />

        <div className="grid md:grid-cols-2 gap-6">
          <DetailsPanel stats={stats} />
          <FlowScore text={text} />
        </div>

        {text.trim().length > 0 && (
          <FlowHighlightView text={text} />
        )}

        <KeywordDensity keywords={keywords} />
      </div>
    </ToolLayout>
  );
}
