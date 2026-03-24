import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { PercentageCalculator } from '@/components/percentage-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Percentage Calculator | Bunny Calculator',
  description: 'Easily calculate percentage values of any amount. Find out the exact numeric value and the final added total in a click.',
  keywords: 'percentage calculator, calculate percentage of a number, percentage formula, simple math calculator',
};

const faqs = [
  {
    question: 'How do you calculate a percentage of a number?',
    answer: 'To find a percentage of a number, you multiply the percentage mathematically by the number and then divide by 100. For example, 20% of 50 is (20 * 50) / 100 = 10.'
  },
  {
    question: 'What does percent actually mean?',
    answer: 'The word "percent" literally translates to "per 100". Thus 25% simply means 25 out of every 100 units.'
  },
  {
    question: 'When should I use a percentage calculator?',
    answer: 'You can use it to figure out retail discounts, calculate the exact tip amount at a restaurant, find out your tax obligations, or evaluate stock market gains.'
  }
];

export default function PercentagePage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Percentage Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              A simple, quick-use calculator to find the exact percentage of any number.
            </p>
          </div>

          <PercentageCalculator />

          {/* Educational Content for SEO & User Guide */}
          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">How to Find the Percentage of Any Number</h2>
            <p className="text-muted-foreground mb-4">
              Our free <strong>Percentage Calculator</strong> is a versatile tool that saves you from doing mental math. Whether it's analyzing a stock chart, calculating the discount on a new car, or paying sales tax, percentages are used everywhere in our daily financial lives.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Quick Instructions</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>Base Amount:</strong> Enter the original, total starting number (e.g., 5000).</li>
                  <li><strong>Percentage:</strong> Enter the percentage you want to evaluate (e.g., 15 for 15%).</li>
                  <li><strong>Calculate:</strong> The tool instantly figures out both the extracted value AND what the total sum is if added together.</li>
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">The Math Formula</h3>
                <div className="bg-background border border-border p-6 rounded-lg font-mono text-primary text-xl mb-4 text-center">
                  X% of Y = (X × Y) ÷ 100
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  Example: 5% of 200.<br/> (5 × 200) = 1000.<br/> 1000 ÷ 100 = 10.
                </p>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
