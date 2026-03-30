'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateRetirement } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  { name: 'currentAge', label: 'Current Age', type: 'number', placeholder: 'e.g. 30', value: '', min: 1 },
  { name: 'retirementAge', label: 'Retirement Age', type: 'number', placeholder: 'e.g. 60', value: '', min: 1 },
  { name: 'lifeExpectancy', label: 'Life Expectancy', type: 'number', placeholder: 'e.g. 85', value: '', min: 1 },
  { name: 'monthlyExpense', label: 'Current Monthly Expenses', type: 'number', placeholder: 'Your monthly spending today', value: '', min: 0 },
  { name: 'inflationRate', label: 'Expected Inflation Rate (%)', type: 'number', placeholder: 'e.g. 5', value: '', min: 0, step: 0.1 },
  { name: 'returnRate', label: 'Expected Investment Return (%)', type: 'number', placeholder: 'e.g. 10', value: '', min: 0, step: 0.1 },
  { name: 'currentSavings', label: 'Current Savings / Investments', type: 'number', placeholder: 'Total savings you already have', value: '', min: 0 },
];

export function RetirementCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateRetirement> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value } : f)));
  };

  const handleSubmit = (values: Record<string, any>) => {
    setResult(
      calculateRetirement(
        parseFloat(values.currentAge) || 0,
        parseFloat(values.retirementAge) || 0,
        parseFloat(values.monthlyExpense) || 0,
        parseFloat(values.inflationRate) || 0,
        parseFloat(values.returnRate) || 0,
        parseFloat(values.currentSavings) || 0,
        parseFloat(values.lifeExpectancy) || 80
      )
    );
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result
    ? [
        { label: 'Years Until Retirement', value: result.yearsToRetire, suffix: 'yrs' },
        { label: 'Monthly Expense at Retirement', value: result.monthlyExpenseAtRetirement },
        { label: 'Retirement Corpus Needed', value: result.corpusNeeded, highlight: true },
        { label: 'Current Savings Grown to Retirement', value: result.grownSavings },
        { label: 'Additional Corpus Required', value: result.additionalNeeded, highlight: true },
        { label: 'Monthly Savings Required', value: result.monthlySavingsRequired, highlight: true },
      ]
    : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <CalculatorForm
        fields={fields}
        onSubmit={handleSubmit}
        onClear={handleClear}
        onFieldChange={handleFieldChange}
        buttonLabel="Plan My Retirement"
      />
      {result && (
        <ResultCard
          title="Retirement Plan"
          results={resultItems}
          description="All values are inflation-adjusted estimates."
        />
      )}
    </div>
  );
}
