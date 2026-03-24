import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'InvestCalc | Financial Calculators for Smart Investing',
  description: 'Free online financial calculators for stock investing, SIP, SWP, EMI, CAGR, and more. Calculate profits, losses, and investment returns instantly.',
  generator: 'InvestCalc',
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
    title: 'InvestCalc | Financial Calculators for Smart Investing',
    description: 'Free online financial calculators for stock investing, SIP, SWP, EMI, CAGR, and more.',
    url: 'https://investcalc.com',
    siteName: 'InvestCalc',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
