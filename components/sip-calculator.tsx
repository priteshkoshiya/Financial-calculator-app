'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateSIP } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  { name: 'monthlyInvestment', label: 'Monthly Investment Amount', type: 'number', placeholder: 'Enter monthly SIP amount', value: '', min: 0 },
  { name: 'annualRate', label: 'Expected Annual Return Rate (%)', type: 'number', placeholder: 'Enter expected annual rate', value: '', min: 0, step: 0.1 },
  { name: 'years', label: 'Investment Period (Years)', type: 'number', placeholder: 'Enter number of years', value: '', min: 0, step: 0.5 },
];

export function SIPCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateSIP> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value } : f)));
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(calculateSIP(parseFloat(values.monthlyInvestment) || 0, parseFloat(values.annualRate) || 0, parseFloat(values.years) || 0));
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result ? [
    { label: 'Total Invested', value: result.totalInvested },
    { label: 'Maturity Amount', value: result.maturityAmount, highlight: true },
    { label: 'Gained Amount', value: result.gainedAmount, highlight: true },
  ] : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm fields={fields} onSubmit={handleSubmit} onClear={handleClear} onFieldChange={handleFieldChange} buttonLabel="Calculate Returns" />
      {result && <ResultCard title="Your Projections" results={resultItems} />}
    </div>
  );
}
