'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/main-layout';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculatePercentage } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  {
    name: 'amount',
    label: 'Amount',
    type: 'number',
    placeholder: 'Enter amount',
    value: '',
    min: 0,
  },
  {
    name: 'percentage',
    label: 'Percentage (%)',
    type: 'number',
    placeholder: 'Enter percentage',
    value: '',
    min: 0,
    step: 0.1,
  },
];

export default function PercentagePage() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculatePercentage> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const handleSubmit = (values: Record<string, any>) => {
    const result = calculatePercentage(
      parseFloat(values.amount) || 0,
      parseFloat(values.percentage) || 0
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
          label: 'Percentage Amount',
          value: result.percentageAmount,
          highlight: true,
        },
        {
          label: 'Total',
          value: result.total,
          highlight: true,
        },
      ]
    : [];

  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Percentage Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate percentage values and totals quickly and easily.
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
