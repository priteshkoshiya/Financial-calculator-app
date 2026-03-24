import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Stock Market Trading Holidays 2026 | InvestCalc',
  description: 'Complete list of stock market trading holidays for 2026. Plan your trades accordingly.',
};

const holidays2026 = [
  { date: '26 January', occasion: 'Republic Day', market: 'NSE, BSE' },
  { date: '10 March', occasion: 'Maha Shivaratri', market: 'NSE, BSE' },
  { date: '29 March', occasion: 'Holi', market: 'NSE, BSE' },
  { date: '2 April', occasion: 'Good Friday', market: 'NSE, BSE' },
  { date: '14 April', occasion: 'Dr. B.R. Ambedkar Jayanti', market: 'NSE, BSE' },
  { date: '21 April', occasion: 'Ram Navami', market: 'NSE, BSE' },
  { date: '17 August', occasion: 'Independence Day', market: 'NSE, BSE' },
  { date: '15 September', occasion: 'Milad-Ul-Noor', market: 'NSE, BSE' },
  { date: '2 October', occasion: 'Gandhi Jayanti', market: 'NSE, BSE' },
  { date: '19 October', occasion: 'Dussehra', market: 'NSE, BSE' },
  { date: '30 October', occasion: 'Diwali', market: 'NSE, BSE' },
  { date: '1 November', occasion: 'Diwali (Day 2)', market: 'NSE, BSE' },
  { date: '25 December', occasion: 'Christmas', market: 'NSE, BSE' },
];

const halfDays2026 = [
  { date: '31 December', occasion: 'New Year\'s Eve (Half Day)', market: 'NSE, BSE' },
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
            <h2 className="text-2xl font-bold text-foreground mb-6">Full Market Closure Holidays</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Occasion</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Exchanges</th>
                  </tr>
                </thead>
                <tbody>
                  {holidays2026.map((holiday, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-border/50 ${
                        idx % 2 === 0 ? 'bg-secondary/5' : ''
                      }`}
                    >
                      <td className="py-3 px-4 text-foreground font-medium">{holiday.date}</td>
                      <td className="py-3 px-4 text-muted-foreground">{holiday.occasion}</td>
                      <td className="py-3 px-4 text-muted-foreground">{holiday.market}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-8 bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Half Day Market Closure</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Occasion</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Exchanges</th>
                  </tr>
                </thead>
                <tbody>
                  {halfDays2026.map((day, idx) => (
                    <tr key={idx} className="border-b border-border/50">
                      <td className="py-3 px-4 text-foreground font-medium">{day.date}</td>
                      <td className="py-3 px-4 text-muted-foreground">{day.occasion}</td>
                      <td className="py-3 px-4 text-muted-foreground">{day.market}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-secondary/10 border border-secondary/20">
              <h3 className="font-bold text-foreground mb-3">📊 NSE (National Stock Exchange)</h3>
              <p className="text-muted-foreground text-sm mb-4">
                India's primary stock exchange. Follows the trading holiday calendar above.
              </p>
              <a
                href="https://www.nseindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:opacity-80 transition-opacity text-sm"
              >
                Visit NSE Website →
              </a>
            </Card>

            <Card className="p-6 bg-secondary/10 border border-secondary/20">
              <h3 className="font-bold text-foreground mb-3">📊 BSE (Bombay Stock Exchange)</h3>
              <p className="text-muted-foreground text-sm mb-4">
                India's oldest stock exchange. Follows a similar trading holiday calendar.
              </p>
              <a
                href="https://www.bseindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:opacity-80 transition-opacity text-sm"
              >
                Visit BSE Website →
              </a>
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
