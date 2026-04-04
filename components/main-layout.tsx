'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from './sidebar';
import { Menu, X, Download } from 'lucide-react';
import { useInstallPrompt } from '@/hooks/use-install-prompt';
import { Button } from './ui/button';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isInstallable, installApp } = useInstallPrompt();
  const [showBanner, setShowBanner] = useState(true);

  // Auto-hide banner if not installable or user closed it
  useEffect(() => {
    if (!isInstallable) {
      setShowBanner(false);
    }
  }, [isInstallable]);

  const bannerActive = isInstallable && showBanner;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Install Banner */}
      {bannerActive && (
        <div className="fixed top-0 left-0 right-0 z-[60] md:hidden bg-primary px-4 py-2 flex items-center justify-between shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white text-lg flex-shrink-0">📊</div>
            <div className="min-w-0">
              <p className="text-white text-xs font-bold leading-tight truncate">Install Finance App</p>
              <p className="text-white/80 text-[10px] leading-tight truncate">Fast, secure & offline ready</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              variant="secondary" 
              className="h-7 px-3 text-[10px] font-bold rounded-full bg-white text-primary hover:bg-white/90"
              onClick={installApp}
            >
              INSTALL
            </Button>
            <button 
              onClick={() => setShowBanner(false)}
              className="text-white/70 hover:text-white p-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`fixed md:hidden left-4 ${bannerActive ? 'top-16' : 'top-4'} z-50 p-2 rounded-lg bg-primary text-primary-foreground transition-all duration-300 shadow-md`}
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

      {/* Sidebar - Fixed on all screen sizes */}
      <div
        className={`fixed left-0 top-0 z-40 h-screen w-80 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        onClick={() => setSidebarOpen(false)}
      >
        <Sidebar />
      </div>

      {/* Main Content - Added margin-left for desktop to accommodate fixed sidebar */}
      <main className="w-full md:ml-80">
        <div className="min-h-screen pt-20 md:pt-0">
          {children}
        </div>
        <footer className="border-t border-border bg-card py-8 mt-12">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center text-xs md:text-sm text-muted-foreground space-y-2">
            <p>© 2026 Bunny Calculator. Free financial calculators for smart investing.</p>
            {isInstallable && (
              <button 
                onClick={installApp} 
                className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium my-2 transition-all"
              >
                <Download size={14} />
                Download Official App
              </button>
            )}
            <p>Disclaimer: Bunny Calculator provides educational tools only. Always consult a financial advisor before making investment decisions.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
