'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculatePercentage } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  { name: 'amount', label: 'Total Value / Amount', type: 'number', placeholder: 'Enter the base number', value: '', min: 0 },
  { name: 'percentage', label: 'Percentage (%) to Calculate', type: 'number', placeholder: 'Enter expected percentage', value: '', min: 0, step: 0.1 },
];

export function PercentageCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculatePercentage> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value } : f)));
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(calculatePercentage(
      parseFloat(values.amount) || 0,
      parseFloat(values.percentage) || 0
    ));
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result ? [
    { label: 'Percentage Value', value: result.percentageAmount, highlight: true },
    { label: 'Total (Amount + Percentage)', value: result.total },
  ] : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm fields={fields} onSubmit={handleSubmit} onClear={handleClear} onFieldChange={handleFieldChange} buttonLabel="Calculate Percentage" />
      {result && <ResultCard title="Your Calculated Results" results={resultItems} />}
    </div>
  );
}
