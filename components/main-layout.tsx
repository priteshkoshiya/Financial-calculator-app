import { Sidebar } from './sidebar';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 w-full">
        <div className="min-h-screen">
          {children}
        </div>
        <footer className="border-t border-border bg-card py-8 mt-12">
          <div className="max-w-5xl mx-auto px-6 text-center text-sm text-muted-foreground">
            <p>© 2026 InvestCalc. Free financial calculators for smart investing.</p>
            <p className="mt-2">Disclaimer: InvestCalc provides educational tools only. Always consult a financial advisor before making investment decisions.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
