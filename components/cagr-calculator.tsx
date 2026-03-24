'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateCAGR } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  { name: 'initialAmount', label: 'Initial Investment Amount', type: 'number', placeholder: 'Enter starting amount', value: '', min: 0 },
  { name: 'finalAmount', label: 'Final Investment Amount', type: 'number', placeholder: 'Enter final amount', value: '', min: 0 },
  { name: 'years', label: 'Investment Period (Years)', type: 'number', placeholder: 'Enter number of years', value: '', min: 0, step: 0.5 },
];

export function CagrCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateCAGR> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value } : f)));
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(calculateCAGR(
      parseFloat(values.initialAmount) || 0,
      parseFloat(values.finalAmount) || 0,
      parseFloat(values.years) || 0
    ));
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result ? [
    { label: 'CAGR', value: result.cagr, suffix: '%', highlight: true },
    { label: 'Total Gain', value: result.totalGain },
    { label: 'Gain Percentage', value: result.gainPercentage, suffix: '%' },
  ] : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm fields={fields} onSubmit={handleSubmit} onClear={handleClear} onFieldChange={handleFieldChange} buttonLabel="Calculate CAGR" />
      {result && <ResultCard title="Your CAGR Results" results={resultItems} />}
    </div>
  );
}
