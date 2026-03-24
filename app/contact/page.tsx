import { MainLayout } from '@/components/main-layout';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Contact InvestCalc | Financial Calculators',
  description: 'Contact InvestCalc for support, feedback, and inquiries',
};

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Email</h3>
              <p className="text-muted-foreground mb-2">For inquiries and support:</p>
              <a
                href="mailto:support@investcalc.com"
                className="text-primary font-semibold hover:opacity-80 transition-opacity"
              >
                support@investcalc.com
              </a>
            </Card>

            <Card className="p-8 bg-card border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Feedback</h3>
              <p className="text-muted-foreground mb-2">Share your suggestions:</p>
              <a
                href="mailto:feedback@investcalc.com"
                className="text-primary font-semibold hover:opacity-80 transition-opacity"
              >
                feedback@investcalc.com
              </a>
            </Card>
          </div>

          <Card className="p-8 bg-secondary/10 border border-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Have a Question?</h3>
                <p className="text-muted-foreground">
                  Check our FAQ page first - it might have the answer you're looking for.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Found a Bug?</h3>
                <p className="text-muted-foreground">
                  Please let us know by emailing support@investcalc.com with details about the issue.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Feature Request?</h3>
                <p className="text-muted-foreground">
                  We're always looking to add new calculators and features. Send your ideas to feedback@investcalc.com.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Response Time</h2>
            <p className="text-muted-foreground">
              We aim to respond to all inquiries within 48 hours during business days. Thank you for your patience.
            </p>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
