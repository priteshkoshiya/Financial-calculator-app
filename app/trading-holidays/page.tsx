import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Stock Market Trading Holidays 2026 | InvestCalc',
  description: 'Complete list of stock market trading holidays for 2026. Plan your trades accordingly.',
};

const indianHolidays2026 = [
  { date: 'Mon, Jan 26, 2026', occasion: 'Republic Day', market: 'NSE, BSE' },
  { date: 'Tue, Mar 03, 2026', occasion: 'Holi', market: 'NSE, BSE' },
  { date: 'Thu, Mar 26, 2026', occasion: 'Shri Rama Navami', market: 'NSE, BSE' },
  { date: 'Tue, Mar 31, 2026', occasion: 'Shri Mahavir Jayanti', market: 'NSE, BSE' },
  { date: 'Fri, Apr 03, 2026', occasion: 'Good Friday', market: 'NSE, BSE' },
  { date: 'Tue, Apr 14, 2026', occasion: 'Dr. Baba Saheb Ambedkar Jayanti', market: 'NSE, BSE' },
  { date: 'Fri, May 01, 2026', occasion: 'Maharashtra Day', market: 'NSE, BSE' },
  { date: 'Thu, May 28, 2026', occasion: 'Bakri Id', market: 'NSE, BSE' },
  { date: 'Fri, Jun 26, 2026', occasion: 'Muharram', market: 'NSE, BSE' },
  { date: 'Mon, Sep 14, 2026', occasion: 'Ganesh Chaturthi', market: 'NSE, BSE' },
  { date: 'Fri, Oct 02, 2026', occasion: 'Mahatma Gandhi Jayanti', market: 'NSE, BSE' },
  { date: 'Tue, Oct 20, 2026', occasion: 'Dussehra', market: 'NSE, BSE' },
  { date: 'Tue, Nov 10, 2026', occasion: 'Diwali - Balipratipada', market: 'NSE, BSE' },
  { date: 'Tue, Nov 24, 2026', occasion: 'Prakash Gurpurb - Sri Guru Nanak Dev', market: 'NSE, BSE' },
  { date: 'Fri, Dec 25, 2026', occasion: 'Christmas', market: 'NSE, BSE' },
];

const usNasdaqHolidays2026 = [
  { date: 'Thu, Jan 01, 2026', occasion: 'New Year\'s Day', market: 'Nasdaq, NYSE' },
  { date: 'Mon, Jan 19, 2026', occasion: 'MLK, Jr. Day', market: 'Nasdaq, NYSE' },
  { date: 'Mon, Feb 16, 2026', occasion: 'Presidents Day', market: 'Nasdaq, NYSE' },
  { date: 'Fri, Apr 03, 2026', occasion: 'Good Friday', market: 'Nasdaq, NYSE' },
  { date: 'Mon, May 25, 2026', occasion: 'Memorial Day', market: 'Nasdaq, NYSE' },
  { date: 'Fri, Jun 19, 2026', occasion: 'Juneteenth', market: 'Nasdaq, NYSE' },
  { date: 'Fri, Jul 03, 2026', occasion: 'Independence Day (Observed)', market: 'Nasdaq, NYSE' },
  { date: 'Mon, Sep 07, 2026', occasion: 'Labor Day', market: 'Nasdaq, NYSE' },
  { date: 'Thu, Nov 26, 2026', occasion: 'Thanksgiving Day', market: 'Nasdaq, NYSE' },
  { date: 'Fri, Dec 25, 2026', occasion: 'Christmas Day', market: 'Nasdaq, NYSE' },
];

const earlyClosures2026 = [
  { date: 'Fri, Nov 27, 2026', occasion: 'Day After Thanksgiving (Early Close 1:00 PM)', market: 'Nasdaq, NYSE' },
  { date: 'Thu, Dec 24, 2026', occasion: 'Christmas Eve (Early Close 1:00 PM)', market: 'Nasdaq, NYSE' },
];

export default function TradingHolidaysPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Stock Market Trading Holidays 2026
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete list of market holidays when trading is closed at NSE and BSE.
            </p>
          </div>

          <Card className="p-8 bg-primary/10 border border-primary/20">
            <h2 className="text-xl font-bold text-foreground mb-4">Important Note</h2>
            <p className="text-foreground">
              On trading holidays, the stock exchange is completely closed and no trading takes place. Orders cannot be placed, and open positions remain unchanged. Always check the official NSE and BSE websites for any updates or changes.
            </p>
          </Card>

          <Card className="p-8 bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">🇮🇳 Indian Market Holidays (NSE, BSE)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" role="table">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">#</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Occasion</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Exchanges</th>
                  </tr>
                </thead>
                <tbody>
                  {indianHolidays2026.map((holiday, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-border/50 ${
                        idx % 2 === 0 ? 'bg-secondary/5' : ''
                      }`}
                    >
                      <td className="py-3 px-4 text-foreground font-medium">{idx + 1}</td>
                      <td className="py-3 px-4 text-foreground font-medium">{holiday.date}</td>
                      <td className="py-3 px-4 text-muted-foreground">{holiday.occasion}</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs">{holiday.market}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-8 bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">🇺🇸 USA Market Holidays (Nasdaq, NYSE)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" role="table">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">#</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Holiday Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {usNasdaqHolidays2026.map((holiday, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-border/50 ${
                        idx % 2 === 0 ? 'bg-secondary/5' : ''
                      }`}
                    >
                      <td className="py-3 px-4 text-foreground font-medium">{idx + 1}</td>
                      <td className="py-3 px-4 text-foreground font-medium">{holiday.date}</td>
                      <td className="py-3 px-4 text-muted-foreground">{holiday.occasion}</td>
                      <td className="py-3 px-4 text-xs text-primary font-semibold">Closed</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-8 bg-yellow-500/10 border border-yellow-500/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">⏰ USA Market Early Closures</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" role="table">
                <thead>
                  <tr className="border-b border-yellow-500/30">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">#</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Occasion</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Close Time</th>
                  </tr>
                </thead>
                <tbody>
                  {earlyClosures2026.map((day, idx) => (
                    <tr key={idx} className="border-b border-yellow-500/20">
                      <td className="py-3 px-4 text-foreground font-medium">{idx + 1}</td>
                      <td className="py-3 px-4 text-foreground font-medium">{day.date}</td>
                      <td className="py-3 px-4 text-muted-foreground">{day.occasion}</td>
                      <td className="py-3 px-4 text-xs font-semibold text-yellow-600">1:00 PM ET</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-secondary/10 border border-secondary/20">
              <h3 className="font-bold text-foreground mb-3">🇮🇳 Indian Exchanges</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Both NSE (National Stock Exchange) and BSE (Bombay Stock Exchange) follow the same holiday calendar for Indian markets.
              </p>
              <div className="space-y-2">
                <a
                  href="https://www.nseindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary font-semibold hover:opacity-80 transition-opacity text-sm"
                >
                  NSE Official Website →
                </a>
                <a
                  href="https://www.bseindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary font-semibold hover:opacity-80 transition-opacity text-sm"
                >
                  BSE Official Website →
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-secondary/10 border border-secondary/20">
              <h3 className="font-bold text-foreground mb-3">🇺🇸 US Exchanges</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Nasdaq and NYSE follow the US Federal holiday calendar. Check exchange websites for early closure updates.
              </p>
              <div className="space-y-2">
                <a
                  href="https://www.nasdaq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary font-semibold hover:opacity-80 transition-opacity text-sm"
                >
                  Nasdaq Official Website →
                </a>
                <a
                  href="https://www.nyse.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary font-semibold hover:opacity-80 transition-opacity text-sm"
                >
                  NYSE Official Website →
                </a>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-yellow-500/10 border border-yellow-500/20">
            <h2 className="text-xl font-bold text-foreground mb-4">⚠️ Important Reminders</h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span>
                <span>Holiday calendars can change. Always check official exchange websites for updates.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span>
                <span>International markets may follow different holiday schedules.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span>
                <span>Plan your trading strategy keeping holidays in mind.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span>
                <span>Forward holdings are not affected by market holidays.</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
