'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/main-layout';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateRuleOf72 } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  {
    name: 'rate',
    label: 'Annual Growth Rate (%)',
    type: 'number',
    placeholder: 'Enter annual growth rate',
    value: '',
    min: 0.1,
    step: 0.1,
  },
];

export default function RuleOf72Page() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateRuleOf72> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const handleSubmit = (values: Record<string, any>) => {
    const result = calculateRuleOf72(parseFloat(values.rate) || 0);
    setResult(result);
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result
    ? [
        {
          label: 'Years to Double',
          value: result.yearsToDouble.toFixed(1),
          suffix: 'years',
          highlight: true,
        },
      ]
    : [];

  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Rule of 72 Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Find out how many years it will take for your investment to double at a given rate of return.
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
            {result && <ResultCard title="Your Results" results={resultItems} />}
          </div>

          <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">What is Rule of 72?</h2>
            <p className="text-foreground mb-4">
              The Rule of 72 is a simple formula to estimate how long it takes for your investment to double at a given annual rate of return.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <code className="text-sm text-muted-foreground">
                Years to Double = 72 ÷ Annual Rate of Return (%)
              </code>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
