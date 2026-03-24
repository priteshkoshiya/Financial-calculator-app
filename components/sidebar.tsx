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
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 overflow-y-auto border-r border-border bg-sidebar">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary hover:opacity-80 transition-opacity">
          <span className="text-2xl">📊</span>
          <span>InvestCalc</span>
        </Link>
      </div>

      <nav className="space-y-1 px-4">
        <Link
          href="/"
          className={cn(
            'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
            pathname === '/'
              ? 'bg-primary text-primary-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
          )}
        >
          🏠 Home
        </Link>

        <div className="my-6 border-t border-sidebar-border"></div>

        <p className="px-4 py-2 text-xs font-semibold uppercase text-sidebar-foreground/60">Calculators</p>

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
            >
              <span className="mr-2">{calc.icon}</span>
              {calc.name}
            </Link>
          );
        })}

        <div className="my-6 border-t border-sidebar-border"></div>

        <p className="px-4 py-2 text-xs font-semibold uppercase text-sidebar-foreground/60">Resources</p>

        <Link
          href="/about"
          className={cn(
            'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
            pathname === '/about'
              ? 'bg-primary text-primary-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
          )}
        >
          ℹ️ About
        </Link>

        <Link
          href="/faq"
          className={cn(
            'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
            pathname === '/faq'
              ? 'bg-primary text-primary-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
          )}
        >
          ❓ FAQ
        </Link>

        <Link
          href="/contact"
          className={cn(
            'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
            pathname === '/contact'
              ? 'bg-primary text-primary-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
          )}
        >
          📧 Contact
        </Link>
      </nav>

      <div className="p-4 text-xs text-sidebar-foreground/50 border-t border-sidebar-border mt-8">
        <p>© 2026 InvestCalc. All rights reserved.</p>
      </div>
    </aside>
  );
}
