import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { CalculatorCompare } from '@/components/calculator-compare';

export const metadata: Metadata = {
  title: 'Compare Investments | Bunny Calculator',
  description: 'Compare two investment scenarios side by side — SIP vs Lumpsum, different rates, different durations. See which grows more with an interactive chart.',
  keywords: 'compare investments, SIP vs lumpsum, investment comparison, which investment is better',
};

export default function ComparePage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Compare Investments</h1>
            <p className="text-lg text-muted-foreground">
              Set up two investment scenarios and compare them side by side — with a growth chart showing how each performs over time.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-sm mb-4">
            {[
              { icon: '🔀', title: 'Any vs Any', desc: 'Compare SIP, Lumpsum, or Compound Interest scenarios freely.' },
              { icon: '📈', title: 'Growth Chart', desc: 'Visual area chart shows exactly when and by how much one outperforms the other.' },
              { icon: '🏆', title: 'Clear Winner', desc: 'Instantly see which scenario builds more wealth over your time horizon.' },
            ].map((f) => (
              <div key={f.title} className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">{f.icon}</div>
                <strong className="block text-foreground mb-1">{f.title}</strong>
                <span className="text-muted-foreground">{f.desc}</span>
              </div>
            ))}
          </div>

          <CalculatorCompare />
        </div>
      </div>
    </MainLayout>
  );
}
