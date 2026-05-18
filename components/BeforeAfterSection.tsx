import { AnimateOnScroll } from '@/components/AnimateOnScroll';

export function BeforeAfterSection() {
  return (
    <section id="showcase" className="bg-[#f4f3f1] px-4 py-10 sm:px-6 md:px-[80px] md:py-14 lg:py-20 xl:py-24">
      {/* ── Content ── */}
      <AnimateOnScroll animation="fade-down" className="mx-auto mb-8 max-w-[1280px] text-center md:mb-10 lg:mb-14">
        <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#492e3b]">
          You can be next
        </span>
        <h2 className="mt-3 font-display text-[26px] font-medium leading-[1.2] text-[#1a1c1b] sm:text-[32px] md:text-[48px] md:font-semibold md:leading-[1.1] md:tracking-[-0.02em] lg:text-[64px]">
          Get Best Skin Treatments in Chennai
        </h2>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-in" delay={150} className="mx-auto max-w-6xl">
        <div className="group relative flex justify-center">
          <img
            alt="High-end medical aesthetic clinic results"
            className="w-full rounded-[0.5rem] border border-white/50 object-cover shadow-xl transition-transform duration-700 group-hover:scale-[1.01]"
            src="https://lh3.googleusercontent.com/aida/ADBb0uiAkkTHtey15cr6L0ldLTF53rFqpOhi7J5sc1bNSyfhI6AnoazSVQrS-chqb2o0_w8QPdVjYoBQrTRqL0gmxECW-DntRUTDije9kWjSf7WsCOvmXokCvU2nk1YFylbdwRqAzvH6SRxpolgwPdmdYCfAkd3-0nMV0v22SB7KQEkIHzC8JYBXhKRTS6ByHIS_o_HefH1m3w9Tj_Utk9_T7AgjQ5g5iiYiwmu_maNROf4HzZAxdtZpQEMcDH8"
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
