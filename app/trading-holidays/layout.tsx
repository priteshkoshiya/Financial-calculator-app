import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stock Market Trading Holidays 2026 | Bunny Calculator',
  description: 'Complete and updated schedule of stock market trading holidays for 2026. Includes Indian exchanges (NSE, BSE) and US exchanges (NYSE, Nasdaq).',
  keywords: 'trading holidays 2026, nse holiday list 2026, bse market holidays, nyse holidays, us stock market closed',
};

export default function TradingHolidaysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
