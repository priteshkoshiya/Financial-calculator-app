import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us | Bunny Calculator Support',
  description: 'Get in touch with the Bunny Calculator team to report bugs, request new financial tools, or ask questions.',
  keywords: 'contact bunny calculator, support email, request a calculator, report bug',
};

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We're dedicated to improving our tools. Let us know how we can help or how we can do better!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl mb-4">
                📧
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Help & Support</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Need help understanding a calculator formula? Or spotted a technical glitch? We've got you covered.
              </p>
              <a
                href="mailto:support@bunnycalculator.com"
                className="inline-block mt-auto px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                support@bunnycalculator.com
              </a>
            </Card>

            <Card className="p-8 bg-card border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl mb-4">
                💡
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Ideas & Feedback</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                If you have an idea for a completely new investment tool that we're missing, we'd absolutely love to build it!
              </p>
              <a
                href="mailto:feedback@bunnycalculator.com"
                className="inline-block mt-auto px-6 py-2 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity border border-secondary/30"
              >
                feedback@bunnycalculator.com
              </a>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/5 border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Before You Email Us</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">1. Check the Guides</h3>
                <p className="text-sm text-muted-foreground">
                  Almost every tool on our site has a detailed "How to Use" guide directly beneath the calculator. Check it out first!
                </p>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">2. Check our FAQ</h3>
                <p className="text-sm text-muted-foreground">
                  Your question might have already been asked by another investor. Visit our Frequently Asked Questions section.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-primary/5 border border-primary/20 text-center">
            <h2 className="text-lg font-bold text-foreground mb-2 flex justify-center items-center gap-2">
              <span>⏱️</span> Expected Response Time
            </h2>
            <p className="text-sm text-muted-foreground">
              Our small development team aims to read every email within <strong>24 to 48 hours</strong> during standard business days. We deeply appreciate your patience and input!
            </p>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
