import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { CorporateActionPreview } from '@/components/corporate-action-preview';
import { Card } from '@/components/ui/card';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Dividend Details Guide | Bunny Calculator',
  description: 'A complete beginner\'s guide to understanding stock dividends, calculating dividend yield, and mastering important dividend dates.',
  keywords: 'what is a dividend, dividend yield formula, ex-dividend date, stock dividend definition',
};

const faqs = [
  {
    question: 'Are dividends guaranteed?',
    answer: 'No. Except for certain preferred stocks, a company\'s board of directors can choose to cut, suspend, or increase dividends depending on the company\'s financial performance and cash flow.'
  },
  {
    question: 'How is Dividend Yield different from the Dividend Amount?',
    answer: 'The Dividend Amount is the flat cash value paid per share (e.g., $2.00 per share). The Dividend Yield is that amount expressed as a percentage of the current stock price, which allows you to compare the payout against other investments.'
  },
  {
    question: 'Do I have to pay tax on dividends?',
    answer: 'In most tax jurisdictions, yes. They are typically treated either as ordinary income or qualified dividends (which sometimes get a lower capital gains tax rate). Always consult a local tax professional.'
  }
];

export default function DividendDetailsPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <CorporateActionPreview type="dividend" />
          
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">The Complete Guide to Dividends</h1>
            <p className="text-lg text-muted-foreground">
              Learn how corporate dividends work, how to calculate your dividend yields, and the key dates you must know before investing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card border border-border">
              <h2 className="text-2xl font-bold text-primary mb-4">What is a Dividend?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                A dividend is a cash reward, or sometimes stock reward, paid out by a company to its shareholders. When a publicly traded company generates strong profits, they can choose to either reinvest that money back into the business for growth, or distribute a portion of that cash directly to the people who own the stock.
              </p>
              <p className="text-muted-foreground">
                Mature, stable companies in sectors like utilities or consumer staples are known for paying regular quarterly dividends, making them highly attractive to passive income investors.
              </p>
            </Card>

            <Card className="p-8 bg-card border border-border">
              <h2 className="text-2xl font-bold text-primary mb-4">Popular Types of Dividends</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3 items-start">
                  <span className="text-xl">💵</span>
                  <div>
                    <strong className="text-foreground block">Cash Dividends</strong>
                    The most common form. The company deposits physical cash straight into your brokerage or bank account.
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-xl">📈</span>
                  <div>
                    <strong className="text-foreground block">Stock Dividends</strong>
                    Instead of cash, the company issues additional free shares to you.
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/10 border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Mastering The 4 Important Dates</h2>
            <p className="text-muted-foreground mb-6">
              You can't just buy a stock the day before a payout and expect to get paid. You must understand these four chronological dates:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-background border border-border p-4 rounded-lg">
                <strong className="text-primary block mb-1">1. Declaration Date</strong>
                <span className="text-sm text-muted-foreground">The day the company's board officially announces they will pay a dividend, determining the amount and the future dates.</span>
              </div>
              <div className="bg-background border border-border p-4 rounded-lg">
                <strong className="text-primary block mb-1">2. Ex-Dividend Date</strong>
                <span className="text-sm text-muted-foreground">The most crucial date! You MUST purchase the stock BEFORE this date to be eligible for the payout. If you buy on or after this date, the previous owner gets the money.</span>
              </div>
              <div className="bg-background border border-border p-4 rounded-lg">
                <strong className="text-primary block mb-1">3. Record Date</strong>
                <span className="text-sm text-muted-foreground">Usually one business day after the ex-dividend date. The company reviews its ledger to see exactly who currently owns the shares.</span>
              </div>
              <div className="bg-background border border-border p-4 rounded-lg">
                <strong className="text-primary block mb-1">4. Payment Date</strong>
                <span className="text-sm text-muted-foreground">The joyful day when the cash is actually deposited into your account.</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-primary/5 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">How to Calculate Dividend Yield</h2>
            <p className="text-muted-foreground mb-6">
              To compare a dividend stock against a bank Savings Account or Fixed Deposit, you need to calculate its yield. This tells you what percentage return you're getting strictly from the payout.
            </p>
            <div className="bg-card border border-border p-4 rounded-lg font-mono text-primary text-center mb-4 overflow-x-auto text-sm md:text-base">
              Dividend Yield = (Annual Dividend Paid Per Share ÷ Current Stock Price) × 100
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Example:</strong> A company pays $4 a year in dividends. The stock currently trades at $100. <br/>
              ($4 ÷ $100) × 100 = <strong>4% Dividend Yield</strong>.
            </p>
          </Card>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
