'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateBonusShare } from '@/lib/calculators';

const bonusOptions = [
  { label: '1:1 Bonus', value: '1:1' },
  { label: '1:2 Bonus', value: '1:2' },
  { label: '1:3 Bonus', value: '1:3' },
  { label: '1:5 Bonus', value: '1:5' },
  { label: '2:1 Bonus', value: '2:1' },
];

const initialFields: CalculatorField[] = [
  {
    name: 'quantity',
    label: 'Current Quantity of Shares',
    type: 'number',
    placeholder: 'Enter quantity',
    value: '',
    min: 0,
  },
  {
    name: 'price',
    label: 'Current Price per Share',
    type: 'number',
    placeholder: 'Enter current price',
    value: '',
    min: 0,
    step: 0.01,
  },
  {
    name: 'bonusRatio',
    label: 'Bonus Share Ratio',
    type: 'select',
    options: bonusOptions,
    value: '',
  },
];

export function BonusShareCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateBonusShare> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(calculateBonusShare(
      parseFloat(values.quantity) || 0,
      parseFloat(values.price) || 0,
      values.bonusRatio
    ));
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result
    ? [
        { label: 'Total Free Bonus Shares', value: result.bonusShares, suffix: ' shares' },
        { label: 'Total Quantity Held', value: result.totalQuantity, suffix: ' shares', highlight: true },
        { label: 'New Adjusted Price', value: result.adjustedPrice },
        { label: 'Total Investment Value', value: result.totalValue, highlight: true },
      ]
    : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm
        fields={fields}
        onSubmit={handleSubmit}
        onClear={handleClear}
        onFieldChange={handleFieldChange}
        buttonLabel="Calculate Bonus"
      />
      {result && <ResultCard title="After Bonus Issue" results={resultItems} />}
    </div>
  );
}
