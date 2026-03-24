import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { EMICalculator } from '@/components/emi-calculator';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'EMI Calculator | Bunny Calculator',
  description: 'Calculate your Equated Monthly Installment (EMI) for home loans, car loans, and personal loans. Easily estimate your total interest payable.',
  keywords: 'emi calculator, loan calculator, regular loan payment, monthly installment calculator, home loan emi, car loan emi',
};

const faqs = [
  {
    question: 'What does EMI stand for?',
    answer: 'EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender at a specified date each month to pay off a loan over a set number of years.'
  },
  {
    question: 'What is included in an EMI payment?',
    answer: 'Your EMI consists of two parts: the principal amount and the accrued interest on the outstanding loan balance. During the early years of your loan, interest forms a larger part of your EMI.'
  },
  {
    question: 'How is EMI calculated mathematically?',
    answer: 'The standard formula is: EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1], where P is the principal loan amount, r is the monthly interest rate, and n is the total number of monthly payments.'
  }
];

export default function EMIPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              EMI Calculator (Equated Monthly Installment)
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate your exact monthly EMI, total payable amount, and total interest on any personal or home loan.
            </p>
          </div>

          <EMICalculator />

          {/* Educational Content for SEO & User Guide */}
          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">How to Use the EMI Calculator</h2>
            <p className="text-muted-foreground mb-4">
              Taking out a loan is a major financial decision. Our <strong>EMI Calculator</strong> breaks down the numbers mathematically so you always know exactly how much you're paying in interest vs. principal. Use it before applying for personal loans, auto loans, or mortgages.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Step-by-Step Guide</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>Loan Amount:</strong> Enter the total principal you wish to borrow.</li>
                  <li><strong>Interest Rate:</strong> Enter the Annual Percentage Rate (APR) quoted by your bank.</li>
                  <li><strong>Loan Period:</strong> Enter the duration of the loan in months (e.g., 5 years = 60 months).</li>
                  <li><strong>Calculate:</strong> The calculator instantly breaks down your payment obligations.</li>
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4">The EMI Formula</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  This tool uses the standard amortization formula:
                </p>
                <div className="bg-background border border-border p-4 rounded-lg font-mono text-primary text-sm mb-4 overflow-x-auto">
                  E = P × R × [(1+R)^N / ((1+R)^N - 1)]
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li><strong>E:</strong> Monthly EMI Amount</li>
                  <li><strong>P:</strong> Principal Loan Amount</li>
                  <li><strong>R:</strong> Monthly Interest Rate (Annual Rate ÷ 12/100)</li>
                  <li><strong>N:</strong> Number of Repayment Months</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4">Why Calculate Your EMI Beforehand?</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">💡</div>
                <strong className="block text-foreground mb-1">Budget Planning</strong>
                <span className="text-muted-foreground">Knowing your EMI helps you plan your monthly expenses correctly without financial stress.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">🏦</div>
                <strong className="block text-foreground mb-1">Compare Loan Offers</strong>
                <span className="text-muted-foreground">By adjusting rates and tenures, you can evaluate which bank offers the best deal.</span>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">📉</div>
                <strong className="block text-foreground mb-1">Understand Interest</strong>
                <span className="text-muted-foreground">See exactly how much extra money you are paying to the bank over the loan's lifetime.</span>
              </div>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
