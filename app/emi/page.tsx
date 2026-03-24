'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/main-layout';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { FAQSection } from '@/components/faq-section';
import { calculateEMI } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  {
    name: 'principal',
    label: 'Loan Amount',
    type: 'number',
    placeholder: 'Enter loan amount',
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
    label: 'Loan Period (Months)',
    type: 'number',
    placeholder: 'Enter loan period',
    value: '',
    min: 0,
  },
];

const faqs = [
  {
    question: 'What is EMI?',
    answer:
      'EMI (Equated Monthly Installment) is the fixed amount you pay monthly towards your loan. It consists of both principal and interest components.',
  },
  {
    question: 'How is EMI calculated?',
    answer:
      'EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1], where P is principal, r is monthly rate, and n is number of months.',
  },
];

export default function EMIPage() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateEMI> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const handleSubmit = (values: Record<string, any>) => {
    const calculationResult = calculateEMI(
      parseFloat(values.principal) || 0,
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
          label: 'Monthly EMI',
          value: result.emi,
          highlight: true,
        },
        {
          label: 'Total Payable',
          value: result.totalPayable,
        },
        {
          label: 'Total Interest',
          value: result.totalInterest,
        },
      ]
    : [];

  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              EMI Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate your monthly EMI, total payable amount, and total interest on any loan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <CalculatorForm
              fields={fields}
              onSubmit={handleSubmit}
              onClear={handleClear}
              onFieldChange={handleFieldChange}
              buttonLabel="Calculate EMI"
            />
            {result && <ResultCard title="Your EMI Results" results={resultItems} />}
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
