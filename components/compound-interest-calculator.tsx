'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateCompoundInterest } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  { name: 'principal', label: 'Principal Amount', type: 'number', placeholder: 'Enter initial investment', value: '', min: 0 },
  { name: 'annualRate', label: 'Annual Interest Rate (%)', type: 'number', placeholder: 'e.g. 8', value: '', min: 0, step: 0.1 },
  { name: 'years', label: 'Time Period (Years)', type: 'number', placeholder: 'e.g. 10', value: '', min: 0, step: 0.5 },
  {
    name: 'frequency',
    label: 'Compounding Frequency',
    type: 'select',
    placeholder: 'Select frequency',
    value: '12',
    options: [
      { label: 'Annually', value: '1' },
      { label: 'Semi-Annually', value: '2' },
      { label: 'Quarterly', value: '4' },
      { label: 'Monthly', value: '12' },
      { label: 'Daily', value: '365' },
    ],
  },
];

export function CompoundInterestCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateCompoundInterest> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value } : f)));
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(
      calculateCompoundInterest(
        parseFloat(values.principal) || 0,
        parseFloat(values.annualRate) || 0,
        parseFloat(values.years) || 0,
        parseInt(values.frequency) || 12
      )
    );
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result
    ? [
        { label: 'Principal Amount', value: result.principal },
        { label: 'Total Interest Earned', value: result.interest, highlight: true },
        { label: 'Total Amount', value: result.amount, highlight: true },
        { label: 'Effective Annual Rate', value: result.effectiveRate, suffix: '%' },
      ]
    : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm
        fields={fields}
        onSubmit={handleSubmit}
        onClear={handleClear}
        onFieldChange={handleFieldChange}
        buttonLabel="Calculate"
      />
      {result && <ResultCard title="Compound Interest Results" results={resultItems} />}
    </div>
  );
}
