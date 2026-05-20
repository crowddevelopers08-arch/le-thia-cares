'use client';
import { useEffect, useState } from 'react';

export function WaveText({ children }: { children: string }) {
  const [count, setCount] = useState(0);
  const [gen, setGen] = useState(0);
  const chars = children.split('');

  useEffect(() => {
    const complete = count === chars.length;
    const t = setTimeout(() => {
      if (complete) {
        setCount(0);
        setGen(g => g + 1);
      } else {
        setCount(c => c + 1);
      }
    }, complete ? 1000 : 45);
    return () => clearTimeout(t);
  }, [count, chars.length]);

  return (
    <>
      {chars.map((char, i) => (
        <span
          key={`${gen}-${i}`}
          className={i < count ? 'letter-fire' : ''}
          style={{ display: 'inline-block', opacity: i < count ? 1 : 0 }}
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </>
  );
}
