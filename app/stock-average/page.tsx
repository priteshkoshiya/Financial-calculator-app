import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { StockAverageCalculator } from '@/components/stock-average-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Stock Average Calculator | Bunny Calculator',
  description: 'Easily calculate your average stock purchase price when buying the same stock multiple times at different prices. Plan your breakeven points accurately.',
  keywords: 'stock average calculator, average down calculator, share price average, stock market average',
};

const faqs = [
  {
    question: 'What does "averaging down" mean in stocks?',
    answer: 'Averaging down refers to buying more shares of a stock you already own after its price has dropped. This lowers your overall average purchase price, making it easier to break even when the stock goes back up.'
  },
  {
    question: 'How is the average stock price calculated mathematically?',
    answer: 'It is a weighted average calculation. Formula: (Total amount spent on all purchases) ÷ (Total number of shares owned).'
  },
  {
    question: 'Is it always a good idea to average down?',
    answer: 'Not always. While it lowers your break-even point, you are also exposing more of your capital to a declining stock. You should only average down if you heavily believe in the company\'s long-term fundamentals.'
  }
];

export default function StockAveragePage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Stock Market Average Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate your exact average purchase price and total investment cost after making multiple buys of the same stock.
            </p>
          </div>

          <StockAverageCalculator />

          {/* Educational Content for SEO & User Guide */}
          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">How to Use the Stock Average Calculator</h2>
            <p className="text-muted-foreground mb-4">
              When you buy shares of a stock multiple times at varying prices, it can be confusing to know exactly what your break-even price is. Our <strong>Stock Average Calculator</strong> instantly figures out your new average cost per share, helping you plan your target selling price.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Step-by-Step Guide</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>First Purchase:</strong> Enter the number of shares and price per share of your initial buy.</li>
                  <li><strong>Add More Purchases:</strong> Click "+ Add Another Purchase" for every additional time you bought the stock.</li>
                  <li><strong>Enter Details:</strong> Input the shares and price for each subsequent buy.</li>
                  <li><strong>Calculate:</strong> Quickly see your new total average price and the total cost invested.</li>
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4">The Averaging Concept</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  The calculator uses a weighted average. The mathematical formula is quite simple:
                </p>
                <div className="bg-background border border-border p-4 rounded-lg font-mono text-primary text-sm mb-4 overflow-x-auto text-center">
                  Avg = Total Investment Cost ÷ Total Shares
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li><strong>Total Cost:</strong> (Units 1 * Price 1) + (Units 2 * Price 2) + ...</li>
                  <li><strong>Total Shares:</strong> (Units 1 + Units 2 + ...)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4">Why Calculate Your Stock Average?</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🎯</div>
                <strong className="block text-foreground mb-1">Set Profit Targets</strong>
                <span className="text-muted-foreground">You must know your exact break-even point before you can accurately set a sell limit order for profit.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">⚖️</div>
                <strong className="block text-foreground mb-1">Manage Risk</strong>
                <span className="text-muted-foreground">See exactly how much capital you have tied up in a single asset to prevent over-exposure.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">📉</div>
                <strong className="block text-foreground mb-1">Averaging Down</strong>
                <span className="text-muted-foreground">Simulate future purchases to see how significantly a lower-priced buy will pull down your average.</span>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
