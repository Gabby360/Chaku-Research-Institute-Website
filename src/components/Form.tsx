import React, { useState } from 'react';
import { FormField } from '../types';

interface FormProps {
  formId: string;
  formName: string;
  submitAddr?: string;
  fields: FormField[];
  submitLabel: string;
  successTitle?: string;
  successMessage?: string;
  tone?: 'light' | 'dark';
  note?: string;
}

export const Form: React.FC<FormProps> = ({
  formId,
  formName,
  fields,
  submitLabel,
  successTitle = 'Thank you',
  successMessage = 'Your message has been received.',
  tone = 'light',
  note
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className={`rounded-2xl p-8 text-center border ${
        tone === 'dark'
          ? 'border-background-50/20 bg-background-50/5 text-background-50'
          : 'border-background-200 bg-background-50 text-foreground-900 shadow-sm'
      }`}>
        <div className="mx-auto flex items-center justify-center text-accent-500 mb-2">
          <i className="ri-checkbox-circle-line text-4xl"></i>
        </div>
        <h3 className="font-heading text-2xl font-bold">{successTitle}</h3>
        <p className="mt-2 text-sm text-foreground-600 opacity-90">{successMessage}</p>
        <button
          onClick={() => { setSubmitted(false); setFormData({}); }}
          className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent-600 hover:underline"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1.5">
          <label
            htmlFor={`${formId}-${field.name}`}
            className={`text-xs font-semibold uppercase tracking-wider ${
              tone === 'dark' ? 'text-background-50/80' : 'text-foreground-700'
            }`}
          >
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={`${formId}-${field.name}`}
              name={field.name}
              required={field.required}
              rows={4}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className={`rounded-lg border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                tone === 'dark'
                  ? 'border-background-50/20 bg-background-50/10 text-background-50 placeholder-background-50/40 focus:border-accent-400 focus:ring-accent-400/30'
                  : 'border-background-300 bg-background-50 text-foreground-900 placeholder-foreground-400 focus:border-primary-600 focus:ring-primary-600/20'
              }`}
            />
          ) : field.type === 'select' ? (
            <select
              id={`${formId}-${field.name}`}
              name={field.name}
              required={field.required}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className={`rounded-lg border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                tone === 'dark'
                  ? 'border-background-50/20 bg-primary-950 text-background-50 focus:border-accent-400 focus:ring-accent-400/30'
                  : 'border-background-300 bg-background-50 text-foreground-900 focus:border-primary-600 focus:ring-primary-600/20'
              }`}
            >
              <option value="">Select an option...</option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={`${formId}-${field.name}`}
              type={field.type || 'text'}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className={`rounded-lg border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                tone === 'dark'
                  ? 'border-background-50/20 bg-background-50/10 text-background-50 placeholder-background-50/40 focus:border-accent-400 focus:ring-accent-400/30'
                  : 'border-background-300 bg-background-50 text-foreground-900 placeholder-foreground-400 focus:border-primary-600 focus:ring-primary-600/20'
              }`}
            />
          )}
        </div>
      ))}
      {note && (
        <p className={`text-xs leading-relaxed ${tone === 'dark' ? 'text-background-50/60' : 'text-foreground-500'}`}>
          {note}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="mt-2 rounded-lg bg-accent-500 px-6 py-3.5 text-center text-sm font-semibold text-foreground-950 transition-all hover:bg-accent-400 active:scale-[0.99] disabled:opacity-50"
      >
        {loading ? 'Submitting...' : submitLabel}
      </button>
    </form>
  );
};
export default Form;
