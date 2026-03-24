import { Card } from '@/components/ui/card';

export interface CalculatorField {
  name: string;
  label: string;
  type: 'number' | 'text' | 'select';
  placeholder?: string;
  options?: { label: string; value: string }[];
  value: string | number;
  required?: boolean;
  min?: number;
  step?: number;
}

interface CalculatorFormProps {
  fields: CalculatorField[];
  onSubmit: (values: Record<string, any>) => void;
  onClear: () => void;
  onFieldChange: (name: string, value: any) => void;
  buttonLabel?: string;
  loading?: boolean;
}

export function CalculatorForm({
  fields,
  onSubmit,
  onClear,
  onFieldChange,
  buttonLabel = 'Calculate',
  loading = false,
}: CalculatorFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const values: Record<string, any> = {};
    fields.forEach((field) => {
      values[field.name] = field.value;
    });
    onSubmit(values);
  };

  return (
    <Card className="p-4 md:p-8 bg-card border border-border w-full">
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" role="form" aria-label="Calculator form">
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label 
              htmlFor={field.name}
              className="block text-xs md:text-sm font-semibold text-foreground"
            >
              {field.label}
              {field.required && (
                <span className="text-destructive" aria-label="required">
                  {' '}*
                </span>
              )}
            </label>
            {field.type === 'select' ? (
              <select
                id={field.name}
                value={field.value}
                onChange={(e) => onFieldChange(field.name, e.target.value)}
                aria-label={field.label}
                required={field.required}
                className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{field.placeholder || 'Select an option'}</option>
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                type={field.type}
                value={field.value}
                onChange={(e) =>
                  onFieldChange(
                    field.name,
                    field.type === 'number' ? e.target.value : e.target.value
                  )
                }
                placeholder={field.placeholder}
                aria-label={field.label}
                min={field.min}
                step={field.step}
                required={field.required}
                className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            )}
          </div>
        ))}

        <div className="flex flex-col sm:flex-row gap-2 md:gap-4 pt-2 md:pt-4">
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="flex-1 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Calculating...' : buttonLabel}
          </button>
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear all form fields"
            className="flex-1 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Clear Fields
          </button>
        </div>
      </form>
    </Card>
  );
}
