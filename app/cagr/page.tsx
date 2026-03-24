import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { CagrCalculator } from '@/components/cagr-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'CAGR Calculator | Bunny Calculator',
  description: 'Calculate the Compound Annual Growth Rate (CAGR) of your investments. Track real yearly growth and make better financial decisions.',
  keywords: 'cagr calculator, compound annual growth rate, mutual fund returns, stock investment growth',
};

const faqs = [
  {
    question: 'What is Compound Annual Growth Rate (CAGR)?',
    answer: 'CAGR is a measure of an investment\'s annual growth rate over time, assuming that the investment has been compounding steadily over that timeframe. It smooths out volatility to give you a single average rate.'
  },
  {
    question: 'Why should I use CAGR instead of absolute returns?',
    answer: 'Absolute returns don\'t account for time. For example, a 50% return looks great, but if it took 10 years to achieve, the annual growth is quite low. CAGR tells you exactly how much your money grew per year.'
  },
  {
    question: 'What is the formula for calculating CAGR?',
    answer: 'The mathematical formula for CAGR is: CAGR = [(Final Value / Initial Value) ^ (1 / Number of Years)] - 1. You convert this decimal result into a percentage.'
  }
];

export default function CagrPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              CAGR Calculator (Compound Annual Growth Rate)
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate the true Compound Annual Growth Rate of your investments to see how fast your money is actually growing over time.
            </p>
          </div>

          <CagrCalculator />

          {/* Educational Content for SEO & User Guide */}
          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">How Does the CAGR Calculator Work?</h2>
            <p className="text-muted-foreground mb-4">
              Our <strong>CAGR Calculator</strong> helps investors measure the performance of their mutual funds, stocks, or overall portfolio. 
              Because financial markets fluctuate wildly every year, CAGR provides a smoothed "average" yearly return rate, making it the most accurate way to compare different investments.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">How to Use</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>Initial Value:</strong> Enter the amount of money you originally invested.</li>
                  <li><strong>Final Value:</strong> Enter the current or final value of that investment.</li>
                  <li><strong>Time Period:</strong> The exact total number of years you held the investment.</li>
                  <li><strong>Calculate:</strong> The calculator outputs your true annualized compounding rate.</li>
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4">The CAGR Formula Explained</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  This tool uses the standard compound formula:
                </p>
                <div className="bg-background border border-border p-4 rounded-lg font-mono text-primary text-sm mb-4 overflow-x-auto">
                  CAGR = [(FV / PV) ^ (1 / t)] - 1
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li><strong>FV:</strong> Final Value (ending balance)</li>
                  <li><strong>PV:</strong> Present Value (starting amount)</li>
                  <li><strong>t:</strong> Time period in years</li>
                  <li><strong>Note:</strong> Multiply by 100 for the percentage %</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4">Why is CAGR Important?</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">📊</div>
                <strong className="block text-foreground mb-1">Peer Comparison</strong>
                <span className="text-muted-foreground">Standardized metric allowing you to compare a stock vs a bond or real estate fairly.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">📉</div>
                <strong className="block text-foreground mb-1">Smooths Volatility</strong>
                <span className="text-muted-foreground">Ignores intermediate drops and spikes, focusing purely on start and end dates.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🔍</div>
                <strong className="block text-foreground mb-1">Performance Tracking</strong>
                <span className="text-muted-foreground">Easily check if your portfolio manager is beating market benchmarks like the S&P 500.</span>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
