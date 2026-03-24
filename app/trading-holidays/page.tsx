import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Stock Market Trading Holidays 2026 | Bunny Calculator',
  description: 'Complete and updated schedule of stock market trading holidays for 2026. Includes Indian exchanges (NSE, BSE) and US exchanges (NYSE, Nasdaq).',
  keywords: 'trading holidays 2026, nse holiday list 2026, bse market holidays, nyse holidays, us stock market closed',
};

const indianHolidays2026 = [
  { date: 'Mon, Jan 26, 2026', occasion: 'Republic Day', market: 'NSE, BSE' },
  { date: 'Tue, Mar 03, 2026', occasion: 'Mahashivratri', market: 'NSE, BSE' },
  { date: 'Mon, Mar 23, 2026', occasion: 'Holi', market: 'NSE, BSE' },
  { date: 'Thu, Apr 02, 2026', occasion: 'Mahavir Jayanti', market: 'NSE, BSE' },
  { date: 'Fri, Apr 03, 2026', occasion: 'Good Friday', market: 'NSE, BSE' },
  { date: 'Tue, Apr 14, 2026', occasion: 'Dr. Baba Saheb Ambedkar Jayanti', market: 'NSE, BSE' },
  { date: 'Fri, May 01, 2026', occasion: 'Maharashtra Day', market: 'NSE, BSE' },
  { date: 'Mon, May 25, 2026', occasion: 'Bakri Id (Id-ul-Zuha)', market: 'NSE, BSE' },
  { date: 'Tue, Jul 14, 2026', occasion: 'Muharram', market: 'NSE, BSE' },
  { date: 'Sat, Aug 15, 2026', occasion: 'Independence Day', market: 'NSE, BSE' },
  { date: 'Mon, Sep 14, 2026', occasion: 'Ganesh Chaturthi', market: 'NSE, BSE' },
  { date: 'Fri, Oct 02, 2026', occasion: 'Mahatma Gandhi Jayanti', market: 'NSE, BSE' },
  { date: 'Tue, Oct 20, 2026', occasion: 'Dussehra', market: 'NSE, BSE' },
  { date: 'Sun, Nov 08, 2026', occasion: 'Diwali (Muhurat Trading)', market: 'NSE, BSE' },
  { date: 'Tue, Nov 24, 2026', occasion: 'Gurunanak Jayanti', market: 'NSE, BSE' },
  { date: 'Fri, Dec 25, 2026', occasion: 'Christmas', market: 'NSE, BSE' },
];

const usNasdaqHolidays2026 = [
  { date: 'Thu, Jan 01, 2026', occasion: 'New Year\'s Day', market: 'Nasdaq, NYSE' },
  { date: 'Mon, Jan 19, 2026', occasion: 'Martin Luther King, Jr. Day', market: 'Nasdaq, NYSE' },
  { date: 'Mon, Feb 16, 2026', occasion: 'Presidents Day', market: 'Nasdaq, NYSE' },
  { date: 'Fri, Apr 03, 2026', occasion: 'Good Friday', market: 'Nasdaq, NYSE' },
  { date: 'Mon, May 25, 2026', occasion: 'Memorial Day', market: 'Nasdaq, NYSE' },
  { date: 'Fri, Jun 19, 2026', occasion: 'Juneteenth National Independence Day', market: 'Nasdaq, NYSE' },
  { date: 'Fri, Jul 03, 2026', occasion: 'Independence Day (Observed)', market: 'Nasdaq, NYSE' },
  { date: 'Mon, Sep 07, 2026', occasion: 'Labor Day', market: 'Nasdaq, NYSE' },
  { date: 'Thu, Nov 26, 2026', occasion: 'Thanksgiving Day', market: 'Nasdaq, NYSE' },
  { date: 'Fri, Dec 25, 2026', occasion: 'Christmas Day', market: 'Nasdaq, NYSE' },
];

const faqs = [
  {
    question: 'What happens to my orders on a market holiday?',
    answer: 'Any unexecuted day orders from the previous day are automatically cancelled. If you place an After Market Order (AMO) on a holiday, it will be executed when the market reopens on the next working day.'
  },
  {
    question: 'Is Muhurat Trading considered a full trading day?',
    answer: 'No. Muhurat Trading happens on the evening of Diwali in the Indian markets and is only open for exactly one hour. It is considered an auspicious time to make token investments.'
  },
  {
    question: 'Do international markets close strictly on US holidays?',
    answer: 'No, every country\'s stock exchange follows its own national holiday calendar. For example, the London Stock Exchange is open on US Thanksgiving.'
  }
];

export default function TradingHolidaysPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Stock Market Trading Holidays 2026
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive calendar of official market closures for the top Indian and US stock exchanges. Plan your trades, options expiry, and settlements ahead of time.
            </p>
          </div>

          <Card className="p-8 bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-2">🇮🇳 Indian Market Holidays (NSE & BSE)</h2>
            <p className="text-muted-foreground text-sm mb-6">Trading is closed on Saturdays, Sundays, and the following national holidays.</p>

            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-secondary/20">
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 font-semibold">Date</th>
                    <th className="py-4 px-6 font-semibold">Occasion</th>
                    <th className="py-4 px-6 font-semibold hidden sm:table-cell">Exchanges Affected</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {indianHolidays2026.map((holiday, idx) => (
                    <tr key={idx} className="hover:bg-primary/5 transition-colors">
                      <td className="py-4 px-6 font-medium text-foreground whitespace-nowrap">{holiday.date}</td>
                      <td className="py-4 px-6 text-muted-foreground">{holiday.occasion}</td>
                      <td className="py-4 px-6 text-muted-foreground text-xs hidden sm:table-cell">{holiday.market}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-8 bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-2">🇺🇸 US Market Holidays (NYSE & Nasdaq)</h2>
            <p className="text-muted-foreground text-sm mb-6">The US stock market follows the federal holiday schedule closely.</p>

            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-secondary/20">
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 font-semibold">Date</th>
                    <th className="py-4 px-6 font-semibold">Occasion</th>
                    <th className="py-4 px-6 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {usNasdaqHolidays2026.map((holiday, idx) => (
                    <tr key={idx} className="hover:bg-primary/5 transition-colors">
                      <td className="py-4 px-6 font-medium text-foreground whitespace-nowrap">{holiday.date}</td>
                      <td className="py-4 px-6 text-muted-foreground">{holiday.occasion}</td>
                      <td className="py-4 px-6 text-xs font-bold text-destructive">Closed</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-primary/5 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2"><span>⏰</span> Early Closures (US Markets)</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The NYSE and Nasdaq occasionally close early at 1:00 PM EST (instead of 4:00 PM) on days preceding major holidays:
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Day After Thanksgiving</span>
                  <strong className="text-primary">1:00 PM Close</strong>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Christmas Eve</span>
                  <strong className="text-primary">1:00 PM Close</strong>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-secondary/10 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2"><span>🛡️</span> Settlement Warning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Remember that trading holidays are not counted as working days for settlement cycles (T+1 or T+2). If you sell a stock exactly one day before a long holiday weekend, the cash will take longer to actually settle into your bank account.
              </p>
            </Card>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
