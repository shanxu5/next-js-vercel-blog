'use client';

import { Button } from '@repo/ui/components/button';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactFormAction } from '@/app/contact/actions';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = React.useActionState(submitContactFormAction, {
    success: false,
    message: null,
  });

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label
            className="mb-2 block font-medium text-foreground text-sm"
            htmlFor="name"
          >
            Name <span className="text-destructive">*</span>
          </label>
          <input
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            type="text"
          />
        </div>

        <div>
          <label
            className="mb-2 block font-medium text-foreground text-sm"
            htmlFor="email"
          >
            Email <span className="text-destructive">*</span>
          </label>
          <input
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            id="email"
            name="email"
            placeholder="john@example.com"
            required
            type="email"
          />
        </div>
      </div>

      <div>
        <label
          className="mb-2 block font-medium text-foreground text-sm"
          htmlFor="subject"
        >
          Subject
        </label>
        <input
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          id="subject"
          name="subject"
          placeholder="How can we help?"
          type="text"
        />
      </div>

      <div>
        <label
          className="mb-2 block font-medium text-foreground text-sm"
          htmlFor="message"
        >
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          id="message"
          name="message"
          placeholder="Tell us more about your inquiry..."
          required
          rows={6}
        />
      </div>
      <SubmitButton />
      {state.message && (
        <p
          className={`mt-4 ${state.success ? 'text-green-600' : 'text-red-600'}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
