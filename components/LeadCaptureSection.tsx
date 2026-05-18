'use client';
import { useState } from 'react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

const fields = [
  { key: 'name',     label: 'NAME',     placeholder: 'Your full name',      type: 'text', required: true  },
  { key: 'phone',    label: 'NUMBER',   placeholder: '+91 00000 00000',      type: 'tel',  required: true  },
  { key: 'location', label: 'LOCATION', placeholder: 'Preferred branch',     type: 'text', required: false },
] as const;

export function LeadCaptureSection() {
  const [form, setForm]           = useState({ name: '', phone: '', location: '' });
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim())  { setError('Please enter your name.');         return; }
    if (!form.phone.trim()) { setError('Please enter your phone number.'); return; }
    setError('');
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  return (
    <section
      id="consultation"
className="bg-[#f4f3f1] px-4 pt-10 pb-4 sm:px-6 md:px-[80px] md:pt-14 md:pb-6 max-[470px]:pb-0 lg:pt-20 lg:pb-8 xl:pt-24 xl:pb-10"    >
      {/* ── Glass card (AnimateOnScroll renders the wrapper div) ── */}
      <AnimateOnScroll
        animation="fade-up"
        className="glass-card mx-auto max-w-[1280px] rounded-[0.5rem] border border-[#d2c3c74d] p-6 shadow-sm sm:p-8 md:p-12 lg:p-16"
      >
        {/* Card content */}
        <div className="mb-8 text-center md:mb-10">
          <h2 className="font-display text-[24px] font-medium leading-[1.3] text-[#1a1c1b] md:text-[28px] lg:text-[34px]">
            Schedule Your Consultation
          </h2>
          <p className="mt-2 text-[15px] font-normal leading-[1.6] text-[#4e4448] md:text-[16px]">
            Start your journey to luminous skin today with Le Thia Cares.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <span
              className="material-symbols-outlined text-5xl text-[#492e3b]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              check_circle
            </span>
            <h3 className="mt-4 font-display text-[22px] font-medium text-[#1a1c1b]">
              Thank you, {form.name}!
            </h3>
            <p className="mt-2 text-[16px] text-[#4e4448]">
              We&apos;ll reach out at <strong>{form.phone}</strong> to confirm your free consultation.
            </p>
            <button
              className="mt-6 rounded-[0.5rem] border border-[#d2c3c7] px-8 py-3 text-[12px] font-semibold tracking-[0.08em] text-[#492e3b] transition-all hover:bg-[#492e3b0d]"
              onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', location: '' }); }}
            >
              BOOK ANOTHER
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              {fields.map(({ key, label, placeholder, type, required }) => (
                <div key={key} className="flex flex-col space-y-2">
                  <label className="text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#4e4448]">
                    {label}
                    {required && <span className="ml-1 text-[#492e3b]">*</span>}
                  </label>
                  <input
                    className="border-b-2 border-[#d2c3c7] bg-transparent px-1 py-3 text-[16px] font-normal leading-[1.6] text-[#1a1c1b] outline-none transition-all placeholder:text-[#80747880] focus:border-[#492e3b]"
                    placeholder={placeholder}
                    type={type}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    required={required}
                  />
                </div>
              ))}
            </div>
            {error && (
              <p className="mt-4 text-center text-[13px] font-semibold text-red-600">{error}</p>
            )}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="rounded-[0.5rem] bg-[#492e3b] px-10 py-4 text-[12px] font-semibold tracking-[0.08em] text-white shadow-lg transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'SUBMITTING…' : 'BOOK YOUR APPOINTMENT'}
              </button>
            </div>
          </form>
        )}
      </AnimateOnScroll>
    </section>
  );
}
