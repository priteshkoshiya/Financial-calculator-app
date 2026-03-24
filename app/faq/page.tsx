import { MainLayout } from '@/components/main-layout';
import { FAQSection } from '@/components/faq-section';

export const metadata = {
  title: 'FAQ | Bunny Calculator',
  description: 'Frequently asked questions about Bunny Calculator and financial calculators',
};

const generalFAQs = [
  {
    question: 'Are Bunny Calculator calculators really free?',
    answer: 'Yes, all Bunny Calculator calculators are 100% free. There are no hidden charges, no registration required, and no premium versions.',
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No, you don\'t need to create an account. All calculators are freely accessible without any registration.',
  },
  {
    question: 'Are the calculations accurate?',
    answer: 'Yes, we use industry-standard financial formulas for all calculations. However, always verify results with professional financial advisors.',
  },
  {
    question: 'Can I use these calculators for professional advice?',
    answer: 'No, Bunny Calculator is an educational platform only. Always consult with qualified financial advisors before making investment decisions.',
  },
];

const stockFAQs = [
  {
    question: 'How is stock profit/loss calculated?',
    answer: 'Stock profit/loss = (Sell Price - Buy Price) × Number of Shares. If the result is positive, it\'s a profit. If negative, it\'s a loss.',
  },
  {
    question: 'What is a stock split?',
    answer: 'A stock split increases the number of shares while reducing the per-share price proportionally. For example, a 1:2 split doubles your shares at half the price.',
  },
  {
    question: 'What is a bonus share?',
    answer: 'Bonus shares are free shares given to existing shareholders. They are issued from retained earnings and don\'t require additional investment.',
  },
];

const investmentFAQs = [
  {
    question: 'What is SIP and why should I invest through SIP?',
    answer: 'SIP (Systematic Investment Plan) is investing a fixed amount regularly. Benefits include rupee cost averaging, reduced market timing risk, and disciplined investing habits.',
  },
  {
    question: 'What is CAGR and why is it important?',
    answer: 'CAGR (Compound Annual Growth Rate) shows the average annual growth rate of an investment. It\'s important for comparing different investments fairly.',
  },
  {
    question: 'What is the Rule of 72?',
    answer: 'The Rule of 72 estimates how long it takes for money to double at a given rate. Divide 72 by the annual rate to get approximate years needed.',
  },
];

export default function FAQPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about Bunny Calculator and financial calculations.
            </p>
          </div>

          <FAQSection title="General Questions" faqs={generalFAQs} />
          <FAQSection title="Stock Questions" faqs={stockFAQs} />
          <FAQSection title="Investment Questions" faqs={investmentFAQs} />
        </div>
      </div>
    </MainLayout>
  );
}
