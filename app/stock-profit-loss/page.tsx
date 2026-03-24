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
        <div className="max-w-4xl mx-auto space-y-12">
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
        </div>
      </div>
    </MainLayout>
  );
}
