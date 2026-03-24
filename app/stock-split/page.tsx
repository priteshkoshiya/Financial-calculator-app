'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/main-layout';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateStockSplit } from '@/lib/calculators';

const splitOptions = [
  { label: '1:2 Split', value: '1:2' },
  { label: '1:3 Split', value: '1:3' },
  { label: '2:1 Bonus', value: '2:1' },
  { label: '5:1 Split', value: '5:1' },
];

const initialFields: CalculatorField[] = [
  {
    name: 'quantity',
    label: 'Current Quantity',
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
    name: 'splitRatio',
    label: 'Stock Split Ratio',
    type: 'select',
    options: splitOptions,
    value: '',
  },
];

export default function StockSplitPage() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateStockSplit> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const handleSubmit = (values: Record<string, any>) => {
    const result = calculateStockSplit(
      parseFloat(values.quantity) || 0,
      parseFloat(values.price) || 0,
      values.splitRatio
    );
    setResult(result);
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result
    ? [
        {
          label: 'New Quantity',
          value: result.newQuantity,
          suffix: 'shares',
          highlight: true,
        },
        {
          label: 'New Price per Share',
          value: result.newPrice,
          highlight: true,
        },
        {
          label: 'Total Investment Value',
          value: result.investmentValue,
        },
      ]
    : [];

  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Stock Split Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate the impact of stock splits on your shareholding.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <CalculatorForm
              fields={fields}
              onSubmit={handleSubmit}
              onClear={handleClear}
              onFieldChange={handleFieldChange}
              buttonLabel="Calculate"
            />
            {result && <ResultCard title="After Stock Split" results={resultItems} />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
