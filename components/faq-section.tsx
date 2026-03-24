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

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <Card
            key={idx}
            className="p-6 bg-card border border-border cursor-pointer hover:border-primary/50 transition-colors"
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold text-foreground flex-1 text-left">
                {faq.question}
              </h3>
              <span className="text-primary text-xl font-bold flex-shrink-0">
                {expanded === idx ? '−' : '+'}
              </span>
            </div>
            {expanded === idx && (
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </p>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
