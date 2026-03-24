import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';
import { FAQSection } from '@/components/faq-section';

export const metadata = {
  title: 'Face Value Split & Demerger | InvestCalc',
  description: 'Learn about face value changes, stock splits, and corporate demergers.',
};

const faqs = [
  {
    question: 'What is face value (FV)?',
    answer:
      'Face value is the nominal value assigned to a stock at the time of issue. It\'s different from market price and is used for accounting purposes.',
  },
  {
    question: 'What happens when face value is split?',
    answer:
      'When face value is split (e.g., 1:2), existing shares are divided into multiple shares with proportionally lower face value. Market price adjusts accordingly.',
  },
  {
    question: 'What is a demerger?',
    answer:
      'A demerger (deconsolidation) is when a company separates into two or more independent companies. Shareholders receive shares in both the original and new entities.',
  },
  {
    question: 'How does demerger affect my investment?',
    answer:
      'In a demerger, you typically receive shares in the new company. Your total investment value should theoretically remain the same as before, but may change based on market conditions.',
  },
];

export default function FaceValuePage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Face Value Split & Demerger</h1>
            <p className="text-lg text-muted-foreground">
              Understand face value changes and corporate restructuring events.
            </p>
          </div>

          <Card className="p-8 bg-primary/10 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Understanding Face Value</h2>
            <p className="text-foreground leading-relaxed">
              Face value (FV) is the nominal or par value of a stock. It's the amount stated on the stock certificate and is used for accounting purposes. It's different from market price, which fluctuates based on supply, demand, and company performance.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card border border-border">
              <h2 className="text-2xl font-bold text-primary mb-4">Face Value Split</h2>
              <p className="text-foreground mb-4 leading-relaxed">
                A face value split divides existing shares into multiple shares with lower face value. For example, a 1:2 split converts ₹10 FV shares into two ₹5 FV shares.
              </p>
              <h3 className="font-semibold text-foreground mb-3">Example:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• You own 100 shares with ₹10 FV</li>
                <li>• After 1:2 split: 200 shares with ₹5 FV</li>
                <li>• Your total investment value remains the same</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border border-border">
              <h2 className="text-2xl font-bold text-primary mb-4">Demerger</h2>
              <p className="text-foreground mb-4 leading-relaxed">
                A demerger is a corporate restructuring where a company splits into two or more independent entities. Shareholders receive shares in both companies.
              </p>
              <h3 className="font-semibold text-foreground mb-3">Example:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Company A demerges into Company A and Company B</li>
                <li>• You receive shares in both companies</li>
                <li>• Your total ownership is now split between two entities</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/10 border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Impact on Investment</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Face Value Split Impact</h3>
                <p className="text-muted-foreground">
                  Face value split increases liquidity and may make the stock more accessible to retail investors. The proportional ownership and total value remain unchanged.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Demerger Impact</h3>
                <p className="text-muted-foreground">
                  Demergers can positively or negatively affect share prices based on the financial health of the separated entities. Shareholders benefit if the demerged entity performs well independently.
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
