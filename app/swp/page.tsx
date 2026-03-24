'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/main-layout';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { FAQSection } from '@/components/faq-section';
import { calculateSWP } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  {
    name: 'initialInvestment',
    label: 'Initial Investment Amount',
    type: 'number',
    placeholder: 'Enter initial investment',
    value: '',
    min: 0,
  },
  {
    name: 'monthlyWithdrawal',
    label: 'Monthly Withdrawal Amount',
    type: 'number',
    placeholder: 'Enter monthly withdrawal',
    value: '',
    min: 0,
  },
  {
    name: 'annualRate',
    label: 'Annual Interest Rate (%)',
    type: 'number',
    placeholder: 'Enter annual interest rate',
    value: '',
    min: 0,
    step: 0.1,
  },
  {
    name: 'months',
    label: 'Number of Months',
    type: 'number',
    placeholder: 'Enter number of months',
    value: '',
    min: 0,
  },
];

const faqs = [
  {
    question: 'What is SWP (Systematic Withdrawal Plan)?',
    answer:
      'SWP allows you to withdraw a fixed amount regularly from your investment while the remaining balance continues to grow. It\'s useful for retirement planning and generating regular income.',
  },
  {
    question: 'How is the final amount calculated in SWP?',
    answer:
      'Each month, the remaining balance earns interest at the specified rate, and then the withdrawal amount is deducted. This continues for the specified number of months.',
  },
];

export default function SWPPage() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateSWP> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const handleSubmit = (values: Record<string, any>) => {
    const calculationResult = calculateSWP(
      parseFloat(values.initialInvestment) || 0,
      parseFloat(values.monthlyWithdrawal) || 0,
      parseFloat(values.annualRate) || 0,
      parseFloat(values.months) || 0
    );
    setResult(calculationResult);
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result
    ? [
        {
          label: 'Total Withdrawn',
          value: result.totalWithdrawn,
        },
        {
          label: 'Final Amount',
          value: result.finalAmount,
          highlight: true,
        },
        {
          label: 'Gained Amount',
          value: result.gainedAmount,
        },
      ]
    : [];

  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              SWP Calculator (Systematic Withdrawal Plan)
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate the final value of your investment after systematic withdrawals and ongoing growth.
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

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
