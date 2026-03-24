import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Bunny Calculator | Free Financial Planning Tools',
  description: 'Bunny Calculator is a 100% free, accurate, and easy-to-use suite of financial calculators designed by experts to help you master your stock market and mutual fund investments.',
  keywords: 'about bunny calculator, free financial calculators, online investment tools, stock market calculator',
};

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">About Bunny Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Empowering everyday investors with professional-grade, easy-to-use financial tools.
            </p>
          </div>

          <Card className="p-8 bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe that understanding your money shouldn't require an advanced degree in finance or expensive advisor fees. <strong>Bunny Calculator</strong> was completely built around one core philosophy: making financial planning accessible, transparent, and completely free for everyone. Whether you're tracking an SIP, calculating a stock split, or predicting an EMI, we're here to help you mathematically validate your financial decisions before you risk your hard-earned capital.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-primary/5 border border-primary/20 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">🛠️</span>
              <h3 className="text-lg font-bold text-foreground mb-2">15+ Expert Tools</h3>
              <p className="text-muted-foreground text-sm">
                From simple compound interest to advanced corporate stock actions, our suite covers all retail investing needs.
              </p>
            </Card>
            <Card className="p-6 bg-primary/5 border border-primary/20 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">💸</span>
              <h3 className="text-lg font-bold text-foreground mb-2">100% Free Forever</h3>
              <p className="text-muted-foreground text-sm">
                No paywalls, no subscriptions, and strictly no account registration required. Just open our tools and start typing.
              </p>
            </Card>
            <Card className="p-6 bg-primary/5 border border-primary/20 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">⚡</span>
              <h3 className="text-lg font-bold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">
                We're built on highly responsive modern web technologies, ensuring every keystroke calculates instantly.
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/10 border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Bunny Calculator?</h2>
            <ul className="space-y-4 text-foreground">
              <li className="flex gap-4 items-start">
                <span className="text-primary font-bold bg-background p-1 rounded">✓</span>
                <div>
                  <strong className="block">Flawless Accuracy</strong>
                  <span className="text-sm text-muted-foreground">We utilize standard institutional mathematical formulas to ensure your results mirror reality.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary font-bold bg-background p-1 rounded">✓</span>
                <div>
                  <strong className="block">Beginner Friendly UI</strong>
                  <span className="text-sm text-muted-foreground">Every calculator is accompanied by a plain-English guide, an FAQ section, and the math explained clearly.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary font-bold bg-background p-1 rounded">✓</span>
                <div>
                  <strong className="block">Mobile Optimized</strong>
                  <span className="text-sm text-muted-foreground">Check your portfolio numbers directly from your phone while you're on the go with zero visual clutter.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary font-bold bg-background p-1 rounded">✓</span>
                <div>
                  <strong className="block">Privacy First</strong>
                  <span className="text-sm text-muted-foreground">We never save your financial inputs or numbers to any server. Your calculations are strictly strictly local and private.</span>
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-background border border-border">
            <h2 className="text-xl font-bold text-destructive mb-3">Disclaimer</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bunny Calculator is strictly an educational utility platform. The projected numbers provided by our calculators are estimates based on the math formulas and the inputs you provide. We cannot predict market volatility, future inflation, or actual returns. <strong>Always consult directly with a certified, registered financial professional</strong> before committing your money to any long-term investments.
            </p>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
