import { Card } from '@/components/ui/card';

export interface ResultItem {
  label: string;
  value: string | number;
  suffix?: string;
  highlight?: boolean;
}

interface ResultCardProps {
  title: string;
  results: ResultItem[];
  description?: string;
}

export function ResultCard({ title, results, description }: ResultCardProps) {
  return (
    <Card className="p-4 md:p-8 bg-card border border-border w-full" role="region" aria-label="Calculation results">
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{title}</h3>
      {description && (
        <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">{description}</p>
      )}
      
      <div className="space-y-2 md:space-y-4" role="list">
        {results.map((result, idx) => {
          const formattedValue = typeof result.value === 'number'
            ? result.value.toLocaleString('en-IN', {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            : result.value;
            
          return (
            <div
              key={idx}
              role="listitem"
              className={`flex justify-between items-center p-3 md:p-4 rounded-lg gap-2 ${
                result.highlight
                  ? 'bg-primary/10 border border-primary/20'
                  : 'bg-secondary/10 border border-secondary/20'
              }`}
            >
              <span className={`font-medium text-xs md:text-sm ${
                result.highlight ? 'text-primary' : 'text-foreground'
              }`}>
                {result.label}
              </span>
              <span 
                className={`font-bold text-sm md:text-lg text-right ${
                  result.highlight ? 'text-primary' : 'text-secondary'
                }`}
                aria-label={`${result.label}: ${formattedValue}${result.suffix ? ' ' + result.suffix : ''}`}
              >
                {formattedValue}
                {result.suffix && <span className="ml-1 md:ml-2 text-xs md:text-sm">{result.suffix}</span>}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
