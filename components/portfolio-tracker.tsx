'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface Holding {
  id: string;
  name: string;
  ticker: string;
  quantity: number;
  buyPrice: number;
  currentPrice: number;
}

const STORAGE_KEY = 'portfolio_holdings';

function loadHoldings(): Holding[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHoldings(holdings: Holding[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(holdings));
}

const emptyForm = { name: '', ticker: '', quantity: '', buyPrice: '', currentPrice: '' };

export function PortfolioTracker() {
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setHoldings(loadHoldings());
  }, []);

  const update = (next: Holding[]) => {
    setHoldings(next);
    saveHoldings(next);
  };

  const handleSave = () => {
    if (!form.name || !form.quantity || !form.buyPrice || !form.currentPrice) return;
    if (editId) {
      update(
        holdings.map((h) =>
          h.id === editId
            ? {
                ...h,
                name: form.name,
                ticker: form.ticker.toUpperCase(),
                quantity: parseFloat(form.quantity),
                buyPrice: parseFloat(form.buyPrice),
                currentPrice: parseFloat(form.currentPrice),
              }
            : h
        )
      );
      setEditId(null);
    } else {
      update([
        ...holdings,
        {
          id: Date.now().toString(),
          name: form.name,
          ticker: form.ticker.toUpperCase(),
          quantity: parseFloat(form.quantity),
          buyPrice: parseFloat(form.buyPrice),
          currentPrice: parseFloat(form.currentPrice),
        },
      ]);
    }
    setForm(emptyForm);
    setShowForm(false);
  };

  const handleEdit = (h: Holding) => {
    setForm({
      name: h.name,
      ticker: h.ticker,
      quantity: String(h.quantity),
      buyPrice: String(h.buyPrice),
      currentPrice: String(h.currentPrice),
    });
    setEditId(h.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    update(holdings.filter((h) => h.id !== id));
  };

  const handleCancel = () => {
    setForm(emptyForm);
    setEditId(null);
    setShowForm(false);
  };

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const totalInvested = holdings.reduce((s, h) => s + h.buyPrice * h.quantity, 0);
  const currentValue = holdings.reduce((s, h) => s + h.currentPrice * h.quantity, 0);
  const totalPnL = currentValue - totalInvested;
  const pnlPct = totalInvested === 0 ? 0 : (totalPnL / totalInvested) * 100;

  if (!mounted) return null;

  return (
    <div className="space-y-6">
      {/* Summary */}
      {holdings.length > 0 && (
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { label: 'Invested', value: fmt(totalInvested) },
            { label: 'Current Value', value: fmt(currentValue) },
            {
              label: 'Total P&L',
              value: `${totalPnL >= 0 ? '+' : ''}${fmt(totalPnL)}`,
              highlight: true,
              positive: totalPnL >= 0,
            },
            {
              label: 'Return',
              value: `${pnlPct >= 0 ? '+' : ''}${pnlPct.toFixed(2)}%`,
              highlight: true,
              positive: pnlPct >= 0,
            },
          ].map((s) => (
            <Card
              key={s.label}
              className={`p-4 ${s.highlight ? (s.positive ? 'bg-primary/10 border-primary/20' : 'bg-destructive/10 border-destructive/20') : 'bg-secondary/10 border-secondary/20'}`}
            >
              <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
              <p className={`text-xl font-bold ${s.highlight ? (s.positive ? 'text-primary' : 'text-destructive') : 'text-secondary'}`}>
                {s.value}
              </p>
            </Card>
          ))}
        </div>
      )}

      {/* Holdings Table */}
      {holdings.length > 0 && (
        <Card className="p-4 border border-border overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-semibold text-foreground">Stock / Asset</th>
                <th className="pb-3 font-semibold text-foreground text-right">Qty</th>
                <th className="pb-3 font-semibold text-foreground text-right">Buy Price</th>
                <th className="pb-3 font-semibold text-foreground text-right">Current</th>
                <th className="pb-3 font-semibold text-foreground text-right">Value</th>
                <th className="pb-3 font-semibold text-foreground text-right">P&L</th>
                <th className="pb-3 w-20"></th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h) => {
                const invested = h.buyPrice * h.quantity;
                const value = h.currentPrice * h.quantity;
                const pnl = value - invested;
                const pct = invested === 0 ? 0 : (pnl / invested) * 100;
                return (
                  <tr key={h.id} className="border-b border-border/50 hover:bg-secondary/5">
                    <td className="py-3 pr-4">
                      <span className="font-semibold text-foreground">{h.ticker || h.name}</span>
                      {h.ticker && <span className="block text-xs text-muted-foreground">{h.name}</span>}
                    </td>
                    <td className="py-3 text-right">{h.quantity}</td>
                    <td className="py-3 text-right">{fmt(h.buyPrice)}</td>
                    <td className="py-3 text-right">{fmt(h.currentPrice)}</td>
                    <td className="py-3 text-right font-medium">{fmt(value)}</td>
                    <td className={`py-3 text-right font-semibold ${pnl >= 0 ? 'text-primary' : 'text-destructive'}`}>
                      {pnl >= 0 ? '+' : ''}{fmt(pnl)}
                      <span className="block text-xs font-normal">
                        {pct >= 0 ? '+' : ''}{pct.toFixed(2)}%
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <button onClick={() => handleEdit(h)} className="text-xs text-primary hover:underline mr-3">Edit</button>
                      <button onClick={() => handleDelete(h.id)} className="text-xs text-destructive hover:underline">Del</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      )}

      {/* Add / Edit Form */}
      {showForm && (
        <Card className="p-6 border border-primary/30 bg-primary/5">
          <h3 className="font-semibold text-foreground mb-4">{editId ? 'Edit Holding' : 'Add Holding'}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { key: 'name', label: 'Name', placeholder: 'e.g. Apple Inc.' },
              { key: 'ticker', label: 'Ticker (optional)', placeholder: 'e.g. AAPL' },
              { key: 'quantity', label: 'Quantity', placeholder: 'e.g. 10', type: 'number' },
              { key: 'buyPrice', label: 'Buy Price', placeholder: 'e.g. 150.00', type: 'number' },
              { key: 'currentPrice', label: 'Current Price', placeholder: 'e.g. 175.00', type: 'number' },
            ].map((f) => (
              <div key={f.key} className="space-y-1">
                <label className="text-sm font-medium text-foreground">{f.label}</label>
                <input
                  type={f.type || 'text'}
                  value={(form as any)[f.key]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [f.key]: e.target.value }))}
                  placeholder={f.placeholder}
                  step={f.type === 'number' ? '0.01' : undefined}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={handleSave} className="flex-1 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              {editId ? 'Update' : 'Add Holding'}
            </button>
            <button onClick={handleCancel} className="flex-1 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Cancel
            </button>
          </div>
        </Card>
      )}

      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-3 border-2 border-dashed border-primary/40 text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
        >
          + Add Holding
        </button>
      )}

      {holdings.length === 0 && !showForm && (
        <p className="text-center text-muted-foreground text-sm py-8">
          No holdings yet. Add your first holding to start tracking.
        </p>
      )}

      <p className="text-xs text-muted-foreground text-center">
        Data is stored locally in your browser. Update current prices manually to see live P&L.
      </p>
    </div>
  );
}
