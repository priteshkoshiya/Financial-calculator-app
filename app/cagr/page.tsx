'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/main-layout';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { FAQSection } from '@/components/faq-section';
import { calculateCAGR } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  {
    name: 'initialAmount',
    label: 'Initial Investment Amount',
    type: 'number',
    placeholder: 'Enter starting amount',
    value: '',
    min: 0,
  },
  {
    name: 'finalAmount',
    label: 'Final Investment Amount',
    type: 'number',
    placeholder: 'Enter final amount',
    value: '',
    min: 0,
  },
  {
    name: 'years',
    label: 'Investment Period (Years)',
    type: 'number',
    placeholder: 'Enter number of years',
    value: '',
    min: 0,
    step: 0.5,
  },
];

const faqs = [
  {
    question: 'What is CAGR?',
    answer:
      'CAGR (Compound Annual Growth Rate) represents the average annual growth rate of an investment over a specified period, assuming the profits are reinvested.',
  },
  {
    question: 'How is CAGR useful?',
    answer:
      'CAGR helps you compare different investments on an annual basis, irrespective of the investment period. It smooths out volatility and gives a clear growth picture.',
  },
  {
    question: 'What\'s the difference between CAGR and simple returns?',
    answer:
      'CAGR accounts for compounding (profits earning profits), while simple returns don\'t. CAGR gives a more realistic picture of investment growth.',
  },
];

export default function CAGRPage() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateCAGR> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const handleSubmit = (values: Record<string, any>) => {
    const calculationResult = calculateCAGR(
      parseFloat(values.initialAmount) || 0,
      parseFloat(values.finalAmount) || 0,
      parseFloat(values.years) || 0
    );
    setResult(calculationResult);
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result
    ? [
        {
          label: 'CAGR',
          value: result.cagr,
          suffix: '%',
          highlight: true,
        },
        {
          label: 'Total Gain',
          value: result.totalGain,
        },
        {
          label: 'Gain Percentage',
          value: result.gainPercentage,
          suffix: '%',
        },
      ]
    : [];

  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              CAGR Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate the Compound Annual Growth Rate of your investments and track real growth over years.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <CalculatorForm
              fields={fields}
              onSubmit={handleSubmit}
              onClear={handleClear}
              onFieldChange={handleFieldChange}
              buttonLabel="Calculate CAGR"
            />
            {result && <ResultCard title="Your CAGR Results" results={resultItems} />}
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
