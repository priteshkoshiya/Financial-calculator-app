'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateSWP } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  { name: 'initialInvestment', label: 'Initial Investment Amount', type: 'number', placeholder: 'Enter initial investment', value: '', min: 0 },
  { name: 'monthlyWithdrawal', label: 'Monthly Withdrawal Amount', type: 'number', placeholder: 'Enter monthly withdrawal', value: '', min: 0 },
  { name: 'annualRate', label: 'Annual Interest Rate (%)', type: 'number', placeholder: 'Enter annual interest rate', value: '', min: 0, step: 0.1 },
  { name: 'months', label: 'Number of Months', type: 'number', placeholder: 'Enter number of months', value: '', min: 0 },
];

export function SWPCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateSWP> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value } : f)));
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(calculateSWP(
      parseFloat(values.initialInvestment) || 0,
      parseFloat(values.monthlyWithdrawal) || 0,
      parseFloat(values.annualRate) || 0,
      parseFloat(values.months) || 0
    ));
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result ? [
    { label: 'Total Withdrawn', value: result.totalWithdrawn },
    { label: 'Final Amount', value: result.finalAmount, highlight: true },
    { label: 'Gained Amount', value: result.gainedAmount },
  ] : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm fields={fields} onSubmit={handleSubmit} onClear={handleClear} onFieldChange={handleFieldChange} buttonLabel="Calculate SWP" />
      {result && <ResultCard title="Your Withdrawal Projections" results={resultItems} />}
    </div>
  );
}
