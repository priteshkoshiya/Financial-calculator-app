# Bunny Calculator - Financial Calculators Platform

[![Node.js CI](https://github.com/yourusername/Bunny Calculator/actions/workflows/ci.yml/badge.svg)](https://github.com/yourusername/Bunny Calculator/actions/workflows/ci.yml)
[![Deploy](https://github.com/yourusername/Bunny Calculator/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/Bunny Calculator/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2016-black)](https://nextjs.org)

A modern, high-performance financial calculator platform built with Next.js 16, React 19, and Tailwind CSS.

**[Demo](https://Bunny Calculator.vercel.app)** • **[Documentation](./GITHUB_DEPLOYMENT.md)** • **[Report Issue](https://github.com/yourusername/Bunny Calculator/issues)**

## Features

### 15+ Financial Calculators

1. **Stock Profit/Loss Calculator** - Calculate trading profits and losses
2. **Stock Average Calculator** - Find average purchase price across multiple buys
3. **SIP Calculator** - Plan systematic investment portfolio growth
4. **SWP Calculator** - Calculate systematic withdrawal plan returns
5. **EMI Calculator** - Calculate loan EMI and total interest
6. **CAGR Calculator** - Compute compound annual growth rate
7. **Stock Split Calculator** - Analyze impact of stock splits
8. **Bonus Share Calculator** - Calculate bonus share distributions
9. **Lumpsum Calculator** - Calculate single investment growth
10. **Rule of 72 Calculator** - Find doubling time for investments
11. **Percentage Calculator** - Quick percentage calculations
12. **Dividend Details** - Educational content on dividends
13. **Bonus & Buyback Details** - Understand corporate actions
14. **Face Value Split & Demerger** - Learn about restructuring events
15. **Trading Holidays** - Complete 2026 market holiday calendar

### Additional Pages

- **Home** - Feature showcase and statistics
- **About** - Company mission and values
- **FAQ** - Frequently asked questions
- **Contact** - Support and feedback channels

## Tech Stack

- **Framework**: Next.js 16
- **Runtime**: Node.js
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Analytics**: Vercel Analytics

## Color System

- **Primary**: Blue (#0066CC) - Main actions and highlights
- **Secondary**: Teal (#00A8A8) - Accents and secondary elements
- **Accent**: Orange (#E8B54B) - Buttons and CTAs
- **Neutrals**: Grays - Background and text

## Performance

- ⚡ 100% Lighthouse optimized
- 🚀 Static site generation (SSG)
- 📱 Mobile-first responsive design
- ♿ Full WCAG 2.1 AA accessibility
- 🔍 SEO optimized with structured data
- 📊 Core Web Vitals optimized

## Project Structure

```
app/
├── layout.tsx                 # Root layout
├── globals.css               # Global styles & design tokens
├── page.tsx                  # Home page
├── [calculator]/page.tsx      # Individual calculator pages
├── about/page.tsx            # About page
├── faq/page.tsx              # FAQ page
├── contact/page.tsx          # Contact page
├── dividend-details/page.tsx # Dividend info
├── bonus-buyback/page.tsx    # Bonus & buyback info
├── face-value/page.tsx       # Face value info
├── trading-holidays/page.tsx # Trading holidays
└── sitemap.ts                # Dynamic sitemap

components/
├── sidebar.tsx               # Navigation sidebar
├── main-layout.tsx           # Layout wrapper
├── calculator-form.tsx       # Reusable form component
├── result-card.tsx           # Result display component
├── faq-section.tsx           # FAQ display component
└── ui/                       # shadcn/ui components

lib/
├── calculators.ts            # Calculator functions
└── utils.ts                  # Utility functions

public/
└── robots.txt                # SEO robots file
```

## Calculator Formulas

### Stock Profit/Loss
```
Profit/Loss = (Sell Price - Buy Price) × Quantity Sold
Profit/Loss % = (Profit/Loss ÷ Total Investment) × 100
```

### SIP (Systematic Investment Plan)
```
FV = P × [((1 + r)^n - 1) / r] × (1 + r)
Where: P = Monthly payment, r = Monthly rate, n = Number of months
```

### EMI (Equated Monthly Installment)
```
EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1]
Where: P = Principal, r = Monthly rate, n = Number of months
```

### CAGR (Compound Annual Growth Rate)
```
CAGR = (Final Value / Initial Value)^(1/Years) - 1
```

### Rule of 72
```
Years to Double = 72 ÷ Annual Rate (%)
```

## Getting Started

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/Bunny Calculator.git
cd Bunny Calculator

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

#### Vercel (Recommended)
- See [GITHUB_DEPLOYMENT.md](./GITHUB_DEPLOYMENT.md) for detailed instructions
- Push to GitHub → Automatic deployment to Vercel
- Free tier available at vercel.com

#### Other Platforms
- GitHub Pages
- Netlify
- AWS Amplify
- Any static hosting service

### Environment Variables

No environment variables required. This is a static site with all calculations done client-side.

## Usage

1. **Home Page**: Browse all available calculators
2. **Calculator Pages**: Enter values, click Calculate
3. **Clear Fields**: Reset calculator to start over
4. **FAQ Sections**: Learn about each calculator
5. **Info Pages**: Understand financial concepts

## Customization

### Adding a New Calculator

1. Create calculator function in `lib/calculators.ts`
2. Create page file in `app/[calculator]/page.tsx`
3. Use `CalculatorForm` and `ResultCard` components
4. Add to sidebar navigation in `components/sidebar.tsx`
5. Update sitemap in `app/sitemap.ts`

### Changing Colors

Edit design tokens in `app/globals.css`:
- `--primary`: Main brand color
- `--secondary`: Secondary color
- `--accent`: Accent color
- `--muted`: Muted/subtle colors

## SEO

- ✅ Dynamic sitemap generation
- ✅ OpenGraph meta tags
- ✅ Semantic HTML structure
- ✅ Schema.org structured data
- ✅ robots.txt configuration
- ✅ Page-specific metadata

## Accessibility

- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader optimization
- ✅ Color contrast compliance
- ✅ Responsive text sizing

## Performance Optimizations

- Static site generation for fast loads
- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind (no runtime overhead)
- Efficient component splitting
- No external API calls (all calculations client-side)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Support

For issues, suggestions, or feature requests:
- Email: support@Bunny Calculator.com
- Feedback: feedback@Bunny Calculator.com

## Disclaimer

Bunny Calculator is an educational platform providing tools for financial calculations. Always consult with a qualified financial advisor before making investment decisions.

---

**Made with ❤️ for smart investors**
