import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { SavingsGoalCalculator } from '@/components/savings-goal-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Savings Goal Calculator | Bunny Calculator',
  description: 'Calculate how much you need to invest monthly or as a lumpsum to reach your financial goal. Reverse SIP and reverse lumpsum calculator.',
  keywords: 'savings goal calculator, how much to invest, goal based investing, reverse SIP calculator, target amount calculator',
};

const faqs = [
  {
    question: 'What is a savings goal calculator?',
    answer: 'A savings goal calculator works in reverse — instead of asking "how much will I have?", it asks "how much do I need to invest to reach my goal?" You set the target and it tells you the required investment.',
  },
  {
    question: 'When should I choose monthly vs lumpsum?',
    answer: 'Choose monthly if you plan to invest a fixed amount each period (like a SIP). Choose lumpsum if you have a large one-time sum to invest today.',
  },
  {
    question: 'How accurate are the results?',
    answer: 'Results assume a constant rate of return. Real-world returns vary. Treat these as projections to guide your planning, not guarantees.',
  },
];

export default function SavingsGoalPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Savings Goal Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Have a financial goal in mind? Enter the target amount and find out exactly how much to invest — monthly or as a one-time amount.
            </p>
          </div>

          <SavingsGoalCalculator />

          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">Goal-Based Financial Planning</h2>
            <p className="text-muted-foreground mb-6">
              Whether you're saving for a down payment, education, travel, or retirement, goal-based planning keeps your investments focused and measurable.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🏠</div>
                <strong className="block text-foreground mb-1">Home Purchase</strong>
                <span className="text-muted-foreground">Calculate monthly savings needed for a down payment within your target date.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🎓</div>
                <strong className="block text-foreground mb-1">Education Fund</strong>
                <span className="text-muted-foreground">Plan ahead for children's education costs by investing systematically.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">✈️</div>
                <strong className="block text-foreground mb-1">Dream Vacation</strong>
                <span className="text-muted-foreground">Even small goals benefit from disciplined saving and compounding.</span>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
