'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateStockSplit } from '@/lib/calculators';

const splitOptions = [
  { label: '1:2 Split', value: '1:2' },
  { label: '1:3 Split', value: '1:3' },
  { label: '1:5 Split', value: '1:5' },
  { label: '1:10 Split', value: '1:10' },
  { label: '2:1 Reverse Split', value: '2:1' },
];

const initialFields: CalculatorField[] = [
  {
    name: 'quantity',
    label: 'Current Quantity of Shares',
    type: 'number',
    placeholder: 'Enter current quantity',
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
    name: 'splitRatio',
    label: 'Stock Split Ratio',
    type: 'select',
    options: splitOptions,
    value: '',
  },
];

export function StockSplitCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateStockSplit> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(calculateStockSplit(
      parseFloat(values.quantity) || 0,
      parseFloat(values.price) || 0,
      values.splitRatio
    ));
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result
    ? [
        { label: 'New Quantity', value: result.newQuantity, suffix: ' shares', highlight: true },
        { label: 'New Price per Share', value: result.newPrice, highlight: true },
        { label: 'Total Investment Value', value: result.investmentValue },
      ]
    : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm
        fields={fields}
        onSubmit={handleSubmit}
        onClear={handleClear}
        onFieldChange={handleFieldChange}
        buttonLabel="Calculate New Shares"
      />
      {result && <ResultCard title="After Stock Split" results={resultItems} />}
    </div>
  );
}
