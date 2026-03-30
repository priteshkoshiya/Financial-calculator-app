'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { calculateXIRR } from '@/lib/calculators';

interface CashFlowRow {
  id: number;
  date: string;
  amount: string;
}

export function XIRRCalculator() {
  const [rows, setRows] = useState<CashFlowRow[]>([
    { id: 1, date: '', amount: '' },
    { id: 2, date: '', amount: '' },
  ]);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const addRow = () => {
    setRows((prev) => [...prev, { id: Date.now(), date: '', amount: '' }]);
  };

  const removeRow = (id: number) => {
    if (rows.length <= 2) return;
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const updateRow = (id: number, field: 'date' | 'amount', value: string) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const handleCalculate = () => {
    setError('');
    const cashFlows = rows
      .filter((r) => r.date && r.amount)
      .map((r) => ({ date: new Date(r.date), amount: parseFloat(r.amount) }));

    if (cashFlows.length < 2) {
      setError('Please enter at least 2 cash flows with dates and amounts.');
      return;
    }

    const hasNegative = cashFlows.some((cf) => cf.amount < 0);
    const hasPositive = cashFlows.some((cf) => cf.amount > 0);
    if (!hasNegative || !hasPositive) {
      setError('Cash flows must include both investments (negative) and returns (positive).');
      return;
    }

    const xirr = calculateXIRR(cashFlows);
    setResult(xirr);
  };

  const handleClear = () => {
    setRows([
      { id: 1, date: '', amount: '' },
      { id: 2, date: '', amount: '' },
    ]);
    setResult(null);
    setError('');
  };

  return (
    <div className="space-y-6">
      <Card className="p-4 md:p-8 bg-card border border-border">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Enter each cash flow with its date. Use <strong>negative values for investments</strong> (money out) and{' '}
            <strong>positive values for returns</strong> (money in).
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-2 font-semibold text-foreground">Date</th>
                  <th className="text-left pb-2 font-semibold text-foreground pl-4">Amount</th>
                  <th className="pb-2 w-12"></th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {rows.map((row, idx) => (
                  <tr key={row.id} className="border-b border-border/50">
                    <td className="py-2 pr-2">
                      <input
                        type="date"
                        value={row.date}
                        onChange={(e) => updateRow(row.id, 'date', e.target.value)}
                        aria-label={`Date for cash flow ${idx + 1}`}
                        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </td>
                    <td className="py-2 pl-4 pr-2">
                      <input
                        type="number"
                        value={row.amount}
                        onChange={(e) => updateRow(row.id, 'amount', e.target.value)}
                        placeholder="e.g. -10000 or 15000"
                        aria-label={`Amount for cash flow ${idx + 1}`}
                        step="0.01"
                        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </td>
                    <td className="py-2 pl-2">
                      <button
                        onClick={() => removeRow(row.id)}
                        disabled={rows.length <= 2}
                        aria-label="Remove row"
                        className="px-2 py-1 rounded text-destructive hover:bg-destructive/10 disabled:opacity-30 transition-colors"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={addRow}
            className="text-sm text-primary hover:underline"
          >
            + Add Cash Flow
          </button>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <div className="flex gap-4 pt-2">
            <button
              onClick={handleCalculate}
              className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Calculate XIRR
            </button>
            <button
              onClick={handleClear}
              className="flex-1 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Clear
            </button>
          </div>
        </div>
      </Card>

      {result !== null && (
        <Card className="p-6 md:p-8 bg-primary/5 border border-primary/20">
          <h3 className="text-lg font-bold text-foreground mb-4">XIRR Result</h3>
          <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <span className="font-semibold text-primary">Annualised Return (XIRR)</span>
            <span className="text-2xl font-bold text-primary">{result}%</span>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            XIRR represents the annualised rate of return accounting for the exact timing of each cash flow.
          </p>
        </Card>
      )}
    </div>
  );
}
