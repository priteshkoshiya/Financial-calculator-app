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
    <Card className="p-8 bg-card border border-border">
      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-semibold text-foreground mb-2">
              {field.label}
              {field.required && <span className="text-destructive">*</span>}
            </label>
            {field.type === 'select' ? (
              <select
                value={field.value}
                onChange={(e) => onFieldChange(field.name, e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{field.placeholder}</option>
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={field.value}
                onChange={(e) =>
                  onFieldChange(
                    field.name,
                    field.type === 'number' ? e.target.value : e.target.value
                  )
                }
                placeholder={field.placeholder}
                min={field.min}
                step={field.step}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            )}
          </div>
        ))}

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Calculating...' : buttonLabel}
          </button>
          <button
            type="button"
            onClick={onClear}
            className="flex-1 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Clear Fields
          </button>
        </div>
      </form>
    </Card>
  );
}
