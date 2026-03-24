'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/main-layout';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateLumpsum } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  {
    name: 'amount',
    label: 'Lumpsum Amount',
    type: 'number',
    placeholder: 'Enter investment amount',
    value: '',
    min: 0,
  },
  {
    name: 'annualRate',
    label: 'Annual Interest Rate (%)',
    type: 'number',
    placeholder: 'Enter annual rate',
    value: '',
    min: 0,
    step: 0.1,
  },
  {
    name: 'years',
    label: 'Investment Period (Years)',
    type: 'number',
    placeholder: 'Enter years',
    value: '',
    min: 0,
  },
];

export default function LumpsumPage() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateLumpsum> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const handleSubmit = (values: Record<string, any>) => {
    const result = calculateLumpsum(
      parseFloat(values.amount) || 0,
      parseFloat(values.annualRate) || 0,
      parseFloat(values.years) || 0
    );
    setResult(result);
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result
    ? [
        {
          label: 'Maturity Amount',
          value: result.maturityAmount,
          highlight: true,
        },
        {
          label: 'Gained Amount',
          value: result.gainedAmount,
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
              Lumpsum Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate the growth of a one-time lumpsum investment over time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <CalculatorForm
              fields={fields}
              onSubmit={handleSubmit}
              onClear={handleClear}
              onFieldChange={handleFieldChange}
              buttonLabel="Calculate"
            />
            {result && <ResultCard title="Your Results" results={resultItems} />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
