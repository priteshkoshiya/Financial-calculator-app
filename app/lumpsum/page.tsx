import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { LumpsumCalculator } from '@/components/lumpsum-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Lumpsum Calculator | Bunny Calculator',
  description: 'Calculate the future value of a one-time lumpsum mutual fund or fixed deposit investment. Simple compound return calculator.',
  keywords: 'lumpsum calculator, one time investment calculator, mutual fund return calculator, fd calculator',
};

const faqs = [
  {
    question: 'What is a lumpsum investment?',
    answer: 'A lumpsum investment is when you invest a single, large sum of money all at once, rather than investing smaller amounts regularly over time (like in an SIP).'
  },
  {
    question: 'How does compounding work with a lumpsum investment?',
    answer: 'With a lumpsum, your entire capital starts earning interest from day one. In subsequent years, the interest you earned in previous years will also begin to earn interest itself—this is the power of compounding.'
  },
  {
    question: 'Should I invest through SIP or Lumpsum?',
    answer: 'If you have a large amount of cash available right now (like a bonus, inheritance, or savings), investing it all at once historically outperforms regular investing because the money spends more time in the market. SIPs are better if you earn a regular monthly salary.'
  }
];

export default function LumpsumPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Lumpsum Calculator (One-Time Investment)
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate the maturity value of a single, one-time investment using the power of annual compounding.
            </p>
          </div>

          <LumpsumCalculator />

          {/* Educational Content for SEO & User Guide */}
          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">What the Lumpsum Calculator Does</h2>
            <p className="text-muted-foreground mb-4">
              If you have a lump sum of money ready to invest, figuring out its future worth is critical for goal planning. Whether you're considering a mutual fund, ETF, or a fixed deposit (FD), the <strong>Lumpsum Calculator</strong> instantly gives you precise results.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">How to Use</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>Lumpsum Amount:</strong> Provide the total one-time cash you wish to commit today.</li>
                  <li><strong>Interest Rate:</strong> Enter your expected annual return (e.g. 7% for FDs, 12% for mutual funds).</li>
                  <li><strong>Time Period:</strong> The number of years you plan to leave the money untouched.</li>
                  <li><strong>Calculate:</strong> See your potential future wealth created from compounding.</li>
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4">The Compounding Formula</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  The calculator uses the standard compound interest mathematical formula:
                </p>
                <div className="bg-background border border-border p-4 rounded-lg font-mono text-primary text-sm mb-4 text-center overflow-x-auto">
                  FV = P × (1 + r)^n
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li><strong>FV:</strong> Future Value (Maturity Amount)</li>
                  <li><strong>P:</strong> Principal Investment Amount</li>
                  <li><strong>r:</strong> Annual interest rate (in decimal)</li>
                  <li><strong>n:</strong> Total number of years invested</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4">The Magic of Lumpsum Investing</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">⏱️</div>
                <strong className="block text-foreground mb-1">Time in the Market</strong>
                <span className="text-muted-foreground">The earlier you put a large sum into the market, the longer that entire amount can compound.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🚀</div>
                <strong className="block text-foreground mb-1">Maximized Returns</strong>
                <span className="text-muted-foreground">Unlike SIPs where money is slowly dripped in, a lump sum allows 100% of your money to work immediately.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🧘</div>
                <strong className="block text-foreground mb-1">Invest and Forget</strong>
                <span className="text-muted-foreground">Requires zero ongoing maintenance or tracking. Simply deposit your funds and let the years do the work.</span>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
