import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { CapitalGainsCalculator } from '@/components/capital-gains-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Capital Gains Calculator | Bunny Calculator',
  description: 'Calculate capital gains and estimated tax on any investment. Set your own short-term and long-term tax rates. Works globally for stocks, ETFs, real estate, and more.',
  keywords: 'capital gains calculator, capital gains tax, short term capital gains, long term capital gains, investment tax calculator',
};

const faqs = [
  {
    question: 'What are capital gains?',
    answer: 'Capital gains are the profit you make when you sell an asset (stock, property, fund) for more than you paid. They are typically subject to tax, with rates depending on how long you held the asset.',
  },
  {
    question: 'What is the difference between short-term and long-term capital gains?',
    answer: 'Assets held for a shorter period (commonly less than 1 year) are subject to short-term tax rates, which are often higher. Assets held longer qualify for lower long-term rates. The threshold varies by country.',
  },
  {
    question: 'How do I find my applicable tax rate?',
    answer: 'Tax rates depend on your country, income bracket, and asset type. Enter your specific rates in the form. Consult a local tax professional or your country\'s tax authority for accurate rates.',
  },
  {
    question: 'Does this calculator account for losses?',
    answer: 'Yes. If the sale price is below the purchase price, the calculator shows a capital loss. Tax is only applied on gains (positive values). Loss harvesting rules vary by jurisdiction.',
  },
];

export default function CapitalGainsPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Capital Gains Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Calculate capital gains and estimated tax on stocks, ETFs, real estate, or any asset. Works globally — just enter your own tax rates.
            </p>
          </div>

          <CapitalGainsCalculator />

          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">Understanding Capital Gains Tax</h2>
            <p className="text-muted-foreground mb-6">
              Capital gains tax varies significantly by country. This calculator gives you a flexible tool — enter your own tax rates and holding thresholds to match your local rules.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">📈</div>
                <strong className="block text-foreground mb-1">Stocks & ETFs</strong>
                <span className="text-muted-foreground">Most countries tax equity gains differently based on holding period. Long-term usually gets lower rates.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🏠</div>
                <strong className="block text-foreground mb-1">Real Estate</strong>
                <span className="text-muted-foreground">Property gains often have special thresholds and exemptions. Enter your country-specific rates.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🪙</div>
                <strong className="block text-foreground mb-1">Crypto & Others</strong>
                <span className="text-muted-foreground">Cryptocurrency is often taxed as capital gains. Thresholds and rates vary widely by jurisdiction.</span>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground italic">
              Disclaimer: This calculator provides estimates only. Tax laws are complex and change frequently. Always consult a qualified tax professional for advice specific to your situation.
            </p>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
