'use client';

import { useState } from 'react';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { FAQSection } from '@/components/faq-section';
import { calculateStockProfitLoss } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  {
    name: 'quantity',
    label: 'Stocks Currently Owned',
    type: 'number',
    placeholder: 'Enter number of stocks',
    value: '',
    min: 0,
    step: 1,
  },
  {
    name: 'buyPrice',
    label: 'Buy Price',
    type: 'number',
    placeholder: 'Enter buying price per stock',
    value: '',
    min: 0,
    step: 0.01,
  },
  {
    name: 'sellPrice',
    label: 'Sell Price',
    type: 'number',
    placeholder: 'Enter selling price per stock',
    value: '',
    min: 0,
    step: 0.01,
  },
  {
    name: 'quantityToSell',
    label: 'Stocks Intended to Sell',
    type: 'number',
    placeholder: 'Enter number of stocks to sell',
    value: '',
    min: 0,
    step: 1,
  },
];

const faqs = [
  {
    question: 'How does the Stock Profit/Loss Calculator work?',
    answer:
      'The calculator uses your buy price, sell price, and quantity to calculate your total profit or loss. It multiplies the quantity by the buy price to get your total investment, then multiplies quantity to sell by the sell price to get your sale proceeds. The difference is your profit or loss.',
  },
  {
    question: 'Can I calculate partial sales?',
    answer:
      'Yes! You can enter the number of stocks currently owned in the first field, and the number you want to sell in the last field. The calculator will show your profit/loss for the partial sale.',
  },
  {
    question: 'What if my result is negative?',
    answer:
      'A negative profit/loss indicates a loss on your investment. This happens when your sell price is lower than your buy price.',
  },
  {
    question: 'Does the calculator include brokerage fees?',
    answer:
      'No, this calculator only considers the buy and sell prices. For a more accurate calculation, you can adjust these prices to account for brokerage and other fees.',
  },
];

export function StockProfitLossCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<ReturnType<typeof calculateStockProfitLoss> | null>(null);

  const handleFieldChange = (name: string, value: any) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const handleSubmit = (values: Record<string, any>) => {
    const quantity = parseFloat(values.quantity) || 0;
    const buyPrice = parseFloat(values.buyPrice) || 0;
    const sellPrice = parseFloat(values.sellPrice) || 0;
    const quantityToSell = parseFloat(values.quantityToSell) || 0;

    const calculationResult = calculateStockProfitLoss(
      quantity,
      buyPrice,
      sellPrice,
      quantityToSell
    );

    setResult(calculationResult);
  };

  const handleClear = () => {
    setFields(initialFields);
    setResult(null);
  };

  const resultItems: ResultItem[] = result
    ? [
        {
          label: 'Total Investment',
          value: result.totalInvestment,
          suffix: '',
        },
        {
          label: 'Total Sale Amount',
          value: result.totalSale,
          suffix: '',
        },
        {
          label: 'Profit/Loss',
          value: result.profitLoss,
          suffix: '',
          highlight: true,
        },
        {
          label: 'Profit/Loss %',
          value: result.profitLossPercentage,
          suffix: '%',
          highlight: true,
        },
        {
          label: 'Remaining Shares',
          value: result.remainingQuantity,
          suffix: 'units',
        },
      ]
    : [];

  return (
    <>
      {/* Calculator */}
      <div className="grid lg:grid-cols-2 gap-8">
        <CalculatorForm
          fields={fields}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onFieldChange={handleFieldChange}
          buttonLabel="Calculate"
        />

        {result && (
          <ResultCard
            title="Your Results"
            results={resultItems}
            description="Here's a breakdown of your stock transaction"
          />
        )}
      </div>

      {/* How It Works */}
      <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
        <h2 className="text-2xl font-bold text-foreground mb-6">How It Works</h2>
        <ol className="space-y-4 text-foreground">
          <li className="flex gap-4">
            <span className="text-primary font-bold flex-shrink-0">1.</span>
            <span>Enter the number of stocks you currently own</span>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold flex-shrink-0">2.</span>
            <span>Enter the buying price per stock</span>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold flex-shrink-0">3.</span>
            <span>Enter the selling price per stock</span>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold flex-shrink-0">4.</span>
            <span>Enter the number of stocks you want to sell</span>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold flex-shrink-0">5.</span>
            <span>Click "Calculate" to see your profit/loss results</span>
          </li>
        </ol>
      </div>

      {/* Educational Content */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
          Understanding Stock Profit and Loss
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Stock profit or loss is calculated based on the difference between your selling price and buying price, multiplied by the number of shares sold. A positive result indicates a profit, while a negative result indicates a loss.
        </p>
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
          <h3 className="font-semibold text-foreground mb-3">Formula</h3>
          <code className="text-sm text-muted-foreground">
            Profit/Loss = (Sell Price - Buy Price) × Quantity Sold
          </code>
        </div>
      </div>

      {/* FAQ */}
      <FAQSection faqs={faqs} />
    </>
  );
}
