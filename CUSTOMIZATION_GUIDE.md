# InvestCalc - Customization Guide

This guide will help you customize InvestCalc for your specific needs.

## 1. Changing Colors & Branding

### Update Color Tokens
Edit `/app/globals.css`:

```css
:root {
  /* Primary color - Main brand color */
  --primary: oklch(0.45 0.25 256);  /* Change this to your brand color */
  
  /* Secondary color - Accent color */
  --secondary: oklch(0.55 0.18 182);
  
  /* Accent color - CTA buttons */
  --accent: oklch(0.65 0.22 45);
}
```

### Update Logo
1. Replace `📊` emoji in `/components/sidebar.tsx` with your logo
2. Or add an image: `<Image src="/logo.png" alt="Logo" width={32} height={32} />`

## 2. Changing Site Name

### Update All References
1. **Sidebar** - Edit `components/sidebar.tsx`:
   ```tsx
   <span>InvestCalc</span> // Change to your site name
   ```

2. **Metadata** - Edit `app/layout.tsx`:
   ```tsx
   title: 'YourSiteName | Financial Calculators'
   ```

3. **Footer** - Edit `components/main-layout.tsx`:
   ```tsx
   <p>© 2026 YourSiteName.</p>
   ```

## 3. Adding New Calculators

### Step 1: Create Calculator Function
Add to `/lib/calculators.ts`:

```typescript
export function calculateMyTool(input1: number, input2: number) {
  const result = input1 + input2;
  return {
    result,
    otherMetric: result * 2,
  };
}
```

### Step 2: Create Calculator Page
Create `/app/my-calculator/page.tsx`:

```typescript
'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/main-layout';
import { CalculatorForm, type CalculatorField } from '@/components/calculator-form';
import { ResultCard, type ResultItem } from '@/components/result-card';
import { calculateMyTool } from '@/lib/calculators';

const initialFields: CalculatorField[] = [
  {
    name: 'input1',
    label: 'Input 1',
    type: 'number',
    value: '',
  },
  {
    name: 'input2',
    label: 'Input 2',
    type: 'number',
    value: '',
  },
];

export default function MyCalculatorPage() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState(null);

  const handleSubmit = (values) => {
    const result = calculateMyTool(
      parseFloat(values.input1),
      parseFloat(values.input2)
    );
    setResult(result);
  };

  // Rest of component...
}
```

### Step 3: Add to Sidebar
Edit `/components/sidebar.tsx`:

```tsx
const calculators = [
  // ... existing calculators ...
  { name: 'My Calculator', slug: 'my-calculator', icon: '📐' },
];
```

### Step 4: Update Sitemap
Edit `/app/sitemap.ts`:

```typescript
const calculators = [
  // ... existing calculators ...
  'my-calculator',
];
```

## 4. Changing Contact Information

### Email Addresses
Edit `/app/contact/page.tsx`:

```tsx
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>
```

## 5. Customizing Calculator Forms

### Add Input Types
The `CalculatorForm` supports: `number`, `text`, `select`

```tsx
{
  name: 'option',
  label: 'Choose Option',
  type: 'select',
  options: [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
  ],
}
```

### Add Input Validation
Modify `components/calculator-form.tsx`:

```tsx
if (parseFloat(value) < 0) {
  alert('Please enter a positive number');
  return;
}
```

## 6. Changing Content

### FAQ Content
Edit individual calculator pages or `/app/faq/page.tsx`:

```tsx
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer...',
  },
];
```

### About Page
Edit `/app/about/page.tsx` to change company information.

### Home Page
Edit `/app/page.tsx` to customize features and benefits.

## 7. Typography Changes

### Font Family
Edit `/app/layout.tsx`:

```tsx
import { YourFont } from 'next/font/google';

const font = YourFont({ subsets: ['latin'] });
```

Then update `globals.css`:

```css
--font-sans: 'YourFont', 'YourFont Fallback';
```

## 8. Layout Changes

### Sidebar Width
Edit `components/sidebar.tsx` and `components/main-layout.tsx`:

```tsx
<aside className="w-64"> {/* Change 64 to your desired width */}
<main className="ml-64"> {/* Update margin accordingly */}
```

### Responsive Sidebar
Modify media queries in the same files for mobile collapse.

## 9. Adding Analytics

### Google Analytics
1. Install: `npm install @react-google-analytics/core`
2. Add to `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@react-google-analytics/core'

export default function RootLayout() {
  return (
    <>
      <GoogleAnalytics trackingId="GA_ID" />
      {/* ... */}
    </>
  )
}
```

### Vercel Analytics (Already Included)
Already set up in `app/layout.tsx`.

## 10. SEO Customization

### Update robots.txt
Edit `/public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /private/

Sitemap: https://yourdomain.com/sitemap.xml
```

### Update Sitemap
Edit `/app/sitemap.ts` to match your domain and structure.

## 11. Dark Mode Implementation

### Enable Dark Mode
Add to `app/globals.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --primary: oklch(0.65 0.2 256);
    /* ... other dark mode colors ... */
  }
}
```

### Dark Mode Toggle
Create a component:

```tsx
'use client';

import { useEffect, useState } from 'react';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}
```

## 12. Mobile Responsiveness

### Tablet Breakpoint
Use Tailwind classes:

```tsx
<div className="md:grid-cols-2 lg:grid-cols-3">
  {/* Adapts to screen size */}
</div>
```

Available breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 13. Adding Social Links

Edit `/app/page.tsx` or footer:

```tsx
<div className="flex gap-4">
  <a href="https://twitter.com/yourhandle" target="_blank">
    Twitter
  </a>
  <a href="https://linkedin.com/company/yourcompany" target="_blank">
    LinkedIn
  </a>
</div>
```

## 14. Database Integration (Optional)

If you need to save user data:

1. **Supabase Integration**:
   ```bash
   npm install @supabase/supabase-js
   ```

2. Add environment variables

3. Create a service module

4. Modify calculator pages to save results

## 15. Deployment Customization

### For Vercel
- No configuration needed
- Push to GitHub and auto-deploy

### For Other Platforms
1. Build: `npm run build`
2. Run: `npm start`
3. Ensure Node.js 18+ is available

## Common Customizations Summary

| Change | File | What to Edit |
|--------|------|--------------|
| Colors | `app/globals.css` | CSS variables |
| Site Name | `app/layout.tsx` | metadata.title |
| Logo | `components/sidebar.tsx` | Logo element |
| New Calculator | Create new page | Follow Step 3 above |
| Contact Email | `app/contact/page.tsx` | mailto links |
| FAQ Content | Individual pages | faqs array |
| Footer Text | `components/main-layout.tsx` | Footer paragraph |

## Need Help?

- Check existing calculator pages for examples
- Refer to Next.js 16 documentation
- Review Tailwind CSS utilities
- Check shadcn/ui component docs

## Best Practices

1. ✅ Always test changes locally: `npm run dev`
2. ✅ Keep calculator functions pure (no side effects)
3. ✅ Use TypeScript for type safety
4. ✅ Follow existing naming conventions
5. ✅ Test on mobile before deploying
6. ✅ Update metadata for SEO
7. ✅ Add FAQs for new features
8. ✅ Test accessibility with keyboard navigation

---

Happy customizing! 🚀
