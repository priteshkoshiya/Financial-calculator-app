'use client';

import { useState } from 'react';
import { Sidebar } from './sidebar';
import { Menu, X } from 'lucide-react';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed md:hidden left-4 top-4 z-50 p-2 rounded-lg bg-primary text-primary-foreground"
        aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={sidebarOpen}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - Hidden on mobile by default, shown in md+ */}
      <div
        className={`fixed md:static left-0 top-0 z-40 h-screen w-64 transform transition-transform duration-300 ease-in-out md:transform-none ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        onClick={() => setSidebarOpen(false)}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="w-full md:ml-0">
        <div className="min-h-screen pt-20 md:pt-0">
          {children}
        </div>
        <footer className="border-t border-border bg-card py-8 mt-12">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center text-xs md:text-sm text-muted-foreground space-y-2">
            <p>© 2026 InvestCalc. Free financial calculators for smart investing.</p>
            <p>Disclaimer: InvestCalc provides educational tools only. Always consult a financial advisor before making investment decisions.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
