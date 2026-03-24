import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { StockSplitCalculator } from '@/components/stock-split-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Stock Split Calculator | Bunny Calculator',
  description: 'Easily calculate the new number of shares and new share price after a corporate stock split or reverse stock split.',
  keywords: 'stock split calculator, reverse stock split, stock split ratio, share quantity calculator',
};

const faqs = [
  {
    question: 'What happens during a stock split?',
    answer: 'In a stock split, a company increases the number of its outstanding shares to boost the stock\'s liquidity. Your number of shares increases, but the price per share drops proportionally. Your total investment value remains exactly the same.'
  },
  {
    question: 'What does a ratio like "1:5 Split" mean?',
    answer: 'A 1:5 split (often written as a 5-for-1 split in corporate terms) means for every 1 share you own, you will now have 5 shares. If the original price was ₹500, the new price becomes ₹100.'
  },
  {
    question: 'What is a reverse stock split?',
    answer: 'A reverse stock split reduces the number of shares and increases the share price. A 2:1 reverse split means every 2 shares you own will be consolidated into 1 share, doubling the price per share.'
  }
];

export default function StockSplitPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Stock Split Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate the instant impact of a forward or reverse stock split on your portfolio's share quantity and stock price.
            </p>
          </div>

          <StockSplitCalculator />

          {/* Educational Content for SEO & User Guide */}
          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">Understanding Stock Splits</h2>
            <p className="text-muted-foreground mb-4">
              When a company announces a stock split, it can be confusing to figure out what happens to your shares.
              Our <strong>Stock Split Calculator</strong> removes the confusion by instantly displaying your updated share count and new average purchase price.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">How to Use the Calculator</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>Current Quantity:</strong> Enter the exact number of shares you currently hold.</li>
                  <li><strong>Current Price:</strong> Enter the price at which the stock is currently trading.</li>
                  <li><strong>Split Ratio:</strong> Select the announced split ratio (e.g., 1:5 means 5 new shares for every 1 old share).</li>
                  <li><strong>Calculate:</strong> See your updated portfolio numbers immediately.</li>
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4">The Split Math</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For an X:Y split (Y new shares for X old shares):
                </p>
                <div className="bg-background border border-border p-4 rounded-lg font-mono text-primary text-sm mb-4">
                  New Shares = Old Shares × (Y / X)
                </div>
                <div className="bg-background border border-border p-4 rounded-lg font-mono text-primary text-sm mb-4">
                  New Price = Old Price ÷ (Y / X)
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li><strong>Total Value Check:</strong> (New Shares × New Price) will always equal (Old Shares × Old Price).</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4">Why Do Companies Split Their Stock?</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">💧</div>
                <strong className="block text-foreground mb-1">Increase Liquidity</strong>
                <span className="text-muted-foreground">A lower share price makes it easier for retail investors to buy and sell the stock.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🧠</div>
                <strong className="block text-foreground mb-1">Psychological Appeal</strong>
                <span className="text-muted-foreground">A stock trading at ₹100 looks cheaper and more accessible than one trading at ₹10,000.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">📊</div>
                <strong className="block text-foreground mb-1">Options Trading</strong>
                <span className="text-muted-foreground">Lower prices make option contracts (which handle lots of 100 shares) much more affordable.</span>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
