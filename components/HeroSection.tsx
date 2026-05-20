import { InstagramVideoEmbed } from '@/components/InstagramVideoEmbed';
import { WaveText } from '@/components/WaveText';

export function HeroSection() {
  const featuredInstagramUrl = 'https://www.instagram.com/reels/DXJmh5Mj5r8/';

  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 pb-8 pt-10 sm:px-6 md:px-[80px] md:pb-24 md:pt-16 lg:pb-32 lg:pt-20 xl:pb-40 xl:pt-24"
    >
      {/* Mobile background (portrait) */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: "url('/bgmobthis.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Desktop background (landscape) */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url('/bgthia.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-[1] mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">

        {/* Left column */}
        <div className="flex flex-col items-center text-center space-y-4 md:items-start md:text-left md:space-y-6">
          <span className="hero-anim-label text-[12px] font-semibold uppercase tracking-[0.08em] text-[#492e3b]">
            Book your appointments at
          </span>
          <h1 className="hero-anim-title font-display text-[28px] font-medium leading-[1.2] text-[#1a1c1b] sm:text-[36px] md:text-[52px] md:font-semibold md:leading-[1.1] md:tracking-[-0.02em] lg:text-[64px]">
            Best Skin Clinic in Anna Nagar
          </h1>
          <p className="hero-anim-desc mx-auto max-w-lg text-[16px] font-normal leading-[1.6] text-[#4e4448] md:mx-0 md:text-[18px]">
            Best offers with best Results in Anna Nagar.
          </p>

          {/* Video — mobile only (between description and badges) */}
          <div className="hero-anim-video md:hidden">
            <div className="mx-auto w-[280px] overflow-hidden rounded-[1rem] border-4 border-white bg-white shadow-2xl" style={{ height: '500px' }}>
              <InstagramVideoEmbed
                url={featuredInstagramUrl}
                title="Clinic Experience Reel"
              />
            </div>
          </div>

          <div className="hero-anim-badges flex flex-wrap justify-center gap-3 pt-2 md:justify-start md:gap-4 md:pt-4">
            {[
              ['verified_user', 'US FDA Machines'],
              ['health_and_safety', '100% Safe'],
              ['groups', '1,00,000+ Happy Clients'],
            ].map(([icon, label]) => (
              <div key={label} className="glass-card flex items-center gap-2 rounded-[0.5rem] p-2.5 md:p-3">
                <span
                  className="material-symbols-outlined text-[20px] text-[#71594e] md:text-[24px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  {icon}
                </span>
                <span className="text-[11px] font-semibold leading-[1] tracking-[0.08em] md:text-[12px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="hero-anim-ctas flex flex-wrap justify-center gap-3 pt-2 md:justify-start">
            <a
              href="#consultation"
              className="btn-primary inline-flex items-center justify-center rounded-[0.5rem] bg-[#492e3b] px-6 py-3 text-[12px] font-semibold tracking-[0.08em] text-white hover:bg-[#492e3be6]"
            >
              <WaveText>BOOK YOUR APPOINTMENT</WaveText>
            </a>
            <a
              href="tel:+918088009898"
              className="btn-outline flex items-center gap-2 rounded-[0.5rem] border border-[#492e3b4d] px-6 py-3 text-[12px] font-semibold tracking-[0.08em] text-[#492e3b] hover:bg-[#492e3b0d]"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              <WaveText>CALL NOW</WaveText>
            </a>
          </div>
        </div>

        {/* Right column – video (desktop only) */}
        <div className="hero-anim-video group relative hidden md:block">
          <div className="mx-auto w-[320px] overflow-hidden rounded-[1.5rem] border-4 border-white bg-white shadow-2xl" style={{ height: '560px' }}>
            <InstagramVideoEmbed
              url={featuredInstagramUrl}
              title="Clinic Experience Reel"
            />
          </div>
          {/* <div className="glass-card absolute -bottom-4 -left-4 hidden rounded-[1rem] p-4 shadow-lg md:-bottom-6 md:-left-6 md:block md:p-6">
            <p className="font-display text-[24px] font-medium leading-[1.3] text-[#492e3b] md:text-[28px]">
              99%
            </p>
            <p className="text-[11px] font-semibold leading-[1] tracking-[0.08em] text-[#4e4448] md:text-[12px]">
              Success Rate
            </p>
          </div> */}
        </div>

      </div>
    </section>
  );
}
