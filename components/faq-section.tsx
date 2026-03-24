'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

export function FAQSection({ faqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setExpanded(expanded === idx ? null : idx);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, idx: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle(idx);
    }
  };

  return (
    <section aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-2xl font-bold text-foreground mb-6">{title}</h2>
      <div className="space-y-3" role="list">
        {faqs.map((faq, idx) => (
          <Card
            key={idx}
            role="listitem"
            className="p-6 bg-card border border-border cursor-pointer hover:border-primary/50 transition-colors"
            onClick={() => handleToggle(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            tabIndex={0}
            aria-expanded={expanded === idx}
            aria-controls={`faq-answer-${idx}`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 
                className="font-semibold text-foreground flex-1 text-left"
                id={`faq-question-${idx}`}
              >
                {faq.question}
              </h3>
              <span 
                className="text-primary text-xl font-bold flex-shrink-0" 
                aria-hidden="true"
              >
                {expanded === idx ? '−' : '+'}
              </span>
            </div>
            {expanded === idx && (
              <p 
                id={`faq-answer-${idx}`}
                className="mt-4 text-muted-foreground text-sm leading-relaxed"
              >
                {faq.answer}
              </p>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
