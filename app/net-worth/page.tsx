import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { NetWorthCalculator } from '@/components/net-worth-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Net Worth Calculator | Bunny Calculator',
  description: 'Calculate your net worth by listing all assets and liabilities. Track your financial health and debt-to-asset ratio.',
  keywords: 'net worth calculator, assets and liabilities, personal finance, financial health, debt to asset ratio',
};

const faqs = [
  {
    question: 'What is net worth?',
    answer: 'Net worth is the total value of everything you own (assets) minus everything you owe (liabilities). It is the most comprehensive measure of your financial health.',
  },
  {
    question: 'What counts as an asset?',
    answer: 'Assets include cash, bank savings, investments (stocks, bonds, mutual funds), retirement accounts, real estate, vehicles, jewelry, and any other item of value you own.',
  },
  {
    question: 'What counts as a liability?',
    answer: 'Liabilities include mortgages, car loans, student loans, personal loans, credit card balances, business loans, and any other debt you owe.',
  },
  {
    question: 'What is a good debt-to-asset ratio?',
    answer: 'A ratio below 50% is generally considered healthy, meaning your assets are worth at least twice your debts. Below 25% is excellent. A ratio above 100% means your liabilities exceed your assets (negative net worth).',
  },
];

export default function NetWorthPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Net Worth Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Get a clear picture of your financial health. List your assets and liabilities to calculate your net worth and debt-to-asset ratio.
            </p>
          </div>

          <NetWorthCalculator />

          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">Why Track Your Net Worth?</h2>
            <p className="text-muted-foreground mb-6">
              Your net worth is the single most important number in personal finance. It reflects the cumulative result of your earning, spending, saving, and investing decisions over your lifetime.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">📊</div>
                <strong className="block text-foreground mb-1">Track Progress</strong>
                <span className="text-muted-foreground">Calculate quarterly or annually to measure real financial progress beyond just income.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🎯</div>
                <strong className="block text-foreground mb-1">Set Goals</strong>
                <span className="text-muted-foreground">A target net worth gives you something concrete to aim for in your financial plan.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">⚠️</div>
                <strong className="block text-foreground mb-1">Spot Problems</strong>
                <span className="text-muted-foreground">A high debt-to-asset ratio or declining net worth signals that changes are needed.</span>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
