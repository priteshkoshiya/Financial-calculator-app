'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(20, { message: 'Message must be at least 20 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      // 🚨 ACTION REQUIRED: Free Formspree Setup 🚨
      // 1. Go to https://formspree.io and create a free account.
      // 2. Create a new form and copy the endpoint URL they give you.
      // 3. Replace the URL below with YOUR unique Formspree URL.
      const response = await fetch('https://formspree.io/f/xzdkpkae', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent! I\'ll get back to you soon.');
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="p-8 bg-card border border-border shadow-xl">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Full Name</label>
            <Input
              placeholder="John Doe"
              {...form.register('name')}
              className="bg-muted/30 border-border focus-visible:ring-primary h-11"
            />
            {form.formState.errors.name && (
              <p className="text-xs text-destructive font-medium">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Email Address</label>
            <Input
              type="email"
              placeholder="john@example.com"
              {...form.register('email')}
              className="bg-muted/30 border-border focus-visible:ring-primary h-11"
            />
            {form.formState.errors.email && (
              <p className="text-xs text-destructive font-medium">{form.formState.errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Subject</label>
          <Input
            placeholder="How can we help?"
            {...form.register('subject')}
            className="bg-muted/30 border-border focus-visible:ring-primary h-11"
          />
          {form.formState.errors.subject && (
            <p className="text-xs text-destructive font-medium">{form.formState.errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Your Message</label>
          <Textarea
            placeholder="Tell us more about your request..."
            {...form.register('message')}
            className="bg-muted/30 border-border focus-visible:ring-primary min-h-[150px] resize-none"
          />
          {form.formState.errors.message && (
            <p className="text-xs text-destructive font-medium">{form.formState.errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all shadow-lg active:scale-[0.98]"
        >
          {isSubmitting ? (
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
          ) : (
            <><Send className="mr-2 h-5 w-5" /> Send Message</>
          )}
        </Button>
      </form>
    </Card>
  );
}
