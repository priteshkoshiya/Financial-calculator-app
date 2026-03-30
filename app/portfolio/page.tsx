import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { PortfolioTracker } from '@/components/portfolio-tracker';

export const metadata: Metadata = {
  title: 'Portfolio Tracker | Bunny Calculator',
  description: 'Track all your stock and investment holdings in one place. Calculate total value, profit & loss, and overall return. Free, no login required — data stays in your browser.',
  keywords: 'portfolio tracker, stock portfolio, investment tracker, P&L calculator, portfolio returns',
};

export default function PortfolioPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Portfolio Tracker</h1>
            <p className="text-lg text-muted-foreground">
              Track all your holdings in one place. Add stocks, ETFs, or any asset — see your total invested, current value, and overall P&L at a glance.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            {[
              { icon: '🔒', title: 'Private by Default', desc: 'All data is stored in your browser. Nothing is sent to any server.' },
              { icon: '✏️', title: 'Fully Editable', desc: 'Add, edit, or remove holdings anytime. Update prices manually.' },
              { icon: '📊', title: 'Instant P&L', desc: 'See gain/loss and return percentage for each holding and your whole portfolio.' },
            ].map((f) => (
              <div key={f.title} className="p-4 border border-border rounded-xl">
                <div className="text-2xl mb-2">{f.icon}</div>
                <strong className="block text-foreground mb-1">{f.title}</strong>
                <span className="text-muted-foreground">{f.desc}</span>
              </div>
            ))}
          </div>

          <PortfolioTracker />
        </div>
      </div>
    </MainLayout>
  );
}
