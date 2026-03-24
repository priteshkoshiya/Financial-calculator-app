import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { StockProfitLossCalculator } from '@/components/stock-profit-loss-calculator';

export const metadata: Metadata = {
  title: 'Stock Profit/Loss Calculator | Bunny Calculator',
  description: 'Calculate your stock trading profit or loss instantly. Enter quantity, buy price, and sell price to get detailed results.',
  keywords: 'stock calculator, profit loss calculator, trading calculator',
};

export default function StockProfitLossPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Stock Profit or Loss Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate your stock trading profit or loss instantly. Enter the number of stocks, buy price, sell price, and the quantity you intend to sell.
            </p>
          </div>

          {/* Calculator Component */}
          <StockProfitLossCalculator />

          {/* Simple Guide Section for SEO */}
          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">How to use the Stock Profit/Loss Calculator?</h2>
            <p className="text-muted-foreground mb-4">
              Finding your trading profit or loss is easy with our tool. Just follow these 4 simple steps:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li><strong>Buy Price:</strong> Enter the price you paid for each share.</li>
              <li><strong>Sell Price:</strong> Enter the price you received (or want to receive) when selling.</li>
              <li><strong>Quantity:</strong> Enter how many shares you bought or sold.</li>
              <li><strong>Check Result:</strong> The calculator will instantly show your total profit or loss amount.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why Calculate Your Stock Profits?</h2>
            <p className="text-muted-foreground">
              Using a reliable stock calculator like <strong>Bunny Calculator</strong> helps you track your trading performance accurately. It takes the guesswork out of your finances, allowing you to see your net returns and plan your future investments more wisely.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
