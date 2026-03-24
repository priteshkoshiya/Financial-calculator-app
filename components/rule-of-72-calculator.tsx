'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateRuleOf72 } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  { name: 'rate', label: 'Expected Annual Return Rate (%)', type: 'number', placeholder: 'Enter annual rate', value: '', min: 0.1, step: 0.1 },
];

export function RuleOf72Calculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateRuleOf72> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value } : f)));
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(calculateRuleOf72(parseFloat(values.rate) || 0));
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result ? [
    { label: 'Time Required to Double your Money', value: result.yearsToDouble.toFixed(1), suffix: ' years', highlight: true },
  ] : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm fields={fields} onSubmit={handleSubmit} onClear={handleClear} onFieldChange={handleFieldChange} buttonLabel="Calculate Doubling Time" />
      {result && <ResultCard title="Investment Doubling Result" results={resultItems} />}
    </div>
  );
}
