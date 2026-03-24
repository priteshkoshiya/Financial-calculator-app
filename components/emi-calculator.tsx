'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateEMI } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  { name: 'principal', label: 'Loan Amount', type: 'number', placeholder: 'Enter loan amount', value: '', min: 0 },
  { name: 'annualRate', label: 'Annual Interest Rate (%)', type: 'number', placeholder: 'Enter annual interest rate', value: '', min: 0, step: 0.1 },
  { name: 'months', label: 'Loan Period (Months)', type: 'number', placeholder: 'Enter loan period', value: '', min: 0 },
];

export function EMICalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateEMI> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value } : f)));
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(calculateEMI(parseFloat(values.principal) || 0, parseFloat(values.annualRate) || 0, parseFloat(values.months) || 0));
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result ? [
    { label: 'Monthly EMI', value: result.emi, highlight: true },
    { label: 'Total Payable', value: result.totalPayable },
    { label: 'Total Interest', value: result.totalInterest },
  ] : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm fields={fields} onSubmit={handleSubmit} onClear={handleClear} onFieldChange={handleFieldChange} buttonLabel="Calculate EMI" />
      {result && <ResultCard title="Your EMI Results" results={resultItems} />}
    </div>
  );
}
