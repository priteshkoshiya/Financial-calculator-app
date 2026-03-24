import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';
import { FAQSection } from '@/components/faq-section';

export const metadata = {
  title: 'Bonus & Buyback Details | InvestCalc',
  description: 'Understand stock bonuses and share buybacks and their impact on your investment.',
};

const faqs = [
  {
    question: 'What\'s the difference between bonus shares and stock split?',
    answer:
      'Bonus shares are free shares issued from retained earnings, increasing your total shares. Stock split increases shares while reducing per-share price, but doesn\'t use retained earnings.',
  },
  {
    question: 'What is a share buyback?',
    answer:
      'A buyback is when a company buys back its own shares from the market, reducing the number of outstanding shares. This typically increases EPS and signal confidence in the stock.',
  },
  {
    question: 'Do bonus shares increase my profit?',
    answer:
      'No, bonus shares themselves don\'t increase profit, but they may indicate strong company performance. The proportional ownership remains the same before and after bonus.',
  },
  {
    question: 'How does buyback affect stock price?',
    answer:
      'Buybacks reduce outstanding share count, which can increase EPS (Earnings Per Share). This may lead to stock price appreciation if earnings remain constant.',
  },
];

export default function BonusBuybackPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Bonus & Buyback Details</h1>
            <p className="text-lg text-muted-foreground">
              Understand bonus shares and share buybacks and how they affect your investments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card border border-border">
              <h2 className="text-2xl font-bold text-primary mb-4">Bonus Shares</h2>
              <p className="text-foreground mb-4 leading-relaxed">
                Bonus shares are free additional shares issued to existing shareholders. Companies issue bonuses from retained earnings to reward shareholders and improve liquidity.
              </p>
              <h3 className="font-semibold text-foreground mb-3">Benefits:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Increased shareholding at no cost</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Improved stock liquidity</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Signal of strong financial health</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border border-border">
              <h2 className="text-2xl font-bold text-primary mb-4">Share Buyback</h2>
              <p className="text-foreground mb-4 leading-relaxed">
                In a buyback, the company purchases its own shares from the open market, reducing the number of outstanding shares. This increases ownership percentage for remaining shareholders.
              </p>
              <h3 className="font-semibold text-foreground mb-3">Benefits:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Increased EPS (Earnings Per Share)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Improved ownership percentage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Tax-efficient capital return</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/10 border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Differences</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-secondary/30">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Aspect</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Bonus Shares</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Buyback</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-secondary/20">
                    <td className="py-3 px-4 text-muted-foreground">Source</td>
                    <td className="py-3 px-4 text-muted-foreground">Retained Earnings</td>
                    <td className="py-3 px-4 text-muted-foreground">Company Cash</td>
                  </tr>
                  <tr className="border-b border-secondary/20">
                    <td className="py-3 px-4 text-muted-foreground">Share Count</td>
                    <td className="py-3 px-4 text-muted-foreground">Increases</td>
                    <td className="py-3 px-4 text-muted-foreground">Decreases</td>
                  </tr>
                  <tr className="border-b border-secondary/20">
                    <td className="py-3 px-4 text-muted-foreground">Ownership %</td>
                    <td className="py-3 px-4 text-muted-foreground">Unchanged</td>
                    <td className="py-3 px-4 text-muted-foreground">Increases</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-muted-foreground">Cost to Company</td>
                    <td className="py-3 px-4 text-muted-foreground">No cash outflow</td>
                    <td className="py-3 px-4 text-muted-foreground">Significant</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
