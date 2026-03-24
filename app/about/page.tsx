import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'About Bunny Calculator | Financial Calculator Platform',
  description: 'Learn about Bunny Calculator, your trusted free financial calculator platform for smart investing.',
};

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">About Bunny Calculator</h1>
          </div>

          <Card className="p-8 bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bunny Calculator is dedicated to making financial planning accessible to everyone. We provide free, accurate, and easy-to-use financial calculators to help you make informed investment decisions.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border border-border">
              <h3 className="text-lg font-bold text-primary mb-2">15+ Calculators</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive tools for stock, mutual fund, and loan calculations
              </p>
            </Card>
            <Card className="p-6 bg-card border border-border">
              <h3 className="text-lg font-bold text-primary mb-2">100% Free</h3>
              <p className="text-muted-foreground text-sm">
                No hidden fees, no registration required, completely free to use
              </p>
            </Card>
            <Card className="p-6 bg-card border border-border">
              <h3 className="text-lg font-bold text-primary mb-2">Always Available</h3>
              <p className="text-muted-foreground text-sm">
                Access our tools 24/7 from any device, anytime, anywhere
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/10 border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Bunny Calculator?</h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Accurate calculations using industry-standard financial formulas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>User-friendly interface with clear instructions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Educational content to help you understand financial concepts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Regular updates with new calculators and features</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Mobile-responsive design for calculations on the go</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bunny Calculator is an educational platform providing tools for financial calculations. The results are based on formulas and assumptions you provide. Always consult with a qualified financial advisor before making any investment decisions. Past performance is not indicative of future results.
            </p>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
