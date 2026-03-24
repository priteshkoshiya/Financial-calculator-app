import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Bunny Calculator',
  description: 'Get answers to all your common questions regarding Bunny Calculator, our financial calculation formulas, and basic investing concepts.',
  keywords: 'bunny calculator faq, calculator help, financial questions, tool support',
};

const generalFAQs = [
  {
    question: 'Are all Bunny Calculator tools completely free?',
    answer: 'Yes! We firmly believe that everyone deserves high-quality tools for financial planning. We have no hidden charges, absolutely zero paywalls, and we never ask for your credit card.',
  },
  {
    question: 'Do I need to create an account or login to use the calculators?',
    answer: 'No registration, no password, and no logging in. You simply open the website on your desktop or mobile browser and start calculating instantly.',
  },
  {
    question: 'Are the mathematical calculations accurate?',
    answer: 'We use industry-standard banking formulas directly within our software code. All outputs are highly accurate mathematically based precisely on the inputs you provide. However, you should still consider them estimates, as they cannot account for real-world inflation variables or dynamic fees.',
  },
  {
    question: 'Do you save my financial data or numbers?',
    answer: 'No. Everything is computed instantly on your own device. We do not store, track, or save your entered investment numbers on our servers, ensuring total privacy.',
  },
];

const stockFAQs = [
  {
    question: 'How exactly does the Stock Profit & Loss calculator work?',
    answer: 'It uses a strict, zero-fuss formula: (Sell Price - Buy Price) × Number of Shares. If you provide your broker\'s trading commission/fees, it deducts them to give you the Net Realized Profit.',
  },
  {
    question: 'Can the Stock Average Calculator handle more than 2 purchases?',
    answer: 'Yes! Our tool is built dynamically. You can click the "+ Add Purchase" button as many times as you like to calculate an average down price across 10 or even 20 different trade executions.',
  },
  {
    question: 'Why do Stock Splits lower my stock price?',
    answer: 'During a split, the company issues more shares without capturing more value from the market. Because your "slice" is suddenly cut in half, the price per share must drop exactly by half so that the total monetary value of your portfolio doesn\'t artificially change.',
  },
];

const investmentFAQs = [
  {
    question: 'What is the main benefit of an SIP vs Lumpsum?',
    answer: 'An SIP (Systematic Investment Plan) naturally forces you to buy at both high and low market prices over time, a concept called "Rupee Cost Averaging." Lumpsums put all your money in at once, exposing you heavily to whatever the market does tomorrow.',
  },
  {
    question: 'Why do I need to calculate CAGR instead of absolute returns?',
    answer: 'If an investment goes up 50% over 10 years, that looks great at first glance. But a 50% absolute return over a decade is roughly just a 4.1% CAGR per year. CAGR reveals the true "speed" of your money\'s growth.',
  },
  {
    question: 'Is the Rule of 72 fully accurate?',
    answer: 'The Rule of 72 is technically an estimation curve, but it is remarkably accurate for all standard market interest rates between 5% and 12%. It is the best mental math shortcut an investor can learn.',
  },
];

export default function FAQPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center pb-8 border-b border-border">
            <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our comprehensive financial calculators.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🌐</span>
              <h2 className="text-2xl font-bold text-primary">Platform & General Use</h2>
            </div>
            <FAQSection faqs={generalFAQs} />
          </div>
          
          <div className="pt-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📈</span>
              <h2 className="text-2xl font-bold text-primary">Stocks Trading</h2>
            </div>
            <FAQSection faqs={stockFAQs} />
          </div>
          
          <div className="pt-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🏦</span>
              <h2 className="text-2xl font-bold text-primary">Mutual Funds & Investing</h2>
            </div>
            <FAQSection faqs={investmentFAQs} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
