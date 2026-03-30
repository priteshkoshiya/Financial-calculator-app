'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateSavingsGoal } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  { name: 'targetAmount', label: 'Target Amount (Goal)', type: 'number', placeholder: 'How much do you want to accumulate?', value: '', min: 0 },
  { name: 'annualRate', label: 'Expected Annual Return Rate (%)', type: 'number', placeholder: 'e.g. 10', value: '', min: 0, step: 0.1 },
  { name: 'years', label: 'Time Horizon (Years)', type: 'number', placeholder: 'How many years do you have?', value: '', min: 1 },
  {
    name: 'mode',
    label: 'Investment Mode',
    type: 'select',
    placeholder: 'Select mode',
    value: 'sip',
    options: [
      { label: 'Monthly (SIP / Regular Investment)', value: 'sip' },
      { label: 'One-Time (Lumpsum)', value: 'lumpsum' },
    ],
  },
];

export function SavingsGoalCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateSavingsGoal> | null>(null);
  const [mode, setMode] = useState<'sip' | 'lumpsum'>('sip');

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value } : f)));
    if (name === 'mode') setMode(value as 'sip' | 'lumpsum');
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(
      calculateSavingsGoal(
        parseFloat(values.targetAmount) || 0,
        parseFloat(values.annualRate) || 0,
        parseFloat(values.years) || 0,
        (values.mode as 'sip' | 'lumpsum') || 'sip'
      )
    );
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
    setMode('sip');
  };

  const resultItems: ResultItem[] = result
    ? [
        {
          label: mode === 'sip' ? 'Monthly Investment Required' : 'Lumpsum Investment Required',
          value: result.required,
          highlight: true,
        },
        { label: 'Total Amount Invested', value: result.totalInvested },
        { label: 'Expected Gain', value: result.expectedGain, highlight: true },
      ]
    : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm
        fields={fields}
        onSubmit={handleSubmit}
        onClear={handleClear}
        onFieldChange={handleFieldChange}
        buttonLabel="Calculate Required Investment"
      />
      {result && <ResultCard title="Goal Planning Results" results={resultItems} />}
    </div>
  );
}
