import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Stock Bonus & Share Buyback Explained | Bunny Calculator',
  description: 'Understand the difference between bonus shares and share buybacks. Learn how these major corporate actions affect stock prices and investor portfolios.',
  keywords: 'what are bonus shares, share buyback vs dividend, stock buyback explained, corporate actions',
};

const faqs = [
  {
    question: 'Are bonus shares really "free"?',
    answer: 'Technically, no. While you do receive additional shares without paying cash, the company\'s overall value hasn\'t changed. Therefore, the stock price immediately drops on the ex-bonus date proportionally to keep your total portfolio value the exact same.'
  },
  {
    question: 'Why do investors like Buybacks?',
    answer: 'Investors love buybacks because when a company deletes its own shares, the existing shareholders suddenly own a slightly larger percentage of the entire company, increasing the Earnings Per Share (EPS).'
  },
  {
    question: 'Which is better: Buybacks or Dividends?',
    answer: 'Buybacks are usually far more tax-efficient. Dividends actively trigger income tax events every year you receive them. Buybacks increase the stock price invisibly, and you only pay tax when you decide to sell the stock.'
  }
];

export default function BonusBuybackPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Bonus Shares vs. Share Buybacks</h1>
            <p className="text-lg text-muted-foreground">
              A clear, professional guide breaking down two of the most popular corporate actions and how they uniquely impact your investments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card border border-border flex flex-col h-full">
              <div className="text-4xl mb-4">🎁</div>
              <h2 className="text-2xl font-bold text-primary mb-4">What Are Bonus Shares?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                Bonus shares are additional shares given to the current shareholders completely free of cost. Instead of paying out a cash dividend, a company with large cash reserves might transfer that cash into the equity pool and issue new shares to represent it.
              </p>
              <h3 className="font-semibold text-foreground mb-3 border-t border-border pt-4">The Major Impacts:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span>You own a larger quantity of shares.</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span>The stock price drops to adjust the ratio.</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span>Improves market liquidity by making individual shares cheaper.</span></li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border border-border flex flex-col h-full">
              <div className="text-4xl mb-4">🧲</div>
              <h2 className="text-2xl font-bold text-primary mb-4">What is a Share Buyback?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                A Share Buyback occurs when a company uses its excess cash to purchase its own shares off the open stock market, effectively "destroying" them. This reduces the total supply of shares floating in the market.
              </p>
              <h3 className="font-semibold text-foreground mb-3 border-t border-border pt-4">The Major Impacts:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span>Reduces share supply, often pushing the price up.</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span>Artificially boosts Earnings Per Share (EPS).</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span>Signals to the market that management thinks the stock is undervalued.</span></li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/10 border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Summary of Differences</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-primary/20 text-left">
                    <th className="py-4 px-4 font-bold text-foreground">Action</th>
                    <th className="py-4 px-4 font-bold text-foreground">Bonus Issue</th>
                    <th className="py-4 px-4 font-bold text-foreground">Share Buyback</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-4 px-4 font-semibold">Total Share Count</td>
                    <td className="py-4 px-4 text-muted-foreground">Increases dramatically</td>
                    <td className="py-4 px-4 text-muted-foreground">Decreases (shrinks supply)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold">Cost to Company</td>
                    <td className="py-4 px-4 text-muted-foreground">No actual cash outflow</td>
                    <td className="py-4 px-4 text-muted-foreground">Spends massive amounts of cash</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold">Effect on EPS</td>
                    <td className="py-4 px-4 text-muted-foreground">Decreases EPS</td>
                    <td className="py-4 px-4 text-muted-foreground">Increases EPS</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold">Investor Sentiment</td>
                    <td className="py-4 px-4 text-muted-foreground">Excitement due to extra shares</td>
                    <td className="py-4 px-4 text-muted-foreground">Highly positive price signals</td>
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
