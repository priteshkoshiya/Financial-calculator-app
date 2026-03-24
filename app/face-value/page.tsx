import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Face Value Split & Demerger Guide | Bunny Calculator',
  description: 'Easily understand complex corporate actions like face value splits, reverse splits, and company demergers. Learn how they affect your stock market investments.',
  keywords: 'face value of shares, stock demerger explained, face value split, what is face value',
};

const faqs = [
  {
    question: 'How is Face Value different from Market Value?',
    answer: 'Face Value is an arbitrary, fixed number assigned by the company when it first issues shares (e.g., ₹10). Market Value is the actual price the stock trades at right now on the stock exchange based on supply and demand.'
  },
  {
    question: 'Does a Face Value split change my total investment amount?',
    answer: 'No. Just like cutting a pizza into smaller slices, you simply own more shares at a proportionally lower price. Your total amount of money stays exactly the same.'
  },
  {
    question: 'Why do companies perform a Demerger?',
    answer: 'Companies demerge to spin-off unrelated business divisions into their own independent companies. This allows each new company to focus squarely on its own industry, often unlocking hidden value for shareholders.'
  }
];

export default function FaceValuePage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Understanding Face Value Splits & Demergers</h1>
            <p className="text-lg text-muted-foreground">
              A beginner-friendly guide to making sense of corporate restructuring events and what they mean for your portfolio.
            </p>
          </div>

          <Card className="p-8 bg-card border border-border">
            <h2 className="text-2xl font-bold text-primary mb-4">What is Face Value (FV)?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              When a company is first created, it issues shares to its founders. Each of these original shares is assigned a nominal "Face Value" (often ₹1, ₹2, or ₹10). This number is strictly used for the company's internal accounting and calculating dividends.
            </p>
            <p className="text-muted-foreground">
              <strong>Important:</strong> Dividends are usually announced as a percentage of the Face Value, NOT the market price. For example, a 100% dividend on a stock with a ₹10 Face Value means a ₹10 payout per share.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-secondary/10 border border-secondary/20 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-foreground mb-4">Face Value Splits</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                If a company's stock price becomes too expensive for average investors to buy, the company might split the Face Value.
              </p>
              <h3 className="font-semibold text-foreground mb-3 border-t border-border pt-4">Example Scenario:</h3>
              <div className="bg-background border border-border p-4 rounded-lg text-sm text-foreground">
                <ul className="space-y-2">
                  <li><strong>Before:</strong> You own 100 shares. FV = ₹10. Market Price = ₹2,000.</li>
                  <li><strong>The Action:</strong> The company announces a 1-to-2 split.</li>
                  <li><strong>After:</strong> You now own 200 shares. FV = ₹5. Market Price = ₹1,000.</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-secondary/10 border border-secondary/20 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-foreground mb-4">Company Demergers</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                A Demerger is when a large conglomerate decides to break up into two or more separate, independent companies.
              </p>
              <h3 className="font-semibold text-foreground mb-3 border-t border-border pt-4">Example Scenario:</h3>
              <div className="bg-background border border-border p-4 rounded-lg text-sm text-foreground">
                <ul className="space-y-2">
                  <li><strong>The Action:</strong> 'MegaCorp' demerges its hotel business into 'MegaHotels'.</li>
                  <li><strong>The Result:</strong> If you owned MegaCorp shares, you will automatically receive free shares of MegaHotels deposited directly into your account based on an approved ratio.</li>
                </ul>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-primary/5 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">How do these events impact you?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2"><span>✂️</span> Splits Increase Liquidity</h3>
                <p className="text-sm text-muted-foreground">
                  Splits make the stock cheaper per share, drawing in more retail investors. While it doesn't change fundamentals, it often causes a short-term psychological price boost.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2"><span>🧩</span> Demergers Unlock Value</h3>
                <p className="text-sm text-muted-foreground">
                  Often, the combined market price of the two newly separated companies ends up being higher than the original single parent company, benefiting the shareholder.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2"><span>🛡️</span> Mathematical Neutrality</h3>
                <p className="text-sm text-muted-foreground">
                  Neither action requires you to pay extra money. They are accounting transformations that automatically update in your brokerage portfolio.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2"><span>📊</span> Tax Implications</h3>
                <p className="text-sm text-muted-foreground">
                  Receiving demerged shares usually isn't a taxable event initially, but your cost-basis mathematically splits between them for when you eventually sell.
                </p>
              </div>
            </div>
          </Card>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
