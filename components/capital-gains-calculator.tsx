'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateCapitalGains } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  { name: 'purchasePrice', label: 'Purchase Price (per unit)', type: 'number', placeholder: 'Price you paid per share/unit', value: '', min: 0, step: 0.01 },
  { name: 'salePrice', label: 'Sale Price (per unit)', type: 'number', placeholder: 'Price you sold at per share/unit', value: '', min: 0, step: 0.01 },
  { name: 'quantity', label: 'Number of Units / Shares', type: 'number', placeholder: 'e.g. 100', value: '', min: 0 },
  { name: 'holdingDays', label: 'Holding Period (Days)', type: 'number', placeholder: 'Days between buy and sell', value: '', min: 0 },
  { name: 'shortTermTaxRate', label: 'Short-Term Tax Rate (%)', type: 'number', placeholder: 'Your applicable short-term rate', value: '', min: 0, step: 0.1 },
  { name: 'longTermTaxRate', label: 'Long-Term Tax Rate (%)', type: 'number', placeholder: 'Your applicable long-term rate', value: '', min: 0, step: 0.1 },
  { name: 'longTermThresholdDays', label: 'Long-Term Threshold (Days)', type: 'number', placeholder: 'Days to qualify as long-term (default 365)', value: '365', min: 1 },
];

export function CapitalGainsCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateCapitalGains> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value } : f)));
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(
      calculateCapitalGains(
        parseFloat(values.purchasePrice) || 0,
        parseFloat(values.salePrice) || 0,
        parseFloat(values.quantity) || 0,
        parseFloat(values.holdingDays) || 0,
        parseFloat(values.shortTermTaxRate) || 0,
        parseFloat(values.longTermTaxRate) || 0,
        parseFloat(values.longTermThresholdDays) || 365
      )
    );
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result
    ? [
        { label: 'Total Cost Basis', value: result.costBasis },
        { label: 'Total Sale Value', value: result.saleValue },
        { label: 'Capital Gain / Loss', value: result.gain, highlight: true },
        { label: 'Return', value: result.gainPercentage, suffix: '%' },
        { label: 'Holding Type', value: result.isLongTerm ? 'Long-Term' : 'Short-Term' },
        { label: 'Tax Rate Applied', value: result.taxRate, suffix: '%' },
        { label: 'Estimated Tax', value: result.taxAmount },
        { label: 'Net Gain After Tax', value: result.netGain, highlight: true },
      ]
    : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm
        fields={fields}
        onSubmit={handleSubmit}
        onClear={handleClear}
        onFieldChange={handleFieldChange}
        buttonLabel="Calculate Capital Gains"
      />
      {result && (
        <ResultCard
          title="Capital Gains Summary"
          results={resultItems}
          description="Tax amounts are estimates. Consult a tax professional for accurate advice."
        />
      )}
    </div>
  );
}
