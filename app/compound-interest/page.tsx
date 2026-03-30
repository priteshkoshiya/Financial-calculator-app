import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { CompoundInterestCalculator } from '@/components/compound-interest-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Compound Interest Calculator | Bunny Calculator',
  description: 'Calculate compound interest on any investment. Choose compounding frequency — annually, quarterly, monthly, or daily. Free and instant.',
  keywords: 'compound interest calculator, compound interest formula, investment growth calculator, compounding frequency',
};

const faqs = [
  {
    question: 'What is compound interest?',
    answer: 'Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. Unlike simple interest, it grows exponentially over time.',
  },
  {
    question: 'How does compounding frequency affect returns?',
    answer: 'The more frequently interest compounds, the higher your effective return. Daily compounding yields slightly more than monthly, which yields more than annual compounding.',
  },
  {
    question: 'What is the Effective Annual Rate (EAR)?',
    answer: 'EAR is the true annual return accounting for compounding frequency. A 10% rate compounded monthly results in an EAR of about 10.47%, since interest is added to principal every month.',
  },
];

export default function CompoundInterestPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Compound Interest Calculator</h1>
            <p className="text-lg text-muted-foreground">
              See how your money grows with the power of compounding. Works for any currency, any investment type.
            </p>
          </div>

          <CompoundInterestCalculator />

          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">How Compound Interest Works</h2>
            <p className="text-muted-foreground mb-6">
              Compound interest is often called the "eighth wonder of the world." The longer your money compounds, the faster it grows — because you earn returns on your returns.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">How to Use</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>Principal:</strong> Your starting investment amount.</li>
                  <li><strong>Rate:</strong> The annual interest or return rate.</li>
                  <li><strong>Time:</strong> How many years you leave it invested.</li>
                  <li><strong>Frequency:</strong> How often interest is compounded (monthly is most common).</li>
                </ol>
              </div>
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4">The Formula</h3>
                <div className="bg-background border border-border p-4 rounded-lg font-mono text-primary text-sm mb-4">
                  A = P × (1 + r/n)^(n×t)
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li><strong>A:</strong> Final amount</li>
                  <li><strong>P:</strong> Principal</li>
                  <li><strong>r:</strong> Annual interest rate (decimal)</li>
                  <li><strong>n:</strong> Compounding periods per year</li>
                  <li><strong>t:</strong> Time in years</li>
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
