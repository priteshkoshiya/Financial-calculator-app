# GitHub Deployment Guide for Bunny Calculator

This guide walks you through deploying Bunny Calculator to GitHub and connecting it to Vercel for automatic deployments.

## Prerequisites

- GitHub account (https://github.com)
- Vercel account (https://vercel.com) - free tier is fine
- Git installed locally

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `Bunny Calculator`
3. Set visibility to **Public** (recommended) or **Private**
4. Do NOT initialize with README (we have one)
5. Click "Create repository"

## Step 2: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Bunny Calculator financial calculator platform"

# Add GitHub remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/Bunny Calculator.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Set Up Vercel Deployment

### Option A: Automatic with Vercel GitHub Integration (Recommended)

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Paste your repository URL: `https://github.com/USERNAME/Bunny Calculator`
5. Click "Import"
6. Vercel will detect it's a Next.js project
7. Click "Deploy"
8. Your site will be live at `Bunny Calculator.vercel.app` (or custom domain)

### Option B: Manual Deployment with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Step 4: Configure GitHub Actions

The project includes GitHub Actions workflows for:
- **CI (Continuous Integration)**: Runs linting and builds on every push
- **Deploy**: Automatically deploys to Vercel when merged to main

### Required GitHub Secrets (for CI/CD):

If using GitHub Actions to deploy:

1. Go to your repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add these secrets:

```
VERCEL_TOKEN         - Get from https://vercel.com/account/tokens
VERCEL_ORG_ID        - Found in Vercel project settings
VERCEL_PROJECT_ID    - Found in Vercel project settings
```

To find Vercel IDs:
1. Go to your project on Vercel
2. Click "Settings"
3. Scroll to "Project ID" and "Org ID"
4. Copy both values

## Step 5: Environment Variables

1. Create `.env.local` from `.env.example`:
```bash
cp .env.example .env.local
```

2. Update values if needed (most are optional)

3. For production (Vercel):
   - Go to Vercel project → Settings → Environment Variables
   - Add any production-specific variables

## Step 6: Configure Custom Domain (Optional)

### On Vercel:
1. Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain
4. Follow DNS configuration instructions

### Using a .com Domain:
- Purchase domain from Namecheap, GoDaddy, or similar
- Update DNS records to point to Vercel
- Vercel provides exact DNS records needed

## Continuous Deployment Workflow

Once set up, here's how updates work:

```
You push to GitHub (git push)
    ↓
GitHub Actions runs CI/CD tests
    ↓
If tests pass, auto-deploy to Vercel
    ↓
Site updates live (usually in 30-60 seconds)
```

## Making Updates

```bash
# Make changes to code
nano app/page.tsx

# Stage and commit
git add .
git commit -m "Update: Add new feature"

# Push to GitHub
git push origin main

# Vercel automatically deploys!
```

## Monitoring Deployments

### GitHub:
1. Go to repository → Actions tab
2. See real-time CI/CD status
3. Click workflow to see detailed logs

### Vercel:
1. Go to project dashboard
2. See deployment history
3. Click deployment to see analytics, logs, etc.

## Troubleshooting

### Build Fails on Vercel
- Check GitHub Actions logs first
- Vercel shows build errors in deployment logs
- Common issues:
  - Missing environment variables
  - Node version mismatch
  - Missing dependencies

### Custom Domain Not Working
- Wait 24-48 hours for DNS to propagate
- Check Vercel DNS records match your registrar
- Test with: `nslookup yourdomain.com`

### GitHub Actions Not Triggering
- Workflows only run when `.github/workflows/*.yml` files are present
- Check workflow files exist in repository
- Enable Actions in repository settings if disabled

## Best Practices

1. **Branch Protection**
   - Settings → Branches → Add rule
   - Require status checks to pass
   - Prevent merging failing code

2. **Code Review**
   - Require pull request reviews
   - Don't push directly to main

3. **Semantic Commits**
   ```bash
   git commit -m "feat: Add new calculator"
   git commit -m "fix: Correct calculation formula"
   git commit -m "docs: Update README"
   ```

4. **Regular Backups**
   - GitHub stores your code
   - Vercel has automatic backups
   - Both are enterprise-grade

5. **Monitor Performance**
   - Use Vercel Analytics tab
   - Check Core Web Vitals
   - Monitor error rates

## Next Steps

1. Add collaborators (Settings → Collaborators)
2. Set up branch protection rules
3. Configure custom domain
4. Add project board for tracking issues
5. Enable discussions for community

## Support

- **GitHub Docs**: https://docs.github.com
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs

## Summary

Your Bunny Calculator site is now:
- Hosted on GitHub (version control)
- Deployed on Vercel (production hosting)
- Using CI/CD (automated testing & deployment)
- Ready for collaboration
- Scalable to millions of users
