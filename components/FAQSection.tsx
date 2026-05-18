'use client';
import { useState } from 'react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

const faqItems = [
  {
    question: 'Are the treatments safe for all skin types?',
    answer:
      'Yes, all our treatments at Le Thia Cares are US FDA cleared and conducted by certified professionals, ensuring safety across all skin types including sensitive, oily, dry, and combination skin.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'Results vary by treatment and individual skin condition. Most clients see noticeable improvement after 2–3 sessions, while optimal results are typically achieved with a full course of 4–6 sessions. Our specialists will create a personalised treatment plan during your free consultation.',
  },
  {
    question: 'Is there any downtime after the facials?',
    answer:
      'Our signature facials require zero to minimal downtime. You can return to your daily activities immediately after most treatments. For certain advanced procedures, mild redness may appear for a few hours. Our experts will give you specific post-care instructions tailored to your chosen treatment.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#faf9f7] px-4 py-10 sm:px-6 md:px-[80px] md:py-14 lg:py-20 xl:py-24">
      {/* ── Content ── */}
      <div className="mx-auto max-w-3xl">
        <AnimateOnScroll animation="fade-down">
          <h2 className="mb-8 text-center font-display text-[26px] font-medium leading-[1.2] text-[#1a1c1b] sm:text-[32px] md:mb-10 md:text-[40px] lg:text-[48px]">
            Frequently Asked Questions
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={150}>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className="border-b border-[#d2c3c7] py-3 md:py-4"
              >
                <button
                  className="group flex w-full items-start justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[16px] font-bold leading-[1.5] text-[#1a1c1b] transition-colors group-hover:text-[#492e3b] md:text-[18px] md:leading-[1.6]">
                    {item.question}
                  </span>
                  <span
                    className="material-symbols-outlined flex-shrink-0 text-[#492e3b] transition-transform duration-300"
                    style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    add
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-3 text-[15px] leading-[1.7] text-[#4e4448] md:mt-4 md:text-[16px]">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={300} className="mt-10 flex justify-center md:mt-12 lg:mt-16">
          <a
            href="#consultation"
            className="rounded-[0.5rem] bg-[#492e3b] px-10 py-4 text-[12px] font-semibold tracking-[0.08em] text-white shadow-md transition-all hover:bg-[#492e3be6] active:scale-95"
          >
            BOOK YOUR APPOINTMENT
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
