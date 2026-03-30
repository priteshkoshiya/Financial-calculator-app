import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://finance.bunnycalculator.com'),
  title: 'Bunny Calculator | Financial Calculators for Smart Investing',
  description: 'Free online financial calculators for stock investing, SIP, SWP, EMI, CAGR, and more. Calculate profits, losses, and investment returns instantly.',
  generator: 'Bunny Calculator',
  keywords: 'stock calculator, SIP calculator, SWP calculator, EMI calculator, CAGR calculator, investment calculator',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Bunny Calculator | Financial Calculators for Smart Investing',
    description: 'Free online financial calculators for stock investing, SIP, SWP, EMI, CAGR, and more.',
    url: 'https://finance.bunnycalculator.com',
    siteName: 'Bunny Calculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bunny Calculator | Free Financial Calculators',
    description: 'Free online financial calculators for smart investing',
    creator: '@Bunny Calculator',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Bunny Calculator',
  url: 'https://finance.bunnycalculator.com',
  description: 'Free financial calculators for investing, retirement planning, capital gains, portfolio tracking, SIP, SWP, EMI, CAGR, and more.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
