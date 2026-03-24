# Bunny Calculator - Quick Start Guide

Get your financial calculator website up and running in minutes! 🚀

## 📋 Pre-requisites

- Node.js 18+ installed
- pnpm, npm, or yarn package manager
- A code editor (VS Code recommended)
- 5 minutes of your time

## ⚡ Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
cd Bunny Calculator
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```

### 3. Open in Browser
Visit `http://localhost:3000`

That's it! Your calculator site is live! 🎉

## 🎯 What's Included?

✅ 15 fully functional calculators
✅ Professional design system
✅ Mobile-responsive layout
✅ SEO optimized
✅ 100% performance optimized
✅ No backend required
✅ No database needed
✅ Ready to deploy

## 🚀 Deploy in 2 Minutes

### Option 1: Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Connect to Vercel
# Import repo from vercel.com/new
# Deploy with one click!
```

### Option 2: Any Node.js Host
```bash
pnpm run build
npm start
```

## 📱 Test Your Site

### Desktop
- Open http://localhost:3000
- Click on calculators
- Try different inputs
- Check results

### Mobile
- Open from your phone
- Test responsive design
- Verify touch interactions

## 🎨 Customize in 5 Minutes

### 1. Change Colors
Edit `app/globals.css`:
```css
--primary: oklch(0.45 0.25 256); /* Your brand color */
```

### 2. Change Site Name
Edit `app/layout.tsx`:
```typescript
title: 'YourSiteName | Financial Calculators'
```

### 3. Change Email
Edit `app/contact/page.tsx`:
```tsx
support@yoursite.com
```

## 📊 Calculator Pages

All calculators follow the same pattern:

1. **Form** - Enter your numbers
2. **Calculate** - Click the button
3. **Results** - See formatted results
4. **Learn** - Read the FAQ section

## 🔧 File Structure at a Glance

```
Bunny Calculator/
├── app/                    # All pages go here
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Styles & colors
│   └── [calculator]/      # Calculator pages
├── components/            # Reusable components
├── lib/                   # Calculator logic
├── public/                # Static files
└── package.json           # Dependencies
```

## 💻 Common Commands

```bash
# Development
pnpm dev                  # Start dev server

# Production
pnpm build               # Build for production
npm start                # Run production build

# Code Quality
pnpm lint                # Check for errors
pnpm format              # Format code (if configured)
```

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
pnpm dev -p 3001  # Use different port
```

### Node Modules Issue
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Errors
```bash
pnpm clean                # Clear Next.js cache
pnpm build                # Rebuild
```

## 📚 Learning Resources

### Inside the Project
- `README.md` - Full documentation
- `CUSTOMIZATION_GUIDE.md` - How to customize
- `PROJECT_SUMMARY.md` - What was built

### External Resources
- [Next.js 16 Docs](https://nextjs.org)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)

## ✅ Verification Checklist

- [ ] Dev server running on localhost:3000
- [ ] Home page loads without errors
- [ ] Sidebar navigation works
- [ ] Click a calculator - page loads
- [ ] Enter values - calculator works
- [ ] Results display correctly
- [ ] Clear button resets form
- [ ] FAQ section expands/collapses
- [ ] Mobile responsive test passed
- [ ] No console errors

## 🎯 Next Steps

1. **Test All Calculators**
   - Try each calculator with different values
   - Verify all formulas are accurate

2. **Customize Branding**
   - Change colors in globals.css
   - Update site name
   - Add your contact info

3. **Deploy**
   - Push to GitHub
   - Connect to Vercel
   - Monitor analytics

4. **Add Your Content**
   - Update FAQ sections
   - Add your own examples
   - Write helpful guides

5. **Promote Your Site**
   - Share on social media
   - Submit to search engines
   - Embed on your website

## 💡 Pro Tips

1. **Dark Mode Support** - Built-in! Users can toggle in their system settings
2. **Mobile First** - Test on mobile as you develop
3. **SEO Ready** - Sitemap and robots.txt included
4. **Analytics Included** - Vercel Analytics already set up
5. **Zero API Calls** - All calculations are client-side
6. **Super Fast** - Static site generation for blazing speed

## 🆘 Need Help?

### Quick Fixes
- Clear browser cache: Ctrl+Shift+Delete
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Restart dev server: Ctrl+C then `pnpm dev`

### Debug Mode
Add to calculator page:
```tsx
console.log('Debug:', { input1, input2, result });
```

### Common Issues
- **Styles not loading** → Clear node_modules and reinstall
- **Calculator not calculating** → Check browser console for errors
- **Mobile layout broken** → Test in Chrome DevTools mobile mode

## 🎉 You're Ready!

Your financial calculator website is ready to go!

**Next Actions:**
1. ✅ Customize colors and branding
2. ✅ Test all calculators
3. ✅ Update contact information
4. ✅ Deploy to Vercel
5. ✅ Share with users

## 📞 Support Resources

- **Documentation**: See README.md
- **Customization**: See CUSTOMIZATION_GUIDE.md
- **Project Details**: See PROJECT_SUMMARY.md
- **Issues**: Check browser console (F12)

---

**Time to launch? Let's go! 🚀**

Start your dev server with:
```bash
pnpm dev
```

Visit http://localhost:3000 and see your calculator site come to life!
