'use client';

import { useState } from 'react';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { Card } from '@/components/ui/card';
import { calculateStockAverage } from '@/lib/calculators';

export function StockAverageCalculator() {
  const [purchases, setPurchases] = useState<Array<{ units: string; price: string }>>([{ units: '', price: '' }]);
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

    setResult(calculateStockAverage(validPurchases));
  };

  const handleClear = () => {
    setPurchases([{ units: '', price: '' }]);
    setResult(null);
  };

  const resultItems: ResultItem[] = result ? [
    { label: 'Total Units', value: result.totalUnits, suffix: ' shares' },
    { label: 'Total Cost', value: result.totalCost },
    { label: 'Average Price Per Share', value: result.averagePrice, highlight: true },
  ] : [];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card className="p-8 bg-card border border-border h-fit">
        <h2 className="text-lg font-bold text-foreground mb-6">Purchase Details</h2>
        <div className="space-y-4 mb-6">
          {purchases.map((purchase, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {idx === 0 ? 'First Purchase Units' : `Purchase ${idx + 1} Units`}
                  </label>
                  <input
                    type="number"
                    value={purchase.units}
                    onChange={(e) => handlePurchaseChange(idx, 'units', e.target.value)}
                    placeholder="Units"
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-foreground mb-1">Price per share</label>
                  <input
                    type="number"
                    value={purchase.price}
                    onChange={(e) => handlePurchaseChange(idx, 'price', e.target.value)}
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

      {result && <ResultCard title="Your Stock Average" results={resultItems} />}
    </div>
  );
}
