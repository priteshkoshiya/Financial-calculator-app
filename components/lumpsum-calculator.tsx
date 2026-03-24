'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateLumpsum } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  { name: 'amount', label: 'Lumpsum Amount', type: 'number', placeholder: 'Enter one-time investment amount', value: '', min: 0 },
  { name: 'annualRate', label: 'Annual Interest Rate (%)', type: 'number', placeholder: 'Enter yearly return rate', value: '', min: 0, step: 0.1 },
  { name: 'years', label: 'Investment Period (Years)', type: 'number', placeholder: 'Enter years of investment', value: '', min: 0 },
];

export function LumpsumCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateLumpsum> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value } : f)));
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(calculateLumpsum(
      parseFloat(values.amount) || 0,
      parseFloat(values.annualRate) || 0,
      parseFloat(values.years) || 0
    ));
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result ? [
    { label: 'Total Invested', value: parseFloat(fields.find(f => f.name === 'amount')?.value as string || '0') },
    { label: 'Maturity Amount', value: result.maturityAmount, highlight: true },
    { label: 'Gained Amount', value: result.gainedAmount, highlight: true },
    { label: 'Total Gain %', value: result.gainPercentage, suffix: '%' },
  ] : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm fields={fields} onSubmit={handleSubmit} onClear={handleClear} onFieldChange={handleFieldChange} buttonLabel="Calculate Returns" />
      {result && <ResultCard title="Your Growth Results" results={resultItems} />}
    </div>
  );
}
