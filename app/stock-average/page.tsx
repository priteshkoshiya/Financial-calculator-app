'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/main-layout';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { FAQSection } from '@/components/faq-section';
import { Card } from '@/components/ui/card';
import { calculateStockAverage } from '@/lib/calculators';

const faqs = [
  {
    question: 'How does the Stock Average Calculator work?',
    answer:
      'It calculates the average price per share by dividing total investment by total units. If you buy 10 shares at ₹100 and 10 shares at ₹120, your average price is ₹110.',
  },
  {
    question: 'Why is knowing the average price important?',
    answer:
      'Your average purchase price helps you set realistic profit targets and break-even points. It\'s crucial for portfolio management and investment strategy.',
  },
  {
    question: 'Can I add multiple purchases?',
    answer:
      'Yes! You can enter multiple purchase transactions. The calculator will compute the weighted average across all your purchases.',
  },
];

export default function StockAveragePage() {
  const [purchases, setPurchases] = useState<Array<{ units: string; price: string }>>([
    { units: '', price: '' },
  ]);
  const [result, setResult] = useState<ReturnType<typeof calculateStockAverage> | null>(null);

  const handleAddPurchase = () => {
    setPurchases([...purchases, { units: '', price: '' }]);
  };

  const handleRemovePurchase = (idx: number) => {
    setPurchases(purchases.filter((_, i) => i !== idx));
  };

  const handlePurchaseChange = (idx: number, field: string, value: string) => {
    const updated = [...purchases];
    updated[idx] = { ...updated[idx], [field]: value };
    setPurchases(updated);
  };

  const handleCalculate = () => {
    const validPurchases = purchases
      .filter((p) => p.units && p.price)
      .map((p) => ({
        units: parseFloat(p.units) || 0,
        pricePerShare: parseFloat(p.price) || 0,
      }));

    if (validPurchases.length === 0) return;

    const calculationResult = calculateStockAverage(validPurchases);
    setResult(calculationResult);
  };

  const handleClear = () => {
    setPurchases([{ units: '', price: '' }]);
    setResult(null);
  };

  const resultItems: ResultItem[] = result
    ? [
        {
          label: 'Total Units',
          value: result.totalUnits,
          suffix: 'shares',
        },
        {
          label: 'Total Cost',
          value: result.totalCost,
          suffix: '',
        },
        {
          label: 'Average Price Per Share',
          value: result.averagePrice,
          suffix: '',
          highlight: true,
        },
      ]
    : [];

  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Stock Market Average Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate your average stock purchase price across multiple purchases.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border border-border h-fit">
              <h2 className="text-lg font-bold text-foreground mb-6">Purchase Details</h2>
              <div className="space-y-4 mb-6">
                {purchases.map((purchase, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-end gap-2">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-foreground mb-1">
                          First Purchase - Units
                        </label>
                        <input
                          type="number"
                          value={purchase.units}
                          onChange={(e) =>
                            handlePurchaseChange(idx, 'units', e.target.value)
                          }
                          placeholder="Units"
                          className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Price per share
                        </label>
                        <input
                          type="number"
                          value={purchase.price}
                          onChange={(e) =>
                            handlePurchaseChange(idx, 'price', e.target.value)
                          }
                          placeholder="Price"
                          step="0.01"
                          className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      {purchases.length > 1 && (
                        <button
                          onClick={() => handleRemovePurchase(idx)}
                          className="px-3 py-2 bg-destructive/10 text-destructive rounded-lg hover:bg-destructive/20 transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleAddPurchase}
                className="w-full mb-4 px-4 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                + Add Another Purchase
              </button>

              <div className="flex gap-4">
                <button
                  onClick={handleCalculate}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Calculate Average
                </button>
                <button
                  onClick={handleClear}
                  className="flex-1 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Clear
                </button>
              </div>
            </Card>

            {result && <ResultCard title="Your Results" results={resultItems} />}
          </div>

          <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">How It Works</h2>
            <ol className="space-y-3 text-foreground">
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">1.</span>
                <span>Enter the units for your first purchase</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">2.</span>
                <span>Enter the price per share for that purchase</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">3.</span>
                <span>Click "Add Another Purchase" for additional buys</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">4.</span>
                <span>Click "Calculate Average" to get your results</span>
              </li>
            </ol>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </div>
    </MainLayout>
  );
}
