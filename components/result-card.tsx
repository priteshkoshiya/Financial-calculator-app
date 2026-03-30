'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

export interface ResultItem {
  label: string;
  value: string | number;
  suffix?: string;
  highlight?: boolean;
}

interface ResultCardProps {
  title: string;
  results: ResultItem[];
  description?: string;
}

function fmt(value: string | number) {
  if (typeof value === 'number') {
    return value.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  }
  return value;
}

export function ResultCard({ title, results, description }: ResultCardProps) {
  const [copied, setCopied] = useState(false);

  const heroes = results.filter((r) => r.highlight);
  const details = results.filter((r) => !r.highlight);

  const handleCopy = () => {
    const text = results
      .map((r) => `${r.label}: ${fmt(r.value)}${r.suffix ? ' ' + r.suffix : ''}`)
      .join('\n');
    navigator.clipboard.writeText(`${title}\n${text}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Card className="p-5 md:p-7 bg-card border border-border w-full" role="region" aria-label="Calculation results">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-bold text-foreground">{title}</h3>
          {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copy results to clipboard"
          className="text-xs px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:bg-muted/50 transition-colors shrink-0 ml-4"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      {/* Hero numbers — the main answers */}
      {heroes.length > 0 && (
        <div className={`grid gap-3 mb-5 ${heroes.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {heroes.map((item, idx) => (
            <div
              key={idx}
              className="bg-primary/10 border border-primary/25 rounded-xl p-4 text-center"
            >
              <p className="text-xs font-medium text-primary/70 mb-1 uppercase tracking-wide">
                {item.label}
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                {fmt(item.value)}
                {item.suffix && <span className="text-base font-semibold ml-1">{item.suffix}</span>}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Detail rows — supporting info */}
      {details.length > 0 && (
        <div className="space-y-0 border border-border/60 rounded-xl overflow-hidden">
          {details.map((item, idx) => (
            <div
              key={idx}
              className={`flex justify-between items-center px-4 py-3 text-sm ${
                idx < details.length - 1 ? 'border-b border-border/40' : ''
              } odd:bg-muted/20`}
            >
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-semibold text-foreground tabular-nums">
                {fmt(item.value)}
                {item.suffix && <span className="ml-1 text-muted-foreground text-xs">{item.suffix}</span>}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* If everything is non-highlighted (fallback) */}
      {heroes.length === 0 && details.length === 0 && (
        <p className="text-sm text-muted-foreground">No results to display.</p>
      )}
    </Card>
  );
}
