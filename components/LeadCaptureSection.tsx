'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

const TREATMENTS = [
  'Ice & Fire Facial',
  'Red Carpet Peel',
  'Hydra Facial + Skin Polishing + Peel',
  'Other / Not Sure Yet',
];

function isValidIndianPhone(raw: string) {
  const cleaned = raw.replace(/[\s\-\(\)]/g, '').replace(/^\+91/, '');
  return /^[6-9]\d{9}$/.test(cleaned);
}

export function LeadCaptureSection() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', phone: '', location: '', treatment: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // ── Client-side validation ─────────────────────────────
    if (!form.name.trim()) { setError('Please enter your full name.'); return; }
    if (form.name.trim().length < 2) { setError('Name must be at least 2 characters.'); return; }
    if (!form.phone.trim()) { setError('Please enter your phone number.'); return; }
    if (!isValidIndianPhone(form.phone)) {
      setError('Please enter a valid 10-digit Indian mobile number (e.g. 98765 43210).');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Something went wrong. Please try again.'); return; }
      router.push('/thank-you');
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    'w-full border-b-2 border-[#d2c3c7] bg-transparent px-1 py-3 text-[16px] font-normal leading-[1.6] text-[#1a1c1b] outline-none transition-all placeholder:text-[#80747880] focus:border-[#492e3b]';
  const labelCls = 'block text-[12px] font-semibold leading-[1] tracking-[0.08em] text-[#4e4448]';

  return (
    <section
      id="consultation"
      className="bg-[#f4f3f1] px-4 pb-4 pt-10 sm:px-6 md:px-[80px] md:pb-6 md:pt-14 max-[470px]:pb-0 lg:pb-8 lg:pt-20 xl:pb-10 xl:pt-24"
    >
      <AnimateOnScroll
        animation="fade-up"
        className="glass-card mx-auto max-w-[1280px] rounded-[0.5rem] border border-[#d2c3c74d] p-6 shadow-sm sm:p-8 md:p-12 lg:p-16"
      >
        {/* Heading */}
        <div className="mb-8 text-center md:mb-10">
          <h2 className="font-display text-[24px] font-medium leading-[1.3] text-[#1a1c1b] md:text-[28px] lg:text-[34px]">
            Schedule Your Consultation
          </h2>
          <p className="mt-2 text-[15px] font-normal leading-[1.6] text-[#4e4448] md:text-[16px]">
            Start your journey to luminous skin today with Le Thia Cares.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* ── Row 1: Name + Phone ── */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
            <div className="flex flex-col space-y-2">
              <label className={labelCls}>
                FULL NAME <span className="ml-0.5 text-[#492e3b]">*</span>
              </label>
              <input
                className={inputCls}
                placeholder="Your full name"
                type="text"
                value={form.name}
                onChange={set('name')}
                autoComplete="name"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className={labelCls}>
                MOBILE NUMBER <span className="ml-0.5 text-[#492e3b]">*</span>
              </label>
              <input
                className={inputCls}
                placeholder="+91 98765 43210"
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                autoComplete="tel"
                required
              />
            </div>
          </div>

          {/* ── Row 2: Location + Treatment ── */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-8 md:gap-8">
            <div className="flex flex-col space-y-2">
              <label className={labelCls}>PREFERRED BRANCH</label>
              <input
                className={inputCls}
                placeholder="Anna Nagar, Chennai"
                type="text"
                value={form.location}
                onChange={set('location')}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className={labelCls}>TREATMENT INTEREST</label>
              <select
                className={`${inputCls} cursor-pointer appearance-none pr-6`}
                value={form.treatment}
                onChange={set('treatment')}
              >
                <option value="">Select a treatment…</option>
                {TREATMENTS.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* ── Error message ── */}
          {error && (
            <div className="mt-5 flex items-start gap-2 rounded-[0.5rem] bg-red-50 px-4 py-3">
              <span className="material-symbols-outlined mt-0.5 text-[18px] text-red-500" style={{ fontVariationSettings: '"FILL" 1' }}>
                error
              </span>
              <p className="text-[13px] font-medium text-red-700">{error}</p>
            </div>
          )}

          {/* ── Submit ── */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-[0.5rem] bg-[#492e3b] px-10 py-4 text-[12px] font-semibold tracking-[0.08em] text-white shadow-lg transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              )}
              {loading ? 'SUBMITTING…' : 'BOOK YOUR APPOINTMENT'}
            </button>
          </div>
        </form>
      </AnimateOnScroll>
    </section>
  );
}
