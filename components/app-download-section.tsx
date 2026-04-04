'use client';

import { Smartphone, Apple, Play, Download, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useInstallPrompt } from '../hooks/use-install-prompt';

export function AppDownloadSection() {
  const { isInstallable, installApp, isIOS, showInstructions, setShowInstructions, isAlreadyInstalled } = useInstallPrompt();

  if (isAlreadyInstalled) return null;

  return (
    <section className="px-4 md:px-6 py-16 md:py-24 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Smartphone size={14} />
              <span>Mobile First Experience</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Take Your Finances <span className="text-primary">Anywhere</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Install our official Progressive Web App (PWA) for a lightning-fast, offline-capable experience. No app store needed—just one click and you're set.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                'Offline access to all calculators',
                'Zero storage space required',
                'Fast, app-like performance',
                'Always up to date automatically',
                'No registration or ads'
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <>
                <button 
                  onClick={installApp}
                  className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center gap-3 group min-w-[200px] justify-center"
                >
                  <Download className="group-hover:bounce" size={20} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-black opacity-70 leading-none mb-0.5">Available Now</div>
                    <div className="text-base leading-none">{isInstallable ? 'Install App' : 'Download App'}</div>
                  </div>
                </button>

                {/* iOS Instructions */}
                {showInstructions && isIOS && (
                  <div className="w-full mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20 animate-in fade-in slide-in-from-top-4 duration-500">
                    <h4 className="font-bold text-sm mb-2 text-foreground">To install on iPhone:</h4>
                    <ol className="text-xs space-y-2 text-muted-foreground list-decimal list-inside">
                      <li>Tap the <span className="font-bold text-foreground">Share</span> button in Safari</li>
                      <li>Scroll down and tap <span className="font-bold text-foreground">Add to Home Screen</span></li>
                      <li>Tap <span className="font-bold text-foreground">Add</span> in the top right</li>
                    </ol>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mt-3 text-[10px] h-7 w-full hover:bg-primary/20"
                      onClick={() => setShowInstructions(false)}
                    >
                      Close instructions
                    </Button>
                  </div>
                )}
              </>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            {/* Mockup UI */}
            <Card className="relative z-10 glassmorphism border-primary/20 shadow-2xl overflow-hidden rounded-[2.5rem] p-4 bg-card/80 backdrop-blur-xl max-w-[320px] mx-auto aspect-[9/19] border-8 border-foreground/5 dark:border-foreground/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-2xl z-20" />
              
              <div className="h-full w-full rounded-[2rem] overflow-hidden bg-background relative flex flex-col pt-10">
                <div className="px-4 py-2 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">📊</div>
                    <span className="text-[10px] font-bold uppercase tracking-tight">Finance App</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                </div>
                
                <div className="flex-1 p-4 space-y-4">
                  <div className="h-24 rounded-xl bg-primary/10 border border-primary/20 p-3 space-y-2">
                    <div className="w-1/2 h-2.5 bg-primary/20 rounded" />
                    <div className="w-full h-8 bg-primary/10 rounded-lg flex items-center justify-center font-bold text-primary">₹ 14,25,000</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 rounded-xl bg-card border border-border p-2 space-y-2">
                      <div className="w-3/4 h-2 bg-muted rounded" />
                      <div className="w-1/2 h-4 bg-primary/10 rounded" />
                    </div>
                    <div className="h-16 rounded-xl bg-card border border-border p-2 space-y-2">
                      <div className="w-3/4 h-2 bg-muted rounded" />
                      <div className="w-1/2 h-4 bg-primary/10 rounded" />
                    </div>
                  </div>

                  <div className="h-32 rounded-xl bg-secondary/5 border border-dashed border-border flex items-center justify-center text-[10px] text-muted-foreground p-4 text-center">
                    Real-time charts and accurate calculations at your fingertips
                  </div>
                </div>

                <div className="p-4 border-t border-border mt-auto">
                  <div className="h-8 w-full bg-primary rounded-lg shadow-lg shadow-primary/20" />
                </div>
              </div>
            </Card>

            {/* Glowing Orbs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
