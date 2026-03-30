import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { XIRRCalculator } from '@/components/xirr-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'XIRR Calculator | Bunny Calculator',
  description: 'Calculate XIRR (Extended Internal Rate of Return) for any series of cash flows. Find the true annualised return on irregular investments.',
  keywords: 'XIRR calculator, extended internal rate of return, irregular cash flows, investment return calculator, annualised return',
};

const faqs = [
  {
    question: 'What is XIRR?',
    answer: 'XIRR (Extended Internal Rate of Return) calculates the annualised return for a series of cash flows that occur at irregular intervals. Unlike CAGR (which assumes a single lump sum), XIRR accounts for the exact timing of every investment and withdrawal.',
  },
  {
    question: 'How do I enter cash flows?',
    answer: 'Enter each transaction with its date and amount. Use negative values for money going out (investments/purchases) and positive values for money coming in (dividends, withdrawals, or the final portfolio value). At least one negative and one positive value are required.',
  },
  {
    question: 'What is a good XIRR?',
    answer: 'It depends on the asset class and time period. For equity investments, 10–15% annualised is generally considered good. For debt or fixed income, 5–8% is typical.',
  },
  {
    question: 'How is XIRR different from CAGR?',
    answer: 'CAGR measures the growth rate from one lump sum investment. XIRR handles multiple investments made at different dates and amounts, making it more accurate for SIPs, portfolios with top-ups, or any irregular investing pattern.',
  },
];

export default function XIRRPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">XIRR Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Calculate the true annualised return (XIRR) for any series of investments and withdrawals, regardless of timing.
            </p>
          </div>

          <XIRRCalculator />

          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">When to Use XIRR</h2>
            <p className="text-muted-foreground mb-6">
              XIRR is the most accurate measure of investment performance when cash flows are irregular. Standard CAGR only works for a single investment made once — XIRR handles any pattern.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Good Use Cases</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Monthly SIP investments in a mutual fund</li>
                  <li>Irregular top-ups to a portfolio</li>
                  <li>Real estate with rental income + eventual sale</li>
                  <li>Stock purchases made on different dates</li>
                  <li>Any investment with intermediate cash flows</li>
                </ul>
              </div>
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4">Example</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>Invested 10,000 on Jan 1 → enter <strong>-10000</strong></p>
                  <p>Invested 5,000 on Jul 1 → enter <strong>-5000</strong></p>
                  <p>Portfolio value on Dec 31 → enter <strong>+18000</strong></p>
                  <p className="pt-2 text-primary font-medium">XIRR gives your true annualised return.</p>
                </div>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
