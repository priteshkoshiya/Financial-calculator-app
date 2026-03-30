'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { calculateNetWorth } from '@/lib/calculators';

interface NetWorthItem {
  id: number;
  name: string;
  value: string;
}

const defaultAssets: NetWorthItem[] = [
  { id: 1, name: 'Cash & Savings', value: '' },
  { id: 2, name: 'Investments (Stocks, Funds)', value: '' },
  { id: 3, name: 'Real Estate', value: '' },
];

const defaultLiabilities: NetWorthItem[] = [
  { id: 1, name: 'Mortgage / Home Loan', value: '' },
  { id: 2, name: 'Car Loan', value: '' },
  { id: 3, name: 'Credit Card Debt', value: '' },
];

export function NetWorthCalculator() {
  const [assets, setAssets] = useState<NetWorthItem[]>(defaultAssets);
  const [liabilities, setLiabilities] = useState<NetWorthItem[]>(defaultLiabilities);
  const [result, setResult] = useState<ReturnType<typeof calculateNetWorth> | null>(null);

  const addItem = (type: 'asset' | 'liability') => {
    const newItem = { id: Date.now(), name: '', value: '' };
    if (type === 'asset') setAssets((prev) => [...prev, newItem]);
    else setLiabilities((prev) => [...prev, newItem]);
  };

  const removeItem = (type: 'asset' | 'liability', id: number) => {
    if (type === 'asset') setAssets((prev) => prev.filter((a) => a.id !== id));
    else setLiabilities((prev) => prev.filter((l) => l.id !== id));
  };

  const updateItem = (type: 'asset' | 'liability', id: number, field: 'name' | 'value', value: string) => {
    const updater = (prev: NetWorthItem[]) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item));
    if (type === 'asset') setAssets(updater);
    else setLiabilities(updater);
  };

  const handleCalculate = () => {
    const parsedAssets = assets
      .filter((a) => a.value)
      .map((a) => ({ name: a.name || 'Asset', value: parseFloat(a.value) || 0 }));
    const parsedLiabilities = liabilities
      .filter((l) => l.value)
      .map((l) => ({ name: l.name || 'Liability', value: parseFloat(l.value) || 0 }));
    setResult(calculateNetWorth(parsedAssets, parsedLiabilities));
  };

  const handleClear = () => {
    setAssets(defaultAssets.map((a) => ({ ...a, value: '' })));
    setLiabilities(defaultLiabilities.map((l) => ({ ...l, value: '' })));
    setResult(null);
  };

  const ItemTable = ({
    items,
    type,
    label,
  }: {
    items: NetWorthItem[];
    type: 'asset' | 'liability';
    label: string;
  }) => (
    <div className="space-y-3">
      <h3 className="font-semibold text-foreground">{label}</h3>
      {items.map((item, idx) => (
        <div key={item.id} className="flex gap-2">
          <input
            type="text"
            value={item.name}
            onChange={(e) => updateItem(type, item.id, 'name', e.target.value)}
            placeholder={`${label.slice(0, -1)} name`}
            aria-label={`Name for ${label.toLowerCase()} ${idx + 1}`}
            className="flex-1 px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="number"
            value={item.value}
            onChange={(e) => updateItem(type, item.id, 'value', e.target.value)}
            placeholder="Value"
            aria-label={`Value for ${label.toLowerCase()} ${idx + 1}`}
            min={0}
            step={0.01}
            className="w-36 px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={() => removeItem(type, item.id)}
            aria-label="Remove item"
            className="px-2 text-destructive hover:bg-destructive/10 rounded transition-colors"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        onClick={() => addItem(type)}
        className="text-sm text-primary hover:underline"
      >
        + Add {label.slice(0, -1)}
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      <Card className="p-4 md:p-8 bg-card border border-border">
        <div className="grid md:grid-cols-2 gap-8">
          <ItemTable items={assets} type="asset" label="Assets" />
          <ItemTable items={liabilities} type="liability" label="Liabilities" />
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={handleCalculate}
            className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Calculate Net Worth
          </button>
          <button
            onClick={handleClear}
            className="flex-1 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Clear
          </button>
        </div>
      </Card>

      {result && (
        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="p-6 bg-secondary/10 border border-secondary/20">
            <p className="text-sm text-muted-foreground mb-1">Total Assets</p>
            <p className="text-2xl font-bold text-secondary">
              {result.totalAssets.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
          </Card>
          <Card className="p-6 bg-destructive/10 border border-destructive/20">
            <p className="text-sm text-muted-foreground mb-1">Total Liabilities</p>
            <p className="text-2xl font-bold text-destructive">
              {result.totalLiabilities.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
          </Card>
          <Card className={`p-6 col-span-full border ${result.netWorth >= 0 ? 'bg-primary/10 border-primary/20' : 'bg-destructive/10 border-destructive/20'}`}>
            <p className="text-sm text-muted-foreground mb-1">Net Worth</p>
            <p className={`text-3xl font-bold ${result.netWorth >= 0 ? 'text-primary' : 'text-destructive'}`}>
              {result.netWorth.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Debt-to-Asset Ratio: {result.debtToAssetRatio.toFixed(1)}%
            </p>
          </Card>
        </div>
      )}
    </div>
  );
}
