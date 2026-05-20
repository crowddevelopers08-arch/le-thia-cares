'use client';
import Image from 'next/image';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { useState, useEffect, useRef } from 'react';

const offerImages = [
  { src: '/1st.png', alt: 'Ice & Fire Facial – ₹5499' },
  { src: '/2nd.png', alt: 'Red Carpet Peel – ₹4499' },
  { src: '/3rd.png', alt: 'Hydra Facial + Skin Polishing + Peel – ₹4999' },
  { src: '/4th.png', alt: 'Gfc pro+ Derma pen – ₹4999' },
];

const SIX_DAYS_MS = 6 * 24 * 60 * 60 * 1000;
const REFERENCE = new Date('2026-01-01T00:00:00').getTime();

function getRollingTarget() {
  const now = Date.now();
  const elapsed = now - REFERENCE;
  const cycle = Math.floor(elapsed / SIX_DAYS_MS);
  return new Date(REFERENCE + (cycle + 1) * SIX_DAYS_MS);
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

const OFFER_WORDS = ['🔥', 'Offer', 'Ends', 'Soon!'];

function OfferLabel() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < OFFER_WORDS.length) {
      const t = setTimeout(() => setVisibleCount(c => c + 1), 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisibleCount(0), 1800);
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0px 0px #492e3b55, 0 4px 20px #492e3b33; }
          50%       { box-shadow: 0 0 18px 6px #492e3b44, 0 4px 28px #492e3b55; }
        }
        .offer-badge { animation: pulse-glow 2s ease-in-out infinite; }
      `}</style>
      <div
        className="offer-badge flex items-center gap-2 sm:gap-3 rounded-full px-5 py-2.5 sm:px-7 sm:py-3"
        style={{ background: 'linear-gradient(135deg, #492e3b 0%, #6b3f50 100%)' }}
      >
        {OFFER_WORDS.map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? 'translateY(0px) scale(1)' : 'translateY(12px) scale(0.85)',
              transition: 'opacity 0.4s cubic-bezier(0.34,1.56,0.64,1), transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
              fontSize: i === 0 ? '22px' : undefined,
            }}
            className={
              i === 0
                ? 'leading-none'
                : 'text-[15px] sm:text-[17px] font-extrabold tracking-[0.14em] text-white uppercase drop-shadow-sm'
            }
          >
            {word}
          </span>
        ))}
      </div>
    </>
  );
}

function CountdownTimer() {
  const target = useRef(getRollingTarget());
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calc() {
      const now = Date.now();
      if (now >= target.current.getTime()) {
        target.current = getRollingTarget();
      }
      const diff = target.current.getTime() - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days',    value: timeLeft.days },
    { label: 'Hours',   value: timeLeft.hours },
    { label: 'Mins',    value: timeLeft.minutes },
    { label: 'Secs',    value: timeLeft.seconds },
  ];

  return (
    <div className="mb-8 md:mb-10 lg:mb-14 flex flex-col items-center gap-3">
      <OfferLabel />
      <div className="flex items-center gap-2 sm:gap-3">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-2 sm:gap-3">
            <div className="flex flex-col items-center">
              <div className="w-14 sm:w-16 md:w-[72px] rounded-lg bg-[#492e3b] py-2 sm:py-3 text-center shadow-md">
                <span className="block text-xl sm:text-2xl md:text-3xl font-bold tabular-nums text-white leading-none">
                  {pad(u.value)}
                </span>
              </div>
              <span className="mt-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] text-[#71594e] uppercase">
                {u.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="mb-4 text-xl sm:text-2xl font-bold text-[#492e3b]">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const CINEMATIC_CSS = `
  @keyframes shimmer-sweep {
    0%   { transform: translateX(-120%) skewX(-18deg); opacity: 0; }
    15%  { opacity: 1; }
    85%  { opacity: 1; }
    100% { transform: translateX(320%) skewX(-18deg); opacity: 0; }
  }
  @keyframes border-cinema {
    0%, 100% { opacity: 0.3; }
    40%, 60% { opacity: 1; }
  }
  @keyframes dot-blink {
    0%, 100% { opacity: 0.25; transform: scale(0.85); }
    50%       { opacity: 1;    transform: scale(1.15); }
  }
  .cinema-shimmer {
    animation: shimmer-sweep 1.1s ease-in-out forwards;
  }
  .cinema-border {
    animation: border-cinema 1.1s ease-in-out forwards;
  }
`;

function OfferCardsGrid() {
  const [activeCard, setActiveCard] = useState(0);
  const [shimmerKey, setShimmerKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveCard(prev => (prev + 1) % offerImages.length);
      setShimmerKey(k => k + 1);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{CINEMATIC_CSS}</style>
      <div className="mx-auto mb-8 grid max-w-[1280px] grid-cols-2 gap-4 md:grid-cols-4 md:mb-10 md:gap-6 lg:mb-14 lg:gap-8">
        {offerImages.map((img, index) => {
          const isActive = index === activeCard;
          return (
            <div
              key={index}
              style={{
                position: 'relative',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                transform: isActive ? 'scale(1.055)' : 'scale(1)',
                filter: isActive ? 'brightness(1.10)' : 'brightness(0.80)',
                transition: 'transform 0.55s cubic-bezier(0.34,1.28,0.64,1), filter 0.55s ease',
                zIndex: isActive ? 2 : 1,
                outline: isActive ? '2.5px solid rgba(255,220,160,0.85)' : '2.5px solid transparent',
              }}
            >
              {/* Cinematic shimmer sweep overlay */}
              {isActive && (
                <div
                  key={shimmerKey}
                  className="cinema-shimmer"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 10,
                    pointerEvents: 'none',
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.38) 50%, transparent 70%)',
                  }}
                />
              )}

              {/* Dot indicator at bottom */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: 5,
                  zIndex: 20,
                  pointerEvents: 'none',
                }}
              >
                {offerImages.map((_, di) => (
                  <span
                    key={di}
                    style={{
                      display: 'block',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: di === activeCard ? '#ffd89b' : 'rgba(255,255,255,0.45)',
                      animation: di === activeCard ? 'dot-blink 1.1s ease-in-out infinite' : 'none',
                      transition: 'background 0.4s ease',
                    }}
                  />
                ))}
              </div>

              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export function OffersSection() {
  return (
    <section id="services-offers" className="bg-[#efeeec] px-4 py-10 sm:px-6 md:px-[80px] md:py-14 lg:py-20 xl:py-24">

      <AnimateOnScroll animation="fade-down" className="mx-auto mb-8 max-w-[1280px] text-center md:mb-10">
        <h2 className="font-display text-[28px] font-medium leading-[1.2] text-[#1a1c1b] sm:text-[32px] md:text-[40px] lg:text-[48px]">
          Exclusive Treatment Packages
        </h2>
      </AnimateOnScroll>

      <div className="mx-auto max-w-[1280px] flex justify-center">
        <CountdownTimer />
      </div>

      <AnimateOnScroll animation="fade-up" delay={150}>
        <OfferCardsGrid />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={300} className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <a href="#consultation" className="btn-primary w-full rounded-[0.5rem] bg-[#492e3b] px-10 py-4 text-center text-[12px] font-semibold tracking-[0.08em] text-white sm:w-auto">
          BOOK YOUR APPOINTMENT
        </a>
        <a href="tel:+918088009898" className="btn-outline flex w-full items-center justify-center gap-2 rounded-[0.5rem] border-2 border-[#71594e] px-10 py-4 text-[12px] font-semibold tracking-[0.08em] text-[#71594e] hover:bg-[#71594e] hover:text-white sm:w-auto">
          <span className="material-symbols-outlined text-sm">call</span>
          CALL NOW
        </a>
      </AnimateOnScroll>

    </section>
  );
}
