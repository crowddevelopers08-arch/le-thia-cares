import { AnimateOnScroll } from '@/components/AnimateOnScroll';

const reviews = [
  {
    initials: 'AK',
    name: 'Ananya Kapoor',
    text: `"Amazing experience at Le Thia Cares. The Anna Nagar branch is so luxurious and the treatments actually show results after the first session itself!"`,
  },
  {
    initials: 'RS',
    name: 'Rahul Sharma',
    text: `"Best skin clinic in Chennai hands down. The technology they use is very advanced and the staff is very professional."`,
  },
  {
    initials: 'PM',
    name: 'Priya Mani',
    text: `"The Ice & Fire facial is magic! Highly recommend Le Thia Cares for anyone looking for authentic results in Chennai."`,
  },
];

export function GoogleReviewsSection() {
  return (
    <section id="reviews" className="bg-[#f4f3f1] px-4 py-10 sm:px-6 md:px-[80px] md:py-14 lg:py-20 xl:py-24">
      {/* ── Content ── */}
      <div className="mx-auto max-w-[1280px]">
        <AnimateOnScroll animation="fade-down" className="mb-8 flex flex-col items-center justify-between gap-5 sm:flex-row md:mb-10 lg:mb-14">
          <div className="text-center sm:text-left">
            <h2 className="font-display text-[28px] font-medium leading-[1.2] text-[#1a1c1b] sm:text-[32px] md:text-[40px] lg:text-[48px]">
              Google Reviews
            </h2>
            <div className="mt-2 flex items-center justify-center gap-2 sm:justify-start">
              <span className="font-display text-[24px] font-medium leading-[1.3] text-[#492e3b] md:text-[28px]">4.9</span>
              <div className="flex text-[#492e3b]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px] md:text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                    star
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button className="rounded-[0.5rem] border border-[#d2c3c7] bg-white px-6 py-3 text-[12px] font-semibold tracking-[0.08em] transition-all hover:bg-[#e3e2e0] md:px-8">
            VIEW ALL REVIEWS
          </button>
        </AnimateOnScroll>

        {/* Staggered review cards */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-10 md:grid-cols-3 md:gap-8 lg:mb-14">
          {reviews.map((review, index) => (
            <AnimateOnScroll key={review.name} animation="fade-up" delay={index * 120}>
              <div className="glass-card h-full rounded-[0.5rem] border border-white p-6 shadow-sm md:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#62445233] text-[14px] font-bold text-[#492e3b] md:h-12 md:w-12">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold leading-[1.4] text-[#1a1c1b] md:text-[16px]">{review.name}</h4>
                    <div className="flex text-[#492e3b]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[14px] md:text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-[15px] italic leading-[1.6] text-[#4e4448] md:text-[16px]">{review.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={360} className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a href="#consultation" className="w-full rounded-[0.5rem] bg-[#492e3b] px-10 py-4 text-center text-[12px] font-semibold tracking-[0.08em] text-white shadow-md transition-all hover:bg-[#492e3be6] sm:w-auto">
            BOOK YOUR APPOINTMENT
          </a>
          <a href="https://wa.me/918088009898" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-[0.5rem] bg-[#25D366] px-10 py-4 text-[12px] font-semibold tracking-[0.08em] text-white transition-opacity hover:opacity-90 sm:w-auto">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
