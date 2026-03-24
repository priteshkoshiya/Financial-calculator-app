import type { Metadata } from 'next';
import Link from 'next/link';
import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'InvestCalc | Free Financial Calculators for Smart Investing',
  description: 'Discover 15+ free financial calculators for stock investing, SIP, SWP, EMI, CAGR and more. Calculate profits, losses, and investment returns instantly.',
  keywords: 'stock calculator, investment calculator, SIP calculator, SWP calculator, EMI calculator, CAGR calculator, financial calculators',
  openGraph: {
    title: 'InvestCalc | Free Financial Calculators',
    description: 'Free online financial calculators for smart investing',
    type: 'website',
  },
};

const features = [
  {
    icon: '📊',
    title: 'Stock Profit/Loss Calculator',
    description: 'Calculate your stock trading profits and losses instantly',
    slug: 'stock-profit-loss',
  },
  {
    icon: '📈',
    title: 'Stock Average Calculator',
    description: 'Find your average stock purchase price across multiple buys',
    slug: 'stock-average',
  },
  {
    icon: '💰',
    title: 'SIP Calculator',
    description: 'Plan your systematic investment portfolio growth',
    slug: 'sip',
  },
  {
    icon: '🔄',
    title: 'SWP Calculator',
    description: 'Calculate systematic withdrawal plan returns',
    slug: 'swp',
  },
  {
    icon: '💳',
    title: 'EMI Calculator',
    description: 'Calculate loan EMI and total interest payable',
    slug: 'emi',
  },
  {
    icon: '📉',
    title: 'CAGR Calculator',
    description: 'Compute compound annual growth rate of investments',
    slug: 'cagr',
  },
  {
    icon: '🔀',
    title: 'Stock Split Calculator',
    description: 'Analyze impact of stock splits on your holdings',
    slug: 'stock-split',
  },
  {
    icon: '🎁',
    title: 'Bonus Share Calculator',
    description: 'Calculate bonus share distributions',
    slug: 'bonus-share',
  },
];

const stats = [
  { number: '15+', label: 'Financial Calculators' },
  { number: '100%', label: 'Free & No Registration' },
  { number: '24/7', label: 'Available Anytime' },
  { number: '10K+', label: 'Daily Users' },
];

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="px-4 md:px-6 py-12 md:py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Smart Financial Calculations Made Easy
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto text-pretty">
            Access 15+ free calculators for stock investing, SIP, SWP, EMI, CAGR, and more. Make informed investment decisions with instant calculations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/stock-profit-loss"
              className="px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              Get Started →
            </Link>
            <Link
              href="/faq"
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 md:px-6 py-8 md:py-12 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <p className="text-muted-foreground text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-12 text-center">
            Our Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {features.map((feature, idx) => (
              <Link key={idx} href={`/${feature.slug}`} aria-label={feature.title}>
                <Card className="p-4 md:p-6 h-full border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer bg-card hover:bg-card/80">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4" aria-hidden="true">{feature.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2 text-xs md:text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {feature.description}
                  </p>
                  <div className="mt-3 md:mt-4 text-primary font-semibold text-xs md:text-sm hover:opacity-70 transition-opacity">
                    Open →
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 md:px-6 py-12 md:py-16 bg-secondary/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-12 text-center">
            Why Choose InvestCalc?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <Card className="p-6 md:p-8 border border-border bg-card">
              <div className="text-3xl mb-3 md:mb-4">✨</div>
              <h3 className="font-bold text-foreground mb-2 md:mb-3 text-sm md:text-base">Easy to Use</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                Simple, intuitive interface with clear instructions for every calculator
              </p>
            </Card>
            <Card className="p-6 md:p-8 border border-border bg-card">
              <div className="text-3xl mb-3 md:mb-4">🚀</div>
              <h3 className="font-bold text-foreground mb-2 md:mb-3 text-sm md:text-base">Fast & Accurate</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                Instant calculations with precise financial formulas
              </p>
            </Card>
            <Card className="p-6 md:p-8 border border-border bg-card">
              <div className="text-3xl mb-3 md:mb-4">🔒</div>
              <h3 className="font-bold text-foreground mb-2 md:mb-3 text-sm md:text-base">Completely Free</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                No hidden fees, no registration required, 100% free
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center bg-primary/10 p-6 md:p-12 rounded-2xl border border-primary/20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
            Ready to Start Calculating?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Choose a calculator from the sidebar or explore our collection above.
          </p>
          <Link
            href="/stock-profit-loss"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm md:text-base"
          >
            Go to Stock Profit/Loss Calculator →
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
