# Contributing to Bunny Calculator

Thank you for considering contributing to Bunny Calculator! We welcome contributions from everyone.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature/fix
4. Make your changes
5. Push to your fork
6. Submit a pull request

## Development Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run linting
pnpm lint

# Build for production
pnpm build

# Type checking
pnpm tsc --noEmit
```

## Code Standards

### Commit Messages
Use semantic commit messages:
```
feat: Add new calculator feature
fix: Correct calculation formula
docs: Update README
style: Fix code formatting
refactor: Improve code structure
test: Add unit tests
perf: Optimize performance
```

### Code Style
- Use TypeScript for type safety
- Follow Next.js app router conventions
- Use Tailwind CSS for styling
- Keep components small and focused
- Add proper JSDoc comments for functions

### Component Guidelines
- Create new client components in `components/`
- Use the `'use client'` directive for interactive components
- Keep pages as Server Components when possible
- Add ARIA labels for accessibility
- Test on mobile devices

## Adding a New Calculator

1. **Create the calculator function** in `lib/calculators.ts`:
```typescript
export function calculateMyCalculator(input1: number, input2: number) {
  // Calculate result
  const result = input1 + input2;

  return {
    result: Math.round(result * 100) / 100,
    // other fields
  };
}
```

2. **Create the page** in `app/[calculator]/page.tsx`:
```typescript
import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';

export const metadata: Metadata = {
  title: 'My Calculator | Bunny Calculator',
  description: 'Calculate something interesting.',
};

export default function Page() {
  return (
    <MainLayout>
      {/* Content */}
    </MainLayout>
  );
}
```

3. **Add to sidebar** in `components/sidebar.tsx`
4. **Update sitemap** in `app/sitemap.ts`
5. **Test thoroughly** on mobile and desktop

## Testing

- Test calculator accuracy with multiple inputs
- Test responsive design on all screen sizes
- Test accessibility with screen readers
- Test SEO with metadata tools
- Check Lighthouse scores

## Pull Request Process

1. Update README.md if adding new features
2. Ensure tests pass: `pnpm build`
3. Update documentation as needed
4. Create PR with descriptive title
5. Link any related issues
6. Wait for code review

## Issue Guidelines

### Bug Reports
Include:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Browser/device info
- Screenshots if applicable

### Feature Requests
Include:
- Clear description of feature
- Use cases/benefits
- Proposed implementation
- Any concerns or tradeoffs

## Code Review

Reviewers will check:
- Code quality and style
- Performance implications
- Accessibility compliance
- SEO impact
- Calculator accuracy (if applicable)
- Documentation completeness

## Performance Guidelines

- Keep bundle size minimal
- Avoid large dependencies
- Use client-side calculations when possible
- Optimize images and assets
- Monitor Core Web Vitals

## Accessibility Standards

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios (4.5:1+)
- Semantic HTML structure
- ARIA labels where needed

## Documentation

- Update README for major changes
- Add comments for complex logic
- Include calculator formulas
- Document environment variables
- Update deployment guides if needed

## Questions?

- Check existing issues and discussions
- Open a discussion for questions
- Comment on related issues
- Email maintainers for urgent issues

## Code of Conduct

- Be respectful and inclusive
- Assume good intentions
- Welcome diverse perspectives
- Provide constructive feedback
- Report harassment or abuse

## License

By contributing, you agree your code will be licensed under MIT License.

---

**Thank you for improving Bunny Calculator!** 🎉
