'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/main-layout';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { FAQSection } from '@/components/faq-section';
import { calculateSIP } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  {
    name: 'monthlyInvestment',
    label: 'Monthly Investment Amount',
    type: 'number',
    placeholder: 'Enter monthly SIP amount',
    value: '',
    min: 0,
  },
  {
    name: 'annualRate',
    label: 'Expected Annual Return Rate (%)',
    type: 'number',
    placeholder: 'Enter expected annual rate',
    value: '',
    min: 0,
    step: 0.1,
  },
  {
    name: 'years',
    label: 'Investment Period (Years)',
    type: 'number',
    placeholder: 'Enter number of years',
    value: '',
    min: 0,
    step: 0.5,
  },
];

const faqs = [
  {
    question: 'What is SIP (Systematic Investment Plan)?',
    answer:
      'SIP is a disciplined investment approach where you invest a fixed amount regularly (usually monthly) in mutual funds or stocks. This helps you benefit from rupee cost averaging and reduces market volatility impact.',
  },
  {
    question: 'How is SIP maturity amount calculated?',
    answer:
      'The calculator uses the future value of annuity formula: FV = P × [((1 + r)^n - 1) / r] × (1 + r), where P is monthly investment, r is monthly rate, and n is number of months.',
  },
  {
    question: 'What rate should I use?',
    answer:
      'Use historical average returns for the investment type: equity funds (12-15%), balanced funds (8-10%), debt funds (5-7%). Conservative estimates are recommended.',
  },
];

export default function SIPPage() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateSIP> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const handleSubmit = (values: Record<string, any>) => {
    const calculationResult = calculateSIP(
      parseFloat(values.monthlyInvestment) || 0,
      parseFloat(values.annualRate) || 0,
      parseFloat(values.years) || 0
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
          label: 'Total Invested',
          value: result.totalInvested,
        },
        {
          label: 'Maturity Amount',
          value: result.maturityAmount,
          highlight: true,
        },
        {
          label: 'Gained Amount',
          value: result.gainedAmount,
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
              SIP Calculator (Systematic Investment Plan)
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate the maturity value of your systematic investment plan and see how your investments grow over time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <CalculatorForm
              fields={fields}
              onSubmit={handleSubmit}
              onClear={handleClear}
              onFieldChange={handleFieldChange}
              buttonLabel="Calculate Returns"
            />
            {result && <ResultCard title="Your Projections" results={resultItems} />}
          </div>

          <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">How SIP Works</h2>
            <ol className="space-y-3 text-foreground">
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">1.</span>
                <span>Enter your monthly investment amount</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">2.</span>
                <span>Enter expected annual return rate</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">3.</span>
                <span>Specify investment period in years</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">4.</span>
                <span>Click Calculate to see maturity value</span>
              </li>
            </ol>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
