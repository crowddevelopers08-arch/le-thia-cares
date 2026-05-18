import Image from 'next/image';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

const offerImages = [
  { src: '/1st.png', alt: 'Ice & Fire Facial – ₹5499' },
  { src: '/2nd.png', alt: 'Red Carpet Peel – ₹4499' },
  { src: '/3rd.png', alt: 'Hydra Facial + Skin Polishing + Peel – ₹4999' },
];

export function OffersSection() {
  return (
    <section id="services-offers" className="bg-[#efeeec] px-4 py-10 sm:px-6 md:px-[80px] md:py-14 lg:py-20 xl:py-24">

      <AnimateOnScroll animation="fade-down" className="mx-auto mb-8 max-w-[1280px] text-center md:mb-10 lg:mb-14">
        <h2 className="font-display text-[28px] font-medium leading-[1.2] text-[#1a1c1b] sm:text-[32px] md:text-[40px] lg:text-[48px]">
          Exclusive Treatment Packages
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#492e3b] md:mt-4" />
      </AnimateOnScroll>

      <AnimateOnScroll
        animation="fade-up"
        delay={150}
        className="mx-auto mb-8 grid max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-3 md:mb-10 md:gap-6 lg:mb-14 lg:gap-8"
      >
        {offerImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[0.75rem] shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={300} className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <a href="#consultation" className="w-full rounded-[0.5rem] bg-[#492e3b] px-10 py-4 text-center text-[12px] font-semibold tracking-[0.08em] text-white shadow-md transition-all hover:shadow-xl sm:w-auto">
          BOOK YOUR APPOINTMENT
        </a>
        <a href="tel:+918088009898" className="flex w-full items-center justify-center gap-2 rounded-[0.5rem] border-2 border-[#71594e] px-10 py-4 text-[12px] font-semibold tracking-[0.08em] text-[#71594e] transition-all hover:bg-[#71594e] hover:text-white sm:w-auto">
          <span className="material-symbols-outlined text-sm">call</span>
          CALL NOW
        </a>
      </AnimateOnScroll>

    </section>
  );
}
