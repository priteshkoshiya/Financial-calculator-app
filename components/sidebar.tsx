'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const calculators = [
  { name: 'Stock Profit/Loss Calculator', slug: 'stock-profit-loss', icon: '📊' },
  { name: 'Stock Average Calculator', slug: 'stock-average', icon: '📈' },
  { name: 'SIP Calculator', slug: 'sip', icon: '💰' },
  { name: 'SWP Calculator', slug: 'swp', icon: '🔄' },
  { name: 'EMI Calculator', slug: 'emi', icon: '💳' },
  { name: 'CAGR Calculator', slug: 'cagr', icon: '📉' },
  { name: 'Stock Split Calculator', slug: 'stock-split', icon: '🔀' },
  { name: 'Bonus Share Calculator', slug: 'bonus-share', icon: '🎁' },
  { name: 'Lumpsum Calculator', slug: 'lumpsum', icon: '💵' },
  { name: 'Rule of 72 Calculator', slug: 'rule-of-72', icon: '✨' },
  { name: 'Percentage Calculator', slug: 'percentage', icon: '%' },
  { name: 'Dividend Details', slug: 'dividend-details', icon: '💎' },
  { name: 'Bonus & Buyback Details', slug: 'bonus-buyback', icon: '🏆' },
  { name: 'Face Value Split & Demerger', slug: 'face-value', icon: '🔧' },
  { name: 'Trading Holidays', slug: 'trading-holidays', icon: '📅' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 overflow-y-auto border-r border-border bg-sidebar" aria-label="Main navigation">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary hover:opacity-80 transition-opacity" aria-label="InvestCalc - Home">
          <span className="text-2xl" aria-hidden="true">📊</span>
          <span>InvestCalc</span>
        </Link>
      </div>

      <nav className="space-y-1 px-4" aria-label="Navigation menu">
        <Link
          href="/"
          className={cn(
            'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
            pathname === '/'
              ? 'bg-primary text-primary-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
          )}
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          <span aria-hidden="true">🏠</span>
          <span className="ml-2">Home</span>
        </Link>

        <div className="my-6 border-t border-sidebar-border" aria-hidden="true"></div>

        <h2 className="px-4 py-2 text-xs font-semibold uppercase text-sidebar-foreground/60" id="calculators-section">Calculators</h2>

        {calculators.map((calc) => {
          const isActive = pathname === `/${calc.slug}`;
          return (
            <Link
              key={calc.slug}
              href={`/${calc.slug}`}
              className={cn(
                'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="mr-2" aria-hidden="true">{calc.icon}</span>
              {calc.name}
            </Link>
          );
        })}

        <div className="my-6 border-t border-sidebar-border" aria-hidden="true"></div>

        <h2 className="px-4 py-2 text-xs font-semibold uppercase text-sidebar-foreground/60" id="resources-section">Resources</h2>

        <Link
          href="/about"
          className={cn(
            'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
            pathname === '/about'
              ? 'bg-primary text-primary-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
          )}
          aria-current={pathname === '/about' ? 'page' : undefined}
        >
          <span aria-hidden="true">ℹ️</span>
          <span className="ml-2">About</span>
        </Link>

        <Link
          href="/faq"
          className={cn(
            'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
            pathname === '/faq'
              ? 'bg-primary text-primary-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
          )}
          aria-current={pathname === '/faq' ? 'page' : undefined}
        >
          <span aria-hidden="true">❓</span>
          <span className="ml-2">FAQ</span>
        </Link>

        <Link
          href="/contact"
          className={cn(
            'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
            pathname === '/contact'
              ? 'bg-primary text-primary-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
          )}
          aria-current={pathname === '/contact' ? 'page' : undefined}
        >
          <span aria-hidden="true">📧</span>
          <span className="ml-2">Contact</span>
        </Link>
      </nav>

      <div className="p-4 text-xs text-sidebar-foreground/50 border-t border-sidebar-border mt-8">
        <p>© 2026 InvestCalc. All rights reserved.</p>
      </div>
    </aside>
  );
}
