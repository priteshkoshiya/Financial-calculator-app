import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { BonusShareCalculator } from '@/components/bonus-share-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Bonus Share Calculator | Bunny Calculator',
  description: 'Calculate your new share quantity and adjusted stock price after a company announces a bonus share issue.',
  keywords: 'bonus share calculator, free shares calculator, adjusted share price, corporate actions',
};

const faqs = [
  {
    question: 'How do bonus shares work?',
    answer: 'When a company issues bonus shares, it gives free additional shares to existing shareholders based on the number of shares they already own. This is usually done by capitalizing a part of the company\'s cash reserves.'
  },
  {
    question: 'Do bonus shares increase my total investment value?',
    answer: 'No. The overall value of your investment remains the same. While the number of shares you own increases, the price per share will adjust downwards automatically on the ex-bonus date.'
  },
  {
    question: 'What does a 1:2 bonus ratio mean?',
    answer: 'A 1:2 bonus ratio means you receive 1 free bonus share for every 2 shares you currently hold in your portfolio.'
  }
];

export default function BonusSharePage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Bonus Share Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate the exact impact of free bonus shares on your total holdings and new stock price.
            </p>
          </div>

          <BonusShareCalculator />

          {/* Educational Content for SEO & User Guide */}
          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">How to Evaluate Bonus Issues</h2>
            <p className="text-muted-foreground mb-4">
              A bonus share issue is an exciting corporate action, but it's important to understand the math. Use the <strong>Bonus Share Calculator</strong> to accurately predict how many free shares will automatically drop into your Demat account, and what the adjusted trading price will be.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">How it calculation works:</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>Current Holdings:</strong> Enter the number of shares you own before the record date.</li>
                  <li><strong>Current Price:</strong> Enter the stock price right before the ex-bonus date.</li>
                  <li><strong>Announced Ratio:</strong> The format is usually (Free Shares) : (Held Shares). Example: 1:1.</li>
                  <li><strong>Calculate:</strong> Find out your new total share balance and the mathematically adjusted share price.</li>
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4">The Mathematical Adjustment</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  If the ratio is X bonus shares for every Y held shares:
                </p>
                <div className="bg-background border border-border p-4 rounded-lg font-mono text-primary text-sm mb-4">
                  New Shares = (X / Y) × Holding
                </div>
                <div className="bg-background border border-border p-4 rounded-lg font-mono text-primary text-sm mb-4 overflow-x-auto">
                  New Price = Old Price ÷ (1 + (X / Y))
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li><strong>Capital Neutral:</strong> Just like a slice of pizza cut into more pieces, the overall pie size doesn't change purely based on the bonus math.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4">Why Do Companies Give Bonus Shares?</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🎁</div>
                <strong className="block text-foreground mb-1">Reward Shareholders</strong>
                <span className="text-muted-foreground">Companies use accumulated reserves to reward long-term investors without paying out actual cash.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">😊</div>
                <strong className="block text-foreground mb-1">Increase Confidence</strong>
                <span className="text-muted-foreground">A bonus issue signals that management expects future earnings growth to support a larger equity base.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🌊</div>
                <strong className="block text-foreground mb-1">Boost Liquidity</strong>
                <span className="text-muted-foreground">Because the stock price decreases, it becomes more affordable to retail investors, increasing daily trading volume.</span>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
