'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { calculateSIP, calculateLumpsum, calculateCompoundInterest } from '@/lib/calculators';

type CalcType = 'sip' | 'lumpsum' | 'compound';

const calcOptions = [
  { value: 'sip', label: 'SIP (Monthly Investment)' },
  { value: 'lumpsum', label: 'Lumpsum (One-Time)' },
  { value: 'compound', label: 'Compound Interest' },
];

const compoundFrequencies = [
  { value: '1', label: 'Annually' },
  { value: '4', label: 'Quarterly' },
  { value: '12', label: 'Monthly' },
  { value: '365', label: 'Daily' },
];

interface ScenarioParams {
  type: CalcType;
  amount: string;
  rate: string;
  years: string;
  frequency: string;
}

const defaultA: ScenarioParams = { type: 'sip', amount: '', rate: '', years: '', frequency: '12' };
const defaultB: ScenarioParams = { type: 'lumpsum', amount: '', rate: '', years: '', frequency: '12' };

function getFinalValue(p: ScenarioParams): number {
  const amount = parseFloat(p.amount) || 0;
  const rate = parseFloat(p.rate) || 0;
  const years = parseFloat(p.years) || 0;
  if (p.type === 'sip') return calculateSIP(amount, rate, years).maturityAmount;
  if (p.type === 'lumpsum') return calculateLumpsum(amount, rate, years).maturityAmount;
  return calculateCompoundInterest(amount, rate, years, parseInt(p.frequency) || 12).amount;
}

function getTotalInvested(p: ScenarioParams): number {
  const amount = parseFloat(p.amount) || 0;
  const years = parseFloat(p.years) || 0;
  if (p.type === 'sip') return amount * years * 12;
  return amount;
}

function getYearlyData(p: ScenarioParams): { year: number; value: number }[] {
  const years = parseFloat(p.years) || 0;
  const amount = parseFloat(p.amount) || 0;
  const rate = parseFloat(p.rate) || 0;
  const points: { year: number; value: number }[] = [];
  for (let y = 1; y <= years; y++) {
    let val = 0;
    if (p.type === 'sip') val = calculateSIP(amount, rate, y).maturityAmount;
    else if (p.type === 'lumpsum') val = calculateLumpsum(amount, rate, y).maturityAmount;
    else val = calculateCompoundInterest(amount, rate, y, parseInt(p.frequency) || 12).amount;
    points.push({ year: y, value: Math.round(val) });
  }
  return points;
}

function ScenarioForm({
  label,
  params,
  onChange,
}: {
  label: string;
  params: ScenarioParams;
  onChange: (p: ScenarioParams) => void;
}) {
  const set = (k: keyof ScenarioParams, v: string) => onChange({ ...params, [k]: v });
  return (
    <Card className="p-5 border border-border space-y-4">
      <h3 className="font-semibold text-foreground">{label}</h3>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Calculator Type</label>
        <select
          value={params.type}
          onChange={(e) => set('type', e.target.value)}
          className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {calcOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">
          {params.type === 'sip' ? 'Monthly Investment' : 'Principal Amount'}
        </label>
        <input
          type="number"
          value={params.amount}
          onChange={(e) => set('amount', e.target.value)}
          placeholder="Amount"
          min={0}
          className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Annual Return Rate (%)</label>
        <input
          type="number"
          value={params.rate}
          onChange={(e) => set('rate', e.target.value)}
          placeholder="e.g. 10"
          min={0}
          step={0.1}
          className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Duration (Years)</label>
        <input
          type="number"
          value={params.years}
          onChange={(e) => set('years', e.target.value)}
          placeholder="e.g. 10"
          min={1}
          className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {params.type === 'compound' && (
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Compounding Frequency</label>
          <select
            value={params.frequency}
            onChange={(e) => set('frequency', e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {compoundFrequencies.map((f) => (
              <option key={f.value} value={f.value}>{f.label}</option>
            ))}
          </select>
        </div>
      )}
    </Card>
  );
}

const fmt = (n: number) => n.toLocaleString('en-US', { maximumFractionDigits: 0 });

export function CalculatorCompare() {
  const [scenarioA, setScenarioA] = useState<ScenarioParams>(defaultA);
  const [scenarioB, setScenarioB] = useState<ScenarioParams>(defaultB);
  const [compared, setCompared] = useState(false);

  const canCompare =
    scenarioA.amount && scenarioA.rate && scenarioA.years &&
    scenarioB.amount && scenarioB.rate && scenarioB.years;

  const handleCompare = () => setCompared(true);
  const handleClear = () => {
    setScenarioA(defaultA);
    setScenarioB(defaultB);
    setCompared(false);
  };

  const dataA = compared ? getYearlyData(scenarioA) : [];
  const dataB = compared ? getYearlyData(scenarioB) : [];

  const maxYears = Math.max(
    parseInt(scenarioA.years) || 0,
    parseInt(scenarioB.years) || 0
  );

  const chartData = Array.from({ length: maxYears }, (_, i) => ({
    year: i + 1,
    'Scenario A': dataA.find((d) => d.year === i + 1)?.value ?? null,
    'Scenario B': dataB.find((d) => d.year === i + 1)?.value ?? null,
  }));

  const finalA = compared ? getFinalValue(scenarioA) : 0;
  const finalB = compared ? getFinalValue(scenarioB) : 0;
  const investedA = compared ? getTotalInvested(scenarioA) : 0;
  const investedB = compared ? getTotalInvested(scenarioB) : 0;
  const winner = finalA > finalB ? 'A' : finalB > finalA ? 'B' : 'tie';

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <ScenarioForm label="Scenario A" params={scenarioA} onChange={setScenarioA} />
        <ScenarioForm label="Scenario B" params={scenarioB} onChange={setScenarioB} />
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleCompare}
          disabled={!canCompare}
          className="flex-1 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-40"
        >
          Compare
        </button>
        <button
          onClick={handleClear}
          className="flex-1 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Reset
        </button>
      </div>

      {compared && (
        <>
          {/* Summary cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Scenario A', final: finalA, invested: investedA, isWinner: winner === 'A' },
              { label: 'Scenario B', final: finalB, invested: investedB, isWinner: winner === 'B' },
            ].map((s) => (
              <Card
                key={s.label}
                className={`p-6 border ${s.isWinner ? 'bg-primary/10 border-primary/30' : 'bg-secondary/10 border-secondary/20'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{s.label}</h4>
                  {s.isWinner && winner !== 'tie' && (
                    <span className="text-xs font-bold text-primary bg-primary/20 px-2 py-0.5 rounded-full">Winner</span>
                  )}
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">{fmt(s.final)}</p>
                <p className="text-sm text-muted-foreground">Invested: {fmt(s.invested)}</p>
                <p className={`text-sm font-medium mt-1 ${s.final - s.invested >= 0 ? 'text-primary' : 'text-destructive'}`}>
                  Gain: {fmt(s.final - s.invested)}
                </p>
              </Card>
            ))}
          </div>

          {/* Chart */}
          <Card className="p-4 md:p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">Growth Over Time</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={chartData} margin={{ top: 4, right: 20, bottom: 4, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis
                  dataKey="year"
                  tickFormatter={(v) => `Yr ${v}`}
                  tick={{ fontSize: 11 }}
                  stroke="var(--muted-foreground)"
                />
                <YAxis
                  tickFormatter={(v) => (v >= 1000000 ? `${(v / 1000000).toFixed(1)}M` : v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v))}
                  tick={{ fontSize: 11 }}
                  stroke="var(--muted-foreground)"
                />
                <Tooltip
                  formatter={(val: number) => fmt(val)}
                  labelFormatter={(l) => `Year ${l}`}
                  contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8 }}
                />
                <Legend />
                <Area type="monotone" dataKey="Scenario A" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.15} strokeWidth={2} connectNulls />
                <Area type="monotone" dataKey="Scenario B" stroke="var(--secondary)" fill="var(--secondary)" fillOpacity={0.15} strokeWidth={2} connectNulls />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </>
      )}
    </div>
  );
}
