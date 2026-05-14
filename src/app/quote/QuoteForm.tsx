'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Please describe your project (at least 10 characters)'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const PROJECT_TYPES = [
  'Commercial Build-Out',
  'Restaurant',
  'Office',
  'Retail',
  'Custom Home',
  'Basement',
  'Garden Suite',
  'Kitchen/Bath',
  'Other',
];

const BUDGET_RANGES = [
  'Under $25,000',
  '$25,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000 – $250,000',
  '$250,000 – $500,000',
  '$500,000+',
  'Not sure yet',
];

const inputClasses =
  'w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all';

const labelClasses = 'block text-xs uppercase tracking-widest text-muted mb-2';

export default function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  async function onSubmit(data: QuoteFormData) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <CheckCircle className="w-12 h-12 text-green-600" />
        <h4
          className="text-xl font-bold"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Quote Request Received!
        </h4>
        <p className="text-muted max-w-sm">
          Thank you! Our team will review your project details and get back to
          you within 48 hours with an estimate.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors mt-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      {/* Name + Email row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="quote-name" className={labelClasses}>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="quote-name"
            type="text"
            placeholder="Your full name"
            className={inputClasses}
            {...register('name')}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="quote-email" className={labelClasses}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="quote-email"
            type="email"
            placeholder="you@example.com"
            className={inputClasses}
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="quote-phone" className={labelClasses}>
          Phone
        </label>
        <input
          id="quote-phone"
          type="tel"
          placeholder="+1 (___) ___-____"
          className={inputClasses}
          {...register('phone')}
        />
      </div>

      {/* Project Type + Budget row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="quote-project-type" className={labelClasses}>
            Project Type <span className="text-red-500">*</span>
          </label>
          <select
            id="quote-project-type"
            className={inputClasses}
            defaultValue=""
            {...register('projectType')}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="text-red-500 text-xs mt-1">
              {errors.projectType.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-budget" className={labelClasses}>
            Budget Range
          </label>
          <select
            id="quote-budget"
            className={inputClasses}
            defaultValue=""
            {...register('budget')}
          >
            <option value="" disabled>
              Select a range
            </option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="quote-timeline" className={labelClasses}>
          Desired Timeline
        </label>
        <input
          id="quote-timeline"
          type="text"
          placeholder="e.g., Start in 2 months, complete by December"
          className={inputClasses}
          {...register('timeline')}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="quote-message" className={labelClasses}>
          Project Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="quote-message"
          rows={6}
          placeholder="Describe your project — scope, location, any special requirements..."
          className={`${inputClasses} resize-none`}
          {...register('message')}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 text-sm font-semibold uppercase tracking-widest bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Submit Quote Request
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
