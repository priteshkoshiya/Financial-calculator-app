import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { RetirementCalculator } from '@/components/retirement-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Retirement Calculator | Bunny Calculator',
  description: 'Plan your retirement. Calculate how much corpus you need, how much to save monthly, and whether your current savings are on track.',
  keywords: 'retirement calculator, retirement planning, retirement corpus calculator, how much to save for retirement',
};

const faqs = [
  {
    question: 'How does the retirement calculator work?',
    answer: 'It first calculates your monthly expense at retirement adjusted for inflation. Then it estimates the total corpus needed to sustain those withdrawals for your retirement years. Finally, it calculates how much you need to save monthly to build that corpus.',
  },
  {
    question: 'What inflation rate should I use?',
    answer: 'A commonly used estimate is 3–6% depending on your country and lifestyle. Use a higher rate to be conservative in your planning.',
  },
  {
    question: 'What return rate should I assume?',
    answer: 'For a balanced portfolio of equities and bonds, 6–10% is a common long-term assumption. Use a lower rate for a more conservative estimate.',
  },
  {
    question: 'Does this account for Social Security or pension income?',
    answer: 'No. The calculator estimates the corpus needed from personal savings. You can reduce your monthly expense input to account for any guaranteed income you expect (pension, social security, etc.).',
  },
];

export default function RetirementPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Retirement Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Plan your retirement with confidence. Find out how much corpus you need and what monthly savings will get you there.
            </p>
          </div>

          <RetirementCalculator />

          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">Why Retirement Planning Matters</h2>
            <p className="text-muted-foreground mb-6">
              Retirement can last 20–30 years. Without adequate savings, inflation erodes purchasing power significantly. Starting early and investing consistently is the most reliable path to a comfortable retirement.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Key Principles</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Start Early:</strong> Time is your biggest asset. Every year of delay requires significantly more monthly savings.</li>
                  <li><strong>Beat Inflation:</strong> Your investments must grow faster than inflation to maintain purchasing power.</li>
                  <li><strong>Diversify:</strong> Spread investments across asset classes to manage risk over the long term.</li>
                </ul>
              </div>
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4">What This Calculator Assumes</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>Monthly expenses at retirement are inflation-adjusted from today's values</li>
                  <li>Your corpus earns the same return rate before and during retirement</li>
                  <li>Withdrawals are made monthly throughout retirement</li>
                  <li>Current savings grow at the same return rate until retirement</li>
                </ul>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
