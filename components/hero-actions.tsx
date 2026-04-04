'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import { useInstallPrompt } from '../hooks/use-install-prompt';

export function HeroActions() {
  const { isInstallable, installApp, isIOS, showInstructions, setShowInstructions, isAlreadyInstalled } = useInstallPrompt();

  if (isAlreadyInstalled) return null;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center">
        <Link
          href="/stock-profit-loss"
          className="px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all text-sm md:text-base flex items-center justify-center min-w-[160px]"
        >
          Get Started →
        </Link>
        
        <button
          onClick={installApp}
          className="px-6 md:px-8 py-3 md:py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-600/20 transition-all text-sm md:text-base flex items-center justify-center gap-2 min-w-[160px]"
        >
          <Download size={18} />
          {isInstallable ? 'Install App' : 'Download App'}
        </button>

        <Link
          href="/faq"
          className="px-6 md:px-8 py-3 md:py-4 border-2 border-primary/20 text-primary font-semibold rounded-xl hover:bg-primary/5 transition-all text-sm md:text-base flex items-center justify-center min-w-[160px]"
        >
          Read FAQs
        </Link>
      </div>

      {showInstructions && isIOS && (
        <div className="max-w-md mx-auto p-4 rounded-xl bg-secondary/10 border border-secondary/20 animate-in fade-in slide-in-from-top-4 duration-500 text-left">
          <h4 className="font-bold text-sm mb-2 text-foreground">To install on iPhone:</h4>
          <ol className="text-xs space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Tap the <span className="font-bold text-foreground">Share</span> button in Safari</li>
            <li>Scroll down and tap <span className="font-bold text-foreground">Add to Home Screen</span></li>
            <li>Tap <span className="font-bold text-foreground">Add</span> in the top right</li>
          </ol>
          <Button 
            variant="ghost" 
            size="sm" 
            className="mt-3 text-[10px] h-7 w-full hover:bg-secondary/20"
            onClick={() => setShowInstructions(false)}
          >
            Close instructions
          </Button>
        </div>
      )}
    </div>
  );
}
