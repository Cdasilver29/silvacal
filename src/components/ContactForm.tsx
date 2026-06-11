'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { budgetRanges, web3FormsAccessKey } from '@/data/contact';
import { whatsappLink } from '@/data/site';

type Status = 'idle' | 'loading' | 'success' | 'error';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
  botcheck: '',
};

const inputClasses =
  'w-full rounded-2xl border border-silver/40 bg-background px-4 py-3 text-body focus:border-electric focus:outline-none';

export default function ContactForm() {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState<Status>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.botcheck) return;

    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: `New quote request from ${form.name}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          budget: form.budget,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setForm(initialFormState);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="botcheck"
        value={form.botcheck}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-heading text-sm font-medium text-navy">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div>
          <label htmlFor="email" className="font-heading text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={`mt-2 ${inputClasses}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="font-heading text-sm font-medium text-navy">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="font-heading text-sm font-medium text-navy">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className={`mt-2 ${inputClasses}`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="font-heading text-sm font-medium text-navy">
            Budget Range (KES)
          </label>
          <select
            id="budget"
            name="budget"
            required
            value={form.budget}
            onChange={handleChange}
            className={`mt-2 ${inputClasses}`}
          >
            <option value="" disabled>
              Select a budget range
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-heading text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-2 rounded-2xl bg-electric px-6 py-3 font-heading text-sm font-semibold text-white transition hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === 'loading' ? 'Sending...' : 'Send Request'}
      </button>

      {status === 'success' && (
        <p className="rounded-2xl border border-electric/40 bg-electric/5 p-4 text-sm text-navy">
          Thanks, we will respond within one business day.
        </p>
      )}

      {status === 'error' && (
        <p className="rounded-2xl border border-silver/40 p-4 text-sm text-body/80">
          Something went wrong sending your message. Please try again, or message us directly on{' '}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-medium text-electric">
            WhatsApp
          </a>
          .
        </p>
      )}
    </form>
  );
}
