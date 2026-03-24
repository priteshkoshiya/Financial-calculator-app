import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { RuleOf72Calculator } from '@/components/rule-of-72-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Rule of 72 Calculator | Bunny Calculator',
  description: 'Quickly find out exactly how many years it will take to double your investment based on your expected annual interest rate using the Rule of 72.',
  keywords: 'rule of 72 calculator, time to double investment, compound interest shortcut, double money calculator',
};

const faqs = [
  {
    question: 'What is the Rule of 72?',
    answer: 'The Rule of 72 is a quick, useful mathematical shortcut used to estimate the number of years required to double your invested money at a given annual rate of return.'
  },
  {
    question: 'How accurate is the Rule of 72?',
    answer: 'It is surprisingly accurate for interest rates between 6% and 10%. As rates go much higher (like 20%+) or much lower (like 2%), the rule becomes slightly less exact, but it remains a great mental benchmark.'
  },
  {
    question: 'Does the Rule of 72 work for inflation?',
    answer: 'Yes! It works in reverse too. If inflation is 6%, it will take roughly 12 years (72 ÷ 6) for the purchasing power of your money to be cut exactly in half.'
  }
];

export default function RuleOf72Page() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Rule of 72 Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the financial magic trick that instantly tells you how long it takes to double your money.
            </p>
          </div>

          <RuleOf72Calculator />

          {/* Educational Content for SEO & User Guide */}
          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">How Can the Rule of 72 Help Your Investing?</h2>
            <p className="text-muted-foreground mb-4">
              When planning your financial freedom or retirement, you don't always need complex spreadsheets to see how your money acts. The <strong>Rule of 72 Calculator</strong> acts as a brilliant rule-of-thumb to quickly evaluate the potential of different investments. From your bank's fixed deposit to the stock market, finding the "doubling time" puts returns into an easily understood context.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">How to Use the Math Trick</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>The Simple Step:</strong> Enter the expected annual interest rate of your investment (e.g., enter 12 for 12%).</li>
                  <li><strong>Calculate:</strong> The calculator simply divides the number 72 by your expected rate.</li>
                  <li><strong>The Result:</strong> The answer is the approximate number of years it will take 10,000 to turn into 20,000, or 1 Million into 2 Million.</li>
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">The Golden Equation</h3>
                <div className="bg-background border border-border p-6 rounded-lg font-mono text-primary text-xl mb-4 text-center">
                  Years to Double = <br className="md:hidden" /> 72 ÷ Return Rate
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  Example: 10% return expected.<br/> 72 ÷ 10 = 7.2 Years.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4">Common Average Doubling Times</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="p-4 border border-border rounded-xl border-l-4 border-l-destructive">
                <div className="text-2xl mb-2">🏦</div>
                <strong className="block text-foreground mb-1">Savings Account (~3%)</strong>
                <span className="text-muted-foreground">It will take roughly <strong>24 Years</strong> to double your cash in a standard savings account.</span>
              </div>
              <div className="p-4 border border-border rounded-xl border-l-4 border-l-secondary">
                <div className="text-2xl mb-2">📄</div>
                <strong className="block text-foreground mb-1">Government Bonds (~7%)</strong>
                <span className="text-muted-foreground">It will take roughly <strong>10.3 Years</strong> to double a safer fixed-return bond allocation.</span>
              </div>
              <div className="p-4 border border-border rounded-xl border-l-4 border-l-primary">
                <div className="text-2xl mb-2">📈</div>
                <strong className="block text-foreground mb-1">S&P 500 Index (~10%)</strong>
                <span className="text-muted-foreground">It Historically takes roughly <strong>7.2 Years</strong> to double your money in the broader stock market.</span>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
