import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { SIPCalculator } from '@/components/sip-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'SIP Calculator | Bunny Calculator',
  description: 'Calculate your Systematic Investment Plan (SIP) returns. Plan your mutual fund investments and watch your wealth grow with compounding.',
  keywords: 'sip calculator, systematic investment plan, mutual fund return calculator, investment planning',
};

const faqs = [
  {
    question: 'What is SIP (Systematic Investment Plan)?',
    answer: 'SIP is a disciplined investment strategy where you invest a fixed amount regularly (usually monthly) in mutual funds or market assets. It mitigates market volatility by averaging out your purchase costs.'
  },
  {
    question: 'How is the SIP maturity amount calculated?',
    answer: 'Our calculator uses the standard future value of annuity formula: FV = P × [((1 + r)^n - 1) / r] × (1 + r). It assumes continuous compounding at your expected monthly interest rate.'
  },
  {
    question: 'What return rate should I assume?',
    answer: 'For long-term equity mutual funds, a realistic estimate is historically between 10% to 12%. For balanced funds, 8% to 10%, and for debt funds, 5% to 7% is generally expected.'
  }
];

export default function SIPPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              SIP Calculator (Systematic Investment Plan)
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate the maturity value of your systematic investment plan and discover the power of compounding.
            </p>
          </div>

          <SIPCalculator />

          {/* Educational Content for SEO & User Guide */}
          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">How Does the SIP Calculator Help You?</h2>
            <p className="text-muted-foreground mb-4">
              A Systematic Investment Plan allows you to build significant long-term wealth by investing small amounts regularly.
              Our <strong>SIP Calculator</strong> takes the guesswork out of financial planning by providing an accurate projection of your expected returns.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">How to Use</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>Monthly Investment:</strong> Enter your planned monthly savings amount.</li>
                  <li><strong>Annual Rate:</strong> Input a realistic expected yearly return rate (e.g., 12% for equity).</li>
                  <li><strong>Time Period:</strong> Set your investment duration in years. For compounding to work best, longer periods are recommended.</li>
                  <li><strong>Calculate:</strong> See your estimated accumulated wealth instantly!</li>
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4">The SIP Formula</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  This calculator estimates maturity value based on:
                </p>
                <div className="bg-background border border-border p-4 rounded-lg font-mono text-primary text-sm mb-4">
                  M = P × [((1 + i)^n - 1) / i] × (1 + i)
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li><strong>M:</strong> Maturity Amount</li>
                  <li><strong>P:</strong> Monthly investment amount</li>
                  <li><strong>i:</strong> Monthly interest rate (Annual Rate ÷ 12)</li>
                  <li><strong>n:</strong> Total number of months</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4">Key Benefits of SIP</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">📈</div>
                <strong className="block text-foreground mb-1">Rupee Cost Averaging</strong>
                <span className="text-muted-foreground">Automatically buy more units when markets are low to lower your average price per unit.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">⏱️</div>
                <strong className="block text-foreground mb-1">Power of Compounding</strong>
                <span className="text-muted-foreground">You earn returns on your initial principal AND on the accumulated returns from previous periods.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🎯</div>
                <strong className="block text-foreground mb-1">Financial Discipline</strong>
                <span className="text-muted-foreground">Automating your investments ensures you build a steady habit of wealth generation tracking.</span>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
