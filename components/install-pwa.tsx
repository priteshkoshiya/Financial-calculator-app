'use client';

import { useState, useEffect } from 'react';
import { Download, Smartphone, Laptop, X } from 'lucide-react';
import { Button } from './ui/button';
import { useInstallPrompt } from '@/hooks/use-install-prompt';

export function InstallPWA() {
  const { isInstallable, installApp, isIOS, showInstructions, setShowInstructions, isAlreadyInstalled } = useInstallPrompt();
  const [platform, setPlatform] = useState<'mobile' | 'desktop' | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  if (isAlreadyInstalled || !isVisible) return null;

  return (
    <div className="p-4 mx-2 mb-4 rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10 flex flex-col gap-3 group transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 dark:hover:bg-primary/15 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4">
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={() => setIsVisible(false)} 
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Dismiss install prompt"
        >
          <X size={14} />
        </button>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary dark:text-primary-foreground group-hover:scale-110 transition-transform duration-300">
          {platform === 'mobile' ? <Smartphone size={20} /> : <Laptop size={20} />}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm leading-tight text-foreground">App Version Ready</h3>
          <p className="text-xs text-muted-foreground mt-0.5 italic">Install for better experience</p>
        </div>
      </div>
      
      <Button 
        onClick={installApp}
        variant="default" 
        size="sm" 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-all rounded-lg h-9 flex items-center justify-center gap-2"
      >
        <Download size={15} />
        <span>Install Now</span>
      </Button>

      {showInstructions && isIOS && (
        <div className="mt-2 p-3 rounded-lg bg-background/50 border border-border text-[10px] text-muted-foreground animate-in zoom-in-95 duration-300">
          <p className="font-bold mb-1">To install on iOS:</p>
          <p>Tap Share → Add to Home Screen</p>
          <Button 
            variant="ghost" 
            size="sm" 
            className="mt-2 h-6 w-full text-[9px]"
            onClick={() => setShowInstructions(false)}
          >
            Got it
          </Button>
        </div>
      )}

      {/* Decorative gradient overlay */}
      <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/10 blur-xl rounded-full" />
    </div>
  );
}
