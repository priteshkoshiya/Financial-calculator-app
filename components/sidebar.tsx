'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const investmentCalcs = [
  { name: 'SIP Calculator', slug: 'sip', icon: '💰' },
  { name: 'SWP Calculator', slug: 'swp', icon: '🔄' },
  { name: 'Lumpsum Calculator', slug: 'lumpsum', icon: '💵' },
  { name: 'Compound Interest', slug: 'compound-interest', icon: '📈' },
  { name: 'CAGR Calculator', slug: 'cagr', icon: '📉' },
  { name: 'Rule of 72', slug: 'rule-of-72', icon: '✨' },
];

const stockCalcs = [
  { name: 'Stock Profit/Loss', slug: 'stock-profit-loss', icon: '📊' },
  { name: 'Stock Average', slug: 'stock-average', icon: '⚖️' },
  { name: 'Stock Split', slug: 'stock-split', icon: '🔀' },
  { name: 'Bonus Share', slug: 'bonus-share', icon: '🎁' },
  { name: 'XIRR Calculator', slug: 'xirr', icon: '🔬' },
];

const planningCalcs = [
  { name: 'Savings Goal', slug: 'savings-goal', icon: '🎯' },
  { name: 'Retirement Planner', slug: 'retirement', icon: '🏖️' },
  { name: 'Capital Gains', slug: 'capital-gains', icon: '💹' },
  { name: 'Net Worth', slug: 'net-worth', icon: '🏦' },
  { name: 'EMI Calculator', slug: 'emi', icon: '💳' },
  { name: 'Percentage', slug: 'percentage', icon: '%' },
];

const tools = [
  { name: 'Portfolio Tracker', slug: 'portfolio', icon: '📋' },
  { name: 'Compare Investments', slug: 'compare', icon: '⚡' },
];

const marketData = [
  { name: 'Dividend Details', slug: 'dividend-details', icon: '💎' },
  { name: 'Bonus & Buyback', slug: 'bonus-buyback', icon: '🏆' },
  { name: 'Face Value / Split', slug: 'face-value', icon: '🔧' },
  { name: 'Trading Holidays', slug: 'trading-holidays', icon: '📅' },
];

function NavSection({ title, items }: { title: string; items: { name: string; slug: string; icon: string }[] }) {
  const pathname = usePathname();
  return (
    <div>
      <h2 className="px-4 py-2 text-xs font-semibold uppercase text-sidebar-foreground/60">{title}</h2>
      {items.map((calc) => {
        const isActive = pathname === `/${calc.slug}`;
        return (
          <Link
            key={calc.slug}
            href={`/${calc.slug}`}
            className={cn(
              'block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
              isActive
                ? 'bg-primary/15 text-primary border-l-4 border-primary rounded-l-none'
                : 'text-sidebar-foreground hover:bg-primary/5 hover:text-primary'
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="mr-2" aria-hidden="true">{calc.icon}</span>
            {calc.name}
          </Link>
        );
      })}
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <aside className="h-screen w-80 overflow-y-auto border-r border-border bg-sidebar flex flex-col" aria-label="Main navigation">
      <div className="p-4 md:p-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary hover:opacity-80 transition-opacity" aria-label="Bunny Calculator - Home">
          <span className="text-2xl" aria-hidden="true">📊</span>
          <span className="hidden sm:inline">Bunny Calculator</span>
        </Link>
      </div>

      <nav className="space-y-1 px-4 pb-6" aria-label="Navigation menu">
        <Link
          href="/"
          className={cn(
            'block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
            pathname === '/'
              ? 'bg-primary text-primary-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
          )}
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          <span aria-hidden="true">🏠</span>
          <span className="ml-2">Home</span>
        </Link>

        <div className="my-4 border-t border-sidebar-border" aria-hidden="true" />
        <NavSection title="Investments" items={investmentCalcs} />

        <div className="my-4 border-t border-sidebar-border" aria-hidden="true" />
        <NavSection title="Stocks" items={stockCalcs} />

        <div className="my-4 border-t border-sidebar-border" aria-hidden="true" />
        <NavSection title="Planning & Tax" items={planningCalcs} />

        <div className="my-4 border-t border-sidebar-border" aria-hidden="true" />
        <NavSection title="Tools" items={tools} />

        <div className="my-4 border-t border-sidebar-border" aria-hidden="true" />
        <NavSection title="Market Data" items={marketData} />

        <div className="my-4 border-t border-sidebar-border" aria-hidden="true" />

        <h2 className="px-4 py-2 text-xs font-semibold uppercase text-sidebar-foreground/60">Resources</h2>
        {[
          { href: '/about', icon: 'ℹ️', label: 'About' },
          { href: '/faq', icon: '❓', label: 'FAQ' },
          { href: '/contact', icon: '📧', label: 'Contact' },
        ].map(({ href, icon, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
              pathname === href
                ? 'bg-primary text-primary-foreground'
                : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            )}
            aria-current={pathname === href ? 'page' : undefined}
          >
            <span aria-hidden="true">{icon}</span>
            <span className="ml-2">{label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto p-3 md:p-4 border-t border-sidebar-border flex items-center justify-between">
        <p className="text-xs text-sidebar-foreground/60">© 2026 Bunny Calculator</p>
        <button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle dark mode"
          className="p-2 rounded-lg text-sidebar-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors text-base"
          title={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {resolvedTheme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </aside>
  );
}
