import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';
import { FAQSection } from '@/components/faq-section';

export const metadata = {
  title: 'Dividend Details Guide | InvestCalc',
  description: 'Learn everything about stock dividends, dividend yield, and dividend taxation.',
};

const faqs = [
  {
    question: 'What is a dividend?',
    answer:
      'A dividend is a payment made by a company to its shareholders, usually from profits. It\'s a way to distribute earnings to investors.',
  },
  {
    question: 'What is dividend yield?',
    answer:
      'Dividend yield is calculated as: (Annual Dividend per Share ÷ Stock Price) × 100. It shows the percentage return you get from dividends alone.',
  },
  {
    question: 'What is ex-dividend date?',
    answer:
      'The ex-dividend date is the date by which you must own the stock to receive the upcoming dividend. If you buy after this date, you won\'t receive that dividend.',
  },
  {
    question: 'Are dividends taxed?',
    answer:
      'Yes, dividends are taxable income. Tax rates vary based on your country and the type of dividend (ordinary or qualified).',
  },
];

export default function DividendDetailsPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Dividend Details</h1>
            <p className="text-lg text-muted-foreground">
              Understand dividends, how they work, and how they impact your investments.
            </p>
          </div>

          <Card className="p-8 bg-primary/10 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Are Dividends?</h2>
            <p className="text-foreground leading-relaxed">
              Dividends are payments made by corporations to their shareholders, typically from company earnings. When a company is profitable, it may choose to distribute a portion of earnings as dividends to reward shareholders for their investment.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border border-border bg-card">
              <h3 className="text-lg font-bold text-primary mb-4">Types of Dividends</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Cash Dividends - Direct money payments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Stock Dividends - Additional shares issued</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Property Dividends - Assets or securities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Scrip Dividends - Promissory notes</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border bg-card">
              <h3 className="text-lg font-bold text-primary mb-4">Important Dates</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Declaration Date - Announced by company</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Ex-Dividend Date - Cutoff to receive dividend</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Record Date - Shareholders on record date qualify</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Payment Date - When dividend is actually paid</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/10 border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Dividend Formula</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Dividend Yield</h3>
                <code className="text-sm bg-background p-3 rounded block text-muted-foreground">
                  Dividend Yield (%) = (Annual Dividend per Share ÷ Stock Price) × 100
                </code>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Total Dividend Received</h3>
                <code className="text-sm bg-background p-3 rounded block text-muted-foreground">
                  Total Dividend = Number of Shares × Dividend per Share
                </code>
              </div>
            </div>
          </Card>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
